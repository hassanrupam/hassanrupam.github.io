import { UBUNTU_ICONS_VALUES } from "./iconConstants";
import { APPLICATION_UNIQUE_ID_KEY_CONSTANTS } from "./keyConstants";
import { APP_CONSTANTS_VALUES } from "./valueConstants";
import apps from '../apps.config';

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
        MENU_NAME: "Multitasking",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.MULTITASKING,
        ICON: UBUNTU_ICONS_VALUES.EMBLEMS.EMBLEM_MULTITASKING,
        ALT: "multitasking setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 9,
        MENU_NAME: "Applications",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.APPLICATIONS,
        ICON: UBUNTU_ICONS_VALUES.SYSTEM.VIEW_APP_GRID,
        ALT: "applications setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
        isRightSwipeActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 10,
        MENU_NAME: "Privacy",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.PRIVACY,
        ICON: UBUNTU_ICONS_VALUES.STATUS.LOCK_BLANK,
        ALT: "privacy setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
        isRightSwipeActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 11,
        MENU_NAME: "Online Accounts",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.ONLINE_ACCOUNTS,
        ICON: UBUNTU_ICONS_VALUES.STATUS.ONLINE_ACCOUNTS,
        ALT: "online accounts setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 12,
        MENU_NAME: "Sharing",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.SHARING,
        ICON: UBUNTU_ICONS_VALUES.STATUS.FOLDER_PUBLIC_SHARE,
        ALT: "sharing setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 13,
        MENU_NAME: "Sound",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.SOUND,
        ICON: UBUNTU_ICONS_VALUES.STATUS.SOUND,
        ALT: "sound setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 14,
        MENU_NAME: "Power",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.POWER,
        ICON: UBUNTU_ICONS_VALUES.STATUS.POWER_SETTING,
        ALT: "power setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 15,
        MENU_NAME: "Displays",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.DISPLAYS,
        ICON: UBUNTU_ICONS_VALUES.STATUS.DISPLAY_SETTING,
        ALT: "displays setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 16,
        MENU_NAME: "Mouse & Touchpad",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.MOUSE_AND_TOUCH_PAD,
        ICON: UBUNTU_ICONS_VALUES.STATUS.MOUSE,
        ALT: "mouse touch pad setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 17,
        MENU_NAME: "Keyboard",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.KEYBOARD_SHORTCUT,
        ICON: UBUNTU_ICONS_VALUES.STATUS.KEYBOARD,
        ALT: "keyboard shortcuts setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 18,
        MENU_NAME: "Printers",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.PRINTERS,
        ICON: UBUNTU_ICONS_VALUES.STATUS.PRINTER,
        ALT: "printer setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 19,
        MENU_NAME: "Removable Media",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.REMOVABLE_MEDIA,
        ICON: UBUNTU_ICONS_VALUES.STATUS.MEDIA_REMOVABLE,
        ALT: "removable_media setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 20,
        MENU_NAME: "Color",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.COLOR,
        ICON: UBUNTU_ICONS_VALUES.STATUS.COLOR,
        ALT: "color setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 21,
        MENU_NAME: "Region & Language",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.REGION_AND_LANGUAGE,
        ICON: UBUNTU_ICONS_VALUES.STATUS.NETWORK.LOCAL,
        ALT: "region language setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 22,
        MENU_NAME: "Accessibility",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.UNIVERSAL_ACCESS,
        ICON: UBUNTU_ICONS_VALUES.STATUS.UNIVERSAL_ACCESS,
        ALT: "universal access setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 23,
        MENU_NAME: "Users",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.USERS,
        ICON: UBUNTU_ICONS_VALUES.STATUS.SYSTEM_USERS,
        ALT: "users setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 24,
        MENU_NAME: "Default Application",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.DEFAULT_APP,
        ICON: UBUNTU_ICONS_VALUES.STATUS.DEFAULT_APP,
        ALT: "defaultApp setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 25,
        MENU_NAME: "Date & Time",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.DATE_TIME,
        ICON: UBUNTU_ICONS_VALUES.STATUS.DATE_TIME,
        ALT: "date time setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 26,
        MENU_NAME: "About",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.ABOUT,
        ICON: UBUNTU_ICONS_VALUES.STATUS.HELP,
        ALT: "about setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 27,
        MENU_NAME: "Version Information",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.VERSION,
        ICON: UBUNTU_ICONS_VALUES.STATUS.VERSION,
        ALT: "version setting",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    }
]


export const UBUNTU_SETTINGS_APPLICATION_PROPS = [ 
    {
        SERIAL: 1,
        MENU_NAME: "Additional Drivers",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.APPLICATIONS_LIST.ADDITIONAL_DRIVERS,
        ICON: UBUNTU_ICONS_VALUES.SYSTEM.ADDITIONAL_DRIVERS,
        ALT: "additional drivers",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 2,
        MENU_NAME: "Advance Network",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.APPLICATIONS_LIST.ADVANCE_NETWORK,
        ICON: UBUNTU_ICONS_VALUES.SYSTEM.ADVANCE_NETWORK,
        ALT: "advance network configuration",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 3,
        MENU_NAME: "Archive Manager",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.APPLICATIONS_LIST.ARCHIVE_MANAGER,
        ICON: UBUNTU_ICONS_VALUES.SYSTEM.ARCHIVE_MANAGER,
        ALT: "Archive Manager",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 4,
        MENU_NAME: "Backups",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.APPLICATIONS_LIST.BACKUPS,
        ICON: UBUNTU_ICONS_VALUES.SYSTEM.BACKUPS_APP,
        ALT: "backups",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 5,
        MENU_NAME: "Calculator",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.APPLICATIONS_LIST.CALCULATOR,
        ICON: UBUNTU_ICONS_VALUES.APPS.CALCULATOR,
        ALT: "calculator",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 6,
        MENU_NAME: "Calendar",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.APPLICATIONS_LIST.CALENDAR,
        ICON: UBUNTU_ICONS_VALUES.APPS.CALENDAR,
        ALT: "calendar",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 7,
        MENU_NAME: "Characters",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.APPLICATIONS_LIST.CHARACTERS,
        ICON: UBUNTU_ICONS_VALUES.APPS.CHARACTERS,
        ALT: "characters",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 8,
        MENU_NAME: "Cheese",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.APPLICATIONS_LIST.CHEESE,
        ICON: UBUNTU_ICONS_VALUES.APPS.CHEESE,
        ALT: "cheese",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 9,
        MENU_NAME: "Cisco Secure Client",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.APPLICATIONS_LIST.CISCO_SECURE,
        ICON: UBUNTU_ICONS_VALUES.APPS.CISCO_SECURE,
        ALT: "cisco secure client",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 11,
        MENU_NAME: "dbeaver-ce",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.APPLICATIONS_LIST.DBEAVER,
        ICON: UBUNTU_ICONS_VALUES.APPS.DBEAVER,
        ALT: "dbeaver",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 12,
        MENU_NAME: "Disks",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.APPLICATIONS_LIST.DISKS,
        ICON: UBUNTU_ICONS_VALUES.APPS.DISC_UTILITY_APP,
        ALT: "disk utility",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 13,
        MENU_NAME: "Disk Usage Analyzer",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.APPLICATIONS_LIST.DISK_USAGE,
        ICON: UBUNTU_ICONS_VALUES.APPS.DISC_USAGE_APP,
        ALT: "disk usage",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 14,
        MENU_NAME: "Documents Scanner",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.APPLICATIONS_LIST.DOCUMENT_SCANNER,
        ICON: UBUNTU_ICONS_VALUES.APPS.DOCUMENT_SCANNER,
        ALT: "document scanner",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 15,
        MENU_NAME: "Documents Viewer",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.APPLICATIONS_LIST.DOCUMENT_VIEWER,
        ICON: UBUNTU_ICONS_VALUES.APPS.DOCUMENT_VIEWER,
        ALT: "document viewer",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 16,
        MENU_NAME: "Files",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.APPLICATIONS_LIST.FILES,
        ICON: UBUNTU_ICONS_VALUES.SYSTEM.FOLDER,
        ALT: "files",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 17,
        MENU_NAME: "fish",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.APPLICATIONS_LIST.FISH,
        ICON: UBUNTU_ICONS_VALUES.APPS.FISH,
        ALT: "fish",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 18,
        MENU_NAME: "Font Manager",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.APPLICATIONS_LIST.FONT_MANAGER,
        ICON: UBUNTU_ICONS_VALUES.APPS.FONT_MANAGER,
        ALT: "font manager",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 19,
        MENU_NAME: "Fonts",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.APPLICATIONS_LIST.FONTS,
        ICON: UBUNTU_ICONS_VALUES.APPS.FONT_MANAGER,
        ALT: "fonts",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 20,
        MENU_NAME: "Font Viewer",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.APPLICATIONS_LIST.FONTS_VIEWER,
        ICON: UBUNTU_ICONS_VALUES.APPS.FONT_MANAGER,
        ALT: "font viewer",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 21,
        MENU_NAME: "Google Chrome",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.APPLICATIONS_LIST.CHROME,
        ICON: UBUNTU_ICONS_VALUES.APPS.CHROME,
        ALT: "google chrome",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 22,
        MENU_NAME: "Help",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.APPLICATIONS_LIST.HELP,
        ICON: UBUNTU_ICONS_VALUES.APPS.HELP_APP,
        ALT: "help",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 23,
        MENU_NAME: "Image Viewer",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.APPLICATIONS_LIST.IMAGE_VIEWER,
        ICON: UBUNTU_ICONS_VALUES.APPS.IMAGE_VIEWER,
        ALT: "image viewer",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 24,
        MENU_NAME: "IntelliJ IDEA",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.APPLICATIONS_LIST.INTELLIJ,
        ICON: UBUNTU_ICONS_VALUES.APPS.INTELLIJ,
        ALT: "intelliJ idea ultimate edition",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 25,
        MENU_NAME: "Language Support",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.APPLICATIONS_LIST.LANGUAGE_SUPPORT,
        ICON: UBUNTU_ICONS_VALUES.APPS.LANGUAGE_SUPPORT,
        ALT: "language support",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 26,
        MENU_NAME: "LibreOffice",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.APPLICATIONS_LIST.LIBREOFFICE,
        ICON: UBUNTU_ICONS_VALUES.APPS.LIBRE_OFFICE,
        ALT: "libreoffice",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 27,
        MENU_NAME: "Logs",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.APPLICATIONS_LIST.LOGS,
        ICON: UBUNTU_ICONS_VALUES.APPS.LOGS,
        ALT: "logs",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 28,
        MENU_NAME: "Mockoon",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.APPLICATIONS_LIST.MOCKOON,
        ICON: UBUNTU_ICONS_VALUES.APPS.MOCKOON,
        ALT: "mockoon",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 29,
        MENU_NAME: "Passwords and Keys",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.APPLICATIONS_LIST.PASSWORD_AND_KEYS,
        ICON: UBUNTU_ICONS_VALUES.APPS.PASSWORDS,
        ALT: "passowrd and keys",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 30,
        MENU_NAME: "Power Statistics",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.APPLICATIONS_LIST.POWER_STATISTICS,
        ICON: UBUNTU_ICONS_VALUES.APPS.POWER_STATISTICS,
        ALT: "power statistics",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 31,
        MENU_NAME: "Settings",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.APPLICATIONS_LIST.SETTINGS,
        ICON: UBUNTU_ICONS_VALUES.APPS.SETTING,
        ALT: "settings",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 32,
        MENU_NAME: "Software Updater",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.APPLICATIONS_LIST.SOFTWARE_UPDATER,
        ICON: UBUNTU_ICONS_VALUES.APPS.SOFTWARE_UPDATER,
        ALT: "software updater",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 33,
        MENU_NAME: "System Monitor",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.APPLICATIONS_LIST.SYSTEM_MONITOR,
        ICON: UBUNTU_ICONS_VALUES.APPS.SYSTEM_MONITOR,
        ALT: "system monitor",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 34,
        MENU_NAME: "Terminal",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.APPLICATIONS_LIST.TERMINAL,
        ICON: UBUNTU_ICONS_VALUES.APPS.TERMINAL,
        ALT: "terminal",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 35,
        MENU_NAME: "Ubuntu Software",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.APPLICATIONS_LIST.UBUNTU_SOFTWARE,
        ICON: UBUNTU_ICONS_VALUES.APPS.UBUNTU_SOFTWARE,
        ALT: "ubuntu software",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 36,
        MENU_NAME: "Videos",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.APPLICATIONS_LIST.VIDEOS,
        ICON: UBUNTU_ICONS_VALUES.APPS.VIDEOS,
        ALT: "videos",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 37,
        MENU_NAME: "Visual Studio Code",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.APPLICATIONS_LIST.VSCODE,
        ICON: UBUNTU_ICONS_VALUES.APPS.VSCODE,
        ALT: "visual studio code",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 38,
        MENU_NAME: "Youtube",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.APPLICATIONS_LIST.YOUTUBE,
        ICON: UBUNTU_ICONS_VALUES.APPS.YOUTUBE,
        ALT: "youtube",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
]

export const UBUNTU_SETTINGS_PRIVACY_PROPS = [ 
    {
        SERIAL: 1,
        MENU_NAME: "Connectivity",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.PRIVACY_LIST.CONNECTIVITY,
        ICON: UBUNTU_ICONS_VALUES.STATUS.NETWORK.CONNECTIVITY,
        ALT: "connectivity",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 2,
        MENU_NAME: "Location Services",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.PRIVACY_LIST.LOCATION_SERVICE,
        ICON: UBUNTU_ICONS_VALUES.STATUS.LOCATION.ACTIVE,
        ALT: "location services",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 3,
        MENU_NAME: "Thunderbolt",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.PRIVACY_LIST.THUNDERBOLT,
        ICON: UBUNTU_ICONS_VALUES.STATUS.THUNDERBOLT,
        ALT: "thunderbolt",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 4,
        MENU_NAME: "File History & Trash",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.PRIVACY_LIST.FILE_HISTORY_AND_TRASH,
        ICON: UBUNTU_ICONS_VALUES.STATUS.FILES_OUTLINE,
        ALT: "thunderbolt",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 5,
        MENU_NAME: "Screen",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.PRIVACY_LIST.SCREEN,
        ICON: UBUNTU_ICONS_VALUES.STATUS.MONITOR,
        ALT: "thunderbolt",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
    {
        SERIAL: 6,
        MENU_NAME: "Diagnostics",
        ID: APPLICATION_UNIQUE_ID_KEY_CONSTANTS.SETTINGS.PRIVACY_LIST.DIAGNOSTICS,
        ICON: UBUNTU_ICONS_VALUES.STATUS.DIAGNOSTICS,
        ALT: "thunderbolt",
        isActive: APP_CONSTANTS_VALUES.BOOLEAN.TRUE,
    },
]