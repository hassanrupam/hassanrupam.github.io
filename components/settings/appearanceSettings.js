import { useEffect, useState } from "react";
import UnlockHeader from "./unlockHead";
import ToggleSwitch from "../util components/ToggleSwitch";
import SmallArrow from "../util components/small_arrow";
import { APP_CONSTANTS, UBUNTU_ICONS } from "../../apps.config";
import Slider from "../common/slider";

const Appearance = (props) => {

    const panEndIcon = UBUNTU_ICONS.EMBLEMS.EMBLEM_PAN_END;

    const [visible, setVisible] = useState(APP_CONSTANTS.BOOLEAN.FALSE);

    const handleClick = () => {
        setVisible(APP_CONSTANTS.BOOLEAN.TRUE);
    }

    useEffect(() => {
        if (visible) {
            setVisible(APP_CONSTANTS.BOOLEAN.FALSE)
        }
    }, [visible])

    const ThemeCard = ({ theme, selected }) => {
        return (
            <div className="flex flex-col justify-center">
                <div
                    className={`flex justify-start items-end p-2 w-[12rem] h-[7rem] rounded-lg shadow-lg ${selected ? 'outline outline-orange-600 outline-2 outline-offset-4' : ''} bg-gradient-to-b from-orange-100 to-orange-600`}
                >
                    <div className="flex justify-center ml-4">
                        <div className={`relative ${theme === 'Dark' ? 'bg-gray-800' : 'bg-white' } w-[5.5rem] h-[4rem] mb-1 ml-1 rounded-md shadow-md custom-shadow`}></div>
                    </div>
                </div>
                <div className="text-center text-white pt-5">{theme}</div>
            </div>
        );
      };

    return (
        <>
            <UnlockHeader triggerActive={visible} />
            <div className={"w-full h-full flex-col flex-grow z-20 max-h-full overflow-y-auto windowMainScreen select-none bg-ub-cool-grey-light"} style={{paddingBottom:"3rem"}} onClick={handleClick}>
                <div className=" md:w-3/4 w-2/3 m-auto">
                    <span className='w-4/4 flex items-center justify-between font-bold '>Style</span>
                </div>
                <div className="md:w-3/4 w-2/3 m-auto my-4 bg-ub-cool-grey p-4">
                    <div className="flex pt-4 justify-evenly space-x-8">
                            <ThemeCard theme="Light" selected={APP_CONSTANTS.BOOLEAN.FALSE} />
                            <ThemeCard theme="Dark" selected={APP_CONSTANTS.BOOLEAN.TRUE} />
                    </div>
                    <div className="flex pt-6 space-x-2 ">
                        <span className='w-4/4 flex items-center justify-between'>Color</span>
                        <div className="flex w-full pl-20 pr-4 space-x-2 justify-between">
                            <div className={`w-6 h-6 bg-orange-600 outline outline-2 outline-orange-600 outline-offset-4 rounded-full`}></div>
                            <div className={`w-6 h-6 bg-gray-500  rounded-full`}></div>
                            <div className={`w-6 h-6 bg-green-500  rounded-full`}></div>
                            <div className={`w-6 h-6 bg-lime-700  rounded-full`}></div>
                            <div className={`w-6 h-6 bg-teal-700  rounded-full`}></div>
                            <div className={`w-6 h-6 bg-blue-700  rounded-full`}></div>
                            <div className={`w-6 h-6 bg-purple-600  rounded-full`}></div>
                            <div className={`w-6 h-6 bg-pink-500  rounded-full`}></div>
                            <div className={`w-6 h-6 bg-red-500  rounded-full`}></div>
                        </div>
                    </div>
                </div>
                <div className="md:w-3/4 w-2/3 m-auto pt-6">
                    <span className='w-4/4 flex items-center justify-between font-bold'>Desktop Icons</span>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-4 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex items-center justify-start px-2">
                        <span>Size</span>
                    </div>
                    <div className="w-64 flex justify-end">
                        <span className="w-32 px-4 flex items-center justify-end">
                            Normal
                        </span>
                        <span className='w-8 flex items-center justify-center rounded'>
                            <SmallArrow angle={APP_CONSTANTS.ANGLES.DOWN} />
                        </span>
                    </div>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-4 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex items-center justify-start px-2">
                        <span>Position of New Icons</span>
                    </div>
                    <div className="w-64 flex justify-end">
                        <span className="w-32 px-4 flex items-center justify-end">
                            Bottom Right
                        </span>
                        <span className='w-8 flex items-center justify-center rounded'>
                            <SmallArrow angle={APP_CONSTANTS.ANGLES.DOWN} />
                        </span>
                    </div>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-4 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex flex-col justify-start px-2">
                        <span>Show Personal folder</span>
                    </div>
                    <div className="w-64 flex justify-end">
                        <span className="w-64  flex items-center justify-end">
                            <ToggleSwitch
                                description={""}
                                checked={APP_CONSTANTS.BOOLEAN.TRUE}
                                activeLabel={""}
                                deactiveLabel={""}
                                size={'default'}
                                disabled={APP_CONSTANTS.BOOLEAN.TRUE}
                                onChange={() => {}}
                                offstyle="switch-off"
                                onstyle="switch-on"
                            />
                        </span>
                    </div>
                </div>
                <div className="md:w-3/4 w-2/3 m-auto pt-6">
                        <span className='w-4/4 flex items-center justify-between font-bold'>Dock</span>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-4 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex flex-col justify-start px-2">
                        <span>Auto-hide the Dock</span>
                        <p className='w-3/3 flex items-center justify-between text-xs text-gray-400'>The dock hides when any windows overlap with it.</p>
                    </div>
                    <div className="w-64 flex justify-end">
                        <span className="w-64  flex items-center justify-end">
                            <ToggleSwitch
                                description={""}
                                checked={APP_CONSTANTS.BOOLEAN.TRUE}
                                activeLabel={""}
                                deactiveLabel={""}
                                size={'default'}
                                disabled={APP_CONSTANTS.BOOLEAN.TRUE}
                                onChange={() => {}}
                                offstyle="switch-off"
                                onstyle="switch-on"
                            />
                        </span>
                    </div>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-4 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex flex-col justify-start px-2">
                        <span>Panel Mpde</span>
                        <p className='w-3/3 flex items-center justify-between text-xs text-gray-400'>The dock extends to the screen edge.</p>
                    </div>
                    <div className="w-64 flex justify-end">
                        <span className="w-64  flex items-center justify-end">
                            <ToggleSwitch
                                description={""}
                                checked={APP_CONSTANTS.BOOLEAN.TRUE}
                                activeLabel={""}
                                deactiveLabel={""}
                                size={'default'}
                                disabled={APP_CONSTANTS.BOOLEAN.TRUE}
                                onChange={() => {}}
                                offstyle="switch-off"
                                onstyle="switch-on"
                            />
                        </span>
                    </div>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-4 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex items-center justify-start px-2">
                        <span>Icon Size</span>
                    </div>
                    <div className="w-2/3 flex justify-end">
                         <Slider showValue={APP_CONSTANTS.BOOLEAN.TRUE} initialValue={48} minValue={16} maxValue={64} disabled={APP_CONSTANTS.BOOLEAN.TRUE}/>
                    </div>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-4 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex items-center justify-start px-2">
                        <span>Show On</span>
                    </div>
                    <div className="w-64 flex justify-end">
                        <span className="w-30 px-4 flex items-center justify-end">
                            Primary Display (1)
                        </span>
                        <span className='w-10 flex items-center justify-center rounded'>
                            <SmallArrow angle={APP_CONSTANTS.ANGLES.DOWN} />
                        </span>
                    </div>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-4 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex items-center justify-start px-2">
                        <span>Position On Screen</span>
                    </div>
                    <div className="w-64 flex justify-end">
                        <span className="w-30 px-4 flex items-center justify-end">
                            Left
                        </span>
                        <span className='w-10 flex items-center justify-center rounded'>
                            <SmallArrow angle={APP_CONSTANTS.ANGLES.DOWN} />
                        </span>
                    </div>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-4 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex items-center justify-start px-2">
                        <span>Configure dock behavior</span>
                    </div>
                    <div className="w-64 flex justify-end">
                        <span className="w-30 px-4 flex items-center justify-end">
                        </span>
                        <span className='w-10 flex items-center justify-center rounded'>
                            <img width="16px" height="16px" src={panEndIcon.SRC} alt={`ubuntu system version ${panEndIcon.ALT}`} />
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Appearance;
