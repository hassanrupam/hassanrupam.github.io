

const About = (props)=> {
    return (
        <>
            <div className="w-48 md:w-56 my-4 bg-white rounded-full">
                <img className="w-full" src="./images/logos/Hi_From_Rupam.png" alt="Rupam Logo" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>My name is <span className="font-bold">Hassan Sakib Afrin (Rupam)</span> ,</div>
                <div className="font-normal ml-1">I'm a <span className="text-cyan-600 font-bold">Software Engineer!</span></div>
            </div>
            <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-pc">I graduated in 2018 from <span className=" font-medium"> International University of Business Agriculture and Technology </span> and currently pursuing Computer Science. I've completed my 6 month intern at <u className=' cursor-pointer '> <a href="https://youngbangla.org/ms-yb-initiatives/" target={"_blank"}>Microsoft Young Bangla</a> </u>, and now working in <u className=' cursor-pointer '> <a href="https://www.bkash.com/" target={"_blank"}>bKash</a> </u> as Data Science Engineer! ( Hit me up <a className='text-underline' href='mailto:hassanrupam@gmail.com'><u>@hassanrupam@gmail.com</u></a> :) )</li>
                <li className=" mt-3 list-building"> I enjoy building awesome softwares that solve practical problems.</li>
                <li className=" mt-3 list-time"> When I am not coding my next project, I like to spend my time reading books, playing guitar or watching <a href="https://www.youtube.com/channel/UCBa659QWEk1AI4Tg--mrJ2A" target="_blank" rel="noreferrer"> tom scott's videos.</a></li>
                <li className=" mt-3 list-star"> And I also have interest in Machine Learning & Data Science!</li>
            </ul>
        </>
    )
}

export default About;