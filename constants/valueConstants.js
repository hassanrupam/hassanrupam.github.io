import { displayAboutRupam } from "../components/AboutRupam";
import { displayTerminalCalc } from "../components/apps/calc";
import { displayChrome } from "../components/apps/chrome";
import { displayGedit } from "../components/apps/gedit";
import { displaySpotify } from "../components/apps/spotify";
import { displayTerminal } from "../components/apps/terminal";
import { displayTrash } from "../components/apps/trash";
import { displayVsCode } from "../components/apps/vscode";
import { displaySettings } from "../components/settings";
import { UBUNTU_ICONS_VALUES } from "./iconConstants";
import { APPLICATION_VERSION } from "./versionChangeLog";

export const APPLICATION_EVENTS_VALUES = {
    CLICK: "click",
    KEY_PRESS: "keypress",
    RESIZE: "resize",
    FULL_SCREEN_CHANGE: "fullscreenchange",
    CONTEXT_MENU: "contextmenu",
    KEY_DOWN: "keydown"
}

export const BACKGROUND_WALLPAPERS_VALUES = {
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

export const TIME_MERIDIEM_VALUES = {
    AM: "AM",
    PM: "PM"
}

export const MONTH_LIST_VALUES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const WEEK_DAYS_LIST_VALUES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const APP_CONSTANTS_VALUES = {
    BOOLEAN: {
        TRUE: true,
        FALSE: false
    },
    TODAY: new Date(),
    PAD_WITH_ZERO: "0",
    ANGLES: {
        UP: "up",
        DOWN: "down",
        RIGHT: "right",
        LEFT: "left"
    },
    TIME_OUTS: {
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
    },
    VERSION: APPLICATION_VERSION
}

export const APP_SEPARATORS_VALUES = {
    TIME_SEPARATOR: ":",
    BLANK_SEPARATOR: " "
}

export const APPS_LIST = [
    {
        id: "chrome",
        title: "Google Chrome",
        icon: UBUNTU_ICONS_VALUES.APPS.CHROME.SRC,
        disabled: APP_CONSTANTS_VALUES.BOOLEAN.FALSE,
        favourite: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
        desktop_shortcut: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
        screen: displayChrome,
    },
    {
        id: "calc",
        title: "Calc",
        icon: UBUNTU_ICONS_VALUES.APPS.CALCULATOR.SRC,
        disabled: APP_CONSTANTS_VALUES.BOOLEAN.FALSE,
        favourite: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
        desktop_shortcut: APP_CONSTANTS_VALUES.BOOLEAN.FALSE,
        screen: displayTerminalCalc,
    },
    {
        id: "about-rupam",
        title: "About Rupam",
        icon: UBUNTU_ICONS_VALUES.SYSTEM.USER_HOME.SRC,
        disabled: APP_CONSTANTS_VALUES.BOOLEAN.FALSE,
        favourite: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
        desktop_shortcut: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
        screen: displayAboutRupam,
    },
    {
        id: "vscode",
        title: "Visual Studio Code",
        icon: UBUNTU_ICONS_VALUES.APPS.VSCODE.SRC,
        disabled: APP_CONSTANTS_VALUES.BOOLEAN.FALSE,
        favourite: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
        desktop_shortcut: APP_CONSTANTS_VALUES.BOOLEAN.FALSE,
        screen: displayVsCode,
    },
    {
        id: "terminal",
        title: "Terminal",
        icon: UBUNTU_ICONS_VALUES.APPS.TERMINAL.SRC,
        disabled: APP_CONSTANTS_VALUES.BOOLEAN.FALSE,
        favourite: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
        desktop_shortcut: APP_CONSTANTS_VALUES.BOOLEAN.FALSE,
        screen: displayTerminal,
    },
    {
        id: "spotify",
        title: "Spotify",
        icon: UBUNTU_ICONS_VALUES.APPS.SPOTIFY.SRC,
        disabled: APP_CONSTANTS_VALUES.BOOLEAN.FALSE,
        favourite: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
        desktop_shortcut: APP_CONSTANTS_VALUES.BOOLEAN.FALSE,
        screen: displaySpotify,
    },
    {
        id: "settings",
        title: "Settings",
        icon: UBUNTU_ICONS_VALUES.APPS.SETTING.SRC,
        disabled: APP_CONSTANTS_VALUES.BOOLEAN.FALSE,
        favourite: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
        desktop_shortcut: APP_CONSTANTS_VALUES.BOOLEAN.FALSE,
        screen: displaySettings,
    },
    {
        id: "trash",
        title: "Trash",
        icon: UBUNTU_ICONS_VALUES.SYSTEM.USER_TRASH.SRC,
        disabled: APP_CONSTANTS_VALUES.BOOLEAN.FALSE,
        favourite: APP_CONSTANTS_VALUES.BOOLEAN.FALSE,
        desktop_shortcut: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
        screen: displayTrash,
    },
    {
        id: "gedit",
        title: "Contact Me",
        icon: UBUNTU_ICONS_VALUES.APPS.TEXT_EDITOR.SRC,
        disabled: APP_CONSTANTS_VALUES.BOOLEAN.FALSE,
        favourite: APP_CONSTANTS_VALUES.BOOLEAN.FALSE,
        desktop_shortcut: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
        screen: displayGedit,
    },
]

export const REMOVABLE_MEDIA_OPTIONS_VALUES = [
    {
        mediaType: "CD Audio",
        optionName: "Ask what to do",
    },
    {
        mediaType: "DVD Video",
        optionName: "Ask what to do",
    },
    {
        mediaType: "Music Player",
        optionName: "Rhythmbox",
        optionIcon: UBUNTU_ICONS_VALUES.APPS.AUDIO_APP.SRC
    },
    {
        mediaType: "Photos",
        optionName: "Image Viewer",
        optionIcon: UBUNTU_ICONS_VALUES.APPS.IMAGE_VIEWER.SRC
    },
    {
        mediaType: "Software",
        optionName: "Run Software",
        optionIcon: UBUNTU_ICONS_VALUES.SYSTEM.VIEW_APP_GRID.SRC
    },
    
]
