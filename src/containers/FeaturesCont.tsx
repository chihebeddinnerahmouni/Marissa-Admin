import { useEffect, useState } from "react";
import LoadingLine from "../components/ui/LoadingLine";
import ElementComp from "../components/ui/ElementComp";

const featuresArray = [
  {
    id: 1,
    name: "wifi"
  },
  {
    id: 2,
    name: "restaurant"
  },
  {
    id: 3,
    name: "sail"
  },
  {
    id: 4,
    name: "bluetooth"
  },
];

const FeaturesCont = () => {

        const [loading, setLoading] = useState(true);
        const [features, setFeatures] = useState<any>([]);

        useEffect(() => {
          setTimeout(() => {
            setFeatures(featuresArray);
            setLoading(false);
          }, 1000);
        }, []);

    if (loading) return <LoadingLine />;
    
   return (
     <div className="w-full flex flex-col gap-3">
       {features.map((feature: any) => (
         <ElementComp
           key={feature.id}
           image={feature.image}
           text={feature.name}
           id={feature.id}
         />
       ))}
     </div>
   );
};

export default FeaturesCont;
