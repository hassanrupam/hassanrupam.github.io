import { useEffect, useState } from "react";
import { APP_CONSTANTS, NOTIFICATION_APPLICATION_LIST, UBUNTU_ICONS } from "../../apps.config";
import ToggleSwitch from "../util components/ToggleSwitch";
import UnlockHeader from "./unlockHead";

const Notification = (props) => {


    const [visible, setVisible] = useState(false)

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
            <div className={"text-sm w-full h-full flex-col flex-grow z-20 max-h-full overflow-y-auto windowMainScreen select-none bg-ub-cool-grey-light pt-4"} style={{paddingBottom:"3rem"}} onClick={() => { handleClick() }}>
                <div className=" md:w-3/4 w-2/3 m-auto bg-ub-cool-grey p-4">
                    <span className='w-4/4 flex items-center justify-between font-bold '>Do Not Disturb
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
                <div className=" md:w-3/4 w-2/3 m-auto bg-ub-cool-grey p-4">
                    <span className='w-4/4 flex items-center justify-between font-bold '>Lock Screen Notifications
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
                <div className="md:w-3/4 w-2/3 m-auto flex items-center justify-between py-1.5 mt-4">
                    <span className='w-2/3 flex items-center justify-start font-bold'>Applications</span>
                    <span className='w-8 flex items-center justify-end p-2 m-2 transition ease-in-out delay-300 border border-black border-0 hover:border-x hover:border-y hover:bg-ub-cool-grey-lighter rounded'>
                    </span>
                </div>

                {
                    NOTIFICATION_APPLICATION_LIST
                        .sort((a, b) => a.SERIAL > b.SERIAL ? 1 : -1)
                        .map((appItem) => {
                            return (
                                <div className="md:w-3/4 w-2/3 m-auto p-2 flex items-center justify-between bg-ub-cool-grey md:rounded-none rounded-sm cursor-default outline-none focus:outline-none duration-100  justify-start pl-2 md:pl-2.5">
                                    <span className="flex flex-end">
                                        <span className="flex items-center px-2">
                                            <img width="24px" height="24px" src={appItem.appIcon.SRC} alt={`ubuntu notification ${appItem.appIcon.ALT}`} />
                                        </span>
                                        {appItem.appName}
                                    </span>
                                    <span className="flex flex-end p-2">
                                        {appItem.appNotificationOption}
                                    </span>
                                </div>
                            )
                        })
                }
            </div>
        </>
    )
}

export default Notification;