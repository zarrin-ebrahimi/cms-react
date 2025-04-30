import React, {useEffect, useState} from 'react'

export default function AddProduct() {
    const [image, setImage] = useState('')
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [model, setModel] = useState("");
    const [condition, setCondition] = useState("");
    const [performance, setPerformance] = useState("");
    const [count, setCount] = useState("") 
    
    const newProductInfos = {
      title ,
      description, 
      price,
      model,
      condition,
      performance,
      count,
      image,
}
    const addNewProduct = (e) =>{
          e.preventDefault()
console.log(newProductInfos);
          
          fetch('http://localhost:4000/products', {
            method: 'POST' ,
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newProductInfos)
          }).then(res => res.json())
            .then(result => console.log(result))
    }
  return (
    <div className="bg-green-300/15 mt-3 rounded-sm  h-[calc(100vh-80px)] ">
    <form
      className=" p-3 rounded-md  flex flex-col  items-center h-full ">
      <span className="font-bold text-xl">Add New Product</span>
      <div className="flex flex-col gap-y-2 w-full mt-3 ">
        <label className="text-xs">Name</label>
        <input
          value={title}
          placeholder='Product Name'
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="bg-white rounded h-10 shadow-sm p-1"
        />
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col">
            <label className="text-xs tracking-wider pb-1">Price</label>
            <input
              value={price}
              placeholder='Enter The Price '
              onChange={(e) => setPrice(e.target.value)}
              type="text"
              className="bg-white rounded h-10 shadow-sm p-1"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs tracking-wider pb-1">Condition</label>
            <input
              placeholder='Enter Condition '
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
              type="text"
              className="bg-white rounded h-10 shadow-sm p-1"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs tracking-wider pb-1">Model</label>
            <input
              placeholder='Enter Model'
              value={model}
              onChange={(e) => setModel(e.target.value)}
              type="text"
              className="bg-white rounded h-10 shadow-sm p-1"
            />
          </div>
          
          <div className="flex flex-col">
            <label className="text-xs tracking-wider pb-1">Performance</label>
            <input
               placeholder='Enter Performancr'
              onChange={(e) => setPerformance(e.target.value)}
              value={performance}
              type="text"
              className="bg-white rounded h-10 shadow-sm p-1"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs tracking-wider pb-1">Image</label>
            <input
              onChange={(e) =>{
                const file = e.target.files[0]
                if(file){
                  setImage(file.name)
                } 
              }
               }
              // value={imgName}
              type="file"
              className="bg-white rounded h-10 shadow-sm p-1"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs tracking-wider pb-1">Count</label>
            <input
              placeholder='Enter Count Of Product'
              onChange={(e) => setCount(e.target.value)}
              value={count}
              type="text"
              className="bg-white rounded h-10 shadow-sm p-1"
            />
          </div>
        </div>
        <label className="text-xs">Description</label>
        <textarea
          placeholder='Write here'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          className="bg-white rounded shadow-sm p-1 h-40 resize-none"
        />
      </div>
      <div className="mt-8">

        <button
          type="submit"
          onClick={addNewProduct}
          className="cursor-pointer border  bg-gray-900 text-white py-1 px-10 rounded"
        >
          Add
        </button>
      </div>
    </form>
  </div>
  )
}
