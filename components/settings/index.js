import React, { Component } from 'react';
import $ from 'jquery';
import { SETTING_PAGES } from './constants';
import Wifi from './wifiSettings';
import Background from './backgroundSettings';
import Bluetooth from './bluetoothSettings';
import Sharing from './sharing';
import Printers from './printers';
import AboutPc from './aboutPc';
import DateTime from './dateTime';
import DefaultApplications from './defaultApplications';
import Users from './users';
import { APPLICATION_UNIQUE_ID, APP_CONSTANTS, SECURE_STORAGE_STORE_KEY, SETTING_MENU } from '../../apps.config';
import secureLocalStorage from "react-secure-storage";
import RemovableMedia from './removableMedia';
import VersionInformation from './versionInfo';
import Color from './colorSettings';
import Network from './networkSettings';
import Displays from './displaySettings';


export class Settings extends Component {

    constructor() {

        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: APPLICATION_UNIQUE_ID.SETTINGS.WIFI, // by d.efault 'background' screen is active
            navbar: false,
            hideScroll: false
        }
        secureLocalStorage.setItem(SECURE_STORAGE_STORE_KEY.USER_SELECTED, "G");
    }

    componentDidMount() {
        this.screens = {
            [APPLICATION_UNIQUE_ID.SETTINGS.WIFI]: <Wifi />,
            [APPLICATION_UNIQUE_ID.SETTINGS.BACKGROUND]: <Background changeBackgroundImage={this.props.changeBackgroundImage} currBgImgName={this.props.currBgImgName} />,
            [APPLICATION_UNIQUE_ID.SETTINGS.BLUETOOTH]: <Bluetooth />,
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
            [APPLICATION_UNIQUE_ID.SETTINGS.DISPLAYS]: <Displays />
        }
        setTimeout(() => {
            this.setState({ hideScroll: true})
        }, APP_CONSTANTS.TIME_OUTS.SECONDS_2);

        let lastVisitedScreen = secureLocalStorage.getItem(SECURE_STORAGE_STORE_KEY.SETTING_SECTION);
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = APPLICATION_UNIQUE_ID.SETTINGS.WIFI;
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currBgImgName !== this.props.currBgImgName) {
            this.setState({ currBgImgName: this.props.currBgImgName });
            this.screens = {
                [APPLICATION_UNIQUE_ID.SETTINGS.WIFI]: <Wifi />,
                [APPLICATION_UNIQUE_ID.SETTINGS.BACKGROUND]: <Background changeBackgroundImage={this.props.changeBackgroundImage} currBgImgName={this.props.currBgImgName} />,
                [APPLICATION_UNIQUE_ID.SETTINGS.BLUETOOTH]: <Bluetooth />,
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
                [APPLICATION_UNIQUE_ID.SETTINGS.DISPLAYS]: <Displays />
            }

            const pageToOpen = secureLocalStorage.getItem(SECURE_STORAGE_STORE_KEY.SETTING_AUTO_OPEN_MENU);
            if (pageToOpen) {
                if (pageToOpen === SETTING_PAGES.WIFI.localValue) {
                    this.changeScreen(document.getElementById(SETTING_PAGES.WIFI.url));
                }

            } else {
                let lastVisitedScreen = secureLocalStorage.getItem(SECURE_STORAGE_STORE_KEY.SETTING_SECTION);
                if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
                    lastVisitedScreen = APPLICATION_UNIQUE_ID.SETTINGS.WIFI;
                }

                // focus last visited screen
                this.changeScreen(document.getElementById(lastVisitedScreen));
            }

        }
    }

    changeScreen = (e) => {

        const screen = e.id || e.target.id;
        // store this state
        secureLocalStorage.setItem(SECURE_STORAGE_STORE_KEY.SETTING_SECTION, screen);

        // google analytics
        // ReactGA.pageview(`/${screen}`);

        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                {
                    SETTING_MENU
                        .sort((a, b) => a.SERIAL > b.SERIAL ? 1 : -1)
                        .map((menuItem) => {
                            return (
                                <div title={menuItem.isActive ? menuItem.MENU_NAME : "Coming Soon..."} id={menuItem.ID} tabIndex={menuItem.SERIAL} onFocus={this.changeScreen} className={(this.state.active_screen === menuItem.ID ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                                    <img className={`w-3 md:w-4 ${!menuItem.isActive && 'opacity-30'}`} alt={`${menuItem.ALT} ${menuItem.ICON.ALT}`} src={menuItem.ICON.SRC} />
                                    <span className={`ml-1 md:ml-2 text-gray-50 ${!menuItem.isActive && 'opacity-30' }`}>{menuItem.MENU_NAME}</span>
                                </div>
                            )
                        })
                }
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className={`md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black ${this.state.hideScroll && 'scrollbar-hide'}`} 
                     style={{marginBottom:"3rem"}}
                     onMouseEnter={()=> {this.setState({hideScroll:false})}}
                     onMouseOver={()=> {this.setState({hideScroll:false})}}
                     onMouseLeave={()=> {setTimeout(() => {
                        this.setState({hideScroll:true});
                     }, APP_CONSTANTS.TIME_OUTS.SECONDS_2);}}>
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1 overflow-y-auto">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default Settings;

export const displaySettings = () => {
    return <Settings></Settings>;
}