// import React, { Component } from 'react';
import Wifi from './wifiSettings';
import Background from './backgroundSettings';
import Bluetooth from './bluetoothSettings';
import Sharing from './sharing';
import Printers from './printers';
import AboutPc from './aboutPc';
import DateTime from './dateTime';
import DefaultApplications from './defaultApplications';
import Users from './users';
import { APPLICATION_UNIQUE_ID, APP_CONSTANTS, SECURE_STORAGE_STORE_KEY, SETTING_APPLICATION_MENU, SETTING_MENU, UBUNTU_ICONS, SETTING_PrIVACY_MENU } from '../../apps.config';
import secureLocalStorage from "react-secure-storage";
import RemovableMedia from './removableMedia';
import VersionInformation from './versionInfo';
import Color from './colorSettings';
import Network from './networkSettings';
import Displays from './displaySettings';
import Notification from './notificationSettings';
import Appearance from './appearanceSettings';
import Search from './searchSettings';
import Accessibility from './accessibilitySettings';
import RegionAndLanguage from './regionAndLanguageSettings';
import Keyboard from './keyboardSettings';
import MouseAndTouchpad from './mouseAndTouchpadSettings';
import Power from './powerSettings';
import Sound from './soundSettings';
import OnlineAccount from './onlineAccountSettings';
import MultiTasking from './multitaskingSettings';

import React, { useState, useEffect, useCallback } from 'react';
import ApplicationNavLinks from './applications/applicationNavLinks';
import CommonAppSettings from './applications/commonAppSettings';
import PrivacyNavLinks from './privacy/privacyNavLinks';
import ConnectivityPrivacySetting from './privacy/connectivityPrivacySettings';
import LocationServicePrivacySetting from './privacy/locationServicePrivacySettings';
import ThunderboltPrivacySettings from './privacy/thunderboltPrivacySettings';
import FilesAndTrashPrivacySettings from './privacy/fileAndTrashPrivacySettings';

const Settings = (props) => {
    const panEndIcon = UBUNTU_ICONS.EMBLEMS.EMBLEM_PAN_END;

    const [screens, setScreens] = useState({});
    const [screen, setScreen] = useState(() => {});
    const [activeScreen, setActiveScreen] = useState(APPLICATION_UNIQUE_ID.SETTINGS.WIFI);
    const [navbar, setNavbar] = useState(false);
    const [hideScroll, setHideScroll] = useState(false);

    const [appList, setAppList] = useState(SETTING_APPLICATION_MENU);
    const [privacyList, setPrivacyList] =  useState(SETTING_PrIVACY_MENU);
    const [searchText, setSearchText] = useState("");

  
  
    const [isApplicationWindow,setIsApplicationWindow] = useState(APP_CONSTANTS.BOOLEAN.FALSE);
    const [isPrivacyWindow,setIsPrivacyWindow] = useState(APP_CONSTANTS.BOOLEAN.FALSE);

    useEffect(() => {
        secureLocalStorage.setItem(SECURE_STORAGE_STORE_KEY.USER_SELECTED, "G");
        
        const initialScreens = {
            [APPLICATION_UNIQUE_ID.SETTINGS.WIFI]: <Wifi />,
            [APPLICATION_UNIQUE_ID.SETTINGS.BACKGROUND]: <Background changeBackgroundImage={props.changeBackgroundImage} currBgImgName={props.currBgImgName} />,
            [APPLICATION_UNIQUE_ID.SETTINGS.BLUETOOTH]: <Bluetooth />,
            [APPLICATION_UNIQUE_ID.SETTINGS.APPEARANCE]: <Appearance />,
            [APPLICATION_UNIQUE_ID.SETTINGS.SEARCH]: <Search />,
            [APPLICATION_UNIQUE_ID.SETTINGS.SHARING]: <Sharing />,
            [APPLICATION_UNIQUE_ID.SETTINGS.PRINTERS]: <Printers />,
            [APPLICATION_UNIQUE_ID.SETTINGS.REMOVABLE_MEDIA]: <RemovableMedia />,
            [APPLICATION_UNIQUE_ID.SETTINGS.USERS]: <Users />,
            [APPLICATION_UNIQUE_ID.SETTINGS.DEFAULT_APP]: <DefaultApplications />,
            [APPLICATION_UNIQUE_ID.SETTINGS.DATE_TIME]: <DateTime />,
            [APPLICATION_UNIQUE_ID.SETTINGS.ABOUT]: <AboutPc />,
            [APPLICATION_UNIQUE_ID.SETTINGS.VERSION]: <VersionInformation />,
            [APPLICATION_UNIQUE_ID.SETTINGS.COLOR]: <Color />,
            [APPLICATION_UNIQUE_ID.SETTINGS.NETWORK]: <Network />,
            [APPLICATION_UNIQUE_ID.SETTINGS.DISPLAYS]: <Displays />,
            [APPLICATION_UNIQUE_ID.SETTINGS.NOTIFICATION]: <Notification />,
            [APPLICATION_UNIQUE_ID.SETTINGS.UNIVERSAL_ACCESS]: <Accessibility />,
            [APPLICATION_UNIQUE_ID.SETTINGS.REGION_AND_LANGUAGE]: <RegionAndLanguage />,
            [APPLICATION_UNIQUE_ID.SETTINGS.KEYBOARD_SHORTCUT]: <Keyboard />,
            [APPLICATION_UNIQUE_ID.SETTINGS.MOUSE_AND_TOUCH_PAD]: <MouseAndTouchpad />,
            [APPLICATION_UNIQUE_ID.SETTINGS.POWER]: <Power />,
            [APPLICATION_UNIQUE_ID.SETTINGS.SOUND]: <Sound />,
            [APPLICATION_UNIQUE_ID.SETTINGS.ONLINE_ACCOUNTS]: <OnlineAccount />,
            [APPLICATION_UNIQUE_ID.SETTINGS.MULTITASKING]: <MultiTasking />,
            [APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.ADDITIONAL_DRIVERS]: <CommonAppSettings />,
            [APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.ADVANCE_NETWORK]: <CommonAppSettings />,
            [APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.ADDITIONAL_DRIVERS]: <CommonAppSettings />,
            [APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.ARCHIVE_MANAGER]: <CommonAppSettings />,
            [APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.BACKUPS]: <CommonAppSettings />,
            [APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.CALCULATOR]: <CommonAppSettings />,
            [APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.CALENDAR]: <CommonAppSettings />,
            [APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.CHARACTERS]: <CommonAppSettings />,
            [APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.CHEESE]: <CommonAppSettings />,
            [APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.CISCO_SECURE]: <CommonAppSettings />,
            [APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.DBEAVER]: <CommonAppSettings />,
            [APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.DISKS]: <CommonAppSettings />,
            [APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.DISK_USAGE]: <CommonAppSettings />,
            [APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.DOCUMENT_SCANNER]: <CommonAppSettings />,
            [APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.DOCUMENT_VIEWER]: <CommonAppSettings />,
            [APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.FILES]: <CommonAppSettings />,
            [APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.FISH]: <CommonAppSettings />,
            [APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.FONT_MANAGER]: <CommonAppSettings />,
            [APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.FONTS]: <CommonAppSettings />,
            [APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.FONTS_VIEWER]: <CommonAppSettings />,
            [APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.CHROME]: <CommonAppSettings />,
            [APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.HELP]: <CommonAppSettings />,
            [APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.IMAGE_VIEWER]: <CommonAppSettings />,
            [APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.INTELLIJ]: <CommonAppSettings />,
            [APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.LANGUAGE_SUPPORT]: <CommonAppSettings />,
            [APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.LIBREOFFICE]: <CommonAppSettings />,
            [APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.LOGS]: <CommonAppSettings />,
            [APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.MOCKOON]: <CommonAppSettings />,
            [APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.PASSWORD_AND_KEYS]: <CommonAppSettings />,
            [APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.POWER_STATISTICS]: <CommonAppSettings />,
            [APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.SETTINGS]: <CommonAppSettings />,
            [APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.SOFTWARE_UPDATER]: <CommonAppSettings />,
            [APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.SYSTEM_MONITOR]: <CommonAppSettings />,
            [APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.TERMINAL]: <CommonAppSettings />,
            [APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.UBUNTU_SOFTWARE]: <CommonAppSettings />,
            [APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.VIDEOS]: <CommonAppSettings />,
            [APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.VSCODE]: <CommonAppSettings />,
            [APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.YOUTUBE]: <CommonAppSettings />,

            [APPLICATION_UNIQUE_ID.SETTINGS.PRIVACY_LIST.CONNECTIVITY]: <ConnectivityPrivacySetting />,
            [APPLICATION_UNIQUE_ID.SETTINGS.PRIVACY_LIST.LOCATION_SERVICE]: <LocationServicePrivacySetting />,
            [APPLICATION_UNIQUE_ID.SETTINGS.PRIVACY_LIST.THUNDERBOLT]: <ThunderboltPrivacySettings />,
            [APPLICATION_UNIQUE_ID.SETTINGS.PRIVACY_LIST.FILE_HISTORY_AND_TRASH]: <FilesAndTrashPrivacySettings />,
            [APPLICATION_UNIQUE_ID.SETTINGS.PRIVACY_LIST.SCREEN]: <CommonAppSettings />,
            [APPLICATION_UNIQUE_ID.SETTINGS.PRIVACY_LIST.DIAGNOSTICS]: <CommonAppSettings />,
        };

        setScreens(initialScreens);

        setTimeout(() => {
            setHideScroll(true);
        }, APP_CONSTANTS.TIME_OUTS.SECONDS_2);

        const pageToOpen = secureLocalStorage.getItem(SECURE_STORAGE_STORE_KEY.SETTING_AUTO_OPEN_MENU);
        if (pageToOpen) {
            setScreen(initialScreens[pageToOpen]);
            setActiveScreen(pageToOpen);
        } else {
            let lastVisitedScreen = secureLocalStorage.getItem(SECURE_STORAGE_STORE_KEY.SETTING_SECTION);
            if (!lastVisitedScreen) {
                lastVisitedScreen = APPLICATION_UNIQUE_ID.SETTINGS.WIFI;
            }

            setScreen(initialScreens[lastVisitedScreen]);
            setActiveScreen(lastVisitedScreen);
        }
    }, [props.changeBackgroundImage, props.currBgImgName]);

    useEffect(() => {
        // Filter the app list based on search text
        const filteredList = SETTING_APPLICATION_MENU.filter(app =>
            app.MENU_NAME.toLowerCase().includes(searchText.toLowerCase())
        );
        setAppList(filteredList);
    }, [searchText])


    const hardChangeScreen = useCallback((item) => {
        setScreen(screens[item]);
        setActiveScreen(item);
    }, [screens]);

    const changeScreen = useCallback((e) => {
        const screen = e.id || e.target.id;
        secureLocalStorage.removeItem(SECURE_STORAGE_STORE_KEY.SETTING_AUTO_OPEN_MENU);
        secureLocalStorage.setItem(SECURE_STORAGE_STORE_KEY.SETTING_SECTION, screen);
        setScreen(screens[screen]);
        setActiveScreen(screen);
    }, [screens]);

    const handleOnclickMenu = useCallback((e)=>{
        const screen = e.id || e.target.id;

        if(screen === APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS){
            setIsApplicationWindow(APP_CONSTANTS.BOOLEAN.TRUE);
        }
        if(screen === APPLICATION_UNIQUE_ID.SETTINGS.PRIVACY){
            setIsPrivacyWindow(APP_CONSTANTS.BOOLEAN.TRUE)
        }
    },[screens, appList])

    const showNavBar = () => {
        setNavbar(!navbar);
    };

    useEffect(()=>{
        if(activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS || 
            activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.ADDITIONAL_DRIVERS ||
            activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.ADVANCE_NETWORK ||
            activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.ARCHIVE_MANAGER ||
            activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.BACKUPS ||
            activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.CALCULATOR ||
            activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.CALENDAR ||
            activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.CHARACTERS ||
            activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.CHEESE ||
            activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.CISCO_SECURE ||
            activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.DBEAVER ||
            activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.DISKS ||
            activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.DISK_USAGE ||
            activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.DOCUMENT_SCANNER ||
            activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.DOCUMENT_VIEWER ||
            activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.FILES ||
            activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.FISH ||
            activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.FONT_MANAGER ||
            activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.FONTS ||
            activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.FONTS_VIEWER ||
            activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.CHROME ||
            activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.HELP ||
            activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.IMAGE_VIEWER ||
            activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.INTELLIJ ||
            activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.LANGUAGE_SUPPORT ||
            activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.LIBREOFFICE ||
            activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.LOGS ||
            activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.MOCKOON ||
            activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.PASSWORD_AND_KEYS ||
            activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.POWER_STATISTICS ||
            activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.SETTINGS ||
            activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.SOFTWARE_UPDATER ||
            activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.SYSTEM_MONITOR ||
            activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.TERMINAL ||
            activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.UBUNTU_SOFTWARE ||
            activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.VIDEOS ||
            activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.VSCODE ||
            activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.APPLICATIONS_LIST.YOUTUBE
        ){
            setIsApplicationWindow(APP_CONSTANTS.BOOLEAN.TRUE);
            setIsPrivacyWindow(APP_CONSTANTS.BOOLEAN.FALSE);
            
        }
        else if(activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.PRIVACY || 
            activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.PRIVACY_LIST.CONNECTIVITY ||
            activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.PRIVACY_LIST.LOCATION_SERVICE ||
            activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.PRIVACY_LIST.THUNDERBOLT ||
            activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.PRIVACY_LIST.FILE_HISTORY_AND_TRASH ||
            activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.PRIVACY_LIST.SCREEN ||
            activeScreen === APPLICATION_UNIQUE_ID.SETTINGS.PRIVACY_LIST.DIAGNOSTICS
        ){
            setIsApplicationWindow(APP_CONSTANTS.BOOLEAN.FALSE);
            setIsPrivacyWindow(APP_CONSTANTS.BOOLEAN.TRUE);
        }
        else{
            setIsApplicationWindow(APP_CONSTANTS.BOOLEAN.FALSE);
            setIsPrivacyWindow(APP_CONSTANTS.BOOLEAN.FALSE);
        }
       
    },[activeScreen])

    const renderNavLinks = useCallback(() => {
        return (
            <>
                {
                    isApplicationWindow ?
                        <ApplicationNavLinks changeScreen={changeScreen}
                            activeScreen={activeScreen}
                            setIsApplicationWindow={setIsApplicationWindow}
                            hardChangeScreen={hardChangeScreen} 
                            searchText={searchText} setSearchText={setSearchText}
                            appList={appList}
                            />
                        :
                        isPrivacyWindow ? 
                        <PrivacyNavLinks changeScreen={changeScreen}
                            activeScreen={activeScreen}
                            setIsPrivacyWindow={setIsPrivacyWindow}
                            hardChangeScreen={hardChangeScreen} 
                            privacyList={privacyList}
                            />
                        :
                        SETTING_MENU
                            .sort((a, b) => a.SERIAL > b.SERIAL ? 1 : -1)
                            .map((menuItem) => (
                                <div
                                    key={menuItem.ID}
                                    title={menuItem.isActive ? menuItem.MENU_NAME : "Coming Soon..."}
                                    id={menuItem.ID}
                                    tabIndex={menuItem.SERIAL}
                                    onFocus={changeScreen}
                                    onClick={handleOnclickMenu}
                                    className={`${(activeScreen === menuItem.ID ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : "bg-ub-cool-grey hover:bg-ub-cool-grey-light ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-3 focus:outline-none duration-100 my-0.5 flex justify-between items-center pl-2 pr-2 md:pl-2.5"}`}
                                >
                                    <div className='flex justify-start'>
                                        <img className={`w-3 md:w-4 ${!menuItem.isActive && 'opacity-30'}`} alt={`${menuItem.ALT} ${menuItem.ICON.ALT}`} src={menuItem.ICON.SRC} />
                                        <span className={`ml-1 md:ml-2 text-gray-50 ${!menuItem.isActive && 'opacity-30'}`}>{menuItem.MENU_NAME}</span>
                                    </div>
                                    {menuItem.isRightSwipeActive &&
                                        <div className='flex justify-center'>
                                            <img className={`w-6 h-6 md:w-6 ${!menuItem.isActive && 'opacity-50'}`} alt={`${menuItem.ALT} ${panEndIcon.ALT}`} src={panEndIcon.SRC} />
                                        </div>
                                    }
                                </div>
                            ))
                }
            </>
        );
    }, [activeScreen, changeScreen, isApplicationWindow, isPrivacyWindow, appList, searchText, privacyList]);

    return (
        <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
            <div
                className={`md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black ${hideScroll && 'scrollbar-hide'}`}
                style={{ marginBottom: "3rem" }}
                onMouseEnter={() => { setHideScroll(false); }}
                onMouseOver={() => { setHideScroll(false); }}
                onMouseLeave={() => {
                    setTimeout(() => {
                        setHideScroll(true);
                    }, APP_CONSTANTS.TIME_OUTS.SECONDS_2);
                }}
            >
                {renderNavLinks()}
            </div>
            <div onClick={showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1 overflow-y-auto">
                <div className="w-3.5 border-t border-white"></div>
                <div className="w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                <div className="w-3.5 border-t border-white"></div>
                <div className={(navbar ? "visible animateShow z-30" : "invisible") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                    {renderNavLinks()}
                </div>
            </div>
            <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                {screen}
            </div>
        </div>
    );
};

export default Settings;

export const displaySettings = () => {
    return <Settings />;
};
