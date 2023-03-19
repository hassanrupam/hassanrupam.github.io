import { useEffect, useState } from "react";
import UnlockHeader from "./unlockHead";

const AboutPc = (props) => {
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
            <div className={"w-full h-full flex-col flex-grow z-20 max-h-full overflow-y-auto windowMainScreen select-none bg-ub-cool-grey-light"} onClick={handleClick}>
                <div className="w-4/4 flex flex-grow flex-col items-center justify-between p-4">
                    <img width="200px" height="200px" className="md:w-1/4 w-1/2" src="./themes/Yaru/status/cof_orange_hex.svg" alt="Ubuntu Logo" />
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-2 px-4 flex items-center justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-default outline-none focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5
                focus-within:outline-none focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-500" onClick={handleClick}>
                    <div className="w-2/3 flex items-center justify-start px-4">
                        <span>Device Name</span>
                    </div>
                    <div className="w-64 text-xs text-gray-400 flex justify-end">
                        <span>rupam@ROG-Zephyrus G14</span>
                        <div className="w-4 opacity-50">
                            <img width="16px" height="16px" src="./themes/Yaru/emblems/pan-end-symbolic.svg" alt="ubuntu device name" />
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-sm md:w-3/4 w-2/3 m-auto py-2 px-4 flex items-center justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-default outline-none focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5
                focus-within:outline-none focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-500">
                    <div className="w-2/3 flex items-center justify-start px-4">
                        <span>Memory</span>
                    </div>
                    <div className="w-32 text-xs text-gray-400 flex justify-end">
                        <span>31.4 GiB</span>
                    </div>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-2 px-4 flex items-center justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-default outline-none focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5
                focus-within:outline-none focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-500">
                    <div className="w-2/3 flex items-center justify-start px-4">
                        <span>Processor</span>
                    </div>
                    <div className="w-72 text-xs text-gray-400 flex justify-end">
                        <span>AMD Ryzen™ 9 6900 HS AMD Ryzen™ 7 6800H</span>
                    </div>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-2 px-4 flex items-center justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-default outline-none focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5
                focus-within:outline-none focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-500">
                    <div className="w-2/3 flex items-center justify-start px-4">
                        <span>Graphics</span>
                    </div>
                    <div className="w-72 text-xs text-gray-400 flex justify-end">
                        <span>AMD Radeon™ RX 6800S</span>
                    </div>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-2 px-4 flex items-center justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-default outline-none focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5
                focus-within:outline-none focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-500">
                    <div className="w-2/3 flex items-center justify-start px-4">
                        <span>Disk Capacity</span>
                    </div>
                    <div className="w-72 text-xs text-gray-400 flex justify-end">
                        <span>M.2 PCIe® 4.0 SSD 1 TB</span>
                    </div>
                </div>

                <div className="mt-8 text-sm md:w-3/4 w-2/3 m-auto py-2 px-4 flex items-center justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-default outline-none focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5
                focus-within:outline-none focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-500">
                    <div className="w-2/3 flex items-center justify-start px-4">
                        <span>OS Name</span>
                    </div>
                    <div className="w-32 text-xs text-gray-400 flex justify-end">
                        <span>Ubuntu 20.04.5 LTS</span>
                    </div>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-2 px-4 flex items-center justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-default outline-none focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5
                focus-within:outline-none focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-500">
                    <div className="w-2/3 flex items-center justify-start px-4">
                        <span>OS Type</span>
                    </div>
                    <div className="w-32 text-xs text-gray-400 flex justify-end">
                        <span>64-bit</span>
                    </div>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-2 px-4 flex items-center justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-default outline-none focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5
                focus-within:outline-none focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-500">
                    <div className="w-2/3 flex items-center justify-start px-4">
                        <span>GNOME Version</span>
                    </div>
                    <div className="w-32 text-xs text-gray-400 flex justify-end">
                        <span>3.36.8</span>
                    </div>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-2 px-4 flex items-center justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-default outline-none focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5
                focus-within:outline-none focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-500">
                    <div className="w-2/3 flex items-center justify-start px-4">
                        <span>Windowing System</span>
                    </div>
                    <div className="w-32 text-xs text-gray-400 flex justify-end">
                        <span>X11</span>
                    </div>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-2 px-4 flex items-center justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-default outline-none focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5
                focus-within:outline-none focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-500" onClick={handleClick}>
                    <div className="w-2/3 flex items-center justify-start px-4">
                        <span>Software Updates</span>
                    </div>
                    <div className="w-32 text-xs text-gray-400 flex justify-end">
                        <div className="w-4 opacity-50">
                            <img width="16px" height="16px" src="./themes/Yaru/emblems/pan-end-symbolic.svg" alt="ubuntu system update" />
                        </div>
                    </div>
                </div>



                
            </div>
        </>
    )
}

export default AboutPc;