import { useEffect, useState } from "react";
import { APP_CONSTANTS } from "../../../apps.config";
import UnlockHeader from "../unlockHead";
import ToggleSwitch from "../../util components/ToggleSwitch";
import Notification from '../notificationSettings';

const CommonAppSettings = (props) => {

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
            <div className={"w-full h-full flex-col flex-grow z-20 max-h-full overflow-y-auto windowMainScreen select-none bg-ub-cool-grey-light opacity-80"} style={{ paddingBottom: "3rem" }} onClick={handleClick}>
                <div className="md:w-3/4 w-2/3 m-auto">
                    <span className='w-4/4 flex items-center justify-between font-bold'>Integration</span>
                </div>
                <div className={`md:w-3/4 w-2/3 m-auto pb-2  flex flex-col items-start justify-start pt-1 ${!visible ? 'opacity-30' : 'opacity-50'}`}>
                    <span>System feature used by this application.</span>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-4 px-2 flex items-center opacity-100 justify-between bg-ub-cool-grey md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex flex-col justify-start px-2">
                        <span>Notification</span>
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

export default CommonAppSettings;