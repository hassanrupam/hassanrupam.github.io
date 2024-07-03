import { UBUNTU_ICONS } from "../../apps.config"
import { UBUNTU_ICONS_VALUES } from "../../constants/iconConstants"

export const SETTING_PAGES = {
    WIFI: {
        text: "Wi-Fi",
        url: "wifi",
        localValue: "WIFI"
    }
}


export const WIFI_SIGNALS = {
    EXCELLENT: "Excellent",
    GOOD: "Good",
    OK: "Ok",
    WEAK: "Weak",
    NONE: "None"
}

export const WIFI_AVAILABLE_LIST = [
    {
        name: "STRANGER_5G",
        signal: WIFI_SIGNALS.EXCELLENT,
        connected: true,
        secured: true
    },
    {
        name: "Hogwarts Hall of Wifi",
        signal: WIFI_SIGNALS.EXCELLENT,
        connected: false,
        secured: true
    },
    {
        name: "Panic At The Cisco",
        signal: WIFI_SIGNALS.GOOD,
        connected: false,
        secured: true
    },
    {
        name: "Hack of All Trades",
        signal: WIFI_SIGNALS.GOOD,
        connected: false,
        secured: true
    },
    {
        name: "404 Network Unavailable",
        signal: WIFI_SIGNALS.OK,
        connected: false,
        secured: true
    },
    {
        name: "Definitely Not Wi-Fi",
        signal: WIFI_SIGNALS.WEAK,
        connected: false,
        secured: true
    },
    {
        name: "The Mad Ping",
        signal: WIFI_SIGNALS.WEAK,
        connected: false,
        secured: true
    },
    {
        name: "Open Ground",
        signal: WIFI_SIGNALS.NONE,
        connected: false,
        secured: false
    },
    {
        name: "Spiderman's World Wide Web",
        signal: WIFI_SIGNALS.OK,
        connected: false,
        secured: true
    }
]


export const BLUETOOTH_AVAILABLE_LIST = [
    {
        name: "Zamkol ZK706 Pro",
        status: "Connected"
    },
    {
        name: "Amazfit Bip U Pro",
        status: "Disconnected"
    },
    {
        name: "OnePlus Bullets Wireless Z",
        status: "Disconnected"
    },
    {
        name: "QingPing Alarm Clock",
        status: "Disconnected"
    },
    {
        name: "Redmi Note 10 Pro",
        status: "Disconnected"
    },
    {
        name: "EDIFIER BLE",
        status: "Not Set Up"
    },
    {
        name: "HD 450BT",
        status: "Not Set Up"
    },
    {
        name: "MI SMART BAND 6",
        status: "Not Set Up"
    },
    {
        name: "DIZO GoPods",
        status: "Not Set Up"
    },
]

export const DEFAULT_APP_LIST = [
    {
        appBase: "Web",
        appName: "Google Chrome",
        iconPath: "./themes/Yaru/apps/chrome.png",
    },
    {
        appBase: "Mail",
        appName: "Google Chrome",
        iconPath: "./themes/Yaru/apps/chrome.png",
    },
    {
        appBase: "Calender",
        appName: "Text Editor",
        iconPath: "./themes/Yaru/apps/gedit.png",
    },
    {
        appBase: "Music",
        appName: "Rhythmbox",
        iconPath: "./themes/Yaru/apps/rhythmbox.png",
    },
    {
        appBase: "Video",
        appName: "Videos",
        iconPath: "./themes/Yaru/apps/emblem-videos.png",
    },
    {
        appBase: "Photos",
        appName: "Image Viewer",
        iconPath: UBUNTU_ICONS_VALUES.APPS.IMAGE_VIEWER.SRC,
    }
]


export const USERS_LIST = [
    {
        initials: "G",
        name: "Guest",
        avatarColor: "#A020F0",
        isAdmin: false,
        isLoggedIn: true
    },
    {
        initials: "HA",
        name: "Hassan Sakib Afrin",
        avatarColor: "#008B8B",
        isAdmin: true,
        isLoggedIn: false
    },
    {
        initials: "SU",
        name: "HSR Super",
        avatarColor: "#8B0000",
        isAdmin: true,
        isLoggedIn: false
    },
]
