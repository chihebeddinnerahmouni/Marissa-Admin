import Structure from "./Structure"
import Elements from "./Elements"
import { useParams } from "react-router-dom"

const MainPage = () => {

    const { elements } = useParams()

  return (
    <div className="w-full bg-red-200 lg:grid lg:grid-cols-12">
        <Structure />
        <Elements />
    </div>
  )
}

export default MainPage
