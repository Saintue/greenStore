import {NavLink} from "react-router-dom";
import {SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";
import toast from "react-hot-toast";
import {SignIn} from "../interfaces/SignIn.ts";
import {useAuthStore} from "../stores/authStore.ts";

function SignInPage() {
    const authStore = useAuthStore(state => state)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignIn>({});
    const submit: SubmitHandler<SignIn> = (data) => {
                    toast.promise(authStore.login(data.email, data.password),{
                    loading: 'Loading',
                    success: 'Sign in success',
                    error: 'Failed signing in',
                })
    };
    const error: SubmitErrorHandler<SignIn> = () => {
        toast.error("Failed signing in");
    };

return (
  <div className="flex relative h-full w-full bg-[url(./assets/6.png)] bg-no-repeat bg-cover justify-center items-start">
    <div className="md:rounded-[24px] md:border border-[#54755A] w-full max-w-[562px] flex justify-center flex-col bg-white md:my-5">
      <h1 className="text-[31px] font-balsamiq py-3 md:rounded-t-[22px] text-white md:text-4xl bg-[#54755A] text-center">
        Sign in
      </h1>
      <form
        className="space-y-4 md:space-y-6 my-6 mx-10"
        onSubmit={handleSubmit(submit, error)}
      >
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-[28px] font-medium text-black"
          >
            Your email
          </label>
          <input
            type={"text"}
            {...register("email", {
              required: "this field is required",
            })}
            className={`bg-gray-50 border-2 border-[#D3D1C1] text-gray-900 text-[28px] rounded-[25px] focus:ring-primary-600 focus:border-primary-600 block h-[72px] w-full p-2.5`}
            placeholder="name@company.com"
            maxLength={40}
          />
          {errors.email ? (
            <p className={"pl-1 pt-1 text-red-600"}>{errors.email.message}</p>
          ) : (
            false
          )}
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-[28px] font-medium text-black"
          >
            Password
          </label>
          <input
            type={"password"}
            {...register("password", { required: "this field is required" })}
            placeholder="••••••••"
            maxLength={40}
            className="bg-gray-50 border-2 border-[#D3D1C1] text-gray-900 text-[28px] rounded-[25px] focus:ring-primary-600 focus:border-primary-600 block h-[72px] w-full p-2.5"
          />
          {errors.password ? (
            <p className={"pl-1 pt-1 text-red-600"}>
              {errors.password.message}
            </p>
          ) : (
            false
          )}
        </div>
          <div className="flex w-full justify-center">
        <button
          type="submit"
          className="w-full border-2 font-balsamiq text-[25px] border-[black] max-w-[300px] h-[60px] text-white bg-[#54755A] focus:ring-4 focus:outline-none font-medium rounded-[30px] text-sm px-5 py-2.5 text-center"
        >
          Sign in
        </button>
          </div>
        <p className="text-[18px] font-medium text-black text-center">
          Dont have an account?{" "}
          <NavLink
            to="/greenStore/signup"
            className={
              "font-medium text-[#525E3C] hover:underline"
            }
          >
            Register here
          </NavLink>
        </p>
      </form>
    </div>
  </div>
);


        }

        export default SignInPage;
