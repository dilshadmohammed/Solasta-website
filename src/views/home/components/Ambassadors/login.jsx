import { useEffect, useState } from "react";

import { Link, json, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import infinityLoader from "../../../../assets/loaders/inifiniy-loader.svg";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required")
    .matches(/.@gmail.com$/, "Email should be a gmail account (@gmail.com)"),
  password: Yup.string()
    .min(4, "Password is too short - should be 4 chars minimum.")
    .required("Password is required"),
});

const LoginView = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => window.scrollTo(0, 0), []);

  const submitForm = async (values) => {
    window.scrollTo(0, 0);
    setIsSubmitting(true);
    try {
      const url = import.meta.env.VITE_API_URL + "/login/";
      const res = await axios.post(url, values);
      if (res.status === 200)
        navigate("/dashboard", { state: res.data.response.data.user.referral_code });
      else throw new Error("Something went wrong");
    } catch (error) {
      console.log("error", error);
      // alert(error.response.data.response.errors);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-full md:pt-20">
        <div className="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-black bg-opacity-75 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
              Hey, Campus Ambassador
            </h1>
            <h1 className="text-xl font-bold leading-tight tracking-tight lg:text-4xl text-white">
              Login Now
            </h1>
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <img src={infinityLoader} alt="loading" />
              </div>
            ) : (
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={LoginSchema}
                onSubmit={submitForm}
              >
                <Form className="space-y-4 md:space-y-6">
                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium  text-white"
                    >
                      Your email
                    </label>
                    <div class="relative">
                      <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg
                          class="w-4 h-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 16"
                        >
                          <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                          <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                        </svg>
                      </div>

                      <Field
                        type="email"
                        name="email"
                        id="email"
                        className=" border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full ps-10 p-2.5 bg-black border-gray-600 placeholder-gray-400 text-white focus:ring-karma-green focus:border-karma-green"
                        placeholder="name@company.com"
                        required=""
                      />
                    </div>
                    <ErrorMessage name="email" component="p" className="text-red-500" />
                  </div>
                  <div>
                    <label
                      for="password"
                      className="block mb-2 text-sm font-medium  text-white"
                    >
                      Password
                    </label>
                    <div class="relative">
                      <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        {/* <svg
                      class="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg> */}
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="w-4 h-4 text-gray-500 dark:text-gray-400"
                        >
                          <path d="M20 12c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5S7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7z" />
                        </svg>
                      </div>
                      <Field
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className=" border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full ps-10 p-2.5 bg-black border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        required=""
                      />
                    </div>
                    <ErrorMessage
                      name="password"
                      component="p"
                      className="text-red-500"
                    />
                  </div>
                  {/* <div className="flex items-center justify-center">
                    <a
                      href="#"
                      className="text-sm font-medium text-primary-600 hover:underline text-primary-500"
                    >
                      Forgot password?
                    </a>
                  </div> */}
                  <button
                    type="submit"
                    className="w-full text-black bg-karma-green hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
                  >
                    Sign in
                  </button>
                  <p className="text-sm font-light  text-gray-400">
                    Not a Campus Ambassador yet?{" "}
                    <a className="font-medium text-primary-600 hover:underline text-primary-500">
                      <Link to="/signup">Sign up</Link>
                    </a>
                  </p>
                </Form>
              </Formik>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginView;
