import logo from "./images/logo.svg";
import expenses from "./data.json";
import BarGraph from "./components/BarGraph";

function App() {
    return (
        <main className="flex flex-col items-center justify-center bg-neutral-cream min-h-screen">
            <div className="w-[90%] mx-auto my-4 max-w-[550px]">
                <div className="flex justify-between bg-primary-soft-red rounded-[10px] p-5 mb-4 2xl:rounded-2xl md:p-8 2xl:mb-7">
                    <div className="text-neutral-white">
                        <h2>My balance</h2>
                        <span className="h2 font-bold tracking-wide ">
                            $921.48
                        </span>
                    </div>
                    <img className="w-16 2xl:w-20" src={logo} alt="logo" />
                </div>
                <div className="bg-neutral-pale-orange rounded-[10px] p-5 divide-y-2 divide-neutral-cream 2xl:rounded-2xl md:p-10">
                    <div className="mb-7">
                        <h1 className="h2 font-bold text-neutral-dark-brown mb-12">
                            Spending - Last 7 days
                        </h1>
                        <BarGraph expenses={expenses} />
                    </div>
                    <div className="flex text-neutral-medium-brown pt-5 items-end">
                        <div>
                            <h2>Total this month</h2>
                            <span className="h1 text-neutral-dark-brown font-bold">
                                $478.33
                            </span>
                        </div>
                        <div className="ml-auto text-end">
                            <span className="text-neutral-dark-brown font-bold">
                                +2.4%
                            </span>
                            <p>from last month</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="absolute bottom-10">
                Challenge by{" "}
                <a
                    href="https://www.frontendmentor.io?ref=challenge"
                    target="_blank"
                >
                    Frontend Mentor
                </a>
                . Coded by{" "}
                <a
                    href="https://www.frontendmentor.io/profile/Nickil13"
                    target="_blank"
                    rel="noreferrer"
                >
                    Nickil13
                </a>
                .
            </div> */}
        </main>
    );
}

export default App;
