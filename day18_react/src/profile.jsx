import { useEffect, useState } from "react";


function Profile() {
const [name, setname] = useState('')
const [pass, setpass] = useState('')


localStorage.getItem('Pass')
useEffect(()=>{
 setname(localStorage.getItem('Name'))
    
setpass(localStorage.getItem('Pass'))

},[])


  return           <>
        <div className="flex w-full max-w-fit gap-8  mx-auto pt-[20%]">

        <div className="flex-1 bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">User Profile</h2>
            <form className="space-y-4">
                <div>
                    {/* <label className="block text-gray-300 mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500"/> */}
<p 
// className="block text-black mb-2"
 className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500"

> User Name: {name}</p>

                </div>
                <div>
                    {/* <label className="block text-gray-300 mb-2">Password</label>
                    <input type="password" className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500"/> */}
                </div>
                <div>
                    <p
                     className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    //  className="block text-black mb-2"
                      >Password: {pass}</p>
                    {/* <label className="block text-gray-300 mb-2">OTP</label>
                    <input type="text" className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500"/> */}
                </div>
                {/* <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Login</button> */}
            </form>
        </div>
              </div>
</>
}

export default Profile;
