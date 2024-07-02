import { UBUNTU_ICONS_VALUES } from "./iconConstants";
import { APPLICATION_UNIQUE_ID_KEY_CONSTANTS } from "./keyConstants";
import { APP_CONSTANTS_VALUES } from "./valueConstants";

export const UBUNTU_SETTINGS_MENU_PROPS = [
    {
        SERIAL: 1,
        MENU_NAME: "Wifi",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.WIFI,
        ICON: UBUNTU_ICONS_VALUES.STATUS.WIFI.BASE,
        ALT: "wifi setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 2,
        MENU_NAME: "Network",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.NETWORK,
        ICON: UBUNTU_ICONS_VALUES.STATUS.NETWORK.SYSTEM,
        ALT: "network setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 3,
        MENU_NAME: "Bluetooth",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.BLUETOOTH,
        ICON: UBUNTU_ICONS_VALUES.STATUS.BLUETOOTH.BASE,
        ALT: "bluetooth setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 4,
        MENU_NAME: "Background",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.BACKGROUND,
        ICON: UBUNTU_ICONS_VALUES.STATUS.BACKGROUND,
        ALT: "background setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 5,
        MENU_NAME: "Appearance",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.APPEARANCE,
        ICON: UBUNTU_ICONS_VALUES.STATUS.DESKTOP_PANEL,
        ALT: "appearance setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 6,
        MENU_NAME: "Notifications",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.NOTIFICATION,
        ICON: UBUNTU_ICONS_VALUES.STATUS.NOTIFICATION,
        ALT: "notification setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 7,
        MENU_NAME: "Search",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.SEARCH,
        ICON: UBUNTU_ICONS_VALUES.STATUS.SEARCH,
        ALT: "search setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 8,
        MENU_NAME: "Applications",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.APPLICATIONS,
        ICON: UBUNTU_ICONS_VALUES.SYSTEM.VIEW_APP_GRID,
        ALT: "applications setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.FALSE,
    },
    {
        SERIAL: 9,
        MENU_NAME: "Privacy",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.PRIVACY,
        ICON: UBUNTU_ICONS_VALUES.STATUS.LOCK_BLANK,
        ALT: "privacy setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.FALSE,
    },
    {
        SERIAL: 10,
        MENU_NAME: "Online Accounts",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.ONLINE_ACCOUNTS,
        ICON: UBUNTU_ICONS_VALUES.STATUS.ONLINE_ACCOUNTS,
        ALT: "online accounts setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 11,
        MENU_NAME: "Sharing",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.SHARING,
        ICON: UBUNTU_ICONS_VALUES.STATUS.FOLDER_PUBLIC_SHARE,
        ALT: "sharing setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 12,
        MENU_NAME: "Sound",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.SOUND,
        ICON: UBUNTU_ICONS_VALUES.STATUS.SOUND,
        ALT: "sound setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 13,
        MENU_NAME: "Power",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.POWER,
        ICON: UBUNTU_ICONS_VALUES.STATUS.POWER_SETTING,
        ALT: "power setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 14,
        MENU_NAME: "Displays",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.DISPLAYS,
        ICON: UBUNTU_ICONS_VALUES.STATUS.DISPLAY_SETTING,
        ALT: "displays setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 15,
        MENU_NAME: "Mouse & Touchpad",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.MOUSE_AND_TOUCH_PAD,
        ICON: UBUNTU_ICONS_VALUES.STATUS.MOUSE,
        ALT: "mouse touch pad setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 16,
        MENU_NAME: "Keyboard",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.KEYBOARD_SHORTCUT,
        ICON: UBUNTU_ICONS_VALUES.STATUS.KEYBOARD,
        ALT: "keyboard shortcuts setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 17,
        MENU_NAME: "Printers",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.PRINTERS,
        ICON: UBUNTU_ICONS_VALUES.STATUS.PRINTER,
        ALT: "printer setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 18,
        MENU_NAME: "Removable Media",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.REMOVABLE_MEDIA,
        ICON: UBUNTU_ICONS_VALUES.STATUS.MEDIA_REMOVABLE,
        ALT: "removable_media setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 19,
        MENU_NAME: "Color",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.COLOR,
        ICON: UBUNTU_ICONS_VALUES.STATUS.COLOR,
        ALT: "color setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 20,
        MENU_NAME: "Region & Language",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.REGION_AND_LANGUAGE,
        ICON: UBUNTU_ICONS_VALUES.STATUS.NETWORK.LOCAL,
        ALT: "region language setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 21,
        MENU_NAME: "Accessibility",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.UNIVERSAL_ACCESS,
        ICON: UBUNTU_ICONS_VALUES.STATUS.UNIVERSAL_ACCESS,
        ALT: "universal access setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 22,
        MENU_NAME: "Users",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.USERS,
        ICON: UBUNTU_ICONS_VALUES.STATUS.SYSTEM_USERS,
        ALT: "users setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 23,
        MENU_NAME: "Default Application",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.DEFAULT_APP,
        ICON: UBUNTU_ICONS_VALUES.STATUS.DEFAULT_APP,
        ALT: "defaultApp setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 24,
        MENU_NAME: "Date & Time",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.DATE_TIME,
        ICON: UBUNTU_ICONS_VALUES.STATUS.DATE_TIME,
        ALT: "date time setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 25,
        MENU_NAME: "About",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.ABOUT,
        ICON: UBUNTU_ICONS_VALUES.STATUS.HELP,
        ALT: "about setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 26,
        MENU_NAME: "Version Information",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.VERSION,
        ICON: UBUNTU_ICONS_VALUES.STATUS.VERSION,
        ALT: "version setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    }
]