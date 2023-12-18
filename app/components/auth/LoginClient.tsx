"use client";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import AuthContainer from "../containers/AuthContainer";
import Heading from "../general/Heading";
import Button from "../general/Button";
import { FcGoogle } from "react-icons/fc";
import Input from "../general/Input";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { User } from "@prisma/client";
import { useEffect } from "react";

interface LoginClientProps {
  currentUser: User | null | undefined;
}

const LoginClient: React.FC<LoginClientProps> = ({ currentUser }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      if (callback?.ok) {
        router.push("/cart");
        router.refresh();
        toast.success("Login successful...");
      }
      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  useEffect(() => {
    if (currentUser) {
      router.push("/cart");
      router.refresh();
    }
  }, []);

  return (
    <AuthContainer>
      <div className="w-full md:w-[500px] p-3 shadow-lg rounded-md">
        <Heading text="Login" center />
        <Input
          placeholder="Email"
          type="text"
          id="name"
          register={register}
          errors={errors}
          required
        />
        <Input
          placeholder="Password"
          type="password"
          id="password"
          register={register}
          errors={errors}
          required
        />
        <Button text="Log In" onClick={handleSubmit(onSubmit)} />
        <div className="text-center text-sm text-red-500 my-2">
          If you haven't registered before,{" "}
          <Link className="underline" href="/register">
            click here
          </Link>{" "}
          to register.
        </div>
        <div className="text-center my-2 font-bold text-lg">OR</div>
        <Button
          text="Log In with Google"
          icon={FcGoogle}
          outline
          onClick={() => signIn("google")}
        />
      </div>
    </AuthContainer>
  );
};

export default LoginClient;
