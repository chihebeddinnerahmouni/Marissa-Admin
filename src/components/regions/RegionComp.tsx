import React from 'react';

interface RegionProps {
    region: {
        id: number;
        name: string;
        photo: string;
    };
}

const RegionComp: React.FC<RegionProps> = ({ region }) => {
    return (
        <div className="relative w-full h-64 rounded-10 col-span-1 overflow-hidden group cursor-pointer">
            <img
                src={region.photo}
                alt={region.name}
                className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-0 transition duration-300 flex items-start justify-center p-4">
                <h2 className="text-white text-xl font-bold">{region.name}</h2>
            </div>
        </div>
    );
};

export default RegionComp;