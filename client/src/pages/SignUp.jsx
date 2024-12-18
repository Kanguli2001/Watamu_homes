import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import OAuth from "../components/OAuth.jsx"

const SignUp = () => {

  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange =  (e) => {
    setFormData({...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true); // set loading to true
      const res = await fetch("/api/auth/signup",
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
        setLoading(false);
        setError(data.message);
        return;
      }

      setLoading(false);
      setError(null);
      navigate("/sign-in"); // Redirect to sign-in page after successful signup

    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
    
   
  };

  console.log(formData);



  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-4xl font-semibold text-center my-7">Sign up</h1>

      <form className="flex flex-col gap-4 " onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" className="border p-3 rounded-lg" id="username" onChange={handleChange}/> 
        <input type="text" placeholder="Email" className="border p-3 rounded-lg" id="email" onChange={handleChange}/> 
        <input type="text" placeholder="Password" className="border p-3 rounded-lg" id="password" onChange={handleChange}/> 

        <button disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          {loading ? "Loading..." : "Sign Up"}
        </button>
        <OAuth />
      </form>
      <div className="flex gap-2 mt-5">
        <p>Already have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-700">Sign In</span>
        </Link>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  )
}

export default SignUp
