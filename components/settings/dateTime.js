import ToggleSwitch from "../util components/ToggleSwitch";
import Clock from '../util components/clock';
import SmallArrow from "../util components/small_arrow";
import UnlockHeader from "./unlockHead";
import { useEffect, useState } from "react";
import { TIME_MERIDIEM } from "../../apps.config";

const DateTime = (props) => {

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
            <div className={"text-sm w-full flex-col flex-grow z-20 max-h-full overflow-y-auto windowMainScreen select-none bg-ub-cool-grey-light opacity-80"} onClick={handleClick}>
                <div className=" md:w-3/4 w-2/3 m-auto mt-4 bg-ub-cool-grey p-4">
                    <span className='w-4/4 flex items-center justify-between font-bold text-gray-400 opacity-50'>Automatic Date & Time
                        <ToggleSwitch
                            description={""}
                            checked={true}
                            activeLabel={""}
                            deactiveLabel={""}
                            size={'default'}
                            disabled={true}
                            onChange={(e) => { handleClick() }}
                            offstyle="switch-off"
                            onstyle="switch-on"
                        />
                    </span>
                    <p className="text-xs text-gray-400 opacity-50">Requires internet access</p>
                </div>
                <div className=" md:w-3/4 w-2/3 m-auto bg-ub-cool-grey p-4">
                    <span className='w-4/4 flex items-center justify-between font-bold text-gray-400 opacity-50'>Automatic Timezone
                        <ToggleSwitch
                            description={""}
                            checked={false}
                            activeLabel={""}
                            deactiveLabel={""}
                            size={'default'}
                            disabled={true}
                            onChange={(e) => { handleClick() }}
                            offstyle="switch-off"
                            onstyle="switch-on"
                        />
                    </span>
                    <p className="text-xs text-gray-400 opacity-50">Requires location services enabled & internet access</p>
                </div>
                <div className=" md:w-3/4 w-2/3 m-auto bg-ub-cool-grey p-4">
                    <span className='w-4/4 flex items-center justify-between font-bold text-gray-400 opacity-50'>Date & Time
                        <Clock />
                    </span>
                </div>
                <div className=" md:w-3/4 w-2/3 m-auto bg-ub-cool-grey p-4">
                    <span className='w-4/4 flex items-center justify-between font-bold text-gray-400 opacity-50'>Time Zone
                        <span> +06 (Dhaka, Bangladesh)</span>
                    </span>
                </div>

                <div className="mt-4 md:w-3/4 w-2/3 m-auto bg-ub-cool-grey p-4">
                    <span className='w-4/4 flex items-center justify-between font-bold text-gray-400 opacity-50'>Time Format
                        <span className="bg-ub-cool-grey-light px-4 py-2 flex items-center justify-between mr-2 cursor-pointer" onClick={handleClick}> {TIME_MERIDIEM.AM} / {TIME_MERIDIEM.PM} 
                        <SmallArrow className={"p-2"} angle="down" /></span>
                    </span>
                </div>
            </div>
        </>
    )
}

export default DateTime;
