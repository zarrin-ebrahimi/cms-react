import { useState } from "react"; 

export function useDeleteModal(onDeleteCallBack){
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [targetId, setTargetId] = useState(null)

    const openModal = (id) =>{
        setTargetId(id)
        setIsOpenModal(true)
    }

    const closeModal = () =>{
        setTargetId(null)
        setIsOpenModal(false)
    }

    const confirmDelete = () =>{
        if(targetId){
            onDeleteCallBack(targetId) 
            closeModal()
        }
    }

    return {
        isOpenModal ,
        targetId,
        openModal,
        closeModal, 
        confirmDelete
    }
}