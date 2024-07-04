import { useEffect, useState } from "react";
import { APP_CONSTANTS } from "../../../apps.config";
import ToggleSwitch from "../../util components/ToggleSwitch";

const ConnectivityPrivacySetting = (props) => {

    const [connectivityChecking, setConnectivityChecking] = useState(APP_CONSTANTS.BOOLEAN.FALSE);

    return (
        <>
            <div className={"w-full h-full flex-col flex-grow z-20 max-h-full overflow-y-auto windowMainScreen select-none bg-ub-cool-grey-light opacity-80"} style={{ paddingBottom: "3rem" }}>
                <div className={`md:w-3/4 w-2/3 m-auto flex flex-col items-center justify-center pt-8 opacity-80 text-md mb-4`}>
                    <span>Connectivity checking is used to detect connection issues and helps you to stay online. If your network communications are being monitored, it could be used to gather technical information about this computer.</span>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-3 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex flex-col justify-start px-2">
                        <span>Connectivity Checking</span>
                    </div>
                    <div className="w-64 flex justify-end">
                        <span className="w-64  flex items-center justify-end">
                            <ToggleSwitch
                                description={""}
                                checked={connectivityChecking}
                                activeLabel={""}
                                deactiveLabel={""}
                                size={'default'}
                                disabled={APP_CONSTANTS.BOOLEAN.FALSE}
                                onChange={() => {setConnectivityChecking(!connectivityChecking) }}
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

export default ConnectivityPrivacySetting;