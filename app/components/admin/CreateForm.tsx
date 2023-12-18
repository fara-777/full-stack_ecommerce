"use client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import Heading from "../general/Heading";
import Input from "../general/Input";
import Checkbox from "../general/Checkbox";
import { FaComputer } from "react-icons/fa6";
import { GiBallerinaShoes } from "react-icons/gi";
import { FaTabletAlt } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import ChoiseInput from "../general/ChoiseInput";
import { BsHandbagFill } from "react-icons/bs";
import { IoShirt } from "react-icons/io5";
import Button from "../general/Button";
import FileInput from "../general/FileInput";
import { useState } from "react";
import firebaseApp from "@/libs/firebase";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

const CreateForm = () => {
  const [img, setImg] = useState<File | null>(null);
  const router = useRouter();

  const CategoryList = [
    {
      name: "Computer",
      icon: FaComputer,
    },
    {
      name: "Shoes",
      icon: GiBallerinaShoes,
    },
    {
      name: "Tablet",
      icon: FaTabletAlt,
    },
    {
      name: "Phone",
      icon: IoPhonePortraitOutline,
    },
    {
      name: "Bags",
      icon: BsHandbagFill,
    },
    {
      name: "T-Shirt",
      icon: IoShirt,
    },
  ];
  const {
    register,
    reset,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      description: "",
      brand: "",
      category: "",
      price: "",
      image: "",
      inStock: false,
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);

    let uploadedImage;

    const handleChange = async () => {
      toast.success("Upload successful!");
      try {
        const storage = getStorage(firebaseApp);
        const storageRef = ref(storage, "images/shop.jpg");
        const uploadTask = uploadBytesResumable(storageRef, img);

        await new Promise<void>((resolve, reject) => {
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log("Upload is " + progress + "% done");
              switch (snapshot.state) {
                case "paused":
                  console.log("Upload is paused");
                  break;
                case "running":
                  console.log("Upload is running");
                  break;
              }
            },
            (error) => {
              reject(error);
              switch (error.code) {
                case "storage/unauthorized":
                  break;
                case "storage/canceled":
                  break;

                case "storage/unknown":
                  break;
              }
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log("File available at", downloadURL);
                uploadedImage = downloadURL;
                resolve();
              });
            }
          );
        });
      } catch (error) {
        console.log(error);
      }
    };
    await handleChange();

    let newData = { ...data, image: uploadedImage };

    axios
      .post("/api/product/", newData)
      .then(() => {
        toast.success("Product added successfully!");
        router.refresh();
        reset();
      })
      .catch((error) => {
        toast.error("An error occurred");
      });
  };

  const category = watch("category");

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const fileInputFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImg(e.target.files[0]);
    }
  };

  return (
    <div>
      <Heading text="CREATE PRODUCT" center />
      <Input
        placeholder="Name"
        type="text"
        id="name"
        register={register}
        errors={errors}
        required
      />
      <Input
        placeholder="Description"
        type="text"
        id="description"
        register={register}
        errors={errors}
        required
      />
      <Input
        placeholder="Brand"
        type="text"
        id="brand"
        register={register}
        errors={errors}
        required
      />
      <Input
        placeholder="Price"
        type="number"
        id="price"
        register={register}
        errors={errors}
        required
      />
      <Checkbox
        id="inStock"
        label="Is the product in stock?"
        register={register}
      />

      <div className="flex flex-wrap gap-3 cursor-pointer">
        {CategoryList.map((cat) => (
          <ChoiseInput
            key={cat.name}
            icon={cat.icon}
            text={cat.name}
            onClick={(category) => setCustomValue("category", category)}
            selected={category == cat.name}
          />
        ))}
      </div>
      <FileInput
        id="image"
        type="file"
        placeholder="Product Image"
        register={register}
        required
        errors={errors}
        onChange={fileInputFunc}
      />
      <Button text="Create Product" onClick={handleSubmit(onSubmit)} />
    </div>
  );
};

export default CreateForm;
