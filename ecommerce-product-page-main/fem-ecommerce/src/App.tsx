import { useState } from "react";
import Shoe from "./assets/images/image-product-1.jpg";
function App() {
    return (
        <>
            <nav className="shadow-sm h-[120px]"></nav>
            <main>
                {/* slider */}
                <div className="aspect-square overflow-hidden">
                    <img src={Shoe} alt="shoe" className="object-cover" />
                </div>
                <div className="p-6">
                    <p className="uppercase font-bold text-primary">
                        Sneaker Company
                    </p>
                    <h1 className="text-3xl font-bold">
                        Fall Limited Edition Sneakers
                    </h1>
                    <p className="text-dark-grayish-blue">
                        These low-profile sneakers are your perfect casual wear
                        companion. Featuring a durable rubber outer sole,
                        they’ll withstand everything the weather can offer.
                    </p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <p className="text-3xl font-bold">$125.00</p>
                            <span className="flex items-center px-2 bg-primary-light rounded-lg text-primary font-bold ml-3">
                                50%
                            </span>
                        </div>
                        <p className="font-bold text-grayish-blue line-through">
                            $250.00
                        </p>
                    </div>
                    <div>
                        <div>
                            <button>-</button>0<button>+</button>
                        </div>
                        <button>Add to cart</button>
                    </div>
                </div>
            </main>
            <footer></footer>
        </>
    );
}

export default App;
