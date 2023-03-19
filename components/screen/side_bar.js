import React, { useEffect, useState } from 'react'
import { APPLICATION_EVENTS, APP_CONSTANTS } from '../../apps.config';
import SideBarApp from '../base/side_bar_app';

let renderApps = (props) => {
    let sideBarAppsJsx = [];
    props.apps.forEach((app, index) => {
        if (props.favourite_apps[app.id] === APP_CONSTANTS.BOOLEAN.FALSE) return;
        sideBarAppsJsx.push(
            <SideBarApp key={index} id={app.id} title={app.title} icon={app.icon} isClose={props.closed_windows} isFocus={props.focused_windows} openApp={props.openAppByAppId} isMinimized={props.isMinimized} openFromMinimised={props.openFromMinimised} />
        );
    });
    return sideBarAppsJsx;
}

export default function SideBar(props) {

    function showSideBar() {
        props.hideSideBar(null, APP_CONSTANTS.BOOLEAN.FALSE);
    }

    function hideSideBar() {
        setTimeout(() => {
            props.hideSideBar(null, APP_CONSTANTS.BOOLEAN.TRUE);
        }, APP_CONSTANTS.TIME_OUTS.SECONDS_2);
    }

    return (
        <>
            <div className={(props.hide ? " -translate-x-full " : "") + " absolute transform duration-300 select-none z-40 left-0 top-0 h-full pt-7 w-auto flex flex-col justify-start items-center border-black border-opacity-60 bg-black bg-opacity-50"}>
                {
                    (
                        Object.keys(props.closed_windows).length !== 0
                            ? renderApps(props)
                            : null
                    )
                }
                <AllApps showApps={props.showAllApps}  allAppsView = {props.allAppsView}/>
            </div>
            <div onMouseEnter={showSideBar} onMouseLeave={hideSideBar} className={"w-1 h-full absolute top-0 left-0 bg-transparent z-50"}></div>
        </>
    )
}

export function AllApps(props) {

    const [title, setTitle] = useState(APP_CONSTANTS.BOOLEAN.FALSE);
    useEffect(()=>{
        const handleEsc = (event) => {
            if(props.allAppsView && event.keyCode === 27){                                  
                props.showApps();
                window.removeEventListener(APPLICATION_EVENTS.KEY_DOWN,handleEsc);            
            }
        };
        window.addEventListener(APPLICATION_EVENTS.KEY_DOWN, handleEsc);
    },[props.allAppsView])
   
    return (
        <div
            className={`w-10 h-10 rounded m-1 hover:bg-white hover:bg-opacity-10 flex items-center justify-center`}
            style={{ marginTop: 'auto' }}
            onMouseEnter={() => {
                setTitle(APP_CONSTANTS.BOOLEAN.TRUE);
            }}
            onMouseLeave={() => {
                setTitle(APP_CONSTANTS.BOOLEAN.FALSE);
            }}
            onClick={props.showApps}
        >
            <div className="relative">
                <img width="28px" height="28px" className="w-7" src="./themes/Yaru/system/view-app-grid-symbolic.svg" alt="Ubuntu view app" />
                <div
                    className={
                        (title ? " visible " : " invisible ") +
                        " w-max py-0.5 px-1.5 absolute top-1 left-full ml-5 text-ubt-grey text-opacity-90 text-sm bg-ub-grey bg-opacity-70 border-gray-400 border border-opacity-40 rounded-md"
                    }
                >
                    Show Applications
                </div>
            </div>
        </div>
    );
}