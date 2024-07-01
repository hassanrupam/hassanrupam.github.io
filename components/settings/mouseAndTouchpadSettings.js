import { useEffect, useState } from "react";
import UnlockHeader from "./unlockHead";
import { APP_CONSTANTS } from "../../apps.config";
import ToggleSwitch from "../util components/ToggleSwitch";
import Slider from "../common/slider";

const MouseAndTouchpad = (props) => {

    const [visible, setVisible] = useState(APP_CONSTANTS.BOOLEAN.FALSE);

    const handleClick = () => {
        setVisible(APP_CONSTANTS.BOOLEAN.TRUE);
    }

    useEffect(() => {
        if (visible) {
            setVisible(APP_CONSTANTS.BOOLEAN.FALSE)
        }
    }, [visible])
    return (
        <>
            <UnlockHeader triggerActive={visible} />
            <div className={"w-full h-full flex-col flex-grow z-20 max-h-full overflow-y-auto windowMainScreen select-none bg-ub-cool-grey-light"} style={{ paddingBottom: "3rem" }} onClick={handleClick}>
                <div className="md:w-3/4 w-2/3 m-auto">
                    <span className='w-4/4 flex items-center justify-between font-bold'>General</span>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-4 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex flex-col justify-start px-2">
                        <span>Primary Button</span>
                        <p className='w-3/3 flex items-center justify-between text-xs text-gray-400'>Sets the order of physical buttons on mice and touchpads.</p>
                    </div>
                    <div className="w-64 flex justify-end">
                        <span className="w-16 p-2 flex items-center justify-center rounded bg-ub-grey">
                            Left
                        </span>
                        <span className='w-16 p-2 flex items-center justify-center rounded bg-ub-cool-grey-lighter'>
                            Right
                        </span>
                    </div>
                </div>
                <div className="md:w-3/4 w-2/3 m-auto mt-6">
                    <span className='w-4/4 flex items-center justify-between font-bold'>Mouse</span>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-3 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-1/3 flex items-center justify-start px-2">
                        <span>Mouse Speed</span>
                    </div>
                    <div className="w-2/3 flex justify-end">
                         <Slider initialValue={50} minValue={0} maxValue={100} disabled={APP_CONSTANTS.BOOLEAN.TRUE}/>
                    </div>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-4 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex flex-col justify-start px-2">
                        <span>Natural Scrolling</span>
                        <p className='w-3/3 flex items-center justify-between text-xs text-gray-400'>Scrolling moves the content, not the view.</p>
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
                <div className="md:w-3/4 w-2/3 m-auto mt-6">
                    <span className='w-4/4 flex items-center justify-between font-bold'>Touchpad</span>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-4 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex flex-col justify-start px-2">
                        <span>Touchpad</span>
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
                        <span>Natural Scrolling</span>
                        <p className='w-3/3 flex items-center justify-between text-xs text-gray-400'>Scrolling moves the content, not the view.</p>
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
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-3 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-1/3 flex items-center justify-start px-2">
                        <span>Touchpad Speed</span>
                    </div>
                    <div className="w-2/3 flex justify-end">
                         <Slider initialValue={50} minValue={0} maxValue={100} disabled={APP_CONSTANTS.BOOLEAN.TRUE}/>
                    </div>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-4 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex flex-col justify-start px-2">
                        <span>Tap to Click</span>
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
                        <span>Two-finger Scrolling</span>
                    </div>
                    <div className="w-64 flex justify-end">
                        <span className="w-64  flex items-center justify-end">
                            <ToggleSwitch
                                description={""}
                                checked={APP_CONSTANTS.BOOLEAN.FALSE}
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
                        <span>Edge Scrolling</span>
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
            </div>
        </>
    )
}

export default MouseAndTouchpad;