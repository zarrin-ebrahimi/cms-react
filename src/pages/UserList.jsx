import { useState, useEffect, useCallback } from "react";
import * as Icon from "@mui/icons-material";
import DeleteModal from "../components/modals/DeleteModal";
import { useDeleteModal } from "../hooks/useDeleteModal";
import UserFormModal from "../components/modals/UserFormModal";

export default function UserList() {
  const [userDatas, setUserDatas] = useState([]);
  const [showUpdateUserModal, setShowUpdateUserModal] = useState(false);
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const getAllUsers = useCallback(() => {
    fetch("http://localhost:4000/users")
      .then((res) => res.json())
      .then((users) => setUserDatas(users))
      .catch((error) => console.error("Error fetching users", error));
  }, []);

  const handleUpdateUser = (updatedUser) => {
    fetch(`http://localhost:4000/users/${updatedUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then(() => {
        // setUserInfo(data)
        setShowUpdateUserModal(false);
        getAllUsers();
      })
      .catch((err) => console.error("Update failed", err));
  };

  const deleteUserById = async (id) => {
    await fetch(`http://localhost:4000/users/${id}`, {
      method: "DELETE",
    });
    getAllUsers(handleUpdateUser);
  };

  const handleAddNewUser = (newUser) =>{ 
        const defaultUserInfo = {
          ...newUser, 
          img:"images/icons8-user-32.png", 
          status: "active", 
          transaction: 0
        }
        fetch('http://localhost:4000/users', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(defaultUserInfo)
        }).then(res =>res.json())
          .then(()=>{
            setShowAddUserModal(false)
            getAllUsers()
          })
          .catch((err)=> console.error('Error add user', err))
  }

  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

  const { isOpenModal, openModal, closeModal, confirmDelete } = useDeleteModal(deleteUserById);

  return (
    <div className="bg-green-300/15 mt-3 rounded-md shadow-md p-3 relative">
      <DeleteModal
        open={isOpenModal}
        title={"Are you sure to delete this user?"}
        onClose={closeModal}
        onConfirm={confirmDelete}
      />
      {showUpdateUserModal && (
        <UserFormModal
          user={userInfo}
          onSubmit={handleUpdateUser}
          onClose={() => setShowUpdateUserModal(false)}
          mode="update"
        />
      )}
      {showAddUserModal && (
        <UserFormModal
          user={{name: {firstname: '', lastname: ''}}}
          onSubmit={handleAddNewUser}
          onClose={() => setShowAddUserModal(false)}
          mode="add"
        />
      )}
      <div className="flex justify-between">
        <span className="text-xl ">Users List</span>
        <button
          type="button"
          className="bg-gray-800 text-white px-2.5  rounded-sm py-1  cursor-pointer"
          onClick={()=> setShowAddUserModal(true)}
        >
          Add New User
        </button>
      </div>
      <ul className="w-full mt-3 flex flex-col">
        {userDatas.map((user) => (
          <li
            key={user.id}
            className="grid grid-cols-6 items-center hover:bg-green-300/15 bg-white border-1 border-gray-100 p-3"
          >
            <div className="flex gap-x-3 items-center col-span-2">
              <img src={user.img} alt="" className="w-12" />
              <div className="flex flex-col text-sm tracking-wide">
                <span>{user.username}</span>
                <span className="text-gray-400">{user.email}</span>
              </div>
            </div>
            <span>{user.phone}</span>
            <span>{user.status}</span>
            <span>{user.password}</span>
            <div className="flex gap-2 items-center justify-center w-full">
              <button
                type="button"
                onClick={() => openModal(user.id)}
                className="pb-2 rounded cursor-pointer"
              >
                <Icon.HighlightOff className="m-1 " />
              </button>
              <button
                type="button"
                onClick={() => {
                  setUserInfo(user);
                  setShowUpdateUserModal(true);
                }}
                className="pb-2 rounded"
              >
                <Icon.BorderColor className="m-1 " />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
