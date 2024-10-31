import { useState, useEffect } from "react"
import LoadingLine from "../../components/ui/LoadingLine";
import { FaCloudUploadAlt } from "react-icons/fa";




const categoryJson = {
  id: 1,
  name: "boats",
  image:
    "https://smallboatsmonthly.com/wp-content/uploads/2023/01/1109216_cmyk.jpg",
};







const CategoryDetailsCont = () => {

  const [category, setCategory] = useState<{ id: number, name: string, image: string }>({ id: 0, name: "", image: "" });
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");




  useEffect(() => {
    setTimeout(() => {
      setCategory(categoryJson);
      setName(categoryJson.name);
      setImage(categoryJson.image);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <LoadingLine />;
  }

  return (
    <div>
      <p className="text-[13px] text-writingGrey">Categories</p>
      <h1 className="text-[21px] font-bold capitalize mt-2">{category.name}</h1>

      <div className="name w-full mt-7 flex flex-col gap-2">
        <p className="text-[13px] font-semibold">Name</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full h-10 border border-darkGrey rounded-md text-[16px] outline-main px-4"
        />
      </div>

      {/* image */}
      <div className="name w-full mt-7 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="text-[13px] font-semibold">image</p>
          <button>
            <FaCloudUploadAlt className="text-[18px] text-dark" />
          </button>
        </div>

        <img
          src={image}
          alt={name}
          className="w-full h-[300px] object-cover rounded-md"
        />
      </div>

      <div className=" fixed bottom-[10px] px-4 right-0 left-0">
        <button className="button w-full h-10 bg-main text-white rounded-10 flex justify-center items-center font-medium">
          Publish
        </button>
      </div>
    </div>
  );
}

export default CategoryDetailsCont
