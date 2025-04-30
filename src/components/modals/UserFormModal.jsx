import React,{useState, useEffect} from 'react'


export default function UserFormModal({user = {}, onClose, onSubmit, mode=""}) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
  
    useEffect(()=>{
      if(user){
        setUsername(user.username || "")
        setEmail(user.email || "")
        setPhone(user.phone || "")
        setPassword(user.password || "")
        setFirstname(user.name?.firstname || "")
        setLastname(user.name?.lastname || "")
      }
    }, [user])


    const handleUpdateUserBtn = (e) =>{
     e.preventDefault()
     const updatedUser = {
       ... user ,
       username,
       email,
       phone,
       password,
       name:{
        firstname,
        lastname
       } 
     }
     onSubmit(updatedUser)
    }
  
  return (
    <div className="fixed inset-0 bg-gray-800/30 bg-opacity-50 flex justify-center items-center z-50 ">
    <form
      className="bg-gradient-to-bl from-[#ffe4e6] to-[#ccfbf1] p-4 rounded-md  flex flex-col  
      items-center w-2/6"
    >
     
      <span className="font-bold text-xl">{mode === 'update' ? 'Update User' : 'Add New User'}</span>
     
      <div className="flex flex-col gap-y-2 w-full mt-3 ">
        <label className="text-xs">Username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          className="bg-white rounded h-10 shadow-sm p-1"
        />
       
          <div className="flex flex-col">
            <label className="text-xs tracking-wider pb-1">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="bg-white rounded h-10 shadow-sm p-1"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs tracking-wider pb-1">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              className="bg-white rounded h-10 shadow-sm p-1"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs tracking-wider pb-1">Phone</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              className="bg-white rounded h-10 shadow-sm p-1"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs tracking-wider pb-1">Name</label>
            <input
              onChange={(e) => setFirstname(e.target.value)}
              value={firstname}
              type="text"
              className="bg-white rounded h-10 shadow-sm p-1"
            />
          </div>
       
        <label className="text-xs">Lastname</label>
        <input
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          type="text"
          className="bg-white rounded shadow-sm p-1 h-10"
        />
      </div>
      <div className="grid grid-cols-2 gap-x-3 mt-4">
        <button
          type="button"
          onClick={onClose}
          className="cursor-pointer px-5"
        >
          Cancel
        </button>
        <button
          type="submit"
          onClick={handleUpdateUserBtn}
          className="cursor-pointer border  bg-gray-900 text-white py-1 px-10 rounded"
        >
          {mode === 'update' ? 'Update User' : 'Add'}
        </button>
      </div>
    </form>
  </div>
  )
}
