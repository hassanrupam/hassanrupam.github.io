import { useEffect, useState } from "react";
import { APP_CONSTANTS, ONLINE_ACCOUNT_LIST } from "../../apps.config";
import UnlockHeader from "./unlockHead";

const OnlineAccount = (props) => {
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
                <div className={`w-full flex flex-col items-center justify-between pt-4 opacity-80`}>
                    <span className="text-2xl">Connect to your data in the cloud</span>
                </div>
                <div className="md:w-3/4 w-2/3 m-auto mt-10 mb-2">
                    <span className='w-4/4 flex items-center justify-between font-bold'>Add an account</span>
                </div>
                {
                    ONLINE_ACCOUNT_LIST
                        .sort((a, b) => a.SERIAL > b.SERIAL ? 1 : -1)
                        .map((appItem) => {
                            return (
                                <div className="md:w-3/4 w-2/3 m-auto p-2 flex items-center justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-default outline-none focus:outline-none duration-100  justify-start pl-2 md:pl-2.5">
                                    <span className="flex flex-end items-center text-md font-bold">
                                        <span className="flex items-center px-2">
                                            <img style={{borderRadius: '4px'}} width="45px" height="45px" src={appItem.appIcon.SRC} alt={`ubuntu notification ${appItem.appIcon.ALT}`} />
                                        </span>
                                        {appItem.appName}
                                    </span>
                                </div>
                            )
                        })
                }
          </div>
        </>
    )
}

export default OnlineAccount;