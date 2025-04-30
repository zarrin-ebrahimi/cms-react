import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UpdateProductModal from "../components/modals/UpdateProductModal";

export default function Product() {
  let { id } = useParams();
  const [productInfo, setProductInfo] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:4000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProductInfo(data))
      .catch((err) => console.error("Error fetching product data", err));
  }, [id]);

  const handleUpdateProduct = (updatedProduct) => {
    fetch(`http://localhost:4000/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        setProductInfo(data);
        setShowUpdateModal(false);   
        
      })
      .catch((err) => console.error("Error updating product", err));
  };
  return (
    <>
      {showUpdateModal && productInfo && (
        <UpdateProductModal
          product={productInfo}
          onClose={() => setShowUpdateModal(false)}
          onUpdate={handleUpdateProduct}
        />
      )}
      <div className="  pt-3  ">
        <div className=" gap-x-3  ">
          {productInfo ? (
            <div className="flex bg-green-300/15 p-3 gap-x-6 shadow-sm rounded-md">
              <img src={`/images/${productInfo.image}`} className="w-1/3 rounded" />
              <div className="flex justify-center flex-col gap-y-2">
                <h3 className="  text-4xl">{productInfo.title}</h3>
                <span className="text-gray-400 text-4xl mt-1">
                  ${productInfo.price}
                </span>
                <span>Performance: {productInfo.performance}</span>
                <span>Condition: {productInfo.condition}</span>
                <span>Model: {productInfo.model}</span>
                <span>Active : {productInfo.active ? "Yes" : "No"}</span>
                <span>Count : {productInfo.count}</span>
                <p className="text-gray-500 max-w-[700px] py-1.5">{productInfo.description}</p>

                <div className="bg-gray-900 cursor-pointer p-1 w-32
                 rounded text-white text-center tracking-wide">
                  <button
                    className="cursor-pointer"
                    type="button"
                    onClick={() => setShowUpdateModal(true)}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <p>Product not found</p>
          )}
        </div>
      </div>
    </>
  );
}
