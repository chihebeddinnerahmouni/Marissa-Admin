import React, { useState } from "react";
import ReactModal from "react-modal";
import { TextField, Button, Box, Typography } from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";

interface AddQstProps {
    setClose: (isOpen: boolean) => void;
}

ReactModal.setAppElement("#root");

const AddQst: React.FC<AddQstProps> = ({ setClose }) => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle the form submission logic here
        console.log("Question:", question);
        console.log("Answer:", answer);
        setClose(false);
    };

    return (
      <ReactModal
        isOpen={true}
        onRequestClose={() => setClose(false)}
        className={"bg-white rounded-lg p-4 shadow-hardShadow lg:p-6"}
        overlayClassName={
          "fixed bg-black bg-opacity-10 backdrop-blur-[7px] inset-0 flex items-center justify-center p-4 mt-[60px] lg:mt-[80px]"
        }
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Add Question
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box mb={2}>
            <TextField
              label="Question"
              variant="outlined"
              fullWidth
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </Box>
          <Box mb={2}>
            <Editor
              apiKey="trrkyoh7hvt1k7rolyktoalj3j8u1234p1e3isyk9mdfuj4j"
              initialValue="<p>Enter the answer here...</p>"
              init={{
                height: 300,
                menubar: false,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | bold italic backcolor | \
                                alignleft aligncenter alignright alignjustify | \
                                bullist numlist outdent indent | removeformat | help",
              }}
              onEditorChange={(content) => setAnswer(content)}
            />
          </Box>
          <Box display="flex" justifyContent="flex-end" gap={2}>
            <Button
              variant="outlined"
              onClick={() => setClose(false)}
              sx={{
                color: "#FF385C",
                backgroundColor: "white",
                borderColor: "#FF385C",
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{ color: "white", backgroundColor: "#FF385C" }}
              type="submit"
            >
              Add
            </Button>
          </Box>
        </form>
      </ReactModal>
    );
};

export default AddQst;