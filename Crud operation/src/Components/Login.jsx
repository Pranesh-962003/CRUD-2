import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Login = () => {


    const [userName, setUserName] = useState();
    const [pass, setPass] = useState()



  const HandleSubmit = (e) =>{
    e.preventDefault()
  
    axios.post('http://localhost:3003/crud',{userName,pass}).then(result=>{
      console.log(result)
      
    }).then(err=>console.log(err)
    )
  }

  return (


    


    <div className='bg-slate-500 h-screen flex items-center justify-center '>
        <form className='flex flex-col w-1/3 bg-slate-100 border rounded-md shadow-md p-4'>
            <h1 className='text-4xl text-center font-semibold my-3'>Login</h1>
            <label htmlFor="" className='mx-2 text-lg font-medium '>UserName</label>
            <input className='p-1 border border-gray-300 rounded-md outline-none focus:bg-gray-300' type="text" value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
            <label htmlFor="">Password</label>
            <input className='p-1 border border-gray-300 rounded-md outline-none focus:bg-gray-300' type="text" onChange={(e)=>{setPass(e.target.value)}} value={pass}/>
            <div className='mt-5 flex items-center justify-center'>
                <button className='px-6 py-3 bg-black rounded-full text-white' onClick={HandleSubmit}>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Login