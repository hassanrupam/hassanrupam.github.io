import { useEffect, useState } from "react";
import { APP_CONSTANTS, UBUNTU_ICONS } from "../../apps.config";
import ToggleSwitch from "../util components/ToggleSwitch";
import UnlockHeader from "./unlockHead";

const Network = (props) => {
    const [visible, setVisible] = useState(false)

    const handleClick = () => {
        setVisible(true);
    }

    useEffect(()=>{
        if(visible){
            setVisible(false)
        }
    },[visible])

    const closeIcon = UBUNTU_ICONS.WINDOW.CLOSE;
    const settingIcon = UBUNTU_ICONS.STATUS.SETTING;

    return (
        <>
            <UnlockHeader triggerActive={visible} />
            <div className={"text-sm w-full flex-col flex-grow z-20 max-h-full overflow-y-auto windowMainScreen select-none bg-ub-cool-grey-light"} onClick = {()=> {handleClick()}}>
                <div className="md:w-3/4 w-2/3 m-auto flex items-center justify-between py-1.5 mt-8">
                    <span className='w-2/3 flex items-center justify-start font-bold'>Wired</span>
                    <span className='w-8 flex items-center justify-end p-2 m-2 transition ease-in-out delay-300 border border-black border-0 hover:border-x hover:border-y hover:bg-ub-cool-grey-lighter rounded'>
                        <img className="rotate-45" src={closeIcon.SRC} alt={closeIcon.ALT}></img>
                    </span>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-4 px-2 flex items-center justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex items-center justify-start px-2">
                        <span>Cable Unplugged</span>
                    </div>
                    <div className="w-32 text-xs text-gray-400 flex justify-end">
                        <span className="w-32 px-4 flex items-center justify-end">
                            <ToggleSwitch
                                description={""}
                                checked={false}
                                activeLabel={""}
                                deactiveLabel={""}
                                size={'default'}
                                disabled={true}
                                onChange={() => { }}
                                offstyle="switch-off"
                                onstyle="switch-on"
                            />
                        </span>
                        <span className='w-16 flex items-center justify-center transition ease-in-out delay-300 border border-0 bg-ub-cool-grey-lighter hover:bg-ub-cool-grey-lightest rounded'>
                            <img className="p-2" width={32} height={32} src={settingIcon.SRC} alt={settingIcon.ALT}></img>
                        </span>
                    </div>
                </div>
                <div className="md:w-3/4 w-2/3 m-auto flex items-center justify-between py-1.5">
                    <span className='w-2/3 flex items-center justify-start font-bold'>Other Devices</span>
                    <span className='w-8 flex items-center justify-end p-2 m-2 transition ease-in-out delay-300 border border-black border-0 hover:border-x hover:border-y hover:bg-ub-cool-grey-lighter rounded'>
                    </span>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-4 px-2 flex items-center justify-between bg-ub-cool-grey md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex items-center justify-start px-2">
                        <span>Redmi Note 10 Pro</span>
                    </div>
                    <div className="w-32 text-xs text-gray-400 flex justify-end">
                        <span className="w-32 px-4 flex items-center justify-end">
                            <ToggleSwitch
                                description={""}
                                checked={false}
                                activeLabel={""}
                                deactiveLabel={""}
                                size={'default'}
                                disabled={true}
                                onChange={() => { }}
                                offstyle="switch-off"
                                onstyle="switch-on"
                            />
                        </span>
                        <span className='w-16 flex items-center justify-center transition ease-in-out delay-300 border border-0 bg-ub-cool-grey-lighter  hover:bg-ub-cool-grey-lightest rounded'>
                            <img className="p-2" width={32} height={32} src={settingIcon.SRC} alt={settingIcon.ALT}></img>
                        </span>
                    </div>
                </div>
                <div className="md:w-3/4 w-2/3 m-auto flex items-center justify-between py-1.5">
                    <span className='w-2/3 flex items-center justify-start font-bold'>VPN</span>
                    <span className='w-8 flex items-center justify-end p-2 m-2 transition ease-in-out delay-300 border border-black border-0 hover:border-x hover:border-y hover:bg-ub-cool-grey-lighter rounded'>
                        <img className="rotate-45" src={closeIcon.SRC} alt={closeIcon.ALT}></img>
                    </span>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-4 px-2 flex items-center justify-between bg-ub-cool-grey md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex items-center justify-start px-2">
                        <span>BKashExaVPN</span>
                    </div>
                    <div className="w-32 text-xs text-gray-400 flex justify-end">
                        <span className="w-32 px-4 flex items-center justify-end">
                            <ToggleSwitch
                                description={""}
                                checked={false}
                                activeLabel={""}
                                deactiveLabel={""}
                                size={'default'}
                                disabled={true}
                                onChange={() => { }}
                                offstyle="switch-off"
                                onstyle="switch-on"
                            />
                        </span>
                        <span className='w-16 flex items-center justify-center transition ease-in-out delay-300 border border-0 bg-ub-cool-grey-lighter  hover:bg-ub-cool-grey-lightest rounded'>
                            <img className="p-2" width={32} height={32} src={settingIcon.SRC} alt={settingIcon.ALT}></img>
                        </span>
                    </div>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-4 px-2 flex items-center justify-between bg-ub-cool-grey md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5 mt-8" >
                    <div className="w-2/3 flex items-center justify-start px-2">
                        <span>Network Proxy</span>
                    </div>
                    <div className="w-32 text-xs text-gray-400 flex justify-end">
                        <span className="w-32 px-4 flex items-center justify-end">
                           Off
                        </span>
                        <span className='w-16 flex items-center justify-center transition ease-in-out delay-300 border border-0 bg-ub-cool-grey-lighter  hover:bg-ub-cool-grey-lightest rounded'>
                            <img className="p-2" width={32} height={32} src={settingIcon.SRC} alt={settingIcon.ALT}></img>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Network;