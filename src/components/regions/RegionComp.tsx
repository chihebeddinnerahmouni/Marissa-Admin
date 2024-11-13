import React, {useState} from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import UpdateRegionModal from "./UpdateRegionModal";
import DeleteRegionModal from "./DeleteRegionModal";



interface RegionProps {
    region: {
        id: number;
        name: string;
        photo: string;
    };
}

const RegionComp: React.FC<RegionProps> = ({ region }) => {


    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    return (
        <div className="relative w-full h-64 rounded-lg col-span-1 overflow-hidden group cursor-pointer shadow-lg transform transition-transform duration-300">
            <img
                src={region.photo}
                alt={region.name}
                className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-[105%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75 group-hover:opacity-50 transition duration-300 flex items-end p-4">
                <h2 className="text-white text-2xl font-bold">{region.name}</h2>
            </div>
            <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition duration-300">
                <button className="text-white bg-main p-2 rounded-full hover:bg-mainHover"
                onClick={() => setIsUpdateModalOpen(true)}
                >
                    <FaEdit />
                </button>
                <button className="text-white bg-main p-2 rounded-full hover:bg-mainHover"
                onClick={() => setIsDeleteModalOpen(true)}
                >
                    <FaTrash />
                </button>
            </div>
            {isUpdateModalOpen && <UpdateRegionModal setClose={setIsUpdateModalOpen} region={region} />}
            {isDeleteModalOpen && <DeleteRegionModal setClose={setIsDeleteModalOpen} region={region} />}
        </div>
    );
};

export default RegionComp;