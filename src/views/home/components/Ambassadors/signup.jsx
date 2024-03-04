import { useEffect, useState } from "react";

import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import infinityLoader from "../../../../assets/loaders/inifiniy-loader.svg";

const signUpSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required")
    .matches(/.@gmail.com$/, "Email should be a gmail account (@gmail.com)"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password should be at least 4 characters"),
  college: Yup.string().required("College is required"),
  // phone is exactly 10 digits
  phone: Yup.string().required("Phone is required"),
  // .matches(/^[0-9]{10}$/, {
  //   message: "Phone number should be exactly 10 digits",
  // }),
});

const SignupView = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => window.scrollTo(0, 0), []);

  const submitForm = async (values) => {
    window.scrollTo(0, 0);
    setIsSubmitting(true);
    try {
      const url = import.meta.env.VITE_API_URL + "/register/";
      const res = await axios.post(url, values);
      if (res.status === 201)
        navigate("/dashboard", { state: res.data.response.data.user.referral_code });
      else throw new Error("Something went wrong");
    } catch (error) {
      let erros = error.response.data.response.errors;
      // formate this list of errors to display in an alert
      let errorList = "";
      for (let key in erros) {
        errorList += `${key}: ${erros[key]}\n`;
      }
      alert(errorList);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-black bg-opacity-75 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
              Hey, Campus Ambassador
            </h1>
            <h1 className="text-xl font-bold leading-tight tracking-tight lg:text-4xl text-white">
              SignUp Now
            </h1>
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <img src={infinityLoader} alt="loading" />
              </div>
            ) : (
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  password: "",
                  college: "",
                  phone: "",
                }}
                validationSchema={signUpSchema}
                onSubmit={submitForm}
              >
                <Form className="space-y-4 md:space-y-6">
                  <div>
                    <label
                      for="name"
                      className="block mb-2 text-sm font-medium  text-white"
                    >
                      Your Name
                    </label>
                    <div class="relative">
                      <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="w-4 h-4 text-gray-500 dark:text-gray-400"
                        >
                          <path d="M20.005 5.995h-1v2h1v8h-1v2h1c1.103 0 2-.897 2-2v-8c0-1.102-.898-2-2-2zm-14 4H15v4H6.005z" />
                          <path d="M17.005 17.995V4H20V2h-8v2h3.005v1.995h-11c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h11V20H12v2h8v-2h-2.995v-2.005zm-13-2v-8h11v8h-11z" />
                        </svg>
                      </div>

                      <Field
                        type="name"
                        name="name"
                        id="name"
                        className=" border sm:text-sm rounded-lg block w-full ps-10 p-2.5 bg-black border-gray-600 placeholder-gray-400 text-white focus:ring-karma-green focus:border-karma-green"
                        placeholder="Enter Your Name"
                        required
                      />
                    </div>
                    <ErrorMessage name="name" component="p" className="text-red-500" />
                  </div>
                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium  text-white"
                    >
                      Email
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
                        placeholder="email@gmail.com"
                        required
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
                  <div>
                    <label
                      for="text"
                      className="block mb-2 text-sm font-medium  text-white"
                    >
                      College
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
                          viewBox="0 0 512 512"
                          fill="currentColor"
                          class="w-4 h-4 text-gray-500 dark:text-gray-400"
                        >
                          <path d="M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160v8c0 13.3 10.7 24 24 24h400c13.3 0 24-10.7 24-24v-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8.1-3.4-17.2-3.4-25.2 0zM128 224H64v196.3c-.6.3-1.2.7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512h448c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1V224H384v192h-40V224h-64v192h-48V224h-64v192h-40V224zm128-96c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
                        </svg>
                      </div>

                      <Field
                        type="text"
                        name="college"
                        id="college"
                        className=" border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full ps-10 p-2.5 bg-black border-gray-600 placeholder-gray-400 text-white focus:ring-karma-green focus:border-karma-green"
                        placeholder="Enter Your College"
                        required=""
                      />
                    </div>
                    <ErrorMessage name="college" component="p" className="text-red-500" />
                  </div>
                  <div>
                    <label
                      for="phone"
                      className="block mb-2 text-sm font-medium  text-white"
                    >
                      Phone Number
                    </label>
                    <div class="relative">
                      <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg
                          viewBox="0 0 580 1000"
                          fill="currentColor"
                          class="w-4 h-4 text-gray-500 dark:text-gray-400"
                        >
                          <path d="M480 10c28 0 51.667 9.667 71 29s29 43 29 71v780c0 26.667-9.667 50-29 70s-43 30-71 30H100c-26.667 0-50-10-70-30S0 916.667 0 890V110c0-28 10-51.667 30-71s43.333-29 70-29h380M290 950c20 0 36.667-5 50-15 13.333-10 20-21.667 20-35 0-14.667-6.667-26.667-20-36-13.333-9.333-30-14-50-14-18.667 0-35 5-49 15s-21 21.667-21 35c0 13.333 7 25 21 35s30.333 15 49 15m210-150V140H80v660h420" />
                        </svg>
                      </div>

                      <Field
                        type="tel"
                        name="phone"
                        id="phone"
                        className=" border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full ps-10 p-2.5 bg-black border-gray-600 placeholder-gray-400 text-white focus:ring-karma-green focus:border-karma-green"
                        placeholder="Enter Your Phone Number"
                        required=""
                      />
                    </div>
                    <ErrorMessage name="phone" component="p" className="text-red-500" />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-black bg-karma-green hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
                  >
                    {isSubmitting ? "Pleaes wait" : "Sign Up"}
                  </button>
                </Form>
              </Formik>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupView;
