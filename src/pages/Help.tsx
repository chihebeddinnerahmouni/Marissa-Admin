import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import Swal from "sweetalert2";
import CatQsts from '../containers/help/CatQsts';
import React from 'react';

const Help = () => {
    const [selectedCat, setSelectedCat] = useState(helpCat[0].id);


    const handleCategoryClick = (id: number) => {
        setSelectedCat(id);
    };

    return (
      <div className="p-4 md:p-8 lg:max-w-[1000px] mx-auto px-4 md:px-[40px] lg:px-[100px]">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text">
          Help Questions Management
        </h1>
        <p className="text-sm md:text-base text-gray-600 mb-8">
          Explore and manage help questions with detailed insights into each
          query available for assistance.
        </p>

        {/* categories and add */}
        <CatQsts
          helpCat={helpCat}
          selectedCat={selectedCat}
          handleCategoryClick={handleCategoryClick}
        />
        <div>
          <TableOfQuestions categoryId={selectedCat} />
        </div>
      </div>
    );
};

const TableOfQuestions = ({ categoryId }: { categoryId: number }) => {
    const questions = getQuestionsByCategory(categoryId);
        const [selectedQuestionId, setSelectedQuestionId] = useState<
          number | null
        >(null);

        const handleRowClick = (id: number) => {
          setSelectedQuestionId(selectedQuestionId === id ? null : id);
        };

    const handleDelete = (_id: number) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to delete this question?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, keep it",
        }).then((result) => {
            if (result.isConfirmed) {
                // Perform the delete operation here
                Swal.fire("Success", "The question has been deleted!", "success");
            }
        });
    };

    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 border-b">Question</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((question) => (
              <React.Fragment key={question.id}>
                <tr
                  className="hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleRowClick(question.id)}
                >
                  <td className="border px-4 py-2 truncate max-w-xs">
                    {question.question}
                  </td>
                  <td className="px-4 mt-2.5 flex space-x-2 justify-center">
                    <button
                      className="text-red-500"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(question.id);
                      }}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
                {selectedQuestionId === question.id && (
                  <tr className="bg-red-100 bg-opacity-50">
                    <td colSpan={2} className="border px-4 py-2 ">
                      <div
                        dangerouslySetInnerHTML={{ __html: question.answer }}
                      />
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    );
};

const getQuestionsByCategory = (categoryId: number) => {
    const allQuestions = [
      {
        id: 1,
        categoryId: 1,
        question: "What is this?",
        answer: '<p class="text-main">This is a general question.</p>',
      },
      {
        id: 2,
        categoryId: 1,
        question:
          "What is this iuuegd  zoidyo zpz pU eue^*qefio àqufquf qq^fiuqiuqçzu z?",
        answer: "<p>This is a general question. mzuuzitdp</p>",
      },
      {
        id: 3,
        categoryId: 1,
        question: "What is this?",
        answer: "<p>This is a general question.</p>",
      },
      {
        id: 4,
        categoryId: 2,
        question: "How to create an account?",
        answer: `<h2><strong>The answer is:</strong></h2>
<p>if u have any qsts:</p>
<ol>
<li>go there</li>
<li>go pk</li>
</ol>
<p>deal</p>`,
      },
      {
        id: 5,
        categoryId: 3,
        question: "How to pay?",
        answer: "<p>You can pay using...</p>",
      },
      {
        id: 6,
        categoryId: 4,
        question: "How to subscribe?",
        answer: "<p>To subscribe, you need to...</p>",
      },
    ];

    return allQuestions.filter((q) => q.categoryId === categoryId);
};

const helpCat = [
    { id: 1, name: 'General' },
    { id: 2, name: 'Account' },
    { id: 3, name: 'Billing' },
    { id: 4, name: 'Subscription' },
];

export default Help;



// import { useState } from 'react';
// import { FaTrash } from 'react-icons/fa';
// import Swal from "sweetalert2";
// import CatQsts from '../containers/help/CatQsts';

// const Help = () => {
//     const [selectedCat, setSelectedCat] = useState(helpCat[0].id);

//     const handleCategoryClick = (id: number) => {
//         setSelectedCat(id);
//     };

//     return (
//       <div className="p-4 md:p-8 lg:max-w-[1000px] mx-auto">
//         <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text">
//           Help Questions Management
//         </h1>
//         <p className="text-sm md:text-base text-gray-600 mb-8">
//           Explore and manage help questions with detailed insights into each
//           query available for assistance.
//         </p>

//         {/* categories and add */}
//         <CatQsts
//           helpCat={helpCat}
//           selectedCat={selectedCat}
//           handleCategoryClick={handleCategoryClick}
//         />
//         <div>
//           <TableOfQuestions categoryId={selectedCat} />
//         </div>
//       </div>
//     );
// };

// const TableOfQuestions = ({ categoryId }: { categoryId: number }) => {
//     const questions = getQuestionsByCategory(categoryId);

//     const handleDelete = (_id: number) => {
//         Swal.fire({
//             title: "Are you sure?",
//             text: "Do you want to delete this question?",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonText: "Yes, delete it!",
//             cancelButtonText: "No, keep it",
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 // Perform the delete operation here
//                 Swal.fire("Success", "The question has been deleted!", "success");
//             }
//         });
//     };

//     return (
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white">
//           <thead>
//             <tr>
//               <th className="py-2 border-b">Question</th>
//               <th className="py-2 border-b">Answer</th>
//               <th className="py-2 px-4 border-b">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {questions.map((question) => (
//               <tr key={question.id} className="hover:bg-gray-100">
//                 <td className="border px-4 py-2 truncate max-w-xs">
//                   {question.question}
//                 </td>
//                 <td className="border px-4 py-2 truncate max-w-xs">
//                   <div dangerouslySetInnerHTML={{ __html: question.answer }} />
//                 </td>
//                 <td className="px-4 mt-2.5 flex space-x-2 justify-center">
//                   <button
//                     className="text-red-500"
//                     onClick={() => handleDelete(question.id)}
//                   >
//                     <FaTrash />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
// };

// const getQuestionsByCategory = (categoryId: number) => {
//     const allQuestions = [
//       {
//         id: 1,
//         categoryId: 1,
//         question: "What is this?",
//         answer: '<p class="text-main">This is a general question.</p>',
//       },
//       {
//         id: 2,
//         categoryId: 1,
//         question:
//           "What is this iuuegd  zoidyo zpz pU eue^*qefio àqufquf qq^fiuqiuqçzu z?",
//         answer: "<p>This is a general question. mzuuzitdp</p>",
//       },
//       {
//         id: 3,
//         categoryId: 1,
//         question: "What is this?",
//         answer: "<p>This is a general question.</p>",
//       },
//       {
//         id: 4,
//         categoryId: 2,
//         question: "How to create an account?",
//         answer: `<h2><strong>The answer is:</strong></h2>
// <p>if u have any qsts:</p>
// <ol>
// <li>go there</li>
// <li>go pk</li>
// </ol>
// <p>deal</p>`,
//       },
//       {
//         id: 5,
//         categoryId: 3,
//         question: "How to pay?",
//         answer: "<p>You can pay using...</p>",
//       },
//       {
//         id: 6,
//         categoryId: 4,
//         question: "How to subscribe?",
//         answer: "<p>To subscribe, you need to...</p>",
//       },
//     ];

//     return allQuestions.filter((q) => q.categoryId === categoryId);
// };

// const helpCat = [
//     { id: 1, name: 'General' },
//     { id: 2, name: 'Account' },
//     { id: 3, name: 'Billing' },
//     { id: 4, name: 'Subscription' },
// ];

// export default Help;