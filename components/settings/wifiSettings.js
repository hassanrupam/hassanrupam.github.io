import { useState } from "react";
import { WIFI_AVAILABLE_LIST,WIFI_SIGNALS } from './constants';
import AnimatedLoader from "../common/animatedLoader";
import ToggleSwitch from '../util components/ToggleSwitch';

const Wifi = (props) => {
    const [airPlaneMode, setAirPlaneMode] =  useState(false);

    const getWifiSignalIcon = (signalStrength)=> {
        let icon = "./themes/Yaru/status/network-wireless-signal-good-symbolic.svg";
        switch(signalStrength){
            case WIFI_SIGNALS.EXCELLENT:
                icon=  "./themes/Yaru/status/network-wireless-signal-excellent-symbolic.svg";
                break;
            case WIFI_SIGNALS.GOOD:
                icon=  "./themes/Yaru/status/network-wireless-signal-good-symbolic.svg";
                break;
            case WIFI_SIGNALS.OK:
                icon=  "./themes/Yaru/status/network-wireless-signal-ok-symbolic.svg";
                break;
            case WIFI_SIGNALS.WEAK:
                icon=  "./themes/Yaru/status/network-wireless-signal-weak-symbolic.svg";
                break;
            case WIFI_SIGNALS.NONE:
                icon=  "./themes/Yaru/status/network-wireless-signal-none-symbolic.svg";
                break;
            default:
                icon = "./themes/Yaru/status/network-wireless-signal-good-symbolic.svg";
                break;
        }
        return icon;
    }

    const [wifiAvailableListState, setWifiAvailableListState] =  useState(WIFI_AVAILABLE_LIST);
    const toggleAirplaneMode = () => {
        const prevState = airPlaneMode;
        if(airPlaneMode){
            setAirPlaneMode(!airPlaneMode);
            setWifiAvailableListState(WIFI_AVAILABLE_LIST);
        }else{
            setAirPlaneMode(!airPlaneMode);
            setWifiAvailableListState([]);
        }
    }
    
    return (
        <div className={"text-sm w-full flex-col flex-grow z-20 max-h-full overflow-y-auto windowMainScreen select-none bg-ub-cool-grey-light"}>
            <div className=" md:w-3/4 w-2/3 m-auto my-4 bg-ub-cool-grey p-4">
                <span className='w-4/4 flex items-center justify-between font-bold '>Airplane Mode
                <ToggleSwitch
                        description={""}
                        checked={airPlaneMode}
                        activeLabel={""}
                        deactiveLabel={""}
                        size={'default'}
                        disabled={false}
                        onChange={() => toggleAirplaneMode()}
                        offstyle="switch-off"
                        onstyle="switch-on"
                    />
                </span>
                <p className='w-2/3 flex items-center justify-between text-xs text-gray-400'>Disables Wi-Fi, Bluetooth and mobile broadband</p>
            </div>
            {!airPlaneMode &&
                <>
                <AnimatedLoader label = "Visible Networks"/>
                    {
                        wifiAvailableListState.sort((a, b) => a.name > b.name ? 1 : -1)
                        .map((wifiUnit) => {
                            const wifiStrength = getWifiSignalIcon(wifiUnit.signal);

                            return (
                                <div className="md:w-3/4 w-2/3 m-auto py-2 px-4 flex items-center justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-default outline-none focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5">
                                    <div className="w-2/3 flex items-center justify-start px-4">
                                        <div className="w-8">
                                            <img width="16px" height="16px" src={wifiStrength} alt="ubuntu wifi" />
                                        </div>
                                        <span>{wifiUnit.name}</span>
                                        {wifiUnit.connected &&
                                            <div className="w-8">
                                                <img width="16px" height="16px" src="./themes/Yaru/emblems/emblem-ok-symbolic.svg" alt="ubuntu wifi" />
                                            </div>
                                        }
                                    </div>
                                    {wifiUnit.secured &&
                                        <div className="w-8">
                                            <img width="16px" height="16px" src="./themes/Yaru/status/changes-prevent-symbolic.svg" alt="ubuntu wifi" />
                                        </div>
                                    }
                                </div>
                            )
                        })
                    }
                </>
            }
            {airPlaneMode &&
                // <>
                    <div className="m-auto flex flex-grow flex-col justify-center items-center">
                        <img className="w-64" src="./themes/Yaru/status/airplane-mode-symbolic.svg" alt="Ubuntu Airplane Mode" />
                        <span className="font-bold mt-4 text-lg px-1">Airplane Mode On</span>
                        <p  className="text-md px-1 text-gray-400">Turn off to use Wi-Fi</p>
                    </div>
                // </>
            }
        </div>
    )
}

export default Wifi;
