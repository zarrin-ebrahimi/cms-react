import { Description } from "@mui/icons-material";
import React, { useState, useEffect } from "react";

export default function UpdateProductModal({ product, onClose, onUpdate }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [model, setModel] = useState("");
  const [condition, setCondition] = useState("");
  const [performance, setPerformance] = useState("");
  const [count, setCount] = useState("")

  useEffect(() => {
    if (product) {
      setTitle(product.title || "");
      setDescription(product.description || "");
      setPrice(product.price || "");
      setModel(product.model || "");
      setCondition(product.condition || "");
      setPerformance(product.performance || "");
      setCount(product.count || "")
    }
  }, [product]);

  const handleUpdateProductBtn = (e) => {
    e.preventDefault();
    const updatedProduct = {
      ...product,
      title,
      description,
      price,
      condition,
      model,
      performance,
      count,
    };
    onUpdate(updatedProduct);
  };

  return (
    <div className="fixed inset-0 bg-gray-800/30 bg-opacity-50 flex justify-center items-center z-50 ">
      <form
        className="bg-gradient-to-bl from-[#ffe4e6] to-[#ccfbf1] p-3 rounded-md  flex flex-col  
        items-center w-1/2"
      >
        <span className="font-bold text-xl">Update Product</span>
        <div className="flex flex-col gap-y-2 w-full mt-3 ">
          <label className="text-xs">Name</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="bg-white rounded h-10 shadow-sm p-1"
          />
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col">
              <label className="text-xs tracking-wider pb-1">Price</label>
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="text"
                className="bg-white rounded h-10 shadow-sm p-1"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs tracking-wider pb-1">Condition</label>
              <input
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                type="text"
                className="bg-white rounded h-10 shadow-sm p-1"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs tracking-wider pb-1">Model</label>
              <input
                value={model}
                onChange={(e) => setModel(e.target.value)}
                type="text"
                className="bg-white rounded h-10 shadow-sm p-1"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs tracking-wider pb-1">Performance</label>
              <input
                onChange={(e) => setPerformance(e.target.value)}
                value={performance}
                type="text"
                className="bg-white rounded h-10 shadow-sm p-1"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs tracking-wider pb-1">Count</label>
              <input
                onChange={(e) => setCount(e.target.value)}
                value={count}
                type="text"
                className="bg-white rounded h-10 shadow-sm p-1"
              />
            </div>
          </div>
          <label className="text-xs">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            className="bg-white rounded shadow-sm p-1 h-40 resize-none"
          />
        </div>
        <div className="grid grid-cols-2 gap-x-3 mt-7">
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer px-5"
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={handleUpdateProductBtn}
            className="cursor-pointer border  bg-gray-900 text-white py-1 px-10 rounded"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
