import { useEffect, useState } from "react";
import { REMOVABLE_MEDIA_OPTIONS } from "../../apps.config";
import Checkbox from "../common/checkbox";
import SmallArrow from "../util components/small_arrow";
import UnlockHeader from "./unlockHead";


const RemovableMedia = (props) => {

    const [restricted, setRestricted] = useState(true);
    const [visible, setVisible] = useState(false);

    const handleAllowedChange = () => {
        const prevRestricted = restricted;
        setRestricted(!prevRestricted);
    }

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
            <UnlockHeader triggerActive={visible} />
            <div className={"w-full flex-col flex-grow z-20 max-h-full overflow-y-auto windowMainScreen select-none bg-ub-cool-grey-light opacity-80"} onClick = {()=> {handleClick()}}>
                <div className={`w-full flex flex-col items-center justify-between pt-8 ${restricted ? 'opacity-30' : 'opacity-50'}`}>
                    <span>Select how media should be handled</span>
                </div>
                <div className="w-full flex flex-col items-center justify-between pt-8">
                    {
                        REMOVABLE_MEDIA_OPTIONS.map((appInfo) => {
                            return (
                                <div className="w-96 flex flex-grow items-center justify-end mx-4 p-2 ">
                                    <span className={`text-right ${restricted ? 'opacity-30' : 'opacity-50'} w-32`}>{appInfo.mediaType}</span>
                                    <span className={`w-64 flex justify-between items-center px-2 bg-ub-cool-grey-light ${restricted ? 'opacity-50' : 'opacity-80'} mx-3 border-2 border-black cursor-pointer`} onClick = {()=> {handleClick()}} >
                                        <span className={`flex flex-end ${!appInfo.optionIcon && 'px-2'}`}>
                                            {
                                                appInfo.optionIcon &&
                                                <span className="flex items-center px-2">
                                                    <img width="16px" height="16px" src={appInfo.optionIcon} alt="ubuntu web app default" />
                                                </span>
                                            }

                                            {appInfo.optionName}
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
                <div className="w-full flex flex-col items-center justify-between pt-4">
                    <div className="w-96 m-auto flex items-center justify-end pt-4 mx-4">
                        <div className={`w-48 ${restricted && 'text-gray-400'} bg-ub-cool-grey bg-opacity-70 p-2 flex justify-center items-center mx-4`}>
                            <button onClick = {()=> {handleClick()}} >other Media...</button>
                        </div>
                    </div>
                </div>
                <div className={`w-full flex flex-col items-center justify-between pt-8 opacity-80`}>
                    {/* <span>Never prompt or start program on media insertion</span> */
                        <Checkbox
                            label={"Never prompt or start program on media insertion"}
                            check={restricted}
                            disabled ={true}
                            onCheck={() => { handleAllowedChange() }}
                        />}
                </div>
            </div>
        </>
    )
}

export default RemovableMedia;