import { useEffect, useState } from "react";
import { APP_CONSTANTS, UBUNTU_ICONS } from "../../../apps.config";
import UnlockHeader from "../unlockHead";
import ToggleSwitch from "../../util components/ToggleSwitch";

const LocationServicePrivacySetting = (props) => {
    const [visible, setVisible] = useState(APP_CONSTANTS.BOOLEAN.FALSE);

    const handleClick = () => {
        setVisible(APP_CONSTANTS.BOOLEAN.TRUE);
    }

    useEffect(() => {
        if (visible) {
            setVisible(APP_CONSTANTS.BOOLEAN.FALSE)
        }
    }, [visible])

    const [locationService, setLocationService] =  useState(APP_CONSTANTS.BOOLEAN.FALSE);

    const toggleLocationMode = () => {
        setLocationService(!locationService);
    }
    return (
        <>
            {/* <UnlockHeader triggerActive={visible} /> */}
            <div className={"w-full h-full flex-col flex-grow z-20 max-h-full overflow-y-auto windowMainScreen select-none bg-ub-cool-grey-light opacity-80"} style={{ paddingBottom: "3rem" }} onClick={handleClick}>
                <div className=" md:w-3/4 w-2/3 m-auto my-4 bg-ub-cool-grey p-4">
                    <span className='w-4/4 flex items-center justify-between font-bold '>Location Services
                        <ToggleSwitch
                            description={""}
                            checked={locationService}
                            activeLabel={""}
                            deactiveLabel={""}
                            size={'default'}
                            disabled={APP_CONSTANTS.BOOLEAN.FALSE}
                            onChange={() => toggleLocationMode()}
                            offstyle="switch-off"
                            onstyle="switch-on"
                        />
                    </span>
                </div>
                {locationService &&
                    <>
                        <div className={`md:w-3/4 w-2/3 m-auto flex flex-col items-center justify-center pt-4 opacity-80 text-md mb-2`}>
                            <span>Location services allow applications to know your location. Using Wi-Fi and mobile broadband increases accuracy.</span>
                        </div>
                        <div className={`md:w-3/4 w-2/3 m-auto flex flex-col items-start justify-between opacity-80 text-md mb-2`}>
                            <span>Uses Mozilla Location Service: <a className="text-cyan-500 underline" href="https://www.google.com/privacy/lsf.html" target="_Blank">Privacy Policy</a></span>
                        </div>
                        <div className={`md:w-3/4 w-2/3 m-auto flex flex-col items-start justify-between opacity-80 text-md mb-2`}>
                            <span>Allow the applications below to determine your location.</span>
                        </div>
                        <div className="md:w-3/4 w-2/3 m-auto  text-gray-400 bg-ub-cool-grey py-4  px-2 flex justify-center items-center mt-4">
                            <button>No Applications Have Asked for Location Access</button>
                        </div>
                    </>
                }
                {!locationService &&
                    <div className="w-full h-5/6 m-auto flex flex-grow flex-col justify-center items-center">
                        <img className="w-24 opacity-50" src={UBUNTU_ICONS.STATUS.LOCATION.DISABLED.SRC} alt={UBUNTU_ICONS.STATUS.LOCATION.DISABLED.ALT} />
                        <span className="mt-4 text-xl px-1 font-light  mt-8">Location services turned off</span>
                        <p className="text-sm px-1 text-gray-300 pt-2">No applications can obtain location information.</p>
                    </div>
                }
            </div>
        </>
    )
}

export default LocationServicePrivacySetting;