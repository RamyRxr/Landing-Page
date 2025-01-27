import { features } from "../constants";

const Features = () => {
    return (
        <div className="relative mt-20 border-t border-neutral-800 min-h-[800px]">
            <div className="text-center mt-10">
                <span className="text-purple-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase"> Feature </span>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide bg-gradient-to-r from-cyan-500 to-cyan-700 text-transparent bg-clip-text">
                    Easily build{" "}
                    <span className="bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text"> your code </span>
                </h2>
            </div>
            <div className="flex flex-wrap lg:mt-20">
                {features.map((feature, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
                        <div className="flex">
                            <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-cyan-700 justify-center items-center rounded-full">
                                {feature.icon}
                            </div>
                            <div>
                                <h5 className="mt-1 mb-4 text-xl font-bold bg-gradient-to-r from-purple-300 to-purple-500 text-transparent bg-clip-text">{feature.text}</h5>
                                <p className="text-md p-2 mb-20 text-neutral-500">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;