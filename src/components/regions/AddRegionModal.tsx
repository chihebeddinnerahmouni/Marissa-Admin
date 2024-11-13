import React, { useState } from "react";
import ReactModal from "react-modal";
import { TextField, Button, Box, Typography, IconButton } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

interface UpdateModalProps {
    setClose: (isOpen: boolean) => void;
}

ReactModal.setAppElement("#root");

const AddRegionModal: React.FC<UpdateModalProps> = ({ setClose }) => {
    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("");
    const [_newPhoto, setNewPhoto] = useState<File | null>(null);

    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setNewPhoto(e.target.files[0]);
            setPhoto(URL.createObjectURL(e.target.files[0]));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setClose(false);
    };

    return (
        <ReactModal
            isOpen={true}
            onRequestClose={() => setClose(false)}
            className={"bg-white rounded-lg p-4 shadow-hardShadow lg:p-6"}
            overlayClassName={
                "fixed bg-black bg-opacity-10 backdrop-blur-[7px] inset-0 flex items-center justify-center p-4"
            }
        >
            <Typography variant="h4" component="h2" gutterBottom>
                Add Region
            </Typography>
            <form onSubmit={handleSubmit}>
                <Box display="flex" flexDirection="column" gap={2}>
                    <TextField
                        label="Region Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        variant="outlined"
                        fullWidth
                        required
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "grey",
                                },
                                "&:hover fieldset": {
                                    borderColor: "grey",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#FF385C",
                                },
                            },
                            "& .MuiInputLabel-root": {
                                color: "gray",
                            },
                            "& .MuiInputLabel-root.Mui-focused": {
                                color: "#FF385C",
                            },
                        }}
                    />
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        gap={2}
                    >
                        {photo ? (
                            <img
                                src={photo}
                                alt={name}
                                style={{
                                    width: "100%",
                                    maxHeight: "300px",
                                    objectFit: "cover",
                                    borderRadius: "8px",
                                }}
                            />
                        ) : (
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                justifyContent="center"
                                width="100%"
                                height="300px"
                                border="2px dashed grey"
                                borderRadius="8px"
                            >
                                <PhotoCamera fontSize="large" className=""/>
                                <Typography variant="body2" color="textSecondary">
                                    Upload Photo
                                </Typography>
                            </Box>
                        )}
                        <input
                            accept="image/*"
                            style={{ display: "none" }}
                            id="icon-button-file"
                            type="file"
                            onChange={handlePhotoChange}
                        />
                        <label htmlFor="icon-button-file">
                            <IconButton
                                aria-label="upload picture"
                                component="span"
                                sx={{ color: "grey" }}
                            >
                                <PhotoCamera />
                            </IconButton>
                        </label>
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
                </Box>
            </form>
        </ReactModal>
    );
};

export default AddRegionModal;