/*!
 * Synergy Structure JavaScript (SS.JS)
 * http://synergystructure.com/js
 *
 * Copyright Synergy Stucture and other contributors
 * Released under the MIT license
 * http://synergystructure.com/js/license
 */

"use strict";

//<editor-fold defaultstate="collapsed" desc="Basic">
/* global COMMON_TEXT_LIST */
/* global CSSStyleDeclaration */
/* global decodeURIComponent */
/* global DEFAULT_COUNTRY_CODE */
/* global DEFAULT_LANGUAGE_CODE */
/* global devicePixelRatio */
/* global DOMTokenList */
/* global Element */
/* global ENABLE_DEBUG_MODE */
/* global ENABLE_LOGGING */
/* global FileList */
/* global FormData */
/* global Function */
/* global HTMLBodyElement */
/* global HTMLButtonElement */
/* global HTMLCollection */
/* global HTMLDivElement */
/* global HTMLDocument */
/* global HTMLElement */
/* global HTMLHtmlElement */
/* global HTMLInputElement */
/* global HTMLLIElement */
/* global HTMLOListElement */
/* global HTMLOptGroupElement */
/* global HTMLSelectElement */
/* global HTMLTableCellElement */
/* global HTMLTableElement */
/* global HTMLTableRowElement */
/* global HTMLUListElement */
/* global KeyboardEvent */
/* global Map */
/* global MILLISECONDS_BEFORE_POPUP_DEACTIVATION */
/* global MouseEvent */
/* global NamedNodeMap */
/* global Node */
/* global NodeList */
/* global REQUEST_TIME_OUT */
/* global STRING_TEMPLATE_ESCAPE_CHARACTER */
/* global Tab */
/* global Text */
/* global TouchEvent */
/* global WEB_SERVICE_REQUIRES_CORS */

/**
 * @description Meta information about the framework.
 * @constant
 * @type {Object}
 */
const FRAMEWORK = Object.freeze({
    /**
     * @description Name of the framework.
     * @constant
     * @type {String}
     */
    name: "SS.JS",
    /**
     * @description Version of the framework.
     * @constant
     * @type {String}
     */
    version: "0.9.0"

});

/**
 * @description Common event types.
 * @type {Object}
 */
const COMMON_EVENT_TYPE_LIST = {
    add: "add",
    blur: "blur",
    change: "change",
    click: "click",
    create: "create",
    destroy: "destroy",
    doubleClick: "dblclick",
    focus: "focus",
    input: "input",
    wheel: "wheel",
    scroll: "scroll",
    select: "select",
    storage: "storage",
    remove: "remove",
    response: "response",
    resize: "resize",
    key: {
        up: "keyup",
        press: "keypress",
        down: "keydown"
    },
    drag: {
        over: "dragover",
        leave: "dragleave"
    },
    drop: "drop",
    mouse: {
        down: "mousedown",
        enter: "mouseenter",
        leave: "mouseleave",
        move: "mousemove",
        out: "mouseout",
        over: "mouseover",
        up: "mouseup"
    },
    show: "show",
    tab: {
        update: "tabupdate",
        close: "tabclose"
    },
    touch: {
        cancel: "touchcancel",
        end: "touchend",
        enter: "touchenter",
        leave: "touchleave",
        move: "touchmove",
        start: "touchstart"
    }
};
/**
 * @description Common texts and text templates.
 * @type {Object}
 */
const COMMON_TEXT_LIST = {
    invalidArgument: "Invalid argument: ",
    invalidProperty: "Invalid property: ",
    invalidArgumentCannotBeNullorUndefinedTemplate: "Invalid argument: \"@\" cannot be null or undefined.",
    invalidPropertyCannotBeNullorUndefinedTemplate: "Invalid \"@\" property: the \"@\" property cannot be null or undefined.",
    invalidArgumentCannotBeNullorUndefinedOrWhiteSpaceTemplate: "Invalid argument: \"@\" cannot be null, undefined, empty or just white space.",
    invalidArgumentDataTypeTemplate: "Invalid argument: \"@\" is not an instance of @.",
    invalidPropertyDataTypeTemplate: "Invalid \"@\" property: the \"@\" property is not an instance of @.",
    invalidConfigurationPropertyDataTypeTemplate: "Invalid configuration property: “@” is not an instance of @.",
    invalidArgumentLowerThanTemplate: "Invalid argument: \"@\" cannot be lower than @.",
    invalidArgumentHigherThanTemplate: "Invalid argument: \"@\" cannot be higher than @.",
    invalidBooleanArgumentDataTypeTemplate: "Invalid argument: \"@\" is not a boolean.",
    invalidStringArgumentDataTypeTemplate: "Invalid argument: \"@\" is not a string.",
    invalidStringArgumentCannotBeEmpty: "Invalid string argument: \"@\" cannot be empty.",
    invalidStringArgumentCannotBeEmptyOrWhiteSpace: "Invalid string argument: \"@\" cannot be empty or just white space.",
    multipleElementsFoundWithOneIdTemplate: "Multiple elements have been found with ID \"@\"."
};
/**
 * @description Common data types.
 * @type {Object}
 */
const COMMON_DATA_TYPE_LIST = {
    "function": "Function",
    number: "number",
    boolean: "boolean",
    string: "string",
    object: "object"
};
/**
 * @description Common CSS class names.
 * @type {Object}
 */
const COMMON_CSS_CLASS_NAME_LIST = {
    activeTab: "active-tab",
    box: "box",
    boxFrame: "box-frame",
    comboBox: "combo-box",
    context: "context",
    counter: "counter",
    dateBox: "date-box",
    defaultContextMenu: "default-context-menu",
    defaultFooter: "default-footer",
    defaultSection: "default-section",
    disabled: "disabled",
    errorMessage: "error-message",
    exceptionDocument: "exception-document",
    fileName: "file-name",
    fileSize: "file-size",
    header: "header",
    helpIcon: "help-icon",
    helpInstructionIcon: "help-instruction-icon",
    icon: "icon",
    inactiveTab: "inactive-tab",
    link: "link",
    list: "list",
    message: "message",
    picker: "picker",
    popup: "popup",
    pointer: "pointer",
    selected: "selected",
    selector: "selector",
    separator: "separator",
    subtitle: "subtitle",
    subtitleLink: "subtitle-link",
    table: "table",
    timeBox: "time-box",
    title: "title",
    toggle: "toggle",
    vectorImage: "vector-image",
    wait: "wait"
};
/**
 * @description Common parameter names.
 * @type {Object}
 */
const COMMON_PARAMETER_NAME_LIST = {
    id: "id",
    documentName: "document_name"
};
/**
 * @description Common DOM IDs and DOM ID templates.
 * @type {Object}
 */
const COMMON_DOM_ID_LIST = {
    /**
     * @description Inactive tab DOM ID template, requiring the tab ID.
     */
    tabTemplate: ["tab", undefined],
    /**
     * @description Progress list template DOM ID, requiring the progress list ID.
     */
    progressListTemplate: ["progress", "list", undefined]
};

/**
 * @description Checks if the specified argument is a number.
 * @param {Object} argument The argument to check.
 * @returns {Boolean} True if the specified argument is a number.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function isNumber(argument) {
    return typeof argument === COMMON_DATA_TYPE_LIST.number;
}
/**
 * @description Checks if the specified argument is a boolean.
 * @param {Object} argument The argument to check.
 * @returns {Boolean} True if the specified argument is a boolean.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function isBoolean(argument) {
    return typeof argument === COMMON_DATA_TYPE_LIST.boolean;
}
/**
 * @description Checks if the specified argument is a string.
 * @param {Object} argument The argument to check.
 * @returns {Boolean} True if the specified argument is a string.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function isString(argument) {
    return typeof argument === COMMON_DATA_TYPE_LIST.string;
}
/**
 * @description Checks if the specified argument is an object.
 * @param {Object} argument The argument to check.
 * @returns {Boolean} True if the specified argument is an object.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function isObject(argument) {
    return typeof argument === COMMON_DATA_TYPE_LIST.object;
}
/**
 * @description Checks if the specified argument is a function.
 * @param {Object} argument The argument to check.
 * @returns {Boolean} True if the specified argument is an function.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function isFunction(argument) {
    return argument instanceof Function;
}

/**
 * @description Tests whether the specified object is null or undefined.
 * @param {Object} object The object to test.
 * @returns {Boolean} If the specified object is null or undefined.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function isNullOrUndefined(object) {
    return object === undefined ||
            object === null;
}

/**
 * @description The callback function to execute to check the data type of the specified value.
 * @callback DataTypeChecker
 * @param {Object} value The value to check, which is never null or undefined.
 * @returns {Boolean} If the specified value is approved.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * @description Checks the specified argument and throws an error if the argument is null, undefined or not approved by the specified checker.
 * @param {Object} argument The argument.
 * @param {String} name The name of the argument.
 * @param {DataTypeChecker} checker The checker.
 * @param {String} dataTypeName The name of the argument's data type.
 * @returns {Object} The specified argument.
 * @throws {TypeError} If the specified argument is null or undefined.
 * @throws {TypeError} If the specified name is null or undefined.
 * @throws {TypeError} If the specified checker is not an instance of Function.
 * @throws {Error} If the specified checker disapproves of the specified argument.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function checkRequiredArgumentFull(argument, name, checker, dataTypeName) {
    if (isNullOrUndefined(argument))
        throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentCannotBeNullorUndefinedTemplate, "checker"));

    if (isNullOrUndefined(name))
        throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentCannotBeNullorUndefinedTemplate, name));

    if (!(checker instanceof Function))
        throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "checker", COMMON_DATA_TYPE_LIST.function));

    if (!checker(argument))
        throw new Error(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, name, dataTypeName));

    return argument;
}
/**
 * @description Checks the specified argument and throws an error if the argument is not null or undefined and not approved by the specified checker.
 * @param {Object} argument The argument.
 * @param {String} name The name of the argument.
 * @param {DataTypeChecker} checker The checker.
 * @param {String} dataTypeName The name of the argument's data type.
 * @returns {Object} The specified argument.
 * @throws {TypeError} If the specified name is null or undefined.
 * @throws {TypeError} If the specified checker is not an instance of Function.
 * @throws {TypeError} If the specified argument is not null or undefined and the checker disapproves of the argument.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function checkOptionalArgumentFull(argument, name, checker, dataTypeName) {
    if (isNullOrUndefined(name))
        throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentCannotBeNullorUndefinedTemplate, name));

    if (!(checker instanceof Function))
        throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "checker", COMMON_DATA_TYPE_LIST.function));

    if (!isNullOrUndefined(argument) &&
            !checker(argument))
        throw new Error(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, name, dataTypeName));

    return argument;
}
/**
 * @description Checks the specified argument and throws an error if the argument is null, undefined or not approved by the specified checker.
 * @param {Object} argument The argument.
 * @param {String} name The name of the argument.
 * @param {Function} type The class.
 * @returns {Object} The specified object.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function checkRequiredArgument(argument, name, type) {
    if (isNullOrUndefined(type))
        throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentCannotBeNullorUndefinedTemplate, "type"));

    return checkRequiredArgumentFull(argument, name, value => value instanceof type, type.name);
}
/**
 * @description Checks the specified argument and throws an error if the argument is not null or undefined and not approved by the specified checker.
 * @param {Object} argument The argument.
 * @param {String} name The name of the argument.
 * @param {Function} type The class.
 * @returns {Object} The specified argument.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function checkOptionalArgument(argument, name, type) {
    if (isNullOrUndefined(type))
        throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentCannotBeNullorUndefinedTemplate, "type"));

    return checkOptionalArgumentFull(argument, name, value => value instanceof type, type.name);
}
/**
 * @description Checks the specified number argument and throws an error if the number is null, undefined or not approved by the specified checker.
 * @param {Number} argument The number argument.
 * @param {String} name The name of the argument.
 * @returns {Object} The specified number.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function checkRequiredNumber(argument, name) {
    return checkRequiredArgumentFull(argument, name, isNumber, "number");
}
/**
 * @description Checks the specified number argument and throws an error if the number is not null or undefined and not approved by the specified checker.
 * @param {Number} argument The number argument.
 * @param {String} name The name of the argument.
 * @returns {Object} The specified number.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function checkOptionalNumber(argument, name) {
    return checkOptionalArgumentFull(argument, name, isNumber, "number");
}
/**
 * @description Checks the specified string argument and throws an error if the string is null, undefined or not approved by the specified checker.
 * @param {Number} argument The string argument.
 * @param {String} name The name of the argument.
 * @returns {Object} The specified string.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function checkRequiredString(argument, name) {
    return checkRequiredArgumentFull(argument, name, isString, COMMON_DATA_TYPE_LIST.string);
}
/**
 * @description Checks the specified string argument and throws an error if the string is not null or undefined and not approved by the specified checker.
 * @param {Number} argument The string argument.
 * @param {String} name The name of the argument.
 * @returns {Object} The specified string.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function checkOptionalString(argument, name) {
    return checkOptionalArgumentFull(argument, name, isString, COMMON_DATA_TYPE_LIST.string);
}
/**
 * @description Checks the specified boolean argument and throws an error if the boolean is null, undefined or not approved by the specified checker.
 * @param {Number} argument The boolean argument.
 * @param {String} name The name of the argument.
 * @returns {Object} The specified boolean.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function checkRequiredBoolean(argument, name) {
    return checkRequiredArgumentFull(argument, name, isBoolean, "boolean");
}
/**
 * @description Checks the specified boolean argument and throws an error if the boolean is not null or undefined and not approved by the specified checker.
 * @param {Number} argument The boolean argument.
 * @param {String} name The name of the argument.
 * @returns {Object} The specified boolean.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function checkOptionalBoolean(argument, name) {
    return checkOptionalArgumentFull(argument, name, isBoolean, COMMON_DATA_TYPE_LIST.boolean);
}

/**
 * @description Returnes the specified string as a string that contains a double quote at the beginning and end. The specified string may not
 * @param {Number} value The number.
 * @returns {String} The specified string as a string that contains a double quote at the beginning and end.
 * @throws {Error} If the value contains a double quote (U+0022).
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function quoteString(value) {
    checkRequiredString(value, "value");

    if (value.contains("\u0022"))
        throw new Error("The value may not include a double quote.");

    return `"${value}"`;
}
/**
 * @description Returnes the specified number as a string that contains a double quote at the beginning and end.
 * @param {Number} value The number.
 * @returns {String} The specified number as a string that contains a double quote at the beginning and end.
 * @throws {TypeError} If the name is null, undefined or not a number.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function quoteNumber(value) {
    return `"${checkRequiredNumber(value, "value")}"`;
}
/**
 * @description Returnes the specified code point as a string that contains a double quote at the beginning and end.
 * @param {Number} value The number.
 * @returns {String} The specified code point as a string that contains a double quote at the beginning and end.
 * @throws {TypeError} If the name is null, undefined or not a number.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function quoteCodePoint(value) {
    return `"${createUnicodeNotation(checkRequiredNumber(value, "value"))}"`;
}
/**
 * @description Returnes the specified boolean as a string that contains a double quote at the beginning and end.
 * @param {Number} value The number.
 * @returns {String} The specified boolean as a string that contains a double quote at the beginning and end.
 * @throws {TypeError} If the name is null, undefined or not a boolean.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function quoteBoolean(value) {
    return `"${checkRequiredBoolean(value, "value").toString()}"`;
}

/**
 * @description Checks the specified loop settings and throws an exception if anything invalid is detected.
 * @param {Object} list Any type of list.
 * @param {LoopCallback|ForEachCallback} callback Function that produces an item of the list.
 * @param {Number} startIndex The start index.
 * @param {Number} endIndex The end index. If null or undefined, the end index will be length of this string.
 * @param {Number} step The number by which the counter of the loop is incremented each time.
 * @param {Object} [scope] The value of <code>this</code> provided for the callback function.
 * @returns {undefined}
 * @throws {TypeError} If the list is null or undefined.
 * @throws {Error} If the list doesn't have a "length" property.
 * @throws {Error} If the list has a "length" property that is not a number.
 * @throws {IndexOutOfBoundsError} If the end index is higher than the length of this list.
 * @throws {IndexOutOfBoundsError} If the start index is lower than 0.
 * @throws {IndexOutOfBoundsError} If the start index is higher than the end index.
 * @throws {Error} If the step is equal to or lower than 0.
 * @throws {Error} If the step is higher than or equal to the end index.
 * @throws {TypeError} If the scope is not null or undefined and neither an instance of object (the scope cannot be a primitive type).
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function checkLoopSettingList(list, callback, startIndex, endIndex, step, scope) {
    // List checks

    if (isNullOrUndefined(list))
        throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentCannotBeNullorUndefinedTemplate, "list"));

    if (!isString(list)) {
        if (list.isPropertyNullOrUndefined("length"))
            throw new Error(`${COMMON_TEXT_LIST.invalidArgument}the list doesn't have a ${quoteString("length")} property.`);

        if (!isNumber(list.length))
            throw new Error(`${COMMON_TEXT_LIST.invalidArgument}the list has a ${quoteString("length")} property but it's not a number.`);
    }

    // Callback checks

    checkRequiredArgument(callback, "callback", Function);

    // Start index checks

    checkRequiredNumber(startIndex, "startIndex");

    if (startIndex < 0)
        throw new IndexOutOfBoundsError(`${COMMON_TEXT_LIST.invalidArgument}Start index (i.e. ${startIndex}) cannot be lower than 0.`);

    if (startIndex > endIndex)
        throw new IndexOutOfBoundsError(`${COMMON_TEXT_LIST.invalidArgument}Start index (i.e. ${startIndex}) cannot be higher than the end index (${endIndex}).`);


    // End index checks

    checkRequiredNumber(endIndex, "endIndex");

    if (endIndex > list.length)
        throw new IndexOutOfBoundsError(`${COMMON_TEXT_LIST.invalidArgument}End index (i.e. ${endIndex}) cannot be higher than the length of this list (${list.length}).`);

    // Step checks

    checkRequiredNumber(step, "step");

    if (step <= 0)
        throw new Error(`${COMMON_TEXT_LIST.invalidArgument + quoteString("step")} (${step}) cannot be lower than or equal to 0.`);

    if (list.length !== 0 &&
            step > endIndex)
        throw new Error(`${COMMON_TEXT_LIST.invalidArgument + quoteString("step")} (${step}) cannot be higher than or equal to the end index (${endIndex}).`);

    // Scope checks

    if (!isNullOrUndefined(scope) &&
            !isObject(scope))
        throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "scope", "object"));
}
/**
 * @description The callback function that produces an item of the list during a breakable loop.
 * @callback LoopCallback
 * @param {Object} item The current token being processed in the list.
 * @param {Number} index The index of the current item being processed in the list.
 * @returns {Boolean} If the loop must continue, if possible.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * @description Executes the provided function once for each item in a list. This loop is breakable.
 * @param {Object} list Any type of list.
 * @param {LoopCallback} callback Function that produces an item of the list.
 * @param {Number} [startIndex=0] The start index.
 * @param {Number} [endIndex=list.length] The end index.
 * @param {Number} [step=1] The number by which the counter of the loop is incremented each time.
 * @param {Object} [scope] The value of <code>this</code> provided for the callback function.
 * @returns {Boolean} If the loop has been executed (and at least one item has been processed) and has not been broken.
 * @throws {TypeError} If the provided function returns a value that is not a boolean.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function loopThroughList(list, callback, startIndex = 0, endIndex = list.length, step = 1, scope) {
    checkLoopSettingList(list, callback, startIndex, endIndex, step, scope);

    for (/** @description The current index. @type {Number} */
        let index = startIndex,
        /** @description The length of the list. @type {Number} */
        listLength = list.length;
        index < endIndex;
        index += step) {
        /**
         * @description If the loop can continue.
         * @type {Boolean}
         */
        const canContinue = callback.call(scope, list[index], index);

        if (isNullOrUndefined(canContinue) ||
                !isBoolean(canContinue))
            throw new TypeError("No boolean has been returned by the callback.");

        if (!canContinue)
            return false;

        // In case items are deleted from the list or added to the list, the index and the end index must be adjusted.
        if (listLength !== list.length) {
            /**
             * @description The difference between the previous list length and the current list length.
             * @type {Number}
             */
            const lengthDifference = (listLength = list.length) - endIndex;
            index += lengthDifference;
            endIndex += lengthDifference;
        }
    }

    return endIndex - startIndex > 0;
}
/**
 * @description The callback function that produces an item of the list during an unbreakable loop.
 * @callback ForEachCallback
 * @param {Object} item The current token being processed in the list.
 * @param {Number} index The index of the current item being processed in the list.
 * @returns {undefined} Nothing is expected to be returned and whatever will be returned will be ignored.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * @description Executes the provided function once for each item in a list. This loop is unbreakable.
 * @param {Object} list Any type of list.
 * @param {ForEachCallback} callback Function that produces an item of the list.
 * @param {Number} [startIndex=0] The start index.
 * @param {Number} [endIndex=list.length] The end index.
 * @param {Number} [step=1] The number by which the counter of the loop is incremented each time.
 * @param {Object} [scope] The value of <code>this</code> provided for the callback function.
 * @returns {undefined}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function forEachInList(list, callback, startIndex = 0, endIndex = list.length, step = 1, scope) {
    checkLoopSettingList(list, callback, startIndex, endIndex, step, scope);

    for (/** @description The current index. @type {Number} */
        let index = startIndex,
        /** @description The length of the list. @type {Number} */
        listLength = list.length;
        index < endIndex;
        index += step) {
        callback.call(scope, list[index], index);

        // In case items are deleted from the list or added to the list, the index and the end index must be adjusted.
        if (listLength !== list.length) {
            /**
             * @description The difference between the previous list length and the current list length.
             * @type {Number}
             */
            const lengthDifference = (listLength = list.length) - endIndex;
            index += lengthDifference;
            endIndex += lengthDifference;
        }
    }
}
//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="Validation">
/**
 * @description Data that is used for custom input validation.
 * @type {Object}
 */
const VALIDATION_DATA = {
    name: "valid",
    "true": "t",
    "false": "f"
};
/**
 * @description Sets a custom validity state on the specified HTML element. The custom validity state is not a HTML standard.
 * @param {HTMLElement} htmlElement The HTML element.
 * @param {Boolean} isRequired If the HTML element requires a value.
 * @param {Boolean} isValid If the HTML element is valid.
 * @returns {undefined}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function setCustomValidityState(htmlElement, isRequired, isValid) {
    checkRequiredArgument(htmlElement, "htmlElement", HTMLElement);
    checkRequiredBoolean(isRequired, "isRequired");
    checkRequiredBoolean(isValid, "isValid");

    if (isRequired)
        htmlElement.dataset[VALIDATION_DATA.name] = isValid ?
            VALIDATION_DATA.true :
            VALIDATION_DATA.false;
}
/**
 * @description If the specified HTML element has a custom validity state.
 * @param {HTMLElement} htmlElement The HTML element.
 * @returns {Boolean} If the specified HTML element has a custom validity state.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function hasCustomValidity(htmlElement) {
    checkRequiredArgument(htmlElement, "htmlElement", HTMLElement);
    return VALIDATION_DATA.name in htmlElement.dataset;
}
/**
 * @description Returns the custom validity state from the specified HTML element.
 * @param {HTMLElement} htmlElement The HTML element.
 * @param {Boolean} isRequired If the HTML element requires a value.
 * @returns {Boolean} The custom validity state from the specified HTML element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function getCustomValidity(htmlElement, isRequired) {
    checkRequiredBoolean(isRequired, "isRequired");
    return !isRequired ||
            hasCustomValidity(htmlElement) &&
            htmlElement.dataset[VALIDATION_DATA.name] === VALIDATION_DATA.true;
}
//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="Control Key">
/**
 * @description Defines a control key.
 * @param {Number} codePoint The code point that represents the control key.
 * @param {String} name The name.
 * @constructor
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function ControlKey(codePoint, name) {
    checkRequiredNumber(codePoint, "codePoint");
    checkRequiredString(name, "name");

    if (codePoint < 0)
        throw new Error(`${COMMON_TEXT_LIST.invalidArgument + quoteString("codePoint")} (${codePoint}) cannot be lower than 0.`);

    /**
     * @description The code point.
     * @name ControlKey#name
     * @type {String}
     */
    Object.defineProperty(this, "codePoint", {
        set: value => {
            codePoint = value;
        },
        get: () => codePoint
    });
    /**
     * @description The name .
     * @name ControlKey#name
     * @type {String}
     * @public
     */
    Object.defineProperty(this, "name", {
        set: value => {
            name = value;
        },
        get: () => name
    });
    /**
     * @description Checks if the specified object is equal to this.
     * @param {ControlKey|KeyboardEvent} object The object to check.
     * @returns {Boolean} If the specified object is equal to this.
     * @throws {TypeError} If the specified object is neither an instance of ControlKey or KeyboardEvent.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.equals = object => {
        if (object instanceof ControlKey)
            return object.codePoint === this.codePoint &&
                object.name === this.name;

        if (object instanceof KeyboardEvent)
            return object.keyCode === this.codePoint &&
                object.codePoint === this.name;

        throw new TypeError("The specified argument is not of a recognized data type.");
    };
}
/**
 * @description Common control keys.
 * @type {Object}
 */
const COMMON_CONTROL_KEY_LIST = {
    arrowDown: new ControlKey(40, "Arrow Down"),
    arrowUp: new ControlKey(38, "Arrow Up"),
    enter: new ControlKey(13, "Enter"),
    escape: new ControlKey(27, "Escape"),
    "delete": new ControlKey(46, "Delete"),
    backspace: new ControlKey(8, "Backspace"),
    space: new ControlKey(32, "Space"),
    tab: new ControlKey(9, "Tab")
};
/**
 * @description Checks if the specified key code is a control code or not. A control code is a key code that does not represent a written symbol.
 * @param {Number} keyCode A signed integer representing a key code.
 * @returns {Boolean} If the key code is a control code.
 * @throws {TypeError} If the key code is null, undefined, not a number, not a signed number or not an integer.
 * @throws {RangeError} @@@@@@@@@@@@@@@@@
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see http://en.wikipedia.org/wiki/Control_character
 */
function isControlKeyCode(keyCode) {
    checkRequiredNumber(keyCode, "keyCode");

    if (!Number.isUnsignedInteger(keyCode))
        throw new TypeError(`${COMMON_TEXT_LIST.invalidArgument + quoteString("keyCode")} (${keyCode}) cannot be a signed integer.`);

    if (!Number.isInteger(keyCode))
        throw new TypeError(`${COMMON_TEXT_LIST.invalidArgument + quoteString("keyCode")} (${keyCode}) cannot be a float.`);

    return keyCode <= 46 || // basic control code
            keyCode >= 91 &&
            keyCode <= 93 || // left or right window key or select key
            keyCode >= 112 &&
            keyCode <= 130; // function key + Mac function keys (124-130)
}
//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="Error">
/**
 * @description Defines an unknown error that is thrown when something that must be identified cannot be identified.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class UnknownError extends Error {
    /**
     * @description UnknownError constructor.
     * @param {String} message The message.
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    constructor(message) {
        super(message);
    }
}
/**
 * @description Defines an error that is thrown when an index of some sort (of an array, string or any other list) is out of bounds.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class IndexOutOfBoundsError extends Error {
    /**
     * @description IndexOutOfBoundsError constructor.
     * @param {String} message The detail message.
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    constructor(message) {
        super(message);
    }
}
/**
 * @description Defines any type of list error.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class ListError extends Error {
    /**
     * @description ListError constructor.
     * @param {String} message The detail message.
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    constructor(message) {
        super(message);
    }
}
/**
 * @description Defines an error that is thrown when something happens that should be impossible to happen.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class ImpossibleError extends Error {
    /**
     * @description ImpossibleError constructor.
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    constructor() {
        super("Impossible exception.");
    }
}
/**
 * @description Defines an error that can never be thrown under intended circumstances.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class IllogicalError extends Error {
    /**
     * @description IllogicalError constructor.
     * @param {String} message The detail message.
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    constructor(message = "Illogical exception.") {
        super(message);
    }
}
//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="Object">
/**
 * @description Tests whether the specified property exists in this object and is not null or undefined.
 * @param {String} name The name of the property.
 * @returns {Boolean} If the specified property exists in this object and is not null or undefined.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Object.prototype.isPropertyNullOrUndefined = function (name) {
    checkRequiredString(name, "name");
    return !(name in this) ||
            isNullOrUndefined(this[name]);
};
/**
 * @description Clears this object from its properties.
 * @returns {undefined}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Object.prototype.clear = function () {
    for (/** @param {String} propertyName The current property name. */ let propertyName in this)
        if (this.hasOwnProperty(propertyName))
            delete this[propertyName];
};
/**
 * @description Clones this object and all of its properties but not functions.
 * @returns {Object} The simple clone of this object.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Object.prototype.simpleClone = function () {
    /**
     * @description A clone of this object and all of its properties but not functions.
     * @type {Object}
     */
    const simpleClone = {};

    for (/** @description The property name. @type {String} */ const propertyName in this)
        if (this.hasOwnProperty(propertyName)) {
            /**
             * @description The property value.
             * @type {Object}
             */
            const propertyValue = this[propertyName];

            if (isNullOrUndefined(propertyValue))
                simpleClone[propertyName] = propertyValue;
            else if (propertyValue instanceof Function)
                continue;
            else if (propertyValue instanceof Date)
                simpleClone[propertyName] = propertyValue.clone();
            else if (propertyValue instanceof Array)
                simpleClone[propertyName] = propertyValue.simpleClone();
            else if (isObject(propertyValue))
                simpleClone[propertyName] = propertyValue.simpleClone();
            else
                simpleClone[propertyName] = propertyValue;
    }

    return simpleClone;
};
/**
 * @description Checks if the specified query exists as a value in one of the object's own properties. This method has been developed for objects that are used as enumerations.
 * @param {Object} query The query.
 * @returns {Boolean} If the specified query exists as a value in one of the object's own properties.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Object.prototype.hasValue = function (query) {
    /**
     * @description The query type.
     * @type {String}
     */
    const queryType = typeof query;

    for (/** @param {String} propertyName The current property name. */ const propertyName in this)
        if (this.hasOwnProperty(propertyName)) {
            /**
             * @description The current property value.
             * @type {Object}
             */
            const propertyValue = this[propertyName];

            if (queryType === typeof propertyValue &&
                    query === propertyValue)
                return true;
        }

    return false;
};
//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="Boolean">
/**
 * @description Parses a string argument and returns a boolean.
 * @param {String|Number|Boolean} value The value to parse.
 * @returns {undefined|Boolean} The boolean value if the parse has been succcessful, undefined otherwise.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Boolean.parse = value => {
    if (!isNullOrUndefined(value))
        switch (typeof value) {
            case "string":
                switch (value.trim().toLowerCase()) {
                    case "true":
                    case "t":
                        return true;
                    case "false":
                    case "f":
                        return false;
                }
                break;
            case "number":
                return value === 0 ?
                    false :
                    value === 1 ?
                    true :
                    undefined;
            case "boolean":
                return value;
        }

    return undefined;
};
/**
 * @description Returns a random boolean.
 * @returns {Boolean} A random boolean.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Boolean.getRandom = () => Math.floor(Math.random() * 2) === 1;
//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="Number">
/**
 * @description Checks if the specified number is a decimal.
 * @param {Number} number The number to check.
 * @returns {Boolean} True if the specified number is a decimal or a number that isn't equal to an integer (for example, 1.0 and 1 are considered to be equal).
 * @throws {TypeError} If the specified number is null, undefined or a not number.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Number.isDecimal = number => number % 1 !== 0;
/**
 * @description Checks if the specified number is an unsigned integer.
 * @param {Number} number The number to check.
 * @returns {Boolean} If the specified number is an unsigned integer.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Number.isUnsignedInteger = number => number >= 0 &&
        number <= Math.pow(2, 32) - 1;
/**
 * @typedef {Object} ParseAsIntegerResult Information about a parse result.
 * @property {Boolean} successful If the parse attempt was successful.
 * @property {Number} value The parsed value.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * @description Tries to parse the specified string as an integer.
 * @param {String} string The string to parse.
 * @returns {ParseAsIntegerResult} Information about the parse result.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Number.tryToParseAsInteger = string => {
    if (isNullOrUndefined(string) ||
            !isString(string))
        return Object.freeze({
            successful: false
        });

    /**
     * @description The result of attempting to parse the specified string.
     * @type {Number|NaN}
     */
    const parsedValue = string.toNumber();
    /**
     * @description The parse result and if it has been successful.
     * @type {ParseAsIntegerResult}
     */
    const result = {
        successful: !Number.isNaN(parsedValue) &&
                Number.isInteger(parsedValue)
    };

    if (result.successful)
        result.value = parsedValue;

    return Object.freeze(result);
};
/**
 * @description Tries to parse the specified string as an unsigned integer.
 * @param {String} string The string to parse.
 * @returns {ParseAsIntegerResult} Information about the parse result.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Number.tryToParseAsUnsignedInteger = string => {
    /**
     * @description Information about the attempt to parse the specified string to an unsigned integer.
     * @type {ParseAsIntegerResult}
     */
    const result = Number.tryToParseAsInteger(string);
    return !result.successful ||
            (result.value >= 0 &&
            result.value <= Math.pow(2, 32) - 1) ?
        result : {
            successful: false
        };
};
/**
 * @description Returns a random number between the specified minimum and the specified maximum.
 * @param {Number} minimum The minimum value to return.
 * @param {Number} maximum The maximum value to return.
 * @returns {Number} A random number between the specified minimum (inclusive) and the specified maximum (inclusive).
 * @throws {TypeError} If minimum is null, undefined or not a number.
 * @throws {TypeError} If maximum is null, undefined or not a number.
 * @throws {String} If the minimum is higher than maximum.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Number.getRandom = (minimum, maximum) => {
    checkRequiredNumber(minimum, "minimum");
    checkRequiredNumber(maximum, "maximum");

    if (minimum === maximum)
        return minimum;

    if (minimum > maximum)
        throw new Error(`${COMMON_TEXT_LIST.invalidArgument} "maximum" cannot be higher than ${maximum}.`);

    return floor(Math.random() * (maximum - minimum + 1) + minimum);
};
//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="Math">
/**
 * @description Rounds the specified number to the nearest number, depening on the amount of digits that need to be preserved.
 * @param {Number} number The number to round.
 * @param {Number} fractionalPreserveCount The amount of fractional digits to preserve.
 * @returns {Number} The specified number rounded to the nearest number.
 * @throws {TypeError} If the specified number is null, undefined or not a number.
 * @throws {TypeError} If the specifie d fractional count is null, undefined or not a number.
 * @throws {String} If "fractionalCount" is lower than 0.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Math.roundSpecific = (number, fractionalPreserveCount) => {
    checkRequiredNumber(number, "number");
    checkRequiredNumber(fractionalPreserveCount, "fractionalPreserveCount");

    if (fractionalPreserveCount < 0)
        throw `${COMMON_TEXT_LIST.invalidArgument + quoteString("fractionalPreserveCount")} cannot be lower than 1.`;

    if (fractionalPreserveCount === 0)
        return Math.round(number);

    /**
     * @description The base number 10 to the power of the exponent, which is the fractional preserve count.
     * @type {Number}
     */
    const size = Math.pow(10, fractionalPreserveCount);
    return Math.round(number * size) / size;
};
/**
 * @description Truncates the specified number, preserving as much fractional digits as specified and removing the rest.
 * @param {Number} number The number to truncate.
 * @param {Number} fractionalPreserveCount The amount of fractional digits to preserve.
 * @returns {Number} The specified number truncated.
 * @throws {TypeError} If the specified number is null, undefined or not a number.
 * @throws {TypeError} If the specified fractional count is null, undefined or not a number.
 * @throws {Error} If the specified fractional count is lower than 0.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Math.truncSpecific = (number, fractionalPreserveCount) => {
    checkRequiredNumber(number, "number");
    checkRequiredNumber(fractionalPreserveCount, "fractionalPreserveCount");

    if (fractionalPreserveCount < 0)
        throw new Error(COMMON_TEXT_LIST.invalidArgument + quoteString("fractionalPreserveCount") + " cannot be lower than 1.");

    if (fractionalPreserveCount === 0)
        return Math.trunc(number);

    /**
     * @description The base number 10 to the power of the exponent, which is the fractional preserve count.
     * @type {Number}
     */
    const size = Math.pow(10, fractionalPreserveCount);
    return Math.trunc(number * size) / size;
};
/**
 * @description Returns the number of digits in the specified number.
 * @param {Number} number The number.
 * @returns {Number} The number of digits in the specified number.
 * @throws {TypeError} If "number" is null, undefined or not a number.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Math.getDigitCount = number => {
    checkRequiredNumber(number, "number");
    return 1 + Math.floor(Math.log10(number < 0 ?
        number * -1 :
        number));
};
/**
 * @description Adjusts the specified degrees to a number between 0 and 359.
 * @param {Number} degrees The degrees.
 * @returns {Number} A representation of the specified degrees in a number that is between 0 and 359.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Math.adjustDegrees = degrees => {
    checkRequiredNumber(degrees, "degrees");

    if (degrees === 360 ||
            degrees === -360)
        return 0;

    if (degrees > 359) {
        /**
         * @description The number of times the specified degrees is over 360.
         * @type {Number}
         */
        const overflowCount = Math.floor(degrees / 360);
        return Number.isDecimal(overflowCount) ?
            degrees - (overflowCount * 360) : 0;
    }

    if (degrees < 0 &&
            degrees > -359)
        return degrees + 360;

    if (degrees < -359) {
        /**
         * @description The number of times the specified degrees is below 360.
         * @type {Number}
         */
        const overflowCount = Math.floor(degrees / -360);
        return Number.isDecimal(overflowCount) ?
            degrees - (overflowCount * -360) : 0;
    }

    return degrees;
};
/**
 * @description Returns the circumference of a circle.
 * @param {Number} diameter The diameter.
 * @returns {Number} The circumference of a circle.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Math.getCircumference = diameter => diameter * Math.PI;
/**
 * @description Returns the diameter of a circle.
 * @param {Number} circumference The circumference.
 * @returns {Number} The diameter of a circle.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Math.getDiameter = circumference => circumference / Math.PI;
//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="Characters & Code Points">
/**
 * @description Defines a character code.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class CharCode {
    /**
     * @description The minimum value of a <a href="http://unicode.org/glossary/#high_surrogate_code_unit">Unicode high-surrogate code unit</a> in the UTF-16 encoding.
     * @type {Number}
     */
    static get minimumHighSurrogate() {
        return 0xD800;
    }
    /**
     * @description The maximum value of a <a href="http://unicode.org/glossary/#high_surrogate_code_unit">Unicode high-surrogate code unit</a> in the UTF-16 encoding.
     * @type {Number}
     */
    static get maximumHighSurrogate() {
        return 0xDBFF;
    }
    /**
     * The minimum value of a <a href="http://unicode.org/glossary/#low_surrogate_code_unit">Unicode low-surrogate code unit</a> in the UTF-16 encoding.
     * @type {Number}
     */
    static get minimumLowSurrogate() {
        return 0xDC00;
    }
    /**
     * The maximum value of a <a href="http://unicode.org/glossary/#low_surrogate_code_unit">Unicode low-surrogate code unit</a> in the UTF-16 encoding.
     * @type {Number}
     */
    static get maximumLowSurrogate() {
        return 0xDFFF;
    }
    /**
     * @description Checks if the specified character code is a <a href="http://unicode.org/glossary/#low_surrogate_code_unit">(Unicode) low-surrogate code unit</a>.
     * @param {Number} charCode The character code.
     * @returns {Boolean} If the specified character code is a <a href="http://unicode.org/glossary/#low_surrogate_code_unit">(Unicode) low-surrogate code unit</a>.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    static isHighSurrogate(charCode) {
        return isNumber(charCode) &&
            charCode >= CharCode.minimumHighSurrogate &&
            charCode < (CharCode.maximumHighSurrogate + 1);
    }
    /**
     * @description Checks if the specified character code is a <a href="http://unicode.org/glossary/#high_surrogate_code_unit">(Unicode) high-surrogate code unit</a>.
     * @param {Number} charCode The character code.
     * @returns {Boolean} If the specified character code is a <a href="http://unicode.org/glossary/#high_surrogate_code_unit">(Unicode) high-surrogate code unit</a>.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    static isLowSurrogate(charCode) {
        return isNumber(charCode) &&
            charCode >= CharCode.minimumLowSurrogate &&
            charCode < (CharCode.maximumLowSurrogate + 1);
    }
}
/**
 * @description Defines any type of Unicode related error.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class UnicodeError extends Error {
    /**
     * @description UnicodeError constructor.
     * @param {String} message The message.
     * @returns {UnicodeError}
     */
    constructor(message) {
        super(message);
    }
}
/**
 * @description Defines a surrogate pair in Unicode.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class SurrogatePair {
    /**
     * @description SurrogatePair constructor.
     * @param {Number} highSurrogateCharCode The high surrogate character code.
     * @param {Number} lowSurrogateCharCode The low surrogate character code.
     * @returns {SurrogatePair}
     * @throws {UnicodeError} If the specified high surrogate character code is not a high surrogate.
     * @throws {UnicodeError} If the specified low surrogate character code is not a low surrogate.
     */
    constructor(highSurrogateCharCode, lowSurrogateCharCode) {
        if (!CharCode.isHighSurrogate(highSurrogateCharCode))
            throw new UnicodeError("The specified high surrogate character code is not a high surrogate.");

        if (!CharCode.isLowSurrogate(lowSurrogateCharCode))
            throw new UnicodeError("The specified low surrogate character code is not a low surrogate.");

        this.highSurrogate = highSurrogateCharCode;
        this.lowSurrogate = lowSurrogateCharCode;
    }
    /**
     * @description Creates a new {@link SurrogatePair} from the specified astral code point.
     * @param {Number} astralCodePoint
     * @returns {SurrogatePair} A new {@link SurrogatePair} from the specified astral code point.
     * @throws {UnicodeError} If the specified code point is in the BMP.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    static create(astralCodePoint) {
        if (isBmpCodePoint(astralCodePoint))
            throw new UnicodeError("The specified code point is in the BMP.");

        // These following codes are based on https://unicodebook.readthedocs.io/unicode_encodings.html

        /**
         * @description The code to use to create the surrogates.
         * @type {Number}
         */
        const surrogateCode = astralCodePoint - 0x10000;
        return new SurrogatePair(0xD800 | (surrogateCode >> 10), 0xDC00 | (surrogateCode & 0x3FF));
    }
    /**
     * @description Returns the surrogate pair as a code point.
     * @returns {Number} The surrogate pair as a code point.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    toCodePoint() {
        // These codes are based on https://unicodebook.readthedocs.io/unicode_encodings.html

        /**
         * @description The code point from the surrogate pair.
         * @type {Number}
         */
        let codePoint = 0x10000;
        codePoint += (this.highSurrogate & 0x03FF) << 10;
        codePoint += this.lowSurrogate & 0x03FF;
        return codePoint;
    }
}
/**
 * @description Checks if the specified (Unicode) code point is in the Basic Multilingual Plane (BMP).
 * @param {Number} codePoint The code point.
 * @returns {Boolean} If the specified (Unicode) code point is in the Basic Multilingual Plane (BMP).
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function isBmpCodePoint(codePoint) {
    return isNumber(codePoint) &&
            codePoint >= 0x0000 &&
            codePoint <= 0xFFFF;
}
/**
 * @description If the specified character code is used as a character code in Base64 encoding.
 * @param {Number} characterCode The character code.
 * @returns {Boolean} If the specified character code is used as a character code in Base64 encoding.
 * @throws {TypeError} If the specified character code is not a number.
 * @public
 * @since 5.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function isBase64CharacterCode(characterCode) {
    checkRequiredNumber(characterCode, "characterCode");
    return characterCode >= 0x0030 &&
            characterCode <= 0x0039 /* 0..9 */ ||
            characterCode >= 0x0061 &&
            characterCode <= 0x007A /* a..z */ ||
            characterCode >= 0x0041 &&
            characterCode <= 0x005A /* A..Z */ ||
            characterCode === 0x002B /* + */ ||
            characterCode === 0x002F /* / */;
}
/**
 * @description If the specified character code is used as a character code in UUID64 encoding.
 * @param {Number} characterCode The character code.
 * @returns {Boolean} If the specified character code is used as a character code in UUID64 encoding.
 * @throws {TypeError} If the specified character code is not a number.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function isUuid64CharacterCode(characterCode) {
    checkRequiredNumber(characterCode, "characterCode");
    return characterCode >= 0x0030 &&
            characterCode <= 0x0039 /* 0..9 */ ||
            characterCode >= 0x0041 &&
            characterCode <= 0x005A /* A..Z */ ||
            characterCode >= 0x0061 &&
            characterCode <= 0x007A /* a..z */ ||
            characterCode === 0x005F /* _ */ ||
            characterCode === 0x003A /* : */;
}
/**
 * @description If the specified character code is used as a character code in Base36 encoding.
 * @param {Number} characterCode The character code.
 * @returns {Boolean} If the specified character code is used as a character code in Base36 encoding.
 * @throws {TypeError} If the specified character code is not a number.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function isBase36CharacterCode(characterCode) {
    checkRequiredNumber(characterCode, "characterCode");
    return characterCode >= 0x61 &&
            characterCode <= 0x7A /* a..z */ ||
            characterCode >= 0x30 &&
            characterCode <= 0x39 /* 0..1 */;
}
//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="String">
/**
 * @description Returns the first character from this string.
 * @returns {Object} The first character from this string.
 * @throws {ListError} If this string is empty.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
String.prototype.getFirst = function () {
    if (this.isEmpty())
        throw new ListError("This string is empty.");

    return this[0];
};
/**
 * @description Returns the last character from this string.
 * @returns {Object} The last character from this string.
 * @throws {ListError} If this string is empty.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
String.prototype.getLast = function () {
    if (this.isEmpty())
        throw new ListError("This string is empty.");

    return this[this.length - 1];
};
/**
 * @description Returns true if and only if this string contains the specified String, ignoring case considerations.
 * @param {String} query The specified String to look for.
 * @returns {Boolean} True if this string contains the query.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
String.prototype.containsIgnoreCase = function (query) {
    if (!query)
        return false;

    if (!isString(query))
        throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "query", "string"));

    return this.contains(query) ||
        this.toUpperCase().contains(query.toUpperCase()) ||
        this.toLowerCase().contains(query.toLowerCase());
};
/**
 * @description Removes all leading and trailing white-space characters from the string and returns null if no characters are left in the string.
 * @returns {String} Null if the string is empty or the string that remains after all white-space characters are removed from the start and end of the current
 * string.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
String.prototype.trimToNull = function () {
    /**
     * @description This string but trimmed.
     * @type {String}
     */
    const trimmedString = this.trim();
    return trimmedString.isEmpty() ?
        null :
        trimmedString;
};
/**
 * @description Compares this <tt>String</tt> to another <tt>String</tt>, ignoring case considerations. Two strings are considered equal ignoring case if they
 * are of the same length and corresponding characters in the two strings are equal ignoring case.
 * @param {String} anotherString The String to compare this String against.
 * @returns {Boolean} True if this String is equal to anotherString, String.toUpperCase() is equal to anotherString.toUppercase() or if String.toLowerCase() is
 * equal to anotherString.toLowerCase().
 * @throws {TypeError} If another string is not null or undefined and not a string either.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
String.prototype.equalsIgnoreCase = function (anotherString) {
    checkRequiredString(anotherString, "anotherString");
    return this.length === anotherString.length &&
            (this === anotherString ||
            this.toUpperCase() === anotherString.toUpperCase() ||
            this.toLowerCase() === anotherString.toLowerCase());
};
/**
 * @description Checks if this string contains the specified query.
 * @param {String} query The specified String to look for.
 * @returns {Boolean} If this string contains the specified query.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
String.prototype.contains = function (query) {
    return this.indexOf(query) > -1;
};
/**
 * @description Checks if this string is empty (having no characters) or not.
 * @returns {Boolean} If this string is empty (having no characters) or not.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
String.prototype.isEmpty = function () {
    return this.length === 0;
};
/**
 * @description Checks if the specified string is empty (having no characters) or not.
 * @param {String} string The string.
 * @returns {Boolean} If the specified string contains no characters.
 * @throws {TypeError} If the specified string is not a string.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
String.isEmpty = string => {
    checkRequiredString(string, "string");
    return string.isEmpty();
};
/**
 * @description Multiplies this string by the specified count.
 * @param {Number} count The total amount of times to multiply this string.
 * @returns {String} A new and multiplied instance of this string or if count is 0 this string instance will be returned.
 * @throws {TypeError} If count is null, undefined or not a number.
 * @throws {ListError} If count is lower than 0.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @example "*".multiply(4); // returns "****"
 */
String.prototype.multiply = function (count) {
    checkRequiredNumber(count, "count");

    if (count < 0)
        throw new ListError(COMMON_TEXT_LIST.invalidArgument + `the count (the specified one is ${count}) is lower than 0.`);

    if (count === 0)
        return new String();

    if (count === 1)
        return this;

    /**
     * @description The multiplier in case it's possible to multiply this string with itself.
     * @type {Number}
     */
    let multiplier = Math.log(count) / Math.log(2);

    // If the multiplier is not a decimal then it's possible to multiply this string with itself.
    if (multiplier % 1 === 0) {
        /**
         * @description This string multiplied.
         * @type {String}
         */
        let product = this;

        for (;
            multiplier !== 0;
            multiplier--)
                product += product;

        return product;
    }

    /**
     * @description This string multiplied.
     * @type {String}
     */
    let product = this;

    for (multiplier = 0;
        multiplier < count - 1;
        multiplier++)
        product += this;

    return product;
};
/**
 * @description Defines any type of string mask error.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class StringMaskError extends Error {
    /**
     * @description StringMaskError constructor.
     * @param {String} message The detail message.
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    constructor(message) {
        super(message);
    }
}
/**
 * @description Checks the specified mask settings.
 * @param {String} mask A single character representing the mask character.
 * @param {Number} count An integer indicating what the total lenght of the string should be.
 * @returns {undefined}
 * @throws {StringMaskError} If the specified mask is not specified or one character.
 * @throws {StringMaskError} If the specified count is lower than 0.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
String.checkMaskSettings = (mask, count) => {
    checkRequiredString(mask, "mask");
    checkRequiredNumber(count, "count");

    if (mask.length === 0)
        throw new StringMaskError("The mask is not specified.");

    if (mask.length !== 1)
        throw new StringMaskError("Mask contains more than one character.");

    if (count < 0)
        throw new ListError("Count is lower than 0");
};
/**
 * @description Appends the mask character to the left side of the string until the length of the string is the same as the count.
 * @param {String} mask A single character representing the mask character.
 * @param {Number} count An integer indicating what the total lenght of the string should be.
 * @returns {String} A new instance of this string with the mask appeneded or if count is 0 this String instance will be returned.
 * @throws {StringMaskError} If the mask is not specified or if the length of the mask is not 1.
 * @throws {ListError} If the count is lower than 0.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @example "9".maskLeft("0", 2); // returns "09"
 */
String.prototype.maskLeft = function (mask, count) {
    String.checkMaskSettings(mask, count);
    return count > this.length ?
        mask.multiply(count - this.length) + this :
        this;
};
/**
 * @description Appends the mask character to the right side of the string until the length of the string is the same as the count.
 * @param {String} mask A single character representing the mask character.
 * @param {Number} count An integer indicating what the total lenght of the string should be.
 * @returns {String} A new instance of this string with the mask appeneded or if count is 0 this String instance will be returned.
 * @throws {StringMaskError} If the mask is not specified or if the length of the mask is not 1.
 * @throws {ListError} If the count is lower than 0;
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @example "9".maskRight("*", 2); // returns "9*"
 */
String.prototype.maskRight = function (mask, count) {
    String.checkMaskSettings(mask, count);
    return count > this.length ?
        this + mask.multiply(count - this.length) :
        this;
};
/**
 * @description Executes the provided function once for each character in the specified string. This loop is breakable.
 * @param {LoopCallback} callback Function that produces a character from this string.
 * @param {Number} [startIndex] The start index.
 * @param {Number} [endIndex] The end index.
 * @param {Number} [step] The number by which the counter of the loop is incremented each time.
 * @param {Object} [scope] The value of <code>this</code> provided for the callback function.
 * @returns {Boolean} If the loop has been executed (and at least one item has been processed) and has not been broken.
 * @throws {TypeError} If the provided function returns a value that is not a boolean.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
String.prototype.loop = function (callback, startIndex, endIndex, step, scope) {
    return loopThroughList(this, callback, startIndex, endIndex, step, scope);
};
/**
 * @description Executes the provided function once for each character in the specified string. This loop is unbreakable.
 * @param {ForEachCallback} callback Function that produces a character from this string.
 * @param {Number} [startIndex] The start index.
 * @param {Number} [endIndex] The end index.
 * @param {Number} [step] The number by which the counter of the loop is incremented each time.
 * @param {Object} [scope] The value of <code>this</code> provided for the callback function.
 * @returns {undefined}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
String.prototype.forEach = function (callback, startIndex, endIndex, step, scope) {
    return forEachInList(this, callback, startIndex, endIndex, step, scope);
};
/**
 * @description Generators code points out of the specified string.
 * @param {String} string The string.
 * @generator
 * @yields {Number} The next code point in the specified string.
 * @throws {UnicodeError} If a high surrogate is found but no low surrogate.
 * @throws {UnicodeError} If a high surrogate is found at the last index (which means that there is no low surrogate).
 * @throws {UnicodeError} If a low surrogate is found but no high surrogate.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function* codePointGenerator(string) {
    /**
     * The Unicode Normalization Form of the specified string, using the Normalization Form Canonical Composition.
     * @type {String}
     */
    const normalizedString = string.normalize("NFC");

    for (/** @description The current index. @type {Number} */
        let index = 0;
        index < normalizedString.length;
        index++) {
        /**
         * @description The character code at the current index.
         * @type {Number}
         */
        const charCode = normalizedString.charCodeAt(index);

        if (CharCode.isHighSurrogate(charCode)) {
            if (++index < normalizedString.length) {
                /**
                 * @description The low surrogate character code.
                 * @type {Number}
                 */
                const lowSurrogateCharCode = normalizedString.charCodeAt(index);

                if (!CharCode.isLowSurrogate(lowSurrogateCharCode))
                    throw new UnicodeError("High surrogate found but no low surrogate.");

                yield (new SurrogatePair(charCode, lowSurrogateCharCode)).toCodePoint();
            } else
                throw new UnicodeError("High surrogate found at the last index. A low surrogate is needed.");
        } else if (CharCode.isLowSurrogate(charCode))
            throw new UnicodeError("Low surrogate found but no high surrogate.");
        else
            yield charCode;
    }
}
/**
 * @description The callback function that produces a code point of a string during a breakable loop.
 * @callback CodePointLoopCallback
 * @param {Number} codePoint The current code point being processed in a string.
 * @returns {Boolean} If the loop must continue, if possible.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * @description Executes the provided function once for each code point in this string. This loop is breakable.
 * @param {CodePointLoopCallback} callback Function that produces an code point of this string.
 * @param {Object} [scope] The value of <code>this</code> provided for the callback function.
 * @returns {Boolean} If the loop has been executed (and at least one item has been processed) and has not been broken.
 * @throws {TypeError} If the provided function returns a value that is not a boolean.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
String.prototype.loopThroughCodePoints = function (callback, scope) {
    /**
     * @description The result that will be returned.
     * @type {Boolean}
     */
    let result = false;

    for (/** @description The currrent code point. @type {Number} */ const codePoint of codePointGenerator(this)) {
        /**
         * @description If the loop can continue.
         * @type {Boolean}
         */
        const canContinue = callback.call(scope, codePoint);

        if (!isBoolean(canContinue))
            throw new TypeError("No boolean has been returned by the callback.");

        if (!canContinue)
            return false;

        if (!result)
            result = true;
    }

    return result;
};
/**
 * @description The callback function that produces a character code of a string during a breakable loop.
 * @callback CharacterCodeLoopCallback
 * @param {Number} characterCode The current code point being processed in a string.
 * @returns {Boolean} If the loop must continue, if possible.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * @description Executes the provided function once for each character code in this string. This loop is breakable.
 * @param {CharacterCodeLoopCallback} callback Function that produces a character code in this string.
 * @param {Number} [startIndex] The start index.
 * @param {Number} [endIndex] The end index.
 * @param {Number} [step] The number by which the counter of the loop is incremented each time.
 * @param {Object} [scope] The value of <code>this</code> provided for the callback function.
 * @returns {Boolean} If the loop has been executed (and at least one item has been processed) and has not been broken.
 * @throws {TypeError} If the provided function returns a value that is not a boolean.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
String.prototype.loopThroughCharCodes = function (callback, startIndex, endIndex, step, scope) {
    return this.loop((character, index) => callback(character.charCodeAt(0), index), startIndex, endIndex, step, scope);
};
/**
 * @description The callback function that produces a code point of a string during an unbreakable loop.
 * @callback ForEachCodePointCallback
 * @param {Number} codePoint The current code point being processed in a string.
 * @returns {undefined} Nothing is expected to be returned and whatever will be returned will be ignored.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * @description Executes the provided function once for each code point in this string. This loop is unbreakable.
 * @param {ForEachCodePointCallback} callback Function that produces a code point of the string.
 * @param {Object} [scope] The value of <code>this</code> provided for the callback function.
 * @returns {undefined}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
String.prototype.forEachCodePoint = function (callback, scope) {
    for (/** @description The currrent code point. @type {Number} */ const codePoint of codePointGenerator(this))
        callback.call(scope, codePoint);
};
/**
 * @description The callback function that produces a character code of a string during an unbreakable loop.
 * @callback ForEachCharacterCodeCallback
 * @param {Number} charCode The current character code being processed in a string.
 * @returns {undefined} Nothing is expected to be returned and whatever will be returned will be ignored.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * @description Executes the provided function once for each character code in this string. This loop is unbreakable.
 * @param {ForEachCharacterCodeCallback} callback Function that produces a character code of the string.
 * @param {Number} [startIndex] The start index.
 * @param {Number} [endIndex] The end index.
 * @param {Number} [step] The number by which the counter of the loop is incremented each time.
 * @param {Object} [scope] The value of <code>this</code> provided for the callback function.
 * @returns {undefined}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
String.prototype.forEachCharCode = function (callback, startIndex, endIndex, step, scope) {
    return this.forEach((character, index) => callback(character.charCodeAt(0), index), startIndex, endIndex, step, scope);
};
/**
 * @description Removes a stubstring from this string at the specified start en end indices and returns the result.
 * @param {Number} startIndex The index at which the substring begins.
 * @param {Number} endIndex The index at which the substring ends.
 * @returns {String} A new copy of this string without the substring.
 * @throws {TypeError} If the start index is null, undefined or not a number.
 * @throws {String} If the start index is lower than 0.
 * @throws {TypeError} If the end index is null, undefined or not a number.
 * @throws {String} If the end index is higher than the length of this string or lower than or equal to the start index.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
String.prototype.removeSubstring = function (startIndex, endIndex) {
    return startIndex === 0 ?
            this.substring(endIndex, this.length) :
            endIndex === this.length ?
                this.substring(0, startIndex) :
                this.substring(0, startIndex) + this.substring(endIndex, this.length);
};
/**
 * @description Replaces the substring at the specified indices with the specified substring and returns a new string.
 * @param {String} [substring=""] The new substring to replace the substring at the specified start en end indices.
 * @param {Number} startIndex The index at which the substring to replace begins.
 * @param {Number} endIndex The index at which the substring to replace ends.
 * @returns {String} A new copy of this string with the substring at the specified indices replaced with the specified substring.
 * @throws {TypeError} If the substring is not null or undefined and not a string either.
 * @throws {TypeError} If the start index is null, undefined or not a number.
 * @throws {Error} If the start index is lower than 0.
 * @throws {TypeError} If the end index is null, undefined or not a number.
 * @throws {Error} If the end index is higher than the length of this string or lower than or equal to the start index.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @example "ABCDEFG".replaceWithString("!@#", 0, 4); // returns "!@#EFG"
 * @example "ABCDEFG".replaceWithString("!@#", 0, 1); // returns "!@#BCDEFG"
 */
String.prototype.replaceWithString = function (substring, startIndex, endIndex) {
    if (isNullOrUndefined(substring))
        substring = "";
    else if (!isString(substring))
        throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "substring", "string"));

    checkRequiredNumber(startIndex, "startIndex");
    checkRequiredNumber(endIndex, "endIndex");

    if (startIndex < 0)
        throw new Error(COMMON_TEXT_LIST.invalidArgument + "the start index cannot be lower than 0.");

    if (endIndex > this.length)
        throw new Error(COMMON_TEXT_LIST.invalidArgument + "the end index cannot be higher than the length of this string.");

    if (endIndex <= startIndex)
        throw new Error(COMMON_TEXT_LIST.invalidArgument + "the end index cannot be lower than or equal to the start index.");

    return startIndex === 0 ?
        substring + this.substring(endIndex, this.length) :
        endIndex === this.length ?
        this.substring(0, startIndex) + substring :
        isNullOrUndefined(substring) ?
        this.substring(0, startIndex) + this.substring(endIndex, this.length) :
        this.substring(0, startIndex) + substring + this.substring(endIndex, this.length);
};
/**
 * @description Replaces all instances of the specified query * with the specified substring and returns a new string.
 * @param {String} query The query.
 * @param {String} [substring=""] The substring.
 * @returns {String} A new copy of this string with all instances of the specified query replaced with the specified substring.
 * @throws {TypeError} If the query is null, undefined or not a string.
 * @throws {TypeError} If the substring is not null or undefined and not a string either.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
String.prototype.replaceAll = function (query, substring) {
    checkRequiredString(query, "query");

    if (isNullOrUndefined(substring))
        substring = "";
    else if (!isString(substring))
        throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "substring", "string"));

    return this.replace(new RegExp(query, 'g'), substring);
};
/**
 * @description Defines any type of string template related error.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class StringTemplateError extends Error {
    /**
     * @description StringTemplateError constructor.
     * @param {String} message The message.
     * @returns {StringTemplateError}
     */
    constructor(message) {
        super(message);
    }
}
/**
 * @description Creates a string from the specified string template. The string template can contain one or more parameters specified with an at symbol (<code>@</code>). Parameters can be escaped
 * using a backslash (U+005C) (backlashes can also be escaped using a backslash). For every parameter a value (after the string template) must be specified.
 * @param {String} templateString The template string to interpret.
 * @param {...Object} parameterList The parameter values.
 * @returns {String} The string, created from the template and - if applicable - the specified values.
 * @throws {TypeError} If the specified template string is not a string.
 * @throws {TypeError} If the specified parameter list is not an array.
 * @throws {StringTemplateError} If no parameter is found at an expected list index.
 * @throws {SyntaxError} If a blacklash indicates an escape but there is nothing to escape.
 * @throws {StringTemplateError} If a parameter value is null or undefined.
 * @throws {SyntaxError} If an escape character has been found but nothing to escape follows it.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @example createStringFromTemplate("hello @!", "world"); // returns "hello world!"
 */
function createStringFromTemplate(templateString, ...parameterList) {
    /**
     * @description Returns the parameter from the parameter list at the specified index. If the parameter value is not a string it will be converted to a string.
     * @param {Number} index The index.
     * @returns {String} The parameter from the parameter list at the specified index.
     * @private
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    function getParameter(index) {
        /**
         * @description The parameter value.
         * @type {Object}
         */
        const value = parameterList[index];
        return isString(value) ?
            value :
            value.toString();
    }

    checkRequiredString(templateString, "templateString");

    if (!(parameterList instanceof Array))
        throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidStringArgumentDataType, "parameterList", "array"));

    /**
     * @description The string to construct from the template string.
     * @type {String}
     */
    let string = templateString.normalize("NFC");
    /**
     * @description The parameter list index.
     * @type {Number}
     */
    let parameterListIndex = 0;
    /**
     * @description The escape character.
     * @type {String}
     */
    const escapeCharacter = STRING_TEMPLATE_ESCAPE_CHARACTER;
    /**
     * @description The value character.
     * @type {String}
     */
    const valueCharacter = "\u0040";
    /**
     * @description If an escape needs to take place.
     * @type {Boolean}
     */
    let doEscape = false;

    for (/** @param {Number} characterIndex The current character index. */
        let characterIndex = 0;
        characterIndex < string.length;
        characterIndex++) {
        /**
         * @description The current character.
         * @type {String}
         */
        let character = string[characterIndex];

        if (character === escapeCharacter) {
            /**
             * @description The number of escape characters that have been found.
             * @type {Number}
             */
            let escapeCount = 1;
            /**
             * @description The index of the first escape character.
             * @type {Number}
             */
            const escapeStartIndex = characterIndex;

            for (++characterIndex;
                characterIndex < string.length;
                characterIndex++)
                if (string[characterIndex] === escapeCharacter)
                    escapeCount++;
                else {
                    characterIndex--;
                    break;
                }

            /**
             * @description The reminder of the escape count division. If the result is 1 then an escape must take place.
             * @type {Number}
             */
            const remainder = escapeCount % 2;
            /**
             * @description The new number of escape characters.
             * @type {Number}
             */
            const newEscapeCount = escapeCount === 1 ? 0 :
                    (escapeCount - remainder) / 2;
            /**
             * @description The amount of characters to remove.
             * @type {Number}
             */
            const charactersToRemove = escapeCount - newEscapeCount;
            string = string.removeSubstring(escapeStartIndex, escapeStartIndex + charactersToRemove);
            character = string[characterIndex -= charactersToRemove - 1];
            doEscape = remainder === 1;

            if (doEscape &&
                    characterIndex === string.length)
                throw new SyntaxError("Nothing to escape.");
        }

        if (character === valueCharacter) {
            if (doEscape) {
                doEscape = false;
                continue;
            }

            if (parameterListIndex >= parameterList.length)
                throw new StringTemplateError(`Parameter not found, there is no argument at index ${parameterListIndex}.`);

            /**
             * @description The value to append to the string.
             * @type {Object}
             */
            const value = getParameter(parameterListIndex++);

            if (isNullOrUndefined(value))
                throw new StringTemplateError("Parameter value cannot be null or undefined.");

            string = string.replaceWithString(value, characterIndex, characterIndex + 1);
            characterIndex += value.length - 1;
            continue;
        }

        if (doEscape)
            throw new SyntaxError("Invalid or unexpected token.");
    }

    return string;
}
/**
 * @description Returns a subset of the specified string at the location that is specified in the specified template with the at sign (U+0040).
 * @param {String} templateString The template string to interpret.
 * @param {String} value The string from which to find the subset.
 * @returns {String|undefined} The subset of the specified string, if it can be found.
 * @throws {TypeError} If either the template string or value is not a string.
 * @throws {SyntaxError} If a blacklash indicates an escape but there is nothing to escape.
 * @throws {String} If more than one (unescaped) "@" symbols are found in the template string.
 * @throws {SyntaxError} If an escape character has been found but nothing to escape follows it.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević
 * @example getSingleValueFromString("The number is @.", "The number is 13438."); // returns "13438".
 */
function getSingleValueFromString(templateString, value) {
    checkRequiredString(templateString, "templateString");
    checkRequiredString(value, "value");

    if (value.isEmpty())
        return undefined;

    /**
     * @description The error message template to use when the specified value doesn't match the specified template for some reason.
     * @type {String}
     */
    const valueDoesntMatchErrorMessageTemplate = "The specified value doesn't match the specified template (@).";

    if (value.length < templateString.length)
        throw createStringFromTemplate(valueDoesntMatchErrorMessageTemplate, "the value is shorter than the template");

    /**
     * @description The value character.
     * @type {String}
     */
    const valueCharacter = "\u0040";

    if (templateString === valueCharacter)
        return value;

    /**
     * @description The string to construct from the template string.
     * @type {String}
     */
    let string = templateString.normalize("NFC");
    /**
     * @description The escape character.
     * @type {String}
     */
    const escapeCharacter = "\u005C";
    /**
     * @description If an escape needs to take place.
     * @type {Boolean}
     */
    let doEscape = false;
    /**
     * @description The value index.
     * @type {Number}
     */
    let valueIndex;

    for (/** @param {Number} characterIndex The current character index. */
        let characterIndex = 0;
        characterIndex < string.length;
        characterIndex++) {
        /**
         * @description The current character.
         * @type {String}
         */
        let character = string[characterIndex];

        if (character === escapeCharacter) {
            /**
             * @description The number of escape characters that have been found.
             * @type {Number}
             */
            let escapeCount = 1;
            /**
             * @description The index of the first escape character.
             * @type {Number}
             */
            const escapeStartIndex = characterIndex;

            for (++characterIndex;
                characterIndex < string.length;
                characterIndex++)
                if (string[characterIndex] === escapeCharacter)
                    escapeCount++;
                else {
                    characterIndex--;
                    break;
                }

            /**
             * @description The reminder of the escape count division. If the result is 1 then an escape must take place.
             * @type {Number}
             */
            const remainder = escapeCount % 2;
            /**
             * @description The new number of escape characters.
             * @type {Number}
             */
            const newEscapeCount = escapeCount === 1 ? 0 :
                    (escapeCount - remainder) / 2;
            /**
             * @description The amount of characters to remove.
             * @type {Number}
             */
            const charactersToRemove = escapeCount - newEscapeCount;
            string = string.removeSubstring(escapeStartIndex, escapeStartIndex + charactersToRemove);
            character = string[characterIndex -= charactersToRemove - 1];
            doEscape = remainder === 1;

            if (doEscape &&
                    characterIndex === string.length)
                throw new SyntaxError("Nothing to escape.");
        } else if (doEscape === undefined)
            doEscape = false;

        if (!doEscape &&
                character === valueCharacter) {
            if (valueIndex !== undefined)
                throw new SyntaxError("Invalid or unexpected token.");

            valueIndex = characterIndex;
        }
    }

    if (valueIndex !== undefined) {
        if (valueIndex > 0 &&
                !value.startsWith(string.substring(0, valueIndex)))
            throw createStringFromTemplate(valueDoesntMatchErrorMessageTemplate, "mismatch at the beginning of the value");

        if (++valueIndex !== string.length &&
                !value.endsWith(string.substring(valueIndex, string.length)))
            throw createStringFromTemplate(valueDoesntMatchErrorMessageTemplate, "mismatch at the end of the value");

        return value.substring(--valueIndex, value.length - (string.length - valueIndex) + 1);
    }

    return undefined;
}
/**
 * @description Checks if the string is empty or contains no characters other than white space characters.
 * @returns {Boolean} If the string is empty or contains no characters other than white space characters.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
String.prototype.isWhiteSpace = function () {
    return this.isEmpty() ||
            this.loop(/** @param {String} character A character. */ character => character.trim().isEmpty());
};
/**
 * @description Checks if the specified string is empty or contains no characters other than white space characters.
 * @param {String} string The string.
 * @returns {Boolean} If the specified string is empty or contains no characters other than white space characters.
 * @throws {TypeError} If the specified string is not a string.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
String.isWhiteSpace = string => checkRequiredString(string, "string").isWhiteSpace();
/**
 * @description Converts this string to a number. Iif this string cannot be converted to a number an NaN will be returned.
 * @returns {Number|NaN}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
String.prototype.toNumber = function () {
    return this * 1;
};
//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="Array">
/**
 * @description Removes all elements from this array.
 * @returns {undefined}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Array.prototype.clear = function () {
    while (!this.isEmpty())
        this.pop();
};
/**
 * @description Checks if this array is empty (null, undefined or having no items).
 * @returns {Boolean} If this array is empty (null, undefined or having no items).
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Array.prototype.isEmpty = function () {
    return this.length === 0;
};
/**
 * @description Checks if the specified array is empty (null, undefined or having no items) or not.
 * @param {Array} array The array.
 * @returns {Boolean} If the specified array is empty (null, undefined or having no items) or not.
 * @throws {TypeError} If the specified array is not an instance of Array.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Array.isEmpty = array => {
    if (isNullOrUndefined(array))
        return true;

    if (!(array instanceof Array))
        throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "array", "Array"));

    return array.isEmpty();
};
/**
 * @description Returns the first item from this array.
 * @returns {Object} The first item from this array.
 * @throws {ListError} If this array is empty.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Array.prototype.getFirst = function () {
    if (this.isEmpty())
        throw new ListError("This array is empty.");

    return this[0];
};
/**
 * @description Returns the last item from this array.
 * @returns {Object} The last item from this array.
 * @throws {ListError} If this array is empty.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Array.prototype.getLast = function () {
    if (this.isEmpty())
        throw new ListError("This array is empty.");

    return this[this.length - 1];
};
/**
 * @description Checks if this array contains the specified query.
 * @param {Object} query The element to locate in the array.
 * @param {Number} [fromIndex] The index to start the search at.
 * @returns {Boolean} If the query can be found in this array.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Array.prototype.contains = function (query, fromIndex) {
    return this.indexOf(query, fromIndex) > -1;
};
/**
 * @description Replaces the specified old item in the array with the new item.
 * @param {Object} oldItem The (old) item to search for and replace.
 * @param {Object} newItem The (new) item to replace the old item with.
 * @returns {Boolean} If the specified old item has been found and replaced.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Array.prototype.replace = function (oldItem, newItem) {
    if (oldItem === newItem)
        return false;

    /**
     * @description The index of the specified old item in this array.
     * @type {Number}
     */
    const oldItemIndex = this.indexOf(oldItem);
    /**
     * @description If the specified old item has been found in this array.
     * @type {Boolean}
     */
    const isOldItemFound = oldItemIndex > -1;

    if (isOldItemFound)
        this[oldItemIndex] = newItem;

    return isOldItemFound;
};
/**
 * @description Searches for a specified item and if found replaces it with the other item. Thus, if item A is found it will be replaced with item B, otherwise if item B is found it will be replaced with item A.
 * @param {Object} itemA The first item to search for and replace with the second item.
 * @param {Object} itemB The second item to search for and replace with the first item.
 * @returns {Number} One of the following:
 * <p>1 if the first item has been found and replaced.</p>
 * <p>2 if the second item has been found and replaced.</p>
 * <p>-1 if no item has been found.</p>
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Array.prototype["switch"] = function (itemA, itemB) {
    return this.replace(itemA, itemB) ? 1 :
        (this.replace(itemB, itemA) ? 2 : -1);
};
/**
 * @description Executes the provided function once for each item in this array. This loop is breakable.
 * @param {LoopCallback} callback Function that produces an item from this array.
 * @param {Number} [startIndex] The start index.
 * @param {Number} [endIndex] The end index.
 * @param {Number} [step] The number by which the counter of the loop is incremented each time.
 * @param {Object} [scope] The value of <code>this</code> provided for the callback function.
 * @returns {Boolean} If the loop has been executed (and at least one item has been processed) and has not been broken.
 * @throws {TypeError} If the provided function returns a value that is not a boolean.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Array.prototype.loop = function (callback, startIndex, endIndex, step, scope) {
    return loopThroughList(this, callback, startIndex, endIndex, step, scope);
};
/**
 * @description Clones this array and all of its values but not functions.
 * @param {Number} [startIndex] The start index.
 * @param {Number} [endIndex] The end index.
 * @param {Number} [step] The number by which the counter of the loop is incremented each time.
 * @returns {Array} A simple clone of this array.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Array.prototype.simpleClone = function (startIndex, endIndex, step) {
    /**
     * @description A simple clone of this array.
     * @type {Array}
     */
    const simpleClone = [];
    this.forEach(/** @param {Object} item An array item. */ item =>
        simpleClone.push(
            isNullOrUndefined(item) ? item :
                item instanceof Function ? undefined :
                    item instanceof Date ? item.clone() :
                        item instanceof Array ? item.simpleClone() :
                            isObject(item) ? item.simpleClone() :
                                item
        ), this, startIndex, endIndex, step);
    return simpleClone;
};
/**
 * @description Deletes the specified query from this array.
 * @param {Object} query The element to locate in the array.
 * @param {Number} [fromIndex] The index to start the search at.
 * @returns {Boolean} If the query has beeen found and deleted from this array.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Array.prototype["delete"] = function (query, fromIndex) {
    /**
     * @description The index of the specified query in this array.
     * @type {Number}
     */
    const queryIndex = this.indexOf(query, fromIndex);
    /**
     * @description If the specified query has been found in this array.
     * @type {Boolean}
     */
    const isQueryFound = queryIndex > -1;

    if (isQueryFound)
        this.splice(queryIndex, 1);

    return isQueryFound;
};
/**
 * @description Merges the specified array with this array.
 * @param {Array} array The array.
 * @returns {undefined}
 * @throws {TypeError} If the specified array is not an instance of Array.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Array.prototype.merge = function (array) {
    checkRequiredArgument(array, "array", Array);

    for (/** @description The current item index. @type {Number} */
        let itemIndex = 0;
        itemIndex < array.length;
        itemIndex++)
        this.push(array[itemIndex]);
};
/**
 * @description Checks if this array is equal to the specific array.
 * @param {Array} array The array.
 * @param {Boolean} [isStrict=false] If this array contains all items of the specified array or if this array contains all items of the specific array in the same order.
 * @returns {Boolean} If this array is equal to the specific array.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Array.prototype.equals = function (array, isStrict) {
    if (isNullOrUndefined(array) ||
        !(array instanceof Array) ||
        this.length !== array.length)
        return false;

    if (this.isEmpty() &&
            array.isEmpty())
        return true;

    if (isNullOrUndefined(isStrict) ||
            !isStrict) {
        for (/** @param {Number} arrayIndex The current array index. */
            let arrayIndex = 0;
            arrayIndex < this.length;
            arrayIndex++)
            if (!this.contains(array[arrayIndex]))
                return false;
    } else
        for (/** @param {Number} arrayIndex The current array index. */
            let arrayIndex = 0;
            arrayIndex < this.length;
            arrayIndex++)
            if (this[arrayIndex] !== array[arrayIndex])
                return false;

    return true;
};
//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="Date & Time">
/**
 * @description The amount of milliseconds in a day.
 * @type {Number}
 */
const MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24;
/**
 * @description The amount of milliseconds in one hour.
 * @type {Number}
 */
const MILLISECONDS_IN_ONE_HOUR = 60 * 60 * 1000;
/**
 * @description The amount of milliseconds in one minute.
 * @type {Number}
 */
const MILLISECONDS_IN_ONE_MINUTE = 60 * 1000;
/**
 * @description The amount of milliseconds in one second.
 * @type {Number}
 */
const MILLISECONDS_IN_ONE_SECOND = 1000;
/**
 * @description Returns the last day of the UTC month.
 * @param {Number} year The year.
 * @param {Number} month The month (from 1 to 12).
 * @returns {Number} The last day of theUTC month.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Date.getLastDayOfUTCMonth = (year, month) => new Date(new Date(Date.UTC(year, month, 1)) - 1).getUTCDate();
/**
 * @description Returns the last day of the month.
 * @param {Number} year The year.
 * @param {Number} month The month (from 1 to 12).
 * @returns {Number} The last day of the month.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Date.getLastDayOfMonth = (year, month) => new Date(new Date(year, month, 1) - 1).getUTCDate();
/**
 * @description Returns the last day of the UTC month.
 * @returns {Number} The last day of theUTC month.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Date.prototype.getLastDayofUTCMonth = function () {
    return getLastDayOfUTCMonth(this.getUTCFullYear(), this.getUTCMonth() + 1);
};
/**
 * @description Get the last day of the month.
 * @returns {Number} The last day of the month.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Date.prototype.getLastDayofMonth = function () {
    return getLastDayOfMonth(this.getFullYear(), this.getMonth() + 1);
};
/**
 * @description Returns the ISO day of the week (Monday is 0, Tuesday is 1 and so on).
 * @returns {Number} The number of the ISO day of the week.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Date.prototype.getISODay = function () {
    /**
     * @description The day of the week for this date according to local time.
     * @type {Number}
     */
    const day = this.getDay();
    return day === 0 ? 6 :
        day - 1;
};
/**
 * @description Returns the ISO day of the week (Monday is 0, Tuesday is 1 and so on) according to universal time.
 * @returns {Number} The number of the ISO day of the week.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Date.prototype.getISOUTCDay = function () {
    /**
     * @description The day of the week in this date according to universal time, where 0 represents Sunday.
     * @type {Number}
     */
    const day = this.getUTCDay();
    return day === 0 ? 6 :
        day - 1;
};
/**
 * @description Clones this instance of Date and returns it.
 * @returns {Date} A clone of this instance of Date.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Date.prototype.clone = function () {
    return new Date(this.getTime());
};
/**
 * @description Returns the current ISO week number.
 * @returns {Number} The current ISO week number.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Date.prototype.getISOWeek = function () {
    /**
     * @description A close of this date.
     * @type {Date}
     */
    const date = this.clone();
    date.setUTCDate(date.getUTCDate() - this.getISODay() + 3);

    /**
     * @description The primitive value of this date.
     * @type {Number}
     */
    const firstThursday = date.valueOf();
    date.setUTCMonth(0, 1);

    if (date.getUTCDay() !== 4)
        date.setUTCMonth(0, 1 + ((4 - date.getUTCDay()) + 7) % 7);

    return 1 + Math.ceil((firstThursday - date) / (7 * 24 * 3600 * 1000));
};
/**
 * @description Returns the name of the current UTC month.
 * @returns {String} The name of the current UTC month.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Date.prototype.getUTCMonthName = function () {
    return getLocalizedMonthName(this.getUTCMonth());
};
/**
 * @description Returns the name of the current month.
 * @returns {String} The name of the current month.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Date.prototype.getMonthName = function () {
    return getLocalizedMonthName(this.getMonth());
};
/**
 * @description Adds days to the date according to local time.
 * @param {Number} days The days to add to the date.
 * @returns {undefined}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Date.prototype.addDays = function (days) {
    return this.setDate(this.getDate() + days);
};
/**
 * @description Adds days to the date according to universal time.
 * @param {Number} days The days to add to the date.
 * @returns {undefined}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Date.prototype.addUTCDays = function (days) {
    return this.setUTCDate(this.getUTCDate() + days);
};
/**
 * @description Adds months to the date according to local time.
 * @param {Number} months The monthss to add to the date.
 * @returns {undefined}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Date.prototype.addMonths = function (months) {
    return this.setMonth(this.getMonth() + months);
};
/**
 * @description Adds months to the date according to universal time.
 * @param {Number} months The months to add to the date.
 * @returns {undefined}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Date.prototype.addUTCMonths = function (months) {
    return this.setUTCMonth(this.getUTCMonth() + months);
};
/**
 * @description Returns the name of the current UTC day of the week.
 * @returns {String} The name of the current UTC day of the week.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Date.prototype.getUTCDayName = function () {
    return getWeekDayName(this.getISOUTCDay());
};
/**
 * @description Returns the name of the current day of the week.
 * @returns {String} The name of the current day of the week.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Date.prototype.getDayName = function () {
    return getWeekDayName(this.getISODay());
};
/**
 * @description Sets the day of the week to the first day of the week if the day isn't already the first day of the week.
 * @returns {Date} This date.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Date.prototype.setToFirstDayOfWeek = function () {
    if (this.getISODay() !== 0)
        this.setDate(this.getDate() - this.getISODay());

    return this;
};
/**
 * @description Clones this instance of Date with the time set to 00:00:00 and returns it.
 * @returns {Date} A clone of this instance of Date with the time set to 00:00:00.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Date.prototype.cloneWithoutTime = function () {
    /**
     * @description A clone of this date but with the time set to 00:00:00.
     * @type {Date}
     */
    const date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    date.setYear(this.getFullYear());
    date.setMonth(this.getMonth());
    date.setDate(this.getDate());
    return date;
};
/**
 * @description Compares the two specified dates. If the first date is lower than the second date a -1 will be returned. If the two dates are equal a 0 will be returned, otherwise a 1 will be
 * returned.
 * @param {Date} firstDate The first date.
 * @param {Date} secondDate The second date.
 * @returns {Number}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Date.compare = (firstDate, secondDate) => {
    checkRequiredArgument(firstDate, "firstDate", Date);
    checkRequiredArgument(secondDate, "secondDate", Date);

    /**
     * @description The time of the first date.
     * @type {Number}
     */
    const time1 = firstDate.getTime();
    /**
     * @description The time of the second date.
     * @type {Number}
     */
    const time2 = secondDate.getTime();
    return time1 < time2 ? -1 :
        time1 === time2 ? 0 : 1;
};
/**
 * @description Returns the current date.
 * @returns {Date} The current date.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Date.getCurrent = () => new Date(Date.now());
/**
 * @description A list of month text names.
 * @type {Array}
 */
Date.monthTextNameList = Object.freeze([
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
]);
/**
 * @description A list of week day text names.
 * @type {Array}
 */
Date.weekDayTextNameList = Object.freeze([
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday"
]);
/**
 * @description Returns the localized name of the specified month.
 * @param {Number} monthNumber The number of the month (January starts at 0).
 * @returns {String} The localized name of the specified month.
 * @throws {TypeError} If the specified month number is null, undefined or not a number.
 * @throws {String} If the specified month number is lower than 0 or higher than 11.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Date.getLocalizedMonthName = monthNumber => {
    checkRequiredNumber(monthNumber, "monthNumber");

    if (monthNumber < 0)
        throw new Error(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentLowerThanTemplate, 0, "monthName"));

    if (monthNumber >= Date.monthTextNameList.length)
        throw new Error(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentHigherThanTemplate, Date.monthTextNameList.length - 1, "monthName"));

    return LOCALIZED_TEXTS_MAP.get(Date.monthTextNameList[monthNumber]);
};
/**
 * @description Returns the localized name of the specified day of the week.
 * @param {Number} weekDayNumber The number of the day of the week (Monday starts at 0).
 * @returns {String} The localized name of the specified day of the week.
 * @throws {TypeError} If the specified day of the week number is null, undefined or not a number.
 * @throws {Error} If the specified day of the week number is lower than 0 or higher than 6.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Date.getWeekDayName = weekDayNumber => {
    checkRequiredNumber(weekDayNumber, "weekDayNumber");

    if (weekDayNumber < 0)
        throw new Error(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentLowerThanTemplate, 0, "weekDayNumber"));

    if (weekDayNumber >= Date.weekDayTextNameList.length)
        throw new Error(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentHigherThanTemplate, Date.weekDayTextNameList.length - 1, "weekDayNumber"));

    return LOCALIZED_TEXTS_MAP.get(Date.weekDayTextNameList[weekDayNumber]);
};
//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="Color">
/**
 * @description Defines a color error.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class ColorError extends Error {
    /**
     * @description ColorError constructor.
     * @param {String} message The detail message.
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    constructor(message) {
        super(message);
    }
}
/**
 * @typedef {Object} RgbColorList Defines a RGB color.
 * @property {Number} redColorNumber The red color number.
 * @property {Number} greenColorNumber The green color number.
 * @property {Number} blueColorNumber The blue color number.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * @typedef {RgbColorList} RgbaColorList Defines a RGB color.
 * @property {Number} [alpha] The opacity.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * @description Defines a static interface that represents RGB color functionality.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class RgbColor {
    /**
     * @description Checks the specified (RGB) color number and throws an exception if it is not valid.
     * @param {Number} colorNumber The (RGB) color number.
     * @returns {Number} The color number.
     * @throws {ColorError} If the specified (RGB) color number is lower than 0 or higher than 255.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    static check(colorNumber) {
        checkRequiredNumber(colorNumber, "colorNumber");

        if (colorNumber < 0)
            throw new ColorError(COMMON_TEXT_LIST.invalidArgument + `the RGB color number (${colorNumber}) cannot be lower than 0.`);

        if (colorNumber > 255)
            throw new ColorError(COMMON_TEXT_LIST.invalidArgument + `the RGB color number (${colorNumber}) cannot be higher than 255.`);

        return colorNumber;
    }
    /**
     * @description Creates a two-digit long hexadecimal color statement from the specified color number.
     * @param {Number} colorNumber The color number.
     * @returns {String} A two-digit long hexadecimal color statement from the specified color number.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    static createHexStatement(colorNumber) {
        return checkRequiredNumber(colorNumber, "colorNumber").
                toString(16).
                toUpperCase().
                maskLeft("0", 2);
    }
    /**
     * @description Creates an HTML color statement.
     * @param {Number} redColorNumber The red color number.
     * @param {Number} greenColorNumber The green color number.
     * @param {Number} blueColorNumber The blue color number.
     * @returns {String} An HTML color statement.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    static createHtmlStatement(redColorNumber, greenColorNumber, blueColorNumber) {
        return "\u0023" + RgbColor.createHexStatement(redColorNumber) + RgbColor.createHexStatement(greenColorNumber) + RgbColor.createHexStatement(blueColorNumber);
    }
    /**
     * @description Creates a CSS color statement from the specified values.
     * @param {Number} redColorNumber The red color code.
     * @param {Number} greenColorNumber The green color code.
     * @param {Number} blueColorNumber The blue color code.
     * @param {Number} [alphaCode] The opacity.
     * @returns {String} A CSS color statement from the specified values.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    static createCssStatement(redColorNumber, greenColorNumber, blueColorNumber, alphaCode) {
        /**
         * @description The name of the color statement.
         * @type {String}
         */
        let name = "RGB";
        /**
         * @description A list of color codes and in case of an RGBA statement, the alpha code.
         * @type {Array}
         */
        const colorList = [];

        if (arguments.length === 4) {
            if (!(alphaCode >= 0.0 &&
                    alphaCode <= 1.0))
                throw `Invalid alpha code (${alphaCode}) found.`;

            colorList.push(alphaCode);
            name += "A";
        } else if (arguments.length !== 3)
            throw new Error(`Invalid number of arguments: ${arguments.length}.`);

        return `$(${name})(${Array.from(arguments).slice(0, 3).map(colorCode => RgbColor.check(colorCode)).concat(colorList).toString()})`;
    }
    /**
     * @description Reads the specified CSS color statement and returns either a RGB or RGBA record.
     * @param {String} cssStatement The CSS color statement.
     * @returns {RgbColorList|RgbaColorList} EIther the RGB or RGBA value.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     * @example RgbColor.readCssStatement("rgb(49,97,160)"); // returns an instance of CssRgbStatement containing the name of the statement (which is "rgb") and the color in an array.
     */
    static readCssStatement(cssStatement) {
        checkRequiredString(cssStatement, "cssStatement");

        /**
         * The index in the CSS statement of the left parenthesis.
         * @type {Number}
         */
        const leftParenthesisIndex = cssStatement.indexOf("(");

        if (leftParenthesisIndex <= 0)
            throw new SyntaxError("A name has been expected but none was found.");

        /**
         * @description The name of the color statement.
         * @type {String}
         */
        const name = cssStatement.substring(0, leftParenthesisIndex).trim().toLowerCase();
        /**
         * @description A list of color codes and in case of an RGBA statement, the alpha code.
         * @type {Array}
         */
        const colorList = getSingleValueFromString(name + "(@)", cssStatement).split(",").map(/** @param {Number} colorCode */ colorCode => RgbColor.check(Number.parseInt(colorCode.trim())));
        /**
         * @description Creates a RGB record.
         * @param {Number} redColorNumber The red color number.
         * @param {Number} greenColorNumber The green color number.
         * @param {Number} blueColorNumber The blue color number.
         * @returns {CssRgbRecord} A RGB record.
         */
        const createCssRgbStatement = (redColorNumber, greenColorNumber, blueColorNumber) => ({
            redColorNumber: redColorNumber,
            greenColorNumber: greenColorNumber,
            blueColorNumber: blueColorNumber
        });

        switch (name) {
            case "rgb":
                if (colorList.length !== 3)
                    throw "Invalid CSS RGB statement: three color codes are expected.";

                return Object.freeze(createCssRgbStatement.apply(undefined, colorList));
            case "rgba":
                if (colorList.length !== 4)
                    throw "Invalid CSS RGBA statement: three color codes and an alpha code is expected.";

                /**
                 * @description The alpha.
                 * @type {Number}
                 */
                const alpha = colorList.pop();

                if (!(alpha >= 0.0 &&
                        alpha <= 1.0))
                    throw `Invalid alpha code (${alpha}) found.`;

                /**
                 * @description A RGBA record.
                 * @type {CssRgbaRecord}
                 */
                const rgbaRecord = createCssRgbStatement.apply(undefined, colorList);
                rgbaRecord.alpha = alpha;
                return Object.freeze(rgbaRecord);
            default:
                throw "Invalid CSS color statement: unknown name.";
        }
    }
    /**
     * @description Converts the specified CMYK colors to RGB colors.
     * @param {Number} cyanColorNumber The cyan color number.
     * @param {Number} magentaColorNumber The megenta color number.
     * @param {Number} yellowColorNumber The yellow color number.
     * @param {Number} key The black color number.
     * @returns {RgbColorList} The RGB colors.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    static fromCmyk(cyanColorNumber, magentaColorNumber, yellowColorNumber, key) {
        /**
         * @description The minimum divide.
         * @type {Number}
         */
        const minDiv = 100;
        /**
         * @description The maximum divide.
         * @type {Number}
         */
        const maxDiv = 255;
        cyanColorNumber /= minDiv;
        magentaColorNumber /= minDiv;
        yellowColorNumber /= minDiv;
        key /= minDiv;
        return Object.freeze({
            redColorNumber: Math.round((1 - Math.min(1, cyanColorNumber * (1 - key) + key)) * maxDiv),
            greenColorNumber: Math.round((1 - Math.min(1, magentaColorNumber * (1 - key) + key)) * maxDiv),
            blueColorNumber: Math.round((1 - Math.min(1, yellowColorNumber * (1 - key) + key)) * maxDiv)
        });
    }
}
/**
 * @typedef {Object} CmykColorList Defines a CMYK color.
 * @property {Number} cyanColorNumber The cyan color number.
 * @property {Number} magentaColorNumber The megenta color number.
 * @property {Number} yellowColorNumber The yellow color number.
 * @property {Number} key The black color number.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * @description Defines a static interface that represents CMYK color functionality.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class CmykColor {
    /**
     * @description Checks the specified (CMYK) color number and throws an exception if it is not valid.
     * @param {Number} colorNumber The (CMYK) color number.
     * @returns {Number} The color number.
     * @throws {ColorError} If the specified (CMYK) color number is lower than 0 or higher than 100.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    static check(colorNumber) {
        checkRequiredNumber(colorNumber, "colorNumber");

        if (colorNumber < 0)
            throw new Error(COMMON_TEXT_LIST.invalidArgument + `the CMYK color number (${colorNumber}) cannot be lower than 0.`);

        if (colorNumber > 100)
            throw new Error(COMMON_TEXT_LIST.invalidArgument + `the CMYK color number (${colorNumber}) cannot be higher than 100.`);
    }
    /**
     * @description Converts the specified RGB colors to CMYK colors.
     * @param {Number} redColorNumber The red color number.
     * @param {Number} greenColorNumber The green color number.
     * @param {Number} blueColorNumber The blue color number.
     * @returns {CmykColorList} The CMYK colors.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    static fromRgb(redColorNumber, greenColorNumber, blueColorNumber) {
        /**
         * @description The minimum divide.
         * @type {Number}
         */
        const minDiv = 100;
        /**
         * @description The maximum divide.
         * @type {Number}
         */
        const maxDiv = 255;
        /**
         * @description The black color number.
         * @type {Number}
         */
        const key = Math.min(1 - (redColorNumber /= maxDiv), 1 - (greenColorNumber /= maxDiv), 1 - (blueColorNumber /= maxDiv));
        return Object.freeze({
            cyanColorNumber: ((1 - redColorNumber - key) / (1 - key)) * minDiv,
            magentaColorNumber: ((1 - greenColorNumber - key) / (1 - key)) * minDiv,
            yellowColorNumber: ((1 - blueColorNumber - key) / (1 - key)) * minDiv,
            key: key * 100
        });
    }
}
//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="ID64">
/**
 * @description Defines a ID64 error.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class Id64Error extends Error {
    /**
     * @description Uuid64Error constructor.
     * @param {String} message The detail message.
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    constructor(message) {
        super(message);
    }
}
/**
 * @description Defines a static interface that represents read-only ID64 features. Inspired by Base64, ID64 is a binary-to-text encoding scheme that can be used to safely encode and transfer IDs
 * between different systems.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class Id64 {
    /* An ID64 digit consists out of 6 bits. There are thus 64 of these digits and each one of them is mapped to an ASCII character:
     *
     * ********* * ************* *
     * Digit     *   Character   *
     * ********* * ************* *
     *   00…25   *         A…Z   *
     *   26…51   *         a…z   *
     *   52…61   *         0…9   *
     *      62   *           _   *
     *      63   *           :   *
     * ********* * ************* *
     *
     * In XML an ID64 can be safely used as an ID and it doesn't need to be encoded when used in an URI.
     */

    /**
     * @description Returns the character that represents the specified ID64 digit.
     * @param {Number} id64Digit The ID64 digit, a number between 0 and 63.
     * @returns {String} The character that represents the specified ID64 digit.
     * @throws {Id64Error} If the specified index is invalid.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    static getCharacter(id64Digit) {
        if (id64Digit >= 0x00 &&
                id64Digit <= 25)
            return String.fromCharCode(id64Digit + 65); // A..Z

        if (id64Digit >= 26 &&
                id64Digit <= 51)
            return String.fromCharCode(id64Digit + 71); // a..z

        if (id64Digit >= 52 &&
                id64Digit <= 61)
            return String.fromCharCode(id64Digit - 4); // 0..9

        switch (id64Digit) {
            case 62:
                return '\u005F' /* Low line  */;
            case 63:
                return '\u003A' /* Colon */;
            default:
                throw new Id64Error(`Invalid ID64 index: ${id64Digit}.`);
        }
    }
    /**
     * Encodes the specified bytes and creates an ID64.
     * @param {type} byteList The bytes.
     * @returns {String} The ID64 from the specified bytes.
     * @throws {Id64Exception} If the specified bytes is empty.
     * @throws {RangeError} If a number other than an unsigned byte is found in the byte array.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    static create(byteList) {
        checkRequiredArgument(byteList, "byteList", Array);

        if (byteList.isEmpty)
            throw new Id64Exception("Cannot create an ID64 without any bytes.");

        /**
         * @description The ID64 string.
         * @type {String}
         */
        let string = "";
        /**
         * @description Cached bits.
         * @type {Number}
         */
        let cachedBitList = 0;
        /**
         * @description The amount of cached bits (including zeros on the left).
         * @type {Number}
         */
        let cachedBitListSize = 0;

        for (/** @description The current byte list index. @type {Number} */
            let bytelistIndex = 0;
            bytelistIndex < byteList.length;
            bytelistIndex++) {
            /**
             * @description The current 8 bits to process.
             * @type {Number}
             */
            let bitList = byteList[bytelistIndex];

            if (!Number.isUnsignedInteger(bitList) ||
                    bitList > 255)
                throw new RangeError("An unsigned byte was expected.");

            /**
             * @description The current amount of bits to process.
             * @type {Number}
             */
            let bitListSize = 8;

            if (cachedBitListSize > 0) {
                bitList |= cachedBitList << bitListSize;
                bitListSize += cachedBitListSize;
                cachedBitListSize = 0;
                cachedBitList = 0;
            }

            bitListSize -= 6;
            string += getCharacter(bitList >> bitListSize);
            bitList &= createBitMask(bitListSize);

            if (bitListSize === 6)
                string += getCharacter(bitList);
            else if (bitListSize !== 0) {
                cachedBitList = bitList;
                cachedBitListSize = bitListSize;
            }
        }

        if (cachedBitListSize > 0)
            string += Id64.getCharacter(cachedBitList);

        return string;
    }
}

//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="Client ID">
/**
 * @description Defines a static interface that represents ID features for use on the client - and only on the client. A client ID consists out of 32 randomly generated characters (using the Crypto
 * interface). A client ID can be used as a component in an DOM ID but it's also suitable as a standalone ID.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class ClientId {
    /**
     * @description The length of the client ID.
     * @type {Number}
     */
    static get length() {
        return 32;
    }
    /**
     * @description Generates a client ID, which is a 32 alphanumeric characters long case-insensetive ID that is unique on the client side and should only be used on the client. The ID is created
     * using randomly generated characters which are converted to base 36.
     * @returns {String} A new client ID.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    static generate() {
        /**
         * @description The client ID, uncut to fit the required length.
         * @type {String}
         */
        const uncutClientId = Array.from(crypto.getRandomValues(new Uint32Array(6))).map(/** @param {Number} x a random number. */ x => x.toString(36)).join("");
        return uncutClientId.length > ClientId.length ? // Is the uncut client ID longer than 32 characters?
            uncutClientId.substring(uncutClientId.length - ClientId.length) : // Then it needs to be cut.
            uncutClientId.length < ClientId.length ? // Is the uncut client ID shorter than 32 charcters?
            uncutClientId.maskLeft("0", ClientId.length) : // Then a zero-mask is appeneded to the left of the client ID.
            uncutClientId; // If the uncut client ID is 32 characters then it doesn't need to be cut.
    }
    /**
     * @description Generates a client ID list (a new object with a property for each specified name and for each property value a newly generated client ID).
     * @param {...String} nameList The names.
     * @returns {Object} A client ID list (a new object with a property for each specified name and for each property value a newly generated client ID).
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    static generateList(...nameList) {
        /**
         * @description The client ID list.
         * @type {Object}
         */
        const clientIdList = {};
        nameList.forEach(name => clientIdList[name] = ClientId.generate());
        return clientIdList;
    }
    /**
     * @description Checks the validity of the specified client ID.
     * @param {String} clientId The client ID to check.
     * @returns {Boolean} If the specified client ID is valid.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    static isValid(clientId) {
        return !isNullOrUndefined(clientId) &&
            isString(clientId) &&
            clientId.length === ClientId.length &&
            clientId.loopThroughCharCodes(isBase36CharacterCode);
    }
    /**
     * @description Checks the specified client ID and throws an exception if it is not valid
     * @param {String} clientId The client ID.
     * @param {String} [allowNull=false] If the client ID can be null or undefined.
     * @returns {String} The specified client ID.
     * @throws {TypeError} If "allowNull" is null, undefined or not a boolean.
     * @throws {TypeError} If the specified client ID is null or undefined while "allowNull" is false.
     * @throws {TypeError} If the specified client ID is not a string.
     * @throws {DomIdError} If the specified client ID is empty, contains multiple hyphens or contains an invalid character.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    static check(clientId, allowNull = false) {
        /*
         * These codes are identical to ClientId.isValid, only expanded to throw errors when found.
         */

         checkRequiredBoolean(allowNull, "allowNull");

        if (isNullOrUndefined(clientId)) {
            if (allowNull)
                return;

            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentCannotBeNullorUndefinedTemplate, "clientId"));
        }

        if (!isString(clientId))
            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "clientId", "string"));

        if (clientId.isEmpty())
            throw new DomIdError("The specified client ID contains no characters.");

        clientId.forEach((character, index) => {
            if (!isBase36CharacterCode(character.charCodeAt(0)))
                throw new Uuid64Error(`The specified client ID contains an invalid character (${createUnicodeNotation(character)}) at index ${index}.`);
        });
        return clientId;
    }
}
//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="UUID64">
/**
 * @description Defines a UUID64 error.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class Uuid64Error extends Error {
    /**
     * @description Uuid64Error constructor.
     * @param {String} message The detail message.
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    constructor(message) {
        super(message);
    }
}
/**
 * @description Defines a static interface that represents read-only UUID64 features. A UUID64 is a 22 character long ID64 encoded UUID.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class Uuid64 {
    /**
     * @description The length of a UUID64.
     * @type {Number}
     */
    static get length() {
        return 22;
    }
    /**
     * @description Checks the validity of the specified client ID.
     * @param {String} uuid64
     * @returns {Boolean}
     */
    static isValid(uuid64) {
        return !isNullOrUndefined(uuid64) &&
            isString(uuid64) &&
            uuid64.length !== Uuid64.length &&
            uuid64.loopThroughCharCodes(isUuid64CharacterCode);
    }
    /**
     * @description Checks the specified UUID64 and throws an exception if it is not valid.
     * @param {String} uuid64 The UUID64.
     * @param {String} [allowNull=true] If the DOM ID can be null or undefined.
     * @returns {String} The specified UUID64.
     * @throws {TypeError} If the specified UUID64 is null or undefined while "allowNull" is false.
     * @throws {TypeError} If the specified UUID64 is not a string.
     * @throws {DomIdError} If the specified UUID64 is empty, contains multiple hyphens or contains an invalid character.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    static check(uuid64, allowNull = true) {
        /*
         * These codes are identical to Uuid64.isValid, only expanded to throw errors when they are found.
         */

        checkRequiredBoolean(allowNull, "allowNull");

        if (isNullOrUndefined(uuid64)) {
            if (allowNull)
                return;

            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentCannotBeNullorUndefinedTemplate, "uuid64Id"));
        }

        if (!isString(uuid64))
            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "uuid64Id", "string"));

        if (uuid64.isEmpty())
            throw new Uuid64Error("The specified UUID64 contains no characters.");

        uuid64.forEach((character, index) => {
            if (!isUuid64CharacterCode(character))
                throw new Uuid64Error(`The specified UUID64 contains an invalid character (${quoteCodePoint(character.charCodeAt(0))}) at index ${index}.`);
        });
        return uuid64;
    }
    /**
     * @description Creates an ID64 encoded type 3 (name based) UUID based on the specified bytes.
     * @param {Number[]} byteList The bytes.
     * @returns {String} An ID64 encoded type 3 (name based) UUID based on the specified bytes.
     * @throws {RangeError} If the list size of the specified bytes is not 16.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    static create(byteList) {
        /**
         * @description The UUID64.
         * @type {String}
         */
        const uuid64 = Id64.create(byteList);

        if (byteList.length !== 16)
            throw new RangeError("The byte list size is not 16.");

        return uuid64;
    }
}
//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="DOM ID">
/**
 * @description Defines a representation of an error with a DOM ID or any of its parts.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class DomIdError extends Error {
    /**
     * @description DomIdError constructor.
     * @param {String} message The message.
     * @param {String} component The component.
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    constructor(message, component) {
        super(message);
        /**
         * @description The component.
         */
        this.component = component;
    }
};
/**
 * @description Defines a static interface, representing ID features for use with the DOM. A DOM ID consist out of one or multiple components, including other IDs.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class DomId {
    /**
     * @description The character used as the component separator.
     * @type {String}
     */
    static get separator() {
        return "\u002D";
    }
    /**
     * @description Checks if the specified character code is a valid DOM ID character code.
     * @param {Number} characterCode The character code.
     * @param {Boolean} isStartingCharacterCode If the code point is to be treated as being at the first index of the DOM ID.
     * @returns {Boolean} If the specified code point is a valid DOM ID code point.
     * @throws {TypeError} If the character code is not a number.
     * @throws {TypeError} if "isStartingCharacterCode" is not a boolean.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    static isValidCharacterCode(characterCode, isStartingCharacterCode = false) {
        checkRequiredBoolean(isStartingCharacterCode, "isStartingCharacterCode");

        if (isNullOrUndefined(characterCode))
            return false;

        if (!isNumber(characterCode))
            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "characterCode", "number"));

        return (
                (characterCode >= 0x61 &&
                characterCode <= 0x7A /* a..z */) ||
                (characterCode >= 0x41 &&
                characterCode <= 0x5a /* A..Z */)
            ) || (
                (
                    characterCode === 0x3A /* colon */ ||
                    characterCode === 0x2E /* full stop */ ||
                    characterCode >= 0x30 &&
                    characterCode <= 0x39 /* 0..1 */
                ) && !isStartingCharacterCode
            );
    }
    /**
     * @description Checks if the specified DOM ID component is valid.
     * @param {String} component The DOM ID component.
     * @param {Boolean} isFirstComponent If this component is the first of the DOM ID.
     * @returns {Boolean} If the specified DOM ID component is valid.
     * @throws {TypeError} If the specified DOM ID component is not a string.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    static isValidComponent(component, isFirstComponent) {
        checkRequiredString(component, "component");
        return !component.isEmpty() &&
                component.loopThroughCharCodes((characterCode, index) => DomId.isValidCharacterCode(characterCode, isFirstComponent &&
                index === 0));
    }
    /**
     * @description Checks the validity of the specified DOM ID.
     * @param {String} domId The DOM ID to check.
     * @param {Boolean} [allowAnyStart=false] If the DOM ID may start with a non-alphabetic character.
     * @returns {Boolean} If the specified DOM ID is valid.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    static isValid(domId) {
        return !isNullOrUndefined(domId) &&
            isString(domId) &&
            !domId.isEmpty() &&
            domId.split(DomId.separator).loop(
                /**
                 * @description Checks if the specified DOM ID character is valid.
                 * @param {String} component The DOM ID component.
                 * @param {Number} componentIndex The index of the DOM ID component.
                 * @returns {Boolean} If the specified DOM ID character is valid.
                 */
                (component, componentIndex) => !component.isEmpty() &&
                component.loopThroughCharCodes(
                /**
                 * @description Checks if the specified DOM ID character is valid.
                 * @param {String} characterCode The DOM ID character code.
                 * @param {Number} characterCodeIndex The index of the DOM ID character code.
                 * @returns {Boolean} If the specified DOM ID character is valid.
                 */
                (characterCode, characterCodePointIndex) => DomId.isValidCharacterCode(characterCode, componentIndex === 0 &&
                    characterCodePointIndex === 0)));
    }
    /**
     * @description Checks the specified DOM ID and throws an exception if it is not valid
     * @param {String} domId The DOM ID.
     * @param {String} [allowNull=true] If the DOM ID can be null or undefined.
     * @returns {undefined}
     * @throws {TypeError} If "allowNull" is null, undefined or not a boolean.
     * @throws {TypeError} If the specified DOM ID is null or undefined while "allowNull" is false.
     * @throws {TypeError} If the specified DOM ID is not a string.
     * @throws {DomIdError} If the specified DOM ID is empty, contains multiple hyphens or contains an invalid character.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    static check(domId, allowNull = true) {
        /* These codes are identical to DomId.isValid, only expanded to throw errors when found. */

        checkRequiredBoolean(allowNull, "allowNull");

        if (isNullOrUndefined(domId)) {
            if (allowNull)
                return;

            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentCannotBeNullorUndefinedTemplate, "domId"));
        }

        if (!isString(domId))
            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "domId", "string"));

        if (domId.isEmpty())
            throw new DomIdError("The specified DOM ID contains no characters.");

        domId.split(DomId.separator).forEach(
            /**
             * @description Checks if the specified DOM ID character is valid.
             * @param {String} component The DOM ID component.
             * @param {Number} componentIndex The index of the DOM ID component.
             * @returns {Boolean} If the specified DOM ID character is valid.
             */
            (component, componentIndex) => {
                if (component.isEmpty())
                    throw new DomIdError("A DOM ID cannot contain multiple hyphens next to each other.");

                component.forEachCharCode(
                    /**
                     * @description Checks if the specified DOM ID character is valid.
                     * @param {String} characterCode The DOM ID character code.
                     * @param {Number} characterCodeIndex The index of the DOM ID character code.
                     * @returns {Boolean} If the specified DOM ID character is valid.
                     */
                    (characterCode, characterCodeIndex) => {
                        if (!DomId.isValidCharacterCode(characterCode, componentIndex === 0 &&
                                characterCodeIndex === 0))
                            throw new DomIdError(`The specified DOM ID contains an invalid character (${createUnicodeNotation(characterCode)}) at index ${characterCodeIndex}.`);
                    });
            });
    }
    /**
     * @description Creates a DOM ID with the specified components.
     * @argument {...String|Number} componentList The components.
     * @returns {String} A DOM ID.
     * @throws {TypeError} If the component list is null or undefined.
     * @throws {DomIdError} If the number of specified components is zero.
     * @throws {DomIdError} If an invalid template component is found.
     * @throws {DomIdError} If the first component is an integer.
     * @throws {DomIdError} If any component is either a float or an integer below zero.
     * @throws {DomIdError} If a component is not an instance of string (or an integer equal to at least 0, except the first component).
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     * @example DomId.create("user", 43); // returns "user-43".
     */
    static create(...componentList) {
        if (isNullOrUndefined(componentList))
            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentCannotBeNullorUndefinedTemplate, "...componentList"));

        if (componentList.isEmpty())
            throw new DomIdError("Invalid number of components (0). At least one is required.");

        /**
         * @description Same as the specified component list but with each component checked and (unless in case of strings) converted to a string.
         * @type {Array}
         */
        const stringComponentList = [];
        componentList.forEach((component, index) => {
            switch (typeof component) {
                case "string":
                    if (!DomId.isValidComponent(component, index === 0))
                        throw new DomIdError(`Invalid component at index ${index}.`, component);

                    stringComponentList.push(component);
                    break;
                case "number":
                    if (index === 0)
                        throw new DomIdError("The first component cannot be an integer.");

                    if (!Number.isInteger(component))
                        throw new DomIdError("Components cannot be floats.");

                    if (component < 0)
                        throw new DomIdError("Components cannot be integers below 0.");

                    stringComponentList.push(component.toString());
                    break;
                default:
                    throw new DomIdError("All components must be an instance of string (or an unsigned integer, except the first component).");
            }
        });
        return stringComponentList.join(DomId.separator);
    }
    /**
     * @description Creates a DOM ID from template and all specified parameters.
     * @param {Array} template The DOM ID template.
     * @param {...Object} parameterList The parameters.
     * @returns {String} A DOM ID.
     * @throws {TypeError} If the template is null, undefined or not an array.
     * @throws {TypeError} If the parameters are null or undefined.
     * @throws {DomIdError} If the template asks for more parameters than what has been provided.
     * @throws {DomIdError} If an invalid template coponent is found.
     * @throws {DomIdError} If the first component (in the template) is a number.
     * @throws {DomIdError} If any component (in the template) is either a float or an integer below 0.
     * @throws {DomIdError} If a component is not an instance of string (or an integer equal to at least 0, except the first component).
     * @throws {DomIdError} If there are more parameters than what is required by the template.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     * @see DomId.create()
     * @example DomId.createFromTemplate(["user", null], 43); // returns "project-row-43".
     */
    static createFromTemplate(template, ...parameterList) {
        checkRequiredArgument(template, "template", Array);

        if (isNullOrUndefined(parameterList))
            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentCannotBeNullorUndefinedTemplate, "...parameters"));

        /**
         * @description The parameter list index.
         * @type {Number}
         */
        let parameterListIndex = 0;
        /**
         * @description All the components of the DOM ID to construct.
         * @type {Array}
         */
        const stringComponentList = [];
        template.forEach((templateComponent, templateComponentIndex) => {
            if (isNullOrUndefined(templateComponent)) {
                if (parameterListIndex >= parameterList.length)
                    throw new DomIdError("The template asks for more parameters than what has been provided.");

                templateComponent = parameterList[parameterListIndex++];
            }

            switch (typeof templateComponent) {
                case "string":
                    if (!DomId.isValidComponent(templateComponent, templateComponentIndex === 0, false))
                        throw new DomIdError(`Invalid template component at index ${templateComponentIndex}.`, templateComponent);

                    stringComponentList.push(templateComponent);
                    break;
                case "number":
                    if (templateComponentIndex === 0)
                        throw new DomIdError("The first component cannot be a integer.");

                    if (!Number.isInteger(templateComponent))
                        throw new DomIdError("Components cannot be floats.");

                    if (templateComponent < 0)
                        throw new DomIdError("Components cannot be integers below 0.");

                    stringComponentList.push(templateComponent.toString());
                    break;
                default:
                    throw new DomIdError("All components must be an instance of string (or an unsigned integer, except the first component).");
            }
        });

        if (parameterListIndex !== parameterList.length)
            throw new DomIdError("There are more parameters than what is required by the template.");

        return stringComponentList.join(DomId.separator);
    }
    /**
     * @description Returns all IDs from the specified DOM ID and returns it.
     * @param {Array} template The DOM ID template.
     * @param {String} domId The DOM ID.
     * @returns {Array} Every requested component from the DOM ID.
     * @throws {TypeError} If the template is null, undefined or not an array.
     * @throws {TypeError} If the DOM ID is null, undefined or not an string.
     * @throws {DomIdError} If the number of components in the DOM ID doesn't match the number of components in the template.
     * @throws {DomIdError} If the first component (in the template) is a number.
     * @throws {DomIdError} If any component (in the template) is either a float or an integer below 0.
     * @throws {DomIdError} If a component is not an instance of string (or an integer equal to at least 0, except the first component).
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     * @see DomId.create()
     * @example DomId.getIdList(["a", "b", null, "c", null], "a_b_3_c_1343"); // returns ["3", "1343"]
     */
    static getIdList(template, domId) {
        checkRequiredArgument(template, "template", Array);
        checkRequiredString(domId, "domId", isString, "string");

        /**
         * @description DOM ID components, extracted from the specified DOM ID.
         * @type {Array}
         */
        const domIdcomponentList = domId.split(DomId.separator);

        if (domIdcomponentList.length !== template.length)
            throw new DomIdError(`Invalid DOM ID. The number of DOM ID components (${domIdcomponentList.length}) doesn't match the number of template components (${template.length}).`);

        /**
         * @description All IDs from the specified DOM ID.
         * @type {Array}
         */
        const idList = [];

        for (/**
             * @description The current template component index.
             * @type {Number}
             */
            let templateComponentIndex = 0;
            templateComponentIndex < domIdcomponentList.length;
            templateComponentIndex++) {
            /**
             * @description The current template component.
             * @type {undefined|String|Number|Boolean}
             */
            const templateComponent = template[templateComponentIndex];

            if (isNullOrUndefined(templateComponent))
                idList.push(domIdcomponentList[templateComponentIndex]);
            else
                switch (typeof templateComponent) {
                    case "string":
                        if (domIdcomponentList[templateComponentIndex] === templateComponent)
                            continue;

                        break;
                    case "number":
                        if (templateComponentIndex === 0)
                            throw new DomIdError("The first component cannot be a integer.");

                        if (!Number.isInteger(templateComponent))
                            throw new DomIdError("Components cannot be floats.");

                        if (templateComponent < 0)
                            throw new DomIdError("Components cannot be signed integers.");

                        if (domIdcomponentList[templateComponentIndex] === templateComponent.toString())
                            continue;

                        break;
                    case "boolean":
                        if (domIdcomponentList[templateComponentIndex] === templateComponent.toString())
                            continue;

                        break;
                    default:
                        throw new DomIdError("All components must be an instance of string (or an unsigned integer, except the first component).");
                }
        }

        return idList;
    }
    /**
     * @description Subtracts the last ID from the DOM ID and returns it.
     * @param {Array} template The DOM ID template.
     * @param {String} domId The DOM ID.
     * @returns {String} The last component from the DOM ID.
     * @throws {TypeError} If the template is null, undefined or not an array.
     * @throws {TypeError} If the DOM ID is null, undefined or not an string.
     * @throws {DomIdError} If the number of components in the DOM ID doesn't match the number of components in the template.
     * @throws {DomIdError} If the first component (in the DOM ID) is an ID.
     * @throws {DomIdError} If the first component (in the template) is a number.
     * @throws {DomIdError} If any component (in the template) is either a float or a signed integer.
     * @throws {DomIdError} If a component is not an instance of string (or an integer equal to at least 0, except the first component).
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     * @see DomId.create()
     * @see getLastNumberFromDomId()
     * @example DomId.getLastId(["project", "row", null], "project_row_32"); // returns "32".
     */
    static getLastId(template, domId) {
        checkRequiredArgument(template, "template", Array);
        checkRequiredString(domId, "domId", isString, "string");

        /**
         * @description DOM ID components, extracted from the specified DOM ID.
         * @type {Array}
         */
        const domIdcomponentList = domId.split(DomId.separator);

        if (domIdcomponentList.length !== template.length)
            throw new DomIdError(`Invalid DOM ID. The number of DOM ID components (${domIdcomponentList.length}) doesn't match the number of template components (${template.length}).`);

        for (/**
             * @description The current template component index.
             * @type {Number}
             */
            let templateComponentIndex = 0;
            templateComponentIndex < domIdcomponentList.length - 1;
            templateComponentIndex++) {
            /**
             * @description The current template component.
             * @type {undefined|String|Number|Boolean}
             */
            const templateComponent = template[templateComponentIndex];

            if (isNullOrUndefined(templateComponent))
                switch (templateComponentIndex) {
                    case domIdcomponentList.length - 2:
                        return domIdcomponentList.getLast();
                    case 0:
                        throw new DomIdError("The first component cannot be an ID.");
                    default:
                        continue;
                }
            else
                switch (typeof templateComponent) {
                    case "string":
                        if (domIdcomponentList[templateComponentIndex] === templateComponent)
                            continue;

                        break;
                    case "number":
                        if (templateComponentIndex === 0)
                            throw new DomIdError("The first component cannot be a number.");

                        if (!Number.isInteger(templateComponent))
                            throw new DomIdError("Components cannot be floats.");

                        if (templateComponent < 0)
                            throw new DomIdError("Components cannot be signed integers.");

                        if (domIdcomponentList[templateComponentIndex] === templateComponent.toString())
                            continue;

                        break;
                    default:
                        throw new DomIdError("All components must be an instance of string (or an unsigned integer, except the first component).");
                }
        }

        return domIdcomponentList.getLast();
    }
    /**
     * @description Subtracts the last numeric component from the DOM ID and returns it.
     * @param {Array} template The DOM ID template.
     * @param {String} domId The DOM ID.
     * @returns {Number} The last numeral component from the DOM ID.
     * @throws {TypeError} If the last ID is not a number.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     * @see DomId.create()
     */
    static getLastNumber(template, domId) {
        /**
         * @description The last ID (component) from the specified DOM ID.
         * @type {String}
         */
        const lastId = DomId.getLastId(template, domId);
        /**
         * @description Information about the attempt to parse the last ID (component) from the specified DOM ID to an unsigned integer.
         * @type {ParseAsIntegerResult}
         */
        const parseResult = Number.tryToParseAsUnsignedInteger(lastId);

        if (!parseResult.successful)
            throw new TypeError("The last ID is not a number.");

        return parseResult.value;
    }
    /**
     * @description Checks if the specified DOM ID matches the specified DOM ID template.
     * @param {Array} template The DOM ID template.
     * @param {String} domId The DOM ID.
     * @returns {Boolean} If the specified DOM ID matches the specified DOM ID template.
     * @throws {TypeError} If the specified DOM ID template is null, undefined or not an array.
     * @throws {TypeError} If the specified DOM ID is null, undefined or not a string.
     * @throws {DomIdError} If the first component is a number.
     * @throws {DomIdError} If a component is a float or a negative number.
     * @throws {DomIdError} If a component is neither a string or a number.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     * @example DomId.domIdMatchesTemplate(["a", "b", null, "c", null], "a-b-3-c-1343"); // returns true
     */
    static domIdMatchesTemplate(template, domId) {
        checkRequiredArgument(template, "template", Array);
        checkRequiredString(domId, "domId");

        /**
         * @description DOM ID components, extracted from the specified DOM ID.
         * @type {Array}
         */
        const domIdcomponentList = domId.split(DomId.separator);

        if (template.length !== domIdcomponentList.length)
            return false;

        for (/** @param {Number} templateComponentIndex The current template component index. */
            let templateComponentIndex = 0;
            templateComponentIndex < domIdcomponentList.length;
            templateComponentIndex++) {
            /**
             * @description The current template component.
             * @type {undefined|String|Number|Boolean}
             */
            const templateComponent = template[templateComponentIndex];

            if (isNullOrUndefined(templateComponent)) {
                if (!(domIdcomponentList[templateComponentIndex]))
                    return false;
            } else
                switch (typeof templateComponent) {
                    case "string":
                        if (domIdcomponentList[templateComponentIndex] === templateComponent)
                            continue;

                        return false;
                    case "number":
                        if (templateComponentIndex === 0)
                            throw new DomIdError("The first component cannot be an integer.");

                        if (!Number.isInteger(templateComponent))
                            throw new DomIdError("Components cannot be floats.");

                        if (templateComponent < 0)
                            throw new DomIdError("Components cannot be signed integers.");

                        if (domIdcomponentList[templateComponentIndex] === templateComponent.toString())
                            continue;

                        return false;
                    default:
                        throw new DomIdError("All components must be an instance of String.");
                }
        }

        return true;
    }
    /**
     * @description Checks if the specified components match the specified DOM ID.
     * @returns {Boolean} If the specified components match the specified DOM ID.
     * @throws {DomIdError} If less than 2 arguments are specified.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     * @example DomId.hasDomIdWithoutIds("a", "b", null, "c", null, "a_b_3_c_1343"); // returns true
     */
    static hasDomIdWithoutIds() {
        switch (arguments.length) {
            case 0:
                throw new DomIdError("No arguments specified.");
            case 1:
                throw new DomIdError("Argument missing. At least 2 are needed.");
        }

        /**
         * @description The DOM ID template.
         * @type {Array}
         */
        const template = Array.from(arguments);
        /**
         * @description The DOM ID.
         * @type {String}
         */
        const domId = template.pop();
        return DomId.domIdMatchesTemplate(template, domId);
    }
}
/**
 * @description Returns a reference to the element by its ID, constructed from the specified DOM ID.
 * @returns {Element} The matching element or null if there is none.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević
 * @see getElementByDomIdFromTemplate();
 * @example getElementByDomId("project", "row", 43);
 */
HTMLDocument.prototype.getElementByDomId = function () {
    return document.getElementById(DomId.create.apply(this, arguments));
};
/**
 * @description Returns a reference to the element by its ID, constructed from a template and all specified parameters.
 * @returns {Element} The matching element or null if there is none.
 * @throws {Error} If multiple elements have been found with the specified DOM ID.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević
 * @see getElementByDomId();
 * @example getElementByDomIdFromTemplate(["project", "row", null], 43);
 */
HTMLDocument.prototype.getElementByDomIdFromTemplate = function () {
    /**
     * @description The DOM ID of the element to find.
     * @type {String}
     */
    const domId = DomId.createFromTemplate.apply(this, arguments);
    /**
     * @description The element with the DOM ID.
     * @type {Element}
     */
    const element = document.getElementById(domId);

    if (isNullOrUndefined(element))
        throw new Error(createStringFromTemplate(COMMON_TEXT_LIST.multipleElementsFoundWithOneIdTemplate, domId));

    return element;
};
/**
 * @description Returns a reference to the required element by its ID, constructed from the specified DOM ID.
 * @returns {Element} The matching element
 * @throws {Error} If the required element is not found.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević
 */
HTMLDocument.prototype.getRequiredElementByDomId = function () {
    /**
     * @description The required element with the DOM ID.
     * @type {Element}
     */
    const element = this.getElementByDomId.apply(this, arguments);

    if (isNullOrUndefined(element))
        throw new Error("Required element not found.");

    return element;
};
/**
 * @description Returns a reference to the required element by its ID, constructed from a template and all specified parameters.
 * @returns {Element} The matching element
 * @throws {Error} If the required element is not found.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević
 */
HTMLDocument.prototype.getRequiredElementByDomIdFromTemplate = function () {
    /**
     * @description The required element with the DOM ID.
     * @type {Element}
     */
    const element = this.getElementByDomIdFromTemplate.apply(this, arguments);

    if (isNullOrUndefined(element))
        throw new Error("Required element not found.");

    return element;
};
/**
 * @description Remove a element by its ID, constructed from the specified DOM ID.
 * @returns {Element} The removed element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević
 * @example removeElementByDomId("project", "row", 43);
 */
HTMLDocument.prototype.removeElementByDomId = function () {
    return this.removeElementById(DomId.create.apply(this, arguments));
};
/**
 * @description Remove a element by its ID, constructed from the specified template and all specified parameters.
 * @returns {Element} The removed element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević
 * @example removeElementByDomId("project", "row", 43);
 */
HTMLDocument.prototype.removeElementByDomIdFromTemplate = function () {
    return this.removeElementById(DomId.createFromTemplate.apply(this, arguments));
};
/**
 * @description Removes elements whose ID match matches the specified DOM ID template.
 * @param {type} template The DOM ID template.
 * @returns {Array<Node>} The removed elements.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević
 */
HTMLDocument.prototype.removeElementsByDomIdTemplate = function (template) {
    /**
     * @description Elements that have been removed.
     * @type {Array}
     */
    const removedElementList = [];
    document.querySelectorAll("[id]").forEach(element => {
        if (DomId.domIdMatchesTemplate(template, element.id))
            removedElementList.push(removeNode(element) ?
                element :
                undefined);
    });
    return removedElementList;
};
/**
 * @description Deletes elements whose ID match matches the specified DOM ID template.
 * @param {type} template The DOM ID template.
 * @returns {Number} The number of how many elements were deleted.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević
 * @see HTMLDocument.prototype.removeElementsByDomIdTemplate().
 */
HTMLDocument.prototype.deleteElementsByDomIdTemplate = function (template) {
    /**
     * @description The number of how many elements were deleted.
     * @type {Number}
     */
    let numberOfDeletedElements = 0;
    document.querySelectorAll("[id]").forEach(element => {
        if (DomId.domIdMatchesTemplate(template, element.id) &&
                removeNode(element))
            numberOfDeletedElements++;
    });
    return numberOfDeletedElements;
};
/**
 * @description Checks if there is an element in the document with the specified ID.
 * @param {String} id The ID of the element to look for.
 * @returns {Boolean} If there is an element in the document with the specified ID.
 * @throws {Error} If multiple elements have been found with the specified ID.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević
 */
HTMLDocument.prototype.hasElementWithId = function (id) {
    return !isNullOrUndefined(document.getElementById(id));
};
/**
 * @description Checks if there is an element in the document with the specified template and all specified parameters.
 * @returns {Boolean} If there is an element in the document with the specified ID.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević
 */
HTMLDocument.prototype.hasElementWithDomId = function () {
    return document.getElementByDomId.apply(this, arguments) instanceof Element;
};
/**
 * @description Returns a reference to the required element by its ID.
 * @param {String} id The ID.
 * @returns {Element} The matching element
 * @throws {String} If the required element is not found.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević
 * @see getElementByDomId();
 */
HTMLDocument.prototype.getRequiredElementById = function (id) {
    /**
     * @description The element with the specified ID.
     * @type {Element}
     */
    const element = this.getElementById(id);

    if (isNullOrUndefined(element))
        throw new Error("Required element not found.");

    return element;
};
/**
 * @description Remove a element by its ID.
 * @param {String} id The unique ID of the element.
 * @returns {Element} The removed element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević
 */
HTMLDocument.prototype.removeElementById = function (id) {
    /**
     * @description The element with the specified ID.
     * @type {Element}
     */
    const element = this.getElementById(id);

    return isNullOrUndefined(element) ?
        null :
        isNullOrUndefined(element.parentNode) ?
        null :
        element.parentNode.removeChild(element);
};
/**
 * @description Returns a reference to the element by its ID, constructed from the specified DOM ID.
 * @returns {Element} The matching element or null if there is none.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević
 */
HTMLElement.prototype.getElementByDomId = function () {
    return this.getElementById(DomId.create.apply(this, arguments));
};
/**
 * @description Returns a reference to the element by its ID, constructed from the specified template and all specified parameters.
 * @returns {Element} The matching element or null if there is none.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević
 */
HTMLElement.prototype.getElementByDomIdFromTemplate = function () {
    return this.getElementById(DomId.createFromTemplate.apply(this, arguments));
};
/**
 * @description Returns a reference to the required element by its ID, constructed from the specified DOM ID.
 * @returns {Element} The matching element
 * @throws {Error} If the required element is not found.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević
 * @see getElementByDomId();
 */
HTMLElement.prototype.getRequiredElementByDomId = function () {
    /**
     * @description The required element with the specified ID.
     * @type {Element}
     */
    const element = this.getElementByDomId.apply(this, arguments);

    if (isNullOrUndefined(element))
        throw new Error("Required element not found.");

    return element;
};
/**
 * @description Returns a reference to the element by its ID.
 * @param {String} id The ID of the element to look for.
 * @returns {Element} The matching element or null if there is none.
 * @throws {String} If the ID has not been specified.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević
 */
HTMLElement.prototype.getElementById = function (id) {
    return this.querySelectorOnlyOne("\u0023" + checkRequiredString(id, "id"));
};
/**
 * @description Returns a reference to the required element by its ID.
 * @param {String} id The ID.
 * @returns {Element} The matching element
 * @throws {Error} If the required element is not found.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević
 * @see getElementByDomId();
 */
HTMLElement.prototype.getRequiredElementById = function (id) {
    /**
     * @description The required element with the specified ID.
     * @type {Element}
     */
    const element = this.getElementById(id);

    if (isNullOrUndefined(element))
        throw new Error("Required element not found.");

    return element;
};
//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="DOM">
/**
 * @description Returns an array of child nodes of the specified node type.
 * @param {Number} nodeType The integer value which specifies the type of the child nodes to find.
 * @returns {Array} An array of child nodes of the specified nod type.
 * @throws {Error} If the specified node type is unrecognized.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević
 * @see https://developer.mozilla.org/en/docs/Web/API/Node/nodeType
 */
HTMLElement.prototype.getNodesByNodeType = function (nodeType) {
    checkRequiredNumber(nodeType, "nodeType");

    switch (nodeType) {
        case Node.ELEMENT_NODE:
        case Node.TEXT_NODE:
        case Node.CDATA_SECTION_NODE:
        case Node.PROCESSING_INSTRUCTION_NODE:
        case Node.COMMENT_NODE:
        case Node.DOCUMENT_NODE:
        case Node.DOCUMENT_TYPE_NODE:
        case Node.DOCUMENT_FRAGMENT_NODE:
            break;
        default:
            throw new Error(`The specified node type (${nodeType}) is unrecognized.`);
    }

    /**
     * @description A list of child nodes of this HTML element that are of the specified node type.
     * @type {Array}
     */
    let nodeList = [];
    this.childNodes.loop(/** @param {Node} childNode The current child node of this HTML element. */ childNode => {
        if (childNode.nodeType === nodeType)
            nodeList.push(childNode);
    });
    return nodeList;
};
/**
 * @description Removes child nodes of the specified node type.
 * @param {Number} nodeType The integer value which specifies the type of the child nodes to remove.
 * @returns {Number} The number of child nodes that have been removed.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević
 */
HTMLElement.prototype.removeNodesByNodeType = function (nodeType) {
    return removeNodes(this.getNodesByNodeType(nodeType));
};
/**
 * @description Checks if this element has child elements.
 * @returns {Boolean} If this element has child elements.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Element.prototype.hasChildren = function () {
    return this.childElementCount > 0;
};
/**
 * @description Removes all child elements from the specified node.
 * @returns {Boolean} True if any child elements have been removed.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Element.prototype.removeChildren = function () {
    if (!this.hasChildren())
        return false;

    do
        this.removeChild(this.firstElementChild);
    while (this.hasChildren());

    return true;
};
/**
 * @description Selects the children of this HTML element with the specified class name.
 * @param {String} className The class name (can only be one class name).
 * @returns {HTMLElement[]} A list of children of this HTML element with the specified class name.
 * @throws {TypeError} If the class name is null, undefined or not a string.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.prototype.selectChildrenByClassName = function (className) {
    checkRequiredString(className, "className");

    /**
     * @description The selected children.
     * @type {Array}
     */
    const selectedChildren = [];
    this.children.forEach(child => {
        if (child.classList.contains(className))
            selectedChildren.push(child);
    });
    return selectedChildren;
};
/**
 * @description Selects only one child of this HTML element with the specified class name, if there is one.
 * @param {String} className The class name (can only be one class name).
 * @returns {undefined|HTMLElement} One child of this HTML element with the specified class name, undefined if there is none.
 * @throws {Error} If more than one child with the specified class name is found.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.prototype.selectOnlyOneChildByClassName = function (className) {
    /**
     * @description The children of this HTML element with the specified class name.
     * @type {Array}
     */
    const selectedChildren = this.selectChildrenByClassName(className);

    switch (selectedChildren.length) {
        case 0:
            return null;
        case 1:
            return selectedChildren[0];
        default:
            throw new Error(`Only one child was expected but ${selectedChildren.length} children were found.`);
    }
};
/**
 * @description Selects the children of this HTML element with the specified tag name.
 * @param {String} tagName The tag name.
 * @returns {HTMLElement[]} A list of children of this HTML element with the specified tag name.
 * @throws {TypeError} If the tag name is null, undefined or not a string.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.prototype.selectChildrenByTagName = function (tagName) {
    checkRequiredString(tagName, "tagName");

    /**
     * @description A list of selected children.
     * @type {Array}
     */
    const selectedChildList = [];
    tagName = tagName.toUpperCase();
    this.children.forEach(child => {
        if (child.tagName === tagName)
            selectedChildList.push(child);
    });
    return selectedChildList;
};
/**
 * @description Selects only one child of this HTML element with the specified tag name, if there is one.
 * @param {type} tagName
 * @returns {undefined|HTMLElement} One child of this HTML element with the specified tag name, undefined if there is none.
 * @public
 * @throws {Error} If more than one child with the specified tag name is found.
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.prototype.selectOnlyOneChildByTagName = function (tagName) {
    /**
     * @description The children of this HTML element with the specified tag name.
     * @type {Array}
     */
    const selectedChildren = this.selectChildrenByTagName(tagName);

    switch (selectedChildren.length) {
        case 0:
            return null;
        case 1:
            return selectedChildren[0];
        default:
            throw new Error(`Only one child was expected but ${selectedChildren.length} children were found.`);
    }
};
/**
 * @description Returns the first element that is a descendant of the element on which it is invoked that matches the specified group of selectors. If more than one element is returned an exception
 * will be thrown.
 * @param {String} elementName A group of selectors to match the descendant elements of the Element baseElement against; this must be valid CSS syntax, or a SyntaxError exception will occur. The first
 * element found which matches this group of selectors is returned.
 * @returns {Element} The first descendant element of baseElement which matches the specified group of selectors. The entire hierarchy of elements is considered when matching, including those outside
 * the set of elements including baseElement and its descendants; in other words, selectors is first applied to the whole document, not the baseElement, to generate an initial list of potential
 * elements. The resulting elements are then examined to see if they are descendants of baseElement. The first match of those remaining elements is returned by the querySelector() method. If more
 * than one element is returned an exception will be thrown.
 * @throws {Error} If more than one element is returned.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.prototype.querySelectorOnlyOne = function (elementName) {
    /**
     * @description A node list of the document's elements that match the specified group of selectors.
     * @type {NodeList}
     */
    const elementList = this.querySelectorAll(elementName);

    switch (elementList.length) {
        case 0:
            return null;
        case 1:
            return elementList[0];
        default:
            throw new Error(`Only one element was expected to be returned by the query selector but ${elementList.length} elements in total were returned.`);
    }
};
/**
 * @description Returns the first element that is a descendant of the element on which it is invoked that matches the specified group of selectors. If more than one element is returned an exception
 * will be thrown.
 * @param {String} elementName A group of selectors to match the descendant elements of the Element baseElement against; this must be valid CSS syntax, or a SyntaxError exception will occur. The first
 * element found which matches this group of selectors is returned.
 * @returns {Element} The first descendant element of baseElement which matches the specified group of selectors. The entire hierarchy of elements is considered when matching, including those outside
 * the set of elements including baseElement and its descendants; in other words, selectors is first applied to the whole document, not the baseElement, to generate an initial list of potential
 * elements. The resulting elements are then examined to see if they are descendants of baseElement. The first match of those remaining elements is returned by the querySelector() method. If more
 * than one element is returned an exception will be thrown.
 * @throws {Error} If more than one element is returned.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLDocument.prototype.querySelectorOnlyOne = function (elementName) {
    /**
     * @description A node list of the document's elements that match the specified group of selectors.
     * @type {NodeList}
     */
    const elementList = this.querySelectorAll(elementName);

    switch (elementList.length) {
        case 0:
            return null;
        case 1:
            return elementList[0];
        default:
            throw new Error(`Only one element was expected to be returned by the query selector but ${elementList.length} elements in total were returned.`);
    }
};
/**
 * @description Creates a CSS element with the specified attribute name and (optionally a) value (for use in query selectors).
 * @param {String} name The name.
 * @param {String|Object} [value] The value. If the value is not a string it will be converted to a string.
 * @returns {String} A CSS element with the specified attribute name and (optionally a) value.
 * @throws {TypeError} If the name is null, undefined or not a string.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function createQueryAttribute(name, value) {
    checkRequiredString(name, "name");
    return isNullOrUndefined(value) ?
        `[${name}]` :
        `[${name}="${(isString(value) ?
            value :
            value.toString()).replace("\u0022", "\u005c\u0022")}]"`;
}
/**
 * @description Creates a CSS element with the specified dataset attribute name and (optionally a) value (for use in query selectors).
 * @param {String} name The name.
 * @param {String|Object} [value] The value. If the value is not a string it will be converted to a string.
 * @returns {String} A CSS element with the specified attribute name and (optionally a) value.
 * @throws {TypeError} If the name is null, undefined or not a string.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function createQueryDataAttribute(name, value) {
    checkRequiredString(name, "name");
    return createQueryAttribute("data-" + name, value);
}
/**
 * @description Creates a CSS element with the attribute name "date-name" and (optionally) a value (for use in query selectors that use use the dataset property "name" on the HTMLElement interface).
 * @param {String|Object} [value] The value.
 * @returns {String} A CSS element with the attribute name "date-name" and (optionally) a value (for use in query selectors that use use the dataset property "name" on the HTMLElement interface).
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function createQueryDataNameAttribute(value) {
    return createQueryDataAttribute("name", value);
}
/**
 * @description Checks if this element has a body parent.
 * @returns {Boolean} If this element has a body parent.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.prototype.hasBodyParent = function () {
    for (/** @param {Element} parentElement The parent element. */
        let parentElement = this.parentElement;
        !!parentElement;
        parentElement = parentElement.parentElement)
        if (isNullOrUndefined(parentElement))
            break;
        else if (parentElement instanceof HTMLBodyElement)
            return true;

    return false;
};
/**
 * @description Removes all child nodes from the specified node.
 * @returns {Boolean} True if any child nodes have been removed.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Node.prototype.removeChildNodes = function () {
    if (!this.hasChildNodes())
        return false;

    do
        this.removeChild(this.firstChild);
    while (this.hasChildNodes());

    return true;
};
/**
 * @description Appends the specified child nodes to this node.
 * @param {...Node} nodeList The nodes.
 * @returns {undefined}
 */
Node.prototype.appendChildNodes = function (...nodeList) {
    for (/** @param {Number} nodeIndex The current node index. */
        let nodeIndex = 0;
        nodeIndex < nodeList.length;
        nodeIndex++)
        this.appendChild(nodeList[nodeIndex]);
};
/**
 * @description Executes the provided function once for each item in this collection. This loop is breakable.
 * @param {LoopCallback} callback Function that produces an item of this collection.
 * @param {Number} [startIndex] The start index.
 * @param {Number} [endIndex] The end index.
 * @param {Number} [step] The number by which the counter of the loop is incremented each time.
 * @param {Object} [scope] The value of <code>this</code> provided for the callback function.
 * @returns {Boolean} If the loop has been executed (and at least one item has been processed) and has not been broken.
 * @throws {TypeError} If the provided function returns a value that is not a boolean.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLCollection.prototype.loop = function (callback, startIndex, endIndex, step, scope) {
    return loopThroughList(this, callback, startIndex, endIndex, step, scope);
};
/**
 * @description Executes the provided function once for each item in this collection. This loop is unbreakable.
 * @param {ForEachCallback} callback Function that produces an item of this collection.
 * @param {Number} [startIndex] The start index.
 * @param {Number} [endIndex] The end index.
 * @param {Number} [step] The number by which the counter of the loop is incremented each time.
 * @param {Object} [scope] The value of <code>this</code> provided for the callback function.
 * @returns {undefined}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLCollection.prototype.forEach = function (callback, scope, startIndex, endIndex, step) {
    return forEachInList(this, callback, startIndex, endIndex, step, scope);
};
/**
 * @description Executes the provided function once for each item in this list. This loop is breakable.
 * @param {LoopCallback} callback Function that produces an item of this list.
 * @param {Number} [startIndex] The start index.
 * @param {Number} [endIndex] The end index.
 * @param {Number} [step] The number by which the counter of the loop is incremented each time.
 * @param {Object} [scope] The value of <code>this</code> provided for the callback function.
 * @returns {Boolean} If the loop has been executed (and at least one item has been processed) and has not been broken.
 * @throws {TypeError} If the provided function returns a value that is not a boolean.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
NodeList.prototype.loop = function (callback, scope, startIndex, endIndex, step) {
    return loopThroughList(this, callback, startIndex, endIndex, step, scope);
};
/**
 * @description Executes the provided function once for each item in this list. This loop is unbreakable.
 * @param {ForEachCallback} callback Function that produces an item of this list.
 * @param {Number} [startIndex] The start index.
 * @param {Number} [endIndex] The end index.
 * @param {Number} [step] The number by which the counter of the loop is incremented each time.
 * @param {Object} [scope] The value of <code>this</code> provided for the callback function.
 * @returns {undefined}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
NodeList.prototype.forEach = function (callback, scope, startIndex, endIndex, step) {
    return forEachInList(this, callback, startIndex, endIndex, step, scope);
};
/**
 * @description Checks if the NodeList is empty or not.
 * @returns {Boolean} True if the NodeList contains no elements.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
NodeList.prototype.isEmpty = function () {
    return this.length === 0;
};
/**
 * @description Removes all nodes from this list.
 * @returns {undefined}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLCollection.prototype.clear = function () {
    while (!this.isEmpty())
        removeNode(this[0]);
};
/**
 * @description Returns the first node from this node list.
 * @returns {Node} The first node from this node list.
 * @throws {ListError} If this node list is empty.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
NodeList.prototype.getFirst = function () {
    if (this.isEmpty())
        throw new ListError("This node list is empty.");

    return this[0];
};
/**
 * @description Returns the last node from this node list.
 * @returns {Node} The last node from this node list.
 * @throws {ListError} If this node list is empty.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
NodeList.prototype.getLast = function () {
    if (this.isEmpty())
        throw new ListError("This node list is empty.");

    return this[this.length - 1];
};
/**
 * @description Removes all nodes from this list.
 * @returns {undefined}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
NodeList.prototype.clear = function () {
    while (!this.isEmpty())
        removeNode(this.getFirst());
};
/**
 * @description Appends an instance of Text to the end of the list of children.
 * @param {String|Text|Number} text The string or Text to append.
 * @param {Boolean} [appendWhiteSpace=true] If a white space only string should be appended. The default behavior is to append a white space string.
 * @returns {Text} The Text node that been appended or undefined if the specified text is null or undefined.
 * @throws {TypeError} If argument "appendWhiteSpace" is not a boolean.
 * @throws {TypeError} If the specified text is not a string, number or an instance of Text.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.prototype.appendText = function (text, appendWhiteSpace) {
    if (isNullOrUndefined(text))
        return undefined;

    if (isNullOrUndefined(appendWhiteSpace))
        appendWhiteSpace = true;
    else if (!isBoolean(appendWhiteSpace))
        throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "appendWhiteSpace", "boolean"));

    if (text instanceof Text)
        return !appendWhiteSpace &&
            text.wholeText.isWhiteSpace() ?
                undefined :
                this.appendChild(text);

    switch (typeof text) {
        case "string":
            return !appendWhiteSpace &&
                    text.isWhiteSpace() ?
                        undefined :
                        this.appendChild(document.createTextNode(text));
        case "number":
            return this.appendChild(document.createTextNode(text.toString()));
        default:
            throw new Error(COMMON_TEXT_LIST.invalidArgument + quoteString("text") + " is not a string, number or an instance of Text.");
    }
};
/**
 * @description Returns the element with the specified tag name. If more than one child element is found, an exception is thrown.
 * @param {String} name The name of the tag.
 * @returns {HTMLElement} The element with the specified name (or undefined if none is found).
 * @throws {Error} If more than one child element with the specified tag name is found.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.prototype.getElementByTagName = function (name) {
    const elementList = this.getElementsByTagName(name);

    if (elementList.isEmpty())
        return undefined;

    if (elementList > 0)
        throw new Error("More than one element found.");

    return elementList.getFirst();
};
/**
 * @description Inserts the specified node after the reference node as a child of the current node.
 * @param {Node} node The node to insert.
 * @param {Node} referenceNode The reference node.
 * @returns {Node} The inserted node.
 * @throws {Error} If the parent element of the reference noe is different from this element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see Node.insertBefore()
 */
HTMLElement.prototype.insertAfter = function (node, referenceNode) {
    if (isNullOrUndefined(node))
        return undefined;

    checkRequiredArgument(referenceNode, "referenceNode", HTMLElement);

    if (this !== referenceNode.parentElement)
        throw new Error("The parent element of the reference node is different from this element.");

    return this.insertBefore(node, referenceNode.nextSibling);
};
/**
 * @description Returns the first and only text node that can be found in an element or in one of its child elements. The text node must be present inside the element and cannot have siblings.
 * @returns {Text} The first or only text node that has been found.
 * @throws {Error} If a text node was expected to be found but either no text node or multiple nodes have been found.
 * @throws {Error} If multiple child elements have been found (at the same level).
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.prototype.getText = function () {
    // TODO Fix Closure Compiler warning: "[JSC_UNREACHABLE_CODE] unreachable code let element = this; ; element = element.children.getFirst())"
    for (/** @description The current element. @type {HTMLElement} */
        let element = this; ;
        element = element.children.getFirst())
        switch (element.childElementCount) {
            case 0:
                if (element.childNodes.isEmpty())
                    throw new Error("Text node was expected but no node was found.");

                if (element.childNodes.length > 1)
                    throw new Error("Text node was expected but mulitple nodes have been found.");

                /**
                 * @description The first of the element's child nodes.
                 * @type {Node}
                 */
                const node = element.childNodes.getFirst();

                if (!(node instanceof Text) ||
                        node.nodeType !== Node.TEXT_NODE)
                    throw new Error("Text node was expected but a node that is not a text node has been found.");

                return node;
            default:
                throw new Error("Multiple child elements have been found.");
        }
};
/**
 * @description Returns the first and only number from a text node that can be found in an element or in one of its child elements. The text node must be present inside the element and cannot have
 * siblings.
 * @param {Number} radix An integer between 2 and 36 that represents the radix of the Text node that is to be converted to a number.
 * @returns {Number} The first or only number from a text node.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see getText();
 */
HTMLElement.prototype.getNumber = function (radix) {
    return parseInt(this.getText().wholeText, radix);
};
/**
 * @description Removes all child elements with the specified tag name.
 * @param {String} name The name of the elements. The special string "*" represents all elements.
 * @returns {undefined}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.prototype.removeElementsByTagName = function (name) {
    return removeNodes(this.getElementsByTagName(name));
};
/**
 * @description Returns references to elements by their ID, constructed from the specified DOM ID without any IDs.
 * @returns {undefined|Element} The matching elements or undefined if there are none.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see getElementByDomIdWithoutIds();
 * @example getElementsByDomIdWithoutIds("transaction", "type", undefined);
 */
HTMLElement.prototype.getElementsByDomIdWithoutIds = function () {
    /**
     * @description References to elements by their ID, constructed from the specified DOM ID without any IDs.
     * @type {Array}
     */
    const elementsByDomId = [];
    /**
     * @description The DOM ID component list
     * @type {Array}
     */
    const componentList = Array.from(arguments);

    this.querySelectorAll("[id]").forEach(element => {
        if (DomId.hasDomIdWithoutIds(componentList, element.id))
            elementsByDomId.push(element);
    });
    return elementsByDomId;
};
/**
 * @description Returns a reference to the element by its ID, constructed from the specified DOM ID without any IDs.
 * @returns {undefined|Element} The matching element or undefined if there is none.
 * @throws {Error} If more than one matching element has been found.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see getElementsByDomIdWithoutIds();
 */
HTMLElement.prototype.getElementByDomIdWithoutIds = function () {
    /**
     * @description The DOM ID component list
     * @type {Array}
     */
    const componentList = Array.from(arguments);
    /**
     * @description A node list of the document's elements that match the specified group of selectors.
     * @type {NodeList}
     */
    const elementList = this.querySelectorAll("[id]");

    if (elementList.isEmpty())
        return undefined;

    /**
     * @description A reference to the element by the specified DOM ID without ids.
     * @type {undefined|Element}
     */
    let elementByDomId;
    elementList.forEach(element => {
        if (DomId.hasDomIdWithoutIds(componentList, element.id)) {
            if (!elementByDomId)
                elementByDomId = element;
            else
                throw new Error("More than one element found.");
        }
    });
    return elementByDomId;
};
/**
 * @description Returns a reference to the child element by its ID, constructed from the specified DOM ID.
 * @returns {Element} The matching element or null if there is none.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.prototype.getChildElementByDomId = function () {
    return this.querySelectorOnlyOne(`[id=${DomId.create.apply(this, arguments)}]`);
};
/**
 * @description Checks if this HTMLCollection is empty or not.
 * @returns {Boolean} True if this HTMLCollection contains no elements.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLCollection.prototype.isEmpty = function () {
    return this.length === 0;
};
/**
 * @description Returns the first element from this HTML collection.
 * @returns {Element} The first element from this HTML collection.
 * @throws {ListError} If this HTML collection is empty.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLCollection.prototype.getFirst = function () {
    if (this.isEmpty())
        throw new ListError("This HTML collection is empty.");

    return this[0];
};
/**
 * @description Returns the last element from this HTML collection.
 * @returns {Element} The last element from this HTML collection.
 * @throws {ListError} If this HTML collection is empty.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLCollection.prototype.getLast = function () {
    if (this.isEmpty())
        throw new ListError("This HTML collection is empty.");

    return this[this.length - 1];
};
/**
 * @description Removes the specified node from the document.
 * @param {Node} node The node to remove.
 * @param {Boolean} [removeComponents=true] If components within this HTML element (if it's an HTML element) should be removed.
 * @returns {Boolean} True if the node has been removed (a node can only be removed if it has a parent node and is not null or undefined).
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function removeNode(node, removeComponents) {
    if (isNullOrUndefined(node))
        return false;

    if (!(node instanceof Node))
        throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "removeComponents", "boolean"));

    if (isNullOrUndefined(removeComponents))
        removeComponents = true;
    else if (!isBoolean(removeComponents))
        throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "removeComponents", "boolean"));

    if (removeComponents &&
            node instanceof HTMLElement) {
        if ("componentId" in node.dataset) {
            removeComponent(node.dataset.componentId);
            return true;
        }

        removeNodes(node.querySelectorAll("[data-component-id]"));
    }

    /**
     * @description If the node can be removed.
     * @type {Boolean}
     */
    const nodeCanBeRemoved = !!node.parentNode;

    if (nodeCanBeRemoved)
        node.parentNode.removeChild(node);

    return nodeCanBeRemoved;
}
/**
 * @description Removes the specified nodes from the document.
 * @param {Array|HTMLCollection|NodeList} nodes The nodes to remove.
 * @param {Boolean} [removeComponents=true] If components within HTML elements (if it's an HTML element) should be removed.
 * @returns {undefined|Array} An array of nodes that couldn't be removed.
 * @throws {TypeError} If nodes is not an instance of Array, HTMLCollection or NodeList.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function removeNodes(nodes, removeComponents) {
    if (isNullOrUndefined(nodes))
        return undefined;

    if (!(nodes instanceof Array ||
            nodes instanceof HTMLCollection ||
            nodes instanceof NodeList))
        throw new TypeError(COMMON_TEXT_LIST.invalidArgument + quoteString("elements") + " is expected to be either an instance of Array, HTMLCollection or NodeList.");

    if (nodes.isEmpty())
        return undefined;

    /**
     * @description All the nodes that couldn't be removed.
     * @type {Array}
     */
    const unremovedNodes = [];
    nodes.forEach(node => {
        if (!removeNode(node, removeComponents))
            unremovedNodes.push(node);
    });
    return unremovedNodes;
}
/**
 * @description Removes HTML elements with the specified component ID.
 * @param {String} componentId The component ID.
 * @returns {undefined}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function removeComponent(componentId) {
    document.querySelectorAll(createQueryDataAttribute("component-id", ClientId.check(componentId))).forEach(node => node.parentNode.removeChild(node));
}
/**
 * @description The callback function to execute to check if an element attribute value is approved.
 * @callback ElementAttributeValueChecker
 * @param {Object} value The value, which is never null or undefined.
 * @returns {Boolean} If the element attribute value is approved.
 * @public
 * @since
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * @description Sets the required attribute. Both the name and the value must be set (and not null or undefined), otherwise an exception will be thrown.
 * @param {String} name The name.
 * @param {Object} value The value.
 * @param {ElementAttributeValueChecker} [checker] The checker.
 * @returns {undefined}
 * @throws {TypeError} If the name is null, undefined or not a string.
 * @throws {TypeError} If the value is null or undefined.
 * @throws {TypeError} If the checker is not null or undefined and not a function either.
 * @throws {String} If the checker didn't return a boolean value.
 * @throws {String} If the checker didn't approve of the value.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Element.prototype.setRequiredAttribute = function (name, value, checker) {
    checkRequiredString(name, "name");

    if (isNullOrUndefined(value))
        throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentCannotBeNullorUndefinedTemplate, "value"));

    if (!isNullOrUndefined(checker)) {
        if (!isFunction(checker))
            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "checker", COMMON_DATA_TYPE_LIST.function));

        /**
         * @description If the value is approved.
         * @type {Boolean}
         */
        const approved = checker(value);

        if (!isBoolean(approved))
            throw `Function ${quoteString("checker")} didn't return a boolean value.`;

        if (!approved)
            throw `Function ${quoteString("checker")} didn't approved of the specified value.`;
    }

    this.setAttribute(name, value);
};
/**
 * @description Sets the attribute only if both the specified name and value are both neither null or undefined and - if set - the specified checker approves the value.
 * @param {String} name The name.
 * @param {Object} value The value.
 * @param {ElementAttributeValueChecker} [checker] The checker.
 * @returns {undefined}
 * @throws {TypeError} If the name is not null or undefined and not a string either.
 * @throws {TypeError} If the checker is not null or undefined and not a function either.
 * @throws {String} If the checker didn't return a boolean value.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Element.prototype.setOptionalAttribute = function (name, value, checker) {
    checkRequiredString(name, "name");

    if (isNullOrUndefined(value))
        return;

    if (!isNullOrUndefined(checker)) {
        if (!isFunction(checker))
            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "checker", COMMON_DATA_TYPE_LIST.function));

        /**
         * If the value is approved.
         * @type {Boolean}
         */
        const approved = checker(value);

        if (!isBoolean(approved))
            throw `Function ${quoteString("checker")} didn't return a boolean value.`;

        if (!approved)
            return;
    }

    this.setAttribute(name, value);
};
/**
 * @description Creates a new instance of HTMLElement, using the specified tag name and appends the HTML element to the specified parent.
 * @param {String} tagName The tag name.
 * @param {HTMLElement|String|Boolean|Tab} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used as the id of the
 * parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appeneded to any node. If the parent is an instance of Tab
 * the element will be appended to the tab body.
 * @param {String} [id] The ID.
 * @returns {HTMLElement} A new instance of HTMLElement.
 * @throws {Error} If the specified parent is unknown.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.createNew = function (tagName, parent, id) {
    /**
     * @description The new element.
     * @type {Element}
     */
    const element = document.createElement(tagName);
    element.setOptionalAttribute("id", id, id => isString(id) &&
            !id.isWhiteSpace() &&
            id.length > 0 &&
            !document.hasElementWithId(id));

    if (isBoolean(parent)) {
        if (parent) {
            document.body.appendChild(element);
            return document.body;
        }
    } else if (isNullOrUndefined(parent))
        document.body.appendChild(element);
    else if (isString(parent))
        document.getRequiredElementById(parent).appendChild(element);
    else if (parent instanceof HTMLElement)
        parent.appendChild(element);
    else if (parent instanceof Tab)
        parent.body.appendChild(element);
    else
        throw new Error("The specified parent is unknown.");

    return element;
};
/**
 * @description A list of HTML input element types.
 * @type {Object}
 * @readonly
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/the-input-element.html#attr-input-type
 */
const HTML_INPUT_ELEMENT_TYPE = Object.freeze({
    button: "button",
    checkbox: "checkbox",
    color: "color",
    date: "date",
    dateAndTime: "datetime",
    email: "email",
    fileUpload: "file",
    hidden: "hidden",
    imageButton: "image",
    localeDateAndTime: "datetime-local",
    month: "month",
    number: "number",
    password: "password",
    radioButton: "radio",
    range: "range",
    resetButton: "reset",
    search: "search",
    submitButton: "submit",
    telephone: "tel",
    text: "text",
    time: "time",
    url: "url",
    week: "week"
});
/**
 * @description Creates a new instance of HTMLInputElement, using the specified id and appends the HTML element to the specified parent.
 * @param {String} type The input type.
 * @param {HTMLElement|String|Boolean|Tab} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used as the id of the
 * parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appeneded to any node. If the parent is an instance of Tab
 * the element will be appended to the tab body.
 * @param {String} [id] The ID.
 * @returns {HTMLInputElement} A new instance of HTMLInputElement.
 * @throws {Error} If the specified input type is invalid.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.createNewInput = function (type, parent, id) {
    if (!HTML_INPUT_ELEMENT_TYPE.hasValue(type))
        throw new Error("The specified input type is invalid.");

    /**
     * The new input element.
     * @type {HTMLInputElement}
     */
    const inputElement = HTMLElement.createNew("input", parent, id);
    inputElement.type = type;
    return inputElement;
};
/**
 * @description Checks if this NamedNodeMap is empty or not.
 * @returns {Boolean} True if this NamedNodeMap contains no attributes.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
NamedNodeMap.prototype.isEmpty = function () {
    return this.length === 0;
};
/**
 * @description Returns the first attribute from this named node map.
 * @returns {Attr} The first attribute from this named node map.
 * @throws {ListError} If this named node map is empty.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
NamedNodeMap.prototype.getFirst = function () {
    if (this.isEmpty())
        throw new ListError("This named node map is empty.");

    return this[0];
};
/**
 * @description Returns the last attribute from this named node map.
 * @returns {Attr} The first attribute from this named node map.
 * @throws {ListError} If this named node map is empty.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
NamedNodeMap.prototype.getLast = function () {
    if (this.isEmpty())
        throw new ListError("This named node map is empty.");

    return this[this.length - 1];
};
/**
 * @description Removes all attributes from this element.
 * @returns {undefined}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.prototype.removeAllAttributes = function () {
    while (!this.attributes.isEmpty())
        this.removeAttributeNode(this.attributes.getFirst());
};
/**
 * @description Creates a new HTML form element.
 * @param {HTMLElement|String|Boolean|Tab} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used as the id of the
 * parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appeneded to any node. If the parent is an instance of Tab
 * the element will be appended to the tab body.
 * @param {Boolean} [autoComplete=false] Indicates whether input elements can by default have their values automatically completed by the browser.
 * @returns {HTMLFormElement} A new HTML form element.
 * @throws {TypeError} If "autoComplete" is not a boolean.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/forms.html#the-form-element
 */
function createFormElement(parent, autoComplete = false) {
    /**
     * @description A new form element.
     * @type {HTMLFormElement}
     */
    const formElement = HTMLElement.createNew("form", parent);

    if (!isBoolean(autoComplete))
        throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "autoComplete", "boolean"));

    formElement.autocomplete = autoComplete ?
        "on" :
        "off";

    /*
     * Make the "autocomplete" property of each input in a form the same as the "autocomplete" property of the form. For more information see:
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#Google_Chrome_notes
     */
    new MutationObserver(mutationList =>
        mutationList.forEach(/** @param {MutationRecord} mutationRecord */ mutationRecord => {
            for (/** @param {Number} The current added-node index. */
                let addedNodeIndex = 0;
                addedNodeIndex < mutationRecord.addedNodes.length;
                addedNodeIndex++) {
                /**
                 * @description An added node.
                 * @type {Node}
                 */
                const addedNode = mutationRecord.addedNodes[addedNodeIndex];

                if (addedNode instanceof HTMLInputElement)
                    addedNode.autocomplete = formElement.autocomplete;
            }
        })
    ).observe(formElement, {
        childList: true
    });
    return formElement;
}
/**
 * @description Creates a new HTML division element.
 * @param {HTMLElement|String|Boolean|Tab} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used as the id of the
 * parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appeneded to any node. If the parent is an instance of Tab
 * the element will be appended to the tab body.
 * @param {String} [id] The ID of the element.
 * @returns {HTMLDivElement} A new HTML division element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/grouping-content.html#the-div-element
 */
function createDivisionElement(parent, id) {
    return HTMLElement.createNew("div", parent, id);
}
/**
 * @description Creates a new HTML line break element.
 * @param {HTMLElement|String|Boolean|Tab} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used as the id of the
 * parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appeneded to any node. If the parent is an instance of Tab
 * the element will be appended to the tab body.
 * @returns {HTMLBRElement} A new HTML line break element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/text-level-semantics.html#the-br-element
 */
function createBreakElement(parent) {
    return HTMLElement.createNew("br", parent);
}
/**
 * @description Creates a new HTML paragraph element.
 * @param {HTMLElement|String|Boolean|Tab} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used as the id of the
 * parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appeneded to any node. If the parent is an instance of Tab
 * the element will be appended to the tab body.
 * @param {String|Text} [text] The text to appened to the element.
 * @param {String} [id] The ID of the element.
 * @returns {HTMLParagraphElement} A new HTML paragraph element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/grouping-content.html#the-p-element
 */
function createParagraphElement(parent, text, id) {
    /**
     * @description A new paragraph element.
     * @type {HTMLParagraphElement}
     */
    const paragraphElement = HTMLElement.createNew("p", parent, id);
    paragraphElement.appendText(text, false);
    return paragraphElement;
}
/**
 * @description Creates a new HTML label element.
 * @param {HTMLElement|String|Boolean|Tab} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used as the id of the
 * parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appeneded to any node. If the parent is an instance of Tab
 * the element will be appended to the tab body.
 * @param {String|Text} [text] The text to appened to the element.
 * @param {String} [forId] A string containing the ID of the labeled control.
 * @returns {HTMLLabelElement} A new HTML label element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/forms.html#the-label-element
 */
function createLabelElement(parent, text, forId) {
    /**
     * @description A new HTML label element.
     * @type {HTMLLabelElement}
     */
    const labelElement = HTMLElement.createNew("label", parent);

    if (!isNullOrUndefined(forId)) {
        if (!isString(forId))
            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "forId", "string"));

        if (!forId.isWhiteSpace())
            labelElement.htmlFor = forId;
    }

    labelElement.appendText(text, false);
    return labelElement;
}
/**
 * @description Creates a new HTML unordered list element.
 * @param {HTMLElement|String|Boolean|Tab} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used as the id of the
 * parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appeneded to any node. If the parent is an instance of Tab
 * the element will be appended to the tab body.
 * @param {String} [id] The ID of the element.
 * @returns {HTMLUListElement} A new HTML unordered list element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/grouping-content.html#the-ul-element
 */
function createUnorderedListElement(parent, id) {
    return HTMLElement.createNew("ul", parent, id);
}
/**
 * @description Creates and inserts a new HTML list item element.
 * @param {String} [id] The ID of the element.
 * @returns {HTMLLIElement} A new HTML list item element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/grouping-content.html#the-li-element
 */
HTMLUListElement.prototype.createItemElement = function (id) {
    return HTMLElement.createNew("li", this, id);
};
/**
 * @description Creates a new HTML ordered list element.
 * @param {HTMLElement|String|Boolean|Tab} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used as the id of the
 * parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appeneded to any node. If the parent is an instance of Tab
 * the element will be appended to the tab body.
 * @param {String} [id] The ID of the element.
 * @returns {HTMLOListElement} A new HTML ordered list element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/grouping-content.html#the-ol-element
 */
function createOrderedListElement(parent, id) {
    return HTMLElement.createNew("ol", parent, id);
}
/**
 * @description Creates and inserts a new HTML list item element.
 * @param {String} [id] The ID of the element.
 * @returns {HTMLLIElement} A new HTML list item element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/grouping-content.html#the-ol-element
 */
HTMLOListElement.prototype.createItemElement = function (id) {
    return HTMLElement.createNew("li", this, id);
};
/**
 * @description Returns the list index of this list item.
 * @returns {Number} The list index of this list item.
 * @throws {Error} If the parent element of this list item is not an instance of HTMLUListElement.
 * @throws {ImpossibleError} If no list index is found.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLLIElement.prototype.getIndex = function () {
    if (!(this.parentElement instanceof HTMLUListElement) ||
            !(this.parentElement instanceof HTMLOListElement))
        throw new Error("The parent element of this list item is not an instance of HTMLOListElement or HTMLUListElement.");

    for (/** @description The current list item index. @type {Number} */
        let listItemIndex = 0;
        listItemIndex < this.parentElement.children.length;
        listItemIndex++)
        if (this.parentElement.children[listItemIndex] === this)
            return listItemIndex;

    throw new ImpossibleError();
};
/**
 * @description Creates a new HTML (option) select element.
 * @param {String} id The ID of the element.
 * @param {HTMLElement|String|Boolean|Tab} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used as the id of the
 * parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appeneded to any node. If the parent is an instance of Tab
 * the element will be appended to the tab body.
 * @param {Boolean} [isRequired=false] If the must have a value selected out by the user.
 * @param {Boolean} [isHidden] If the element must be hidden from the user.
 * @returns {HTMLSelectElement} A new HTML (option) select element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/the-button-element.html#the-select-element
 */
function createSelectElement(id, parent, isRequired, isHidden) {
    /**
     * @description A new HTML (option) select element.
     * @type {HTMLSelectElement}
     */
    const optionsElement = HTMLElement.createNew("select", parent, id);
    optionsElement.setOptionalAttribute("required", isRequired, isRequired => isBoolean(isRequired));
    optionsElement.setOptionalAttribute("hidden", isHidden, isHidden => isBoolean(isHidden));
    return optionsElement;
}
/**
 * @description Creates and inserts a new HTML option element.
 * @param {String} [value] The value of the element.
 * @param {String|Text} [text] The text to appened to the element.
 * @param {HTMLElement} [beforeOption] An element of the collection, or an index of type long, representing the item which should be inserted before.
 * @returns {HTMLOptionElement} A new HTML option element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/the-button-element.html#the-option-element
 */
HTMLSelectElement.prototype.insertOption =
HTMLOptGroupElement.prototype.insertOption = function (value, text, beforeOption) {
    /**
     * @description A new HTML option element.
     * @type {HTMLOptionElement}
     */
    const optionElement = HTMLElement.createNew("option", false);
    optionElement.setOptionalAttribute("value", value);
    optionElement.appendText(text, false);
    this.add(optionElement, beforeOption);
    return optionElement;
};
/**
 * @description Creates and inserts a new HTML option group element.
 * @param {String} label The label of the element.
 * @returns {HTMLOptGroupElement} A new HTML option group element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/the-button-element.html#the-optgroup-element
 */
HTMLSelectElement.prototype.insertOptionGroup = function (label) {
    /**
     * @description A new HTML option group element.
     * @type {HTMLOptGroupElement}
     */
    const optionGroupElement = HTMLElement.createNew("optgroup", false);
    optionGroupElement.setOptionalAttribute("label", label, label => isString(label) &&
            !label.isWhiteSpace());
    return optionGroupElement;
};
/**
 * @description Creates a new HTML image element.
 * @param {HTMLElement|String|Boolean|Tab} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used as the id of the
 * parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appeneded to any node. If the parent is an instance of Tab
 * the element will be appended to the tab body.
 * @returns {HTMLImageElement} A new HTML image element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/embedded-content-1.html#the-img-element
 */
function createImageElement(parent) {
    return HTMLElement.createNew("img", parent);
}
/**
 * @description Creates a new HTML canvas element.
 * @param {type} parent
 * @param {type} id
 * @returns {HTMLCanvasElement} A new HTML canvas element.
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/the-canvas-element.html#the-canvas-element
 */
function createCanvasElement(parent, id) {
    return HTMLElement.createNew("canvas", parent, id);
}
/**
 * @description Creates a new HTML table element.
 * @param {HTMLElement|String|Boolean|Tab} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used as the id of the
 * parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appeneded to any node. If the parent is an instance of Tab
 * the element will be appended to the tab body.
 * @param {String} id The ID of the element.
 * @returns {HTMLTableElement} A new HTML table element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/tabular-data.html#the-table-element
 */
function createTableElement(parent, id) {
    return HTMLElement.createNew("table", parent, id);
}
/**
 * @description Creates a new HTML table caption element.
 * @param {String|Text|Number} text The string or <code>Text</code> to append.
 * @returns {HTMLTableCaptionElement} A new HTML table caption element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/tabular-data.html#the-caption-element
 */
HTMLTableElement.prototype.createCaption = function (text) {
    /**
     * @description A new HTML table caption element.
     * @type {HTMLSelectElement}
     */
    const captionElement = HTMLElement.createNew("caption", false);
    captionElement.appendText(text);
    this.appendChild(captionElement);
    return captionElement;
};
/**
 * @description Creates a new HTML table body row.
 * @returns {HTMLTableSectionElement} A new HTML table body row.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/tabular-data.html#the-tbody-element
 */
HTMLTableElement.prototype.createTBody = function () {
    return HTMLElement.createNew("tbody", this);
};
/**
 * @description Creates and inserts a new HTML table header cell.
 * @returns {HTMLTableCellElement} A new HTML table header cell.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/tabular-data.html#the-th-element
 */
HTMLTableRowElement.prototype.insertHeaderCell = function () {
    return HTMLElement.createNew("th", this);
};
/**
 * @description Creates a new HTML span element.
 * @param {HTMLElement|String|Boolean|Tab} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used as the id of the
 * parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appeneded to any node. If the parent is an instance of Tab
 * the element will be appended to the tab body.
 * @param {String|Text} [text] The text to appened to the element.
 * @param {String} id The ID of the element.
 * @returns {HTMLSpanElement} A new span element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/text-level-semantics.html#the-span-element
 */
function createSpanElement(parent, text, id) {
    /**
     * @description A new span element.
     * @type {HTMLSpanElement}
     */
    const spanElement = HTMLElement.createNew("span", parent, id);
    spanElement.appendText(text);
    return spanElement;
}
/**
 * @description A list of button types.
 * @type {Object}
 * @readonly
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/the-button-element.html#attr-button-type
 */
const HTML_BUTTON_ELEMENT_TYPE = Object.freeze({
    submit: "submit",
    reset: "reset",
    "default": "default"
});
/**
 * @description Creates a new HTML button element.
 * @param {HTMLElement|String|Boolean|Tab} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used as the id of the
 * parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appeneded to any node. If the parent is an instance of Tab
 * the element will be appended to the tab body.
 * @param {String|Text} [text] The text to appened to the element.
 * @param {String} [type="button"] The type of the button (submit, reset or button).
 * @returns {HTMLButtonElement} A new HTML button element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/the-button-element.html#the-button-element
 */
function createButton(parent, text, type = HTML_BUTTON_ELEMENT_TYPE.default) {
    /**
     * @description A new button element.
     * @type {HTMLButtonElement}
     */
    const buttonElement = HTMLElement.createNew("button", parent);
    buttonElement.appendText(text, false);
    buttonElement.setRequiredAttribute("type", type, type => isString(type) &&
            HTML_BUTTON_ELEMENT_TYPE.hasValue(type));
    return buttonElement;
}
/**
 * @description Creates a new HTML anchor element (to be used as a hyper link).
 * @param {HTMLElement|String|Boolean|Tab} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used as the id of the
 * parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appeneded to any node. If the parent is an instance of Tab
 * the element will be appended to the tab body.
 * @param {String|Text} [text] The text to appened to the element.
 * @param {String} [link="javascript:void(0);"] The link to use for the href attribute. If none is specified, "javascript:void(0);" will be used.
 * @returns {HTMLAnchorElement} A new HTML anchor element (to be used as a hyper link).
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function createLinkElement(parent, text, link = "javascript:void(0);") {
    /**
     * @description A new HTML anchor element (to be used as a hyper link).
     * @type {HTMLAnchorElement}
     */
    const anchorElement = HTMLElement.createNew("a", parent);
    anchorElement.appendText(text, false);
    anchorElement.setRequiredAttribute("href", link, link => isString(link) &&
            !link.isWhiteSpace());
    return anchorElement;
}
/**
 * @description Creates a new HTML anchor element.
 * @param {HTMLElement|String|Boolean|Tab} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used as the id of the
 * parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appeneded to any node. If the parent is an instance of Tab
 * the element will be appended to the tab body.
 * @param {String|Text} [text] The text to appened to the element.
 * @param {String} id The ID of the element.
 * @returns {HTMLAnchorElement} A new HTML anchor element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/text-level-semantics.html#the-a-element
 */
function createAnchorElement(parent, text, id) {
    /**
     * @description A new HTML anchor element.
     * @type {HTMLAnchorElement}
     */
    const anchorElement = HTMLElement.createNew("a", parent, id);
    anchorElement.appendText(text, false);
    return anchorElement;
}
/**
 * @description Creates a HTML element to be used as a header element.
 * @param {HTMLElement|String|Boolean|Tab} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used as the id of the
 * parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appeneded to any node. If the parent is an instance of Tab
 * the element will be appended to the tab body.
 * @returns {HTMLElement} A HTML element to be used as a header element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/sections.html#the-header-element
 */
function createHeaderElement(parent) {
    return HTMLElement.createNew("header", parent);
}
/**
 * @description Checks if the specified element is a header element.
 * @param {Object} element The element to check.
 * @returns {Boolean} True if the specified element is a header element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function isHeaderElement(element) {
    return !isNullOrUndefined(element) &&
            element instanceof HTMLElement &&
            element.tagName === "HEADER";
}
/**
 * @description Creates a new instance of HTMLElement to be used as an article element.
 * @param {HTMLElement|String|Boolean|Tab} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used as the id of the
 * parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appeneded to any node. If the parent is an instance of Tab
 * the element will be appended to the tab body.
 * @param {String} [id] The ID of the element.
 * @returns {HTMLElement} The new instance of HTMLElement.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/sections.html#the-article-element
 */
function createArticleElement(parent, id) {
    return HTMLElement.createNew("article", parent, id);
}
/**
 * @description Checks if the specified element is an article element.
 * @param {Object} element The element to check.
 * @returns {Boolean} True if the specified element is an article element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function isArticleElement(element) {
    return !isNullOrUndefined(element) &&
            element instanceof HTMLElement &&
            element.tagName === "ARTICLE";
}
/**
 * @description Creates a new instance of HTMLElement to be used as an section element.
 * @param {HTMLElement|String|Boolean|Tab} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used as the id of the
 * parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appeneded to any node. If the parent is an instance of Tab
 * the element will be appended to the tab body.
 * @param {String} [id] The ID of the element.
 * @returns {HTMLElement} The new instance of HTMLElement.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see createHeaderElement()
 * @see createFooterElement()
 */
function createSectionElement(parent, id) {
    return HTMLElement.createNew("section", parent, id);
}
/**
 * @description Checks if the specified element is a section element.
 * @param {Object} element The element to check.
 * @returns {Boolean} True if the specified element is a section element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function isSectionElement(element) {
    return !isNullOrUndefined(element) &&
            element instanceof HTMLElement &&
            element.tagName === "SECTION";
}
/**
 * @description Creates a new instance of HTMLElement to be used as a footer element.
 * @param {HTMLElement|String|Boolean|Tab} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used as the id of the
 * parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appeneded to any node. If the parent is an instance of Tab
 * the element will be appended to the tab body.
 * @param {String} [id] The ID of the element.
 * @returns {HTMLElement} The new instance of HTMLElement.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function createFooterElement(parent, id) {
    return HTMLElement.createNew("footer", parent, id);
}
/**
 * @description Checks if the specified element is a footer element.
 * @param {Object} element The element to check.
 * @returns {Boolean} True if the specified element is a footer element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function isFooterElement(element) {
    return !isNullOrUndefined(element) &&
            element instanceof HTMLElement &&
            element.tagName === "FOOTER";
}
/**
 * @description Creates a new instance of HTMLElement to be used as a navigation element.
 * @param {HTMLElement|String|Boolean|Tab} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used as the id of the
 * parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appeneded to any node. If the parent is an instance of Tab
 * the element will be appended to the tab body.
 * @returns {HTMLElement} The new instance of HTMLElement.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function createNavigationElement(parent) {
    return HTMLElement.createNew("nav", parent);
}
/**
 * @description Checks if the specified element is a navigation element.
 * @param {Object} element The element to check.
 * @returns {Boolean} True if the specified element is a navigation element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function isNavigationElement(element) {
    return !isNullOrUndefined(element) &&
            element instanceof HTMLElement &&
            element.tagName === "NAV";
}
/**
 * @description Checks if the specified element is table body cell element.
 * @param {Object} element The element to check.
 * @returns {Boolean} True if the specified element is a table body cell element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function isTableBodyCellElement(element) {
    return !isNullOrUndefined(element) &&
            element instanceof HTMLTableCellElement &&
            element.tagName === "TD";
}
/**
 * @description Checks if the specified element is table header cell element.
 * @param {Object} element The element to check.
 * @returns {Boolean} True if the specified element is a table header cell element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function isTableHeaderCellElement(element) {
    return !isNullOrUndefined(element) &&
            element instanceof HTMLTableCellElement &&
            element.tagName === "TH";
}
/**
 * @description Creates a new instance of HTMLInputElement with the type property set to "text".
 * @param {String} [id] The ID of the element.
 * @param {HTMLElement|String|Boolean} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used as the id
 *  of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appeneded to any node.
 * @param {String} [value] The value of the input element.
 * @param {Boolean} [isReadOnly=false] If the input element must be read only.
 * @param {Boolean} [isRequired=false] If the input element must have a value filled out by the user.
 * @param {Boolean} [isHidden] If the input element must be hidden from the user.
 * @param {Number} [maximumLength] The maximum number of characters (in Unicode code points) that the user can enter.
 * @param {String} [pattern] A regular expression that the value is checked against.
 * @returns {HTMLInputElement} The new instance of HTMLInputElement.
 * @throws {String} If "isHidden" is not null or undefined and neither a boolean.
 * @throws {TypeError} If "minimumLength" is not null or undefined and neither a number.
 * @throws {TypeError} If "maximumLength" is not null or undefined and neither a number.
 * @throws {String} If "minimumLength" is lower than 0 or higher than Number.MAX_SAFE_INTEGER.
 * @throws {String} If "maximumLength" is lower than 1 or higher than Number.MAX_SAFE_INTEGER
 * @throws {String} If "minimumLength" is higher than "maximumLength".
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see createPasswordBox(id, parent);
 */
function createTextBox(id, parent, value, isReadOnly, isRequired, maximumLength, pattern) {
    /**
     * @description The input element, representing a text box.
     * @type {HTMLInputElement}
     * @see https://www.w3.org/TR/2011/WD-html5-20110525/states-of-the-type-attribute.html#text-state-and-search-state
     */
    const inputElement = HTMLElement.createNewInput(HTML_INPUT_ELEMENT_TYPE.text, parent, id);
    // See https://www.w3.org/TR/2011/WD-html5-20110525/the-input-element.html#attr-input-value
    inputElement.setOptionalAttribute("value", value, value => isString(value));
    // See https://www.w3.org/TR/2011/WD-html5-20110525/common-input-element-attributes.html#attr-input-readonly
    inputElement.setOptionalAttribute("readonly", isReadOnly, isReadOnly => isBoolean(isReadOnly));
    // See https://www.w3.org/TR/2011/WD-html5-20110525/common-input-element-attributes.html#attr-input-required
    inputElement.setOptionalAttribute("required", isRequired, isRequired => isBoolean(isRequired));
    // See https://www.w3.org/TR/2011/WD-html5-20110525/common-input-element-attributes.html#attr-input-maxlength
    inputElement.setOptionalAttribute("maxlength", maximumLength, maximumLength => Number.isUnsignedInteger(maximumLength));
    // See https://www.w3.org/TR/2011/WD-html5-20110525/common-input-element-attributes.html#the-pattern-attribute
    inputElement.setOptionalAttribute("pattern", pattern, pattern => pattern instanceof RegExp);
    return inputElement;
}
/**
 * @description Creates a new instance of HTMLInputElement with the type property set to "file".
 * @param {String} [id] The ID of the element.
 * @param {HTMLElement|String|Boolean} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a
 * string, it will be used as the id of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false"
 * it will not be appeneded to any node.
 * @param {Boolean} [isMultiple=true] If multiple files may be selected.
 * @param {String} [acceptedMediaTypes] The accepted media types of the selected file(s).
 * @param {Boolean} [isReadOnly=false] If the input element must be read only.
 * @param {Boolean} [isRequired=false] If the input element must have a value filled out by the user.
 * @returns {HTMLInputElement} The new instance of HTMLInputElement.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function createFileBox(id, parent, isMultiple = true, acceptedMediaTypes, isReadOnly, isRequired) {
    /**
     * @description The input element, representing a file box.
     * @type {HTMLInputElement}
     * @see https://www.w3.org/TR/2011/WD-html5-20110525/number-state.html#file-upload-state
     */
    const inputElement = HTMLElement.createNewInput(HTML_INPUT_ELEMENT_TYPE.fileUpload, parent, id);
    // See https://www.w3.org/TR/2011/WD-html5-20110525/common-input-element-attributes.html#attr-input-multiple
    inputElement.setRequiredAttribute("multiple", isMultiple, isMultiple => isBoolean(isMultiple));
    // See https://www.w3.org/TR/2011/WD-html5-20110525/number-state.html#attr-input-accept
    inputElement.setOptionalAttribute("accept", acceptedMediaTypes, acceptedMediaTypes => isString(acceptedMediaTypes));
    // See https://www.w3.org/TR/2011/WD-html5-20110525/common-input-element-attributes.html#attr-input-readonly
    inputElement.setOptionalAttribute("readonly", isReadOnly, isReadOnly => isBoolean(isReadOnly));
    // See https://www.w3.org/TR/2011/WD-html5-20110525/common-input-element-attributes.html#attr-input-required
    inputElement.setOptionalAttribute("required", isRequired, isRequired => isBoolean(isRequired));
    return inputElement;
}
/**
 * @description Wrap options for The HTML text area element.
 * @type {Object}
 */
const HTML_TEXT_AREA_ELEMENT_WRAP = Object.freeze({
    soft: "soft",
    wrap: "wrap"
});
/**
 * @description Creates a new instance of HTMLTextAreaElement.
 * @param {String} [id] The ID of the element.
 * @param {HTMLElement|String|Boolean} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used as the id
 * of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appeneded to any node.
 * @param {Text|String|Number} [value] The text to append to this element.
 * @param {Boolean} [autoResize=false] If true the height of the text area element will automatically be resized in accordance to the number of rows in the text.
 * @param {Number} [averageCharacterWidth] The visible width of the text control, in average character widths.
 * @param {Number} [visibleTextRows] The number of visible text lines for the control.
 * @param {String} [isReadOnly=false] If the input element must be read only.
 * @param {Boolean} [isRequired=false] If the input element must have a value filled out by the user.
 * @param {Boolean} [isHidden=false] If the input element must be hidden from the user.
 * @param {Number} [minimumLength] The minimum number of characters (in Unicode code points) that the user can enter.
 * @param {Number} [maximumLength] The maximum number of characters (in Unicode code points) that the user can enter.
 * @param {Number} [selectionStartIndex] The index to the first character in the current selection. If there's no selection, this value is the index of the character following the position of the
 * text entry cursor.
 * @param {Number} [selectionEndIndex] The index to the last character in the current selection. If there's no selection, the value is the index of the character following the position of the text
 * entry cursor.
 * @param {String} wrap Indicates how the control wraps text.
 * @returns {HTMLTextAreaElement} The new instance of HTMLTextAreaElement.
 * @throws {TypeError} If "autoResize" is not null or undefined and neither a boolean.
 * @throws {TypeError} If "isHidden" is not null or undefined and neither a boolean.
 * @throws {TypeError} If "isReadOnly" is not null or undefined and neither a boolean.
 * @throws {TypeError} If "isRequired" is not null or undefined and neither a boolean.
 * @throws {TypeError} If "minimumLength" is not null or undefined and neither a number.
 * @throws {TypeError} If "maximumLength" is not null or undefined and neither a number.
 * @throws {String} If "minimumLength" is lower than 0 or higher than Number.MAX_SAFE_INTEGER.
 * @throws {String} If "maximumLength" is lower than 1 or higher than Number.MAX_SAFE_INTEGER
 * @throws {String} If "minimumLength" is higher than "maximumLength".
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function createTextAreaElement(id, parent, value, autoResize = false, averageCharacterWidth, visibleTextRows, isReadOnly, isRequired, maximumLength, selectionStartIndex, selectionEndIndex, wrap) {
    checkRequiredBoolean("autoResize", autoResize);

    /**
     * @description The text area element.
     * @type {HTMLTextAreaElement}
     * @see https://www.w3.org/TR/2011/WD-html5-author-20110809/the-textarea-element.html
     */
    const textAreaElement = HTMLElement.createNew("textarea", parent, id);
    //https://www.w3.org/TR/2011/WD-html5-20110525/the-button-element.html#dom-textarea-value
    textAreaElement.setOptionalAttribute("value", value, value => isString(value));
    // See https://www.w3.org/TR/2011/WD-html5-author-20110809/the-textarea-element.html#attr-textarea-cols
    textAreaElement.setOptionalAttribute("cols", averageCharacterWidth, averageCharacterWidth => isNumber(averageCharacterWidth) &&
            averageCharacterWidth > 0);
    // See https://www.w3.org/TR/2011/WD-html5-author-20110809/the-textarea-element.html#attr-textarea-rows
    textAreaElement.setOptionalAttribute("rows", visibleTextRows, visibleTextRows => isNumber(visibleTextRows) &&
            visibleTextRows > 0);
    // See https://www.w3.org/TR/2011/WD-html5-author-20110809/the-textarea-element.html#attr-textarea-readonly
    textAreaElement.setOptionalAttribute("readonly", isReadOnly, isReadOnly => isBoolean(isReadOnly));
    // See https://www.w3.org/TR/2011/WD-html5-author-20110809/the-textarea-element.html#attr-textarea-required
    textAreaElement.setOptionalAttribute("required", isRequired, isRequired => isBoolean(isRequired));
    // See https://www.w3.org/TR/2011/WD-html5-author-20110809/the-textarea-element.html#attr-textarea-maxlength
    textAreaElement.setOptionalAttribute("maxlength", maximumLength, maximumLength => Number.isUnsignedInteger(maximumLength));
    // See https://www.w3.org/TR/2011/WD-html5-20110525/association-of-controls-and-forms.html#dom-textarea-input-selectionstart
    textAreaElement.setOptionalAttribute("selectionStart", selectionStartIndex, selectionStartIndex);
    // See https://www.w3.org/TR/2011/WD-html5-20110525/association-of-controls-and-forms.html#dom-textarea-input-selectionend
    textAreaElement.setOptionalAttribute("selectionEnd", selectionEndIndex, selectionEndIndex);
    // See https://www.w3.org/TR/2011/WD-html5-author-20110809/the-textarea-element.html#dom-textarea-wrap
    textAreaElement.setOptionalAttribute("wrap", wrap, wrap => isBoolean(wrap) &&
            HTML_TEXT_AREA_ELEMENT_WRAP.hasValue(wrap));

    if (autoResize) {
        /**
         * @description Checks the height of the text area element.
         * @returns {undefined}
         * @private
         * @since 1.0
         * @author Manuel Milosavljević <manuel@synergystructure.com>
         */
        const checkTextAreaHeight = () => {
            textAreaElement.style.height = "";

            if (textAreaElement.scrollHeight > textAreaElement.clientHeight) // TODO Is this correct? Should the new box model functions be used instead?
                textAreaElement.style.height = createPixelStatement(textAreaElement.scrollHeight);
        };
        /**
         * @description Checks the height of the text area element after an event.
         * @returns {undefined}
         * @private
         * @since 1.0
         * @author Manuel Milosavljević <manuel@synergystructure.com>
         */
        const checkTextAreaHeightAfterEvent = () => setTimeout(checkTextAreaHeight, 0);
        textAreaElement.addEventListener(COMMON_EVENT_TYPE_LIST.key.down, checkTextAreaHeight);
        textAreaElement.addEventListener("paste", checkTextAreaHeightAfterEvent);
        textAreaElement.addEventListener("cut", checkTextAreaHeightAfterEvent);
    }

    return textAreaElement;
}
/**
 * @description Creates a new instance of HTMLInputElement with the type property set to "parameter".
 * @param {String} [id] The ID of the element.
 * @param {HTMLElement|String|Boolean} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a
 * string, it will be used as the id of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false"
 * it will not be appeneded to any node.
 * @param {String} [value] The value of the input element.
 * @returns {HTMLInputElement} The new instance of HTMLInputElement.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see createTextBox(id, parent);
 */
function createParameterBox(id, parent, value) {
    /**
     * @description The input element, representing arbitrary string that is not visible in the viewport.
     * @type {HTMLInputElement}
     * @see https://www.w3.org/TR/2011/WD-html5-20110525/states-of-the-type-attribute.html#hidden-state
     */
    const inputElement = HTMLElement.createNewInput(HTML_INPUT_ELEMENT_TYPE.hidden, parent, id);
    // See https://www.w3.org/TR/2011/WD-html5-20110525/the-input-element.html#attr-input-value
    inputElement.setOptionalAttribute("value", value, value => isString(value));
    return inputElement;
}
/**
 * @description Creates a new instance of HTMLInputElement with the type property set to &quot;number&quot;.
 * @param {String} [id] The ID of the element.
 * @param {HTMLElement|String|Boolean} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a
 * string, it will be used as the id of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false"
 * it will not be appeneded to any node.
 * @param {Number} [value=0] The value of the input element.
 * @param {Number|String} [step] The granularity that is expected (and required) of the value, by limiting the allowed values.
 * @param {Boolean} [isReadOnly=false] If the input element must be read only.
 * @param {Boolean} [isRequired=false] If the input element must have a value filled out by the user.
 * @param {Boolean} [isHidden] If the input element must be hidden from the user.
 * @param {Boolean} [readonly=false] If the input element must be read only.
 * @returns {HTMLInputElement} The new instance of HTMLInputElement.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function createNumberBox(id, parent, value, step, isReadOnly, isRequired) {
    /**
     * @description The input element, representing a number box.
     * @type {HTMLInputElement}
     * @see https://www.w3.org/TR/2011/WD-html5-20110525/number-state.html#number-state
     */
    const inputElement = HTMLElement.createNewInput(HTML_INPUT_ELEMENT_TYPE.number, parent, id);
    // See https://www.w3.org/TR/2011/WD-html5-20110525/the-input-element.html#attr-input-value
    inputElement.setOptionalAttribute("value", value, value => isNumber(value));
    // See https://www.w3.org/TR/2011/WD-html5-20110525/common-input-element-attributes.html#attr-input-step
    inputElement.setOptionalAttribute("value", value, value => isNumber(step) ||
            (isString(step) &&
            step === "any"));
    // See https://www.w3.org/TR/2011/WD-html5-20110525/common-input-element-attributes.html#attr-input-readonly
    inputElement.setOptionalAttribute("readonly", isReadOnly, isReadOnly => isBoolean(isReadOnly));
    // See https://www.w3.org/TR/2011/WD-html5-20110525/common-input-element-attributes.html#attr-input-required
    inputElement.setOptionalAttribute("required", isRequired, isRequired => isBoolean(isRequired));
    return inputElement;
}
/**
 * @description Creates a new instance of HTMLInputElement with the type property set to "password".
 * @param {String} [id] The ID of the element.
 * @param {HTMLElement|String|Boolean} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a
 * string, it will be used as the id of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false"
 * it will not be appeneded to any node.
 * @param {String} [value] The value of the input element.
 * @param {Number} [maximumLength] The maximum number of characters (in Unicode code points) that the user can enter.
 * @returns {HTMLInputElement} The new instance of HTMLInputElement.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see createPasswordBox(id, parent);
 */
function createPasswordBox(id, parent, value, maximumLength) {
    /**
     * @description The input element, representing a password box.
     * @type {HTMLInputElement}
     * @see https://www.w3.org/TR/2011/WD-html5-20110525/states-of-the-type-attribute.html#password-state
     */
    const inputElement = HTMLElement.createNewInput(HTML_INPUT_ELEMENT_TYPE.password, parent, id);
    // See https://www.w3.org/TR/2011/WD-html5-20110525/the-input-element.html#attr-input-value
    inputElement.setOptionalAttribute("value", value, value => isString(value));
    // See https://www.w3.org/TR/2011/WD-html5-20110525/common-input-element-attributes.html#attr-input-maxlength
    inputElement.setOptionalAttribute("maxlength", maximumLength, maximumLength => Number.isUnsignedInteger(maximumLength));
    return inputElement;
}
/**
 * @description Creates a new instance of HTMLInputElement with the type property set to "checkbox".
 * @param {String} [id] The ID of the element.
 * @param {HTMLElement|String|Boolean} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used as the id of the
 * \parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appeneded to any node.
 * @param {Boolean} [isChecked=false] The value of the input element.
 * @param {Boolean} [isReadOnly] If the input element must be read only.
 * @param {Boolean} [isRequired] If the input element must have a value filled out by the user.
 * @returns {HTMLInputElement} The new instance of HTMLInputElement.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function createCheckBox(id, parent, isChecked = false, isReadOnly, isRequired) {
    /**
     * @description The input element, representing a checkbox.
     * @type {HTMLInputElement}
     * @see https://www.w3.org/TR/2011/WD-html5-20110525/number-state.html#checkbox-state
     */
    const inputElement = HTMLElement.createNewInput(HTML_INPUT_ELEMENT_TYPE.checkbox, parent, id);
    // See https://www.w3.org/TR/2011/WD-html5-20110525/the-input-element.html#attr-input-checked
    inputElement.setOptionalAttribute("checked", isChecked, isChecked => isBoolean(isChecked));
    // See https://www.w3.org/TR/2011/WD-html5-20110525/common-input-element-attributes.html#attr-input-readonly
    inputElement.setOptionalAttribute("readonly", isReadOnly, isReadOnly => isBoolean(isReadOnly));
    // See https://www.w3.org/TR/2011/WD-html5-20110525/common-input-element-attributes.html#attr-input-required
    inputElement.setOptionalAttribute("required", isRequired, isRequired => isBoolean(isRequired));
    return inputElement;
}
/**
 * @description Creates a new instance of HTMLInputElement with the type property set to "radio".
 * @param {String} [id] The ID of the element.
 * @param {HTMLElement|String|Boolean} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a
 * string, it will be used as the id of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false"
 * it will not be appeneded to any node.
 * @param {String} [name] The name of the radio group.
 * @param {Boolean} [isChecked] The value of the input element.
 * @param {Boolean} [isReadOnly] If the input element must be read only.
 * @param {Boolean} [isRequired] If the input element must have a value filled out by the user.
 * @param {Boolean} [isHidden] If the input element must be hidden from the user.
 * @returns {HTMLInputElement} The new instance of HTMLInputElement.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function createRadioBox(id, parent, name, isChecked, isReadOnly, isRequired) {
    /**
     * @description The input element, representing a radio box.
     * @type {HTMLInputElement}
     * @see https://www.w3.org/TR/2011/WD-html5-20110525/number-state.html#radio-button-state
     */
    const inputElement = HTMLElement.createNewInput(HTML_INPUT_ELEMENT_TYPE.radioButton, parent, id);
    // See https://www.w3.org/TR/2011/WD-html5-20110525/association-of-controls-and-forms.html#attr-fe-name
    inputElement.setOptionalAttribute("name", name, name => isString(name));
    // See https://www.w3.org/TR/2011/WD-html5-20110525/the-input-element.html#attr-input-checked
    inputElement.setOptionalAttribute("checked", isChecked, isChecked => isBoolean(isChecked));
    // See https://www.w3.org/TR/2011/WD-html5-20110525/common-input-element-attributes.html#attr-input-readonly
    inputElement.setOptionalAttribute("readonly", isReadOnly, isReadOnly => isBoolean(isReadOnly));
    // See https://www.w3.org/TR/2011/WD-html5-20110525/common-input-element-attributes.html#attr-input-required
    inputElement.setOptionalAttribute("required", isRequired, isRequired => isBoolean(isRequired));
    return inputElement;
}
/**
 * @description Creates an image button.
 * @param {HTMLElement|String|Boolean} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used as the id of the
 * parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appeneded to any node.
 * @param {String} [sourceUrl] The URI for the location of the image to display on the graphical submit button.
 * @returns {HTMLInputElement} The new instance of HTMLInputElement.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function createImageButton(parent, sourceUrl) {
    /**
     * @description The input element, representing an image box.
     * @type {HTMLInputElement}
     * @see https://www.w3.org/TR/2011/WD-html5-20110525/number-state.html#image-button-state
     */
    const inputElement = HTMLElement.createNewInput(HTML_INPUT_ELEMENT_TYPE.imageButton, parent);
    // See https://www.w3.org/TR/2011/WD-html5-20110525/number-state.html#attr-input-src
    inputElement.setRequiredAttribute("src", sourceUrl, sourceUrl => isString(sourceUrl) &&
            !sourceUrl.isWhiteSpace());
    return inputElement;
}
/**
 * @description Creates a progress bar.
 * @param {HTMLElement|String|Boolean} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a
 * string, it will be used as the id of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false"
 * it will not be appeneded to any node.
 * @param {Number} [value] The specification of how much of the task that has been completed.
 * @param {Number} [maximum] The description of how much work the task indicated by the progress element requires.
 * @param {String} [id] The ID of the element.
 * @returns {HTMLProgressElement} The new instance of HTMLProgressElement.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function createProgressBarElement(parent, value, maximum, id) {
    /**
     * @description The progress element.
     * @type {HTMLProgressElement}
     * @see https://www.w3.org/TR/2011/WD-html5-author-20110809/the-progress-element.html
     */
    const progressElement = HTMLElement.createNew("progress", parent, id);
    // See https://www.w3.org/TR/2011/WD-html5-author-20110809/the-progress-element.html#attr-progress-value
    progressElement.setOptionalAttribute("value", value, value => Number.isUnsignedInteger(value));
    // See https://www.w3.org/TR/2011/WD-html5-author-20110809/the-progress-element.html#attr-progress-max
    progressElement.setOptionalAttribute("max", maximum, max => Number.isUnsignedInteger(max));
    return progressElement;
}
/**
 * @description Returns the list item from a list, using the instance of MouseEvent (or TouchEvent) that has been returned from an on click event handler.
 * @param {MouseEvent|TouchEvent} mouseEvent The mouse (or touch) event from the on click event handler.
 * @returns {undefined|HTMLLIElement} The list item if one is found, undefined otherwise.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function getItemFromListOnClick(mouseEvent) {
    if (isNullOrUndefined(mouseEvent))
        throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentCannotBeNullorUndefinedTemplate, "mouseEvent"));

    if (!(mouseEvent instanceof MouseEvent ||
            mouseEvent instanceof TouchEvent))
        throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "mouseEvent", "MouseEvent or TouchEvent"));

    // Starting from the mouseEvent.target and moving up to the parent elements.
    for (/** @param {Element} element The current element. */
        let element = mouseEvent.target;
        !!element &&
            !(element instanceof HTMLUListElement ||
            element instanceof HTMLOListElement ||
            element instanceof HTMLBodyElement);
        element = element.parentElement)
        if (element instanceof HTMLLIElement)
            return element;

    return undefined;
}
/**
 * @description Returns a list of all available list items - the lists are ignored.
 * @param {MouseEvent|TouchEvent} mouseEvent The mouse (or touch) event from the on click event handler.
 * @returns {HTMLLIElement[]} A list of all available list items - the lists are ignored.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function getItemListFromListOnClick(mouseEvent) {
    if (isNullOrUndefined(mouseEvent))
        throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentCannotBeNullorUndefinedTemplate, "mouseEvent"));

    if (!(mouseEvent instanceof MouseEvent ||
            mouseEvent instanceof TouchEvent))
        throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "mouseEvent", "MouseEvent or TouchEvent"));

    /**
     * @description The item list.
     * @type {HTMLLIElement[]}
     */
    const itemList = [];

    // Starting from the mouseEvent.target and moving up to the parent elements.
    for (/** @param {Element} element The current element. */
        let element = mouseEvent.target;
        !!element &&
            !(element instanceof HTMLBodyElement);
        element = element.parentElement)
        if (element instanceof HTMLLIElement)
            itemList.push(element);

    return itemList;
}
/**
 * @description Sets the coordinates (top and left) of this element to be vertically and horizontally centered in its parent node.
 * @param {HTMLElement} htmlElement The instance of HTMLElement to center in its parent node.
 * @returns {Boolean} True if the element has a parent node.
 * @throws {TypeError} If the element is null, undefined or not an instance of HTMLElement.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function setCenterCoordinates(htmlElement) {
    checkRequiredArgumentFull(htmlElement, "htmlElement", HTMLElement);

    if (!htmlElement.parentElement)
        return false;

    /**
     * @description The size of the element and its position relative to the viewport.
     * @type {DOMRect}
     */
    const elementClientRectangles = htmlElement.getBoundingClientRect();
    /**
     * @description The size of the element's parent and its position relative to the viewport.
     * @type {DOMRect}
     */
    const elementParentClientRectangles = htmlElement.parentElement.getBoundingClientRect();
    htmlElement.style.top = createPixelStatement((elementClientRectangles.height / 2) - (elementParentClientRectangles.height / 2));
    htmlElement.style.left = createPixelStatement((elementClientRectangles.width / 2) - (elementParentClientRectangles.width / 2));
    return true;
}
//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="Binary">
/**
 * @description Creates a bitmask and returns it.
 * @param {Number} bitCount The number of bits in the bitmask.
 * @returns {Number} A bitmask.
 * @throws {RangeError} If the specified bit count is not an unsigned integer.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function createBitMask(bitCount) {
    if (!Number.isUnsignedInteger(bitCount))
        throw new RangeError("Invalid argument: the specified \"size\" is not an unsigned integer.");

    return (1 << bitCount) - 1;
}
/**
 * @description Returns the number of digits in the specified number.
 * @param {Number} number The number.
 * @returns {Number} The number of digits in the specified number.
 * @throws {RangeError} If the specified number is not an unsigned integer.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function countBits(number) {
    if (!Number.isUnsignedInteger(number))
        throw new RangeError("Invalid argument: the specified \"number\" is not an unsigned integer.");

    return Math.floor(Math.log(number) / Math.log(2) + 1);
}

/**
 * @description Prefixes for binary mulitiples, based on the IEC 80000-13 standard.
 * @type {Array}
 */
const BINARY_PREFIX_LIST = Object.freeze([
    "KiB",
    "MiB",
    "GiB",
    "TiB",
    "PiB",
    "EiB",
    "ZiB",
    "YiB"
]);
/**
 * @description Prefixes for decimal mulitiples, based on the metric system.
 * @type {Array}
 */
const DECIMAL_PREFIX_LIST = Object.freeze([
    "kB",
    "MB",
    "GB",
    "TB",
    "PB",
    "EB",
    "ZB",
    "YB"
]);
/**
 * @description Defines any type of byte size error.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class ByteSizeError extends Error {
    /**
     * @description ByteSizeError constructor.
     * @param {String} message The detail message.
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    constructor(message) {
        super(message);
    }
    /**
     * @description Checks the validity of the specified bytes.
     * @param {Number} bytes The bytes
     * @returns {undefined}
     * @throws {ByteSizeError} If the specified bytes is a negative number.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    static check(bytes) {
        checkRequiredNumber(bytes, "bytes");

        if (bytes < 0)
            throw new ByteSizeError(COMMON_TEXT_LIST.invalidArgument + `the bytes (the specified one is ${bytes}) cannot be a negative number.`);
    }
};
/**
 * @description Returns the index of the most fitting binary prefix for the specified bytes.
 * @param {Number} bytes The bytes.
 * @returns {Number} The index of the most fitting binary prefix for the specified bytes.
 * @throws {ByteSizeError} If the specified bytes is a negative number.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function getBinaryPrefixIndex(bytes) {
    ByteSizeError.check(bytes);

    /* A binary prefix is a unit prefix for multiples of units in data processing, data transmission, and digital information, notably the bit and the byte, to indicate multiplication by a power of 2.
     * See https://en.wikipedia.org/wiki/Binary_prefix for more information. In the BINARY_PREFIX_LIST array all prefixes, based on the IEC 80000-13 standard, are included. The index of a prefix plus
     * 1 equals the exponent of the value. For example, 1 gibibyte is Math.pow(1024, 3), where the exponent 3 minus 1 is the index of the gibibyte prefix. Based on the number of digits a bytes value
     * has the exponent can be estimated. For example:
     *
     * ********** * ************ * ************* *
     *   Prefix   *   Exponent   *   Number of   *
     *            *              *   digits      *
     * ********** * ************ * ************* *
     *   kibi     *          1   *           4   *
     *   mebi     *          2   *           7   *
     *   gibi     *          3   *          10   *
     *   tebi     *          4   *          13   *
     *   pebi     *          5   *          16   *
     *   exbi     *          6   *          19   *
     *   zebi     *          7   *          22   *
     *   yobi     *          8   *          25   *
     * ********** * ************ * ************* *
     *
     * Thus, dividing the number of digits by 3 and returning the floored value, minus one is the estimated binary prefix. If the estimated binary prefix is lower than -1, no fitting binary prefix is
     * available. If the estimated binary prefix is lower than Math.pow(1024, [estimated binary prefix] + 1) then the correct binary prefix is the estimated one minus one, otherwise it is the
     * estimated one.
     */

    /**
     * @description The estimated binary prefix index.
     * @type {Number}
     */
    const binaryPrefixIndexEstimated = Math.floor(Math.getDigitCount(bytes) / 3) - 1;
    return binaryPrefixIndexEstimated === -1 ? -1 :
        binaryPrefixIndexEstimated === 1 ? 0 :
        binaryPrefixIndexEstimated >= BINARY_PREFIX_LIST.length - 1 ?
        BINARY_PREFIX_LIST.length - 1 :
        bytes < Math.pow(1024, binaryPrefixIndexEstimated + 1) ?
        binaryPrefixIndexEstimated - 1 :
        binaryPrefixIndexEstimated;
}
/**
 * @description Creates a binary statement with the specified bytes and the specified binary prefix index.
 * @param {Number} bytes The bytes.
 * @param {Number} [binaryPrefixIndex=getBinaryPrefixIndex(bytes)] The binary prefix index. By default the most fitting binary prefix will be used.
 * @param {Number} [fractionalPreserveCount=2] The amount of fractional digits to preserve in the new statement.
 * @param {String} [template="@\u00A0@"] The template to use to construct the binary statement.
 * @returns {String} A binary statement with the specified bytes and the specified binary prefix index.
 * @throws {TypeError} If the specified binary prefix index is not a number.
 * @throws {ByteSizeError} If the specified binary prefix index is lower than 0 or higher than the binary prefix list length.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function createBinaryStatement(bytes, binaryPrefixIndex = getBinaryPrefixIndex(bytes), fractionalPreserveCount = 2, template = "@\u00A0@") {
    if (isNullOrUndefined(binaryPrefixIndex))
        return createBinaryStatement(bytes, -1, fractionalPreserveCount);

    ByteSizeError.check(bytes);

    if (!isNumber(binaryPrefixIndex))
        throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "binaryPrefixIndex", "number"));

    if (binaryPrefixIndex < -1)
        throw new ByteSizeError(COMMON_TEXT_LIST.invalidArgument + `the binary prefix index (the specified one is ${binaryPrefixIndex}) cannot be lower than -1.`);

    if (binaryPrefixIndex > BINARY_PREFIX_LIST.length)
        throw new ByteSizeError(`The specified binary prefix index (${binaryPrefixIndex}) cannot be higher than ${BINARY_PREFIX_LIST.length}.`);

    return binaryPrefixIndex === -1 ?
        createStringFromTemplate(template, bytes, "bytes") : // TODO Localize this.
        createStringFromTemplate(template, Math.roundSpecific(bytes / Math.pow(1024, binaryPrefixIndex + 1), fractionalPreserveCount), BINARY_PREFIX_LIST[binaryPrefixIndex]);
}
/**
 * @description Returns the index of the most fitting decimal prefix for the specified bytes.
 * @param {Number} bytes The bytes.
 * @returns {Number} The index of the most fitting decimal prefix for the specified bytes.
 * @throws {SizeError} If the specified bytes is a negative number.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function getDecimalPrefix(bytes) {
    // Same codes as getBinaryPrefix(), but with DECIMAL_PREFIX_LIST instead of BINARY_PREFIX_LIST.

    ByteSizeError.check(bytes);

    /**
     * @description The estimated decimal prefix index.
     * @type {Number}
     */
    const decimalPrefixIndexEstimated = Math.floor(Math.getDigitCount(bytes) / 3) - 1;
    return decimalPrefixIndexEstimated === -1 ? -1 :
        decimalPrefixIndexEstimated === 1 ? 0 :
        decimalPrefixIndexEstimated >= DECIMAL_PREFIX_LIST.length - 1 ?
        DECIMAL_PREFIX_LIST.length - 1 :
        bytes < Math.pow(1000, decimalPrefixIndexEstimated + 1) ?
        decimalPrefixIndexEstimated - 1 :
        decimalPrefixIndexEstimated;
}
/**
 * @description Creates a decimal statement with the specified bytes and the specified decimal prefix index.
 * @param {Number} bytes The bytes.
 * @param {Number} [decimalPrefixIndex=getDecimalPrefixIndex(bytes)] The decimal prefix index. By default the most fitting decimal prefix will be used.
 * @param {Number} [fractionalPreserveCount=2] The amount of fractional digits to preserve in the new statement.
 * @param {String} [template="@\u00A0@"] The template to use to construct the decimal statement.
 * @returns {String} A decimal statement with the specified bytes and the specified decimal prefix index.
 * @throws {TypeError} If the specified decimal prefix index is not a number.
 * @throws {ByteSizeError} If the specified decimal prefix index is lower than 0 or higher than the decimal prefix list length.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function createDecimalStatement(bytes, decimalPrefixIndex = getDecimalPrefixIndex(bytes), fractionalPreserveCount = 2, template = "@\u00A0@") {
    if (isNullOrUndefined(decimalPrefixIndex))
        return createDecimalStatement(bytes, -1, fractionalPreserveCount);

    ByteSizeError.check(bytes);

    if (!isNumber(decimalPrefixIndex))
        throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "decimalPrefixIndex", "number"));

    if (decimalPrefixIndex < -1)
        throw new ByteSizeError(COMMON_TEXT_LIST.invalidArgument + `the binary prefix index (the specified one is ${decimalPrefixIndex}) cannot be lower than -1.`);

    if (decimalPrefixIndex > BINARY_PREFIX_LIST.length)
        throw new ByteSizeError(`The specified binary prefix index (${decimalPrefixIndex}) cannot be higher than ${BINARY_PREFIX_LIST.length}.`);

    return decimalPrefixIndex === -1 ?
        createStringFromTemplate(template, bytes, "bytes") : // TODO Localize this.
        createStringFromTemplate(template, Math.roundSpecific(bytes / Math.pow(1000, decimalPrefixIndex + 1), fractionalPreserveCount), BINARY_PREFIX_LIST[decimalPrefixIndex]);
}
//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="CSS">
/**
 * @description Creates a pixel statement (for use with CSS).
 * @param {Number} value A value in pixels. If the value is a float, the largest integer less than or equal to the value will be used.
 * @returns {String} A pixel statement.
 * @throws {TypeError} If the value is null, undefined or not a number.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function createPixelStatement(value) {
    checkRequiredNumber(value, "value");
    return value.toString().concat("px");
}
/**
 * @description Creates a percent statement (for use with CSS).
 * @param {Number} value A value in percents.
 * @returns {String} A percent statement.
 * @throws {String} If the value is null, undefined or not a number.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function createPercentStatement(value) {
    checkRequiredNumber(value, "value");
    return value.toString().concat("%");
}
/**
 * @description A CSS-compatible one-hundred percent statement.
 * @type {String}
 */
const ONE_HUNDRED_PERCENT_STATEMENT = createPercentStatement(100);
/**
 * @description Returns the value from a pixel statement (for use with CSS).
 * @param {String} pixelStatement A value in pixels.
 * @param {Number} defaultValue The value to return if no value can be extracted from the pixel statement.
 * @returns {Number} The value representing the number of pixels from the statement.
 * @throws {Error} If the specified pixel statement doesn't end with the px-suffix or if the total length of the pixel statement is lower than 2.
 * @throws {Error} If the pixel statement contains no value.
 * @throws {TypeError} If the pixel statement contains no numeric value.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function getFromPixelStatement(pixelStatement, defaultValue = 0) {
    checkRequiredNumber(defaultValue, "defaultValue");
    checkRequiredString(pixelStatement, "pixelStatement");

    if (pixelStatement.isWhiteSpace() ||
            pixelStatement.isEmpty())
        return defaultValue;

    pixelStatement = pixelStatement.trim().toLowerCase();

    if (pixelStatement.length <= 2 ||
            !pixelStatement.endsWith("px"))
        throw new Error(`${COMMON_TEXT_LIST.invalidArgument}No pixel statement found.`);

    /**
     * @description The unformatted pixel value (without the suffix).
     * @type {String}
     */
    const valueAsString = pixelStatement.substring(0, pixelStatement.length - 2).trimToNull();

    if (!valueAsString)
        return new Error(`${COMMON_TEXT_LIST.invalidArgument}No value found.`);

    /**
     * @description The (formatted) pixel value.
     * @type {Number}
     */
    const value = Number(valueAsString);

    if (Number.isNaN(value))
        return new TypeError(`${COMMON_TEXT_LIST.invalidArgument}No numeric value found.`);

    return value;
}
/**
 * @description Checks if the list is empty or not.
 * @returns {Boolean} True if the list contains no elements.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
DOMTokenList.prototype.isEmpty = function () {
    return this.length === 0;
};
/**
 * @description Removes all elements from this list.
 * @returns {undefined}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
DOMTokenList.prototype.clear = function () {
    while (!this.isEmpty())
        this.remove(this[0]);
};
/**
 * @description Sets the specified class names (all other class names will be removed first).
 * @param {...String} classNameList The class names.
 * @returns {undefined}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
DOMTokenList.prototype.set = function (...classNameList) {
    this.clear();
    this.append.apply(this, classNameList);
};
/**
 * @description Appends the specified class names.
 * @param {...String} classNameList The class names.
 * @returns {undefined}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
DOMTokenList.prototype.append = function (...classNameList) {
    if (isNullOrUndefined(checkOptionalArgument(classNameList, "classNameList", Array)))
        return;

    /**
     * @description A reference to <code>this</code>.
     * @type {DOMTokenList}
     */
    const domTokenList = this;
    classNameList.forEach(/** @param {String} className A class name. */ className => domTokenList.add(className));
};
/**
 * @description Returns the first index at which the specified class name can be found in the list, or -1 if it is not present.
 * @param {String} className The class name to look for.
 * @returns {undefined}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
DOMTokenList.prototype.indexOf = function (className) {
    if (!isNullOrUndefined(className) ||
            className.isWhiteSpace())
        for (/** @param {Number} classNameIndex The current class name index. */
            let classNameIndex = 0;
            classNameIndex < this.length;
            classNameIndex++)
            if (this[classNameIndex] === className)
                return classNameIndex;

    return -1;
};
/**
 * @description Replaces the specified old class name with the new one.
 * @param {String} oldClassName The old class name to replace.
 * @param {String} newClassName The class name to replace the old class name.
 * @returns {undefined}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
DOMTokenList.prototype.replace = function (oldClassName, newClassName) {
    /**
     * @description If this token list contains the specified old class name.
     * @type {Boolean}
     */
    const hasOldClassName = this.contains(oldClassName);

    if (hasOldClassName) {
        this.remove(oldClassName);
        this.add(newClassName);
    }

    return hasOldClassName;
};
/**
 * @description Searches for a specified class name and if found replaces it with the other class name. Thus, if class name A is found it will be replaced with class name B, otherwise if class name B is
 * found it will be replaced with class name A.
 * @param {String} classNameA The first class name to search for and replace with the second class name.
 * @param {String} classNameB The second class name to search for and replace with the first class name.
 * @returns {Number} One of the following:
 * <p>1 if the first class name has been found and replaced.</p>
 * <p>2 if the second class name has been found and replaced.</p>
 * <p>-1 if no class name has been found.</p>
 * @throws {String} If class name A or B is null, undefined or white space.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
DOMTokenList.prototype["switch"] = function (classNameA, classNameB) {
    return this.replace(classNameA, classNameB) ? 1 :
        (this.replace(classNameB, classNameA) ? 2 : -1);
};
/**
 * @description Executes the provided function once for each item in this list. This loop is breakable.
 * @param {LoopCallback} callback Function that produces an item of this list.
 * @param {Number} [startIndex] The start index.
 * @param {Number} [endIndex] The end index.
 * @param {Number} [step] The number by which the counter of the loop is incremented each time.
 * @param {Object} [scope] The value of <code>this</code> provided for the callback function.
 * @returns {Boolean} If the loop has been executed (and at least one item has been processed) and has not been broken.
 * @throws {TypeError} If the provided function returns a value that is not a boolean.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
DOMTokenList.prototype.loop = function (callback, startIndex, endIndex, step, scope) {
    return loopThroughList(this, callback, startIndex, endIndex, step, scope);
};
/**
 * @description Executes the provided function once for each item in this list. This loop is unbreakable.
 * @param {ForEachCallback} callback Function that produces an item of this list.
 * @param {Number} [startIndex] The start index.
 * @param {Number} [endIndex] The end index.
 * @param {Number} [step] The number by which the counter of the loop is incremented each time.
 * @param {Object} [scope] The value of <code>this</code> provided for the callback function.
 * @returns {undefined}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
DOMTokenList.prototype.forEach = function (callback, scope, startIndex, endIndex, step) {
    return forEachInList(this, callback, startIndex, endIndex, step, scope);
};
/**
 * @description Returns the child element which has all of the specified class names. If more than one child element is found, an exception is thrown.
 * @param {String} names A string representing the list of class names to match; class names are separated by whitespace.
 * @returns {HTMLElement} The child element which has all the specified class names (or undefined if none is found).
 * @throws {Error} If more than one child element which has all of the specified class names has been found.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.prototype.getElementByClassName = function (names) {
    /**
     * @description The child elements which have all of the specified class names.
     * @type {Array}
     */
    const elementList = this.getElementsByClassName(names);

    if (elementList.isEmpty())
        return undefined;

    if (elementList.length > 1)
        throw new Error("More than one element found.");

    return elementList.getFirst();
};
/**
 * @description Check if this element has any child element which has all of the specified class names.
 * @param {String} names A string representing the list of class names to match; class names are separated by whitespace.
 * @throws {Error} If more than one child element which has all of the specified class names has been found.
 * @returns {Boolean} If this element has any child element which has all of the specified class names.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.prototype.hasElementByClassName = function (names) {
    /**
     * @description The child elements which have all of the specified class names.
     * @type {Array}
     */
    const elementList = this.getElementsByClassName(names);

    if (elementList.length > 1)
        throw new Error("More than one element found.");

    return !elementList.isEmpty();
};
/**
 * @description Removes all child elements which have all of the specified class names.
 * @param {String|Array} names A string or array representing the list of class names to match; class names are separated by whitespace.
 * @returns {Number|undefined} The number of elements that have been removed (or undefined if names is null, undefined or if no elements have been found with those names).
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.prototype.removeElementsByClassName = function (names) {
    if (isNullOrUndefined(names))
        return undefined;

    if (names instanceof Array) {
        /**
         * @description The number of elements that have been removed.
         * @type {Number}
         */
        let elementsRemoved = 0;
        names.forEach(/** @param {String} name A class name. */ name => elementsRemoved += removeNodes(this.getElementsByClassName(name)), this);
        return elementsRemoved;
    }

    return removeNodes(this.getElementsByClassName(names));
};
/**
 * @description Removes the child element which has all of the specified class names and returns it.
 * @param {String|Array} names A string or array representing the list of class names to match; class names are separated by whitespace.
 * @returns {HTMLElement|undefined} The element that has been removed (or undefined if names is null, undefined or if no element has been found with those names).
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.prototype.removeElementByClassName = function (names) {
    /**
     * @description The child element which has all of the specified class names.
     * @type {HTMLElement|undefined}
     */
    const element = this.getElementByClassName(names);
    removeNode(element);
    return element;
};
/**
 * @description Sets the width of the element.
 * @param {Number} width The width of the element.
 * @returns {Boolean} If the width of the element has chagned (if the width of the element is not equal to the specified width).
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
CSSStyleDeclaration.prototype.setWidth = function (width) {
    checkRequiredNumber(width, "width");

    /**
     * @description The width as a pixel statement.
     * @type {String}
     */
    const widthStatement = createPixelStatement(width);

    if (this.width === widthStatement)
        return false;

    this.width = widthStatement;
    return true;
};
/**
 * @description Sets the height of the element.
 * @param {Number} height The height of the element.
 * @returns {Boolean} If the height of the element has chagned (if the height of the element is not equal to the specified height).
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
CSSStyleDeclaration.prototype.setHeight = function (height) {
    checkRequiredNumber(height, "height");

    /**
     * @description The height as a pixel statement.
     * @type {String}
     */
    const heightStatement = createPixelStatement(height);

    if (this.height === heightStatement)
        return false;

    this.height = heightStatement;
    return true;
};
/**
 * @description Returns the width of the document body.
 * @returns {Number} The width of the document body.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLBodyElement.prototype.getWidth = function () {
    return document.documentElement.clientWidth - this.getOuterWidth();
};
/**
 * @typedef {Object} BodyWidthDetails Body width details gathered when setting the body width.
 * @property {Number} bodyMinimumWidth The minimum width for the body.
 * @property {Number} bodyWidth The body width.
 * @property {String} bodyWidthPixelStatment The body width converted to a pixel statement.
 * @property {Boolean} hasChanged If the width of the body has been changed.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * @description Sets the document.body.style.width property in accordance to the actual width of the body.
 * @param {Number} [minimumWidth] The minimum width to use. If this value is lower than the body's minimum width, it will be ignored.
 * @returns {BodyWidthDetails} Body width details gathered when setting the body width.
 * @throws {TypeError} If minimumWidth is not null or undefined and not a number either.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLBodyElement.prototype.setWidth = function (minimumWidth) {
    this.style.width = "";

    /**
     * @description Body width details.
     * @type {BodyWidthDetails}
     */
    const details = {
        bodyMinimumWidth: getFromPixelStatement(getComputedStyle(this).minWidth)
    };

    if (!isNullOrUndefined(minimumWidth)) {
        if (!isNumber(minimumWidth))
            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "minimumWidth", "number"));

        if (minimumWidth >= details.bodyMinimumWidth)
            details.bodyMinimumWidth = minimumWidth;
    }

    /**
     * @description The width of the document body.
     * @type {Number}
     */
    const bodyWidth = this.getWidth();
    details.hasChanged = this.style.setWidth(details.bodyWidth = bodyWidth <= details.bodyMinimumWidth ?
        details.bodyMinimumWidth :
        bodyWidth);
    return details;
};
/**
 * @description Returns the height of the document body.
 * @returns {Number} The height of the document body.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLBodyElement.prototype.getHeight = function () {
    return document.documentElement.clientHeight - this.getOuterHeight();
};
/**
 * @typedef {Object} BodyHeightDetails Body height details gathered when setting the body height.
 * @property {Number} bodyMinimumHeight The minimum height for the body.
 * @property {Number} bodyHeight The body height.
 * @property {String} bodyHeightPixelStatment The body height converted to a pixel statement.
 * @property {Boolean} hasChanged If the height of the body has been changed.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * @description Sets the document.body.style.height property in accordance to the actual height of the body.
 * @param {Number} [minimumHeight] The minimum height to use. If this value is lower than the body's minimum height, it will be ignored.
 * @returns {BodyHeightDetails} Body height details gathered when setting the body height.
 * @throws {TypeError} If minimumHeight is not null or undefined and not a number either.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLBodyElement.prototype.setHeight = function (minimumHeight) {
    this.style.height = "";

    /**
     * @description Body height details.
     * @type {BodyWidthDetails}
     */
    const details = {
        bodyMinimumHeight: getFromPixelStatement(getComputedStyle(this).minHeight)
    };

    if (!isNullOrUndefined(minimumHeight)) {
        if (!isNumber(minimumHeight))
            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "minimumHeight", "number"));

        if (minimumHeight >= details.bodyMinimumHeight)
            details.bodyMinimumHeight = minimumHeight;
    }

    /**
     * @description The height of the document body.
     * @type {Number}
     */
    const bodyHeight =  this.getHeight();
    details.hasChanged = this.style.setHeight(details.bodyHeight = bodyHeight <= details.bodyMinimumHeight ?
        details.bodyMinimumHeight :
        bodyHeight);
    return details;
};
/**
 * @description The callback function to be executed when a new table body row cell is created.
 * @callback CssTableCreateBodyRowCellCallback
 * @param {HTMLDivElement} The new table body row.
 * @param {Number} cellIndex The index of the new table body row cell.
 * @returns {undefined}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * Defines a table using only division elements and CSS.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class CssTable {
    /**
     * @description CssTable constructor.
     * @param {HTMLElement|String|Boolean|Tab} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used as the id of the
     * parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appeneded to any node. If the parent is an instance of Tab
     * the element will be appended to the tab body.
     * @param {String} [className] The class name (can only be one class name).
     * @param {Number} cellsPerRow The number of cells per rows.
     * @throws {TypeError} If the number of cells per row is null, undefined or not a number.
     * @throws {String} If the number of cells is lower than 1.
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    constructor(parent, className, cellsPerRow) {
        checkRequiredNumber(cellsPerRow, "cellsPerRow");

        if (cellsPerRow < 1)
            throw new Error(COMMON_TEXT_LIST.invalidArgument + `the number of cells per row (the specified one is ${cellsPerRow}) cannot be lower than 1.`);

        /**
         * @description The table body.
         * @type {HTMLDivElement}
         */
        this.body = createDivisionElement(parent);

        if (!isNullOrUndefined(className))
            this.body.classList.set(className);

        /**
         * @description The number of cells per rows.
         * @type {Number}
         */
        this.cellsPerRow = cellsPerRow;
    }
    /**
     * @description Creates a new row.
     * @param {CssTableCreateBodyRowCellCallback} [callback] The callback to be executed when the new body is created.
     * @returns {HTMLDivElement}
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    createRow(callback) {
        /**
         * @description A new row.
         * @type {HTMLDivElement}
         */
        const newRow = createDivisionElement(this.body);
        /**
         * @description If the callback should be executed.
         * @type {Boolean}
         */
        const executeCallback = !isNullOrUndefined(callback);

        for (/** @description The current cell index.*/
            let cellIndex = 0;
            cellIndex < this.cellsPerRow;
            cellIndex++) {
            /**
             * @description A new cell.
             * @type {HTMLDivElement}
             */
            const newCell = createDivisionElement(newRow);

            if (executeCallback)
                callback(newCell, cellIndex);
        }

        return newRow;
    }
}
/**
 * @description Sets the transform's translate function.
 * @param {Number} abscissa The length representing the abscissa of the translating vector. If specified as a number the value will be converted to a pixel statement.
 * @param {Number} [ordinate] The legnth representing the ordinate of the translating vector. If specified as a number the value will be converted to a pixel statement.
 * @returns {undefined}
 * @throws {TypeError} If the specified abscissa is null, undefined or neither a number or a string.
 * @throws {TypeError} If the specified ordinate is not null and undefined and neither a number or a string.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
CSSStyleDeclaration.prototype.setTransformTranslate = function (abscissa, ordinate) {
    /**
     * @description The translate statement.
     * @type {String}
     */
    let translateStatement;

    if (isNullOrUndefined(abscissa))
        throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentCannotBeNullorUndefinedTemplate, "abscissa"));

    if (isNumber(abscissa))
        translateStatement = createPixelStatement(abscissa);
    else if (isString(abscissa))
        translateStatement = abscissa;
    else
        throw new TypeError(COMMON_TEXT_LIST.invalidArgument + quoteString("abscissa") + " is not a string or a number.");

    if (!isNullOrUndefined(ordinate)) {
        if (isNumber(ordinate))
            translateStatement += ", " + createPixelStatement(ordinate);
        else if (isString(ordinate))
            translateStatement += ", " + ordinate;
        else
            throw new TypeError(COMMON_TEXT_LIST.invalidArgument + quoteString("ordinate") + " is not a string or a number.");
    }

    this.transform = `translate(${translateStatement})`;
};
/**
 * @description Returns the transform's translate value.
 * @returns {String|undefined} The transform's translate value.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
CSSStyleDeclaration.prototype.getTransformTranslate = function () {
    return getSingleValueFromString("translate(@)", this.transform);
};
//<editor-fold defaultstate="collapsed" desc="CSS Box Model">
/**
 * @description Returns the total sum of the vertical top margin, padding and border.
 * @returns {Number} The total sum of the vertical top margin, padding and border.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.prototype.getOuterTopHeight = function () {
    /**
     * @description The computed element style.
     * @type {CSSStyleDeclaration}
     */
    const elementStyle = getComputedStyle(this);
    return getFromPixelStatement(elementStyle.marginTop) +
            getFromPixelStatement(elementStyle.paddingTop) +
            getFromPixelStatement(elementStyle.borderTopWidth);
};
/**
 * @description Returns the total sum of the vertical bottom margin, padding and border.
 * @returns {Number} The total sum of the vertical bottom margins, padding and border.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.prototype.getOuterBottomHeight = function () {
    /**
     * @description The computed element style.
     * @type {CSSStyleDeclaration}
     */
    const elementStyle = getComputedStyle(this);
    return getFromPixelStatement(elementStyle.marginBottom) +
            getFromPixelStatement(elementStyle.paddingBottom) +
            getFromPixelStatement(elementStyle.borderBottomWidth);
};
/**
 * @description Returns the total sum of the vertical margins, paddings and borders.
 * @returns {Number} The total sum of the vertical margins, paddings and borders.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.prototype.getOuterHeight = function () {
    /**
     * @description The computed element style.
     * @type {CSSStyleDeclaration}
     */
    const elementStyle = getComputedStyle(this);
    return getFromPixelStatement(elementStyle.marginTop) +
            getFromPixelStatement(elementStyle.marginBottom) +
            getFromPixelStatement(elementStyle.paddingTop) +
            getFromPixelStatement(elementStyle.paddingBottom) +
            getFromPixelStatement(elementStyle.borderTopWidth) +
            getFromPixelStatement(elementStyle.borderBottomWidth);
};
/**
 * @description Returns the height of the element's content, including content not visible on the screen due to overflow.
 * @returns {Number} The height of the element's content, including content not visible on the screen due to overflow.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.prototype.getInnerHeight = function () {
    /**
     * @description The computed element style.
     * @type {CSSStyleDeclaration}
     */
    const elementStyle = getComputedStyle(this);
    return this.getBoundingClientRect().height -
            getFromPixelStatement(elementStyle.paddingTop) -
            getFromPixelStatement(elementStyle.paddingBottom) -
            getFromPixelStatement(elementStyle.borderTopWidth) -
            getFromPixelStatement(elementStyle.borderBottomWidth);
};
/**
 * @description Returns the inner and outer height of the rectangle box.
 * @returns {Number} The inner and outer height of the rectangle box.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.prototype.getBoxHeight = function () {
    /**
     * @description The computed element style.
     * @type {CSSStyleDeclaration}
     */
    const elementStyle = getComputedStyle(this);
    return this.getBoundingClientRect().height +
            getFromPixelStatement(elementStyle.marginTop) +
            getFromPixelStatement(elementStyle.marginBottom);
};
/**
 * @description Returns the total sum of the horizontal right margin, padding and border.
 * @returns {Number} The total sum of the horizontal right margin, padding and border.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.prototype.getOuterLeftWidth = function () {
    /**
     * @description The computed element style.
     * @type {CSSStyleDeclaration}
     */
    const elementStyle = getComputedStyle(this);
    return getFromPixelStatement(elementStyle.marginLeft) +
            getFromPixelStatement(elementStyle.paddingLeft) +
            getFromPixelStatement(elementStyle.borderLeftWidth);
};
/**
 * @description Returns the total sum of the horizontal left margin, padding and border.
 * @returns {Number} The total sum of the horizontal left margin, padding and border.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.prototype.getOuterRightWidth = function () {
    /**
     * @description The computed element style.
     * @type {CSSStyleDeclaration}
     */
    const elementStyle = getComputedStyle(this);
    return getFromPixelStatement(elementStyle.marginRight) +
            getFromPixelStatement(elementStyle.paddingRight) +
            getFromPixelStatement(elementStyle.borderRightWidth);
};
/**
 * @description Returns the total sum of the horizontal margins, paddings and borders.
 * @returns {Number} The total sum of the horizontal margins, paddings and borders.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.prototype.getOuterWidth = function () {
    /**
     * @description The computed element style.
     * @type {CSSStyleDeclaration}
     */
    const elementStyle = getComputedStyle(this);
    return getFromPixelStatement(elementStyle.marginLeft) +
            getFromPixelStatement(elementStyle.marginRight) +
            getFromPixelStatement(elementStyle.paddingLeft) +
            getFromPixelStatement(elementStyle.paddingRight) +
            getFromPixelStatement(elementStyle.borderLeftWidth) +
            getFromPixelStatement(elementStyle.borderRightWidth);
};
/**
 * @description Returns the width of the element's content, including content not visible on the screen due to overflow.
 * @returns {Number} The width of the element's content, including content not visible on the screen due to overflow.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.prototype.getInnerWidth = function () {
    /**
     * @description The computed element style.
     * @type {CSSStyleDeclaration}
     */
    const elementStyle = getComputedStyle(this);
    return this.getBoundingClientRect().width -
            getFromPixelStatement(elementStyle.paddingLeft) -
            getFromPixelStatement(elementStyle.paddingRight) -
            getFromPixelStatement(elementStyle.borderLeftWidth) -
            getFromPixelStatement(elementStyle.borderRightWidth);
};
/**
 * @description Returns the inner and outer width of the rectangle box.
 * @returns {Number} The inner and outer width of the rectangle box.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.prototype.getBoxWidth = function () {
    /**
     * @description The computed element style.
     * @type {CSSStyleDeclaration}
     */
    const elementStyle = getComputedStyle(this);
    return this.getBoundingClientRect().width +
            getFromPixelStatement(elementStyle.marginLeft) +
            getFromPixelStatement(elementStyle.marginRight);

};
//</editor-fold>
//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="Files">
/**
 * @description Executes the provided function once for each file in this list. This loop is breakable.
 * @param {LoopCallback} callback Function that produces a file from this list.
 * @param {Number} [startIndex] The start index.
 * @param {Number} [endIndex] The end index.
 * @param {Number} [step] The number by which the counter of the loop is incremented each time.
 * @param {Object} [scope] The value of <code>this</code> provided for the callback function.
 * @returns {Boolean} If the loop has been executed (and at least one item has been processed) and has not been broken.
 * @throws {TypeError} If the provided function returns a value that is not a boolean.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
FileList.prototype.loop = function (callback, scope, startIndex, endIndex, step) {
    return loopThroughList(this, callback, startIndex, endIndex, step, scope);
};
/**
 * @description Executes the provided function once for each file in this list. This loop is unbreakable.
 * @param {ForEachCallback} callback Function that produces a file of this list.
 * @param {Number} [startIndex] The start index.
 * @param {Number} [endIndex] The end index.
 * @param {Number} [step] The number by which the counter of the loop is incremented each time.
 * @param {Object} [scope] The value of <code>this</code> provided for the callback function.
 * @returns {undefined}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
FileList.prototype.forEach = function (callback, scope, startIndex, endIndex, step) {
    return forEachInList(this, callback, startIndex, endIndex, step, scope);
};
//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="Map">
/**
 * @description Checks if this map is empty.
 * @returns {Boolean} If this is empty.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Map.prototype.isEmpty = function () {
    return this.size === 0;
};
/**
 * @description Renames a key in this map.
 * @param {Object} oldKey The key to replace.
 * @param {Object} newKey The replacement key.
 * @returns {Boolean} If the specified key has been renamed.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Map.prototype.rename = function (oldKey, newKey) {
    /**
     * @description The value associated with the specified old key.
     * @type {undefined|Object}
     */
    const value = this.get(oldKey);

    if (value === undefined ||
            this.delete(oldKey))
        return false;

    this.set(newKey, oldKey);
    return true;
};
/**
 * @description Cuts the specified element from this map and returns it.
 * @param {Object} key The key of the element to cut.
 * @returns {Object}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Map.prototype.cut = function (key) {
    /**
     * @description The value associated with the specified key.
     * @type {undefined|Object}
     */
    const value = this.get(key);

    if (value === undefined)
        return undefined;

    this.delete(key);
    return value;
};
//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="URL">
/**
 * @description Defines a list of queries that can be set and retrieved. All queries are saved as strings in this list because they are created to be appeneded to an URL.
 * @public
 * @class QueryList
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function QueryParameterList() {
    /**
     * @description A map to store queries.
     * @type {Map}
     */
    let _map = new Map();
    /**
     * @description A reference to <code>this</code>.
     * @type {QueryParameterList}
     */
    const _queryParameterList = this;

    /**
     * @description Sets a new query in this list with the specified name and value. If the value of a query is null or undefined it will be not set.
     * @param {String} name The name of the query.
     * @param {Number|Boolean|String} value The value of the query.
     * @param {Number|Boolean|String} [defaultValue] The default value of the query to use if the value of the query is null or undefined.
     * @returns {Boolean} If the query has been set.
     * @throws {Error} If the name is null, undefined, empty or white space.
     * @throws {TypeError} If the name is not a string.
     * @throws {TypeError} If the value is not an instance of a recognized query type.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.set = (name, value, defaultValue) => {
        /**
         * @description Sets the new query in this list with the specified name and the converted value.
         * @param {String} value The value of the query, converted to a string.
         * @returns {undefined}
         * @private
         * @since 1.0
         * @author Manuel Milosavljević <manuel@synergystructure.com>
         */
        function setString(value) {
            if (!value.isEmpty())
                _map.set(decodeURIComponent(name).toLowerCase(), decodeURIComponent(value));
        }

        checkRequiredString(name, "name");

        if (name.isEmpty())
            throw new Error(COMMON_TEXT_LIST.invalidArgument + quoteString("name") + " cannot empty or white space.");

        if (isNullOrUndefined(value)) {
            if (isNullOrUndefined(defaultValue))
                return false;

            value = defaultValue;
        }

        switch (typeof value) {
            case "number":
                setString(value.toString());
                return true;
            case "boolean":
                setString(value ?
                    QueryParameterList.BOOLEAN_TRUE_PARAMETER_VALUE :
                    QueryParameterList.BOOLEAN_FALSE_PARAMETER_VALUE);
                return true;
            case "string":
                setString(value);
                return true;
            default:
                throw new TypeError(COMMON_TEXT_LIST.invalidArgument + quoteString("value") + " is not an instance of a recognized query type.");
        }
    };
    /**
     * @description Returns the string value of a query with the specified name.
     * @param {String} name The name of the query.
     * @returns {undefined|String} The string value of a query with the specified name. If not found, undefined will be returned.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.getString = name => _map.get(name);
    /**
     * @description Returns the numeral value of a query with the specified name.
     * @param {String} name The name of the query.
     * @param {Number} [radix] An integer between 2 and 36 that represents the radix (the base in mathematical numeral systems) of the query.
     * @returns {undefined|Number} The numeral value of a query with the specified name. If not found, undefined will be returned.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.getNumber = (name, radix) => {
        /**
         * @description The (unformatted) query value with the specified name.
         * @type {Object|undefined}
         */
        const unformattedValue = _map.get(name);
        return unformattedValue === undefined ?
            undefined :
            Number.parseInt(unformattedValue, radix);
    };
    /**
     * @description Returns the boolean value of a query with the specified name.
     * @param {String} name The name of the query.
     * @returns {undefined|Boolean} The boolean value of a query with the specified name. If not found, undefined will be returned.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.getBoolean = name => {
        /**
         * @description The unformatted value that is associated with the specified name.
         * @type {String}
         */
        const unformattedValue = _map.get(name);

        if (isNullOrUndefined(unformattedValue) ||
                unformattedValue.isWhiteSpace())
            return undefined;

        switch (unformattedValue) {
            case QueryParameterList.NULL_PARAMETER_VALUE:
                return null;
            case QueryParameterList.BOOLEAN_TRUE_PARAMETER_VALUE:
                return true;
            case QueryParameterList.BOOLEAN_FALSE_PARAMETER_VALUE:
                return false;
            default:
                throw new TypeError("Invalid boolean value.");
        }
    };
    /**
     * @description Cuts (gets and deletes) the string value of a query with the specified name.
     * @param {String} name The name of the query.
     * @returns {undefined|String} The cut string value of a query with the specified name. If not found, undefined will be returned.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.cutString = name => {
        if (!_map.has(name))
            return undefined;

        /**
         * @description The query value with the specified name.
         * @type {String|undefined}
         */
        const value = _queryParameterList.getString(name);
        _queryParameterList.delete(name);
        return value;
    };
    /**
     * @description Cuts (gets and deletes) the numeral value of a query with the specified name.
     * @param {String} name The name of the query.
     * @param {Number} [radix] An integer between 2 and 36 that represents the radix (the base in mathematical numeral systems) of the query.
     * @returns {undefined|Number} The cut numeral value of a query with the specified name. If not found, undefined will be returned.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.cutNumber = (name, radix) => {
        if (!_map.has(name))
            return undefined;

        /**
         * @description The query value with the specified name.
         * @type {Number|undefined}
         */
        const value = _queryParameterList.getNumber(name, radix);
        _queryParameterList.delete(name);
        return value;
    };
    /**
     * @description Cuts (gets and deletes) the boolean value of a query with the specified name.
     * @param {String} name The name of the query.
     * @returns {undefined|Boolean} The cut boolean value of a query with the specified name. If not found, undefined will be returned.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.cutBoolean = name => {
        if (!_map.has(name))
            return undefined;

        /**
         * @description The query value with the specified name.
         * @type {Boolean|undefined}
         */
        const value = _queryParameterList.getBoolean(name);
        _queryParameterList.delete(name);
        return value;
    };
    /**
     * @description Deletes the query with the specified name from this list.
     * @param {String} name The name of the query.
     * @returns {Boolean} If a query has been found with the specified name and deleted.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.delete = name => _map.delete(name);
    /**
     * @description Clears this list from all queries.
     * @returns {Boolean} If any queries have been deleted.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.clear = () => {
        /**
         * @description If this query parameter list is empty.
         * @type {Boolean}
         */
        const isEmpty = _queryParameterList.isEmpty();
        _map.clear();
        return !isEmpty;
    };
    /**
     * @description Checks if this list has a query with the specified name.
     * @param {String} name The name of the query.
     * @returns {Boolean} If this list has a query with the specified name.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.has = name => _map.has(name);
    /**
     * @description Checks if the list is empty or not.
     * @returns {Boolean} If this list has any queries.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.isEmpty = () => _map.isEmpty();
    /**
     * @description Executes the specified callback function once per each query in this list in insertion order.
     * @param {Function} callback The function to execute for each query.
     * @param {Object} [scope] The value to use as <code>this</code> when executing the callback function.
     * @returns {undefined}
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.forEach = (callback, scope) => _map.forEach(callback, scope);
    /**
     * @description Returns the textual representation of this query parameter list in the form of an URL query string.
     * @returns {String} The textual representation of this query list.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.toString = () => {
        /**
         * @description Creates a query parameter (from the first one in the list).
         * @returns {String} A query parameter.
         * @private
         * @since 1.0
         * @author Manuel Milosavljević <manuel@synergystructure.com>
         */
        function createQueryParameter() {
            /**
             * @description The name of the first query parameter in the list.
             * @type {String}
             */
            const name = queryParameterNameList.shift();
            return encodeURIComponent(name) + "\u003D" + encodeURIComponent(_map.get(name));
        }

        /**
         * @description A list all available query parameter names.
         * @type {String[]}
         */
        const queryParameterNameList = [];
        _queryParameterList.forEach((value, key) => queryParameterNameList.push(key));
        queryParameterNameList.sort();

        if (queryParameterNameList.isEmpty())
            return new String();

        /**
         * @description The textual representation of this query list.
         * @type {String}
         */
        let string = "\u003F" + createQueryParameter();

        while (!queryParameterNameList.isEmpty())
            string += "\u0026" + createQueryParameter();

        return string;
    };
}
/**
 * @description The <code>true</code> value as a URL query parameter value.
 * @type {String}
 */
QueryParameterList.BooleanTrueParameterValue = "t";
/**
 * @description The <code>false</code> value as a URL query parameter value.
 * @type {String}
 */
QueryParameterList.BooleanFalseParameterValue = "f";
/**
 * @description The <code>null</code> value as a URL query parameter value.
 * @type {String}
 */
QueryParameterList.NullParameterValue = "n";

/**
 * @description Parses the specified query string to create a query list.
 * @param {String} queryString The query string to parse.
 * @returns {QueryParameterList|null} The query list.
 * @throws {Error} If the specified query string is not a string.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
QueryParameterList.parse = queryString => {
    if (isNullOrUndefined(queryString))
        return null;

    if (!isString(queryString))
        throw new TypeError(COMMON_TEXT_LIST.invalidArgument + quoteString("queryString") + " is not a string.");

    if (queryString.isEmpty())
        return null;

    /**
     * @description A new query list.
     * @type {QueryParameterList}
     */
    const queryList = new QueryParameterList();
    /**
     * @description The unformatted parameters from the specified query string.
     * @type {Array}
     */
    const unformattedParamerList = (queryString.startsWith("?") ?
        queryString.substr(1) :
        queryString).split("&");

    while (!unformattedParamerList.isEmpty()) {
        /**
         * @description The first parameter from the unformatted parameter list.
         * @type {Array}
         */
        const parameter = unformattedParamerList.pop().split("=");

        if (parameter.length !== 2)
            throw new Error("Invalid query found.");

        queryList.set(parameter.getFirst(), parameter.getLast());
    }

    return queryList;
};
/**
 * @description Returns all available queries from the current URL.
 * @returns {QueryParameterList} A list of all available queries from the current URL.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
QueryParameterList.getAllAvailableQueries = () => QueryParameterList.parse(location.search);
/**
 * @description Clears all queries from the current URL.
 * @param {String} title The title for the state.
 * @returns {undefined}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
QueryParameterList.clearUrlQueryParameterList = title => history.pushState(null, title, location.pathname);
/**
 * @description Updates the URL to match the specified parameters.
 * @param {QueryParameterList} parameterList The parameters.
 * @param {String} title The title of the new state.
 * @returns {undefined}
 * @throws {TypeError} If the parameters variable is null, undefined or not an instance of QueryParameterList.
 * @throws {TypeError} If the title is null, undefined or not a string.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
QueryParameterList.updateUrl = (parameterList, title) => {
    checkRequiredArgument(parameterList, "parameterList", QueryParameterList);
    checkRequiredString(title, "title");

    if (parameterList.isEmpty())
        QueryParameterList.clearUrlQueryParameterList();
    else
        history.pushState(null, title, parameterList.toString());
};
/**
 * @typedef {Object} UrlComponentList The components of an URL. Note: the user name and the password of the URL are not returned.
 * @property {String} schemeName The scheme name.
 * @property {String} hostName The host name (i.e. example.com).
 * @property {Number} port The port (or -1 if none is specified).
 * @property {QueryParameterList} queryList The parameters.
 * @property {String} fragment The fragment.
 * @property {Function} toString Converts the components into an URL.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * @description Parses the specified string representation of a URL into an object containing all the components of an URL.
 * @param {String} unparsedUrl The string representation of the URL to parse.
 * @returns {UrlComponentList} The parsed URL.
 * @throws {TypeError} If the unparsed URL is not a string.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function parseUrl(unparsedUrl) {
    checkRequiredString(unparsedUrl, "unparsedUrl", isString, "string");

    /**
     * @description The HTML anchor element for use as a URL parser.
     * @type {HTMLAnchorElement}
     */
    const parser = document.createElement("a");
    parser.href = unparsedUrl;

    /**
     * @description The URL path.
     * @type {String[]}
     */
    const path = [];
    /**
     * @description The solidus character code.
     * @type String
     */
    const solidusCharacterCode = "\u002F";

    if (!parser.pathname.isEmpty() &&
            parser.pathname !== solidusCharacterCode)
        parser.pathname.split(solidusCharacterCode).forEach(name => {
            if (!name.isEmpty())
                path.push(decodeURIComponent(name));
        });

    return Object.freeze({
        schemeName: parser.protocol,
        hostName: parser.hostname,
        port: isNullOrUndefined(parser.port) ||
                parser.port.isEmpty() ? -1 :
                    parseInt(parser.port),
        path: path,
        queryList: QueryParameterList.parse(parser.search),
        fragment: parser.hash,
        toString: () => {
            /**
             * @description The textual representation of this URL.
             * @type {String}
             */
            let string = new String();

            if (this.schemeName)
                string += this.schemeName + "//";

            string += this.hostName;

            if (this.port !== -1)
                string += ":" + this.port.toString();

            this.path.forEach(directory => string += solidusCharacterCode + encodeURIComponent(directory));

            if (!isNullOrUndefined(this.queryList))
                string += this.queryList.toString();

            if (this.fragment)
                string += this.fragment;

            return string;
        }
    });
}
//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="Localization">
/**
 *
 * @description Defines a locale.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class Locale {
    /**
     * @description Locale constructor.
     * @param {String} languageCode The language code in the ISO 639-1 format.
     * @param {String} countryCode The country code in the ISO 3166 alpha-2 format.
     * @throws {Error} If the language code is not a valid ISO 639-1 code.
     * @throws {Error} If the country code is not a valid ISO 3166-1 alpha-2 code.
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    constructor(languageCode, countryCode) {
        checkRequiredString(languageCode, "languageCode");
        checkRequiredString(countryCode, "countryCode");

        if (languageCode.length !== 2)
            throw new Error("The language code is not a valid ISO 639-1 code.");

        if (countryCode.length !== 2)
            throw new Error("The country code is not a valid ISO 3166-1 alpha-2 code.");

        /**
         * @description The language code in the ISO 639-1 format.
         * @type {String}
         */
        this.languageCode = languageCode.toLowerCase();
        /**
         * @description The country code in the ISO 3166 alpha-2 format.
         * @type {String}
         */
        this.countryCode = countryCode.toUpperCase();
    }
    /**
     * @description Returns a string representation of this locale.
     * @returns {String}
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    toString() {
        return this.languageCode + "\u005F" + this.countryCode;
    }
    /**
     * @description Sets this locale as the default locale of the document.
     * @returns {Boolean} If the locale has been set (the locale won't be set if it has already been set).
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    setAsDefault() {
        /**
         * This locale as a string.
         * @type {String}
         */
        const localeAsString = this.toString();

        if (document.documentElement.lang !== localeAsString) {
            document.documentElement.lang = localeAsString;
            return true;
        }

        return false;
    }
    /**
     * @description Returns the document locale.
     * @returns {Locale} The document locale.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    static getDocumentLocale() {
        /**
         * The document locale as a string.
         * @type {String}
         */
        const localeAsString = Locale.getDocumentLocaleAsString();

        if (!localeAsString)
            return undefined;

        /**
         * The locale as an array.
         * @type {Array}
         */
        let localeAsArray = localeAsString.split("\u005F" /* _ */);

        if (localeAsArray.length !== 2)
            localeAsArray = localeAsString.split("\u002D" /* - */);

        if (localeAsArray.length !== 2)
            throw new Error("Both the language code and country code was expected, but only one was found.");

        return new Locale(localeAsArray[0], localeAsArray[1]);
    }
    /**
     * @description Returns the default locale. If document locale is set it will be used, otherwise the default locale (as specified in options-ss.js) will be used.
     * @returns {Locale} The default locale.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    static getDefaultLocale() {
        /**
         * @description The document locale.
         * @type {Locale}
         */
        const documentLocale = Locale.getDocumentLocale();
        return !documentLocale ?
            new Locale(DEFAULT_LANGUAGE_CODE, DEFAULT_COUNTRY_CODE) :
            documentLocale;
    }
}
/**
 * @description A map of localized texts.
 * @type {Map}
 */
let LOCALIZED_TEXTS_MAP = new Map();
//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="Logging">
/**
 * @description Outputs a message to the Web Console, unless that is disabled in options.js.
 * @param {String|Object} anything Anything, whether a string or an object.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function logToConsole(anything) {
    if (!ENABLE_LOGGING)
        return;

    console.log(anything);
}
/**
 * @description Outputs a warning to the Web Console, unless that is disabled in options.js.
 * @param {String|Object} anything Anything, whether a string or an object.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function logWarningToConsole(anything) {
    if (!ENABLE_LOGGING)
        return;

    console.warn(anything);
}
/**
 * @description Outputs an error to the Web Console, unless that is disabled in options.js.
 * @param {String|Object} anything Anything, whether a string or an object.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function logErrorToConsole(anything) {
    if (!ENABLE_LOGGING)
        return;

    console.error(anything);
}
/**
 * @description Creates a string to ouput it to the Web Console from the specified string template, which may contain parameter names (between curly brackets) for which the parameter values should be
 * specified in a text map (an instance of <code>TextMap</code>) as the second and last argument. If the string template contains nameless parameters (<code>@</code>) then all arguments after the
 * string template argument should be matching parameter values. Both named and nameless parameters can be escaped using a backslash (U+005C) (backlashes can also be escaped using a backslash).
 * @param {String} templateString The template string to interpret.
 * @param {...Object} parameterList The parameter values.
 * @returns {String} The string, created from the template and - if applicable - the specified values.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function logStringFromTemplateToConsole(templateString, ...parameterList) {
    if (ENABLE_LOGGING)
        console.log(createStringFromTemplate.apply(undefined, arguments));
}
//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="Events">
/**
 * @description Checks the specified event name.
 * @param {String} eventName The event name.
 * @returns {undefined}
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function checkEventName(eventName) {
    checkRequiredString(eventName, "eventName");
}
/**
 * @typedef {Function} CustomEventTarget.Listener Event listener.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * @description Defines an interface for adding, removing and dispatching events. This class is the base class for all classes that receive and dispatch events and may have listeners for them.
 * @param {String} [domId] An ID identifying this instance.
 * @public
 * @class CustomEventTarget
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function CustomEventTarget(domId) {
    ClientId.check(domId);

    /**
     * @description A map of added event listeners.
     * @type {Map}
     */
    const _callbackListMap = new Map();
    /**
     * @description A reference to <code>this</code>.
     * @type {CustomEventTarget}
     */
    const _customEventTarget = this;

    /**
     * @description Adds an event listener.
     * @param {String} eventName The name of the event type to listen for.
     * @param {CustomEventTarget.Listener} callback The event listener.
     * @returns {undefined}
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.addEventListener = (eventName, callback) => {
        checkEventName(eventName);

        /**
         * @description A list of callbacks that are associated with the specified event name.
         * @type {Array}
         */
        const callbackList = _callbackListMap.get(eventName) || [];
        callbackList.push(callback);
        _callbackListMap.set(eventName, callbackList);
    };
    /**
     * @description Removes an event listener.
     * @param {String} eventName The name of the event type to remove.
     * @param {CustomEventTarget.Listener} callback The event listener.
     * @returns {Boolean} If the event listener has been found and removed.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.removeEventListener = (eventName, callback) => {
        checkEventName(eventName);

        /**
         * @description A list of callbacks that are associated with the specified event name.
         * @type {Array}
         */
        const callbackList = _callbackListMap.get(eventName);

        if (!isNullOrUndefined(callbackList)) {
            /**
             * @description The index of the specified callback in the list of callbacks.
             * @type {Number}
             */
            const callbackListIndex = callbackList.indexOf(callback);

            if (callbackListIndex > -1) {
                callbackList.splice(callbackListIndex, 1);
                return true;
            }
        }

        return false;
    };
    /**
     * @description Removes event listener with the specific name of the event type.
     * @param {String} eventName The name of the event type.
     * @returns {Boolean} If the event listeners have been found and removed.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.removeEventListeners = eventName => _callbackListMap.delete(checkEventName(eventName));
    /**
     * @description Removes all event listeners that have been added (irrespective of the event name).
     * @returns {undefined}
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.removeAllEventListeners = () => _callbackListMap.clear();
    /**
     * @description Dispatch an event. The parameter must be the name of the event type. Every other parameter that is specified will be used as the parameters of the event listeners that are
     * associated with the name of the event type. All event listeners of the specified event type will be executed but if any event listener returns "false" then this chain will be broken.
     * @param {String} eventName The event name.
     * @param {...Object} [parameterList] The parameters.
     * @returns {Boolean} True if the chain has not been broken. False if the chain has been broken.
     * @throws {TypeError} If the name of the event type is null, undefined or not a string.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.dispatchEvent = (eventName, ...parameterList) => {
        checkEventName(eventName);

        /**
         * @description A list of callbacks that are associated with the specified event name.
         * @type {Array}
         */
        const callbackList = _callbackListMap.get(eventName);

        if (!isNullOrUndefined(callbackList))
            for (/** @param {Number} callbackListIndex The current callback list index. */
                let callbackListIndex = 0;
                callbackListIndex < callbackList.length;
                callbackListIndex++) {
                /**
                 * @description If the loop can continue.
                 * @type {Boolean}
                 */
                const canContinue = callbackList[callbackListIndex].apply(_customEventTarget, parameterList);

                if (!isNullOrUndefined(canContinue) &&
                        isBoolean(canContinue) &&
                        !canContinue)
                    return false;
            }

        return true;
    };

    /**
     * @description The ID.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    Object.defineProperty(this, "domId", {
        get: () => domId
    });
}
/**
 * @description Defines a manager for the manipulation of event targets (both EventTarget and CustomEventTarget). This class is the base class for all casess that manage multiple event targets.
 * @param {Object} target The target (that implements either the EventTarget or CustomEventTarget class).
 * @public
 * @class EventTargetManager
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function EventTargetManager(target) {
    CustomEventTarget.call(this);

    if (isNullOrUndefined(target))
        throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentCannotBeNullorUndefinedTemplate, target));

    /**
     * @description A reference to <code>this</code>.
     * @type {EventTargetManager}
     */
    const _eventTargetManager = this;
    /**
     * @description The map that contains all the event targets.
     * @type {Map}
     */
    const _eventTargetMap = new Map();
    /**
     * @description If event targets can be added and removed from this event target manager.
     * @type {Boolean}
     */
    let _isLocked = false;

    /**
     * @description Adds an event target.
     * @param {String} eventName The name of the event type to listen for.
     * @param {EventTarget|CustomEventTarget} eventTarget The event target.
     * @returns {undefined}
     * @throws {Error} If this event target manager is currently locked.
     * @throws {TypeError} If the specified event target is null or undefined.
     * @throws {Error} If this event target has already been registrated.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.addEventTarget = (eventName, eventTarget) => {
        if (_isLocked)
            throw new Error("This event target manager is currently locked.");

        checkEventName(eventName);

        if (isNullOrUndefined(eventTarget))
            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentCannotBeNullorUndefinedTemplate, "methodOrClass"));

        /**
         * @description The event target list that is associated with the specified event name.
         * @type {Array}
         */
        const eventTargetList = _eventTargetMap.get(eventName) || [];

        if (eventTargetList.isEmpty()) {
            _eventTargetMap.set(eventName, eventTargetList);
            target.addEventListener(eventName, function () {
                /**
                 * @description All the arguments that need to be dispatched with each event target.
                 */
                const dispatchArguments = Array.from(arguments);
                dispatchArguments.unshift(eventName);

                for (/** @description The current event target list index. @type {Number} */
                    let eventTargetListIndex = 0;
                    eventTargetListIndex < eventTargetList.length;
                    eventTargetListIndex++) {
                    /**
                     * @description The current event target.
                     * @type {EventTarget|CustomEventTarget}
                     */
                    const eventTarget = eventTargetList[eventTargetListIndex];

                    if (!eventTarget.isPropertyNullOrUndefined("domId") &&
                            !document.body.getElementById(eventTarget.domId)) {
                        eventTargetList.splice(eventTargetListIndex--, 1);
                        continue;
                    }

                    /**
                     * @description If the loop can continue.
                     * @type {Boolean}
                     */
                    const canContinue = eventTarget.dispatchEvent.apply(undefined, dispatchArguments);

                    if (!isNullOrUndefined(canContinue) &&
                        isBoolean(canContinue) &&
                        !canContinue)
                        return;
                }
            });
        }

        if (eventTargetList.contains(eventTarget))
            throw new Error("This event target has already been registrated.");

        eventTargetList.push(eventTarget);
    };
    /**
     * @description Removes all even targets from this manager.
     * @returns {undefined}
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.removeEventTargets = () => {
        _isLocked = true;

        try {
            _eventTargetMap.forEach((value, key) => _eventTargetManager.removeEventTarget(key, value));
        } finally {
            _isLocked = false;
        }
    };
    /**
     * @description Removes an event target.
     * @param {String} eventName The name of the event type to remove.
     * @param {EventTarget|CustomEventTarget} eventTarget The event target.
     * @returns {Boolean} If the event target has been found and removed.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.removeEventTarget = (eventName, eventTarget) => {
        checkEventName(eventName);

        /**
         * @description The event target list that is associated with the specified event name.
         * @type {Array}
         */
        const eventTargetList = _eventTargetMap.get(eventName);

        if (!!eventTargetList)
            for (/** @param {Number} eventTargetListIndex The current event target list index. */
                let eventTargetListIndex = 0;
                eventTargetListIndex < eventTargetList.length;
                eventTargetListIndex++)
                if (eventTarget === eventTargetList[eventTargetListIndex]) {
                    eventTargetList.splice(eventTargetListIndex, 1);
                    return true;
                }

        return false;
    };
}
// TODO Add documentation
const GLOBAL_EVENT_LISTENER = new CustomEventTarget(ClientId.generate());
//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="Web Service">
/**
 * @description A list of HTTP response status codes.
 * @type {Object}
 * @readonly
 * @see http://w3.org/Protocols/rfc2616/rfc2616-sec10.html
 * @see https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
 */
const HTTP_STATUS_CODE_LIST = {
    /**
     * @description This class of status code indicates that the client's request was successfully received, understood, and accepted.
     * @type {Object}
     */
    success: {
        /**
         * @description Standard response for successful HTTP requests. The actual response will depend on the request method used. In a GET request, the response will contain an entity corresponding
         * to the requested resource. In a POST request, the response will contain an entity describing or containing the result of the action.
         * @type {Number}
         */
        ok: 200,
        /**
         * @description The request has been fulfilled and resulted in a new resource being created.
         * @type {Number}
         */
        created: 201,
        /**
         * @description The request has been accepted for processing, but the processing has not been completed. The request might or might not eventually be acted upon, as it might be disallowed
         * when processing actually takes place.
         * @type {Number}
         */
        accepted: 202,
        /**
         * @description The server successfully processed the request, but is returning information that may be from another source.
         * @type {Number}
         */
        nonAuthoritativeInformation: 203,
        /**
         * @description The server successfully processed the request, but is not returning any content.
         * @type {Number}
         */
        noContent: 204,
        /**
         * @description The server successfully processed the request, but is not returning any content. Unlike a 204 response, this response requires that the requester reset the document view.
         * @type {Number}
         */
        resetContent: 205,
        /**
         * @description The server is delivering only part of the resource (byte serving) due to a range header sent by the client. The range header is used by tools like wget to enable resuming of
         * interrupted downloads, or split a download into multiple simultaneous streams.
         * @type {Number}
         */
        partialContent: 206,
        /**
         * @description The message body that follows is an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.
         * @type {Number}
         */
        multiStatus: 207,
        /**
         * @description The members of a DAV binding have already been enumerated in a previous reply to this request, and are not being included again.
         * @type {Number}
         */
        alreadyReported: 208,
        /**
         * @description The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.
         * @type {Number}
         */
        imUsed: 226
    },
    /**
     * @description This class of status code indicates the client must take additional action to complete the request.
     * @type {Object}
     */
    redirection: {
        /**
         * @description Indicates multiple options for the resource that the client may follow. It, for instance, could be used to present different format options for video, list files with
         * different extensions, or word sense disambiguation.
         * @type {Number}
         */
        multipleChoices: 300,
        /**
         * @description This and all future requests should be directed to the specified URI.
         * @type {Number}
         */
        movedPermanently: 301,
        /**
         * @description This is an example of industry practice contradicting the standard. The HTTP/1.0 specification (RFC 1945) required the client to perform a temporary redirect (the original
         * describing phrase was "Moved Temporarily"), but popular browsers implemented 302 with the functionality of a 303 See Other. Therefore, HTTP/1.1 added status codes 303 and 307 to distinguish
         * between the two behaviours. However, some Web applications and frameworks use the 302 status code as if it were the 303.
         * @type {Number}
         */
        found: 302,
        /**
         * @description The response to the request can be found under another URI using a GET method. When received in response to a POST (or PUT/DELETE), it should be assumed that the server has
         * received the data and the redirect should be issued with a separate GET message.
         * @type {Number}
         */
        seeOther: 303,
        /**
         * @description Indicates that the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match. This means that there is no need to
         * retransmit the resource, since the client still has a previously-downloaded copy.
         * @type {Number}
         */
        notModified: 304,
        /**
         * @description The requested resource is only available through a proxy, whose address is provided in the response. Many HTTP clients (such as Mozilla and Internet Explorer) do not correctly
         * handle responses with this status code, primarily for security reasons.
         * @type {Number}
         */
        useProxy: 305,
        /**
         * @description No longer used. Originally meant "Subsequent requests should use the specified proxy."
         * @type {Number}
         */
        switchProxy: 306,
        /**
         * @description In this case, the request should be repeated with another URI; however, future requests should still use the original URI. In contrast to how 302 was historically implemented,
         * the request method is not allowed to be changed when reissuing the original request. For instance, a POST request should be repeated using another POST request.
         * @type {Number}
         */
        temporaryRedirect: 307,
        /**
         * @description The request, and all future requests should be repeated using another URI. 307 and 308 (as proposed) parallel the behaviours of 302 and 301, but do not allow the HTTP method
         * to change. So, for example, submitting a form to a permanently redirected resource may continue smoothly.
         * @type {Number}
         */
        permanentRedirect: 308
    },
    /**
     * @description The 4xx class of status code is intended for cases in which the client seems to have erred.
     * @type {Object}
     */
    clientError: {
        /**
         * @description The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or
         * deceptive request routing).
         * @type {Number}
         */
        badrequest: 400,
        /**
         * @description
         * @type {Number}
         */
        unauthorized: 401,
        /**
         * @description Reserved for future use. The original intention was that this code might be used as part of some form of digital cash or micropayment scheme, but that has not happened, and
         * this code is not usually used. YouTube uses this status if a particular IP address has made excessive requests, and requires the person to enter a CAPTCHA.
         * @type {Number}
         */
        paymentRequired: 402,
        /**
         * @description The requested resource could not be found but may be available again in the future. Subsequent requests by the client are permissible.
         * @type {Number}
         */
        forbidden: 403,
        /**
         * @description The requested resource could not be found but may be available again in the future. Subsequent requests by the client are permissible.
         * @type {Number}
         */
        notFound: 404,
        /**
         * @description A request was made of a resource using a request method not supported by that resource; for example, using GET on a form which requires data to be presented via POST, or using
         * PUT on a read-only resource.
         * @type {Number}
         */
        methodNotAllowed: 405,
        /**
         * @description The requested resource is only capable of generating content not acceptable according to the Accept headers sent in the request.
         * @type {Number}
         */
        notAcceptable: 406,
        /**
         * @description The client must first authenticate itself with the proxy.
         * @type {Number}
         */
        proxyAuthenticationRequired: 407,
        /**
         * @description The server timed out waiting for the request. According to HTTP specifications: "The client did not produce a request within the time that the server was prepared to wait.
         * The client MAY repeat the request without modifications at any later time."
         * @type {Number}
         */
        requestTimeout: 408,
        /**
         * @description Indicates that the request could not be processed because of conflict in the request, such as an edit conflict in the case of multiple updates.
         * @type {Number}
         */
        conflict: 409,
        /**
         * @description Indicates that the resource requested is no longer available and will not be available again. This should be used when a resource has been intentionally removed and the
         * resource should be purged. Upon receiving a 410 status code, the client should not request the resource again in the future. Clients such as search engines should remove the resource from
         * their indices. Most use cases do not require clients and search engines to purge the resource, and a "404 Not Found" may be used instead.
         * @type {Number}
         */
        gone: 410,
        /**
         * @description The request did not specify the length of its content, which is required by the requested resource.
         * @type {Number}
         */
        lengthRequired: 411,
        /**
         * @description The server does not meet one of the preconditions that the requester put on the request.
         * @type {Number}
         */
        preconditionFailed: 412,
        /**
         * @description The request is larger than the server is willing or able to process. Called "Request Entity Too Large " previously.
         * @type {Number}
         */
        payloadTooLarge: 413,
        /**
         * @description The URI provided was too long for the server to process. Often the result of too much data being encoded as a query-string of a GET request, in which case it should be
         * converted to a POST request.
         * @type {Number}
         */
        requestURITooLong: 414,
        /**
         * @description The request entity has a media type which the server or resource does not support. For example, the client uploads an image as image/svg+xml, but the server requires that
         * images use a different format.
         * @type {Number}
         */
        unsupportedMediaType: 415,
        /**
         * @description The client has asked for a portion of the file (byte serving), but the server cannot supply that portion. For example, if the client asked for a part of the file that lies
         * beyond the end of the file.
         * @type {Number}
         */
        requestedRangeNotSatisfiable: 416,
        /**
         * @description The server cannot meet the requirements of the Expect request-header field.
         * @type {Number}
         */
        expectationFailed: 417,
        /**
         * @description The request was directed at a server that is not able to produce a response (for example because a connection reuse).
         * @type {Number}
         */
        misdirectedRequest: 421,
        /**
         * @description The request was well-formed but was unable to be followed due to semantic errors.
         * @type {Number}
         */
        unprocessableEntity: 422,
        /**
         * @description The client should switch to a different protocol such as TLS/1.0, specified in the Upgrade header field.
         * @type {Number}
         */
        upgradeRequired: 426,
        /**
         * @description The origin server requires the request to be conditional. Intended to prevent "the 'lost update' problem, where a client GETs a resource's state, modifies it, and PUTs it back
         * to the server, when meanwhile a third party has modified the state on the server, leading to a conflict."
         * @type {Number}
         */
        preconditionRequired: 428,
        /**
         * @description The user has sent too many requests in a specified amount of time. Intended for use with rate limiting schemes.
         * @type {Number}
         */
        tooManyRequests: 429,
        /**
         * @description The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large.
         * @type {Number}
         */
        requestHeaderFieldsTooLarge: 431
    },
    /**
     * @description The server failed to fulfill an apparently valid request.
     * @type {Object}
     */
    serverError: {
        /**
         * @description A generic error message, specified when an unexpected condition was encountered and no more specific message is suitable.
         * @type {Number}
         */
        internalServerError: 500,
        /**
         * @description The server either does not recognize the request method, or it lacks the ability to fulfill the request. Usually this implies future availability (e.g., a new feature of a
         * web-service API).
         * @type {Number}
         */
        notImplemented: 501,
        /**
         * @description The server was acting as a gateway or proxy and received an invalid response from the upstream server.
         * @type {Number}
         */
        badGateway: 502,
        /**
         * @description The server is currently unavailable (because it is overloaded or down for maintenance). Generally, this is a temporary state.
         * @type {Number}
         */
        serviceUnavailable: 503,
        /**
         * @description The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.
         * @type {Number}
         */
        gatewayTimeout: 504,
        /**
         * @description The server does not support the HTTP protocol version used in the request.
         * @type {Number}
         */
        httpVersionNotSupported: 505,
        /**
         * @description Transparent content negotiation for the request results in a circular reference.
         * @type {Number}
         */
        variantAlsoNegotiates: 506,
        /**
         * @description The client needs to authenticate to gain network access. Intended for use by intercepting proxies used to control access to the network (e.g., "captive portals" used to
         * require agreement to Terms of Service before granting full Internet access via a Wi-Fi hotspot).
         * @type {Number}
         */
        networkAuthenticationRequired: 511
    }
};
/**
 * @description HTTP methods that correspond to CRUD operations.
 * @type {Object}
 * @readonly
 * @enum {String}
 */
const CRUD_HTTP_METHOD_LIST = Object.freeze({
    /**
     * Create operation, corresponds to HTTP method POST.
     */
    create: "POST",
    /**
     * Read operation, corresponds to HTTP method GET.
     */
    read: "GET",
    /**
     * Update operation, corresponds to HTTP method PUT.
     */
    update: "PUT",
    /**
     * Delete operation, corresponds to HTTP method DELETE.
     */
    "delete": "DELETE"
});
/**
 * @description Defines a representation of a network error.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class NetworkError extends Error {
    /**
     * @description NetworkError constructor.
     * @param {String} message The message.
     * @param {Number} httpStatusCode The HTTP status code.
     * @param {String} httpStatusDescription The HTTP status description.
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    constructor(message, httpStatusCode, httpStatusDescription) {
        super(message);
        this.httpStatusCode = httpStatusCode;
        this.httpStatusDescription = httpStatusDescription;
    }
}
/**
 * @description Checks if CORS (Cross-Origin Resource Sharing) is supported (by XMLHttpRequest).
 * @returns {Boolean} If CORS is supported.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
XMLHttpRequest.prototype.supportsCors = function () {
    return "withCredentials" in this;
};
/**
 * @description Defines a manager for the manipulation of HTTP request caching.
 * @class HttpRequestCacheManager
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function HttpRequestCacheManager() {
    /**
     * @description The cache that contains maps of HTTP requests.
     * @type {Map}
     */
    const _httpRequestCache = new Map();
    /**
     * @description Sets the specified HTTP request in this cache manager.
     * @param {String} tabId The ID of the tab to which this HTTP request is associated with.
     * @param {String} id The ID of the HTTP request.
     * @param {XMLHttpRequest} httpRequest The HTTP request.
     * @returns {undefined}
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.set = (tabId, id, httpRequest) => {
        /**
         * @description A map of cached HTTP requests.
         * @type {undefined|Map}
         */
        let httpRequestCacheMap = _httpRequestCache.get(tabId);

        if (!httpRequestCacheMap) {
            if (_httpRequestCache.has(tabId))
                throw `There is already an ongoing-request map associated with tab ID ${quoteString(tabId)}.`;

            _httpRequestCache.set(tabId, httpRequestCacheMap = new Map());
        } else if (httpRequestCacheMap.has(id))
            throw `There is already an HTTP request registered with the same ID: ${quoteString(id)}.`;

        httpRequestCacheMap.set(id, httpRequest);
    };
    /**
     * @description Returns the map of cached HTTP requests that are associated with the tab – if one exists.
     * @param {String} tabId The tab ID.
     * @returns {undefined|Map} The map of cached HTTP requests that are associated with the tab – if one exists.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.getMap = tabId => _httpRequestCache.get(tabId);
    /**
     * @description Returns the specified tab HTTP request, if one exists.
     * @param {String} tabId The tab ID.
     * @param {String} id the ID of the HTTP request.
     * @returns {undefined|XMLHttpRequest} The specified tab HTTP request, if one exists.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.get = (tabId, id) => {
        /**
         * @description A map of cached HTTP requests.
         * @type {undefined|Map}
         */
        const httpRequestCacheMap = this.getMap(tabId);
        return !!httpRequestCacheMap ?
            httpRequestCacheMap.get(id) :
            undefined;
    };
    /**
     * @description Cuts the specified HTTP request – if one exists – and returns it.
     * @param {String} tabId The tab ID.
     * @param {String} id the ID of the HTTP request.
     * @returns {undefined|XMLHttpRequest} The specified HTTP request – if one exists – and returns it.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.cut = (tabId, id) => {
        /**
         * @description A map of cached HTTP requests.
         * @type {undefined|Map}
         */
        const httpRequestCacheMap = _httpRequestCache.get(tabId);
        return !!httpRequestCacheMap ?
            httpRequestCacheMap.cut(id) :
            undefined;
    };
    /**
     * @description Deletes the specified HTTP request.
     * @param {String} tabId The tab ID.
     * @param {String} id the ID of the HTTP request.
     * @returns {Boolean} If the specified HTTP request has been found and deleted.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this["delete"] = (tabId, id) => {
        /**
         * @description A map of cached HTTP requests.
         * @type {undefined|Map}
         */
        const httpRequestCacheMap = _httpRequestCache.get(tabId);

        if (!!httpRequestCacheMap &&
                httpRequestCacheMap.delete(id)) {
            if (httpRequestCacheMap.isEmpty())
                _httpRequestCache.delete(tabId);

            return true;
        }

        return false;
    };
    /**
     * @description Cancels the specified HTTP request.
     * @param {String} tabId The tab ID.
     * @param {String} id the ID of the HTTP request.
     * @returns {Boolean} If the specified HTTP request has been found (in which case an attempt has been made to abort the HTTP request).
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.cancel = (tabId, id) => {
        /**
         * @description The HTTP request to cancel.
         * @type {XMLHttpRequest}
         */
        const httpRequest = this.cut(tabId, id);

        if (!!httpRequest) {
            httpRequest.abort();
            return true;
        }

        return false;
    };
    /**
     * @description Cancels all HTTP requests that are associated with the specified tab.
     * @param {String} tabId The tab ID.
     * @returns {Boolean} If the map that holds the HTTP requests that are associated with the specified tab has been found (in which case an attempt has been made to abort the HTTP requests).
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.cancelAll = tabId => {
        if (_httpRequestCache.isEmpty())
            return false;

        /**
         * @description A map of cached HTTP requests.
         * @type {undefined|Map}
         */
        const httpRequestCacheMap = _httpRequestCache.cut(tabId);

        if (!httpRequestCacheMap ||
                httpRequestCacheMap.isEmpty())
            return false;

        httpRequestCacheMap.forEach(/** @param {XMLHttpRequest} httpRequest A HTTP request. */ httpRequest => httpRequest.abort());
        httpRequestCacheMap.clear();
        return true;
    };
    /**
     * @description Cancels all HTTP requests that are cached.
     * @returns {undefined}
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.cancelAllInCache = () => {
        _httpRequestCache.forEach(httpRequestCacheMap => httpRequestCacheMap.forEach(/** @param {XMLHttpRequest} httpRequest HTTP request. */ httpRequest => httpRequest.abort()));
        _httpRequestCache.clear();
    };
    /**
     * @description Checks if there are currently ongoing HTTP requests.
     * @param {String} tabId The tab ID.
     * @returns {Boolean} If there are currently ongoing HTTP requests.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.hasOngoingHttpRequests = (tabId) => {
        if (_httpRequestCache.isEmpty())
            return false;

        /**
         * @description A map of cached HTTP requests.
         * @type {undefined|Map}
         */
        const httpRequestCacheMap = _httpRequestCache.cut(tabId);
        return !!httpRequestCacheMap &&
                !httpRequestCacheMap.isEmpty();
    };
}
/**
 * @description Meta information of a web service.
 * @param {String} [name="default"] The name.
 * @param {String} [url] The URL. If empty, the <base> element must be present in the header.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function WebService (name = "default", url) {
    checkRequiredString(name, "name");

    if (isNullOrUndefined(url)) {
        const baseElement = document.querySelectorOnlyOne("head > base");

        if (!isNullOrUndefined(baseElement))
            url = baseElement.href;
    }

    checkRequiredString(url, "url");

    /**
     * @description The name of the web service.
     * @type {String}
     */
    this.name = name;
    /**
     * @description The URL.
     * @type {String}
     */
    this.url = url;
    /**
     * @description The HTTP request cache manager.
     * @type {HttpRequestCacheManager}
     */
    this.httpRequestCacheManager = new HttpRequestCacheManager();

    /**
     * @description Sets the specified credentials in the session storage.
     * @param {String} sessionId The session ID.
     * @param {String} tokenId The token ID.
     * @returns {undefined}
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.setCredentials = (sessionId, tokenId) => {
        checkRequiredString(sessionId, "sessionId");
        checkRequiredString(tokenId, "tokenId");
        sessionStorage.clear();
        sessionStorage.sessionId = sessionId;
        sessionStorage.tokenId = tokenId;
    };
}
/**
 * @description The callback function to be executed when a HTTP response is received and ready to be processed.
 * @callback WebService.OnRequestReadyCallback
 * @param {XMLHttpRequest} httpReuqest The HTTP request.
 * @returns {Boolean} If the HTTP request has been processed successfully.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * @description The callback function to be executed when an exception is caught during an HTTP request.
 * @callback WebService.OnRequestExceptionCallback
 * @param {Object} exception The caught exception.
 * @param {XMLHttpRequest} request A reference to the HTTP request.
 * @returns {undefined}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * @description The callback function to be executed when the HTTP request has been aborted.
 * @callback WebService.OnRequestAbortCallback
 * @param {ProgressEvent} progressEvent The event measuring the progress of the HTTP request.
 * @returns {undefined}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * @description The callback function to be executed when the data transfer is in progress.
 * @callback WebService.OnRequestProgressCallback
 * @param {ProgressEvent} progressEvent The event measuring the progress of the HTTP request.
 * @returns {undefined}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * @typedef {Object} WebService.RequestConfiguration Web service configuration to make an HTTP request.
 * @property {String} method The HTTP method to use.
 * @property {String} url The URL to send the request to.
 * @property {String} mediaType The media type.
 * @property {WebService.OnRequestReadyCallback} onReady The method to be executed when a HTTP response is received and ready to be processed.
 * @property {FormData} [parameterList] The request parameters.
 * @property {String} [responseType] The type of data that is expected to be returned from the HTTP response.cuted when a HTTP response is received and ready to be processed.
 * @property {WebService.OnRequestExceptionCallback} [onException] The method to be executed when an exception is caught during an HTTP request.
 * @property {WebService.OnRequestAbortCallback} [onAbort] The method to be executed when the HTTP request has been aborted.
 * @property {WebService.OnRequestProgressCallback} [onProgress] The method to be executed upon data transfer progress.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * @description Creates a new HTTP request to communicate with a web service.
 * @param {WebService.RequestConfiguration} [configuration] The HTTP request configuration.
 * @returns {XMLHttpRequest} An instance of XMLHttpRequest.
 * @throws {String} If the browser doesn't support CORS.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
WebService.createRequest = configuration => {
    /**
     * @description Throws the specified error if "onException" is not set, otherwise the specified error will be passed to the "onException" method.
     * @param {Error} error The error.
     * @returns {undefined}
     * @throws {Error} The specified error if "onException" is not set.
     * @private
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    function throwException(error) {
        if (!onException)
            throw error;

        onException(error, request);
    }
    /**
     * @description Creates a new {@link NetworkError} with the specificed HTTP status details and throws it with {@link throwException()}.
     * @param {Number} httpStatusCode The HTTP status code.
     * @param {String} httpStatusDescription The HTTP status description.
     * @returns {undefined}
     * @private
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    function throwHttpException(httpStatusCode, httpStatusDescription) {
        throwException(new NetworkError(getOfflineLocalizedText("a network error has occurred network exception message"), httpStatusCode, httpStatusDescription));
    }
    // TODO Add documentation
    function checkConfigurationProperty(name, checker, dataTypeName) {
        if (!checker(configuration[name]))
            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidPropertyCannotBeNullorUndefinedTemplate, configurationName, name, dataTypeName));
    }
    // TODO Add documentation
    function checkRequiredConfigurationProperty(name, checker, dataTypeName) {
        if (configuration.isPropertyNullOrUndefined(name))
            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidPropertyCannotBeNullorUndefinedTemplate, configurationName, name));

        checkConfigurationProperty(name, checker, dataTypeName);
    }
    // TODO Add documentation
    function checkOptionalConfigurationProperty(name, checker, dataTypeName) {
        if (!configuration.isPropertyNullOrUndefined(name))
            checkConfigurationProperty(name, checker, dataTypeName);
    }

    /**
     * @description The name of the HTTP request configuration object.
     * @type {String}
     */
    const configurationName = "configuration";
    checkRequiredConfigurationProperty("method", isString, COMMON_DATA_TYPE_LIST.string);
    checkRequiredConfigurationProperty("url", isString, COMMON_DATA_TYPE_LIST.string);
    checkRequiredConfigurationProperty("onReady", isFunction, COMMON_DATA_TYPE_LIST.function);
    checkOptionalConfigurationProperty("mediaType", isString, COMMON_DATA_TYPE_LIST.string);
    checkOptionalConfigurationProperty("onException", isFunction, COMMON_DATA_TYPE_LIST.function);
    checkOptionalConfigurationProperty("onAbort", isFunction, COMMON_DATA_TYPE_LIST.function);
    checkOptionalConfigurationProperty("onProgress", isFunction, COMMON_DATA_TYPE_LIST.function);

    /**
     * @description The HTTP request.
     * @type {XMLHttpRequest}
     */
    const request = new XMLHttpRequest();

    if (WEB_SERVICE_REQUIRES_CORS &&
            !request.supportsCors()) {
        throwException("Cross domain HTTP requests are not supported by this browser.");
        return request;
    }

    try {
        request.open(configuration.method, url);

        if (!configuration.isPropertyNullOrUndefined("responseType"))
            request.responseType = configuration.responseType;

        if (!sessionStorage.isPropertyNullOrUndefined("tokenId"))
            request.setRequestHeader("X-Token-ID", sessionStorage.tokenId);

        if (!isNullOrUndefined(REQUEST_TIME_OUT)) {
            request.timeout = REQUEST_TIME_OUT;
            request.addEventListener("timeout", () => throwHttpException(request.status, request.statusText));
        }

        request.addEventListener("readystatechange", () => {
            if (request.readyState !== 4) /* 4 === ok */
                return;

            switch (request.status) {
                case HTTP_STATUS_CODE_LIST.clientError.unauthorized:
                    if (!onReady(request)) {
                        sessionStorage.clear();
                        boot();
                    }

                    return;
                case 0: // 0 == internal error or the HTTP request has been aborted
                    logWarningToConsole("A 0 has been returned instead of an HTTP status.");
                    return; // ready state is "ok", so ignore this.
                default:
                    if (!onReady(request))
                        throwHttpException(request.status, request.statusText);
            }
        });

        if (!configuration.isPropertyNullOrUndefined("onProgress"))
            request.upload.addEventListener("progress", configuration.onProgress);

        if (!configuration.isPropertyNullOrUndefined("onAbort"))
            request.addEventListener("abort", configuration.onAbort);

        request.addEventListener("error", () => throwHttpException(request.status, request.statusText));

        if (configuration.isPropertyNullOrUndefined("parameterList"))
            request.send();
        else {
            if (!configuration.isPropertyNullOrUndefined("mediaType"))
                request.setRequestHeader("Content-Type", configuration.mediaType);
            else if (!(configuration.parameterList instanceof FormData))
                logWarningToConsole("Parameters have been set and they are not an instance of FormData but a media type has been specified.");

            request.send(configuration.parameterList);
        }
    } catch (error) {
        throwException(error);
    }

    return request;
};


//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="Utilities">
/**
 * @typedef {Object} ScreenPixelSize The screen size in pixels.
 * @property {Number} height The height.
 * @property {Number} width The width.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * @description Returns the screen size in pixels.
 * @returns {ScreenPixelSize} The screen size.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function getScreenPixelSize() {
    return Object.freeze({
        /**
         * @description The height in pixels of the screen.
         * @type {Number}
         */
        height: screen.height * devicePixelRatio,
        /**
         * @description The width in pixels of the screen.
         * @type {Number}
         */
        width: screen.width * devicePixelRatio
    });
}
/**
 * @description Creates a binary notation from the specified bits.
 * @param {Number} bitList The bits.
 * @returns {String} A binary notation, representing the specified bits.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function createBinaryNotation(bitList, bitListSize) {
    return bitList.toString(2).maskLeft('0', bitListSize);
}
/**
 * @description Creates a Unicode notation from the specified code point.
 * @param {Number} codePoint The code point to convert to a Unicode notation.
 * @throws {TypeError} If the specified character is not a string.
 * @throws {TypeError} If the code point is null, undefined or not a number.
 * @returns {String} A Unicode notation, representing the specified code point.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function createUnicodeNotation(codePoint) {
    /**
     * @description Converts the specified code point a 4 digits long hexadecimal notation, prefixed with a "U+".
     * @param {type} codePoint
     * @returns {String}
     * @private
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    function convertCodePoint(codePoint) {
        return "U+" + codePoint.toString(16).toUpperCase().maskLeft("0", 4);
    }

    checkRequiredNumber(codePoint, "codePoint");

    if (isBmpCodePoint(codePoint))
        return convertCodePoint(codePoint);

    /**
     * @description Surrogate pair from the specified code point.
     * @type {SurrogatePair}
     */
    const surrogatePair = SurrogatePair.create(codePoint);
    return convertCodePoint(surrogatePair.highSurrogate) + ", " + convertCodePoint(surrogatePair.lowSurrogate);
}
/**
 * @description Set the width of the specified buttons to the width of the widest button available.
 * @param {Array|HTMLCollection} buttons An array of buttons (a button being an instance of HTMLButtonElement). Items of this array may be null or undefined.
 * @returns {Number} The width of the widest button.
 * @throws {TypeError} If the specified buttons argument is not an array or an instance of HTMLCollection.
 * @throws {TypeError} If the specified buttons argument contains an item that is not a button.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function setButtonWidthToHighest(buttons) {
    if (isNullOrUndefined(buttons))
        return undefined;

    if (!(buttons instanceof Array) &&
            !(buttons instanceof HTMLCollection)) {
        if (arguments.length > 1)
            return setButtonWidthToHighest([].slice.call(arguments));

        throw new TypeError(`${COMMON_TEXT_LIST.invalidArgument + quoteString("buttons")} is not an array or an instance of HTMLCollection."`);
    }

    if (buttons.isEmpty())
        return undefined;

    if (buttons.length === 1)
        return buttons[0].getBoundingClientRect().width;

    /**
     * @description The highest button width that can be found.
     * @type {Number}
     */
    let highestButtonWidth = 0;
    buttons.forEach((button, index) => {
        if (isNullOrUndefined(button))
            return;

        if (!(button instanceof HTMLButtonElement))
            throw new TypeError(`${COMMON_TEXT_LIST.invalidArgument}buttons item at index ${index} is not a button.`);

        /**
         * @description The width of the current button.
         * @type {Number}
         */
        const buttonWidth = button.getBoundingClientRect().width;

        if (buttonWidth > highestButtonWidth)
            highestButtonWidth = buttonWidth;
    });

    if (highestButtonWidth === 0)
        return undefined;

    /**
     * @description The pixel statement of the highest button width that is found.
     * @type {String}
     */
    const highestButtonWidthPixelStatement = createPixelStatement(Math.ceil(highestButtonWidth));
    buttons.forEach(button => {
        if (!isNullOrUndefined(button))
            button.style.width = highestButtonWidthPixelStatement;
    });

    return highestButtonWidth;
}
/**
 * @description Defines a key-value pair that can be set and retrieved.
 * @param {Object} key The key.
 * @param {Object} value The value.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function KeyValuePair(key, value) {
    /**
     * @description The key.
     * @name _ControlKey#name
     * @type {Object}
     */
    Object.defineProperty(this, "key", {
        set: value => {
            key = value;
        },
        get: () => key
    });
    /**
     * @description The value.
     * @name _ControlKey#name
     * @type {Object}
     */
    Object.defineProperty(this, "value", {
        set: v => {
            value = v;
        },
        get: () => value
    });
}
//</editor-fold>
