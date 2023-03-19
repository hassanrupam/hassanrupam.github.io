import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { APPLICATION_UNIQUE_ID, APP_CONSTANTS, SECURE_STORAGE_STORE_KEY } from '../../apps.config';
import About from './about';
import Education from './education';
import Projects from './projects';
import Resume from './resume';
import Skills from './skills';
import secureLocalStorage from "react-secure-storage";

export class AboutRupam extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: APPLICATION_UNIQUE_ID.ABOUT_RUPAM.ABOUT, // by d.efault 'about' screen is active
            navbar: APP_CONSTANTS.BOOLEAN.FALSE,
        }
    }

    componentDidMount() {
        this.screens = {
            [APPLICATION_UNIQUE_ID.ABOUT_RUPAM.ABOUT] : <About />,
            [APPLICATION_UNIQUE_ID.ABOUT_RUPAM.EDUCATION]: <Education />,
            [APPLICATION_UNIQUE_ID.ABOUT_RUPAM.SKILLS]: <Skills />,
            [APPLICATION_UNIQUE_ID.ABOUT_RUPAM.PROJECTS]: <Projects />,
            [APPLICATION_UNIQUE_ID.ABOUT_RUPAM.RESUME]: <Resume />,
        }

        let lastVisitedScreen = secureLocalStorage.getItem(SECURE_STORAGE_STORE_KEY.ABOUT_SECTION);
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = APPLICATION_UNIQUE_ID.ABOUT_RUPAM.ABOUT;
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        secureLocalStorage.setItem(SECURE_STORAGE_STORE_KEY.ABOUT_SECTION, screen);

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
                <div id={APPLICATION_UNIQUE_ID.ABOUT_RUPAM.ABOUT} tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === APPLICATION_UNIQUE_ID.ABOUT_RUPAM.ABOUT ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about rupam" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id={APPLICATION_UNIQUE_ID.ABOUT_RUPAM.EDUCATION} tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === APPLICATION_UNIQUE_ID.ABOUT_RUPAM.EDUCATION ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="rupam' education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
                </div>
                <div id={APPLICATION_UNIQUE_ID.ABOUT_RUPAM.SKILLS} tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === APPLICATION_UNIQUE_ID.ABOUT_RUPAM.SKILLS ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="rupam' skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id={APPLICATION_UNIQUE_ID.ABOUT_RUPAM.PROJECTS} tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === APPLICATION_UNIQUE_ID.ABOUT_RUPAM.PROJECTS ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="rupam' projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id={APPLICATION_UNIQUE_ID.ABOUT_RUPAM.RESUME} tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === APPLICATION_UNIQUE_ID.ABOUT_RUPAM.RESUME ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="rupam's resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
                {/* <div className='my-0.5 w-28 md:w-full h-8 px-2 md:px-2.5 flex' >
                    <iframe src="https://github.com/sponsors/hassanrupam/button" title="Sponsor Hassan Sakib Afrin (Rupam)" width={"100%"} height={"100%"} ></iframe>
                </div> */}
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
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

export default AboutRupam;

export const displayAboutRupam = () => {
    return <AboutRupam />;
}