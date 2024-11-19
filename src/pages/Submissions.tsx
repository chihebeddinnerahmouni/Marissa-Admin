import SubmissionsTable from "../components/submissions/SubmissionsTable";

const Submissions = () => {
  return (
    <div className="p-4 md:p-8 lg:max-w-[1000px] mx-auto px-4 md:px-[40px] lg:px-[100px]">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text">
        Submittions Management
      </h1>
      <p className="text-sm md:text-base text-gray-600 mb-8">
        Explore and manage Users Submissions with detailed insights into each
        Submission.
      </p>

      <SubmissionsTable rows={submittions} />
    </div>
  );
}

export default Submissions


const submittions = [
  {
    id: 1,
    business_type: "company",
    category: "Technology",
    city: "Cairo",
    country: "Egypt",
    user: {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "01000000000",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
  },
  {
    id: 2,
    business_type: "startup",
    category: "Technology",
    city: "Alexandria",
    country: "Egypt",
    user: {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "01000000001",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
  },
  {
    id: 3,
    business_type: "freelancer",
    city: "Giza",
    category: "Technology",
    country: "Egypt",
    user: {
      id: 3,
      name: "Ahmed Ali",
      email: "ahmed.ali@example.com",
      phone: "01000000002",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
  },
  {
    id: 4,
    business_type: "enterprise",
    city: "Luxor",
    category: "Technology",
    country: "Egypt",
    user: {
      id: 4,
      name: "Sara Ibrahim",
      email: "sara.ibrahim@example.com",
      phone: "01000000003",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
  },
];