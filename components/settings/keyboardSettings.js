import { useEffect, useState } from "react";
import { APP_CONSTANTS, UBUNTU_ICONS } from "../../apps.config";
import UnlockHeader from "./unlockHead";

const Keyboard = (props) => {
    const panEndIcon = UBUNTU_ICONS.EMBLEMS.EMBLEM_PAN_END;
    const dragIcon = UBUNTU_ICONS.EMBLEMS.EMBLEM_LIST_DRAG_ICON;
    const viewMoreIcon = UBUNTU_ICONS.EMBLEMS.VIEW_MORE;

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
                    <span className='w-4/4 flex items-center justify-between font-bold'>Input Sources</span>
                </div>
                <div className={`md:w-3/4 w-2/3 m-auto  pb-2 flex flex-col items-start justify-start pt-1 ${!visible ? 'opacity-30' : 'opacity-50'}`}>
                    <span>Includes keyboard layouts and input methods.</span>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-4 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5">
                    <span className="flex flex-end space-x-4 pl-2">
                        <img width="14px" height="14px" src={dragIcon.SRC} alt={`ubuntu system version ${dragIcon.ALT}`} />
                        <span> English (US)</span>
                    </span>
                    
                    <span className="flex flex-end space-x-2">
                        <img width="16px" height="16px" src={viewMoreIcon.SRC} alt={`ubuntu system version ${viewMoreIcon.ALT}`} />
                    </span>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-4 px-2 flex items-center opacity-80 justify-center bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5">
                    <button className="text-2xl" onClick={handleClick}>+</button>
                </div>

                <div className="md:w-3/4 w-2/3 m-auto pt-8">
                    <span className='w-4/4 flex items-center justify-between font-bold'>Input Source Switching</span>
                </div>
                <div className={`md:w-3/4 w-2/3 m-auto  pb-2 flex flex-col items-start justify-start pt-1 ${!visible ? 'opacity-30' : 'opacity-50'}`}>
                    <span>Input sources can be switched using the Super+Space keyboard shortcut. This can be changed in the keyboard shortcut settings.</span>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-4 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5">
                    <span className="flex flex-end space-x-4 pl-2">
                        <label class="custom-radio">Use the same source for all windows
                            <input type="radio"  checked={APP_CONSTANTS.BOOLEAN.TRUE} name="radio"/>
                            <span class="checkmark"></span>
                        </label>
                    </span>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-4 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5">
                    <span className="flex flex-end space-x-4 pl-2">
                         <label class="custom-radio">Switch input sources individually for each window
                            <input type="radio"  checked={APP_CONSTANTS.BOOLEAN.FALSE} name="radio"/>
                            <span class="checkmark"></span>
                        </label>
                    </span>
                </div>
                
                <div className="md:w-3/4 w-2/3 m-auto pt-8">
                    <span className='w-4/4 flex items-center justify-between font-bold'>Special Character Entry</span>
                </div>
                <div className={`md:w-3/4 w-2/3 m-auto  pb-2 flex flex-col items-start justify-start pt-1 ${!visible ? 'opacity-30' : 'opacity-50'}`}>
                    <span>Methods for entering symbols and letter variants using the keyboard.</span>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-4 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex items-center justify-start px-2">
                        <span>Alternate Characters Key</span>
                    </div>
                    <div className="w-64 flex justify-end">
                        <span className="w-30 px-2 flex items-center justify-end"> Layout default</span>
                        <span className='w-8 flex items-center justify-center rounded'>
                            <img width="20px" height="20px" src={panEndIcon.SRC} alt={`ubuntu system version ${panEndIcon.ALT}`} />
                        </span>
                    </div>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-4 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex items-center justify-start px-2">
                        <span>Compose Key</span>
                    </div>
                    <div className="w-64 flex justify-end">
                        <span className="w-30 px-2 flex items-center justify-end"> Layout default</span>
                        <span className='w-8 flex items-center justify-center rounded'>
                            <img width="20px" height="20px" src={panEndIcon.SRC} alt={`ubuntu system version ${panEndIcon.ALT}`} />
                        </span>
                    </div>
                </div>
                <div className="md:w-3/4 w-2/3 m-auto pt-8">
                    <span className='w-4/4 flex items-center justify-between font-bold'>Keyboard Shortcuts</span>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-4 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex items-center justify-start px-2">
                        <span>View and Customize Shortcuts</span>
                    </div>
                    <div className="w-64 flex justify-end">
                        <span className="w-30 px-4 flex items-center justify-end">
                        </span>
                        <span className='w-10 flex items-center justify-center rounded'>
                            <img width="20px" height="20px" src={panEndIcon.SRC} alt={`ubuntu system version ${panEndIcon.ALT}`} />
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Keyboard;