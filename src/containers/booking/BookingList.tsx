import BookingItemComp from "../../components/booking/BokkingItemComp";
// import LoadingLine from "@/components/ui/LoadingLine";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import { useMediaQuery } from "react-responsive";
// import { collection, onSnapshot, query, where } from "firebase/firestore";
// import { db } from "../../../firebaseConfig";
// import Filter from "@/components/inbox/Filter";
// import options from "@/assets/files/inbox/filter_categories";

const BookingList = () => {
//   const [loading, setLoading] = useState(true);
//   const [originalConversations, setOriginalConversations] = useState<any>([]);
//   const [filteredConversations, setFilteredConversations] = useState<any>([]);
//   const [selectedFilter, setSelectedFilter] = useState<string>(options[0]);
//   const navigate = useNavigate();
//   const { inboxId } = useParams<{ inboxId: string }>();
//   const isMobile = useMediaQuery({ query: "(max-width: 1045px)" });
//   const userId = Number(localStorage.getItem("userId"));
  // const isBoatOwner = localStorage.getItem("isBoatOwner");

//   useEffect(() => {
//     const fetchConversations = async () => {
//       const q = query(
//         collection(db, "conversations"),
//         where("participants", "array-contains", userId)
//       );
//       const unsubscribe = onSnapshot(q, (snapshot) => {
//         let fetchedConversations = snapshot.docs.map((doc) => ({
//           conversationId: doc.id,
//           ...doc.data(),
//           otherParticipantName: doc
//             .data()
//             .participants.find((id: string) => Number(id) !== userId),
//         })) as any;

//         setOriginalConversations(fetchedConversations);
//         setFilteredConversations(fetchedConversations);
//         setLoading(false);
//         if (!inboxId && !isMobile) {
//           navigate(`/inbox/${fetchedConversations[0].conversationId}`);
//           setLoading(false);
//           return;
//         }
//       });
//       return () => unsubscribe();
//     };

//     fetchConversations();
//   }, [userId]);

//   useEffect(() => {
//     if (selectedFilter === "all") {
//       setFilteredConversations(originalConversations);
//       return;
//     }

//     const newArray = originalConversations.filter(
//       (conv: any) => conv.status === selectedFilter
//     );
//     setFilteredConversations(newArray);
//   }, [selectedFilter, originalConversations]);

//   if (loading) {
//     return (
//       <div className="w-full h-screen">
//         <LoadingLine />
//       </div>
//     );
//   }

  return (
    <>
      {/* <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      /> */}
      <div className="items w-full mt-5 flex flex-col gap-4 ">
        {bookings.map((inboxItem: any, index: number) => (
          <BookingItemComp key={index} item={inboxItem} />
        ))}
        {/* {filteredConversations.map((inboxItem: any, index: number) => (
          <InboxItem key={index} item={inboxItem} />
        ))} */}
              
      </div>
    </>
  );
};


export default BookingList;

const bookings = [
  {
    conversationId: 1,
    status: "ongoing",

    createdAt: {
      seconds: 1665360000,
      nanoseconds: 123456789,
    },

    listingDetails: {
      image: "hirbae.jpg",
      boatname: "Boat name",
    },

    boatOwnerDetails: {},

    clientDetails: {
      id: 1,
      name: "John",
      surname: "Doe",
      image: "john.jpg",
    },

    booking_info: {
      preferredDate: "2022-10-10",
      duration: {
        hours: 2,
        minutes: 30,
        nights: 0,
      },
      groupSize: {
        adults: 2,
        children: 1,
        infants: 0,
      },
    },
  },
];
