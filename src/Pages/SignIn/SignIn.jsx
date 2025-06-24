import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import google from "../../assets/images/google.png";
import { useForm } from "react-hook-form";

import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";

const SignIn = () => {

  const { signIn , continueWithGoogle} = useContext(AuthContext);
  const {register,handleSubmit,
formState: { errors },reset,} = useForm();

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/"

  const handleLogIn = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast.success("Login Successfully Done");

        reset();
         navigate(from,{replace:true});
      })

      .catch((error) => {});
  };

  const googleLogin=()=>{
    continueWithGoogle()
    .then (result=>{
      const user = result.user;
      if(user){
        toast.success("Google login Successfully Done")
      }
        navigate("/");
    })
    .catch((error)=>{
      
      toast.error(error.message)
    });
   
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-5xl font-semibold text-primary mb-5 text-center">
          Sign In Now
        </h1>
        <div className="card bg-base-100 w-96 shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit(handleLogIn)} className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                })}
                className="input"
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
              <label className="label">Password</label>
              <input
                {...register("password", {
                  required: "Password is required",
                })}
                type="password"
                className="input"
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
              <div>
                <a className="link link-hover">
                  New to Website?
                  <Link className="text-primary" to="/sign-up">
                    Create an Account
                  </Link>
                </a>
              </div>
              <input
                type="submit"
                value="Sign In"
                className="btn btn-primary mt-4 text-secondary"
              />
            </form>

            <button 
            onClick={googleLogin}
            className="btn btn-primary mt-4 text-secondary">
              <img className="w-8 h-8" src={google} alt="google" />
              Continue With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
