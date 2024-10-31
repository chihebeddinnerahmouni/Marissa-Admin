import { useState, useEffect } from "react";
import LoadingLine from "../../components/ui/LoadingLine";
import PublishButton from "../../components/ui/PublishButton";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const featureJson = {
  id: 1,
  name: "wify"
};

const FeaturesDetailsComp = () => {
    const [feature, setFeature] = useState<{
        id: number;
    name: string;
  }>({ id: 0, name: ""});
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { elements } = useParams();

  useEffect(() => {
    setTimeout(() => {
      setFeature(featureJson);
      setName(featureJson.name);
      setLoading(false);
    }, 1000);
  }, []);


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
          Features
        </p>
        <h1 className="text-[21px] font-bold capitalize mt-1 lg:text-[25px]">
          {feature.name}
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
      </div>

      <div className="bottom">
        <PublishButton onClick={handlePublish} />
      </div>
    </div>
  );
};

export default FeaturesDetailsComp;
