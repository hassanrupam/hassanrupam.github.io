const Education = (props) => {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Masters of Science in Computer Science & Engineering
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2020 - 2022</div>
                    <div className=" text-sm md:text-base">Jahangirnagar University, Dhaka, Bangladesh</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">CGPA &nbsp; 3.58 (out of 4)</div>
                </li>
                <li className="list-disc mt-5">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Bachelor of Science in Computer Science & Engineering
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2013 - 2014</div>
                    <div className=" text-sm md:text-base"> International University of Business Agriculture & Technology, Dhaka, Bangladesh</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">CGPA &nbsp; 3.95 (out of 4)</div>
                </li>
                <li className="list-disc mt-5">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        HSC<sup>th</sup> (Science)
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2013 - 2014</div>
                    <div className=" text-sm md:text-base"> Shaheed Sayed Nazrul Islam College, Mymensingh, Bangladesh</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">GPA &nbsp; 5 (out of 5)</div>
                </li>
                <li className="list-disc mt-5">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        SSC<sup>th</sup> (Science)
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2011 - 2012</div>
                    <div className=" text-sm md:text-base">Premier Ideal High School, Mymensingh, Bangladesh</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">GPA &nbsp; 5 (out of 5)</div>
                </li>
            </ul>
        </>
    )
}

export default Education;