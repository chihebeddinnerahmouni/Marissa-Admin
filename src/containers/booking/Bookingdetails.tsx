import BoatNameAndPic from "../../components/booking/NamePic";
import Dates from "../../components/booking/Date";
import Return from "../../components/booking/Return";
import Duration from "../../components/booking/Duration";
import Groupe from "../../components/booking/Groupe";
import WithCaptain from "../../components/booking/WithCaptain";
import Extra from "../../components/booking/Extra";


const Bookingdetails = ({ details }: any) => {
    // console.log(details[0].status);
    

  return (
    <>
      <div className="content w-full px-4 mt-[80px] md:w-[550px] lg:mt-[90px] xl:w-[650px] bg-creme pb-5 relative">
        {/* 
            <Offer offer={details[0].offer} />
            <CaptainOffer details={details[0]} />
            <BoatNameAndPic details={details[0]} />
            <Dates details={details[0]} />
            <Return details={details[0]} />
            <Duration details={details} />
            <Groupe details={details} />
            <WithCaptain />
            <SpecialRequest details={details} />
          </>
        )} */}
              <BoatNameAndPic details={details[0]} />
              <Dates details={details[0]} />
              <Return details={details[0]} />
              <Duration details={details[0]} />
              <Groupe details={details[0]} />
              <WithCaptain />
              <Extra details={details[0]} />
              
              
              
              
      </div>
    </>
  );
};

export default Bookingdetails;
