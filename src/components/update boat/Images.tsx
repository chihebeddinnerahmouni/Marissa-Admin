import { useTranslation } from "react-i18next";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useState } from "react";
import UpdateImages from "./UpdateImages";

const Images = ({ images }: any) => {
    
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
// console.log(images);


  return (
    <div className="w-full p-4 bg-white mt-5 rounded-10 shadow-sm relative">
      <p className="font-bold">{t("images")}</p>
      <div className="grid grid-cols-3 gap-4 mt-3">
        {images.map((image: any, index: number) => (
          <img
            key={index}
            src={image.url}
            alt={`Boat image ${index + 1}`}
            className="w-full h-[70px] object-cover object-center rounded md:h-[105px]"
          />
        ))}
      </div>
      <div
        className={`absolute top-1 flex gap-2 ${
          i18n.language === "ar" ? "left-2" : "right-2"
        }`}
      >
        <button onClick={() => setIsOpen(!isOpen)}>
          <HiOutlineDotsHorizontal className="text-writingGrey text-[30px]" />
        </button>
          </div>
          
          {isOpen && <UpdateImages setIsOpen={setIsOpen} images={images} />} 

    </div>
  );
};


export default Images;
   
      