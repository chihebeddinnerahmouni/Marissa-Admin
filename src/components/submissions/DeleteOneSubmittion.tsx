import ReactModal from "react-modal";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";


interface DeleteModalProps {
  setClose: (isOpen: number) => void;
  user: any;
}
ReactModal.setAppElement("#root");

const DeleteOneSubmittion: React.FC<DeleteModalProps> = ({
  setClose,
  user,
}) => {
  // console.log(user);

  return (
    <ReactModal
      isOpen={true}
      onRequestClose={() => setClose(0)}
      className={" bg-white rounded-lg p-4 shadow-hardShadow lg:p-6"}
      overlayClassName={
        "fixed bg-black bg-opacity-10 backdrop-blur-[7px] inset-0 flex items-center justify-center mt-[60px] lg:mt-[80px]"
      }
    >
      <img
        src={user.user.image}
        className="w-20 h-20 rounded-full mx-auto object-cover object-center lg:w-24 lg:h-24"
        alt="profile picture"
      />

      <h1 className="text-2xl font-bold text-center mt-4 lg:text-3xl">
        {user.name}
      </h1>
      <p className="text-gray-500 text-center mt-1 lg:text-lg">
        Do you want to <strong className="text-red-400">delete</strong> the
        submission of <strong>{user.user.name}</strong>
      </p>

      <div className="buttons flex w-full mt-7 gap-2">
        <button
          className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-lg"
          onClick={(e) => {
            e.stopPropagation();
            setClose(0);
          }}
        >
          Cancel
        </button>
        <button
          className="w-full bg-red-500 text-white px-4 py-2 rounded-lg flex items-center justify-center"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <DeleteIcon />
          <span>Delete</span>
        </button>
      </div>
    </ReactModal>
  );
};

export default DeleteOneSubmittion;
