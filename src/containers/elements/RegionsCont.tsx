import { useEffect, useState } from "react";
import LoadingLine from "../../components/ui/LoadingLine";
import ElementComp from "../../components/ui/ElementComp";
import AddTop from "../../components/ui/AddTop";

const regionsArray = [
  {
    id: 1,
    name: "KSA",
    image:
      "https://media.istockphoto.com/id/1248308148/photo/jeddah-corniche-aerial-view-2018.jpg?s=612x612&w=0&k=20&c=fK55MU6RxzClhcx8EsYo6xmwmty3kbzZQnImAvezujE=",
  },
  {
    id: 2,
    name: "Riadh",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVpUb_7Urdno_LuRtJJ82lLneSxuwiZ1Tww&s",
  },
  {
    id: 3,
    name: "Jeddah",
    image:
      "https://media.istockphoto.com/id/1349273101/photo/kingdom-of-saudi-arabia-riyadh-king-abdullah-financial-district-january-31-2020-large.jpg?s=612x612&w=0&k=20&c=tBg1nVc-YzK0uudCyRatXmQqQFF7DXSDRjJ1WRfWZso=",
  },
  {
    id: 4,
    name: "Example",
  },
];

const RegionsCont = () => {
  const [loading, setLoading] = useState(true);
  const [regions, setRegions] = useState<any>([]);

  useEffect(() => {
    setTimeout(() => {
      setRegions(regionsArray);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <LoadingLine />;

  return (
    <>
      <AddTop text="Regions" url="/structure/regions/add-region" />
      <div className="w-full flex flex-col gap-3">
        {regions.map((feature: any) => (
          <ElementComp
            key={feature.id}
            image={feature.image}
            text={feature.name}
            id={feature.id}
          />
        ))}
      </div>
    </>
  );
};

export default RegionsCont;
