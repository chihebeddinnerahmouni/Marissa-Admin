import Structure from "./Structure"
import Elements from "./Elements"
import Details from "./Details"

const MainPage = () => {


  return (
    <div className="w-full lg:grid lg:grid-cols-12 lg:gap-5">
      <Structure />
      <Elements />
      <Details />
    </div>
  )
}

export default MainPage
