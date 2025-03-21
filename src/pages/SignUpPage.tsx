import {SubmitErrorHandler, useForm} from "react-hook-form";
import {Signup} from "../interfaces/Signup.ts";
import { SubmitHandler } from "react-hook-form";
import ValidationService from "../services/ValidationService.ts";
import toast from "react-hot-toast";
import {Link} from "react-router-dom";
import {useAuthStore} from "../stores/authStore.ts";

function SignUpPage() {
    const authStore = useAuthStore(state => state)
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm<Signup>({});
    const submit: SubmitHandler<Signup> = (data) => {
        toast.promise(authStore.registration(data.email,data.password),{
            loading: 'Loading',
            success: 'Sign up success',
            error: 'Failed sign up',
        })
    };
    const error: SubmitErrorHandler<Signup> = () => {
        toast.error("Error sign up");
    };

    function validatePassword(password: string) {
        return ValidationService.validatePassword(password,getValues().password) || "password missmatch"
    }

    function validateMail(mail: string) {
        return ValidationService.validateMail(mail) || "invalid mail"
    }

    return (
        <div className="flex relative h-full w-full bg-[url(./assets/6.png)] bg-no-repeat bg-cover justify-center items-start">
                    <div className="md:rounded-2xl md:border border-[#54755A] w-full max-w-[400px] flex justify-center flex-col bg-white md:my-5">
                        <h1 className="text-xl py-3 md:rounded-t-[14px] text-white md:text-4xl bg-[#54755A] text-center">
                            Create an account
                        </h1>
                        <form
                            className="space-y-4 md:space-y-6 m-6"
                            onSubmit={handleSubmit(submit, error)}
                        >
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-xl font-medium text-black"
                                >
                                    Your email
                                </label>
                                <input
                                    type={"text"}
                                    {...register("email", {
                                        required: "this field is required",
                                        validate: validateMail,
                                    })}
                                    className={`bg-gray-50 border-2 border-[#D3D1C1] text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
                                    placeholder="name@company.com"
                                    maxLength={40}
                                />
                                {errors.email?<p className={"pl-1 pt-1 text-red-600"}>{errors.email.message}</p>:false}
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-xl font-medium text-black"
                                >
                                    Password
                                </label>
                                <input
                                    type={"password"}
                                    {...register("password", { required: "this field is required", minLength: 6 })}
                                    placeholder="••••••••"
                                    maxLength={40}
                                    className="bg-gray-50 border-2 border-[#D3D1C1] text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                />
                                {errors.password?<p className={"pl-1 pt-1 text-red-600"}>{errors.password.message || "min password length is 6 symbols"}</p>:false}
                            </div>
                            <div>
                                <label
                                    htmlFor="confirm-password"
                                    className="block mb-2 text-xl font-medium text-black"
                                >
                                    Confirm password
                                </label>
                                <input
                                    type={"password"}
                                    {...register("password_confirmation", {
                                        required: "this field is required",
                                        validate: validatePassword,
                                    })}
                                    placeholder="••••••••"
                                    maxLength={40}
                                    className="bg-gray-50 border-2 border-[#D3D1C1] text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                />
                                {errors.password_confirmation?<p className={"pl-1 pt-1 text-red-600"}>{errors.password_confirmation.message}</p>:false}
                            </div>
                            <div className="w-full flex justify-center">
                            <button
                                type="submit"
                                className="w-full border-2 border-[black] max-w-[200px] text-white bg-[#54755A] focus:ring-4 focus:outline-none font-medium rounded-2xl text-sm px-5 py-2.5 text-center"
                            >
                                Create an account
                            </button>
                            </div>
                            <p className="text-sm font-light text-black text-center">
                                Already have an account?{" "}
                                <Link
                                    to="/shopCalculator/signin"
                                    className="font-medium text-[#525E3C] hover:underline"
                                >
                                    Login here
                                </Link>
                            </p>
                        </form>
                </div>

        </div>
    );
}

export default SignUpPage