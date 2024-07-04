import { UBUNTU_ICONS } from "../../../apps.config";

const ThunderboltPrivacySettings = (props) => {

    return (
        <>
            <div className={"w-full h-full flex-col flex-grow z-20 max-h-full overflow-y-auto windowMainScreen select-none bg-ub-cool-grey-light opacity-80"} style={{ paddingBottom: "3rem" }}>
                <div className="w-full h-full m-auto flex flex-grow flex-row justify-center items-center space-x-8">
                    <img className="w-24 opacity-50" src={UBUNTU_ICONS.STATUS.THUNDERBOLT.SRC} alt={UBUNTU_ICONS.STATUS.THUNDERBOLT.ALT} />
                    <div className="flex flex-col justify-start items-start">
                        <span className="text-xl px-1 font-light opacity-50">No Thunderbolt support</span>
                        <p className="w-64 text-sm px-1 pt-4">Thunderbolt security level could not be determined.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThunderboltPrivacySettings;