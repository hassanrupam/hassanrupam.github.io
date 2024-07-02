import { useEffect, useState } from "react";
import UnlockHeader from "./unlockHead";
import { APP_CONSTANTS, UBUNTU_ICONS } from "../../apps.config";
import ToggleSwitch from "../util components/ToggleSwitch";

const MultiTasking = (props) => {
    const [visible, setVisible] = useState(APP_CONSTANTS.BOOLEAN.FALSE);
    const [value, setValue] = useState(4);

    const handleIncrement = () => {
        // setValue(value + 1);
    };

    const handleDecrement = () => {
        // setValue(value - 1);
    };

    const hotCornerIndicator = UBUNTU_ICONS.SYSTEM.HOT_CORNER;
    const screenEdgeIndicator = UBUNTU_ICONS.SYSTEM.SCREEN_EDGE;
    const workSpaceOnlyPrimary = UBUNTU_ICONS.SYSTEM.WORKSPACE_ONLY_PRIMARY;
    const workSpaceAll = UBUNTU_ICONS.SYSTEM.WORKSPACE_ALL_DISPLAY;
    

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
            <div className={"w-full h-full flex-col flex-grow z-20 max-h-full overflow-y-auto windowMainScreen select-none bg-ub-cool-grey-light opacity-80"} style={{ paddingBottom: "3rem" }} onClick={handleClick}>
                <div className="md:w-3/4 w-2/3 m-auto mb-2">
                    <span className='w-4/4 flex items-center justify-between font-bold'>General</span>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto flex flex-col  py-2 px-2 bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-full m-auto flex items-center justify-between">
                        <div className="w-2/3 flex flex-col justify-start px-2">
                            <span>Hot Corner</span>
                            <p className='w-3/3 flex items-center justify-between text-xs text-gray-400'>Touch the top-left corner to open the Activities overview.</p>
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
                                    onChange={() => { }}
                                    offstyle="switch-off"
                                    onstyle="switch-on"
                                />
                            </span>
                        </div>
                    </div>
                    <div className="w-full h-40 flex items-center m-auto p-2">
                        <div className="w-full h-full flex items-center justify-center bg-ub-cool-grey-light">
                            <div className="image-container">
                                <img width="200px" height="100px" src={hotCornerIndicator.SRC} alt={`${hotCornerIndicator.ALT}`} />
                                <div className="overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto flex flex-col  py-2 px-2 bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-full m-auto flex items-center justify-between">
                        <div className="w-2/3 flex flex-col justify-start px-2">
                            <span>Active Screen Edges</span>
                            <p className='w-3/3 flex items-center justify-between text-xs text-gray-400'>Drag windows against the top, left and right screen edges to resize them.</p>
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
                                    onChange={() => { }}
                                    offstyle="switch-off"
                                    onstyle="switch-on"
                                />
                            </span>
                        </div>
                    </div>
                    <div className="w-full h-40 flex items-center m-auto p-2">
                        <div className="w-full h-full flex items-center justify-center bg-ub-cool-grey-light">
                            <div className="image-container">
                                <img width="200px" height="100px" src={screenEdgeIndicator.SRC} alt={`${screenEdgeIndicator.ALT}`} />
                                <div className="overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-3/4 w-2/3 m-auto mt-6 mb-2">
                    <span className='w-4/4 flex items-center justify-between font-bold'>Workspaces</span>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-2 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5">
                    <span className="flex flex-end space-x-4 pl-2">
                        <label class="custom-radio">Dynamic workspaces <p className="w-3/3 flex items-center justify-between text-xs text-gray-400">Automatically removes empty workspaces.</p>
                            <input type="radio" checked={APP_CONSTANTS.BOOLEAN.TRUE} name="radio-workspaces" />
                            <span class="checkmark"></span>
                        </label>
                    </span>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-2 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5">
                    <span className="flex flex-end space-x-4 pl-2">
                        <label class="custom-radio">Fixed number of workspaces <p className="w-3/3 flex items-center justify-between text-xs text-gray-400">Specify a number of permanent workspaces.</p>
                            <input type="radio" checked={APP_CONSTANTS.BOOLEAN.FALSE} name="radio-workspaces" />
                            <span class="checkmark"></span>
                        </label>
                    </span>
                </div>
                <div className="md:w-3/4 w-2/3 m-auto px-4 py-2 flex items-center justify-between bg-ub-cool-grey md:rounded-none rounded-sm cursor-default outline-none focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5">
                    <div className="w-3/4 flex items-center justify-start text-gray-400 p-2">
                        <span>Number of Workspaces</span>
                    </div>
                    <div className="w-32 text-gray-400">
                        <div className="flex items-center border border-gray-700 rounded bg-ub-cool-grey-light text-white">
                            <span className="px-4 text-center border-l border-r border-gray-700">{value}</span>
                            <button
                                className="bg-transparent border-none text-white text-xl px-4 py-2 hover:bg-ub-cool-grey-lighter rounded-l focus:outline-none"
                                onClick={handleDecrement}
                            >
                                −
                            </button>
                            <button
                                className="bg-transparent border-none text-white text-xl px-4 py-2 hover:bg-ub-cool-grey-lighter rounded-r focus:outline-none"
                                onClick={handleIncrement}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
                <div className="md:w-3/4 w-2/3 m-auto mt-6 mb-2">
                    <span className='w-4/4 flex items-center justify-between font-bold'>Multi-Monitor</span>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto flex flex-col  py-2 px-2 bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-full m-auto flex items-center justify-between">
                        <span className="flex flex-end space-x-4 pl-2">
                            <label class="custom-radio">Workspaces on primary display only
                                <input type="radio" checked={APP_CONSTANTS.BOOLEAN.TRUE} name="radio-workspaces-multi-monit" />
                                <span class="checkmark"></span>
                            </label>
                        </span>
                    </div>
                    <div className="w-full h-40 flex items-center m-auto p-2">
                        <div className="w-full h-full flex items-center justify-center bg-ub-cool-grey-light">
                            <div className="image-container">
                                <img width="300px" height="150px" src={workSpaceOnlyPrimary.SRC} alt={`${workSpaceOnlyPrimary.ALT}`} />
                                <div className="overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto flex flex-col  py-2 px-2 bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-full m-auto flex items-center justify-between">
                        <span className="flex flex-end space-x-4 pl-2">
                            <label class="custom-radio">Workspaces on all displays
                                <input type="radio" checked={APP_CONSTANTS.BOOLEAN.FALSE} name="radio-workspaces-multi-monit" />
                                <span class="checkmark"></span>
                            </label>
                        </span>
                    </div>
                    <div className="w-full h-40 flex items-center m-auto p-2">
                        <div className="w-full h-full flex items-center justify-center bg-ub-cool-grey-light">
                            <div className="image-container">
                                <img width="300px" height="150px" src={workSpaceAll.SRC} alt={`${workSpaceAll.ALT}`} />
                                <div className="overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-3/4 w-2/3 m-auto mt-6 mb-2">
                    <span className='w-4/4 flex items-center justify-between font-bold'>Application Switching</span>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-2 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5">
                    <span className="flex flex-end space-x-4 pl-2 p-2">
                        <label class="custom-radio">Include applications from all workspaces
                            <input type="radio" checked={APP_CONSTANTS.BOOLEAN.TRUE} name="radio-application-switching" />
                            <span class="checkmark"></span>
                        </label>
                    </span>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-2 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5">
                    <span className="flex flex-end space-x-4 pl-2 p-2">
                        <label class="custom-radio">Include applications from the current workspace only
                            <input type="radio" checked={APP_CONSTANTS.BOOLEAN.FALSE} name="radio-application-switching" />
                            <span class="checkmark"></span>
                        </label>
                    </span>
                </div>

                <div className=" mt-4 text-sm md:w-3/4 w-2/3 m-auto py-2 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5">
                    <span className="flex flex-end space-x-4 pl-2 p-2">
                        <label class="custom-radio">Include applications from all monitors
                            <input type="radio" checked={APP_CONSTANTS.BOOLEAN.TRUE} name="radio-application-switching-monit" />
                            <span class="checkmark"></span>
                        </label>
                    </span>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-2 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5">
                    <span className="flex flex-end space-x-4 pl-2 p-2">
                        <label class="custom-radio">Include applications from the each monitor only
                            <input type="radio" checked={APP_CONSTANTS.BOOLEAN.FALSE} name="radio-application-switching-monit" />
                            <span class="checkmark"></span>
                        </label>
                    </span>
                </div>
            </div>
        </>
    )
}

export default MultiTasking;