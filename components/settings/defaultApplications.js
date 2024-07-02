import { useEffect, useState } from "react";
import SmallArrow from "../util components/small_arrow";
import { DEFAULT_APP_LIST } from "./constants";
import UnlockHeader from "./unlockHead";

const DefaultApplications = (props) => {
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
                <div className="w-full flex flex-col items-center justify-between pt-8">
                    {
                        DEFAULT_APP_LIST.map((appInfo) => {
                            return (
                                <div className="w-96 flex flex-grow items-center justify-end mx-4 p-2 ">
                                    <span className="text-right opacity-50">{appInfo.appBase}</span>
                                    <span className="w-64 flex justify-between items-center px-2 bg-ub-cool-grey opacity-50 mx-3 border-2 border-black cursor-pointer" onClick={()=>{handleClick()}}>
                                        <span className="flex flex-end">
                                            <span className="flex items-center px-2">
                                                <img width="16px" height="16px" src={appInfo.iconPath} alt="ubuntu web app default" />
                                            </span>
                                            {appInfo.appName}
                                        </span>
                                        <span className="flex flex-end">
                                            <SmallArrow className={"p-2 flex flex-end"} angle="down" />
                                        </span>
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default DefaultApplications;