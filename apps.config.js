import { APPLICATION_UNIQUE_ID_KEY_CONSTANTS, SECURE_STORAGE_STORE_KEY_CONSTANTS } from './constants/keyConstants';
import { APPLICATION_EVENTS_VALUES, APPS_LIST, APP_CONSTANTS_VALUES, APP_SEPARATORS_VALUES, BACKGROUND_WALLPAPERS_VALUES, 
    MONTH_LIST_VALUES, NOTIFICATION_APPLICATION_LIST_VALUES, REMOVABLE_MEDIA_OPTIONS_VALUES, TIME_MERIDIEM_VALUES, WEEK_DAYS_LIST_VALUES , 
    COLOR_VALUES, SEARCH_SETTING_ITEM_LIST_VALUES, ONLINE_ACCOUNT_LIST_VALUES} from './constants/valueConstants';
import { APPLICATION_BASE_PATH_VALUES, UBUNTU_ICONS_VALUES } from './constants/iconConstants';
import { UBUNTU_SETTINGS_MENU_PROPS, UBUNTU_SETTINGS_APPLICATION_PROPS } from './constants/menuConstants';

//key constants
export const SECURE_STORAGE_STORE_KEY = SECURE_STORAGE_STORE_KEY_CONSTANTS;
export const APPLICATION_UNIQUE_ID = APPLICATION_UNIQUE_ID_KEY_CONSTANTS;

//icon constants
export const APPLICATION_BASE_PATH = APPLICATION_BASE_PATH_VALUES;
export const UBUNTU_ICONS = UBUNTU_ICONS_VALUES;

// value constants
export const APPLICATION_EVENTS = APPLICATION_EVENTS_VALUES;
export const BACKGROUND_WALLPAPERS = BACKGROUND_WALLPAPERS_VALUES;
export const TIME_MERIDIEM = TIME_MERIDIEM_VALUES;
export const MONTH_LIST = MONTH_LIST_VALUES;
export const WEEK_DAYS_LIST = WEEK_DAYS_LIST_VALUES;
export const APP_CONSTANTS = APP_CONSTANTS_VALUES;
export const APP_SEPARATORS = APP_SEPARATORS_VALUES;
export const REMOVABLE_MEDIA_OPTIONS = REMOVABLE_MEDIA_OPTIONS_VALUES;
export const NOTIFICATION_APPLICATION_LIST = NOTIFICATION_APPLICATION_LIST_VALUES;
export const SEARCH_SETTING_ITEM_LIST = SEARCH_SETTING_ITEM_LIST_VALUES;
export const APP_COLOR_VALUES = COLOR_VALUES;
export const ONLINE_ACCOUNT_LIST = ONLINE_ACCOUNT_LIST_VALUES;
const apps = APPS_LIST;

//menu constants
export const SETTING_MENU = UBUNTU_SETTINGS_MENU_PROPS;
export const SETTING_APPLICATION_MENU = UBUNTU_SETTINGS_APPLICATION_PROPS;

export default apps;

