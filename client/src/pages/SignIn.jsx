import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signInStart, signInFailure, signInSuccess } from "../redux/user/userSlice";
import { useSelector } from "react-redux";
import OAuth from "../components/OAuth.jsx"


const SignIn = () => {

  const [formData, setFormData] = useState({});
 const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Use dispatch to update the store

  const handleChange =  (e) => {
    setFormData({...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signInStart(e));
      const res = await fetch("/api/auth/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();
      console.log(data);


      if(data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }

      dispatch(signInSuccess(data.message));
      navigate("/"); // Redirect to home page after successful signup

    } catch (error) {
      dispatch(signInFailure(error.message));
    }
    
   
  };

  console.log(formData);



  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-4xl font-semibold text-center my-7">Sign In</h1>

      <form className="flex flex-col gap-4 " onSubmit={handleSubmit}>
        <input type="text" placeholder="Email" className="border p-3 rounded-lg" id="email" onChange={handleChange}/> 
        <input type="text" placeholder="Password" className="border p-3 rounded-lg" id="password" onChange={handleChange}/> 

        <button disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          {loading ? "Loading..." : "Sign In"}
        </button>
        <OAuth />
      </form>
      <div className="flex gap-2 mt-5">
        <p>Do not have an account?</p>
        <Link to="/sign-up">
          <span className="text-blue-700">Sign Up</span>
        </Link>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  )
}

export default SignIn;
