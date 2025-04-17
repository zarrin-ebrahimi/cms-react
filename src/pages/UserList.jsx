import { useState, useEffect, useCallback } from "react";
import * as Icon from "@mui/icons-material";
import DeleteModal from "../components/modals/DeleteModal";
import SuccessModal from "../components/modals/SuccessModal";

export default function UserList() {
  const [userDatas, setUserDatas] = useState([]);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const fetchUsers = useCallback(async () => {
    const response = await fetch("http://localhost:4000/users");
    const users = await response.json();
    setUserDatas(users);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleConfirmDelete = async () => {
    await fetch(`http://localhost:4000/users/${selectedUserId}`, {
      method: "DELETE",
    });
    setOpenDeleteModal(false);
    setOpenSuccessModal(true);
  };

  const userDelete = (id) => {
    setSelectedUserId(id);
    setOpenDeleteModal(true);
  };

  const handleSuccessModal = () => {
    setOpenSuccessModal(false);
    fetchUsers();
  };
  console.log("openDeleteModal", openDeleteModal);
  console.log("openSuccessModal", openSuccessModal);

  return (
    <div className="bg-green-300/15 mt-3 rounded-md shadow-md p-3 relative">
      <DeleteModal
        open={openDeleteModal}
        title={"Are you sure to delete this user?"}
        onClose={() => setOpenDeleteModal(false)}
        onConfirm={handleConfirmDelete}
      />

      <SuccessModal
        open={openSuccessModal}
        title={"User Removed"}
        onClise={handleSuccessModal}
      />

      <span className="text-xl ">Users List</span>
      <ul className=" w-full mt-3 flex flex-col ">
        {userDatas.map((user) => (
          <li
            key={user.id}
            className="grid grid-cols-6 items-center hover:bg-green-300/15 bg-white border-1 border-gray-100 p-3"
          >
            <div className="flex gap-x-3 items-center col-span-2">
              <img src={user.img} alt="" className="w-12" />
              <div className="flex flex-col text-sm tracking-wide">
                <span className="">{user.username}</span>
                <span className="text-gray-400">{user.email}</span>
              </div>
            </div>
            <span>{user.phone}</span>
            <span>{user.status}</span>
            <span>${user.transaction}</span>
            <div className="flex gap-2 items-center justify-center w-full">
              <button
                type="button"
                onClick={() => userDelete(user.id)}
                className=" pb-2 rounded cursor-pointer "
              >
                <Icon.HighlightOff className="m-1 " />
              </button>
              <button
                type="button"
                onClick={() => console.log("Edit user:", user.id)}
                className=" pb-2 rounded "
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
