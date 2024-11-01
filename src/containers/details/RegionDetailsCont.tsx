import { useState, useEffect } from "react";
import LoadingLine from "../../components/ui/LoadingLine";
import { FaCloudUploadAlt } from "react-icons/fa";
import PublishButton from "../../components/ui/PublishButton";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const regionJson = {
  id: 1,
  name: "KSA",
  image:
    "https://media.istockphoto.com/id/1248308148/photo/jeddah-corniche-aerial-view-2018.jpg?s=612x612&w=0&k=20&c=fK55MU6RxzClhcx8EsYo6xmwmty3kbzZQnImAvezujE=",
    // "",
};

const RegionDetailsCont = () => {
  const [region, setRegion] = useState<{
    id: number;
    name: string;
    image: string;
  }>({ id: 0, name: "", image: "" });
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const { elements, id } = useParams();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setRegion(regionJson);
      setName(regionJson.name);
      setImage(regionJson.image);
      setLoading(false);
    }, 1000);
  }, [id]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  if (loading) {
    return <LoadingLine />;
  }

  const handlePublish = () => {
    console.log("Published");
  };

  return (
    <div className="pb-5 sectionCss overflow-auto pr-5 flex flex-col justify-between">
      <div className="top">
        <button
          className="lg:hidden"
          onClick={() => navigate(`/structure/${elements}`)}
        >
          <IoIosArrowRoundBack className="text-[18px]" />
        </button>
        <p className="text-[13px] text-writingGrey lg:text-[15px]">
          Regions
        </p>
        <h1 className="text-[21px] font-bold capitalize mt-1 lg:text-[25px]">
          {region.name}
        </h1>

        <div className="name w-full mt-7 flex flex-col gap-2">
          <p className="text-[13px] font-semibold lg:text-[15px]">Name</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full h-10 border border-main rounded-md text-[16px] outline-main px-4"
          />
        </div>

        {/* image */}
        <div className="name w-full mt-7 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <p className="text-[13px] font-semibold lg:text-[15px]">Image</p>
            <label htmlFor="imageUpload" className="cursor-pointer">
              <FaCloudUploadAlt className="text-[18px] lg:text-[20px]" />
            </label>
            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>

          <img
            src={image ? image : "/add-image.png"}
            alt={name}
            className="w-full h-[300px] object-cover rounded-md md:h-[400px] lg:h-[500px]"
          />
        </div>
      </div>

      <div className="bottom">
        <PublishButton onClick={handlePublish} />
      </div>
    </div>
  );
};

export default RegionDetailsCont;