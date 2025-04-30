export default function DeleteModal({ open, title, onClose, onConfirm }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-gray-800/30 bg-opacity-50 flex justify-center items-center z-50">
      <div
        className="bg-gradient-to-bl from-[#ffe4e6] to-[#ccfbf1] p-3 rounded-md w-72 flex flex-col justify-center 
          items-center ">
        <img
          src="/images/Icons/icons8-trash-64.png"
          alt="trash"
          className="w-10 pb-1"
        />
        <div>
          <span>{title}</span>
          <div className="justify-around flex mt-4">
            <button
              type="button"
              onClick={onClose}
              className="cursor-pointer px-5"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={onConfirm}
              className="cursor-pointer border border-red-400 px-5 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
