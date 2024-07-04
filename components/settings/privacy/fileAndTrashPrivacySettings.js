import { useState } from "react";
import { APP_CONSTANTS } from "../../../apps.config";
import ToggleSwitch from "../../util components/ToggleSwitch";
import SmallArrow from "../../util components/small_arrow";
import ImportantButton from "../../common/importantButton";

const FilesAndTrashPrivacySettings = (props) => {

    const [fileHistory, setFileHistory] = useState(APP_CONSTANTS.BOOLEAN.TRUE);
    const [autoDeleteTrash, setAutoDeleteTrash] = useState(APP_CONSTANTS.BOOLEAN.TRUE);
    const [autoDeleteTemporary, setAutoDeleteTemporary] = useState(APP_CONSTANTS.BOOLEAN.TRUE);

    return (
        <>
            <div className={"w-full h-full flex-col flex-grow text-sm z-20 max-h-full overflow-y-auto windowMainScreen select-none bg-ub-cool-grey-light opacity-80"} style={{ paddingBottom: "3rem" }}>
                <div className="md:w-3/4 w-2/3 m-auto mt-8">
                    <span className='w-4/4 flex items-center justify-between font-bold'>File History</span>
                </div>
                <div className={`md:w-3/4 w-2/3 m-auto  pb-2 flex flex-col items-start justify-start pt-1`}>
                    <span>File history keeps a record of files that you have used. This information is shared between applications, and makes it easier to find files that you might want to use.</span>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-3 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex flex-col justify-start px-2">
                        <span>File History</span>
                    </div>
                    <div className="w-64 flex justify-end">
                        <span className="w-64  flex items-center justify-end">
                            <ToggleSwitch
                                description={""}
                                checked={fileHistory}
                                activeLabel={""}
                                deactiveLabel={""}
                                size={'default'}
                                disabled={APP_CONSTANTS.BOOLEAN.FALSE}
                                onChange={() => { setFileHistory(!fileHistory) }}
                                offstyle="switch-off"
                                onstyle="switch-on"
                            />
                        </span>
                    </div>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-3 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex flex-col justify-start px-2">
                        <span>File History Duration</span>
                    </div>
                    <span className='w-4/4 flex items-center justify-between font-bold text-gray-400'>
                        <span className="w-24 bg-ub-cool-grey-light px-2 py-2 flex items-center justify-between mr-2 cursor-pointer"> Forever
                            <SmallArrow className={""} angle="down" />
                        </span>
                    </span>
                </div>
                <div className="md:w-3/4 w-2/3 m-auto pb-2 flex flex-col items-end justify-end mt-3">
                    {/* <button className={`duration-500  bg-ub-red w-32 p-2 rounded ${effect && 'bg-ub-red-darker animate-wiggle border border-1 border-white'}`} onClick={() => { setEffect(true); }}
                        onAnimationEnd={() => setEffect(false)}> Clear History...
                    </button> */}
                    <ImportantButton label="Clear History..." />
                </div>
                <div className="md:w-3/4 w-2/3 m-auto mt-8">
                    <span className='w-4/4 flex items-center justify-between font-bold'>Trash & Temporary Files</span>
                </div>
                <div className={`md:w-3/4 w-2/3 m-auto  pb-2 flex flex-col items-start justify-start pt-1`}>
                    <span>Trash and temporary files can sometimes include personal or sensitive information. Automatically deleting them can help to protect privacy.</span>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-3 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex flex-col justify-start px-2">
                        <span>Automatically Delete Trash Content</span>
                    </div>
                    <div className="w-64 flex justify-end">
                        <span className="w-64  flex items-center justify-end">
                            <ToggleSwitch
                                description={""}
                                checked={autoDeleteTrash}
                                activeLabel={""}
                                deactiveLabel={""}
                                size={'default'}
                                disabled={APP_CONSTANTS.BOOLEAN.FALSE}
                                onChange={() => { setAutoDeleteTrash(!autoDeleteTrash) }}
                                offstyle="switch-off"
                                onstyle="switch-on"
                            />
                        </span>
                    </div>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-3 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex flex-col justify-start px-2">
                        <span>Automatically Delete Temporary Files</span>
                    </div>
                    <div className="w-64 flex justify-end">
                        <span className="w-64  flex items-center justify-end">
                            <ToggleSwitch
                                description={""}
                                checked={autoDeleteTemporary}
                                activeLabel={""}
                                deactiveLabel={""}
                                size={'default'}
                                disabled={APP_CONSTANTS.BOOLEAN.FALSE}
                                onChange={() => { setAutoDeleteTemporary(!autoDeleteTemporary) }}
                                offstyle="switch-off"
                                onstyle="switch-on"
                            />
                        </span>
                    </div>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-3 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex flex-col justify-start px-2">
                        <span>Automatically Delete Period</span>
                    </div>
                    <span className='w-4/4 flex items-center justify-between font-bold text-gray-400'>
                        <span className="w-24 bg-ub-cool-grey-light px-2 py-2 flex items-center justify-between mr-2 cursor-pointer"> 1 Day
                            <SmallArrow className={""} angle="down" />
                        </span>
                    </span>
                </div>
                <div className="md:w-3/4 w-2/3 m-auto pb-2 flex flex-row items-end justify-end mt-3 space-x-4">
                    {/* <button className={`duration-500  bg-ub-red w-32 p-2 rounded ${effect && 'bg-ub-red-darker animate-wiggle border border-1 border-white'}`} onClick={() => { setEffect(true); }}
                        onAnimationEnd={() => setEffect(false)}> Empty Trash...
                    </button>
                    <button className={`duration-500  bg-ub-red w-60 p-2 rounded ${effect && 'bg-ub-red-darker animate-wiggle border border-1 border-white'}`} onClick={() => { setEffect(true); }}
                        onAnimationEnd={() => setEffect(false)}> Delete Temporary Files...
                    </button> */}
                    <ImportantButton label="Empty Trash..." />
                    <ImportantButton label="Delete Temporary Files..."  className={"w-60"}/>
                </div>
            </div>
        </>
    )
}

export default FilesAndTrashPrivacySettings;