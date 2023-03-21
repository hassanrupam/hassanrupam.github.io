import displaySpotify from './components/apps/spotify';
import displayVsCode from './components/apps/vscode';
import { displayTerminal } from './components/apps/terminal';
import { displaySettings } from './components/settings';
import { displayChrome } from './components/apps/chrome';
import { displayTrash } from './components/apps/trash';
import { displayGedit } from './components/apps/gedit';
import { displayAboutRupam} from './components/AboutRupam';
import { displayTerminalCalc } from './components/apps/calc';

//ALGO =>
//ALPHAS = aBcDeFgHiJkLmNoPqRsTuVwXyZAbCdEfGhIjKlMnOpQrStUvWxYz0192837465%^$&#*@(!)~_+
//SHIFT = -10
//CASE STRATEGY = STRICT A!=a
//FOREIGN CHARS = INC
export const SECURE_STORAGE_STORE_KEY = {
    TRASH_EMPTY: "jh&iX-(cfjo",
    USER_SELECTED: "ki(h-i(b(*j(T",
    NEW_FOLDERS:"d(m^VebT(hi",
    SETTING_AUTO_OPEN_MENU: "i(jj_d)^&kje^ef(d^c(dk",
    SETTING_SECTION: "i(jj_d)-i(*j_ed",
    FREQUENT_APPS: "Vh(gk(djqffi",
    BACKGROUND_IMAGE: "R)-_c&)(",
    BACKGROUND_IMAGE_FUNCTION: "R)-_c&)(-Vkd*",
    BOOTING_SCREEN: "Reej_d)^i*h((d",
    SHUTDOWN: "iXkj-Temd",
    SCREEN_LOCKED: "i*h((d-be*a(T",
    ABOUT_SECTION:"&Rekj-i(*j_ed",
    CHROME_URL : "*Xhec(-khb",
    CHROME_DISPLAY_URL : "*Xhec(-T_ifb&o-khb",
    SOUND_LEVEL: "iekdT-b(l(b",
    BRIGHTNESS_LEVEL : "Rh_)Xjd(ii-b(l(b"
}

//ALGO =>
//ALPHAS = AbCdEfGhIjKlMnOpQrStUvWxYz0192837465%^$&#*@(!)~_+aBcDeFgHiJkLmNoPqRsTuVwXyZ
//SHIFT = -20
//CASE STRATEGY = STRICT A!=a
//FOREIGN CHARS = INC
export const APPLICATION_UNIQUE_ID = {
    MONITOR_SCREEN :"*(T^Z(X-_3X44T",
    STATUS_BAR:"_Z2Za_-H2X",
    ABOUT_RUPAM: {
        ABOUT: "2H(aZ",
        EDUCATION:"4Ja32Z^(T",
        SKILLS: "_&^RR_",
        PROJECTS:"VX(P43Z_",
        RESUME:"X4_a*4"
    },
    SETTINGS: {
        WIFI:"c^L^",
        BACKGROUND: "H23&5X(aTJ",
        BLUETOOTH: "HRa4Z((ZN",
        SHARING: "_N2X^T5",
        PRINTERS: "VX^TZ4X_",
        USERS: "a_4X_",
        DEFAULT_APP:"J4L2aRZgVV",
        DATE_TIME: "J2Z4+^*4",
        ABOUT: "2H(aZ"
    },
    CMD: "3*J",
    CHROME_SCREEN: "3NX(*4-_3X44T"
    
}

export const APPLICATION_EVENTS = {
    CLICK: "click",
    KEY_PRESS : "keypress",
    RESIZE: "resize",
    FULL_SCREEN_CHANGE:"fullscreenchange",
    CONTEXT_MENU: "contextmenu",
    KEY_DOWN : "keydown"
}

export const BACKGROUND_WALLPAPERS = {
    "wall-1": "./images/wallpapers/wall-1.webp",
    "wall-2": "./images/wallpapers/wall-2.webp",
    "wall-3": "./images/wallpapers/wall-3.webp",
    "wall-4": "./images/wallpapers/wall-4.webp",
    "wall-5": "./images/wallpapers/wall-5.webp",
    "wall-6": "./images/wallpapers/wall-6.webp",
    "wall-7": "./images/wallpapers/wall-7.webp",
    "wall-8": "./images/wallpapers/wall-8.webp",
    "wall-find-a-way": "./images/wallpapers/wall-find-a-way.webp",
    "wall-hassan": "./images/wallpapers/wall-hassan.webp",
    "wall-night-owl": "./images/wallpapers/wall-night-owl.webp",
    "wall-rupam": "./images/wallpapers/wall-rupam.webp",
}

export const TIME_MERIDIEM = {
    AM: "AM",
    PM: "PM"
}

export const MONTH_LIST = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const WEEK_DAYS_LIST = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const APP_CONSTANTS = {
    BOOLEAN:{
        TRUE: true,
        FALSE: false
    },
    TODAY: new Date(),
    PAD_WITH_ZERO : "0",
    ANGLES: {
        UP:"up",
        DOWN:"down",
        RIGHT:"right",
        LEFT:"left"
    },
    TIME_OUTS:{
        MS100: 100,
        MS200: 200,
        MS300: 300,
        MS500: 500,
        SECONDS_1: 1000,
        SECONDS_2: 2000,
        SECONDS_3: 3000,
        SECONDS_5: 5000,
        SECONDS_10: 10000
    },
    SIZE: {
        EXTRA_SMALL: "xs",
        SMALL: "sm",
        MEDIUM: "md",
        LARGE: "lg",
        EXTRA_LARGE: "xl"
    }
}

export const APP_SEPERATORS = {
    TIME_SEPERATOR: ":",
    BLACK_SEPERATOR: " "
}


const apps = [
    {
        id: "chrome",
        title: "Google Chrome",
        icon: './themes/Yaru/apps/chrome.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: true,
        screen: displayChrome,
    },
    {
        id: "calc",
        title: "Calc",
        icon: './themes/Yaru/apps/calc.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayTerminalCalc,
    },
    {
        id: "about-rupam",
        title: "About Rupam",
        icon: './themes/Yaru/system/user-home.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: true,
        screen: displayAboutRupam,
    },
    {
        id: "vscode",
        title: "Visual Studio Code",
        icon: './themes/Yaru/apps/vscode.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayVsCode,
    },
    {
        id: "terminal",
        title: "Terminal",
        icon: './themes/Yaru/apps/bash.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayTerminal,
    },
    {
        id: "spotify",
        title: "Spotify",
        icon: './themes/Yaru/apps/spotify.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displaySpotify,
    },
    {
        id: "settings",
        title: "Settings",
        icon: './themes/Yaru/apps/gnome-control-center.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displaySettings,
    },
    {
        id: "trash",
        title: "Trash",
        icon: './themes/Yaru/system/user-trash-full.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayTrash,
    },
    {
        id: "gedit",
        title: "Contact Me",
        icon: './themes/Yaru/apps/gedit.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayGedit,
    },
]

export default apps;

