import { useEffect, useState } from "react";
import { APP_CONSTANTS } from "../../apps.config";
import SmallArrow from "../util components/small_arrow";
import ToggleSwitch from "../util components/ToggleSwitch";
import UnlockHeader from "./unlockHead";

const Displays = (props) => {
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(true);
    }

    useEffect(() => {
        if (visible) {
            setVisible(false)
        }
    }, [visible])
    return (
        <>
            <UnlockHeader triggerActive={visible} />
            <div className={"w-full flex-col flex-grow z-20 max-h-full overflow-y-auto windowMainScreen select-none bg-ub-cool-grey-light opacity-80"} onClick={() => { handleClick() }}>
                <div className="md:w-3/4 w-2/3 m-auto flex items-center justify-between py-1.5 mt-8">
                    <span className='w-2/3 flex items-center justify-start font-bold'>Built-in Display</span>
                    <span className='w-8 flex items-center justify-end p-2 m-2 transition ease-in-out delay-300 border border-black border-0 hover:border-x hover:border-y hover:bg-ub-cool-grey-lighter rounded'>
                    </span>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-4 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex items-center justify-start px-2">
                        <span>Orientation</span>
                    </div>
                    <div className="w-64 flex justify-end">
                        <span className="w-32 px-4 flex items-center justify-end">
                            Landscape
                        </span>
                        <span className='w-8 flex items-center justify-center rounded'>
                            <SmallArrow angle={APP_CONSTANTS.ANGLES.DOWN} />
                        </span>
                    </div>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-4 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex items-center justify-start px-2">
                        <span>Resolution</span>
                    </div>
                    <div className="w-64 flex justify-end">
                        <span className="w-64 px-4 flex items-center justify-end">
                            1920 x 1080 (16:9)
                        </span>
                        <span className='w-8 flex items-center justify-center rounded'>
                            <SmallArrow angle={APP_CONSTANTS.ANGLES.DOWN} />
                        </span>
                    </div>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-4 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex items-center justify-start px-2">
                        <span>Refresh Rate</span>
                    </div>
                    <div className="w-64 flex justify-end">
                        <span className="w-64 px-4 flex items-center justify-end">
                            120.00 Hz
                        </span>
                        <span className='w-8 flex items-center justify-center rounded'>
                            <SmallArrow angle={APP_CONSTANTS.ANGLES.DOWN} />
                        </span>
                    </div>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-2 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex items-center justify-start px-2">
                        <span>Scale</span>
                    </div>
                    <div className="w-64 flex justify-end">
                        <span className="w-16 p-2 flex items-center justify-center rounded bg-ub-grey">
                            100%
                        </span>
                        <span className='w-16 p-2 flex items-center justify-center rounded bg-ub-cool-grey-lighter'>
                            200%
                        </span>
                    </div>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-4 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex flex-col justify-start px-2">
                        <span>Fractional Scaling</span>
                        <p className='w-3/3 flex items-center justify-between text-xs text-gray-400'>May increase power usage, lower speed or reduce display sharpness</p>
                    </div>
                    <div className="w-64 flex justify-end">
                        <span className="w-64  flex items-center justify-end">
                            <ToggleSwitch
                                description={""}
                                checked={false}
                                activeLabel={""}
                                deactiveLabel={""}
                                size={'default'}
                                disabled={true}
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

export default Displays;