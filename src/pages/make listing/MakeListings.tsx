import ListingTable from "../../components/listings/listingTable";



const MakeListings = () => {
  return (
    <div className="p-4 md:p-8 lg:max-w-[1000px] mx-auto px-4 md:px-[40px]">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text">
        Listings Management
      </h1>
      <p className="text-sm md:text-base text-gray-600 mb-8">
        Explore and manage Listings with detailed insights into each type of
        boat available for rental.
      </p>
      <ListingTable rows={requests} />
    </div>
  );
}

export default MakeListings


const requests = [
  {
    id: 1,
    name: "chiheb rahmouni",
    image: "https://",
    email: "chihebrahmouni30@gmail.com",
    phone: "0773781669",
    boatName: "boat amazing world trips",
  },
  {
    id: 2,
    name: "dounia saidi",
    image: "https://",
    email: "chihebrahmouni30@gmail.com",
    phone: "0773781669",
    boatName: "boat amazing world trips",
  },
  {
    id: 3,
    name: "filali raouf",
    image: "https://",
    email: "chihebrahmouni30@gmail.com",
    phone: "0773781669",
    boatName: "boat amazing world trips",
  },
  {
    id: 4,
    name: "islem fortas",
    image: "https://",
    email: "chihebrahmouni30@gmail.com",
    phone: "0773781669",
    boatName: "boat amazing world trips",
  },
];