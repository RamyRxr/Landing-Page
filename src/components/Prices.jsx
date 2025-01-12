import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Prices = () => {
    return (

        <div className="mt-20 border-t border-neutral-800">

            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my- py-10 tracking-wide bg-gradient-to-r from-purple-300 to-purple-800 text-transparent bg-clip-text">
                Prices
            </h2>

            <div className="flex flex-wrap">

                {pricingOptions.map((option, index) => (

                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">

                        <div className="p-10 border-4 rounded-xl border-purple-800 shadow-sm shadow-purple-800 ">

                            <p className="text-4xl mb-8 bg-gradient-to-r from-cyan-500 to-cyan-700 text-transparent bg-clip-text">
                                {option.title}
                                {option.title === "Pro" && (
                                <span className="bg-gradient-to-r from-purple-300 to-purple-800 text-transparent bg-clip-text text-xl font-bold mb-4 ml-2">
                                    (Most Popular)
                                </span>
                                )}
                            </p>

                            <p className="mb-8">
                                <span className="text-5xl mt-6 mr-2 pr-1 bg-gradient-to-r from-cyan-500 to-cyan-700 text-transparent bg-clip-text ">{option.price}</span>
                                <span className="bg-gradient-to-r from-purple-300 to-purple-800 text-transparent bg-clip-text font-bold tracking-tight">/Month</span>
                            </p>

                            <ul>
                                {option.features.map((feature, index) => (
                                <li key={index} className="mt-8 flex items-center ">
                                    <div className="text-green-400  h-10 w-10 p-2 justify-center items-center rounded-full">
                                        <CheckCircle2 />
                                    </div>
                                    
                                    <span className="ml-2 text-md text-neutral-500">{feature}</span>
                                </li>
                                ))}
                            </ul>

                            <a href="#" className="relative flex justify-center items-center text-center w-full h-12 p-5 mt-12 tracking-tight border-2 border-blue-400 rounded-md text-cyan-500 overflow-hidden group hover:text-white hover:border-purple-700">
                                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-700 transform -translate-x-full transition-all duration-300 group-hover:translate-x-0"></span>
                                <span className="relative z-10 font-bold">Subscribe</span>
                            </a>

                        </div>

                    </div>

                ))}
                
            </div>
        </div>
    );
};

export default Prices;