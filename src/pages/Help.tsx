import { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import Swal from "sweetalert2";
import CatQsts from '../containers/help/CatQsts';
import React from 'react';
import axios from 'axios';
import LoadingLine from '../components/ui/LoadingLine';
import AddQst from '../components/help/AddQst';




const Help = () => {



  const [selectedCat, setSelectedCat] = useState(0);
  const [loading, setLoading] = useState(true);
  const [helpCat, setHelpCat] = useState<any[]>([]);
  const url = import.meta.env.VITE_SERVER_URL_HELP;

    const handleCategoryClick = (id: number) => {
        setSelectedCat(id);
  };


  useEffect(() => { 
    axios.get(url + '/categories')
      .then((res) => {
        setHelpCat(res.data);
        setSelectedCat(res.data[0].id);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);
  

  if (loading) { 
    return (
      <div className="w-full h-screen">
        <LoadingLine />
      </div>
    )
  }

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

    // const questions = getQuestionsByCategory(categoryId);
        const [selectedQuestionId, setSelectedQuestionId] = useState<
          number | null
    >(null);
  const [questions, setQuestions] = useState<any[]>([]);
  const [isAddQstOpen, setIsAddQstOpen] = useState(false);
  const url = import.meta.env.VITE_SERVER_URL_HELP;

  useEffect(() => {
    axios
      .get(url + `/categories/${categoryId}/questions`)
      .then((res) => {
        // console.log(res.data);
        setQuestions(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [categoryId]);

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
              Swal.fire("Success", "The question has been deleted!", "success");
              // axios.delete(`${url}/${_id}`)
              //   .then((res) => {
              //     console.log(res.data);
              //   })
              //   .catch((err) => {
              //     console.error(err);
              //   })
            }
        });
    };

  
    return (
      <div className="overflow-x-auto">
        {isAddQstOpen && (
          <AddQst
            setClose={setIsAddQstOpen}
            categoriesArray={questions}
          />
        )}
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 border-b">Question</th>
              <th className="py-2 px-4 border-b">
                <button
                  className="text-main text-[18px]"
                  onClick={()=>setIsAddQstOpen(true)}
                >
                  +
                </button>
              </th>
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

export default Help;

