import { testimonials } from "../constants";
const Rating = () => {
    return (
        <div className="mt-20 tracking-wide border-t border-neutral-800">
            <h2 className="text-3xl bg-gradient-to-r from-purple-300 to-purple-800 text-transparent bg-clip-text py-10 sm:text-5xl lg:text-6xl text-center my-5 lg:my-20 ">
                What People are saying
            </h2>
            <div className="flex flex-wrap justify-center">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                        <div className="bg-gradient-to-r from-[#24012c] to-[#011a31] h-auto w-full rounded-md p-6 text-md border-4 border-purple-800 font-thin">
                            
                            <p className="text-neutral-500 font-bold">{testimonial.text}</p>
                            <div className="flex space-x-3 mt-8 items-start ">
                                <img  className="w-12 h-12 rounded-full border-2 border-neutral-300 object-cover" src={testimonial.image} alt="" />
                                <div>
                                    <h6 className="font-bold text-xl pb-2 bg-gradient-to-r from-cyan-500 to-cyan-700 text-transparent bg-clip-text">{testimonial.user}</h6>
                                    <span className="text-sm font-normal italic text-neutral-500"> {testimonial.company} </span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Rating;
          