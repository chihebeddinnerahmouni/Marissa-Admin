// import ReactModal from "react-modal";
// import { useTranslation } from "react-i18next";
// import React, { useState } from "react";
// import TextField from "@mui/material/TextField";
// import axios from "axios";
// import Swal from "sweetalert2";

// interface UpdatePricesProps {
//   setClose: React.Dispatch<React.SetStateAction<boolean>>;
// }

// const AddCategoryModal: React.FC<UpdatePricesProps> = ({ setClose }) => {
//   const { t } = useTranslation();
//   const [engName, setEngName] = useState("");
//   const [arName, setArName] = useState("");
//   const mainColor = "#FF385C";
//   const url = import.meta.env.VITE_SERVER_URL_CATEGORY as string;

//   const handleContinue = () => {

//     axios
//       .put(
//         `${url}/admin/categories/`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("jwt")}`,
//           },
//         }
//       )
//       .then(() => {
//         Swal.fire({
//           title: t("great"),
//           text: t("prices_updated_successfully"),
//           icon: "success",
//           timer: 2000,
//           showConfirmButton: false,
//           timerProgressBar: true,
//           customClass: {
//             confirmButton: "custom-confirm-button",
//           },
//         });
//         setClose(false);
//         window.location.reload();
//       })
//       .catch(() => {
//         Swal.fire({
//           title: t("oops"),
//           text: t("something_went_wrong_try_again"),
//           icon: "error",
//           timer: 2000,
//           timerProgressBar: true,
//           customClass: {
//             confirmButton: "custom-confirm-button",
//           },
//         });
//       });
//   };

//   return (
//     <ReactModal
//       isOpen={true}
//       onRequestClose={() => setClose(false)}
//       className="flex flex-col items-center justify-center w-full bg-white p-3 rounded-10 shadow-hardShadow md:w-[500px]"
//       overlayClassName="fixed inset-0 py-20 backdrop-blur-[7px] bg-opacity-20 bg-black z-20 flex items-center justify-center px-4 mt-[60px] lg:mt-[80px]"
//     >
//       <p className="mb-5 text-[25px] font-bold">{t("add_category")}</p>

//       <TextField
//         label={t("category_name_in_arabic")}
//         value={engName}
//         onChange={(e) => setEngName(e.target.value)}
//         variant="outlined"
//         fullWidth
//         margin="normal"
//         sx={{
//           "& .MuiOutlinedInput-root": {
//             "& fieldset": {
//               borderColor: "grey",
//             },
//             "&:hover fieldset": {
//               borderColor: "grey",
//             },
//             "&.Mui-focused fieldset": {
//               borderColor: mainColor,
//             },
//           },
//           "& .MuiInputLabel-root": {
//             color: "gray",
//           },
//           "& .MuiInputLabel-root.Mui-focused": {
//             color: mainColor,
//           },
//         }}
//       />

//       <TextField
//         label={t("category_name_in_english")}
//         value={arName}
//         onChange={(e) => setArName(e.target.value)}
//         variant="outlined"
//         fullWidth
//         margin="normal"
//         sx={{
//           "& .MuiOutlinedInput-root": {
//             "& fieldset": {
//               borderColor: "grey",
//             },
//             "&:hover fieldset": {
//               borderColor: "grey",
//             },
//             "&.Mui-focused fieldset": {
//               borderColor: mainColor,
//             },
//           },
//           "& .MuiInputLabel-root": {
//             color: "gray",
//           },
//           "& .MuiInputLabel-root.Mui-focused": {
//             color: mainColor,
//           },
//         }}
//       />

//       <button
//         onClick={handleContinue}
//         className="w-full py-2 bg-main text-white rounded-lg shadow-md hover:bg-mainHover transition duration-200 ease-in-out mt-5"
//       >
//         {t("save")}
//       </button>
//     </ReactModal>
//   );
// };


// export default AddCategoryModal;




import ReactModal from "react-modal";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Swal from "sweetalert2";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import PhotoCamera from "@mui/icons-material/PhotoCamera";



interface UpdatePricesProps {
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddCategoryModal: React.FC<UpdatePricesProps> = ({ setClose }) => {
  const { t } = useTranslation();
  const [engName, setEngName] = useState("");
  const [arName, setArName] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const mainColor = "#FF385C";
  const url = import.meta.env.VITE_SERVER_URL_CATEGORY as string;

 const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   if (e.target.files && e.target.files[0]) {
     setImage(e.target.files[0]);
     setImagePreview(URL.createObjectURL(e.target.files[0]));
   }
 };

  const handleContinue = () => {

    if (!engName || !image) return
    const formData = new FormData();
    formData.append("name", engName);

      formData.append("image", image);

    axios
      .put(`${url}/admin/categories/`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: t("great"),
          text: t("prices_updated_successfully"),
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
          timerProgressBar: true,
          customClass: {
            confirmButton: "custom-confirm-button",
          },
        });
        setClose(false);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: t("oops"),
          text: t("something_went_wrong_try_again"),
          icon: "error",
          timer: 2000,
          timerProgressBar: true,
          customClass: {
            confirmButton: "custom-confirm-button",
          },
        });
      });
  };

  return (
    <ReactModal
      isOpen={true}
      onRequestClose={() => setClose(false)}
      className="flex flex-col items-center justify-center w-full bg-white p-3 rounded-10 shadow-hardShadow mx-auto overflow-auto md:w-[500px]"
      overlayClassName="fixed inset-0 py-20 backdrop-blur-[7px] bg-opacity-20 bg-black z-20 flex items-center justify-center px-4 mt-[60px] lg:mt-[80px]"
    >
      <p className="mb-5 text-[25px] font-bold">{t("add_category")}</p>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
        id="icon-button-file"
      />
      <label htmlFor="icon-button-file" className="">
        <IconButton component="span">
          {imagePreview ? (
            <Avatar src={imagePreview} sx={{ width: 106, height: 106 }} />
          ) : (
            <Avatar sx={{ width: 106, height: 106 }}>
              <PhotoCamera />
            </Avatar>
          )}
        </IconButton>
      </label>
      <TextField
        label={t("category_name_in_arabic")}
        value={engName}
        onChange={(e) => setEngName(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "grey",
            },
            "&:hover fieldset": {
              borderColor: "grey",
            },
            "&.Mui-focused fieldset": {
              borderColor: mainColor,
            },
          },
          "& .MuiInputLabel-root": {
            color: "gray",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: mainColor,
          },
        }}
      />

      <TextField
        label={t("category_name_in_english")}
        value={arName}
        onChange={(e) => setArName(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "grey",
            },
            "&:hover fieldset": {
              borderColor: "grey",
            },
            "&.Mui-focused fieldset": {
              borderColor: mainColor,
            },
          },
          "& .MuiInputLabel-root": {
            color: "gray",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: mainColor,
          },
        }}
      />

      <button
        onClick={handleContinue}
        className="w-full py-2 bg-main text-white rounded-lg shadow-md hover:bg-mainHover transition duration-200 ease-in-out mt-5"
      >
        {t("save")}
      </button>
    </ReactModal>
  );
};

export default AddCategoryModal;
