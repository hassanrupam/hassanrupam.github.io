import { useEffect, useState } from "react";
import { APP_CONSTANTS } from "../../apps.config";
import UnlockHeader from "./unlockHead";

const RegionAndLanguage = (props) => {
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
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-2 px-2 flex items-center opacity-80 justify-center md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-3/4 flex items-center justify-start px-2">
                    <span className="w-48 p-2 flex items-center justify-center rounded bg-ub-cool-grey-lighter">
                            My Account
                        </span>
                        <span className='w-48 p-2 flex items-center justify-center rounded bg-ub-grey'>
                            Login Screen
                        </span>
                    </div>
                </div>
                <div className="md:w-3/4 w-2/3 m-auto pt-4">
                    <span className='w-4/4 flex items-center justify-between font-bold'>Language</span>
                </div>
                <div className={`md:w-3/4 w-2/3 m-auto  pb-2 flex flex-col items-start justify-start pt-1 ${!visible ? 'opacity-30' : 'opacity-50'}`}>
                    <span>The language used for text in windows and web pages.</span>
                </div>
                <div className="md:w-3/4 w-2/3 m-auto text-gray-400 bg-ub-cool-grey-lighter p-2 flex justify-center items-center border-solid border-1 border-gray mb-4">
                    <button onClick={handleClick}>Manage Installed Languages</button>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-4 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex flex-col justify-start px-2">
                        <span>Language</span>
                    </div>
                    <div className="w-64 flex justify-end">
                        <span className="w-64  flex items-center justify-end">
                           English (United States)
                        </span>
                    </div>
                </div>
                <div className="md:w-3/4 w-2/3 m-auto pt-8">
                    <span className='w-4/4 flex items-center justify-between font-bold'>Formats</span>
                </div>
                <div className={`md:w-3/4 w-2/3 m-auto  pb-2 flex flex-col items-start justify-start pt-1 ${!visible ? 'opacity-30' : 'opacity-50'}`}>
                    <span>The format used for numbers, dates and currencies.</span>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-4 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex flex-col justify-start px-2">
                        <span>Formats</span>
                    </div>
                    <div className="w-64 flex justify-end">
                        <span className="w-64  flex items-center justify-end">
                           United States
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default RegionAndLanguage;