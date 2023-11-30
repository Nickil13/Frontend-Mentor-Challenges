import React from "react";
import Shoe from "../assets/images/image-product-1.jpg";
import PreviousIcon from "../assets/images/icon-previous.svg?react";
import NextIcon from "../assets/images/icon-next.svg?react";

export default function Slider() {
    return (
        <div>
            {" "}
            {/* slider */}
            <div className="relative overflow-hidden h-[300px]">
                <img
                    src={Shoe}
                    alt="shoe"
                    className="object-cover h-full w-full"
                />
                <button className="bg-white p-3 absolute top-1/2 -translate-y-1/2 left-6 z-10 rounded-full aspect-square">
                    <PreviousIcon className="w-4 h-4" />
                </button>
                <button className="bg-white p-3 absolute top-1/2 -translate-y-1/2 right-6 z-10 rounded-full aspect-square">
                    <NextIcon className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
