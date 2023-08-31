import Image from "next/image";
import { Input } from "../common/Input";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ButtonType, PrimaryButton } from "../common/PrimaryButton";
import { useAuthLoginMutation } from "@/graphql/generated/schema";
import Cookies from "universal-cookie";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import { Loader } from "../common/Loader";
interface FormValues {
  userName: string;
  password: string;
}

const FormSchema = yup.object().shape({
  userName: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});
export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(FormSchema) });
  const [login, { loading: userLoading }] = useAuthLoginMutation();
  const cookies = new Cookies();
  const router = useRouter();
  const submitHandler: SubmitHandler<FormValues> = async (data) => {
    const result = await login({
      variables: {
        input: {
          userName: data.userName,
          password: data.password,
        },
      },
    });
    const response = result.data?.authLogin;
    if (response?.user) {
      cookies.set("token", response.token);
      router.push("/");
    }
    if (response?.error) {
      toast.error(response?.error?.message);
    }
  };
  return (
    <div className="absolute flex flex-col items-center justify-center w-full h-full p-10 lg:flex-row">
      <div className="flex-[.8] flex flex-col items-center w-full">
        <div className="flex flex-col gap-10 text-left">
          <Image src="/logo.png" width={200} height={200} alt="logo" />
          <h1 className="text-3xl font-bold lg:text-5xl">Welcome Back!</h1>
          <h3 className="text-xl font-semibold">Watch. Improve. Achieve.</h3>
        </div>
      </div>
      <div className="flex-[1] flex flex-col items-center">
        <div className="flex flex-col gap-6 text-left">
          <h2 className="text-xl font-bold lg:text-3xl">
            Log in to your account
          </h2>
          <span>Welcome back! Please enter your details</span>
          <form
            className="flex flex-col gap-6"
            onSubmit={handleSubmit(submitHandler)}
          >
            <Input
              label="Username"
              name="userName"
              type="text"
              register={register}
              error={errors.userName?.message}
            />
            <Input
              label="Password"
              name="password"
              type="password"
              register={register}
              error={errors.password?.message}
            />
            <PrimaryButton label="Submit" type={ButtonType.submit} />
          </form>
          <Toaster />
          {userLoading && <Loader />}
        </div>
      </div>
    </div>
  );
};
