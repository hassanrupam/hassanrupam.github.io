import { useEffect, useState } from "react";
import UnlockHeader from "./unlockHead";

const Sharing = (props) => {
    const [visible, setVisible] = useState(false)

    const handleClick = () => {
        setVisible(true);
    }

    useEffect(()=>{
        if(visible){
            setVisible(false)
        }
    },[visible])

    return (
        <>
            <UnlockHeader triggerActive = {visible}/>
            <div className={"w-full flex-col flex-grow z-20 max-h-full overflow-y-auto windowMainScreen select-none bg-ub-cool-grey-light opacity-80"} onClick={handleClick}>
                <div className=" md:w-3/4 w-2/3 m-auto mt-10">
                    <span className='w-4/4 flex items-center justify-between font-bold '>Computer Name</span>
                </div>
                <div className=" md:w-3/4 w-2/3 m-auto p-2 bg-ub-cool-grey bg-opacity-60">
                    <span className='w-4/4 flex items-center justify-between  text-gray-400'>rupam@ROG-Zephyrus G14</span>
                </div>
                <div className="md:w-3/4 w-2/3 m-auto mt-5 p-2 flex items-center justify-between bg-ub-cool-grey md:rounded-none rounded-sm cursor-default outline-none focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5">
                    <div className="w-3/4 flex items-center justify-start text-gray-400">
                        <span>Screen Sharing</span>
                    </div>
                    <div className="w-8 text-gray-400">
                        <span>Off</span>
                    </div>
                </div>
                <div className="md:w-3/4 w-2/3 m-auto p-2 flex items-center justify-between bg-ub-cool-grey md:rounded-none rounded-sm cursor-default outline-none focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5">
                    <div className="w-3/4 flex items-center justify-start text-gray-400">
                        <span>Media Sharing</span>
                    </div>
                    <div className="w-8 text-gray-400">
                        <span>Off</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sharing;
