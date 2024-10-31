

const PublishButton = ({onClick}: any) => {
  return (
      <button className="button w-full h-10 bg-main text-white rounded-10 flex justify-center items-center font-medium mt-10"
          onClick={onClick}>
      Publish
    </button>
  );
}

export default PublishButton
