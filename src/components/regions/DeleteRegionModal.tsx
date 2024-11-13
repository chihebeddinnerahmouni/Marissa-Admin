import React from "react";
import ReactModal from "react-modal";
import { Button, Box, Typography } from "@mui/material";

interface DeleteModalProps {
    setClose: (isOpen: boolean) => void;
    region: {
        id: number;
        name: string;
    };
}

ReactModal.setAppElement("#root");

const DeleteRegionModal: React.FC<DeleteModalProps> = ({
    setClose,
    region,
}) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setClose(false);
    };

    return (
        <ReactModal
            isOpen={true}
            onRequestClose={() => setClose(false)}
            className={"bg-white rounded-lg p-6 shadow-lg max-w-md mx-auto"}
            overlayClassName={
                "fixed bg-black bg-opacity-10 backdrop-blur-[7px] inset-0 flex items-center justify-center p-4"
            }
        >
            <Typography variant="h4" component="h2" gutterBottom>
                Delete Region
            </Typography>
            <Typography variant="body1" gutterBottom>
                Are you sure you want to delete the region <strong>{region.name}</strong>?
            </Typography>
            <form onSubmit={handleSubmit}>
                <Box display="flex" justifyContent="flex-end" gap={2} mt={4}>
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
                        sx={{
                            color: "white",
                            backgroundColor: "#FF385C",
                            '&:hover': {
                                backgroundColor: "#FF1E3C",
                            },
                        }}
                        type="submit"
                    >
                        Delete
                    </Button>
                </Box>
            </form>
        </ReactModal>
    );
};

export default DeleteRegionModal;