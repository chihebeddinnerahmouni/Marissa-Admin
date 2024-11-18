import ReactModal from "react-modal";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";

interface UpdatePricesProps {
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddCategoryModal: React.FC<UpdatePricesProps> = ({ setClose }) => {
  const { t } = useTranslation();
  const [engName, setEngName] = useState("");
  const [arName, setArName] = useState("");
  const mainColor = "#FF385C";

  const handleContinue = () => {
    // const formData = new FormData();
    // formData.append("title", engName);
    // axios
    //   .put(`${url}/api/listing/listings/${myBoatId}`, formData, {
    //     headers: {
    //       Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    //     },
    //   })
    //   .then(() => {
    //     Swal.fire({
    //       title: t("great"),
    //       text: t("prices_updated_successfully"),
    //       icon: "success",
    //       timer: 2000,
    //       showConfirmButton: false,
    //       timerProgressBar: true,
    //       customClass: {
    //         confirmButton: "custom-confirm-button",
    //       },
    //     });
    //     setClose(false);
    //     window.location.reload();
    //   })
    //   .catch(() => {
    //     Swal.fire({
    //       title: t("oops"),
    //       text: t("something_went_wrong_try_again"),
    //       icon: "error",
    //       timer: 2000,
    //       timerProgressBar: true,
    //       customClass: {
    //         confirmButton: "custom-confirm-button",
    //       },
    //     });
    //   });
  };

  return (
    <ReactModal
      isOpen={true}
      onRequestClose={() => setClose(false)}
      className="flex flex-col items-center justify-center w-full bg-white p-3 rounded-10 shadow-hardShadow md:w-[500px]"
      overlayClassName="fixed inset-0 py-20 backdrop-blur-[7px] bg-opacity-20 bg-black z-20 flex items-center justify-center px-4 mt-[60px] lg:mt-[80px]"
    >
      <p className="mb-5 text-[25px] font-bold">{t("add_category")}</p>

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
