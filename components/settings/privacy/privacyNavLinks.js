import { useCallback, useEffect } from "react";
import { APPLICATION_UNIQUE_ID, APP_CONSTANTS, UBUNTU_ICONS } from "../../../apps.config";

const PrivacyNavLinks = (props) => {
    const panStart = UBUNTU_ICONS.EMBLEMS.EMBLEM_PAN_START;
    const openMenu = UBUNTU_ICONS.EMBLEMS.OPEN_MENU;

    useEffect(()=>{
        props.hardChangeScreen(APPLICATION_UNIQUE_ID.SETTINGS.PRIVACY_LIST.CONNECTIVITY)
    },[])

    const renderNavAppLinks =  useCallback(()=>{
        return (
            props.privacyList && props.privacyList.length > 0 && props.privacyList
            .sort((a, b) => a.SERIAL > b.SERIAL ? 1 : -1)
            .map((menuItem) => (
                <div
                    key={menuItem.ID}
                    title={menuItem.isActive ? menuItem.MENU_NAME : "Coming Soon..."}
                    id={menuItem.ID}
                    tabIndex={menuItem.SERIAL}
                    onFocus={props.changeScreen}
                    className={`${(props.activeScreen === menuItem.ID ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " bg-ub-cool-grey hover:bg-ub-cool-grey-light ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-between items-center pl-2 pr-2 md:pl-2.5"}`}
                >
                    <div className='flex justify-start items-center'>
                        <img height='15px' width='15px' className={` ${!menuItem.isActive && 'opacity-30'}`} alt={`${menuItem.ALT} ${menuItem.ICON.ALT}`} src={menuItem.ICON.SRC} />
                        <span className={`ml-1 md:ml-2 text-sm text-gray-50 ${!menuItem.isActive && 'opacity-30'}`}>{menuItem.MENU_NAME}</span>
                    </div>
                    {menuItem.isRightSwipeActive &&
                        <div className='flex justify-center'>
                            <img className={`w-6 h-6 md:w-6 ${!menuItem.isActive && 'opacity-50'}`} alt={`${menuItem.ALT} ${panEndIcon.ALT}`} src={panEndIcon.SRC} />
                        </div>
                    }
                </div>
            ))
        )
    },[props.privacyList,props.changeScreen,props.activeScreen])
    return (
        <>
            <div className="flex items-center justify-between bg-ub-cool-grey-dark">
                <button
                    className="w-8 h-10 bg-transparent border-none text-white text-xl flex items-center justify-center hover:bg-ub-cool-grey-lighter rounded-l focus:outline-none"
                    onClick={() => { props.setIsPrivacyWindow(APP_CONSTANTS.BOOLEAN.FALSE) }}
                >
                    <img height='25px' width='25px' src={panStart.SRC} alt={panStart.ALT} />
                </button>
                <span>
                    Privacy
                </span>
                <button
                    className="w-8 h-10 bg-transparent border-none text-white text-xl flex items-center justify-center hover:bg-ub-cool-grey-lighter rounded-l focus:outline-none"
                    onClick={() => {  }}
                >
                    <img height='25px' width='25px' src={openMenu.SRC} alt={openMenu.ALT} />
                </button>
            </div>
            <div>
                {renderNavAppLinks()}
            </div>
        </>
    )
}

export default PrivacyNavLinks;