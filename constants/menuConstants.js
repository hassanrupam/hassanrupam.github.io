import { UBUNTU_ICONS_VALUES } from "./iconConstants";
import { APPLICATION_UNIQUE_ID_KEY_CONSTANTS } from "./keyConstants";

export const UBUNTU_SETTINGS_MENU_PROPS = [
    {
        SERIAL: 1,
        MENU_NAME: "Wifi",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.WIFI,
        ICON: UBUNTU_ICONS_VALUES.STATUS.WIFI.BASE,
        ALT: "wifi setting"
    },
    {
        SERIAL: 2,
        MENU_NAME: "Background",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.BACKGROUND,
        ICON: UBUNTU_ICONS_VALUES.STATUS.DESKTOP_PANEL,
        ALT: "background setting"
    },
    {
        SERIAL: 3,
        MENU_NAME: "Bluetooth",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.BLUETOOTH,
        ICON: UBUNTU_ICONS_VALUES.STATUS.BLUETOOTH.BASE,
        ALT: "bluetooth setting"
    },
    {
        SERIAL: 4,
        MENU_NAME: "Sharing",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.SHARING,
        ICON: UBUNTU_ICONS_VALUES.STATUS.FOLDER_PUBLIC_SHARE,
        ALT: "sharing setting"
    },
    {
        SERIAL: 5,
        MENU_NAME: "Printers",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.PRINTERS,
        ICON: UBUNTU_ICONS_VALUES.STATUS.PRINTER,
        ALT: "printer setting"
    },
    {
        SERIAL: 6,
        MENU_NAME: "Removable Media",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.REMOVABLE_MEDIA,
        ICON: UBUNTU_ICONS_VALUES.STATUS.MEDIA_REMOVABLE,
        ALT: "removable_media setting"
    },
    {
        SERIAL: 7,
        MENU_NAME: "Color",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.COLOR,
        ICON: UBUNTU_ICONS_VALUES.STATUS.COLOR,
        ALT: "color setting"
    },
    {
        SERIAL: 8,
        MENU_NAME: "Users",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.USERS,
        ICON: UBUNTU_ICONS_VALUES.STATUS.SYSTEM_USERS,
        ALT: "users setting"
    },
    {
        SERIAL: 9,
        MENU_NAME: "Default Application",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.DEFAULT_APP,
        ICON: UBUNTU_ICONS_VALUES.STATUS.DEFAULT_APP,
        ALT: "defaultApp setting"
    },
    {
        SERIAL: 10,
        MENU_NAME: "Date & Time",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.DATE_TIME,
        ICON: UBUNTU_ICONS_VALUES.STATUS.DATE_TIME,
        ALT: "date time setting"
    },
    {
        SERIAL: 11,
        MENU_NAME: "About",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.ABOUT,
        ICON: UBUNTU_ICONS_VALUES.STATUS.ABOUT,
        ALT: "about setting"
    }
]