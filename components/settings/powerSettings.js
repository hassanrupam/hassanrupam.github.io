import { useEffect, useState } from "react";
import { APP_CONSTANTS } from "../../apps.config";
import UnlockHeader from "./unlockHead";
import Slider from "../common/slider";
import ToggleSwitch from "../util components/ToggleSwitch";
import SmallArrow from "../util components/small_arrow";

const Power = (props) => {

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
                    <span className='w-4/4 flex items-center justify-between font-bold'>Battery</span>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-2 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <Slider initialValue={81} minValue={0} maxValue={100} disabled={APP_CONSTANTS.BOOLEAN.TRUE} overWriteColor="#3CB371"/>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-2 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex flex-col justify-start px-2">
                        <span>Not charging</span>
                    </div>
                    <div className="w-64 flex justify-end">
                        <span className="w-64  flex items-center justify-end">
                           81%
                        </span>
                    </div>
                </div>
                <div className="md:w-3/4 w-2/3 m-auto mt-6">
                    <span className='w-4/4 flex items-center justify-between font-bold'>Power Mode</span>
                </div>
                <div className={`md:w-3/4 w-2/3 m-auto  pb-2 flex flex-col items-start justify-start pt-1 ${!visible ? 'opacity-30' : 'opacity-50'}`}>
                    <span>Affects system performance and power usage.</span>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-2 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5">
                    <span className="flex flex-end space-x-4 pl-2">
                        <label class="custom-radio">Performance <p className="w-3/3 flex items-center justify-between text-xs text-gray-400">High performance and power usage.</p>
                            <input type="radio" checked={APP_CONSTANTS.BOOLEAN.TRUE} name="radio" />
                            <span class="checkmark"></span>
                        </label>
                    </span>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-2 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5">
                    <span className="flex flex-end space-x-4 pl-2">
                        <label class="custom-radio">Balanced <p className="w-3/3 flex items-center justify-between text-xs text-gray-400">Standard performance and power usage.</p>
                            <input type="radio" checked={APP_CONSTANTS.BOOLEAN.FALSE} name="radio" />
                            <span class="checkmark"></span>
                        </label>
                    </span>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-2 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5">
                    <span className="flex flex-end space-x-4 pl-2">
                        <label class="custom-radio">Power Saver <p className="w-3/3 flex items-center justify-between text-xs text-gray-400">Reduced performance and power usage.</p>
                            <input type="radio" checked={APP_CONSTANTS.BOOLEAN.FALSE} name="radio" />
                            <span class="checkmark"></span>
                        </label>
                    </span>
                </div>
                <div className="md:w-3/4 w-2/3 m-auto mt-6">
                    <span className='w-4/4 flex items-center justify-between font-bold'>Power Saving Options</span>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-2 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex flex-col justify-start px-2">
                        <span>Dim Screen</span>
                        <p className='w-3/3 flex items-center justify-between text-xs text-gray-400'>Reduces the screen brightness when the computer is inactive.</p>
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
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-2 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex flex-col justify-start px-2">
                        <span>Screen Blank</span>
                        <p className='w-3/3 flex items-center justify-between text-xs text-gray-400'>Turns the screen off after a period of inactivity.</p>
                    </div>
                    <div className="w-64 flex justify-end">
                        <span className="w-32 px-4 flex items-center justify-end">
                            5 minutes
                        </span>
                        <span className='w-8 flex items-center justify-center rounded'>
                            <SmallArrow angle={APP_CONSTANTS.ANGLES.DOWN} />
                        </span>
                    </div>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-2 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex flex-col justify-start px-2">
                        <span>Automatic Power Saver</span>
                        <p className='w-3/3 flex items-center justify-between text-xs text-gray-400'>Enables power saver mode when battery is low.</p>
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
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-2 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex flex-col justify-start px-2">
                        <span>Automatic Suspend</span>
                        <p className='w-3/3 flex items-center justify-between text-xs text-gray-400'>Pauses the computer after a period of inactivity.</p>
                    </div>
                    <div className="w-64 flex justify-end">
                        <span className="w-64 px-4 flex items-center justify-end">
                            When on battery power
                        </span>
                    </div>
                </div>
                <div className="md:w-3/4 w-2/3 m-auto mt-6">
                    <span className='w-4/4 flex items-center justify-between font-bold'>Suspend & Power Button</span>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-3 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex flex-col justify-start px-2">
                        <span>Power Button Behavior</span>
                    </div>
                    <div className="w-64 flex justify-end">
                        <span className="w-32 px-4 flex items-center justify-end">
                        Power Off
                        </span>
                        <span className='w-8 flex items-center justify-center rounded'>
                            <SmallArrow angle={APP_CONSTANTS.ANGLES.DOWN} />
                        </span>
                    </div>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-3 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex flex-col justify-start px-2">
                        <span>Show Battery Percentage</span>
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
            </div>
        </>
    )
}

export default Power;