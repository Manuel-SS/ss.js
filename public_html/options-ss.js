
// TODO Add documentation
const DEFAULT_LANGUAGE_CODE = "en";
// TODO Add documentation
const DEFAULT_COUNTRY_CODE = "US";

// Logging

/**
 * @description If logging is enabled.
 * @type {Boolean}
 */
const ENABLE_LOGGING = true;
/**
 * @description If logging by (HTML) comment is enabled.
 * @type {Boolean}
 */
const ENABLE_LOGGING_BY_COMMENT = true;

// Tabs

/**
 * @description The maximum number of tabs that can be opened by the user.
 * @type {Number}
 */
const MAXIMUM_NUMBER_OF_ALLOWED_TABS = 100;
/**
 * @description The maximum number of tabs that can be closed by the user (after which closed tabs will be deleted).
 * @type {Number}
 */
const MAXIMUM_NUMBER_OF_ALLOWED_CLOSED_TABS = 50;

// Application

/**
 * @description The title of the application.
 * @type {String}
 */
const APPLICATION_TITLE_DEFAULT = "VISI";
/**
 * @description The title separator of the application.
 * @type {String}
 */
const APPLICATION_TITLE_SEPARATOR = " - ";
/**
 * @description The full title of the application.
 * @type {String}
 */
const APPLICATION_FULL_TITLE_DEFAULT = APPLICATION_TITLE_DEFAULT + APPLICATION_TITLE_SEPARATOR + "B&S";
// TODO Add documentation
const GET_APPLICATION_TITLE = () => sessionStorage.isPropertyNullOrUndefined("projectName") ?
    APPLICATION_FULL_TITLE_DEFAULT :
    APPLICATION_FULL_TITLE_DEFAULT + ": " + sessionStorage.projectName;
/**
 * @description If CORS is required by the web service.
 * @type {Boolean}
 */
const WEB_SERVICE_REQUIRES_CORS = true;

// Floating Popup

// TODO Add documentation
const MILLISECONDS_BEFORE_POPUP_DEACTIVATION = 0.5 * 1000;

// Debugging

/**
 * @description If debug mode is enabled.
 * @type {Boolean}
 */
const ENABLE_DEBUG_MODE = true;