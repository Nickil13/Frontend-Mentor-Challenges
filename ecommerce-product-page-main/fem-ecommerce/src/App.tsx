import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import CartIcon from "./assets/images/icon-cart.svg?react";

function App() {
    return (
        <>
            <Navbar />
            <main>
                <Slider />
                <div className="p-6 space-y-6">
                    <div>
                        <p className="uppercase font-bold text-primary text-sm tracking-wider mb-2">
                            Sneaker Company
                        </p>
                        <h1 className="text-3xl font-bold">
                            Fall Limited Edition Sneakers
                        </h1>
                    </div>
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
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center justify-between font-bold bg-light-grayish-blue px-6 py-2 rounded-lg">
                            <button className="text-primary text-3xl">-</button>
                            0
                            <button className="text-primary text-3xl">+</button>
                        </div>
                        <button className="bg-primary p-4 rounded-lg font-bold text-white flex items-center justify-center">
                            <CartIcon className="mr-4 w-5 h-5 text-white" />
                            Add to cart
                        </button>
                    </div>
                </div>
            </main>
            <footer></footer>
        </>
    );
}

export default App;
