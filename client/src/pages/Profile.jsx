import { useSelector } from "react-redux";
import { useRef } from "react"

export default function Profile() {

  const fileRef = useRef(null)

  const { currentUser} = useSelector((state) => state.user)
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center">
        Profile
      </h1>

      <form className="flex flex-col gap-5">

        <input type="file" ref={fileRef} hidden accept="image/*"/>
        <img onClick={()=> fileRef.current.click()} className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2" src={currentUser.avatar} alt="" />
        <input  type="text" placeholder="username" id="username" className = "border p-3 rounded-lg"/>
        <input  type="text" placeholder="email" id="email" className = "border p-3 rounded-lg"/>
        <input  type="text" placeholder="password" id="password" className = "border p-3 rounded-lg"/>

        <button className="bg-slate-800 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity:80">
          Update
        </button>

        <button className="bg-green-950 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity:80">
            Create Lising Account
        </button>

        <div className="flex justify-between mt-4">
          <span className="text-red-700 cursor-pointer">
            Delete Account  
          </span>
          <span className="text-red-700 cursor-pointer">
            Sign Out 
          </span>  
        </div>      
      </form>
    </div>
  )
}
