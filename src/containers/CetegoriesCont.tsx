import { useEffect, useState } from "react";
import LoadingLine from "../components/ui/LoadingLine";
import ElementComp from "../components/ui/ElementComp";




const categoriesArray = [
  {
    id: 1,
    name: "All",
    image:
      "https://smallboatsmonthly.com/wp-content/uploads/2023/01/1109216_cmyk.jpg",
  },
  {
    id: 2,
    name: "Boats",
    image:
      "https://smallboatsmonthly.com/wp-content/uploads/2023/01/1109216_cmyk.jpg",
  },
  {
    id: 3,
    name: "Yaghts",
    image:
      "https://smallboatsmonthly.com/wp-content/uploads/2023/01/1109216_cmyk.jpg",
  },
  {
    id: 4,
    name: "Jet-ski",
    image:
      "https://smallboatsmonthly.com/wp-content/uploads/2023/01/1109216_cmyk.jpg",
  },
];

const CetegoriesCont = () => {

    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState<{id: number, name: string, image: string}[]>([]);

    useEffect(() => {
      setTimeout(() => {
        setCategories(categoriesArray);
        setLoading(false);
      }, 1000);
    }, []);



if (loading) return <LoadingLine />;

  return (
    <div className="w-full flex flex-col gap-3">
          {categories.map((category) => (
              <ElementComp key={category.id} image={category.image} text={category.name} id={category.id} />
          ))}
    </div>
  )
}

export default CetegoriesCont
