import video1 from "../assets/video/1.mp4";
import video2 from "../assets/video/2.mp4";

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-2 lg:mt-20">
            <h1 className="pt-10 text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide bg-gradient-to-r from-cyan-500 to-cyan-700 text-transparent bg-clip-text">
                VirtualR build tools
                <span className="bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">
                    {" "}
                    for developers
                </span>
            </h1>
            <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
                Empower your creativity and bring your VR app ideas to life with our
                intuitive development tools. Get started today and turn your imagination
                into immersive reality!
            </p>
            <div className="flex justify-center space-x-6 my-10">
                <a href="#" className="relative py-2 px-3 rounded-md text-white bg-gradient-to-r from-purple-500 to-purple-800 overflow-hidden group">
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-700 transform -translate-x-full transition-all duration-300 group-hover:translate-x-0"></span>
                    <span className="relative z-10 font-bold">Try for free</span>
                </a>
                <a href="#" className="relative py-2 px-3 border rounded-md text-cyan-500 overflow-hidden group hover:text-white">
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-700 transform -translate-x-full transition-all duration-300 group-hover:translate-x-0"></span>
                    <span className="relative z-10 font-bold">Documentation</span>
                </a>
            </div>
            <div className="flex mt-10 justify-center">
                <video autoPlay loop muted className="rounded-lg w-1/2 border-4 border-purple-800 shadow-sm shadow-purple-800 mx-2 my-4">
                    <source src={video1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video autoPlay loop muted className="rounded-lg w-1/2 border-4 border-purple-800 shadow-sm shadow-purple-800 mx-2 my-4">
                    <source src={video2} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default HeroSection;