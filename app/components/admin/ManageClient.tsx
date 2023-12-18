"use client";

import firebaseApp from "@/libs/firebase";
import Button from "@mui/material/Button";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Product } from "@prisma/client";
import axios from "axios";
import { deleteObject, getStorage, ref } from "firebase/storage";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { toast } from "react-hot-toast";

interface ManageClientProps {
  products: Product[];
}

const ManageClient: React.FC<ManageClientProps> = ({ products }) => {
  const storage = getStorage(firebaseApp);
  const router = useRouter();
  let rows: any = [];

  if (products) {
    rows = products.map((product) => {
      return {
        id: product.id,
        name: product.name,
        price: product.price,
        category: product.category,
        brand: product.brand,
        inStock: product.inStock,
        image: product.image,
      };
    });
  }

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 250 },
    { field: "name", headerName: "Name", width: 170 },
    { field: "price", headerName: "Price", width: 130 },
    { field: "category", headerName: "Category", width: 130 },
    {
      field: "brand",
      headerName: "Brand",
      width: 130,
    },
    {
      field: "inStock",
      headerName: "Brand",
      width: 100,
      renderCell: (params) => {
        return (
          <div>{params.row.inStock == true ? "In Stock" : "Out of Stock"}</div>
        );
      },
    },
    {
      field: "Actions",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => {
        return (
          <Button
            onClick={() => handleDelete(params.row.id, params.row.image)}
            variant="outlined"
            color="error"
          >
            Delete
          </Button>
        );
      },
    },
  ];

  const handleDelete = useCallback(async (id: string, image: any) => {
    toast.success("Please wait for the deletion process...");
    const handleDeleteImg = async () => {
      try {
        const imageRef = ref(storage, image);
        await deleteObject(imageRef);
      } catch (error) {
        return console.log("An error occurred", error);
      }
    };
    await handleDeleteImg();

    axios
      .delete(`/api/product/${id}`)
      .then(() => {
        toast.success("Deletion process successful");
        router.refresh();
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default ManageClient;
