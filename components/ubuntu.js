import React, { Component } from 'react';
import BootingScreen from './screen/booting_screen';
import Desktop from './screen/desktop';
import LockScreen from './screen/lock_screen';
import Navbar from './screen/navbar';
import ReactGA from 'react-ga';
import { APPLICATION_EVENTS, APPLICATION_UNIQUE_ID, APP_CONSTANTS, SECURE_STORAGE_STORE_KEY } from '../apps.config';
import secureLocalStorage from "react-secure-storage";

export default class Ubuntu extends Component {
	constructor() {
		super();
		this.state = {
			screen_locked: APP_CONSTANTS.BOOLEAN.FALSE,
			bg_image_name: 'wall-2',
			booting_screen: APP_CONSTANTS.BOOLEAN.TRUE,
			shutDownScreen: APP_CONSTANTS.BOOLEAN.FALSE
		};
	}

	componentDidMount() {
		this.getLocalData();
	}

	setTimeOutBootScreen = () => {
		setTimeout(() => {
			this.setState({ booting_screen: APP_CONSTANTS.BOOLEAN.FALSE });
		}, APP_CONSTANTS.TIME_OUTS.SECONDS_2);
	};

	getLocalData = () => {
		// Get Previously selected Background Image
		let bg_image_name = secureLocalStorage.getItem(SECURE_STORAGE_STORE_KEY.BACKGROUND_IMAGE);
		if (bg_image_name !== null && bg_image_name !== undefined) {
			this.setState({ bg_image_name });
		}

		let booting_screen = secureLocalStorage.getItem(SECURE_STORAGE_STORE_KEY.BOOTING_SCREEN);
		if (booting_screen !== null && booting_screen !== undefined) {
			// user has visited site before
			this.setState({ booting_screen: APP_CONSTANTS.BOOLEAN.FALSE });
		} else {
			// user is visiting site for the first time
			secureLocalStorage.setItem(SECURE_STORAGE_STORE_KEY.BOOTING_SCREEN, APP_CONSTANTS.BOOLEAN.FALSE);
			this.setTimeOutBootScreen();
		}

		// get shutdown state
		let shut_down = secureLocalStorage.getItem(SECURE_STORAGE_STORE_KEY.SHUTDOWN);
		if (shut_down !== null && shut_down !== undefined && shut_down === 'true') this.shutDown();
		else {
			// Get previous lock screen state
			let screen_locked = secureLocalStorage.getItem(SECURE_STORAGE_STORE_KEY.SCREEN_LOCKED);
			if (screen_locked !== null && screen_locked !== undefined) {
				this.setState({ screen_locked: screen_locked === 'true' ? APP_CONSTANTS.BOOLEAN.TRUE : APP_CONSTANTS.BOOLEAN.FALSE });
			}
		}
	};

	lockScreen = () => {
		// google analytics
		// ReactGA.pageview('/lock-screen');
		// ReactGA.event({
		// 	category: `Screen Change`,
		// 	action: `Set Screen to Locked`
		// });

		document.getElementById(APPLICATION_UNIQUE_ID.STATUS_BAR).blur();
		setTimeout(() => {
			this.setState({ screen_locked: APP_CONSTANTS.BOOLEAN.TRUE });
		}, APP_CONSTANTS.TIME_OUTS.MS100); // waiting for all windows to close (transition-duration)
		secureLocalStorage.setItem(SECURE_STORAGE_STORE_KEY.SCREEN_LOCKED, APP_CONSTANTS.BOOLEAN.TRUE);
	};

	unLockScreen = () => {
		// ReactGA.pageview('/desktop');

		window.removeEventListener(APPLICATION_EVENTS.CLICK, this.unLockScreen);
		window.removeEventListener(APPLICATION_EVENTS.KEY_PRESS, this.unLockScreen);

		this.setState({ screen_locked: APP_CONSTANTS.BOOLEAN.FALSE });
		secureLocalStorage.setItem(SECURE_STORAGE_STORE_KEY.SCREEN_LOCKED, APP_CONSTANTS.BOOLEAN.FALSE);
	};

	changeBackgroundImage = (img_name) => {
		this.setState({ bg_image_name: img_name });
		secureLocalStorage.setItem(SECURE_STORAGE_STORE_KEY.BACKGROUND_IMAGE, img_name);
		secureLocalStorage.setItem(SECURE_STORAGE_STORE_KEY.BACKGROUND_IMAGE_FUNCTION, this.setState({ bg_image_name: img_name }));
	};

	shutDown = () => {
		// ReactGA.pageview('/switch-off');
		// ReactGA.event({
		// 	category: `Screen Change`,
		// 	action: `Switched off the Ubuntu`
		// });

		document.getElementById(APPLICATION_UNIQUE_ID.STATUS_BAR).blur();
		this.setState({ shutDownScreen: APP_CONSTANTS.BOOLEAN.TRUE });
		secureLocalStorage.setItem(SECURE_STORAGE_STORE_KEY.SHUTDOWN, APP_CONSTANTS.BOOLEAN.TRUE);
	};

	turnOn = () => {
		// ReactGA.pageview('/desktop');

		this.setState({ shutDownScreen: APP_CONSTANTS.BOOLEAN.FALSE, booting_screen: APP_CONSTANTS.BOOLEAN.TRUE });
		this.setTimeOutBootScreen();
		secureLocalStorage.setItem(SECURE_STORAGE_STORE_KEY.SHUTDOWN, APP_CONSTANTS.BOOLEAN.FALSE);
	};

	render() {
		return (
			<div className="w-screen h-screen overflow-hidden" id={APPLICATION_UNIQUE_ID.MONITOR_SCREEN}>
				<LockScreen
					isLocked={this.state.screen_locked}
					bgImgName={this.state.bg_image_name}
					unLockScreen={this.unLockScreen}
				/>
				<BootingScreen
					visible={this.state.booting_screen}
					isShutDown={this.state.shutDownScreen}
					turnOn={this.turnOn}
				/>
				<Navbar lockScreen={this.lockScreen} shutDown={this.shutDown} />
				<Desktop bg_image_name={this.state.bg_image_name} changeBackgroundImage={this.changeBackgroundImage} shutDown={this.shutDown}/>
			</div>
		);
	}
}
