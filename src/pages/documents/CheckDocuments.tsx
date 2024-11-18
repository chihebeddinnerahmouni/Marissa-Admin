import DocumentComp from "../../components/documents/DocumentComp";

const CheckDocuments = () => {
  return (
    <div className="p-4 md:p-8 lg:max-w-[1000px] mx-auto">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text">
        Documents for {docs.name}
      </h1>
      <p className="text-sm md:text-base text-gray-600 mb-8">
        This is what Chiheb uploaded as documents, you can view the documents
        below.
      </p>

      <div className="buttons flex justify-end gap-4 mb-8">
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Accept 
        </button>
        <button className="bg-main text-white px-4 py-2 rounded hover:bg-mainHover">
          Refuse 
        </button>
      </div>

      <div className="docs flex flex-col gap-5 pb-20">
        {docs.documents.map((document: any, index: number) => (
          <DocumentComp key={index} document={document} />
        ))}
      </div>
    </div>
  );
};

export default CheckDocuments;

const docs = {
  id: 1,
  name: "chiheb rahmouni",
  image: "hirbae.jpg",
  email: "chihebrahmouni30@gmail.com",
  phone: "0773781669",
  documents: [
    {
      title: "License",
      document: "https://www.example.com/license.pdf",
    },
    {
      title: "Carte Grise",
      document: "/hirbae.jpg",
    },
    {
      title: "Carte W Say",
      document: "/hirbae.jpg",
    },
  ],
};
