/*!
 * Synergy Structure JavaScript (SS.JS)
 * Copyright © 2019-2022 Synergy Structure® (and other contributors). All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at
 * https://mozilla.org/MPL/2.0/.
 *
 * SS.JS is an open source modular JavaScript enterprise general-purpose framework that has been designed for the development of modern web software (especially front ends) and to be
 * used as a conglomerate of APIs and other frameworks.
 */

"use strict";

//<editor-fold desc="General">

/* global ArrayBuffer */
/* global CSSStyleDeclaration */
/* global DOMTokenList */
/* global Element */
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
/* global MouseEvent */
/* global NamedNodeMap */
/* global Node */
/* global NodeList */
/* global Tab */
/* global Text */
/* global TouchEvent */
/* global Uint8Array */
/* global decodeURIComponent */
/* global devicePixelRatio */

/**
 * @description Meta information of a module.
 * @typedef {Object} ModuleMeta
 * @property {string} name The name.
 * @property {!string} version The number.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * @description Meta information about the framework.
 * @type {{
 * moduleList: Array<ModuleMeta>,
 * registerModule: (function(!ModuleMeta): number),
 * name: !string,
 * version: !string
 * }}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
const FRAMEWORK = {
    /**
     * @description Name of the framework.
     * @type {!string}
     */
    name: "SS.JS",
    /**
     * @description Version of the framework.
     * @type {!string}
     */
    version: "1.0.0.0",
    /**
     * @description Meta information of all the modules in use.
     * @type {Array<ModuleMeta>}
     */
    moduleList: [],
    /**
     * @description Registers the specified module meta.
     * @param {ModuleMeta} metaModule The module meta.
     */
    registerModule: metaModule =>
        FRAMEWORK.moduleList.push(metaModule)
};
Object.freeze(FRAMEWORK);

/**
 * @description Common event types.
 * @type {{
 * add: string,
 * animation: {
 * cancel: string,
 * end: string,
 * iteration: string,
 * start: string
 * },
 * drop: string,
 * select: string,
 * wheel: string,
 * change: string,
 * scroll: string,
 * show: string,
 * blur: string,
 * destroy: string,
 * focus: string,
 * touch: {
 * cancel: string,
 * move: string,
 * leave: string,
 * start: string,
 * end: string,
 * enter: string
 * },
 * storage: string,
 * click: string,
 * remove: string,
 * input: string,
 * mouse: {
 * over: string,
 * move: string,
 * leave: string,
 * enter: string,
 * up: string,
 * down: string,
 * out: string
 * },
 * doubleClick: string,
 * tab: {
 * update: string,
 * close: string
 * },
 * response: string,
 * create: string,
 * resize: string,
 * drag: {
 * over: string,
 * leave: string
 * },
 * key: {
 * up: string,
 * press: string,
 * down: string
 * }
 * }}
 */
const COMMON_EVENT_TYPE_LIST = {
    add: "add",
    animation: {
        cancel: "animationcancel",
        end: "animationend",
        iteration: "animationiteration",
        start: "animationstart"
    },
    blur: "blur",
    change: "change",
    click: "click",
    create: "create",
    destroy: "destroy",
    doubleClick: "dblclick",
    drag: {
        leave: "dragleave",
        over: "dragover"
    },
    drop: "drop",
    focus: "focus",
    input: "input",
    key: {
        down: "keydown",
        press: "keypress",
        up: "keyup"
    },
    mouse: {
        down: "mousedown",
        enter: "mouseenter",
        leave: "mouseleave",
        move: "mousemove",
        out: "mouseout",
        over: "mouseover",
        up: "mouseup"
    },
    remove: "remove",
    resize: "resize",
    response: "response",
    scroll: "scroll",
    select: "select",
    show: "show",
    storage: "storage",
    tab: {
        close: "tabclose",
        update: "tabupdate"
    },
    touch: {
        cancel: "touchcancel",
        end: "touchend",
        enter: "touchenter",
        leave: "touchleave",
        move: "touchmove",
        start: "touchstart"
    },
    wheel: "wheel"
};
/**
 * @description Common texts and text templates.
 * @type {{
 * invalidConfigurationPropertyDataTypeTemplate: string,
 * invalidBooleanArgumentDataTypeTemplate: string,
 * invalidArgumentCannotBeNullOrUndefinedOrWhiteSpaceTemplate: string,
 * multipleElementsFoundWithOneIdTemplate: string,
 * invalidArgumentHigherThanTemplate: string,
 * invalidPropertyCannotBeNullOrUndefinedTemplate: string,
 * invalidProperty: string,
 * invalidArgumentDataTypeTemplate: string,
 * invalidArgumentLowerThanTemplate: string,
 * invalidPropertyDataTypeTemplate: string,
 * invalidStringArgumentCannotBeEmpty: string,
 * invalidArgument: string,
 * invalidStringArgumentCannotBeEmptyOrWhiteSpace: string,
 * invalidStringArgumentDataTypeTemplate: string,
 * invalidArgumentCannotBeNullOrUndefinedTemplate: string
 * }}
 */
const COMMON_TEXT_LIST = {
    invalidArgument: "Invalid argument: ",
    invalidArgumentCannotBeNullOrUndefinedOrWhiteSpaceTemplate: "Invalid argument: \"@\" cannot be null, undefined, empty or just white space.",
    invalidArgumentCannotBeNullOrUndefinedTemplate: "Invalid argument: \"@\" cannot be null or undefined.",
    invalidArgumentDataTypeTemplate: "Invalid argument: \"@\" is not an instance of @.",
    invalidArgumentHigherThanTemplate: "Invalid argument: \"@\" cannot be higher than @.",
    invalidArgumentLowerThanTemplate: "Invalid argument: \"@\" cannot be lower than @.",
    invalidBooleanArgumentDataTypeTemplate: "Invalid argument: \"@\" is not a boolean.",
    invalidConfigurationPropertyDataTypeTemplate: "Invalid configuration property: “@” is not an instance of @.",
    invalidProperty: "Invalid property: ",
    invalidPropertyCannotBeNullOrUndefinedTemplate: "Invalid \"@\" property: the \"@\" property cannot be null or undefined.",
    invalidPropertyDataTypeTemplate: "Invalid \"@\" property: the \"@\" property is not an instance of @.",
    invalidStringArgumentCannotBeEmpty: "Invalid string argument: \"@\" cannot be empty.",
    invalidStringArgumentCannotBeEmptyOrWhiteSpace: "Invalid string argument: \"@\" cannot be empty or just white space.",
    invalidStringArgumentDataTypeTemplate: "Invalid argument: \"@\" is not a string.",
    multipleElementsFoundWithOneIdTemplate: "Multiple elements have been found with ID \"@\"."
};
/**
 * @description Common data types.
 * @type {{
 * number: string,
 * boolean: string,
 * string: string,
 * function: string,
 * object: string
 * }}
 */
const COMMON_DATA_TYPE_LIST = {
    boolean: "boolean",
    "function": "Function",
    number: "number",
    object: "object",
    string: "string"
};
/**
 * @description Common CSS class names.
 * @type {{
 * fileName: string,
 * wait: string,
 * defaultContextMenu: string,
 * defaultSection: string,
 * icon: string,
 * link: string,
 * box: string,
 * helpInstructionIcon: string,
 * title: string,
 * timeBox: string,
 * context: string,
 * disabled: string,
 * selector: string,
 * picker: string,
 * comboBox: string,
 * selected: string,
 * table: string,
 * activeTab: string,
 * exceptionDocument: string,
 * pointer: string,
 * inactiveTab: string,
 * defaultFooter: string,
 * errorMessage: string,
 * deselected: string,
 * toggle: string,
 * counter: string,
 * list: string,
 * message: string,
 * separator: string,
 * subtitleLink: string,
 * vectorImage: string,
 * popup: string,
 * fileSize: string,
 * subtitle: string,
 * header: string,
 * dateBox: string,
 * helpIcon: string,
 * boxFrame: string
 * }}
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
    deselected: "deselected",
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
    pointer: "pointer",
    popup: "popup",
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
 * @description Common parameter names (for use in the query string of an URL).
 * @type {{
 * documentName: string,
 * id: string
 * }}
 */
const COMMON_PARAMETER_NAME_LIST = {
    documentName: "document_name",
    id: "id"
};
/**
 * @description Common text names.
 * @type {{
 * bytesStatement: string
 * }}
 */
const COMMON_TEXT_NAME_LIST = {
    bytesStatement: "bytes statement"
};
/**
 * @description Common option keys.
 * @type {{
 * binaryPrefixList: string,
 * decimalPrefixList: string
 * }}
 */
const COMMON_OPTION_KEY_LIST = {
    /**
     * @description The option key to set and obtain localized prefixes binary multiples.
     */
    binaryPrefixList: "binaryPrefixList",
    /**
     * @description The option key to set and obtain localized prefixes decimal multiples.
     */
    decimalPrefixList: "decimalPrefixList"
};

/**
 * @description Chain IDs that are in use by this framework.
 * @type {{customEventTarget: string[]}}
 */
const FRAMEWORK_CHAIN_ID_LIST = {
    customEventTarget: [
        "custom",
        "event",
        "target"
    ]
};

/**
 * @description Options.
 * @type {Map<string, any>}
 */
const OPTION_MAP = new Map();

/**
 * @description Checks if the specified argument is a number.
 * @param {Object} argument The argument to check.
 * @returns {!boolean} If the specified argument is a number.
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
 * @returns {!boolean} If the specified argument is a boolean.
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
 * @returns {!boolean} If the specified argument is a string.
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
 * @returns {!boolean} If the specified argument is an object.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function isObject(argument) {
    return typeof argument === COMMON_DATA_TYPE_LIST.object;
}

/**
 * @description Checks if the specified object is <code>null</code> or <code>undefined</code>.
 * @param {Object} object The object.
 * @returns {!boolean} If the specified object is <code>null</code> or <code>undefined</code>.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function isNothing(object) {
    return object === undefined ||
        object === null;
}

/**
 * @description The callback function to execute to check the data type of the specified value.
 * @callback DataTypeChecker
 * @param {Object} value The value to check, which is never <code>null</code> or <code>undefined</code>.
 * @returns {!boolean} If the specified value is approved.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * @description Checks the specified argument and throws an error if the argument is <code>null</code>, <code>undefined</code> or not approved by the specified checker.
 * @param {Object} argument The argument.
 * @param {string} name The name of the argument.
 * @param {DataTypeChecker} checker The checker.
 * @param {string} dataTypeName The name of the argument's data type.
 * @returns {!Object} The specified argument.
 * @throws {TypeError} If the specified argument is <code>null</code> or <code>undefined</code>.
 * @throws {TypeError} If the specified name is <code>null</code> or <code>undefined</code>.
 * @throws {TypeError} If the specified checker is not an instance of Function.
 * @throws {Error} If the specified checker disapproves of the specified argument.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function checkRequiredArgumentFull(
    argument,
    name,
    checker,
    dataTypeName
) {
    if (isNothing(argument))
        throw new TypeError(createStringFromTemplate(
            COMMON_TEXT_LIST.invalidArgumentCannotBeNullOrUndefinedTemplate,
            "checker"
        ));

    if (isNothing(name))
        throw new TypeError(createStringFromTemplate(
            COMMON_TEXT_LIST.invalidArgumentCannotBeNullOrUndefinedTemplate,
            name
        ));

    if (!(checker instanceof Function))
        throw new TypeError(createStringFromTemplate(
            COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate,
            "checker",
            COMMON_DATA_TYPE_LIST.function
        ));

    if (!checker(argument))
        throw new Error(createStringFromTemplate(
            COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate,
            name,
            dataTypeName
        ));

    return argument;
}
/**
 * @description Checks the specified argument and throws an error if the argument is not <code>null</code> or <code>undefined</code> and not approved by the specified checker.
 * @param {Object} argument The argument.
 * @param {string} name The name of the argument.
 * @param {DataTypeChecker} checker The checker.
 * @param {string} dataTypeName The name of the argument's data type.
 * @returns {Object} The specified argument.
 * @throws {TypeError} If the specified name is <code>null</code> or <code>undefined</code>.
 * @throws {TypeError} If the specified checker is not an instance of Function.
 * @throws {TypeError} If the specified argument is not <code>null</code> or <code>undefined</code> and the checker disapproves of the argument.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function checkOptionalArgumentFull(
    argument,
    name,
    checker,
    dataTypeName
) {
    if (isNothing(name))
        throw new TypeError(createStringFromTemplate(
            COMMON_TEXT_LIST.invalidArgumentCannotBeNullOrUndefinedTemplate,
            name
        ));

    if (!(checker instanceof Function))
        throw new TypeError(createStringFromTemplate(
            COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate,
            "checker",
            COMMON_DATA_TYPE_LIST.function
        ));

    if (!isNothing(argument) &&
        !checker(argument))
        throw new Error(createStringFromTemplate(
            COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate,
            name,
            dataTypeName
        ));

    return argument;
}
/**
 * @description Checks the specified argument and throws an error if the argument is <code>null</code>, <code>undefined</code> or not approved by the specified checker.
 * @param {Object} argument The argument.
 * @param {string} name The name of the argument.
 * @param {Object} type The class.
 * @returns {!Object} The specified object.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function checkRequiredArgument(
    argument,
    name,
    type
) {
    if (isNothing(type))
        throw new TypeError(createStringFromTemplate(
            COMMON_TEXT_LIST.invalidArgumentCannotBeNullOrUndefinedTemplate,
            "type"
        ));

    return checkRequiredArgumentFull(
        argument,
        name,
        value =>
            value instanceof type,
        type.name
    );
}
/**
 * @description Checks the specified argument and throws an error if the argument is not <code>null</code> or <code>undefined</code> and not approved by the specified checker.
 * @param {Object} argument The argument.
 * @param {string} name The name of the argument.
 * @param {Function} type The class.
 * @returns {Object} The specified argument.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function checkOptionalArgument(
    argument,
    name,
    type
) {
    if (isNothing(type))
        throw new TypeError(createStringFromTemplate(
            COMMON_TEXT_LIST.invalidArgumentCannotBeNullOrUndefinedTemplate,
            "type"
        ));

    return checkOptionalArgumentFull(
        argument,
        name,
        value =>
            value instanceof type,
        type.name
    );
}
/**
 * @description Checks the specified number argument and throws an error if the number is <code>null</code>, <code>undefined</code> or not approved by the specified checker.
 * @param {Object} argument The number argument.
 * @param {string} name The name of the argument.
 * @returns {!number} The specified number.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function checkRequiredNumber(
    argument,
    name
) {
    // noinspection JSValidateTypes
    return checkRequiredArgumentFull(
        argument,
        name,
        isNumber,
        "number"
    );
}
/**
 * @description Checks the specified number argument and throws an error if the number is not <code>null</code> or <code>undefined</code> and not approved by the specified checker.
 * @param {Object} argument The number argument.
 * @param {string} name The name of the argument.
 * @returns {?number} The specified number.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function checkOptionalNumber(
    argument,
    name
) {
    // noinspection JSValidateTypes
    return checkOptionalArgumentFull(
        argument,
        name,
        isNumber,
        "number"
    );
}
/**
 * @description Checks the specified string argument and throws an error if the string is <code>null</code>, <code>undefined</code> or not approved by the specified checker.
 * @param {Object} argument The string argument.
 * @param {string} name The name of the argument.
 * @returns {!Object} The specified string.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function checkRequiredString(
    argument,
    name
) {
    return checkRequiredArgumentFull(
        argument,
        name,
        isString,
        COMMON_DATA_TYPE_LIST.string
    );
}
/**
 * @description Checks the specified string argument and throws an error if the string is not <code>null</code> or <code>undefined</code> and not approved by the specified checker.
 * @param {Object} argument The string argument.
 * @param {string} name The name of the argument.
 * @returns {!string} The specified string.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function checkOptionalString(
    argument,
    name
) {
    // noinspection JSValidateTypes
    return checkOptionalArgumentFull(
        argument,
        name,
        isString,
        COMMON_DATA_TYPE_LIST.string
    );
}
/**
 * @description Checks the specified boolean argument and throws an error if the boolean is <code>null</code>, <code>undefined</code> or not approved by the specified checker.
 * @param {Object} argument The boolean argument.
 * @param {string} name The name of the argument.
 * @returns {!boolean} The specified boolean.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function checkRequiredBoolean(
    argument,
    name
) {
    // noinspection JSValidateTypes
    return checkRequiredArgumentFull(
        argument,
        name,
        isBoolean,
        COMMON_DATA_TYPE_LIST.boolean
    );
}
/**
 * @description Checks the specified boolean argument and throws an error if the boolean is not <code>null</code> or <code>undefined</code> and not approved by the specified checker.
 * @param {Object} argument The boolean argument.
 * @param {string} name The name of the argument.
 * @returns {boolean} The specified boolean.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function checkOptionalBoolean(
    argument,
    name
) {
    // noinspection JSValidateTypes
    return checkOptionalArgumentFull(
        argument,
        name,
        isBoolean,
        COMMON_DATA_TYPE_LIST.boolean
    );
}

/**
 * @description Checks the specified loop settings and throws an exception if anything invalid is detected.
 * @param {Object} list Any type of list.
 * @param {LoopCallback|ForEachCallback} callback Function that produces an item of the list.
 * @param {number} startIndex The start index.
 * @param {number} endIndex The end index. If <code>null</code> or <code>undefined</code>, the end index will be length of this string.
 * @param {number} step The number by which the counter of the loop is incremented each time.
 * @param {Object} [scope] The value of <code>this</code> provided for the callback function.
 * @returns {void}
 * @throws {TypeError} If the list is <code>null</code> or <code>undefined</code>.
 * @throws {Error} If the list doesn't have a "length" property.
 * @throws {Error} If the list has a "length" property that is not a number.
 * @throws {IndexOutOfBoundsError} If the end index is higher than the length of this list.
 * @throws {IndexOutOfBoundsError} If the start index is lower than 0.
 * @throws {IndexOutOfBoundsError} If the start index is higher than the end index.
 * @throws {Error} If the step is equal to or lower than 0.
 * @throws {Error} If the step is higher than or equal to the end index.
 * @throws {TypeError} If the scope is not <code>null</code> or <code>undefined</code> and neither an instance of object (the scope cannot be a primitive type).
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function checkLoopSettingList(
    list,
    callback,
    startIndex,
    endIndex,
    step,
    scope
) {
    // List checks

    if (isNothing(list))
        throw new TypeError(createStringFromTemplate(
            COMMON_TEXT_LIST.invalidArgumentCannotBeNullOrUndefinedTemplate,
            "list"
        ));

    if (!isString(list)) {
        if (list.isPropertyNullOrUndefined("length"))
            throw new Error(`${COMMON_TEXT_LIST.invalidArgument}the list doesn't have a "length" property.`);

        if (!isNumber(list.length))
            throw new Error(`${COMMON_TEXT_LIST.invalidArgument}the list has a "length" property but it's not a number.`);
    }

    // Callback checks

    checkRequiredArgument(
        callback,
        "callback",
        Function
    );

    // Start index checks

    checkRequiredNumber(
        startIndex,
        "startIndex"
    );

    if (startIndex < 0)
        throw new IndexOutOfBoundsError(`${COMMON_TEXT_LIST.invalidArgument}Start index (${startIndex}) cannot be lower than 0.`);

    if (startIndex > endIndex)
        throw new IndexOutOfBoundsError(`${COMMON_TEXT_LIST.invalidArgument}Start index (${startIndex}) cannot be higher than the end index (${endIndex}).`);

    // End index checks

    checkRequiredNumber(
        endIndex,
        "endIndex"
    );

    if (endIndex > list.length)
        throw new IndexOutOfBoundsError(`${COMMON_TEXT_LIST.invalidArgument}End index (i.e. ${endIndex}) cannot be higher than the length of this list (${list.length}).`);

    // Step checks

    checkRequiredNumber(
        step,
        "step"
    );

    if (step <= 0)
        throw new Error(`${COMMON_TEXT_LIST.invalidArgument + "step"} (${step}) cannot be lower than or equal to 0.`);

    if (list.length !== 0 &&
        step > endIndex)
        throw new Error(`${COMMON_TEXT_LIST.invalidArgument + "step"} (${step}) cannot be higher than or equal to the end index (${endIndex}).`);

    // Scope checks

    if (!isNothing(scope) &&
        !isObject(scope))
        throw new TypeError(createStringFromTemplate(
            COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate,
            "scope",
            "object"
        ));
}
/**
 * @description The callback function that produces an item of the list during a breakable loop.
 * @callback LoopCallback
 * @param {*} item The current token being processed in the list.
 * @param {number} index The index of the current item being processed in the list.
 * @returns {boolean} If the loop must continue, if possible.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * @description Executes the provided function once for each item in a list. This loop is breakable.
 * @param {Object} list Any type of list.
 * @param {LoopCallback} callback Function that produces an item of the list.
 * @param {number} [startIndex=0] The start index.
 * @param {number} [endIndex=list.length] The end index.
 * @param {number} [step=1] The number by which the counter of the loop is incremented each time.
 * @param {Object} [scope] The value of <code>this</code> provided for the callback function.
 * @returns {!boolean} If the loop has been executed (and at least one item has been processed) and has not been broken.
 * @throws {TypeError} If the provided function returns a value that is not a boolean.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function loopThroughList(
    list,
    callback,
    startIndex = 0,
    endIndex = list.length,
    step = 1,
    scope
) {
    checkLoopSettingList(
        list,
        callback,
        startIndex,
        endIndex,
        step,
        scope
    );

    for (/**
          * @description The current index.
          * @type {number}
          */
         let index = startIndex,
         /**
          * @description The length of the list.
          * @type {number}
          */
         listLength = list.length;
         index < endIndex;
         index += step
    ) {
        /**
         * @description If the loop can continue.
         * @type {boolean}
         */
        const canContinue = callback.call(
            scope,
            list[index],
            index
        );

        if (isNothing(canContinue) ||
            !isBoolean(canContinue))
            throw new TypeError("No boolean has been returned by the callback.");

        if (!canContinue)
            return false;

        // In case items are deleted from the list or added to the list, the index and the end index must be adjusted.
        if (listLength !== list.length) {
            /**
             * @description The difference between the previous list length and the current list length.
             * @type {number}
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
 * @param {*} item The current token being processed in the list.
 * @param {number} index The index of the current item being processed in the list.
 * @returns {void} Nothing is expected to be returned and whatever will be returned will be ignored.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * @description Executes the provided function once for each item in a list. This loop is unbreakable.
 * @param {Object} list Any type of list.
 * @param {ForEachCallback} callback Function that produces an item of the list.
 * @param {number} [startIndex=0] The start index.
 * @param {number} [endIndex=list.length] The end index.
 * @param {number} [step=1] The number by which the counter of the loop is incremented each time.
 * @param {Object} [scope] The value of <code>this</code> provided for the callback function.
 * @returns {void}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function forEachInList(
    list,
    callback,
    startIndex = 0,
    endIndex = list.length,
    step = 1,
    scope
) {
    checkLoopSettingList(
        list,
        callback,
        startIndex,
        endIndex,
        step,
        scope
    );

    for (/**
          * @description The current index.
          * @type {number}
          */
         let index = startIndex,
             /**
              * @description The length of the list.
              * @type {number}
              */
             listLength = list.length;
         index < endIndex;
         index += step
    ) {
        callback.call(
            scope,
            list[index],
            index
        );
        // In case items are deleted from the list or added to the list, the index and the end index must be adjusted.
        if (listLength !== list.length) {
            /**
             * @description The difference between the previous list length and the current list length.
             * @type {number}
             */
            const lengthDifference = (listLength = list.length) - endIndex;
            index += lengthDifference;
            endIndex += lengthDifference;
        }
    }
}

//</editor-fold>
//<editor-fold desc="Debug">

/**
 * @description If this product is in debug mode.
 * @type {!boolean}
 */
let IN_DEBUG_MODE = false;

/**
 * @description Sets if this product is in debug mode.
 * @param {boolean} inDebugMode If this product is in debug mode.
 */
function setInDebugMode(inDebugMode) {
    if (checkRequiredBoolean(
        inDebugMode,
        "inDebugMode"
    ) !== IN_DEBUG_MODE)
        IN_DEBUG_MODE = !IN_DEBUG_MODE;
}

//</editor-fold>
//<editor-fold desc="Validation">

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
 * @param {boolean} required If the HTML element requires a value.
 * @param {boolean} valid If the HTML element is valid.
 * @returns {void}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function setCustomValidityState(
    htmlElement,
    required,
    valid
) {
    checkRequiredArgument(
        htmlElement,
        "htmlElement",
        HTMLElement
    );
    checkRequiredBoolean(
        required,
        "required"
    );
    checkRequiredBoolean(
        valid,
        "valid"
    );

    if (required)
        htmlElement.dataset[VALIDATION_DATA.name] = valid ?
            VALIDATION_DATA.true :
            VALIDATION_DATA.false;
}
/**
 * @description If the specified HTML element has a custom validity state.
 * @param {HTMLElement} htmlElement The HTML element.
 * @returns {!boolean} If the specified HTML element has a custom validity state.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function hasCustomValidity(htmlElement) {
    checkRequiredArgument(
        htmlElement,
        "htmlElement",
        HTMLElement
    );
    return VALIDATION_DATA.name in htmlElement.dataset;
}
/**
 * @description Returns the custom validity state from the specified HTML element.
 * @param {HTMLElement} htmlElement The HTML element.
 * @param {boolean} required If the HTML element requires a value.
 * @returns {!boolean} The custom validity state from the specified HTML element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function getCustomValidity(
    htmlElement,
    required
) {
    return !checkRequiredBoolean(
        required,
        "required"
    ) ||
        hasCustomValidity(htmlElement) &&
        htmlElement.dataset[VALIDATION_DATA.name] === VALIDATION_DATA.true;
}

//</editor-fold>
//<editor-fold desc="Error">

/**
 * @description Defines an unknown error that is thrown when something that must be identified cannot be identified.
 * @public
 * @version 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class UnknownError extends Error {
    //<editor-fold desc="Constructor">

    /**
     * @description UnknownError constructor.
     * @param {string} message The message.
     */
    constructor(message) {
        super(message);
    }

    //</editor-fold>
}
/**
 * @description Defines an error that is thrown when an index of some sort (of an array, string or any other list) is out of bounds.
 * @public
 * @version 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class IndexOutOfBoundsError extends Error {
    //<editor-fold desc="Constructor">

    /**
     * @description IndexOutOfBoundsError constructor.
     * @param {string} message The detail message.
     */
    constructor(message) {
        super(message);
    }

    //</editor-fold>
}
/**
 * @description Defines any type of list error.
 * @public
 * @version 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class ListError extends Error {
    //<editor-fold desc="Constructor">

    /**
     * @description ListError constructor.
     * @param {string} message The detail message.
     */
    constructor(message) {
        super(message);
    }

    //</editor-fold>
}
/**
 * @description Defines an error that is thrown when something happens that should be impossible to happen under intended conditions.
 * @public
 * @version 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class ImpossibleError extends Error {
    //<editor-fold desc="Constructor">

    /**
     * @description ImpossibleError constructor.
     * @param {string} [message="Impossible exception."] The detail message.
     */
    constructor(message = "Impossible exception.") {
        super(message);
    }

    //</editor-fold>
}
/**
 * @description Defines an error that is thrown when something illogical happens.
 * @public
 * @version 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class IllogicalError extends Error {
    //<editor-fold desc="Constructor">

    /**
     * @description IllogicalError constructor.
     * @param {string} message The detail message.
     */
    constructor(message = "Illogical exception.") {
        super(message);
    }

    //</editor-fold>
}
/**
 * @description Defines an error that is thrown when something happens that is not allowed.
 * @public
 * @version 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class NotAllowedError extends Error {
    //<editor-fold desc="Constructor">

    /**
     * @description NotAllowedError constructor.
     * @param {string} message The detail message.
     */
    constructor(message) {
        super(message);
    }

    //</editor-fold>
}
/**
 * @description Defines an error that is thrown to indicate that a method has been passed an illegal or inappropriate argument.
 * @public
 * @version 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class IllegalArgumentError extends Error {
    //<editor-fold desc="Constructor">

    /**
     * @description IllegalArgumentError constructor.
     * @param {string} message The detail message.
     */
    constructor(message) {
        super(message);
    }

    //</editor-fold>
}
/**
 * @description Defines an error that is thrown when generic operational error occurs.
 * @public
 * @version 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class OperationError extends Error {
    //<editor-fold desc="Constructor">

    /**
     * @description OperationError constructor.
     * @param {string} message The message.
     */
    constructor(message) {
        super(message);
    }

    //</editor-fold>
}

//</editor-fold>
//<editor-fold desc="Object">

/**
 * @description Tests whether the specified property exists in this object and is not <code>null</code> or <code>undefined</code>.
 * @param {string} name The name of the property.
 * @returns {boolean} If the specified property exists in this object and is not <code>null</code> or <code>undefined</code>.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Object.prototype.isPropertyNullOrUndefined = function (name) {
    checkRequiredString(
        name,
        "name"
    );
    return !(name in this) ||
        isNothing(this[name]);
};
/**
 * @description Clears this object from its properties.
 * @returns {void}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Object.prototype.clearProperties = function () {
    for (/**
         * @description The current property name.
         * @type {string}
         */
        const propertyName
        in this
    )
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

    for (/**
         * @description The property name.
         * @type {string}
         */
        const propertyName
        in this
    )
        if (this.hasOwnProperty(propertyName)) {
            /**
             * @description The property value.
             * @type {Object}
             */
            const propertyValue = this[propertyName];

            if (isNothing(propertyValue))
                simpleClone[propertyName] = propertyValue;
            else if (propertyValue instanceof Date)
                simpleClone[propertyName] = propertyValue.clone();
            else if (propertyValue instanceof Array)
                simpleClone[propertyName] = propertyValue.simpleClone();
            else if (isObject(propertyValue))
                simpleClone[propertyName] = propertyValue.simpleClone();
            else if (!(propertyValue instanceof Function))
                simpleClone[propertyName] = propertyValue;
        }

    return simpleClone;
};
/**
 * @description Checks if the specified query exists as a value in one of the object's own properties. This method has been developed for objects that are used as enumerations.
 * @param {Object} query The query.
 * @returns {boolean} If the specified query exists as a value in one of the object's own properties.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Object.prototype.hasValue = function (query) {
    /**
     * @description The query type.
     * @type {string}
     */
    const queryType = typeof query;

    for (/**
         * @description The current property name.
         * @type {string}
         */
        const propertyName
        in this
    )
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
//<editor-fold desc="Boolean">

/**
 * @description Parses a string argument and returns a boolean.
 * @param {string|number|boolean} value The value to parse.
 * @returns {?boolean} The boolean value if the parse has been successful, <code>undefined</code> otherwise.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Boolean.parse = value => {
    if (!isNothing(value))
        switch (typeof value) {
            case "string":
                switch (value.trim().
                    toLowerCase()) {
                        case "true":
                        case "t":
                            return true;
                        case "false":
                        case "f":
                            return false;
                    }

                break;
            case "number":
                switch (value) {
                    case 0:
                        return false;
                    case 1:
                        return true;
                }

                break;
            case "boolean":
                return value;
        }

    return undefined;
};
/**
 * @description Returns a random boolean.
 * @returns {!boolean} A random boolean.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Boolean.getRandom = () =>
    Math.floor(Math.random() * 2) === 1;

//</editor-fold>
//<editor-fold desc="Number">

/**
 * @description Checks if the specified number is a decimal.
 * @param {number} number The number to check.
 * @returns {boolean} If the specified number is a decimal or a number that isn't equal to an integer (for example, 1.0 and 1 are considered to be equal).
 * @throws {TypeError} If the specified number is null, undefined or a not number.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Number.isDecimal = number =>
    number % 1 !== 0;
/**
 * @description Checks if the specified number is an unsigned integer.
 * @param {number} number The number to check.
 * @returns {boolean} If the specified number is an unsigned integer.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Number.isUnsignedInteger = number =>
    number >= 0 &&
    number <= Math.pow(
        2,
        32
    ) - 1;
/**
 * @typedef {Object} ParseAsIntegerResult Information about a parse result.
 * @property {boolean} successful If the parse attempt was successful.
 * @property {number} [value] The parsed value.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * @description Tries to parse the specified string as an integer.
 * @param {string} string The string to parse.
 * @returns {!ParseAsIntegerResult} Information about the parse result.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Number.tryToParseAsInteger = string => {
    if (isNothing(string) ||
        !isString(string))
        return {
            successful: false
        };

    /**
     * @description The result of attempting to parse the specified string.
     * @type {number|NaN}
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
 * @param {string} string The string to parse.
 * @returns {!ParseAsIntegerResult} Information about the parse result.
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
        result.value <= Math.pow(
            2,
            32
        ) - 1) ?
        result : {
            successful: false
        };
};
/**
 * @description Returns a random number between the specified minimum and the specified maximum.
 * @param {number} minimum The minimum value to return.
 * @param {number} maximum The maximum value to return.
 * @returns {!number} A random number between the specified minimum (inclusive) and the specified maximum (inclusive).
 * @throws {TypeError} If minimum is null, undefined or not a number.
 * @throws {TypeError} If maximum is null, undefined or not a number.
 * @throws {string} If the minimum is higher than maximum.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Number.getRandom = (
    minimum,
    maximum
) => {
    checkRequiredNumber(
        minimum,
        "minimum"
    );
    checkRequiredNumber(
        maximum,
        "maximum"
    );

    if (minimum === maximum)
        return minimum;

    if (minimum > maximum)
        throw new Error(`${COMMON_TEXT_LIST.invalidArgument} "minimum" cannot be higher than the "maximum" (${maximum}).`);

    return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
};

//</editor-fold>
//<editor-fold desc="Math">

/**
 * @description Rounds the specified number to the nearest number, depending on the amount of digits that need to be preserved.
 * @param {number} number The number to round.
 * @param {number} fractionalPreserveCount The amount of fractional digits to preserve.
 * @returns {number} The specified number rounded to the nearest number.
 * @throws {Error} If the amount of fractional digits to preserve is lower than 1.
 * @throws {string} If "fractionalCount" is lower than 0.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @example Math.roundSpecific(2.6894284, 2); // returns 2.69
 */
Math.roundSpecific = (
    number,
    fractionalPreserveCount
) => {
    checkRequiredNumber(
        number,
        "number"
    );
    checkRequiredNumber(
        fractionalPreserveCount,
        "fractionalPreserveCount"
    );

    if (fractionalPreserveCount < 0)
        throw `${COMMON_TEXT_LIST.invalidArgument}"fractionalPreserveCount" cannot be lower than 1.`;

    if (fractionalPreserveCount === 0)
        return Math.round(number);

    /**
     * @description The base number 10 to the power of the exponent, which is the fractional preserve count.
     * @type {number}
     */
    const size = Math.pow(
        10,
        fractionalPreserveCount
    );
    return Math.round(number * size) / size;
};
/**
 * @description Truncates the specified number, preserving as much fractional digits as specified and removing the rest.
 * @param {number} number The number to truncate.
 * @param {number} fractionalPreserveCount The amount of fractional digits to preserve.
 * @returns {!number} The specified number truncated.
 * @throws {Error} If the amount of fractional digits to preserve is lower than 1.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @example Math.truncSpecific(2.6894284, 2); // returns 2.68
 */
Math.truncSpecific = (
    number,
    fractionalPreserveCount
) => {
    checkRequiredNumber(
        number,
        "number"
    );
    checkRequiredNumber(
        fractionalPreserveCount,
        "fractionalPreserveCount"
    );

    if (fractionalPreserveCount < 0)
        throw new Error(`${COMMON_TEXT_LIST.invalidArgument}"fractionalPreserveCount" cannot be lower than 1.`);

    if (fractionalPreserveCount === 0)
        return Math.trunc(number);

    /**
     * @description The base number 10 to the power of the exponent, which is the fractional preserve count.
     * @type {number}
     */
    const size = Math.pow(
        10,
        fractionalPreserveCount
    );
    return Math.trunc(number * size) / size;
};
/**
 * @description Returns the number of digits in the specified number.
 * @param {number} number The number.
 * @returns {number} The number of digits in the specified number.
 * @throws {TypeError} If "number" is null, undefined or not a number.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Math.getDigitCount = number => {
    checkRequiredNumber(
        number,
        "number"
    );
    return 1 + Math.floor(Math.log10(number < 0 ?
        number * -1 :
        number));
};
/**
 * @description Normalizes the specified degrees to a number between 0 and 359. For example, 400 becomes 40, while -400 becomes 320.
 * @param degrees The degrees.
 * @returns {number} The normalized degrees.
 * @public
 * @since 1.0
 * @author Ben Brown <benbrown2001@rcn.com>
 */
Math.normalizeDegrees = degrees => {
    /**
     * @description The modulo.
     * @type {number}
     */
    const modulo = 360;
    /**
     * @description The result to return.
     * @type {number}
     */
    const result = degrees % modulo;
    return result < 0 ?
        result + modulo :
        result;
};
/**
 * @description Returns the circumference of a circle.
 * @param {number} diameter The diameter.
 * @returns {number} The circumference of a circle.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Math.getCircumference = diameter =>
    diameter * Math.PI;
/**
 * @description Returns the diameter of a circle.
 * @param {number} circumference The circumference.
 * @returns {number} The diameter of a circle.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Math.getDiameter = circumference =>
    circumference / Math.PI;

//</editor-fold>
//<editor-fold desc="String">

/**
 * @description Returns the first character from this string.
 * @returns {!string} The first character from this string.
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
 * @description Returns the first character code from this string.
 * @returns {!number} The first character from this string.
 * @throws {ListError} If this string is empty.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
String.prototype.getFirstCode = function () {
    if (this.isEmpty())
        throw new ListError("This string is empty.");

    return this.charCodeAt(0);
};
/**
 * @description Returns the last character from this string.
 * @returns {!string} The last character from this string.
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
 * @description Returns true if and only if this string contains the specified string, ignoring case considerations.
 * @param {string} query The specified string to look for.
 * @returns {!boolean} If this string contains the query.
 * @throws {TypeError} If the query is not a string.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
String.prototype.containsIgnoreCase = function (query) {
    if (!query)
        return false;

    if (!isString(query))
        throw new TypeError(createStringFromTemplate(
            COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate,
            "query",
            "string"
        ));

    return this.contains(query) ||
        this.toUpperCase().
            contains(query.toUpperCase()) ||
        this.toLowerCase().
            contains(query.toLowerCase());
};
/**
 * @description Removes all leading and trailing white-space characters from the string and returns null if no characters are left in the string.
 * @returns {string} Null if the string is empty or the string that remains after all white-space characters are removed from the start and end of the current
 * string.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
String.prototype.trimToNull = function () {
    /**
     * @description This string but trimmed.
     * @type {string}
     */
    const trimmedString = this.trim();
    return trimmedString.isEmpty() ? null :
        trimmedString;
};
/**
 * @description Compares this <code>string</code> to another <code>string</code>, ignoring case considerations. Two strings are considered equal ignoring case if they
 * are of the same length and corresponding characters in the two strings are equal ignoring case.
 * @param {string} anotherString The <code>string</code> to compare this <code>string</code> against.
 * @returns {!boolean} If the strings are of the same length and corresponding characters in the two strings are equal ignoring case.
 * @throws {TypeError} If another string is not <code>null</code> or <code>undefined</code> and not a string either.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
String.prototype.equalsIgnoreCase = function (anotherString) {
    checkRequiredString(
        anotherString,
        "anotherString"
    );
    return this.length === anotherString.length &&
        (this === anotherString ||
            this.toUpperCase() === anotherString.toUpperCase() ||
            this.toLowerCase() === anotherString.toLowerCase());
};
/**
 * @description Checks if this string contains the specified query.
 * @param {string} query The specified string to look for.
 * @returns {!boolean} If this string contains the specified query.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
String.prototype.contains = function (query) {
    return this.indexOf(query) > -1;
};
/**
 * @description Checks if this string is empty (having no characters) or not.
 * @returns {!boolean} If this string is empty (having no characters) or not.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
String.prototype.isEmpty = function () {
    return this.length === 0;
};
/**
 * @description Checks if the specified string is empty (having no characters) or not.
 * @param {string} string The string.
 * @returns {!boolean} If the specified string contains no characters.
 * @throws {TypeError} If the specified string is not a string.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
String.isEmpty = string => {
    if (isNothing(string))
        return true;

    checkRequiredString(
        string,
        "string"
    );
    return string.isEmpty();
};
/**
 * @description Returns if this string ends with the specified query - irregardless of the case.
 * @param {Object|string} query The query.
 * @param {number} endIndex The end index.
 * @returns {!boolean} If this string ends with the specified query - irregardless of the case.
 * @throws {TypeError} If the end index is not a number.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
String.prototype.endsWithIgnoreCase = function (
    query,
    endIndex
) {
    if (isNothing(endIndex))
        endIndex = this.length;
    else if (!isNumber(endIndex))
        throw new TypeError(createStringFromTemplate(
            COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate,
            "endIndex",
            "number"
        ));

    if (!isString(query))
        query = query.toString();

    return query.isEmpty() ||
        this.substring(
            this.length - query.length - (this.length - endIndex),
            endIndex
        ).
        equalsIgnoreCase(query);
};
/**
 * @description Returns if this string starts with the specified query - irregardless of the case.
 * @param {Object|string} query The query.
 * @param {number} startIndex The start index.
 * @returns {!boolean} If this string starts with the specified query - irregardless of the case.
 * @throws {TypeError} If the start index is not a number.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
String.prototype.startsWithIgnoreCase = function (
    query,
    startIndex
) {
    if (isNothing(startIndex))
        startIndex = 0;
    else if (!isNumber(startIndex))
        throw new TypeError(createStringFromTemplate(
            COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate,
            "startIndex",
            "number"
        ));

    if (!isString(query))
        query = query.toString();

    return query.isEmpty() ||
        this.substring(
            startIndex,
            startIndex + query.length
        )
            .equalsIgnoreCase(query);
};
/**
 * @description Defines any type of string mask error.
 * @public
 * @version 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class StringMaskError extends Error {
    //<editor-fold desc="Constructor">

    /**
     * @description StringMaskError constructor.
     * @param {string} message The detail message.
     * @since 1.0
     */
    constructor(message) {
        super(message);
    }

    //</editor-fold>
}
/**
 * @description Checks the specified mask settings.
 * @param {string} mask A single character representing the mask character.
 * @param {number} newLength newLength The new length of the string once the mask is applied.
 * @returns {void}
 * @throws {StringMaskError} If the specified mask is not specified or one character.
 * @throws {StringMaskError} If the specified count is lower than 0.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
String.checkMaskSettings = (
    mask,
    newLength
) => {
    checkRequiredString(
        mask,
        "mask"
    );
    checkRequiredNumber(
        newLength,
        "count"
    );

    if (mask.length === 0)
        throw new StringMaskError("The mask is not specified.");

    if (mask.length !== 1)
        throw new StringMaskError("Mask contains more than one character.");

    if (newLength < 0)
        throw new ListError("The new length is lower than 0");

    if (newLength < this.length)
        throw new StringMaskError("The specified new length cannot be lower than the string length");
};
/**
 * @description Masks the specified string on the left with the specified mask.
 * @param {string} mask A single character representing the mask character.
 * @param {number} newLength The new length of the string once the mask is applied.
 * @returns {string} A new instance of this string with the mask appended or if count is 0 this string instance will be returned.
 * @throws {StringMaskError} If the mask is not specified or if the length of the mask is not 1.
 * @throws {ListError} If the count is lower than 0.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @example "9".maskLeft("0", 2); // returns "09"
 */
String.prototype.maskLeft = function (
    mask,
    newLength
) {
    String.checkMaskSettings(
        mask,
        newLength
    );
    return newLength === this.length ? this :
        mask.repeat(newLength - this.length) + this;
};
/**
 * @description Masks the specified string on the right with the specified mask.
 * @param {string} mask A single character representing the mask character.
 * @param {number} newLength The new length of the string once the mask is applied.
 * @returns {string} A new instance of this string with the mask appended or if count is 0 this string instance will be returned.
 * @throws {StringMaskError} If the mask is not specified or if the length of the mask is not 1.
 * @throws {ListError} If the count is lower than 0;
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @example "9".maskRight("*", 2); // returns "9*"
 */
String.prototype.maskRight = function (
    mask,
    newLength
) {
    String.checkMaskSettings(
        mask,
        newLength
    );
    return newLength === this.length ? null :
        this + mask.repeat(newLength - this.length);
};
/**
 * @description Executes the provided function once for each character in the specified string. This loop is breakable.
 * @param {LoopCallback} callback Function that produces a character from this string.
 * @param {number} [startIndex] The start index.
 * @param {number} [endIndex] The end index.
 * @param {number} [step] The number by which the counter of the loop is incremented each time.
 * @param {Object} [scope] The value of <code>this</code> provided for the callback function.
 * @returns {!boolean} If the loop has been executed (and at least one item has been processed) and has not been broken.
 * @throws {TypeError} If the provided function returns a value that is not a boolean.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
String.prototype.loop = function (
    callback,
    startIndex,
    endIndex,
    step,
    scope
) {
    return loopThroughList(
        this,
        callback,
        startIndex,
        endIndex,
        step,
        scope
    );
};
/**
 * @description Executes the provided function once for each character in the specified string. This loop is unbreakable.
 * @param {ForEachCallback} callback Function that produces a character from this string.
 * @param {number} [startIndex] The start index.
 * @param {number} [endIndex] The end index.
 * @param {number} [step] The number by which the counter of the loop is incremented each time.
 * @param {Object} [scope] The value of <code>this</code> provided for the callback function.
 * @returns {void}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
String.prototype.forEach = function (
    callback,
    startIndex,
    endIndex,
    step,
    scope
) {
    forEachInList(
        this,
        callback,
        startIndex,
        endIndex,
        step,
        scope
    );
};
/**
 * @description The callback function that produces a character code of a string during a breakable loop.
 * @callback CharacterCodeLoopCallback
 * @param {number} characterCode The current character code being processed in a string.
 * @param {number} index The index of the current item being processed in the list.
 * @returns {boolean} If the loop must continue.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * @description Executes the provided function once for each character code in this string. This loop is breakable.
 * @param {CharacterCodeLoopCallback} callback Function that produces a character code in this string.
 * @param {number} [startIndex] The start index.
 * @param {number} [endIndex] The end index.
 * @param {number} [step] The number by which the counter of the loop is incremented each time.
 * @param {Object} [scope] The value of <code>this</code> provided for the callback function.
 * @returns {!boolean} If the loop has been executed (and at least one item has been processed) and has not been broken.
 * @throws {TypeError} If the provided function returns a value that is not a boolean.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
String.prototype.loopThroughCharCodes = function (
    callback,
    startIndex,
    endIndex,
    step,
    scope
) {
    return this.loop(
        (
            character,
            index
        ) =>
            callback(
                character.getFirstCode(),
                index
            ),
        startIndex,
        endIndex,
        step,
        scope
    );
};
/**
 * @description The callback function that produces a character code of a string during an unbreakable loop.
 * @callback ForEachCharacterCodeCallback
 * @param {number} charCode The current character code being processed in a string.
 * @param {number} index The index of the current item being processed in the list.
 * @returns {void}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * @description Executes the provided function once for each character code in this string. This loop is unbreakable.
 * @param {ForEachCharacterCodeCallback} callback Function that produces a character code of the string.
 * @param {number} [startIndex] The start index.
 * @param {number} [endIndex] The end index.
 * @param {number} [step] The number by which the counter of the loop is incremented each time.
 * @param {Object} [scope] The value of <code>this</code> provided for the callback function.
 * @returns {void}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
String.prototype.forEachCharCode = function (
    callback,
    startIndex,
    endIndex,
    step,
    scope
) {
    this.forEach(
        (
            character,
            index
        ) =>
            callback(
                character.getFirstCode(),
                index
            ),
        startIndex,
        endIndex,
        step,
        scope
    );
};
/**
 * @description Removes a substring from this string at the specified start en end indices and returns the result.
 * @param {number} startIndex The index at which the substring begins.
 * @param {number} endIndex The index at which the substring ends.
 * @returns {string} A new copy of this string without the substring.
 * @throws {TypeError} If the start index is null, undefined or not a number.
 * @throws {string} If the start index is lower than 0.
 * @throws {TypeError} If the end index is null, undefined or not a number.
 * @throws {string} If the end index is higher than the length of this string or lower than or equal to the start index.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
String.prototype.removeSubstring = function (
    startIndex,
    endIndex
) {
    return startIndex === 0 ?
        this.substring(
            endIndex,
            this.length
        ) :
        endIndex === this.length ?
            this.substring(
                0,
                startIndex
            ) :
            this.substring(
                0,
                startIndex
            ) + this.substring(
                endIndex,
                this.length
            );
};
/**
 * @description Replaces the substring at the specified indices with the specified substring and returns a new string.
 * @param {string} [substring=""] The new substring to replace the substring at the specified start en end indices.
 * @param {number} startIndex The index at which the substring to replace begins.
 * @param {number} endIndex The index at which the substring to replace ends.
 * @returns {!string} A new copy of this string with the substring at the specified indices replaced with the specified substring.
 * @throws {TypeError} If the substring is not <code>null</code> or <code>undefined</code> and not a string either.
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
String.prototype.replaceWithString = function (
    substring,
    startIndex,
    endIndex
) {
    if (isNothing(substring))
        substring = "";
    else if (!isString(substring))
        throw new TypeError(createStringFromTemplate(
            COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate,
            "substring",
            "string"
        ));

    checkRequiredNumber(
        startIndex,
        "startIndex"
    );
    checkRequiredNumber(
        endIndex,
        "endIndex"
    );

    if (startIndex < 0)
        throw new Error(COMMON_TEXT_LIST.invalidArgument + "the start index cannot be lower than 0.");

    if (endIndex > this.length)
        throw new Error(COMMON_TEXT_LIST.invalidArgument + "the end index cannot be higher than the length of this string.");

    if (endIndex <= startIndex)
        throw new Error(COMMON_TEXT_LIST.invalidArgument + "the end index cannot be lower than or equal to the start index.");

    return startIndex === 0 ?
        substring + this.substring(
        endIndex,
        this.length
        ) :
        endIndex === this.length ?
            this.substring(
                0,
                startIndex
            ) + substring :
            isNothing(substring) ?
                this.substring(
                    0,
                    startIndex
                ) + this.substring(
                    endIndex,
                    this.length
                ) :
                this.substring(
                    0,
                    startIndex
                ) + substring + this.substring(
                    endIndex,
                    this.length
                );
};
/**
 * @description Defines any type of string template related error.
 * @public
 * @version 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class StringTemplateError extends Error {
    //<editor-fold desc="Constructor">

    /**
     * @description StringTemplateError constructor.
     * @param {string} message The message.
     * @returns {StringTemplateError}
     */
    constructor(message) {
        super(message);
    }

    //</editor-fold>
}
/**
 * @description Creates a string from the specified string template. The string template can contain one or more parameters specified with an at symbol (<code>@</code>). Parameters can
 * be escaped using a backslash (U+005C) (backlashes can also be escaped using a backslash). For every parameter a value (after the string template) must be specified.
 * @param {string} templateString The template string to interpret.
 * @param {...Object} parameterList The parameter values.
 * @returns {!string} The string, created from the template and - if applicable - the specified values.
 * @throws {TypeError} If the specified template string is not a string.
 * @throws {TypeError} If the specified parameter list is not an array.
 * @throws {StringTemplateError} If no parameter is found at an expected list index.
 * @throws {SyntaxError} If a backslash indicates an escape but there is nothing to escape.
 * @throws {StringTemplateError} If a parameter value is <code>null</code> or <code>undefined</code>.
 * @throws {SyntaxError} If an escape character has been found but nothing to escape follows it.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @example createStringFromTemplate("hello @!", "world"); // returns "hello world!"
 */
function createStringFromTemplate(
    templateString,
    ...parameterList
) {
    /**
     * @description Returns the parameter from the parameter list at the specified index. If the parameter value is not a string it will be converted to a string.
     * @param {number} index The index.
     * @returns {string} The parameter from the parameter list at the specified index.
     * @private
     * @since 1.0
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

    checkRequiredString(
        templateString,
        "templateString"
    );

    if (!(parameterList instanceof Array))
        throw new TypeError(createStringFromTemplate(
            COMMON_TEXT_LIST.invalidStringArgumentDataTypeTemplate,
            "parameterList",
            "array"
        ));

    /**
     * @description The string to construct from the template string.
     * @type {string}
     */
    let string = templateString.normalize("NFC");
    /**
     * @description The parameter list index.
     * @type {number}
     */
    let parameterListIndex = 0;
    /**
     * @description The escape character.
     * @type {string}
     */
    const escapeCharacter = "\u0078" /* Vertical line: | */;
    /**
     * @description The value character.
     * @type {string}
     */
    const valueCharacter = "\u0040" /* Commercial at: @ */;
    /**
     * @description If an escape needs to take place.
     * @type {boolean}
     */
    let doEscape = false;

    for (/**
          * @description The current character index.
          * @type {number}
          */
         let characterIndex = 0;
         characterIndex < string.length;
         characterIndex++
    ) {
        /**
         * @description The current character.
         * @type {string}
         */
        let character = string[characterIndex];

        if (character === escapeCharacter) {
            /**
             * @description The number of escape characters that have been found.
             * @type {number}
             */
            let escapeCount = 1;
            /**
             * @description The index of the first escape character.
             * @type {number}
             */
            const escapeStartIndex = characterIndex;

            for (++characterIndex;
                 characterIndex < string.length;
                 characterIndex++
            )
                if (string[characterIndex] === escapeCharacter)
                    escapeCount++;
                else {
                    characterIndex--;
                    break;
                }

            /**
             * @description The reminder of the escape count division. If the result is 1 then an escape must take place.
             * @type {number}
             */
            const remainder = escapeCount % 2;
            /**
             * @description The new number of escape characters.
             * @type {number}
             */
            const newEscapeCount = escapeCount === 1 ? 0 :
                (escapeCount - remainder) / 2;
            /**
             * @description The amount of characters to remove.
             * @type {number}
             */
            const charactersToRemove = escapeCount - newEscapeCount;
            string = string.removeSubstring(
                escapeStartIndex,
                escapeStartIndex + charactersToRemove
            );
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
             * @type {string}
             */
            const value = getParameter(parameterListIndex++);

            if (isNothing(value))
                throw new StringTemplateError("Parameter value cannot be null or undefined.");

            string = string.replaceWithString(
                value,
                characterIndex,
                characterIndex + 1
            );
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
 * @param {string} templateString The template string to interpret.
 * @param {string} value The string from which to find the subset.
 * @returns {?string} The subset of the specified string, if it can be found.
 * @throws {TypeError} If either the template string or value is not a string.
 * @throws {SyntaxError} If a backlash indicates an escape but there is nothing to escape.
 * @throws {string} If more than one (unescaped) "@" symbols are found in the template string.
 * @throws {SyntaxError} If an escape character has been found but nothing to escape follows it.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @example getSingleValueFromString("The number is @.", "The number is 13438."); // returns "13438".
 */
function getSingleValueFromString(
    templateString,
    value
) {
    checkRequiredString(
        templateString,
        "templateString"
    );
    checkRequiredString(
        value,
        "value"
    );

    if (value.isEmpty())
        return undefined;

    /**
     * @description The error message template to use when the specified value doesn't match the specified template for some reason.
     * @type {string}
     */
    const valueDoesntMatchErrorMessageTemplate = "The specified value doesn't match the specified template (@).";

    if (value.length < templateString.length)
        throw createStringFromTemplate(
            valueDoesntMatchErrorMessageTemplate,
            "the value is shorter than the template"
        );

    /**
     * @description The value character.
     * @type {string}
     */
    const valueCharacter = "\u0040" /* Commercial at: @ */;

    if (templateString === valueCharacter)
        return value;

    /**
     * @description The string to construct from the template string.
     * @type {string}
     */
    let string = templateString.normalize("NFC");
    /**
     * @description The escape character.
     * @type {string}
     */
    const escapeCharacter = "\u005C" /* Reverse solidus: \ */;
    /**
     * @description If an escape needs to take place.
     * @type {boolean}
     */
    let doEscape = false;
    /**
     * @description The value index.
     * @type {number}
     */
    let valueIndex;

    for (/**
          * @description The current character index.
          * @type {number}
          */
         let characterIndex = 0;
         characterIndex < string.length;
         characterIndex++
    ) {
        /**
         * @description The current character.
         * @type {string}
         */
        let character = string[characterIndex];

        if (character === escapeCharacter) {
            /**
             * @description The number of escape characters that have been found.
             * @type {number}
             */
            let escapeCount = 1;
            /**
             * @description The index of the first escape character.
             * @type {number}
             */
            const escapeStartIndex = characterIndex;

            for (++characterIndex;
                 characterIndex < string.length;
                 characterIndex++
            )
                if (string[characterIndex] === escapeCharacter)
                    escapeCount++;
                else {
                    characterIndex--;
                    break;
                }

            /**
             * @description The reminder of the escape count division. If the result is 1 then an escape must take place.
             * @type {number}
             */
            const remainder = escapeCount % 2;
            /**
             * @description The new number of escape characters.
             * @type {number}
             */
            const newEscapeCount = escapeCount === 1 ? 0 :
                (escapeCount - remainder) / 2;
            /**
             * @description The amount of characters to remove.
             * @type {number}
             */
            const charactersToRemove = escapeCount - newEscapeCount;
            string = string.removeSubstring(
                escapeStartIndex,
                escapeStartIndex + charactersToRemove
            );
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
            !value.startsWith(string.substring(
                0,
                valueIndex
            ))
        )
            throw createStringFromTemplate(
                valueDoesntMatchErrorMessageTemplate,
                "mismatch at the beginning of the value"
            );

        if (++valueIndex !== string.length &&
            !value.endsWith(string.substring(
                valueIndex,
                string.length
            ))
        )
            throw createStringFromTemplate(
                valueDoesntMatchErrorMessageTemplate,
                "mismatch at the end of the value"
            );

        return value.substring(
            --valueIndex,
            value.length - (string.length - valueIndex) + 1
        );
    }

    return undefined;
}
/**
 * @description Checks if the string is empty or contains no characters other than white space characters.
 * @returns {boolean} If the string is empty or contains no characters other than white space characters.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
String.prototype.isWhiteSpace = function () {
    return this.isEmpty() ||
        this.loop(character =>
            character.trim().
            isEmpty()
        );
};
/**
 * @description Checks if the specified string is empty or contains no characters other than white space characters.
 * @param {string} string The string.
 * @returns {boolean} If the specified string is empty or contains no characters other than white space characters.
 * @throws {TypeError} If the specified string is not a string.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
String.isWhiteSpace = string =>
    checkRequiredString(
        string,
        "string"
    ).
    isWhiteSpace();
/**
 * @description Converts this string to a number. Iif this string cannot be converted to a number an <code>NaN</code> will be returned.
 * @returns {!number|NaN}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
String.prototype.toNumber = function () {
    return this * 1;
};

//</editor-fold>
//<editor-fold desc="Array">

/**
 * @description Removes all elements from this array.
 * @returns {void}
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
 * @returns {!boolean} If this array is empty (null, undefined or having no items).
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Array.prototype.isEmpty = function () {
    return this.length === 0;
};
/**
 * @description Checks if the specified array is empty (null, undefined or having no items) or not.
 * @param {Array<?>} array The array.
 * @returns {!boolean} If the specified array is empty (null, undefined or having no items) or not.
 * @throws {TypeError} If the specified array is not an instance of Array.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Array.isEmpty = array => {
    if (isNothing(array))
        return true;

    if (!(array instanceof Array))
        throw new TypeError(createStringFromTemplate(
            COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate,
            "array",
            "Array"
        ));

    return array.isEmpty();
};
/**
 * @description Returns the length of the specified array, which may be <code>null</code>, in which case the returned length will be 0.
 * @param array The array.
 * @returns {!number} The length of the specified array, which may be <code>null</code>, in which case the returned length will be 0.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Array.getLength = array => {
    return Array.isEmpty(array) ? 0 :
        array.length;
};
/**
 * @description Returns the first item from this array.
 * @returns {!Object} The first item from this array.
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
 * @returns {!Object} The last item from this array.
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
 * @param {number} [fromIndex] The index to start the search at.
 * @returns {!boolean} If the query can be found in this array.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Array.prototype.contains = function (
    query,
    fromIndex
) {
    return this.indexOf(
        query,
        fromIndex
    ) > -1;
};
/**
 * @description Replaces the specified old item in the array with the new item.
 * @param {Object} oldItem The (old) item to search for and replace.
 * @param {Object} newItem The (new) item to replace the old item with.
 * @returns {!boolean} If the specified old item has been found and replaced.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Array.prototype.replace = function (
    oldItem,
    newItem
) {
    if (oldItem === newItem)
        return false;

    /**
     * @description The index of the specified old item in this array.
     * @type {number}
     */
    const oldItemIndex = this.indexOf(oldItem);
    /**
     * @description If the specified old item has been found in this array.
     * @type {boolean}
     */
    const isOldItemFound = oldItemIndex > -1;

    if (isOldItemFound)
        this[oldItemIndex] = newItem;

    return isOldItemFound;
};
/**
 * @description Searches for a specified item and if found replaces it with the other item. Thus, if item A is found it will be replaced with item B, otherwise if item B is found it
 * will be replaced with item A.
 * @param {Object} itemA The first item to search for and replace with the second item.
 * @param {Object} itemB The second item to search for and replace with the first item.
 * @returns {!number} One of the following:
 * <p>1 if the first item has been found and replaced.</p>
 * <p>2 if the second item has been found and replaced.</p>
 * <p>-1 if no item has been found.</p>
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Array.prototype.switch = function (
    itemA,
    itemB
) {
    return this.replace(
        itemA,
        itemB
    ) ? 1 :
        (this.replace(
            itemB,
            itemA
        ) ? 2 : -1);
};
/**
 * @description Executes the provided function once for each item in this array. This loop is breakable.
 * @param {LoopCallback} callback Function that produces an item from this array.
 * @param {number} [startIndex] The start index.
 * @param {number} [endIndex] The end index.
 * @param {number} [step] The number by which the counter of the loop is incremented each time.
 * @param {Object} [scope] The value of <code>this</code> provided for the callback function.
 * @returns {!boolean} If the loop has been executed (and at least one item has been processed) and has not been broken.
 * @throws {TypeError} If the provided function returns a value that is not a boolean.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Array.prototype.loop = function (
    callback,
    startIndex,
    endIndex,
    step,
    scope
) {
    return loopThroughList(
        this,
        callback,
        startIndex,
        endIndex,
        step,
        scope
    );
};
/**
 * @description Clones this array and all of its values but not functions.
 * @returns {!Array} A simple clone of this array.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Array.prototype.simpleClone = function () {
    /**
     * @description A simple clone of this array.
     * @type {Array<?>}
     */
    const simpleClone = [];
    this.forEach(
        item =>
            simpleClone.push(isNothing(item) ?
                item :
                item instanceof Function ?
                    undefined :
                    item instanceof Date ?
                        item.clone() :
                        item instanceof Array ?
                            item.simpleClone() :
                            isObject(item) ?
                                item.simpleClone() :
                                item),
        this);
    return simpleClone;
};
/**
 * @description Deletes the specified query from this array.
 * @param {Object} query The element to locate in the array.
 * @param {number} [fromIndex] The index to start the search at.
 * @returns {!boolean} If the query has been found and deleted from this array.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Array.prototype.delete = function (
    query,
    fromIndex
) {
    /**
     * @description The index of the specified query in this array.
     * @type {number}
     */
    const queryIndex = this.indexOf(
        query,
        fromIndex
    );
    /**
     * @description If the specified query has been found in this array.
     * @type {boolean}
     */
    const queryFound = queryIndex > -1;

    if (queryFound)
        this.splice(queryIndex, 1);

    return queryFound;
};
/**
 * @description Merges the specified array with this array.
 * @param {Array<?>} array The array.
 * @returns {void}
 * @throws {TypeError} If the specified array is not an instance of Array.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Array.prototype.merge = function (array) {
    checkRequiredArgument(
        array,
        "array",
        Array
    );

    for (/** @description The current item index. @type {number} */
         let itemIndex = 0;
         itemIndex < array.length;
         itemIndex++
    )
        this.push(array[itemIndex]);
};
/**
 * @description Checks if this array is equal to the specific array.
 * @param {Array<?>} array The array.
 * @param {boolean} [strict=false] If this array contains all items of the specified array or if this array contains all items of the specific array in the same order.
 * @returns {boolean} If this array is equal to the specific array.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Array.prototype.equals = function (
    array,
    strict= false
) {
    if (isNothing(array) ||
        !(array instanceof Array) ||
        this.length !== array.length)
        return false;

    if (this.isEmpty() &&
        array.isEmpty())
        return true;

    if (!strict) {
        for (/**
              * @description The current array index.
              * @type {number}
              */
             let arrayIndex = 0;
             arrayIndex < this.length;
             arrayIndex++
        )
            if (!this.contains(array[arrayIndex]))
                return false;
    } else
        for (/**
              * @description The current array index.
              * @type {number}
              */
             let arrayIndex = 0;
             arrayIndex < this.length;
             arrayIndex++
        )
            if (this[arrayIndex] !== array[arrayIndex])
                return false;

    return true;
};

//</editor-fold>
//<editor-fold desc="ArrayBuffer">

/**
 * @description Checks if this array buffer is empty (null, undefined or having no items).
 * @returns {!boolean} If this array buffer is empty (null, undefined or having no items).
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
ArrayBuffer.prototype.isEmpty = function () {
    return this.byteLength === 0;
};
/**
 * @description Checks if the specified array buffer is empty (null, undefined or having no items) or not.
 * @param {ArrayBuffer} arrayBuffer The array.
 * @returns {!boolean} If the specified array buffer is empty (null, undefined or having no items) or not.
 * @throws {TypeError} If the specified array buffer is not an instance of ArrayBuffer.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
ArrayBuffer.isEmpty = arrayBuffer => {
    if (isNothing(arrayBuffer))
        return true;

    if (!(arrayBuffer instanceof ArrayBuffer))
        throw new TypeError(createStringFromTemplate(
            COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate,
            "array",
            "Array"
        ));

    return arrayBuffer.isEmpty();
};

//</editor-fold>
//<editor-fold desc="Date & Time">

/**
 * @description The amount of milliseconds in a day.
 * @type {number}
 */
const MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24;
/**
 * @description The amount of milliseconds in one hour.
 * @type {number}
 */
const MILLISECONDS_IN_ONE_HOUR = 60 * 60 * 1000;
/**
 * @description The amount of milliseconds in one minute.
 * @type {number}
 */
const MILLISECONDS_IN_ONE_MINUTE = 60 * 1000;
/**
 * @description The amount of milliseconds in one second.
 * @type {number}
 */
const MILLISECONDS_IN_ONE_SECOND = 1000;
/**
 * @description Returns the last day of the UTC month.
 * @param {number} year The year.
 * @param {number} month The month (from 1 to 12).
 * @returns {!number} The last day of theUTC month.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Date.getLastDayOfUtcMonth = (
    year,
    month
) =>
    (new Date(new Date(Date.UTC(
        year,
        month,
        1
    )) - 1)).getUTCDate();
/**
 * @description Returns the last day of the month.
 * @param {number} year The year.
 * @param {number} month The month (from 1 to 12).
 * @returns {!number} The last day of the month.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Date.getLastDayOfMonth = (
    year,
    month
) =>
    (new Date(new Date(
        year,
        month,
        1
    ) - 1)).getUTCDate();
/**
 * @description Returns the last day of the UTC month.
 * @returns {!number} The last day of theUTC month.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Date.prototype.getLastDayOfUtcMonth = function () {
    return Date.getLastDayOfUtcMonth(
        this.getUTCFullYear(),
        this.getUTCMonth() + 1
    );
};
/**
 * @description Get the last day of the month.
 * @returns {!number} The last day of the month.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Date.prototype.getLastDayOfMonth = function () {
    return Date.getLastDayOfMonth(
        this.getFullYear(),
        this.getMonth() + 1
    );
};
/**
 * @description Returns the ISO day of the week (Monday is 0, Tuesday is 1 and so on).
 * @returns {!number} The number of the ISO day of the week.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Date.prototype.getIsoDay = function () {
    /**
     * @description The day of the week for this date according to local time.
     * @type {!number}
     */
    const day = this.getDay();
    return day === 0 ? 6 :
        day - 1;
};
/**
 * @description Returns the ISO day of the week (Monday is 0, Tuesday is 1 and so on) according to universal time.
 * @returns {!number} The number of the ISO day of the week.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Date.prototype.getIsoUtcDay = function () {
    /**
     * @description The day of the week in this date according to universal time, where 0 represents Sunday.
     * @type {!number}
     */
    const day = this.getUTCDay();
    return day === 0 ? 6 :
        day - 1;
};
/**
 * @description Clones this instance of Date and returns it.
 * @returns {!Date} A clone of this instance of Date.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Date.prototype.clone = function () {
    return new Date(this.getTime());
};
/**
 * @description Returns the current ISO week number.
 * @returns {!number} The current ISO week number.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Date.prototype.getIsoWeek = function () {
    /**
     * @description A close of this date.
     * @type {Date}
     */
    const date = this.clone();
    date.setUTCDate(date.getUTCDate() - this.getIsoDay() + 3);

    /**
     * @description The primitive value of this date.
     * @type {number}
     */
    const firstThursday = date.valueOf();
    date.setUTCMonth(
        0,
        1
    );

    if (date.getUTCDay() !== 4)
        date.setUTCMonth(
            0,
            1 + ((4 - date.getUTCDay()) + 7) % 7
        );

    return 1 + Math.ceil((firstThursday - date) / (7 * 24 * 3600 * 1000));
};
/**
 * @description Adds days to the date according to local time.
 * @param {number} days The days to add to the date.
 * @returns {void}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Date.prototype.addDays = function (days) {
    this.setDate(this.getDate() + days);
};
/**
 * @description Adds days to the date according to universal time.
 * @param {number} days The days to add to the date.
 * @returns {void}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Date.prototype.addUtcDays = function (days) {
    this.setUTCDate(this.getUTCDate() + days);
};
/**
 * @description Adds months to the date according to local time.
 * @param {number} months The months to add to the date.
 * @returns {void}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Date.prototype.addMonths = function (months) {
    this.setMonth(this.getMonth() + months);
};
/**
 * @description Adds months to the date according to universal time.
 * @param {number} months The months to add to the date.
 * @returns {void}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Date.prototype.addUtcMonths = function (months) {
    this.setUTCMonth(this.getUTCMonth() + months);
};
/**
 * @description Sets the day of the week to the first day of the week if the day isn't already the first day of the week.
 * @returns {!Date} This date.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Date.prototype.setToFirstDayOfWeek = function () {
    if (this.getIsoDay() !== 0)
        this.setDate(this.getDate() - this.getIsoDay());

    return this;
};
/**
 * @description Clones this instance of Date with the time set to 00:00:00 and returns it.
 * @returns {!Date} A clone of this instance of Date with the time set to 00:00:00.
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
    date.setFullYear(this.getFullYear());
    date.setMonth(this.getMonth());
    date.setDate(this.getDate());
    return date;
};
/**
 * @description Compares the two specified dates. If the first date is lower than the second date a -1 will be returned. If the two dates are equal a 0 will be returned, otherwise a 1
 * will be returned.
 * @param {Date} firstDate The first date.
 * @param {Date} secondDate The second date.
 * @returns {!number} A number between -1 and 1.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Date.compare = (
    firstDate,
    secondDate
) => {
    checkRequiredArgument(
        firstDate,
        "firstDate",
        Date
    );
    checkRequiredArgument(
        secondDate,
        "secondDate",
        Date
    );

    /**
     * @description The time of the first date.
     * @type {number}
     */
    const time1 = firstDate.getTime();
    /**
     * @description The time of the second date.
     * @type {number}
     */
    const time2 = secondDate.getTime();
    return time1 < time2 ? -1 :
        time1 === time2 ? 0 : 1;
};
/**
 * @description Returns the current date.
 * @returns {!Date} The current date.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Date.getCurrent = () =>
    new Date(Date.now());

//</editor-fold>
//<editor-fold desc="Local ID">

/**
 * @description Generates locale IDs.
 * @generator
 * @yields {number} A locale ID.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function* generateLocalId() {
    for (/**
          * @description The current locale ID.
          * @type {number}
          */
         let localeId = 1;
         localeId < Number.MAX_SAFE_INTEGER;
         localeId++
    )
        yield localeId;
}

/**
 * @description The global local ID generator.
 * @type {Generator<number, void, *>}
 */
const GLOBAL_LOCAL_ID = generateLocalId();

//</editor-fold>
//<editor-fold desc="ID64">

/**
 * @description Defines a ID64 error.
 * @public
 * @version 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class Id64Error extends Error {
    //<editor-fold desc="Constructor">

    /**
     * @description Uuid64Error constructor.
     * @param {string} message The detail message.
     */
    constructor(message) {
        super(message);
    }

    //</editor-fold>
}
/**
 * @description Defines a static interface that represents read-only ID64 features. Inspired by Base64, ID64 is a binary-to-text encoding scheme that can be used to safely encode and
 * transfer IDs between different systems.
 * @public
 * @version 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class Id64 {
    //<editor-fold desc="Operations">

    /* An ID64 digit consists out of 6 bits. There are thus 64 of these digits and each one of them is mapped to an ASCII character:
     *
     * ******** * ********** *
     * Digit    * Character  *
     * ******** * ********** *
     *   00…25  *       A…Z  *
     *   26…51  *       a…z  *
     *   52…61  *       0…9  *
     *      62  *         .  *
     *      63  *         :  *
     * ******** * ********** *
     *
     * In XML an ID64 can be safely used as an ID and it doesn't need to be encoded when used in an URI.
     */

    /**
     * @description Returns the character that represents the specified ID64 digit.
     * @param {number} id64Digit The ID64 digit, a number between 0 and 63.
     * @returns {!string} The character that represents the specified ID64 digit.
     * @throws {Id64Error} If the specified index is invalid.
     * @public
     * @since 1.0
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
                return '\u002E' /* Full stop: . */;
            case 63:
                return '\u003A' /* Colon: : */;
            default:
                throw new Id64Error(`Invalid ID64 index: ${id64Digit}.`);
        }
    }
    /**
     * Encodes the specified array buffer and creates an ID64.
     * @param {Uint8Array} array The array buffer.
     * @returns {!string} The ID64 from the specified bytes.
     * @throws {Id64Error} If the specified array buffer is empty.
     * @public
     * @since 1.0
     */
    static encode(array) {
        // Only unsigned bytes are accepted. In contrast, in SSB this method accepts only signed bytes.

        checkRequiredArgument(
            array,
            "array",
            Uint8Array
        );

        if (array.byteLength === 0)
            throw new Id64Error("Cannot create an ID64 without any bytes.");

        /**
         * @description The ID64 string.
         * @type {string}
         */
        let string = "";
        /**
         * @description Cached bits.
         * @type {number}
         */
        let cachedBitList = 0;
        /**
         * @description The amount of cached bits (including zeros on the left).
         * @type {number}
         */
        let cachedBitListSize = 0;

        for (/**
              * @description The current byte list index.
              * @type {number}
              */
             let byteListIndex = 0;
             byteListIndex < array.byteLength;
             byteListIndex++
        ) {
            /**
             * @description The current 8 bits to process.
             * @type {number}
             */
            let bitList = array[byteListIndex];
            /**
             * @description The current amount of bits to process.
             * @type {number}
             */
            let bitListSize = 8;

            if (cachedBitListSize > 0) {
                bitList |= cachedBitList << bitListSize;
                bitListSize += cachedBitListSize;
                cachedBitListSize = 0;
                cachedBitList = 0;
            }

            bitListSize -= 6;
            string += Id64.getCharacter(bitList >> bitListSize);
            bitList &= createBitMask(bitListSize);

            if (bitListSize === 6)
                string += Id64.getCharacter(bitList);
            else if (bitListSize !== 0) {
                cachedBitList = bitList;
                cachedBitListSize = bitListSize;
            }
        }

        if (cachedBitListSize > 0)
            string += Id64.getCharacter(cachedBitList);

        return string;
    }

    //</editor-fold>
}

//</editor-fold>
//<editor-fold desc="UUID64">

/**
 * @description If the specified character code is used as a character code in UUID64 encoding.
 * @param {number} characterCode The character code.
 * @returns {boolean} If the specified character code is used as a character code in UUID64 encoding.
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
        characterCode === 0x002E /* . */ ||
        characterCode === 0x003A /* : */;
}
/**
 * @description Defines a UUID64 error.
 * @public
 * @version 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class Uuid64Error extends Error {
    //<editor-fold desc="Constructor">

    /**
     * @description Uuid64Error constructor.
     * @param {string} message The detail message.
     */
    constructor(message) {
        super(message);
    }

    //</editor-fold>
}

/**
 * @description Defines a UUID64 (for type safety only) and a static interface that represents read-only UUID64 features. A UUID64 is a 22 character long ID64 encoded UUID.
 * @param {string|ArrayBuffer} definition The UUID64 definition (which is either the string version of the UUID64 or the UUID in bytes represented by an array buffer).
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class Uuid64 {
    //<editor-fold desc="Properties">

    /**
     * @description The length of a UUID64 string.
     * @type {!number}
     */
    static get stringLength() {
        return 22;
    }
    /**
     * @description The length of a UUID64 byte array.
     * @type {!number}
     */
    static get byteListLength() {
        return 16;
    }

    //</editor-fold>
    //<editor-fold desc="Operations">

    /**
     * @description Checks the validity of the specified UUID64.
     * @param {string} definition The UUID64 definition.
     * @returns {!boolean}
     */
    static isValid(definition) {
        return !isNothing(definition) &&
            isString(definition) &&
            definition.length !== Uuid64.stringLength &&
            definition.loopThroughCharCodes(isUuid64CharacterCode);
    }
    /**
     * @description Checks the specified UUID64 and throws an exception if it is not valid.
     * @param {string} definition The UUID64 definition.
     * @param {boolean} [allowNull=true] If the DOM ID can be <code>null</code> or <code>undefined</code>.
     * @returns {string} The specified UUID64.
     * @throws {TypeError} If the specified UUID64 is <code>null</code> or <code>undefined</code> while "allowNull" is <code>false</code>.
     * @throws {Uuid64Error} If the specified UUID64 contains no characters.
     * @throws {Uuid64Error} If the specified UUID64 is not <code>Uuid64.stringLength</code> characters long.
     * @throws {Uuid64Error} If the specified UUID64 contains an invalid character.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    static check(
        definition,
        allowNull = true
    ) {
        // These codes are identical to the Uuid64.isValid() method, only expanded to throw errors when they are found.

        checkRequiredBoolean(
            allowNull,
            "allowNull"
        );

        if (isNothing(definition)) {
            if (allowNull)
                return undefined;

            throw new TypeError(createStringFromTemplate(
                COMMON_TEXT_LIST.invalidArgumentCannotBeNullOrUndefinedTemplate,
                "uuid64Id"
            ));
        }

        if (!isString(definition))
            throw new TypeError(createStringFromTemplate(
                COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate,
                "uuid64Id",
                "string"
            ));

        if (definition.isEmpty())
            throw new Uuid64Error("The specified UUID64 contains no characters.");

        if (definition.length !== Uuid64.stringLength)
            throw new Uuid64Error(`The specified UUID64 is not ${Uuid64.stringLength} characters long.`);

        definition.forEachCharCode((
            characterCode,
            index
        ) => {
            if (!isUuid64CharacterCode(characterCode))
                throw new Uuid64Error(`The specified UUID64 contains an invalid character ("${createUnicodeNotation(characterCode)}") at index ${index}.`);
        });
        return definition;
    };
    /**
     * @description Creates an ID64 encoded type 3 (name based) UUID based on the specified array buffer.
     * @param {ArrayBuffer} arrayBuffer The array buffer.
     * @returns {string} An ID64 encoded type 3 (name based) UUID based on the specified bytes.
     * @throws {RangeError} If the byte list size is not <code>Uuid64.byteListLength</code>.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    static create(arrayBuffer) {
        if (arrayBuffer.byteLength !== Uuid64.byteListLength)
            throw new RangeError(`The byte list size is not ${Uuid64.byteListLength}.`);

        return Id64.encode(new Uint8Array(arrayBuffer));
    }

    //</editor-fold>
    //<editor-fold desc="Constructor">

    /**
     * @description Uuid64 constructor.
     * @param {string|ArrayBuffer} definition The UUID64 definition.
     */
    constructor(definition) {
        if (isNothing(definition))
            throw new TypeError(createStringFromTemplate(
                COMMON_TEXT_LIST.invalidArgumentCannotBeNullOrUndefinedTemplate,
                "definition"
            ));

        if (definition instanceof ArrayBuffer)
            this.definition = definition;
        else if (isString(definition)) {
            Uuid64.check(definition);
            this.definition = definition;
        } else
            throw new TypeError(createStringFromTemplate(
                COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate,
                "uuid64Id",
                "string or ArrayBuffer"
            ));
    }

    //</editor-fold>
}

//</editor-fold>
//<editor-fold desc="ID Chain">

/**
 * @description Defines a representation of an error with an Id Chain.
 * @public
 * @version 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class IdChainError extends Error {
    //<editor-fold desc="Constructor">

    /**
     * @description IdChainError constructor.
     * @param {string} message The message.
     */
    constructor(message) {
        super(message);
    }

    //</editor-fold>
}
/**
 * @description Defines a representation of an error with an Id Chain Schema.
 * @public
 * @version 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class IdChainSchemaError extends IdChainError {
    //<editor-fold desc="Constructor">

    /**
     * @description IdChainSchemaError constructor.
     * @param {string} message The message.
     */
    constructor(message) {
        super(message);
    }

    //</editor-fold>
}

/**
 * @description Defines ID Chain component types.
 * @readonly
 * @enum {string}
 */
const ID_CHAIN_COMPONENT_TYPE = {
    /**
     * @description The name component type.
     * @type {string}
     */
    name: "name",
    /**
     * @description The number component type.
     * @type {string}
     */
    number: "number",
    /**
     * @description The UUID64 component type.
     * @type {string}
     */
    uuid64: "uuid64"
};
Object.freeze(ID_CHAIN_COMPONENT_TYPE);
/**
 * @description Generates components (names and component types) from the specified ID Chain schema definition.
 * @param {string} schemaDefinition The schema definition.
 * @returns {Generator<string[], void, *>}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function* idChainSchemaComponentGenerator(schemaDefinition) {
    /**
     * @description Get the current schema definition character.
     * @returns {!string}
     * @since 1.0
     */
    function getCurrentCharacter() {
        return schemaDefinition.charAt(schemaDefinitionCharacterIndex);
    }
    /**
     * @description Get the current schema definition character code.
     * @returns {!number}
     * @since 1.0
     */
    function getCurrentCharacterCode() {
        return schemaDefinition.charCodeAt(schemaDefinitionCharacterIndex);
    }
    /**
     * @description Ignores all white spaces in the schema definition from the left side.
     * @returns {void}
     * @since 1.0
     */

    function ignoreWhiteSpace() {
        while (schemaDefinitionCharacterIndex < schemaDefinition.length)
            if (getCurrentCharacter().
            isWhiteSpace())
                schemaDefinitionCharacterIndex++;
            else
                break;
    }
    /**
     * @description Prepares this generator for the next iteration.
     * @returns {void}
     * @private
     */
    function prepare() {
        if (!componentBuffer.isEmpty())
            componentBuffer = "";

        ignoreWhiteSpace();
        isName = getCurrentCharacter() === IdChain.nameStart;

        if (isName) {
            schemaDefinitionCharacterIndex++;
            ignoreWhiteSpace();
        }
    }
    /**
     * @description Returns the component type (from the component buffer).
     * @returns {string[]} the component type (from the component buffer).
     */
    function getComponentType() {
        switch (componentBuffer) {
            case ID_CHAIN_COMPONENT_TYPE.name:
                throw new IdChainSchemaError("A name must be specified.");
            case ID_CHAIN_COMPONENT_TYPE.number:
            case ID_CHAIN_COMPONENT_TYPE.uuid64:
                return [
                    componentBuffer,
                    undefined
                ];
            default:
                throw new IdChainSchemaError("Invalid component type has been found.");
        }
    }

    /**
     * @description The current schema definition character index to process.
     * @type {number}
     */
    let schemaDefinitionCharacterIndex = 0;
    /**
     * @description The component buffer.
     * @type {string}
     */
    let componentBuffer = "";
    /**
     * @description If the current component type is a name.
     * @type {boolean}
     */
    let isName;
    prepare();

    if (!isName)
        throw new IdChainSchemaError("An ID Chain Schema must start with a name.");

    while (schemaDefinitionCharacterIndex < schemaDefinition.length) {
        /**
         * @description The current schema definition character to process.
         * @type {number}
         */
        let schemaDefinitionCharacterCode = getCurrentCharacterCode();

        // If the schema definition character is a lower case Latin letter.
        if (schemaDefinitionCharacterCode >= 0x61 &&
            schemaDefinitionCharacterCode <= 0x7A /* a..z */) {
            componentBuffer += String.fromCharCode(schemaDefinitionCharacterCode);
            schemaDefinitionCharacterIndex++;
            continue;
        } else
        // If the schema definition character is an upper case Latin letter.
        if (schemaDefinitionCharacterCode >= 0x41 &&
            schemaDefinitionCharacterCode <= 0x5a /* A..Z */) {
            componentBuffer += String.fromCharCode(schemaDefinitionCharacterCode + 0x20);
            schemaDefinitionCharacterIndex++;
            continue;
        } else
        // If the schema definition character is a number, which is only allowed if it's not the starting letter in a name or component type.
        if (schemaDefinitionCharacterCode >= 0x30 &&
            schemaDefinitionCharacterCode <= 0x39) {
            if (componentBuffer.length === 0)
                throw new IdChainSchemaError("The first character in a name or component type cannot be a number.");

            componentBuffer += String.fromCharCode(schemaDefinitionCharacterCode);
            schemaDefinitionCharacterIndex++;
            continue;
        } else
        // If the schema definition character is a hyphen.
        if (schemaDefinitionCharacterCode === 0x2D) {
            componentBuffer += String.fromCharCode(schemaDefinitionCharacterCode);
            schemaDefinitionCharacterIndex++;
            continue;
        } else if (isName) {
            if (String.fromCharCode(schemaDefinitionCharacterCode).
            isWhiteSpace())
                ignoreWhiteSpace();

            schemaDefinitionCharacterCode = getCurrentCharacterCode();

            // If the schema definition character is the name-end character.
            if (schemaDefinitionCharacterCode === IdChain.nameEnd.charCodeAt(0)) {
                if (componentBuffer.length === 0)
                    throw new IdChainSchemaError("A name has not been found.");

                yield [ID_CHAIN_COMPONENT_TYPE.name, IdChain.checkName(componentBuffer)];
                schemaDefinitionCharacterIndex++;
                prepare();
                continue;
            }
        } else if (String.fromCharCode(schemaDefinitionCharacterCode).
            isWhiteSpace()) {
            if (componentBuffer.isEmpty())
                continue;

            yield getComponentType();
            prepare();
            continue;
        }

        throw new IdChainSchemaError(`Unexpected character found: (${createUnicodeNotation(schemaDefinitionCharacterCode)}).`);
    }

    if (isName)
        throw new IdChainSchemaError("The name-end character was expected but not found.");

    if (componentBuffer.isEmpty())
        // No name or component type has been found.
        return;

    yield getComponentType();
}

/**
 * @description Defines a static interface that represents ID Chain features. An ID Chain is a string that consists out of components (names and IDs) and serves as an ID.
 * @public
 * @version 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class IdChain {
    //<editor-fold desc="Properties">

    /**
     * @description The name start character.
     * @type {string}
     */
    static get nameStart() {
        return "\u005B" /* Left square bracket: [ */;
    }
    /**
     * @description The name end character.
     * @type {string}
     */
    static get nameEnd() {
        return "\u005D" /* Right square bracket: [ */;
    }
    /**
     * @description The ID Chain separator.
     * @type {string}
     */
    static get separator() {
        return "\u005F" /* Low line: _ */;
    }
    /**
     * @description A constant holding the maximum value a number can have (which equals the maximum cardinal value).
     * @type {number}
     */
    static get numberMaximumValue() {
        return 4294967295;
    }

    //</editor-fold>
    //<editor-fold desc="Operations">

    /**
     * @description Checks if the specified character code is a valid digit for use in an ID Chain.
     * @param {number} characterCode The character code.
     * @returns {boolean} if the specified character code is a valid digit for use in an ID Chain.
     */
    static isDigit(characterCode) {
        return characterCode >= 0x30 &&
            characterCode <= 0x39;
    }
    /**
     * @description Checks if the specified character code is a valid letter for use in an ID Chain.
     * @param {number} characterCode The character code.
     * @returns {boolean} if the specified character code is a valid letter for use in an ID Chain.
     */
    static isLetter(characterCode) {
        return (characterCode >= 0x61 &&
            characterCode <= 0x7A /* a..z */) ||
            (characterCode >= 0x41 &&
                characterCode <= 0x5a /* A..Z */);
    }
    /**
     * @description Checks if the specified character is a valid special character code for use in an ID Chain.
     * @param {number} characterCode The character code.
     * @returns {boolean} if the specified character is a valid special character code for use in an ID Chain.
     */
    static isSpecial(characterCode) {
        return characterCode === 0x2E /* Full stop: . */ ||
            characterCode === 0x3A /* Colon: : */;
    }
    /**
     * @description Checks the specified number and returns it if it is valid for use in an ID Chain.
     * @param {number} number The number.
     * @returns {number} The specified number.
     * @throws {IdChainError} If the specified number is a signed integer or a number that is higher than the maximum value of an unsigned 32 bits integer.
     */
    static checkNumber(number) {
        if (number < 0)
            throw new IdChainError("A number cannot be a signed integer.");

        if (number > IdChain.numberMaximumValue)
            throw new IdChainError(`A number cannot be higher than ${IdChain.numberMaximumValue}.`);

        return number;
    }
    /**
     * @description Checks if the specified number definition can be converted to an unsigned 32 bits integer.
     * @param {string} numberDefinition The number definition.
     * @returns if the specified string can be converted to an unsigned 32 bits integer.
     */
    static isValidAsNumber(numberDefinition) {
        /**
         * @description The string version of a constant holding the maximum value a number can have
         * @type {string}
         */
        const numberMaximumValueAsString = IdChain.numberMaximumValue.toString();

        if (numberDefinition.isEmpty() ||
            numberDefinition.length > numberMaximumValueAsString.length)
            return false;

        if (numberDefinition.length < numberMaximumValueAsString.length)
            return numberDefinition.loopThroughCharCodes(characterCode =>
                IdChain.isDigit(characterCode));

        if (numberDefinition.length === numberMaximumValueAsString.length)
            for (/**
                  * @description The current number definition character index.
                  * @type {number}
                  */
                 let numberDefinitionCharacterIndex = 0;
                 numberDefinitionCharacterIndex < numberDefinition.length;
                 numberDefinitionCharacterIndex++
            ) {
                /**
                 * @description The current number definition character code to process.
                 * @type {number}
                 */
                const characterCode = numberDefinition.charCodeAt(numberDefinitionCharacterIndex);
                /**
                 * @description The current character code (to process) of the string version of the maximum value a number can have.
                 * @type {number}
                 */
                const numberMaximumValueAsStringCharacterCode = numberMaximumValueAsString.charCodeAt(numberDefinitionCharacterIndex);

                if (characterCode === numberMaximumValueAsStringCharacterCode)
                    continue;

                if (IdChain.isDigit(characterCode) &&
                    characterCode < numberMaximumValueAsStringCharacterCode)
                    continue;

                return false;
            }

        return true;
    }
    /**
     * @description Creates a component list from the specified ID Chain definition.
     * @param {string} idChainDefinition The ID Chain definition.
     * @returns {string[]} a component list from the specified ID Chain definition.
     */
    static createComponentList (idChainDefinition) {
        return idChainDefinition.split(IdChain.separator);
    }
    /**
     * @description Checks the specified name and returns it if it is valid, otherwise an exception will be thrown.
     * @param {string} name The name.
     * @returns {string} The specified name.
     * @throws {IdChainError} If the specified name is empty, doesn't start with a letter or contains an invalid character.
     */
    static checkName(name) {
        if (name.isEmpty())
            throw new IdChainError("A name cannot be empty.");

        if (!IdChain.isLetter(name.charCodeAt(0)))
            throw new IdChainError("A name must start with a letter");

        for (/**
              * @description The current name character index.
              * @type {number}
              */
             let nameCharacterCodeIndex = 1;
             nameCharacterCodeIndex < name.length;
             nameCharacterCodeIndex++
        ) {
            /**
             * The current name character code to process.
             * @type {number}
             */
            const nameCharacterCode = name.charCodeAt(nameCharacterCodeIndex);

            if (!(IdChain.isLetter(nameCharacterCode) ||
                IdChain.isDigit(nameCharacterCode) ||
                IdChain.isSpecial(nameCharacterCode)))
                throw new IdChainError(`The name contains an invalid character (${createUnicodeNotation(nameCharacterCode)}) at index ${nameCharacterCodeIndex}.`);
        }

        return name;
    }
    /**
     * @description Checks if the specified ID Chain definition is valid in accordance to the specified schema definition.
     * @param {string|Array} schemaDefinition The schema definition.
     * @param {string} idChainDefinition The ID Chain definition.
     * @returns {boolean} f the specified ID Chain definition is valid in accordance to the specified schema definition.
     */
    static isValid(
        schemaDefinition,
        idChainDefinition
    ) {
        /**
         * @description The components.
         * @type {string[]}
         */
        const componentList = IdChain.createComponentList(idChainDefinition);
        /**
         * @description The current component index to process.
         * @type {number}
         */
        let componentListIndex = 0;

        for (// TODO How to document this?
            const [
                componentType,
                name
            ] of schemaDefinition instanceof Array ?
            schemaDefinition :
            idChainSchemaComponentGenerator(schemaDefinition)
        ) {
            if (componentListIndex === componentList.length)
                return false;

            /**
             * @description The current component to process.
             * @type {string}
             */
            const component = componentList[componentListIndex];

            switch (componentType) {
                case ID_CHAIN_COMPONENT_TYPE.name:
                    if (!component.equalsIgnoreCase(name))
                        return false;

                    componentListIndex++;
                    break;
                case ID_CHAIN_COMPONENT_TYPE.number:
                    if (!IdChain.isValidAsNumber(component))
                        return false;

                    componentListIndex++;
                    break;
                case ID_CHAIN_COMPONENT_TYPE.uuid64:
                    if (!Uuid64.isValid(component))
                        return false;

                    componentListIndex++;
                    break;
                default:
                    throw new ImpossibleError();
            }
        }

        return componentListIndex >= componentList.length;
    }
    /**
     * @description Creates an ID Chain definition using the specified components.
     * @param {...Object} components The components.
     * @returns {string} An ID Chain definition using the specified components.
     * @throws {IdChainError} If no components are specified, the first component is not a name or if any of the components are not a string, UUID64 or an unsigned 32 bits integer.
     * @example IdChain.create(&quot;project&quot;, 23); // Returns "project_32".
     */
    static create(...components) {
        /**
         * @description The component consumer to update the ID Chain definition buffer.
         * @param {string} component The component.
         * @type {Function}
         */
        function componentConsumer(component) {
            idChainDefinitionBuffer += IdChain.separator + component;
        }

        if (components.length === 0)
            throw new IdChainError("Invalid number of components (0). At least one is required.");

        /**
         * @description The ID Chain definition buffer.
         * @type {string}
         */
        let idChainDefinitionBuffer;

        {
            /**
             * @description The first component.
             * @type {Object}
             */
            const firstComponent = components[0];

            if (components.length === 1 &&
                firstComponent instanceof Array)
                return IdChain.create.apply(
                    undefined,
                    firstComponent
                );

            if (!isString(firstComponent))
                throw new IdChainError("The first component must be a name.");

            // noinspection JSCheckFunctionSignatures
            idChainDefinitionBuffer = IdChain.checkName(firstComponent);
        }

        for (/**
              * @description The current component index.
              * @type {number}
              */
             let componentIndex = 1;
             componentIndex < components.length;
             componentIndex++
        ) {
            /**
             * @description The current component to process.
             * @type {Object}
             */
            const component = components[componentIndex];

            if (isNumber(component))
                // noinspection JSCheckFunctionSignatures
                componentConsumer(IdChain.checkNumber(component).toString());
            else if (isString(component))
                // noinspection JSCheckFunctionSignatures
                componentConsumer(IdChain.checkName(component));
            else if (component instanceof Uuid64)
                componentConsumer(component.toString());
            else
                throw new IdChainError("All components have to be an instance of string, UUID64 or an unsigned 32 bits integer (but the first component needs to be a string).");
        }

        return idChainDefinitionBuffer;
    }
    /**
     * @description Creates an ID Chain definition in accordance to the specified schema definition using the specified components.
     * @param {string} schemaDefinition The schema definition.
     * @param {Object} components The components.
     * @returns {string} An ID Chain definition in accordance to the specified schema definition using the specified components.
     * @throws {IdChainError} If no components are specified, more components were expected than what has been specified or more components were defined than what has been specified in
     * the schema.
     * @throws {IdChainError} If the schema definition is undefined.
     * @throws {IdChainError} If a name, number or UUID64 was expected (as defined i the specified schema) but an instance of another type has been found.
     * @example IdChain.createWithSchema(&quot;[project]&quot;, &quot;project&quot;); // Returns &quot;project&quot;.
     * @example IdChain.createWithSchema(&quot;[project] number&quot;, &quot;project", 43); // Returns &quot;project_43&quot;.
     */
    static createWithSchema(
        schemaDefinition,
        ...components
    ) {
        /**
         * @description The component consumer to update the ID Chain definition buffer.
         * @param {string} component The component.
         * @type {Function}
         */
        function componentConsumer(component) {
            idChainDefinitionBuffer += IdChain.separator + component;
        }
        /**
         * @description Checks the specified found name against the schema definition.
         * @param {string} foundName The found name.
         * @returns {string} The specified found name.
         */
        function checkNameAgainstSchema(foundName) {
            /**
             * @description The name from the schema definition.
             * @type {string}
             */
            const nameFromSchema = schemaComponentGeneratedYieldResult.value[1];

            if (isNothing(nameFromSchema))
                throw new ImpossibleError("No name has been found in the schema.");

            if (!foundName.equalsIgnoreCase(nameFromSchema))
                throw new IdChainError(`Invalid component name found (${foundName}). Component name "${nameFromSchema}" was expected.`);

            return nameFromSchema;
        }

        if (components.length === 0)
            throw new IdChainError("Invalid number of components (0). At least one is required.");

        /**
         * @description The ID Chain definition buffer.
         * @type {string}
         */
        let idChainDefinitionBuffer;
        /**
         * @description Generates components (names and component types) from the specified ID Chain schema definition.
         * @type {Generator<string[], void, *>}
         */
        const schemaComponentGenerator = idChainSchemaComponentGenerator(schemaDefinition);
        /**
         * @description The current ID Chain Schema yield result to process.
         * @type {IteratorResult<string[], void>}
         */
        let schemaComponentGeneratedYieldResult = schemaComponentGenerator.next();

        if (schemaComponentGeneratedYieldResult.done)
            throw new IdChainError("The specified schema definition is undefined");

        if (schemaComponentGeneratedYieldResult.value[0] !== ID_CHAIN_COMPONENT_TYPE.name)
            throw new ImpossibleError("The first ID Chain component type must always be a name.");

        {
            /**
             * @description The first component.
             * @type {Object}
             */
            const firstComponent = components[0];

            if (!isString(firstComponent))
                throw new IdChainError("The first component cannot be anything other than a string.");

            // noinspection JSCheckFunctionSignatures
            idChainDefinitionBuffer = IdChain.checkName(firstComponent);
        }

        /**
         * @description The current component index.
         * @type {number}
         */
        let componentIndex = 1;

        for (
            ;
            !(schemaComponentGeneratedYieldResult = schemaComponentGenerator.next()).done;
            componentIndex++
        ) {
            if (componentIndex === components.length)
                throw new IdChainError("More components were expected than what has been specified.");

            /**
             * @description The current component to process.
             * @type {Object}
             */
            const component = components[componentIndex];
            /**
             * @description The current ID Chain component type to process.
             * @type {string}
             */
            const componentType = schemaComponentGeneratedYieldResult.value[0];

            switch (componentType) {
                case ID_CHAIN_COMPONENT_TYPE.name:
                    if (!isString(component))
                        throw new IdChainError(`A name was expected (as defined in the specified schema) but an instance of ${typeof component} has been found.`);

                    // noinspection JSCheckFunctionSignatures
                    componentConsumer(checkNameAgainstSchema(component));
                    break;
                case ID_CHAIN_COMPONENT_TYPE.number:
                    if (!isNumber(component))
                        throw new IdChainError(`A number was expected (as defined in the specified schema) but an instance of ${typeof component} has been found.`);

                    // noinspection JSCheckFunctionSignatures
                    componentConsumer(IdChain.checkNumber(component));
                    break;
                case ID_CHAIN_COMPONENT_TYPE.uuid64:
                    if (!(component instanceof Uuid64))
                        throw new IdChainError(`A UUID64 was expected (as defined in the specified schema) but an instance of ${typeof component} has been found.`);

                    componentConsumer(component.toString());
                    break;
                default:
                    throw new ImpossibleError();
            }
        }

        if (componentIndex < components.length)
            throw new IdChainError("More components were defined than what has been specified in the schema.");

        return idChainDefinitionBuffer;
    }
    /**
     * Creates an ID Chain definition from the specified schema definition using the specified values.
     * @param {string} schemaDefinition The schema definition.
     * @param {Object} values The values.
     * @returns {string} An ID Chain definition from the specified schema definition using the specified values.
     * @throws {IdChainError} If the schema definition is undefined.
     * @throws {IdChainError} If the first component type is not a name.
     * @throws {IdChainError} If more values were expected than what has been specified or more values were defined than what has been specified in the schema.
     * @throws {IdChainError} If a number or UUID64 was expected (as defined i the specified schema) but an instance of another type has been found.
     * @example IdChain.createFromSchema(&quot;[project] number&quot;, 54); // Returns &quot;project_54&quot;.
     * @example IdChain.createFromSchema(&quot;[project] uuid64&quot;, new Uuid64(&quot;pE1eV5LPQxa8F2CbGYLGVC&quot;)); // Returns &quot;project_pE1eV5LPQxa8F2CbGYLGVC&quot;.
     * @example IdChain.createFromSchema(&quot;[project] uuid64 [section] number&quot;, new Uuid64(&quot;pE1eV5LPQxa8F2CbGYLGVC&quot;), 54); // Returns &quot;project_pE1eV5LPQxa8F2CbGYLGVC_section_54&quot;.
     * @example IdChain.createFromSchema(&quot;[project] uuid64 number&quot;, new Uuid64(&quot;pE1eV5LPQxa8F2CbGYLGVC&quot;), 54); // Returns &quot;project_pE1eV5LPQxa8F2CbGYLGVC_54&quot;.
     */
    static createFromSchema(
        schemaDefinition,
        ...values
    ) {
        /**
         * @description The component consumer to update the ID Chain definition buffer.
         * @param {string} component The component.
         * @type {Function}
         */
        function componentConsumer(component) {
            idChainDefinitionBuffer += IdChain.separator + component;
        }

        /**
         * @description Generates components (names and component types) from the specified ID Chain schema definition.
         * @type {Generator<string[], void, *>}
         */
        const schemaComponentGenerator = idChainSchemaComponentGenerator(schemaDefinition);
        /**
         * @description The current ID Chain Schema yield result to process.
         * @type {IteratorResult<string[], void>}
         */
        let schemaComponentGeneratedYieldResult = schemaComponentGenerator.next();

        if (schemaComponentGeneratedYieldResult.done)
            throw new IdChainError("The specified schema definition is undefined");

        if (schemaComponentGeneratedYieldResult.value[0] !== ID_CHAIN_COMPONENT_TYPE.name)
            throw new ImpossibleError("The first ID Chain component type must always be a name.");

        /**
         * @description The ID Chain definition buffer.
         * @type {string}
         */
        let idChainDefinitionBuffer = schemaComponentGeneratedYieldResult.value[1];
        /**
         * @description The current value index.
         * @type {number}
         */
        let valueIndex = 0;

        while (!(schemaComponentGeneratedYieldResult = schemaComponentGenerator.next()).done) {
            if (schemaComponentGeneratedYieldResult.value[0] === ID_CHAIN_COMPONENT_TYPE.name)
                componentConsumer(schemaComponentGeneratedYieldResult.value[1]);
            else {
                if (valueIndex === values.length)
                    throw new IdChainError("More values were expected than what has been specified.");

                /**
                 * @description The current value to process.
                 * @type {Object}
                 */
                const value = values[valueIndex++];

                switch (schemaComponentGeneratedYieldResult.value[0]) {
                    case ID_CHAIN_COMPONENT_TYPE.number:
                        if (!isNumber(value))
                            throw new IdChainError(`A number was expected (as defined in the specified schema) but an instance of ${typeof value} has been found.`);

                        // noinspection JSCheckFunctionSignatures
                        componentConsumer(value);
                        break;
                    case ID_CHAIN_COMPONENT_TYPE.uuid64:
                        if (!(value instanceof Uuid64))
                            throw new IdChainError(`A UUID64 was expected (as defined in the specified schema) but an instance of ${typeof value} has been found.`);

                        // noinspection JSCheckFunctionSignatures
                        componentConsumer(value);
                        break;
                    default:
                        throw new ImpossibleError();
                }
            }
        }

        if (valueIndex < values.length)
            throw new IdChainError("More values were defined than what has been specified in the schema.");

        return idChainDefinitionBuffer;
    }
    /**
     * @description Returns the IDs from the specified ID Chain definition in accordance to the specified schema definition.
     * @param {string} schemaDefinition The schema definition.
     * @param {string} idChainDefinition The schema definition.
     * @returns the IDs from the specified ID Chain definition in accordance to the specified schema definition.
     * @throws {IdChainError} If more components were expected than what has been specified.
     * @throws {IdChainError} If an invalid component name, number or UUID64 is found.
     * @throws {IdChainError} If more values were defined than what has been specified in the schema.
     * @example IdChain.getIdList(&quot;[project] number number number&quot;, &quot;project_89_75_2165&quot;); // Returns [89, 75, 2165].
     * @example IdChain.getIdList("[project] number uuid64", "project_89_pE1eV5LPQxa8F2CbGYLGVC"); // Returns [89, Uuid64].
     */
    static getIdList(
        schemaDefinition,
        idChainDefinition
    ) {
        /**
         * @description The components.
         * @type {string[]}
         */
        const componentList = IdChain.createComponentList(idChainDefinition);
        /**
         * @description The current component index to process.
         * @type {number}
         */
        let componentListIndex = 0;
        /**
         * @description Generates components (names and component types) from the specified ID Chain schema definition.
         * @type {Generator<string[], void, *>}
         */
        const schemaComponentGenerator = idChainSchemaComponentGenerator(schemaDefinition);
        /**
         * @description The current ID Chain Schema result to process.
         * @type {IteratorResult<string[], void>}
         */
        let schemaComponentGeneratedYieldResult;
        /**
         * @description The ID list.
         * @type {Object[]}
         */
        const idList = [];

        while (!(schemaComponentGeneratedYieldResult = schemaComponentGenerator.next()).done) {
            if (componentListIndex === componentList.length)
                throw new IdChainError("More components were expected than what has been specified.");

            /**
             * @description The current component to process.
             * @type {string}
             */
            const component = componentList[componentListIndex++];

            switch (schemaComponentGeneratedYieldResult.value[0]) {
                case ID_CHAIN_COMPONENT_TYPE.name:
                    if (!component.equalsIgnoreCase(schemaComponentGeneratedYieldResult.value[1]))
                        throw new IdChainError(`Invalid component name found ("${component}"). Component name "${schemaComponentGeneratedYieldResult.value[1]}" was expected.`);

                    break;
                case ID_CHAIN_COMPONENT_TYPE.number:
                    if (!IdChain.isValidAsNumber(component))
                        throw new IdChainError("Invalid number found.");

                    idList.push(Number.parseInt(component));
                    break;
                case ID_CHAIN_COMPONENT_TYPE.uuid64:
                    if (!Uuid64.isValid(component))
                        throw new IdChainError("Invalid UUID64 found.");

                    idList.push(new Uuid64(component));
                    break;
                default:
                    throw new ImpossibleError();
            }
        }

        if (componentListIndex < componentList.length)
            throw new IdChainError("More values were defined than what has been specified in the schema.");

        return idList;
    }

    //</editor-fold>
}

/**
 * @description Returns a list of elements that have an ID that matches the specified ID Chain Schema.
 * @param {string|Array} idChainSchemaDefinition The schema definition.
 * @returns {String|Element[]} A list of elements that have an ID that matches the specified ID Chain Schema.
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLDocument.prototype.getElementsByIdChainSchema = function (idChainSchemaDefinition) {
    // Since the same ID Chain Schema is going to be used for each element that has an ID, it's better to read the ID Chain Schema once.
    if (isString(idChainSchemaDefinition))
        idChainSchemaDefinition = Array.from(idChainSchemaComponentGenerator(idChainSchemaDefinition));

    /**
     * @description The elements that have an ID that matches the specified ID Chain Schema.
     * @type {!Element[]}
     */
    const elementList = [];
    this.querySelectorAll("[id]").
    forEach(element => {
        if (IdChain.isValid(
            idChainSchemaDefinition,
            element.id
        ))
            elementList.push(element);
    });
    return elementList;
};
/**
 * @description Removes elements that have an ID that matches the specified ID Chain Schema.
 * @param {string|Array} idChainSchemaDefinition The schema definition.
 * @returns {number} The number of removed elements.
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLDocument.prototype.removeElementsByIdChainSchema = function (idChainSchemaDefinition) {
    // Since the same ID Chain Schema is going to be used for each element that has an ID, it's better to read the ID Chain Schema once.
    if (isString(idChainSchemaDefinition))
        idChainSchemaDefinition = Array.from(idChainSchemaComponentGenerator(idChainSchemaDefinition));

    /**
     * @description The number of elements that have been removed.
     * @type {number}
     */
    let elementsRemoved = 0;
    this.querySelectorAll("[id]").
    forEach(element => {
        if (IdChain.isValid(
            idChainSchemaDefinition,
            element.id
            ) &&
            removeNode(element))
            elementsRemoved++;
    });
    return elementsRemoved;
};

/**
 * @description Defines an ID Chain creator.
 * @param {...string} [prefixNames] The prefix names.
 * @constructor
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function IdChainCreator(...prefixNames) {
    //<editor-fold desc="Properties">

    /**
     * @description The prefix name list.
     * @type {!string[]}
     * @private
     */
    const _prefixNameList = [];
    /**
     * @description The prefix, processed as an ID Chain.
     * @type {?string}
     * @private
     */
    let _prefixNameListAsString = null;

    //</editor-fold>
    //<editor-fold desc="Constructor">

    if (!Array.isEmpty(prefixNames))
        _prefixNameList.merge(prefixNames);

    //</editor-fold>
    //<editor-fold desc="Operations">

    /**
     * @description Adds the specified prefix name to this ID Chain creator.
     * @param {string} prefixName The prefix name.
     * @returns {!number} The number of prefix names in this ID Chain creator.
     */
    this.add = prefixName => {
        _prefixNameList.push(prefixName);

        if (!!_prefixNameListAsString)
            _prefixNameListAsString = null;
    };
    /**
     * @description Resets this ID Chain creator.
     * @returns {void}
     */
    this.reset = () => {
        _prefixNameList.clear();
        _prefixNameListAsString = null;
    };
    /**
     *  @description Creates and returns an ID Chain definition using the prefix names (if there are any) and the specified components.
     *  @param {...Object} components The components.
     *  @returns an ID Chain definition using the prefix names (if there are any) and the specified components.
     */
    this.create = (...components) => {
        if (_prefixNameList.isEmpty())
            return IdChain.create(components);

        if (!_prefixNameListAsString)
            _prefixNameListAsString = IdChain.create.apply(
                undefined,
                _prefixNameList
            );

        return Array.isEmpty(components) ?
            _prefixNameListAsString :
            _prefixNameListAsString +
            IdChain.separator +
            IdChain.create.apply(
                undefined,
                components
            );
    };

    //</editor-fold>
}

//</editor-fold>
//<editor-fold desc="DOM">

/**
 * @description Returns a reference to the element by the specified ID.
 * @param {string} id The ID of the element to look for.
 * @returns {Element} The matching element or null if there is none.
 * @throws {string} If the ID has not been specified.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.prototype.getElementById = function (id) {
    return this.querySelectorOnlyOne("\u0023" /* Number sign: # */ +
        checkRequiredString(
            id,
            "id"
        )
    );
};
/**
 * @description Returns a reference to the required element by its ID.
 * @param {string} id The ID.
 * @returns {Element} The matching element
 * @throws {string} If the required element is not found.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see getElementByDomId();
 */
HTMLDocument.prototype.getRequiredElementById = function (id) {
    /**
     * @description The element with the specified ID.
     * @type {Element}
     */
    const element = this.getElementById(id);

    if (isNothing(element))
        throw new Error("Required element not found.");

    return element;
};
/**
 * @description Checks if there is an element in the document with the specified ID.
 * @param {string} id The ID of the element to look for.
 * @returns {boolean} If there is an element in the document with the specified ID.
 * @throws {Error} If multiple elements have been found with the specified ID.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLDocument.prototype.hasElementWithId = function (id) {
    return !isNothing(document.getElementById(id));
};
/**
 * @description Remove a element by its ID.
 * @param {string} id The unique ID of the element.
 * @returns {Element} The removed element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLDocument.prototype.removeElementById = function (id) {
    /**
     * @description The element with the specified ID.
     * @type {Element}
     */
    const element = this.getElementById(id);

    return isNothing(element) ? null :
        isNothing(element.parentNode) ? null :
            element.parentNode.removeChild(element);
};
/**
 * @description Returns a reference to the required element by its ID.
 * @param {string} id The ID.
 * @returns {Element} The matching element
 * @throws {Error} If the required element is not found.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see getElementByDomId();
 */
HTMLElement.prototype.getRequiredElementById = function (id) {
    /**
     * @description The required element with the specified ID.
     * @type {Element}
     */
    const element = this.getElementById(id);

    if (isNothing(element))
        throw new Error("Required element not found.");

    return element;
};

/**
 * @description Returns an array of child nodes of the specified node type.
 * @param {number} nodeType The integer value which specifies the type of the child nodes to find.
 * @returns {!Array<Node>} An array of child nodes of the specified node type.
 * @throws {Error} If the specified node type is unrecognized.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://developer.mozilla.org/en/docs/Web/API/Node/nodeType
 */
HTMLElement.prototype.getNodesByNodeType = function (nodeType) {
    checkRequiredNumber(
        nodeType,
        "nodeType"
    );

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
     * @type {Array<Node>}
     */
    const nodeList = [];
    this.childNodes.forEach(childNode => {
        if (childNode.nodeType === nodeType)
            nodeList.push(childNode);
    });
    return nodeList;
};
/**
 * @description Removes child nodes of the specified node type.
 * @param {number} nodeType The integer value which specifies the type of the child nodes to remove.
 * @returns {number} The number of child nodes that have been removed.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.prototype.removeNodesByNodeType = function (nodeType) {
    /**
     * @description An array of child nodes of the specified node type.
     * @type {!Array<Node>}
     */
    const nodeListToRemove = this.getNodesByNodeType(nodeType);
    return nodeListToRemove.length - removeNodes(nodeListToRemove).length;
};
/**
 * @description Checks if this element has child elements.
 * @returns {boolean} If this element has child elements.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Element.prototype.hasChildren = function () {
    return this.childElementCount > 0;
};
/**
 * @description Removes all child elements from the specified node.
 * @returns {boolean} If any child elements have been removed.
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
 * @param {string} className The class name (can only be one class name).
 * @returns {!Array<HTMLElement>} A list of children of this HTML element with the specified class name.
 * @throws {TypeError} If the class name is null, undefined or not a string.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.prototype.selectChildrenByClassName = function (className) {
    checkRequiredString(
        className,
        "className"
    );

    /**
     * @description The selected children.
     * @type {!Array<HTMLElement>}
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
 * @param {string} className The class name (can only be one class name).
 * @returns {HTMLElement} One child of this HTML element with the specified class name, undefined if there is none.
 * @throws {Error} If more than one child with the specified class name is found.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.prototype.selectOnlyOneChildByClassName = function (className) {
    /**
     * @description The children of this HTML element with the specified class name.
     * @type {Array<HTMLElement>}
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
 * @param {string} tagName The tag name.
 * @returns {Array<HTMLElement>} A list of children of this HTML element with the specified tag name.
 * @throws {TypeError} If the tag name is null, undefined or not a string.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.prototype.selectChildrenByTagName = function (tagName) {
    checkRequiredString(
        tagName,
        "tagName"
    );

    /**
     * @description A list of selected children.
     * @type {Array<HTMLElement>}
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
 * @param {string} tagName The tag name.
 * @returns {HTMLElement} One child of this HTML element with the specified tag name, undefined if there is none.
 * @public
 * @throws {Error} If more than one child with the specified tag name is found.
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.prototype.selectOnlyOneChildByTagName = function (tagName) {
    /**
     * @description The children of this HTML element with the specified tag name.
     * @type {Array<HTMLElement>}
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
 * @description Returns the first element that is a descendant of the element on which it is invoked that matches the specified group of selectors. If more than one element is returned
 * an exception will be thrown.
 * @param {string} elementName A group of selectors to match the descendant elements of the Element baseElement against; this must be valid CSS syntax, or a SyntaxError exception will
 * occur. The first element found which matches this group of selectors is returned.
 * @returns {Element} The first descendant element of baseElement which matches the specified group of selectors. The entire hierarchy of elements is considered when matching,
 * including those outside the set of elements including baseElement and its descendants; in other words, selectors is first applied to the whole document, not the baseElement, to
 * generate an initial list of potential elements. The resulting elements are then examined to see if they are descendants of baseElement. The first match of those remaining elements
 * is returned by the querySelector() method. If more than one element is returned an exception will be thrown.
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
 * @description Returns the first element that is a descendant of the element on which it is invoked that matches the specified group of selectors. If more than one element is returned
 * an exception will be thrown.
 * @param {string} elementName A group of selectors to match the descendant elements of the Element baseElement against; this must be valid CSS syntax, or a SyntaxError exception will
 * occur. The first element found which matches this group of selectors is returned.
 * @returns {Element} The first descendant element of baseElement which matches the specified group of selectors. The entire hierarchy of elements is considered when matching,
 * including those outside the set of elements including baseElement and its descendants; in other words, selectors is first applied to the whole document, not the baseElement, to
 * generate an initial list of potential elements. The resulting elements are then examined to see if they are descendants of baseElement. The first match of those remaining elements
 * is returned by the querySelector() method. If more than one element is returned an exception will be thrown.
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
 * @param {string} name The name.
 * @param {string|Object} [value] The value. If the value is not a string it will be converted to a string.
 * @returns {string} A CSS element with the specified attribute name and (optionally a) value.
 * @throws {TypeError} If the name is null, undefined or not a string.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function createQueryAttribute(
    name,
    value
) {
    checkRequiredString(
        name,
        "name"
    );
    return isNothing(value) ?
        `[${name}]` :
        `[${name}="${(isString(value) ?
            value :
            value.toString()).replace(
                "\u0022",
                "\u005c\u0022"
        )}]"`;
}
/**
 * @description Creates a CSS element with the specified dataset attribute name and (optionally a) value (for use in query selectors).
 * @param {string} name The name.
 * @param {string|Object} [value] The value. If the value is not a string it will be converted to a string.
 * @returns {string} A CSS element with the specified attribute name and (optionally a) value.
 * @throws {TypeError} If the name is null, undefined or not a string.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function createQueryDataAttribute(
    name,
    value
) {
    checkRequiredString(
        name,
        "name"
    );
    return createQueryAttribute(
        "data-" + name,
        value
    );
}
/**
 * @description Creates a CSS element with the attribute name "date-name" and (optionally) a value (for use in query selectors that use use the dataset property "name" on the
 * HTMLElement interface).
 * @param {string|Object} [value] The value.
 * @returns {string} A CSS element with the attribute name "date-name" and (optionally) a value (for use in query selectors that use use the dataset property "name" on the HTMLElement
 * interface).
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function createQueryDataNameAttribute(value) {
    return createQueryDataAttribute(
        "name",
        value
    );
}
/**
 * @description Checks if this element has a body parent.
 * @returns {boolean} If this element has a body parent.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.prototype.hasBodyParent = function () {
    for (/**
          * @description The parent element.
          * @type {HTMLElement}
          */
         let parentElement = this.parentElement;
         !!parentElement;
         parentElement = parentElement.parentElement
    )
        if (isNothing(parentElement))
            break;
        else if (parentElement instanceof HTMLBodyElement)
            return true;

    return false;
};
/**
 * @description Removes all child nodes from the specified node.
 * @returns {!boolean} If any child nodes have been removed.
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
 * @returns {void}
 */
Node.prototype.appendChildNodes = function (...nodeList) {
    for (/**
          * @description The current node index.
          * @type {number}
          */
         let nodeIndex = 0;
         nodeIndex < nodeList.length;
         nodeIndex++
    )
        this.appendChild(nodeList[nodeIndex]);
};
/**
 * @description Executes the provided function once for each item in this collection. This loop is breakable.
 * @param {LoopCallback} callback Function that produces an item of this collection.
 * @param {number} [startIndex] The start index.
 * @param {number} [endIndex] The end index.
 * @param {number} [step] The number by which the counter of the loop is incremented each time.
 * @param {Object} [scope] The value of <code>this</code> provided for the callback function.
 * @returns {boolean} If the loop has been executed (and at least one item has been processed) and has not been broken.
 * @throws {TypeError} If the provided function returns a value that is not a boolean.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLCollection.prototype.loop = function (
    callback,
    startIndex,
    endIndex,
    step,
    scope
) {
    return loopThroughList(
        this,
        callback,
        startIndex,
        endIndex,
        step,
        scope
    );
};
/**
 * @description Executes the provided function once for each item in this collection. This loop is unbreakable.
 * @param {ForEachCallback} callback Function that produces an item of this collection.
 * @param {number} [startIndex] The start index.
 * @param {number} [endIndex] The end index.
 * @param {number} [step] The number by which the counter of the loop is incremented each time.
 * @param {Object} [scope] The value of <code>this</code> provided for the callback function.
 * @returns {void}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLCollection.prototype.forEach = function (
    callback,
    scope,
    startIndex,
    endIndex,
    step
) {
    return forEachInList(
        this,
        callback,
        startIndex,
        endIndex,
        step,
        scope
    );
};
/**
 * @description Executes the provided function once for each item in this list. This loop is breakable.
 * @param {LoopCallback} callback Function that produces an item of this list.
 * @param {number} [startIndex] The start index.
 * @param {number} [endIndex] The end index.
 * @param {number} [step] The number by which the counter of the loop is incremented each time.
 * @param {Object} [scope] The value of <code>this</code> provided for the callback function.
 * @returns {!boolean} If the loop has been executed (and at least one item has been processed) and has not been broken.
 * @throws {TypeError} If the provided function returns a value that is not a boolean.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
NodeList.prototype.loop = function (
    callback,
    scope,
    startIndex,
    endIndex,
    step
) {
    return loopThroughList(
        this,
        callback,
        startIndex,
        endIndex,
        step,
        scope
    );
};
/**
 * @description Executes the provided function once for each item in this list. This loop is unbreakable.
 * @param {ForEachCallback} callback Function that produces an item of this list.
 * @param {number} [startIndex] The start index.
 * @param {number} [endIndex] The end index.
 * @param {number} [step] The number by which the counter of the loop is incremented each time.
 * @param {Object} [scope] The value of <code>this</code> provided for the callback function.
 * @returns {void}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
NodeList.prototype.forEach = function (
    callback,
    scope,
    startIndex,
    endIndex,
    step
) {
    return forEachInList(
        this,
        callback,
        startIndex,
        endIndex,
        step,
        scope
    );
};
/**
 * @description Checks if the NodeList is empty or not.
 * @returns {!boolean} If the NodeList contains no elements.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
NodeList.prototype.isEmpty = function () {
    return this.length === 0;
};
/**
 * @description Removes all nodes from this list.
 * @returns {void}
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
 * @returns {void}
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
 * @param {string|Text|number} text The string or Text to append.
 * @param {boolean} [appendWhiteSpace=true] If a white space only string should be appended. The default behavior is to append a white space string.
 * @returns {Text} The Text node that been appended or undefined if the specified text is <code>null</code> or <code>undefined</code>.
 * @throws {TypeError} If argument "appendWhiteSpace" is not a boolean.
 * @throws {TypeError} If the specified text is not a string, number or an instance of Text.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.prototype.appendText = function (
    text,
    appendWhiteSpace
) {
    if (isNothing(text))
        return undefined;

    if (isNothing(appendWhiteSpace))
        appendWhiteSpace = true;
    else if (!isBoolean(appendWhiteSpace))
        throw new TypeError(createStringFromTemplate(
            COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate,
            "appendWhiteSpace",
            "boolean"
        ));

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
            throw new Error(`${COMMON_TEXT_LIST.invalidArgument}"text" is not a string, number or an instance of Text.`);
    }
};
/**
 * @description Returns the element with the specified tag name. If more than one child element is found, an exception is thrown.
 * @param {string} name The name of the tag.
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
 * @returns {!Node} The inserted node.
 * @throws {Error} If the parent element of the reference noe is different from this element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see Node.insertBefore()
 */
Element.prototype.insertAfter = function (
    node,
    referenceNode
) {
    if (isNothing(node))
        return undefined;

    checkRequiredArgument(
        referenceNode,
        "referenceNode",
        HTMLElement
    );

    if (this !== referenceNode.parentElement)
        throw new Error("The parent element of the reference node is different from this element.");

    return this.insertBefore(
        node,
        referenceNode.nextSibling
    );
};
/**
 * @description Returns the first and only text node that can be found in an element or in one of its child elements. The text node must be present inside the element and cannot have
 * siblings.
 * @returns {Text} The first or only text node that has been found.
 * @throws {Error} If a text node was expected to be found but either no text node or multiple nodes have been found.
 * @throws {Error} If multiple child elements have been found (at the same level).
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.prototype.getText = function () {
    /**
     * @description The text node to return;
     * @type {Text}
     */
    let textNode = null;
    this.childNodes.loop(node => {
        switch (node.nodeType) {
            case Node.TEXT_NODE:
                textNode = node;
                return false;
            default:
                return true;
        }
    });
    return textNode;
};
/**
 * @description Returns the first and only number from a text node that can be found in an element or in one of its child elements. The text node must be present inside the element and
 * cannot have siblings.
 * @param {number} [radix] An integer between 2 and 36 that represents the radix of the Text node that is to be converted to a number.
 * @returns {number} The first or only number from a text node.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see getText();
 */
HTMLElement.prototype.getNumber = function (radix) {
    /**
     * @description The text.
     * @type {Text}
     */
    const text = this.getText();
    return isNothing(text) ?
        null :
        parseInt(
            this.getText().
                wholeText,
            radix
        );
};
/**
 * @description Removes all child elements with the specified tag name.
 * @param {string} name The name of the elements. The special string "*" represents all elements.
 * @returns {!Array<Node>} An array of nodes that couldn't be removed.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.prototype.removeElementsByTagName = function (name) {
    return removeNodes(this.getElementsByTagName(name));
};
/**
 * @description Checks if this HTMLCollection is empty.
 * @returns {boolean} If this HTMLCollection is empty.
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
 * @param {boolean} [removeComponents=true] If components within this HTML element (if it's an HTML element) should be removed.
 * @returns {boolean} If the node has been removed (a node can only be removed if it has a parent node and is not <code>null</code> or <code>undefined</code>).
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function removeNode(
    node,
    removeComponents = true
) {
    if (isNothing(node))
        return false;

    if (!(node instanceof Node))
        throw new TypeError(createStringFromTemplate(
            COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate,
            "removeComponents",
            "boolean"
        ));

    if (!isBoolean(removeComponents))
        throw new TypeError(createStringFromTemplate(
            COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate,
            "removeComponents",
            "boolean"
        ));

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
     * @type {boolean}
     */
    const nodeCanBeRemoved = !!node.parentNode;

    if (nodeCanBeRemoved)
        node.parentNode.removeChild(node);

    return nodeCanBeRemoved;
}
/**
 * @description Removes the specified nodes from the document.
 * @param {Array<Node>|HTMLCollection|NodeList} nodeList The nodes to remove.
 * @param {boolean} [removeComponents=true] If components within HTML elements (if it's an HTML element) should be removed.
 * @returns {!Array<Node>} An array of nodes that couldn't be removed.
 * @throws {TypeError} If the specified node list is not an instance of Array, HTMLCollection or NodeList.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function removeNodes(
    nodeList,
    removeComponents
) {
    if (isNothing(nodeList))
        return undefined;

    if (!(nodeList instanceof Array ||
        nodeList instanceof HTMLCollection ||
        nodeList instanceof NodeList))
        throw new TypeError(`${COMMON_TEXT_LIST.invalidArgument}"elements" is expected to be either an instance of Array, HTMLCollection or NodeList.`);

    if (nodeList.isEmpty())
        return undefined;

    /**
     * @description All the nodes that couldn't be removed.
     * @type {Array<Node>}
     */
    const removedNodeList = [];
    nodeList.forEach(node => {
        if (!removeNode(
            node,
            removeComponents
        ))
            removedNodeList.push(node);
    });
    return removedNodeList;
}
/**
 * @description Removes HTML elements with the specified component ID.
 * @param {string} componentId The component ID.
 * @returns {void}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function removeComponent(componentId) {
    document.querySelectorAll(createQueryDataAttribute(
        "component-id",
        componentId
    )).
        forEach(node =>
            node.parentNode.removeChild(node));
}
/**
 * @description The callback function to execute to check if an element attribute value is approved.
 * @callback ElementAttributeValueChecker
 * @param {Object} value The value, which is never <code>null</code> or <code>undefined</code>.
 * @returns {boolean} If the element attribute value is approved.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * @description Sets the required attribute. Both the name and the value must be set (and not <code>null</code> or <code>undefined</code>), otherwise an exception will be thrown.
 * @param {string} name The name.
 * @param {Object} value The value.
 * @param {ElementAttributeValueChecker} [checker] The checker.
 * @returns {void}
 * @throws {TypeError} If the name is null, undefined or not a string.
 * @throws {TypeError} If the value is <code>null</code> or <code>undefined</code>.
 * @throws {TypeError} If the checker is not <code>null</code> or <code>undefined</code> and not a function either.
 * @throws {string} If the checker didn't return a boolean value.
 * @throws {string} If the checker didn't approve of the value.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Element.prototype.setRequiredAttribute = function (
    name,
    value,
    checker
) {
    checkRequiredString(
        name,
        "name"
    );

    if (isNothing(value))
        throw new TypeError(createStringFromTemplate(
            COMMON_TEXT_LIST.invalidArgumentCannotBeNullOrUndefinedTemplate,
            "value"
        ));

    if (!isNothing(checker)) {
        if (!(checker instanceof Function))
            throw new TypeError(createStringFromTemplate(
                COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate,
                "checker",
                COMMON_DATA_TYPE_LIST.function
            ));

        /**
         * @description If the value is approved.
         * @type {boolean}
         */
        const approved = checker(value);

        if (!isBoolean(approved))
            throw `Function "checker" didn't return a boolean value.`;

        if (!approved)
            throw `Function "checker" didn't approved of the specified value.`;
    }

    this.setAttribute(
        name,
        value.toString()
    );
};
/**
 * @description Sets the attribute only if both the specified name and value are both neither <code>null</code> or <code>undefined</code> and - if set - the specified checker approves
 * the value.
 * @param {string} name The name.
 * @param {Object} value The value.
 * @param {ElementAttributeValueChecker} [checker] The checker.
 * @returns {void}
 * @throws {TypeError} If the name is not <code>null</code> or <code>undefined</code> and not a string either.
 * @throws {TypeError} If the checker is not <code>null</code> or <code>undefined</code> and not a function either.
 * @throws {string} If the checker didn't return a boolean value.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Element.prototype.setOptionalAttribute = function (
    name,
    value,
    checker
) {
    checkRequiredString(
        name,
        "name"
    );

    if (isNothing(value))
        return;

    if (!isNothing(checker)) {
        if (!(checker instanceof Function))
            throw new TypeError(createStringFromTemplate(
                COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate,
                "checker",
                COMMON_DATA_TYPE_LIST.function
            ));

        /**
         * If the value is approved.
         * @type {boolean}
         */
        const approved = checker(value);

        if (!isBoolean(approved))
            throw `Function "checker" didn't return a boolean value.`;

        if (!approved)
            return;
    }

    this.setAttribute(
        name,
        value.toString()
    );
};
/**
 * @description Creates a new instance of HTMLElement, using the specified tag name and appends the HTML element to the specified parent.
 * @param {string} tagName The tag name.
 * @param {HTMLElement|string|boolean} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used
 * as the id of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appended to any node. If the
 * parent is an instance of Tab the element will be appended to the tab body.
 * @param {string} [id] The ID.
 * @returns {!HTMLElement} A new instance of HTMLElement.
 * @throws {OperationError} If the specified parent is unknown.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.createNew = function (
    tagName,
    parent,
    id
) {
    /**
     * @description The new element.
     * @type {HTMLElement}
     */
    const element = document.createElement(tagName);
    // noinspection JSCheckFunctionSignatures
    element.setOptionalAttribute(
        "id",
        id,
        id =>
            isString(id) &&
            !id.isWhiteSpace() &&
            id.length > 0 &&
            !document.hasElementWithId(id)
    );

    if (isBoolean(parent)) {
        if (parent) {
            document.body.appendChild(element);
            return document.body;
        }
    } else if (isNothing(parent))
        document.body.appendChild(element);
    else if (isString(parent))
        document.getRequiredElementById(parent).
        appendChild(element);
    else if (parent instanceof HTMLElement)
        parent.appendChild(element);
    else if (parent instanceof Tab)
        parent.body.appendChild(element);
    else
        throw new OperationError("The specified parent is unknown.");

    return element;
};

/**
 * @description A list of HTML input element types.
 * @readonly
 * @type {{
 * date: string,
 * submitButton: string,
 * dateAndTime: string,
 * week: string,
 * color: string,
 * hidden: string,
 * range: string,
 * telephone: string,
 * fileUpload: string,
 * url: string,
 * button: string,
 * number: string,
 * radioButton: string,
 * password: string,
 * search: string,
 * localeDateAndTime: string,
 * month: string,
 * checkbox: string,
 * imageButton: string,
 * text: string,
 * time: string,
 * email: string,
 * resetButton: string
 * }}
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/the-input-element.html#attr-input-type
 */
const HTML_INPUT_ELEMENT_TYPE = {
    /**
     * @description The button element input type.
     * @see https://www.w3.org/TR/2011/WD-html5-20110525/number-state.html#button-state
     */
    button: "button",
    /**
     * @description The checkbox element input type.
     * @see https://www.w3.org/TR/2011/WD-html5-20110525/number-state.html#checkbox-state
     */
    checkbox: "checkbox",
    /**
     * @description The color element input type.
     * @see https://www.w3.org/TR/2011/WD-html5-20110525/number-state.html#color-state
     */
    color: "color",
    /**
     * @description The date element input type.
     * @see https://www.w3.org/TR/2011/WD-html5-20110525/states-of-the-type-attribute.html#date-state
     */
    date: "date",
    /**
     * @description The date and time element input type.
     * @see https://www.w3.org/TR/2011/WD-html5-20110525/states-of-the-type-attribute.html#date-and-time-state
     */
    dateAndTime: "datetime",
    /**
     * @description The e-mail element input type.
     * @see https://www.w3.org/TR/2011/WD-html5-20110525/states-of-the-type-attribute.html#e-mail-state
     */
    email: "email",
    /**
     * @description The file upload element input type.
     * @see https://www.w3.org/TR/2011/WD-html5-20110525/number-state.html#file-upload-state
     */
    fileUpload: "file",
    /**
     * @description The hidden parameter element input type.
     * @see https://www.w3.org/TR/2011/WD-html5-20110525/states-of-the-type-attribute.html#hidden-state
     */
    hidden: "hidden",
    /**
     * @description The image button element input type.
     * @see https://www.w3.org/TR/2011/WD-html5-20110525/number-state.html#image-button-state
     */
    imageButton: "image",
    /**
     * @description The local date and time element input type.
     * @see https://www.w3.org/TR/2011/WD-html5-20110525/states-of-the-type-attribute.html#local-date-and-time-state
     */
    localDateAndTime: "datetime-local",
    /**
     * @description The month element input type.
     * @see https://www.w3.org/TR/2011/WD-html5-20110525/states-of-the-type-attribute.html#month-state
     */
    month: "month",
    /**
     * @description The number element input type.
     * @see https://www.w3.org/TR/2011/WD-html5-20110525/number-state.html#number-state
     */
    number: "number",
    /**
     * @description The password element input type.
     * @see https://www.w3.org/TR/2011/WD-html5-20110525/states-of-the-type-attribute.html#password-state
     */
    password: "password",
    /**
     * @description The radio button element input type.
     * @see https://www.w3.org/TR/2011/WD-html5-20110525/number-state.html#radio-button-state
     */
    radioButton: "radio",
    /**
     * @description The range element input type.
     * @see https://www.w3.org/TR/2011/WD-html5-20110525/number-state.html#range-state
     */
    range: "range",
    /**
     * @description The reset button element input type.
     * @see https://www.w3.org/TR/2011/WD-html5-20110525/number-state.html#reset-button-state
     */
    resetButton: "reset",
    /**
     * @description The search element input type.
     * @see https://www.w3.org/TR/2011/WD-html5-20110525/states-of-the-type-attribute.html#text-state-and-search-state
     */
    search: "search",
    /**
     * @description The submit button element input type.
     * @see https://www.w3.org/TR/2011/WD-html5-20110525/number-state.html#submit-button-state
     */
    submitButton: "submit",
    /**
     * @description The telephone element input type.
     * @see https://www.w3.org/TR/2011/WD-html5-20110525/states-of-the-type-attribute.html#telephone-state
     */
    telephone: "tel",
    /**
     * @description The text element input type.
     * @see https://www.w3.org/TR/2011/WD-html5-20110525/states-of-the-type-attribute.html#text-state-and-search-state
     */
    text: "text",
    /**
     * @description The time element input type.
     * @see https://www.w3.org/TR/2011/WD-html5-20110525/states-of-the-type-attribute.html#time-state
     */
    time: "time",
    /**
     * @description The URL element input type.
     * @see https://www.w3.org/TR/2011/WD-html5-20110525/states-of-the-type-attribute.html#url-state
     */
    url: "url",
    /**
     * @description The month element input type.
     * @see https://www.w3.org/TR/2011/WD-html5-20110525/states-of-the-type-attribute.html#week-state
     */
    week: "week"
};
Object.freeze(HTML_INPUT_ELEMENT_TYPE);

/**
 * @description Creates a new instance of HTMLInputElement, using the specified id and appends the HTML element to the specified parent.
 * @param {string} type The input type.
 * @param {HTMLElement|string|boolean} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used
 * as the id of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appended to any node. If
 * the parent is an instance of Tab the element will be appended to the tab body.
 * @param {string} [id] The ID.
 * @returns {HTMLInputElement} A new instance of HTMLInputElement.
 * @throws {Error} If the specified input type is invalid.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.createNewInput = function (
    type,
    parent,
    id
) {
    if (!HTML_INPUT_ELEMENT_TYPE.hasValue(type))
        throw new Error("The specified input type is invalid.");

    // noinspection JSValidateTypes
    /**
     * The new input element.
     * @type {HTMLInputElement}
     */
    const inputElement = HTMLElement.createNew(
        "input",
        parent,
        id
    );
    inputElement.type = type;
    return inputElement;
};
/**
 * @description Checks if this NamedNodeMap is empty.
 * @returns {!boolean} If this NamedNodeMap is empty.
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
 * @returns {void}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.prototype.removeAllAttributes = function () {
    while (!this.attributes.isEmpty())
        this.removeAttributeNode(this.attributes.getFirst());
};
/**
 * @description Returns the parent's child element index of <code>this</code>. If this element has no parent a -1 will be returned.
 * @returns {!number} The parent's child element index of <code>this</code>.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.prototype.getSiblingIndex = function () {
    /**
     * @description The sibling index;
     * @type {!number}
     */
    let siblingIndex = -1;

    if (this.parentElement === null)
        return siblingIndex;

    /**
     * @description The previous sibling element of <code>this</code>.
     * @type {HTMLElement}
     */
    let previousSiblingElement = this;

    do
        siblingIndex++;
    while (!!(previousSiblingElement = previousSiblingElement.previousElementSibling));

    return siblingIndex;
};
/**
 * Returns if the specified element belongs to a parent element that is equal to the specified parent element. If no parent element is specified this method will return if one of the
 * element's parent element is <code>null</code>.
 * @param {HTMLElement} [parentElementToFind] The parent element to find.
 * @returns {!boolean} If the specified element belongs to a parent element that is equal to the specified parent element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.prototype.hasParent = function (parentElementToFind) {
    /**
     * @description The current element.
     * @type {!HTMLElement}
     */
    let parentElement = this.parentElement;

    if (isNothing(parentElementToFind)) {
        for (
            ;
            !(parentElement instanceof HTMLBodyElement);
            parentElement = parentElement.parentElement
        )
            if (isNothing(parentElement))
                return true;
    } else {
        for (
            ;
            !!parentElement &&
            !(parentElement instanceof HTMLBodyElement);
            parentElement = parentElement.parentElement
        )
            if (parentElement === parentElementToFind)
                return true;
    }

    return false;
}
/**
 * @description Creates a new HTML form element.
 * @param {HTMLElement|string|boolean} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used
 * as the id of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appended to any node. If the
 * parent is an instance of Tab the element will be appended to the tab body.
 * @param {boolean} [autoComplete=false] Indicates whether input elements can by default have their values automatically completed by the browser.
 * @returns {HTMLFormElement} A new HTML form element.
 * @throws {TypeError} If "autoComplete" is not a boolean.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/forms.html#the-form-element
 */
function createFormElement(
    parent,
    autoComplete = false
) {
    // noinspection JSValidateTypes
    /**
     * @description A new form element.
     * @type {HTMLFormElement}
     */
    const formElement = HTMLElement.createNew(
        "form",
        parent
    );

    if (!isBoolean(autoComplete))
        throw new TypeError(createStringFromTemplate(
            COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate,
            "autoComplete",
            "boolean"
        ));

    formElement.autocomplete = autoComplete ?
        "on" :
        "off";

    /*
     * Make the "autocomplete" property of each input in a form the same as the "autocomplete" property of the form. For more information see:
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#Google_Chrome_notes
     */
    (new MutationObserver(mutationList =>
        mutationList.forEach(mutationRecord => {
            for (/**
                  * @description The current added-node index.
                  * @type {number}
                  */
                 let addedNodeIndex = 0;
                 addedNodeIndex < mutationRecord.addedNodes.length;
                 addedNodeIndex++
            ) {
                /**
                 * @description An added node.
                 * @type {Node}
                 */
                const addedNode = mutationRecord.addedNodes[addedNodeIndex];

                if (addedNode instanceof HTMLInputElement)
                    addedNode.autocomplete = formElement.autocomplete;
            }
        })
    )).observe(
        formElement,
        {
            childList: true
        }
    );
    return formElement;
}
/**
 * @description Creates a new HTML division element.
 * @param {HTMLElement|string|boolean} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used
 * as the id of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appended to any node. If the
 * parent is an instance of Tab the element will be appended to the tab body.
 * @param {string} [id] The ID of the element.
 * @returns {!HTMLDivElement} A new HTML division element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/grouping-content.html#the-div-element
 */
function createDivisionElement(
    parent,
    id
) {
    // noinspection JSValidateTypes
    return HTMLElement.createNew(
        "div",
        parent,
        id
    );
}
/**
 * @description Creates a new HTML line break element.
 * @param {HTMLElement|string|boolean} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used
 * as the id of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appended to any node. If the
 * parent is an instance of Tab the element will be appended to the tab body.
 * @returns {!HTMLBRElement} A new HTML line break element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/text-level-semantics.html#the-br-element
 */
function createBreakElement(parent) {
    // noinspection JSValidateTypes
    return HTMLElement.createNew(
        "br",
        parent
    );
}
/**
 * @description Creates a new HTML paragraph element.
 * @param {HTMLElement|string|boolean} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used
 * as the id of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appended to any node. If the
 * parent is an instance of Tab the element will be appended to the tab body.
 * @param {string|Text} [text] The text to append to the element.
 * @param {string} [id] The ID of the element.
 * @returns {!HTMLParagraphElement} A new HTML paragraph element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/grouping-content.html#the-p-element
 */
function createParagraphElement(
    parent,
    text,
    id
) {
    // noinspection JSValidateTypes
    /**
     * @description A new paragraph element.
     * @type {HTMLParagraphElement}
     */
    const paragraphElement = HTMLElement.createNew(
        "p",
        parent,
        id
    );
    paragraphElement.appendText(
        text,
        false
    );
    return paragraphElement;
}
/**
 * @description Creates a new HTML label element.
 * @param {HTMLElement|string|boolean} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used
 * as the id of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appended to any node. If the
 * parent is an instance of Tab the element will be appended to the tab body.
 * @param {string|Text} [text] The text to append to the element.
 * @param {string} [forId] A string containing the ID of the labeled control.
 * @returns {HTMLLabelElement} A new HTML label element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/forms.html#the-label-element
 */
function createLabelElement(
    parent,
    text,
    forId
) {
    // noinspection JSValidateTypes
    /**
     * @description A new HTML label element.
     * @type {HTMLLabelElement}
     */
    const labelElement = HTMLElement.createNew("label", parent);

    if (!isNothing(forId)) {
        if (!isString(forId))
            throw new TypeError(createStringFromTemplate(
                COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate,
                "forId",
                "string"
            ));

        if (!forId.isWhiteSpace())
            labelElement.htmlFor = forId;
    }

    labelElement.appendText(
        text,
        false
    );
    return labelElement;
}
/**
 * @description Creates a new HTML unordered list element.
 * @param {HTMLElement|string|boolean} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used
 * as the id of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appended to any node. If the
 * parent is an instance of Tab the element will be appended to the tab body.
 * @param {string} [id] The ID of the element.
 * @returns {!HTMLUListElement} A new HTML unordered list element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/grouping-content.html#the-ul-element
 */
function createUnorderedListElement(
    parent,
    id
) {
    // noinspection JSValidateTypes
    return HTMLElement.createNew(
        "ul",
        parent,
        id
    );
}
/**
 * @description Creates and inserts a new HTML list item element.
 * @param {string} [id] The ID of the element.
 * @returns {!HTMLLIElement} A new HTML list item element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/grouping-content.html#the-li-element
 */
HTMLUListElement.prototype.createItemElement = function (id) {
    // noinspection JSValidateTypes
    return HTMLElement.createNew(
        "li",
        this,
        id
    );
};
/**
 * @description Creates a new HTML ordered list element.
 * @param {HTMLElement|string|boolean} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used
 * as the id of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appended to any node. If the
 * parent is an instance of Tab the element will be appended to the tab body.
 * @param {string} [id] The ID of the element.
 * @returns {!HTMLOListElement} A new HTML ordered list element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/grouping-content.html#the-ol-element
 */
function createOrderedListElement(
    parent,
    id
) {
    // noinspection JSValidateTypes
    return HTMLElement.createNew(
        "ol",
        parent,
        id
    );
}
/**
 * @description Creates and inserts a new HTML list item element.
 * @param {string} [id] The ID of the element.
 * @returns {!HTMLLIElement} A new HTML list item element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/grouping-content.html#the-ol-element
 */
HTMLOListElement.prototype.createItemElement = function (id) {
    // noinspection JSValidateTypes
    return HTMLElement.createNew(
        "li",
        this,
        id
    );
};
/**
 * @description Creates a new HTML (option) select element.
 * @param {string} id The ID of the element.
 * @param {HTMLElement|string|boolean} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used
 * as the id of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appended to any node. If the
 * parent is an instance of Tab the element will be appended to the tab body.
 * @param {boolean} [isRequired=false] If the must have a value selected out by the user.
 * @param {boolean} [isHidden] If the element must be hidden from the user.
 * @returns {!HTMLSelectElement} A new HTML (option) select element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/the-button-element.html#the-select-element
 */
function createSelectElement(
    id,
    parent,
    isRequired,
    isHidden
) {
    // noinspection JSValidateTypes
    /**
     * @description A new HTML (option) select element.
     * @type {HTMLSelectElement}
     */
    const optionsElement = HTMLElement.createNew(
        "select",
        parent,
        id
    );
    optionsElement.setOptionalAttribute(
        "required",
        isRequired,
        isRequired =>
            isBoolean(isRequired)
    );
    optionsElement.setOptionalAttribute(
        "hidden",
        isHidden,
        isHidden =>
            isBoolean(isHidden)
    );
    return optionsElement;
}
/**
 * @description Creates and inserts a new HTML option element.
 * @param {string} [value] The value of the element.
 * @param {string|Text} [text] The text to append to the element.
 * @param {HTMLElement} [beforeOption] An element of the collection, or an index of type long, representing the item which should be inserted before.
 * @returns {!HTMLOptionElement} A new HTML option element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/the-button-element.html#the-option-element
 */
HTMLSelectElement.prototype.insertOption =
    HTMLOptGroupElement.prototype.insertOption = function (
        value,
        text,
        beforeOption
    ) {
        // noinspection JSValidateTypes
        /**
         * @description A new HTML option element.
         * @type {HTMLOptionElement}
         */
        const optionElement = HTMLElement.createNew(
            "option",
            false
        );
        optionElement.setOptionalAttribute(
            "value",
            value
        );
        optionElement.appendText(
            text,
            false
        );
        this.add(
            optionElement,
            beforeOption
        );
        return optionElement;
    };
/**
 * @description Creates and inserts a new HTML option group element.
 * @param {string} label The label of the element.
 * @returns {HTMLOptGroupElement} A new HTML option group element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/the-button-element.html#the-optgroup-element
 */
HTMLSelectElement.prototype.insertOptionGroup = function (label) {
    // noinspection JSValidateTypes
    /**
     * @description A new HTML option group element.
     * @type {HTMLOptGroupElement}
     */
    const optionGroupElement = HTMLElement.createNew(
        "optgroup",
        false
    );
    optionGroupElement.setOptionalAttribute(
        "label",
        label,
        label =>
            isString(label) &&
            !label.isWhiteSpace()
    );
    return optionGroupElement;
};
/**
 * @description Creates a new HTML image element.
 * @param {HTMLElement|string|boolean} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used
 * as the id of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appended to any node. If the
 * parent is an instance of Tab the element will be appended to the tab body.
 * @returns {!HTMLImageElement} A new HTML image element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/embedded-content-1.html#the-img-element
 */
function createImageElement(parent) {
    // noinspection JSValidateTypes
    return HTMLElement.createNew(
        "img",
        parent
    );
}
/**
 * @description Creates a new HTML canvas element.
 * @param {HTMLElement|string|boolean} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used
 * as the id of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appended to any node. If the
 * parent is an instance of Tab the element will be appended to the tab body.
 * @param {string} id The ID of the element.
 * @returns {!HTMLCanvasElement} A new HTML canvas element.
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/the-canvas-element.html#the-canvas-element
 */
function createCanvasElement(
    parent,
    id
) {
    // noinspection JSValidateTypes
    return HTMLElement.createNew(
        "canvas",
        parent,
        id
    );
}
/**
 * @description Creates a new HTML table element.
 * @param {HTMLElement|string|boolean} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used
 * as the id of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appended to any node. If the
 * parent is an instance of Tab the element will be appended to the tab body.
 * @param {string} id The ID of the element.
 * @returns {!HTMLTableElement} A new HTML table element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/tabular-data.html#the-table-element
 */
function createTableElement(
    parent,
    id
) {
    // noinspection JSValidateTypes
    return HTMLElement.createNew(
        "table",
        parent,
        id
    );
}
/**
 * @description Creates and inserts a new HTML table header cell.
 * @returns {!HTMLTableCellElement} A new HTML table header cell.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/tabular-data.html#the-th-element
 */
HTMLTableRowElement.prototype.insertHeaderCell = function () {
    // noinspection JSValidateTypes
    return HTMLElement.createNew(
        "th",
        this
    );
};
/**
 * @description Creates a new HTML template element.
 * @param {HTMLElement|string|boolean} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used
 * as the id of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appended to any node. If the
 * parent is an instance of Tab the element will be appended to the tab body.
 * @param {string} id The ID of the element.
 * @returns {!HTMLTemplateElement} A new HTML template element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://html.spec.whatwg.org/multipage/scripting.html#the-template-element
 */
function createTemplateElement(
    parent,
    id
) {
    // noinspection JSValidateTypes
    return HTMLElement.createNew(
        "template",
        parent,
        id
    );
}
/**
 * @description Creates a neew HTML main element.
 * @param {HTMLElement|string|boolean} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used
 * as the id of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appended to any node. If the
 * parent is an instance of Tab the element will be appended to the tab body.
 * @returns {!HTMLElement} A new HTML main element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://html.spec.whatwg.org/multipage/grouping-content.html#the-main-element
 */
function createMainElement(parent) {
    return HTMLElement.createNew(
        "main",
        parent
    );
}
/**
 * @description Creates a new HTML span element.
 * @param {HTMLElement|string|boolean} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used
 * as the id of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appended to any node. If the
 * parent is an instance of Tab the element will be appended to the tab body.
 * @param {string|Text} [text] The text to append to the element.
 * @param {string} id The ID of the element.
 * @returns {!HTMLSpanElement} A new HTML span element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/text-level-semantics.html#the-span-element
 */
function createSpanElement(
    parent,
    text,
    id
) {
    // noinspection JSValidateTypes
    /**
     * @description A new span element.
     * @type {HTMLSpanElement}
     */
    const spanElement = HTMLElement.createNew(
        "span",
        parent,
        id
    );
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
 * @param {HTMLElement|string|boolean} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used
 * as the id of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appended to any node. If the
 * parent is an instance of Tab the element will be appended to the tab body.
 * @param {string|Text} [text] The text to append to the element.
 * @param {string} [type="button"] The type of the button (submit, reset or button).
 * @returns {!HTMLButtonElement} A new HTML button element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/the-button-element.html#the-button-element
 */
function createButton(
    parent,
    text,
    type = HTML_BUTTON_ELEMENT_TYPE.default
) {
    // noinspection JSValidateTypes
    /**
     * @description A new button element.
     * @type {HTMLButtonElement}
     */
    const buttonElement = HTMLElement.createNew(
        "button",
        parent
    );
    buttonElement.appendText(
        text,
        false
    );
    buttonElement.setRequiredAttribute(
        "type",
        type,
            type =>
                isString(type) &&
                HTML_BUTTON_ELEMENT_TYPE.hasValue(type)
    );
    return buttonElement;
}
/**
 * @description Creates a new HTML anchor element (to be used as a hyper link).
 * @param {HTMLElement|string|boolean} [parent] The parent node to which to append the element, if parent is an instance of <code>HTMLElement</code>. If the parent is a string, it will
 * be used as the id of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appended to any node.
 * @param {string|Text} [text] The text to appended to the element.
 * @param {string} [link="javascript:void(0);"] The link to use for the href attribute. If none is specified, "<code>javascript:void(0);</code>" will be used.
 * @returns {HTMLAnchorElement} A new HTML anchor element (to be used as a hyper link).
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function createLinkElement(
    parent,
    text,
    link = "javascript:void(0);"
) {
    // noinspection JSValidateTypes
    /**
     * @description A new HTML anchor element (to be used as a hyper link).
     * @type {HTMLAnchorElement}
     */
    const anchorElement = HTMLElement.createNew(
        "a",
        parent
    );
    anchorElement.appendText(
        text,
        false
    );
    anchorElement.setRequiredAttribute(
        "href",
        link,
        link =>
            isString(link) &&
            !link.isWhiteSpace()
    );
    return anchorElement;
}
/**
 * @description Creates a new HTML anchor element.
 * @param {HTMLElement|string|boolean} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used
 * as the id of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appended to any node. If the
 * parent is an instance of Tab the element will be appended to the tab body.
 * @param {string|Text} [text] The text to append to the element.
 * @param {string} id The ID of the element.
 * @returns {!HTMLAnchorElement} A new HTML anchor element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/text-level-semantics.html#the-a-element
 */
function createAnchorElement(
    parent,
    text,
    id
) {
    // noinspection JSValidateTypes
    /**
     * @description A new HTML anchor element.
     * @type {HTMLAnchorElement}
     */
    const anchorElement = HTMLElement.createNew(
        "a",
        parent,
        id
    );
    anchorElement.appendText(
        text,
        false
    );
    return anchorElement;
}
/**
 * @description Creates a HTML element to be used as a header element.
 * @param {HTMLElement|string|boolean} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used as the id of the
 * parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appended to any node. If the parent is an instance of Tab
 * the element will be appended to the tab body.
 * @returns {!HTMLElement} A HTML element to be used as a header element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/sections.html#the-header-element
 */
function createHeaderElement(parent) {
    // noinspection JSValidateTypes
    return HTMLElement.createNew(
        "header",
        parent
    );
}
/**
 * @description Checks if the specified element is a header element.
 * @param {Object} element The element to check.
 * @returns {boolean} If the specified element is a header element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function isHeaderElement(element) {
    return !isNothing(element) &&
        element instanceof HTMLElement &&
        element.tagName === "HEADER";
}
/**
 * @description Creates a new instance of HTMLElement to be used as an article element.
 * @param {HTMLElement|string|boolean} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used
 * as the id of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appended to any node. If the
 * parent is an instance of Tab the element will be appended to the tab body.
 * @param {string} [id] The ID of the element.
 * @returns {!HTMLElement} The new instance of HTMLElement.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/sections.html#the-article-element
 */
function createArticleElement(
    parent,
    id
) {
    // noinspection JSValidateTypes
    return HTMLElement.createNew(
        "article",
        parent,
        id
    );
}
/**
 * @description Checks if the specified element is an article element.
 * @param {Object} element The element to check.
 * @returns {!boolean} If the specified element is an article element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function isArticleElement(element) {
    return !isNothing(element) &&
        element instanceof HTMLElement &&
        element.tagName === "ARTICLE";
}
/**
 * @description Creates a new instance of HTMLElement to be used as an section element.
 * @param {HTMLElement|string|boolean} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used
 * as the id of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appended to any node. If the
 * parent is an instance of Tab the element will be appended to the tab body.
 * @param {string} [id] The ID of the element.
 * @returns {HTMLElement} The new instance of HTMLElement.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see createHeaderElement()
 * @see createFooterElement()
 */
function createSectionElement(
    parent,
    id
) {
    // noinspection JSValidateTypes
    return HTMLElement.createNew(
        "section",
        parent,
        id
    );
}
/**
 * @description Checks if the specified element is a section element.
 * @param {Object} element The element to check.
 * @returns {!boolean} If the specified element is a section element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function isSectionElement(element) {
    return !isNothing(element) &&
        element instanceof HTMLElement &&
        element.tagName === "SECTION";
}
/**
 * @description Creates a new instance of HTMLElement to be used as a footer element.
 * @param {HTMLElement|string|boolean} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used
 * as the id of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appended to any node. If the
 * parent is an instance of Tab the element will be appended to the tab body.
 * @param {string} [id] The ID of the element.
 * @returns {HTMLElement} The new instance of HTMLElement.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function createFooterElement(
    parent,
    id
) {
    // noinspection JSValidateTypes
    return HTMLElement.createNew(
        "footer",
        parent,
        id
    );
}
/**
 * @description Checks if the specified element is a footer element.
 * @param {Object} element The element to check.
 * @returns {!boolean} If the specified element is a footer element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function isFooterElement(element) {
    return !isNothing(element) &&
        element instanceof HTMLElement &&
        element.tagName === "FOOTER";
}
/**
 * @description Creates a new instance of HTMLElement to be used as a navigation element.
 * @param {HTMLElement|string|boolean} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used
 * as the id of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appended to any node. If the
 * parent is an instance of Tab the element will be appended to the tab body.
 * @returns {!HTMLElement} The new instance of HTMLElement.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function createNavigationElement(parent) {
    // noinspection JSValidateTypes
    return HTMLElement.createNew(
        "nav",
        parent
    );
}
/**
 * @description Checks if the specified element is a navigation element.
 * @param {Object} element The element to check.
 * @returns {!boolean} If the specified element is a navigation element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function isNavigationElement(element) {
    return !isNothing(element) &&
        element instanceof HTMLElement &&
        element.tagName === "NAV";
}
/**
 * @description Checks if the specified element is table body cell element.
 * @param {Object} element The element to check.
 * @returns {!boolean} If the specified element is a table body cell element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function isTableBodyCellElement(element) {
    return !isNothing(element) &&
        element instanceof HTMLTableCellElement &&
        element.tagName === "TD";
}
/**
 * @description Checks if the specified element is table header cell element.
 * @param {Object} element The element to check.
 * @returns {!boolean} If the specified element is a table header cell element.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function isTableHeaderCellElement(element) {
    return !isNothing(element) &&
        element instanceof HTMLTableCellElement &&
        element.tagName === "TH";
}
/**
 * @description Creates a new instance of HTMLInputElement with the type property set to "text".
 * @param {string} [id] The ID of the element.
 * @param {HTMLElement|string|boolean} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used as
 * the id of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appended to any node.
 * @param {string} [value] The value of the input element.
 * @param {boolean} [isReadOnly=false] If the input element must be read only.
 * @param {boolean} [isRequired=false] If the input element must have a value filled out by the user.
 * @param {number} [maximumLength] The maximum number of characters (in Unicode code points) that the user can enter.
 * @param {string} [pattern] A regular expression that the value is checked against.
 * @returns {!HTMLInputElement} The new instance of HTMLInputElement.
 * @throws {string} If "isHidden" is not <code>null</code> or <code>undefined</code> and neither a boolean.
 * @throws {TypeError} If "minimumLength" is not <code>null</code> or <code>undefined</code> and neither a number.
 * @throws {TypeError} If "maximumLength" is not <code>null</code> or <code>undefined</code> and neither a number.
 * @throws {string} If "minimumLength" is lower than 0 or higher than Number.MAX_SAFE_INTEGER.
 * @throws {string} If "maximumLength" is lower than 1 or higher than Number.MAX_SAFE_INTEGER
 * @throws {string} If "minimumLength" is higher than "maximumLength".
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see createPasswordBox(id, parent);
 */
function createTextBox(
    id,
    parent,
    value,
    isReadOnly,
    isRequired,
    maximumLength,
    pattern
) {
    /**
     * @description The input element, representing a text box.
     * @type {HTMLInputElement}
     * @see https://www.w3.org/TR/2011/WD-html5-20110525/states-of-the-type-attribute.html#text-state-and-search-state
     */
    const inputElement = HTMLElement.createNewInput(
        HTML_INPUT_ELEMENT_TYPE.text,
        parent,
        id
    );
    // See https://www.w3.org/TR/2011/WD-html5-20110525/the-input-element.html#attr-input-value
    inputElement.setOptionalAttribute(
        "value",
        value,
        value =>
            isString(value)
    );
    // See https://www.w3.org/TR/2011/WD-html5-20110525/common-input-element-attributes.html#attr-input-readonly
    inputElement.setOptionalAttribute(
        "readonly",
        isReadOnly,
        isReadOnly =>
            isBoolean(isReadOnly)
    );
    // See https://www.w3.org/TR/2011/WD-html5-20110525/common-input-element-attributes.html#attr-input-required
    inputElement.setOptionalAttribute(
        "required",
        isRequired,
        isRequired =>
            isBoolean(isRequired)
    );
    // See https://www.w3.org/TR/2011/WD-html5-20110525/common-input-element-attributes.html#attr-input-maxlength
    // noinspection JSCheckFunctionSignatures
    inputElement.setOptionalAttribute(
        "maxlength",
        maximumLength,
        maximumLength =>
            Number.isUnsignedInteger(maximumLength)
    );
    // See https://www.w3.org/TR/2011/WD-html5-20110525/common-input-element-attributes.html#the-pattern-attribute
    inputElement.setOptionalAttribute(
        "pattern",
        pattern,
        pattern =>
            pattern instanceof RegExp
    );
    return inputElement;
}
/**
 * @description Creates a new instance of HTMLInputElement with the type property set to &quot;file&quot;.
 * @param {string} [id] The ID of the element.
 * @param {HTMLElement|string|boolean} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a
 * string, it will be used as the id of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false"
 * it will not be appended to any node.
 * @param {boolean} [isMultiple=true] If multiple files may be selected.
 * @param {string} [acceptedMediaTypes] The accepted media types of the selected file(s).
 * @param {boolean} [isReadOnly=false] If the input element must be read only.
 * @param {boolean} [isRequired=false] If the input element must have a value filled out by the user.
 * @returns {HTMLInputElement} The new instance of HTMLInputElement.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function createFileBox(
    id,
    parent,
    isMultiple = true,
    acceptedMediaTypes,
    isReadOnly,
    isRequired
) {
    /**
     * @description The input element, representing a file box.
     * @type {HTMLInputElement}
     * @see https://www.w3.org/TR/2011/WD-html5-20110525/number-state.html#file-upload-state
     */
    const inputElement = HTMLElement.createNewInput(
        HTML_INPUT_ELEMENT_TYPE.fileUpload,
        parent,
        id
    );
    // See https://www.w3.org/TR/2011/WD-html5-20110525/common-input-element-attributes.html#attr-input-multiple
    inputElement.setRequiredAttribute(
        "multiple",
        isMultiple,
        isMultiple =>
            isBoolean(isMultiple)
    );
    // See https://www.w3.org/TR/2011/WD-html5-20110525/number-state.html#attr-input-accept
    inputElement.setOptionalAttribute(
        "accept",
        acceptedMediaTypes,
        acceptedMediaTypes =>
            isString(acceptedMediaTypes)
    );
    // See https://www.w3.org/TR/2011/WD-html5-20110525/common-input-element-attributes.html#attr-input-readonly
    inputElement.setOptionalAttribute(
        "readonly",
        isReadOnly,
        isReadOnly =>
            isBoolean(isReadOnly)
    );
    // See https://www.w3.org/TR/2011/WD-html5-20110525/common-input-element-attributes.html#attr-input-required
    inputElement.setOptionalAttribute(
        "required",
        isRequired,
        isRequired =>
            isBoolean(isRequired)
    );
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

// noinspection JSCheckFunctionSignatures,JSValidateTypes
/**
 * @description Creates a new instance of HTMLTextAreaElement.
 * @param {string} [id] The ID of the element.
 * @param {HTMLElement|string|boolean} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used as
 * the id of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appended to any node.
 * @param {Text|string|number} [value] The text to append to this element.
 * @param {boolean} [autoResize=false] If true the height of the text area element will automatically be resized in accordance to the number of rows in the text.
 * @param {number} [averageCharacterWidth] The visible width of the text control, in average character widths.
 * @param {number} [visibleTextRows] The number of visible text lines for the control.
 * @param {string} [isReadOnly=false] If the input element must be read only.
 * @param {boolean} [isRequired=false] If the input element must have a value filled out by the user.
 * @param {number} [maximumLength] The maximum number of characters (in Unicode code points) that the user can enter.
 * @param {number} [selectionStartIndex] The index to the first character in the current selection. If there's no selection, this value is the index of the character following the
 * position of the text entry cursor.
 * @param {number} [selectionEndIndex] The index to the last character in the current selection. If there's no selection, the value is the index of the character following the position
 * of the text entry cursor.
 * @param {string} wrap Indicates how the control wraps text.
 * @returns {!HTMLTextAreaElement} The new instance of HTMLTextAreaElement.
 * @throws {TypeError} If "autoResize" is not <code>null</code> or <code>undefined</code> and neither a boolean.
 * @throws {TypeError} If "isHidden" is not <code>null</code> or <code>undefined</code> and neither a boolean.
 * @throws {TypeError} If "isReadOnly" is not <code>null</code> or <code>undefined</code> and neither a boolean.
 * @throws {TypeError} If "isRequired" is not <code>null</code> or <code>undefined</code> and neither a boolean.
 * @throws {TypeError} If "minimumLength" is not <code>null</code> or <code>undefined</code> and neither a number.
 * @throws {TypeError} If "maximumLength" is not <code>null</code> or <code>undefined</code> and neither a number.
 * @throws {string} If "minimumLength" is lower than 0 or higher than Number.MAX_SAFE_INTEGER.
 * @throws {string} If "maximumLength" is lower than 1 or higher than Number.MAX_SAFE_INTEGER
 * @throws {string} If "minimumLength" is higher than "maximumLength".
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function createTextAreaElement(
    id,
    parent,
    value,
    autoResize = false,
    averageCharacterWidth,
    visibleTextRows,
    isReadOnly,
    isRequired,
    maximumLength,
    selectionStartIndex,
    selectionEndIndex,
    wrap
) {
    checkRequiredBoolean(
        autoResize,
        "autoResize"
    );

    // noinspection JSValidateTypes
    /**
     * @description The text area element.
     * @type {!HTMLTextAreaElement}
     * @see https://www.w3.org/TR/2011/WD-html5-author-20110809/the-textarea-element.html
     */
    const textAreaElement = HTMLElement.createNew(
        "textarea",
        parent,
        id
    );
    //https://www.w3.org/TR/2011/WD-html5-20110525/the-button-element.html#dom-textarea-value
    textAreaElement.setOptionalAttribute(
        "value",
        value,
        value =>
            isString(value)
    );
    // See https://www.w3.org/TR/2011/WD-html5-author-20110809/the-textarea-element.html#attr-textarea-cols
    textAreaElement.setOptionalAttribute(
        "cols",
        averageCharacterWidth,
        averageCharacterWidth =>
            isNumber(averageCharacterWidth) &&
            averageCharacterWidth > 0
    );
    // See https://www.w3.org/TR/2011/WD-html5-author-20110809/the-textarea-element.html#attr-textarea-rows
    textAreaElement.setOptionalAttribute(
        "rows",
        visibleTextRows,
        visibleTextRows =>
            isNumber(visibleTextRows) &&
            visibleTextRows > 0
    );
    // See https://www.w3.org/TR/2011/WD-html5-author-20110809/the-textarea-element.html#attr-textarea-readonly
    textAreaElement.setOptionalAttribute(
        "readonly",
        isReadOnly,
        isReadOnly => isBoolean(isReadOnly)
    );
    // See https://www.w3.org/TR/2011/WD-html5-author-20110809/the-textarea-element.html#attr-textarea-required
    textAreaElement.setOptionalAttribute(
        "required",
        isRequired,
        isRequired => isBoolean(isRequired)
    );
    // See https://www.w3.org/TR/2011/WD-html5-author-20110809/the-textarea-element.html#attr-textarea-maxlength
    // noinspection JSCheckFunctionSignatures
    textAreaElement.setOptionalAttribute(
        "maxlength",
        maximumLength,
        maximumLength =>
            Number.isUnsignedInteger(maximumLength)
    );
    // See https://www.w3.org/TR/2011/WD-html5-20110525/association-of-controls-and-forms.html#dom-textarea-input-selectionstart
    // noinspection JSCheckFunctionSignatures
    textAreaElement.setOptionalAttribute(
        "selectionStart",
        selectionStartIndex,
        selectionStartIndex =>
            Number.isUnsignedInteger(selectionStartIndex)
    );
    // See https://www.w3.org/TR/2011/WD-html5-20110525/association-of-controls-and-forms.html#dom-textarea-input-selectionend
    // noinspection JSCheckFunctionSignatures
    textAreaElement.setOptionalAttribute(
        "selectionEnd",
        selectionEndIndex,
        selectionEndIndex =>
            Number.isUnsignedInteger(selectionEndIndex)
    );
    // See https://www.w3.org/TR/2011/WD-html5-author-20110809/the-textarea-element.html#dom-textarea-wrap
    textAreaElement.setOptionalAttribute(
        "wrap",
        wrap,
        wrap =>
            isBoolean(wrap) &&
            HTML_TEXT_AREA_ELEMENT_WRAP.hasValue(wrap)
    );

    if (autoResize) {
        /**
         * @description Checks the height of the text area element.
         * @returns {void}
         * @private
         * @since 1.0
         * @author Manuel Milosavljević <manuel@synergystructure.com>
         */
        const checkTextAreaHeight = () => {
            textAreaElement.style.height = "";

            if (textAreaElement.scrollHeight > textAreaElement.clientHeight)
                textAreaElement.style.height = createPixelStatement(textAreaElement.scrollHeight);
        };
        /**
         * @description Checks the height of the text area element after an event.
         * @returns {!number} The timeout ID.
         * @private
         * @since 1.0
         * @author Manuel Milosavljević <manuel@synergystructure.com>
         */
        const checkTextAreaHeightAfterEvent = () =>
            setTimeout(
                checkTextAreaHeight,
                0
            );
        textAreaElement.addEventListener(
            COMMON_EVENT_TYPE_LIST.key.down,
            checkTextAreaHeight
        );
        textAreaElement.addEventListener(
            "paste",
            checkTextAreaHeightAfterEvent
        );
        textAreaElement.addEventListener(
            "cut",
            checkTextAreaHeightAfterEvent
        );
    }

    return textAreaElement;
}
/**
 * @description Creates a new instance of HTMLInputElement with the type property set to "parameter".
 * @param {string} [id] The ID of the element.
 * @param {HTMLElement|string|boolean} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a
 * string, it will be used as the id of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false"
 * it will not be appended to any node.
 * @param {string} [value] The value of the input element.
 * @returns {!HTMLInputElement} The new instance of HTMLInputElement.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see createTextBox(id, parent);
 */
function createParameterBox(
    id,
    parent,
    value
) {
    /**
     * @description The input element, representing arbitrary string that is not visible in the viewport.
     * @type {!HTMLInputElement}
     * @see https://www.w3.org/TR/2011/WD-html5-20110525/states-of-the-type-attribute.html#hidden-state
     */
    const inputElement = HTMLElement.createNewInput(
        HTML_INPUT_ELEMENT_TYPE.hidden,
        parent,
        id
    );
    // See https://www.w3.org/TR/2011/WD-html5-20110525/the-input-element.html#attr-input-value
    inputElement.setOptionalAttribute(
        "value",
        value,
        value =>
            isString(value)
    );
    return inputElement;
}
/**
 * @description Creates a new instance of HTMLInputElement with the type property set to &quot;number&quot;.
 * @param {string} [id] The ID of the element.
 * @param {HTMLElement|string|boolean} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a
 * string, it will be used as the id of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false"
 * it will not be appended to any node.
 * @param {number} [value=0] The value of the input element.
 * @param {number|string} [step] The granularity that is expected (and required) of the value, by limiting the allowed values.
 * @param {boolean} [isReadOnly=false] If the input element must be read only.
 * @param {boolean} [isRequired=false] If the input element must have a value filled out by the user.
 * @returns {!HTMLInputElement} The new instance of HTMLInputElement.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function createNumberBox(
    id,
    parent,
    value,
    step,
    isReadOnly,
    isRequired
) {
    /**
     * @description The input element, representing a number box.
     * @type {!HTMLInputElement}
     * @see https://www.w3.org/TR/2011/WD-html5-20110525/number-state.html#number-state
     */
    const inputElement = HTMLElement.createNewInput(
        HTML_INPUT_ELEMENT_TYPE.number,
        parent,
        id
    );
    // See https://www.w3.org/TR/2011/WD-html5-20110525/the-input-element.html#attr-input-value
    inputElement.setOptionalAttribute(
        "value",
        value,
        value =>
            isNumber(value)
    );
    // See https://www.w3.org/TR/2011/WD-html5-20110525/common-input-element-attributes.html#attr-input-step
    inputElement.setOptionalAttribute(
        "value",
        value,
        () =>
            isNumber(step) ||
            (isString(step) &&
                step === "any")
    );
    // See https://www.w3.org/TR/2011/WD-html5-20110525/common-input-element-attributes.html#attr-input-readonly
    inputElement.setOptionalAttribute(
        "readonly",
        isReadOnly,
        isReadOnly =>
            isBoolean(isReadOnly)
    );
    // See https://www.w3.org/TR/2011/WD-html5-20110525/common-input-element-attributes.html#attr-input-required
    inputElement.setOptionalAttribute(
        "required",
        isRequired,
        isRequired =>
            isBoolean(isRequired)
    );
    return inputElement;
}
/**
 * @description Creates a new instance of HTMLInputElement with the type property set to "password".
 * @param {string} [id] The ID of the element.
 * @param {HTMLElement|string|boolean} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a
 * string, it will be used as the id of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false"
 * it will not be appended to any node.
 * @param {string} [value] The value of the input element.
 * @param {number} [maximumLength] The maximum number of characters (in Unicode code points) that the user can enter.
 * @returns {!HTMLInputElement} The new instance of HTMLInputElement.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see createPasswordBox(id, parent);
 */
function createPasswordBox(
    id,
    parent,
    value,
    maximumLength
) {
    /**
     * @description The input element, representing a password box.
     * @type {!HTMLInputElement}
     * @see https://www.w3.org/TR/2011/WD-html5-20110525/states-of-the-type-attribute.html#password-state
     */
    const inputElement = HTMLElement.createNewInput(
        HTML_INPUT_ELEMENT_TYPE.password,
        parent,
        id
    );
    // See https://www.w3.org/TR/2011/WD-html5-20110525/the-input-element.html#attr-input-value
    inputElement.setOptionalAttribute(
        "value",
        value,
        value =>
            isString(value)
    );
    // See https://www.w3.org/TR/2011/WD-html5-20110525/common-input-element-attributes.html#attr-input-maxlength
    // noinspection JSCheckFunctionSignatures
    inputElement.setOptionalAttribute(
        "maxlength",
        maximumLength,
        maximumLength =>
            Number.isUnsignedInteger(maximumLength)
    );
    return inputElement;
}
/**
 * @description Creates a new instance of HTMLInputElement with the type property set to "checkbox".
 * @param {string} [id] The ID of the element.
 * @param {HTMLElement|string|boolean} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used as
 * the id of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appended to any node.
 * @param {boolean} [isChecked=false] The value of the input element.
 * @param {boolean} [isReadOnly] If the input element must be read only.
 * @param {boolean} [isRequired] If the input element must have a value filled out by the user.
 * @returns {!HTMLInputElement} The new instance of HTMLInputElement.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function createCheckBox(
    id,
    parent,
    isChecked = false,
    isReadOnly,
    isRequired
) {
    /**
     * @description The input element, representing a checkbox.
     * @type {!HTMLInputElement}
     * @see https://www.w3.org/TR/2011/WD-html5-20110525/number-state.html#checkbox-state
     */
    const inputElement = HTMLElement.createNewInput(
        HTML_INPUT_ELEMENT_TYPE.checkbox,
        parent,
        id
    );
    // See https://www.w3.org/TR/2011/WD-html5-20110525/the-input-element.html#attr-input-checked
    inputElement.setOptionalAttribute(
        "checked",
        isChecked,
        isChecked =>
            isBoolean(isChecked)
    );
    // See https://www.w3.org/TR/2011/WD-html5-20110525/common-input-element-attributes.html#attr-input-readonly
    inputElement.setOptionalAttribute(
        "readonly",
        isReadOnly,
        isReadOnly =>
            isBoolean(isReadOnly)
    );
    // See https://www.w3.org/TR/2011/WD-html5-20110525/common-input-element-attributes.html#attr-input-required
    inputElement.setOptionalAttribute(
        "required",
        isRequired,
        isRequired =>
            isBoolean(isRequired)
    );
    return inputElement;
}
/**
 * @description Creates a new instance of HTMLInputElement with the type property set to "radio".
 * @param {string} [id] The ID of the element.
 * @param {HTMLElement|string|boolean} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a
 * string, it will be used as the id of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false"
 * it will not be appended to any node.
 * @param {string} [name] The name of the radio group.
 * @param {boolean} [isChecked] The value of the input element.
 * @param {boolean} [isReadOnly] If the input element must be read only.
 * @param {boolean} [isRequired] If the input element must have a value filled out by the user.
 * @returns {!HTMLInputElement} The new instance of HTMLInputElement.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function createRadioBox(
    id,
    parent,
    name,
    isChecked,
    isReadOnly,
    isRequired
) {
    /**
     * @description The input element, representing a radio box.
     * @type {!HTMLInputElement}
     * @see https://www.w3.org/TR/2011/WD-html5-20110525/number-state.html#radio-button-state
     */
    const inputElement = HTMLElement.createNewInput(
        HTML_INPUT_ELEMENT_TYPE.radioButton,
        parent,
        id
    );
    // See https://www.w3.org/TR/2011/WD-html5-20110525/association-of-controls-and-forms.html#attr-fe-name
    inputElement.setOptionalAttribute(
        "name",
        name,
        name =>
            isString(name)
    );
    // See https://www.w3.org/TR/2011/WD-html5-20110525/the-input-element.html#attr-input-checked
    inputElement.setOptionalAttribute(
        "checked",
        isChecked,
        isChecked =>
            isBoolean(isChecked)
    );
    // See https://www.w3.org/TR/2011/WD-html5-20110525/common-input-element-attributes.html#attr-input-readonly
    inputElement.setOptionalAttribute(
        "readonly",
        isReadOnly,
        isReadOnly =>
            isBoolean(isReadOnly)
    );
    // See https://www.w3.org/TR/2011/WD-html5-20110525/common-input-element-attributes.html#attr-input-required
    inputElement.setOptionalAttribute(
        "required",
        isRequired,
        isRequired =>
            isBoolean(isRequired)
    );
    return inputElement;
}
/**
 * @description Creates an image button.
 * @param {HTMLElement|string|boolean} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used as
 * the id of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appended to any node.
 * @param {string} [sourceUrl] The URI for the location of the image to display on the graphical submit button.
 * @returns {!HTMLInputElement} The new instance of HTMLInputElement.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function createImageButton(
    parent,
    sourceUrl
) {
    /**
     * @description The input element, representing an image box.
     * @type {!HTMLInputElement}
     * @see https://www.w3.org/TR/2011/WD-html5-20110525/number-state.html#image-button-state
     */
    const inputElement = HTMLElement.createNewInput(
        HTML_INPUT_ELEMENT_TYPE.imageButton,
        parent
    );
    // See https://www.w3.org/TR/2011/WD-html5-20110525/number-state.html#attr-input-src
    inputElement.setRequiredAttribute(
        "src",
        sourceUrl,
        sourceUrl =>
            isString(sourceUrl) &&
            !sourceUrl.isWhiteSpace()
    );
    return inputElement;
}
/**
 * @description Creates a progress bar.
 * @param {HTMLElement|string|boolean} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a
 * string, it will be used as the id of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false"
 * it will not be appended to any node.
 * @param {number} [value] The specification of how much of the task that has been completed.
 * @param {number} [maximum] The description of how much work the task indicated by the progress element requires.
 * @param {string} [id] The ID of the element.
 * @returns {!HTMLProgressElement} The new instance of HTMLProgressElement.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function createProgressBarElement(
    parent,
    value,
    maximum,
    id
) {
    // noinspection JSValidateTypes
    /**
     * @description The progress element.
     * @type {!HTMLProgressElement}
     * @see https://www.w3.org/TR/2011/WD-html5-author-20110809/the-progress-element.html
     */
    const progressElement = HTMLElement.createNew(
        "progress",
        parent,
        id
    );
    // See https://www.w3.org/TR/2011/WD-html5-author-20110809/the-progress-element.html#attr-progress-value
    // noinspection JSCheckFunctionSignatures
    progressElement.setOptionalAttribute(
        "value",
        value,
        value =>
            Number.isUnsignedInteger(value)
    );
    // See https://www.w3.org/TR/2011/WD-html5-author-20110809/the-progress-element.html#attr-progress-max
    // noinspection JSCheckFunctionSignatures
    progressElement.setOptionalAttribute(
        "max",
        maximum,
        max =>
            Number.isUnsignedInteger(max)
    );
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
    if (isNothing(mouseEvent))
        throw new TypeError(createStringFromTemplate(
            COMMON_TEXT_LIST.invalidArgumentCannotBeNullOrUndefinedTemplate,
            "mouseEvent"
        ));

    if (!(mouseEvent instanceof MouseEvent ||
        mouseEvent instanceof TouchEvent))
        throw new TypeError(createStringFromTemplate(
            COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate,
            "mouseEvent",
            "MouseEvent or TouchEvent"
        ));

    // Starting from the mouseEvent.target and moving up to the parent elements.
    // noinspection JSValidateTypes
    for (/**
          * @description The current element.
          * @type {HTMLElement}
          */
         let element = mouseEvent.target;
         !!element &&
         !(element instanceof HTMLUListElement ||
             element instanceof HTMLOListElement ||
             element instanceof HTMLBodyElement);
         element = element.parentElement
    )
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
    if (isNothing(mouseEvent))
        throw new TypeError(createStringFromTemplate(
            COMMON_TEXT_LIST.invalidArgumentCannotBeNullOrUndefinedTemplate,
            "mouseEvent"
        ));

    if (!(mouseEvent instanceof MouseEvent ||
        mouseEvent instanceof TouchEvent))
        throw new TypeError(createStringFromTemplate(
            COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate,
            "mouseEvent",
            "MouseEvent or TouchEvent"
        ));

    /**
     * @description The item list.
     * @type {HTMLLIElement[]}
     */
    const itemList = [];

    // Starting from the mouseEvent.target and moving up to the parent elements.
    // noinspection JSValidateTypes
    for (/**
          * @description The current element.
          * @type {HTMLElement}
          */
         let element = mouseEvent.target;
         !!element &&
         !(element instanceof HTMLBodyElement);
         element = element.parentElement
    )
        if (element instanceof HTMLLIElement)
            itemList.push(element);

    return itemList;
}
/**
 * @description Sets the coordinates (top and left) of this element to be vertically and horizontally centered in its parent node.
 * @param {HTMLElement} htmlElement The instance of HTMLElement to center in its parent node.
 * @returns {!boolean} If the element has a parent node.
 * @throws {TypeError} If the element is <code>null</code>, <code>undefined</code> or not an instance of HTMLElement.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function setCenterCoordinates(htmlElement) {
    // noinspection JSCheckFunctionSignatures
    checkRequiredArgumentFull(
        htmlElement,
        "htmlElement",
        HTMLElement
    );

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
//<editor-fold desc="Cookies">

/**
 * @description Sets a cookie if possible.
 * @param {string} name The name of the cookie to be created.
 * @param {string} value The value of the cookie to be created.
 * @returns {!boolean} If cookies are enabled.
 * @public
 * @since 5.0
 * @author Manuel Milosavljević
 */
function setCookie(
    name,
    value
) {
    document.cookie = name + "=" + escape(value) + "; path=/";
    return !document.cookie.isEmpty();
}
/**
 * @description Get the value of a cookie.
 * @param {string} name The name of the cookie.
 * @returns {?string} The value of the cookie or null if the cookie doesn't exit.
 * @public
 * @since 5.0
 * @author Manuel Milosavljević
 */
function getCookieValue(name) {
    if (String.isEmpty(name))
        throw new IllegalArgumentError("The cookie name cannot be null or empty.");

    if (document.cookie !== "") {
        /**
         * @description The cookies.
         * @type {string[]}
         */
        const cookieList = document.cookie.split("\u003B" /* Semicolon: ; */);

        for (/**
              * @description The current cookie index.
              * @type {!number}
              */
             let index = 0;
             index < cookieList.length;
             index++
        ) {
            /**
             * @description The current cookie to process.
             * @type {string[]}
             */
            const cookie = cookieList[index].split("\u003D" /* Equals sign: = */);

            if (cookie.length === 2 &&
                cookie[0] === name)
                return cookie[1];
        }
    }

    return null;
}
/**
 * @description Delete a cookie.
 * @param {string} name The name of the cookie.
 * @returns {void}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević
 */
function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
}

//</editor-fold>
//<editor-fold desc="Map">

/**
 * @description Checks if this map is empty.
 * @returns {boolean} If this is empty.
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
 * @returns {boolean} If the specified key has been renamed.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Map.prototype.rename = function (
    oldKey,
    newKey
) {
    /**
     * @description The value associated with the specified old key.
     * @type {undefined|Object}
     */
    const value = this.get(oldKey);

    if (value === undefined ||
        this.delete(oldKey))
        return false;

    this.set(
        newKey,
        oldKey
    );
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
     * @type {Object}
     */
    const value = this.get(key);

    if (value === undefined)
        return undefined;

    this.delete(key);
    return value;
};

//</editor-fold>
//<editor-fold desc="Binary">

/**
 * @description Creates a bitmask and returns it.
 * @param {number} bitCount The number of bits in the bitmask.
 * @returns {number} A bitmask.
 * @throws {RangeError} If the specified bit count is not an unsigned integer.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function createBitMask(bitCount) {
    if (!Number.isUnsignedInteger(bitCount))
        throw new TypeError(createStringFromTemplate(
            COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate,
            "size",
            "number (specifically, an unsigned integer)"
        ));

    return (1 << bitCount) - 1;
}
/**
 * @description Returns the number of digits in the specified number.
 * @param {number} number The number.
 * @returns {number} The number of digits in the specified number.
 * @throws {RangeError} If the specified number is not an unsigned integer.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function countBits(number) {
    if (!Number.isUnsignedInteger(number))
        throw new TypeError(createStringFromTemplate(
            COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate,
            "number",
            "number (specifically, an unsigned integer)"
        ));

    return Math.floor(Math.log(number) / Math.log(2) + 1);
}

/**
 * @description Prefixes for binary multiples, based on the IEC 80000-13 standard.
 * @type {Array<string>}
 */
const BINARY_PREFIX_LIST = OPTION_MAP.cut(COMMON_OPTION_KEY_LIST.binaryPrefixList) ?? Object.freeze([
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
 * @description Prefixes for decimal multiples, based on the metric system.
 * @type {Array<string>}
 */
const DECIMAL_PREFIX_LIST = OPTION_MAP.cut(COMMON_OPTION_KEY_LIST.binaryPrefixList) ?? Object.freeze([
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
 * @version 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class ByteSizeError extends Error {
    //<editor-fold desc="Constructor">

    /**
     * @description ByteSizeError constructor.
     * @param {string} message The detail message.
     */
    constructor(message) {
        super(message);
    }

    //</editor-fold>
    //<editor-fold desc="Operations">

    /**
     * @description Checks the validity of the specified bytes.
     * @param {number} bytes The bytes
     * @returns {void}
     * @throws {ByteSizeError} If the specified bytes is a negative number.
     * @public
     * @since 1.0
     */
    static check(bytes) {
        checkRequiredNumber(
            bytes,
            "bytes"
        );

        if (bytes < 0)
            throw new ByteSizeError(COMMON_TEXT_LIST.invalidArgument + `the bytes (the specified one is ${bytes}) cannot be a negative number.`);
    }

    //</editor-fold>
}

/**
 * @description Returns the index of the most fitting binary prefix for the specified bytes.
 * @param {number} byteList The bytes.
 * @returns {number} The index of the most fitting binary prefix for the specified bytes.
 * @throws {ByteSizeError} If the specified bytes is a negative number.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function getBinaryPrefixIndex(byteList) {
    ByteSizeError.check(byteList);

    /* A binary prefix is a unit prefix for multiples of units in data processing, data transmission, and digital information, notably the bit and the byte, to indicate multiplication
     * by a power of 2. See https://en.wikipedia.org/wiki/Binary_prefix for more information. In the BINARY_PREFIX_LIST array all prefixes, based on the IEC 80000-13 standard, are
     * included. The index of a prefix plus 1 equals the exponent of the value. For example, 1 gibibyte is Math.pow(1024, 3), where the exponent 3 minus 1 is the index of the gibibyte
     * prefix. Based on the number of digits a bytes value has the exponent can be estimated. For example:
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
     * Thus, dividing the number of digits by 3 and returning the floored value, minus one is the estimated binary prefix. If the estimated binary prefix is lower than -1, no fitting
     * binary prefix is available. If the estimated binary prefix is lower than Math.pow(1024, [estimated binary prefix] + 1) then the correct binary prefix is the estimated one minus
     * one, otherwise it is the estimated one.
     */

    /**
     * @description The estimated binary prefix index.
     * @type {number}
     */
    const binaryPrefixIndexEstimated = Math.floor(Math.getDigitCount(byteList) / 3) - 1;
    return binaryPrefixIndexEstimated === -1 ? -1 :
        binaryPrefixIndexEstimated === 1 ? 0 :
            binaryPrefixIndexEstimated >= BINARY_PREFIX_LIST.length - 1 ?
                BINARY_PREFIX_LIST.length - 1 :
                byteList < Math.pow(
                    1024,
                    binaryPrefixIndexEstimated + 1
                ) ?
                    binaryPrefixIndexEstimated - 1 :
                    binaryPrefixIndexEstimated;
}

/**
 * @description Creates a binary statement with the specified bytes and the specified binary prefix index.
 * @param {number} byteList The bytes.
 * @param {number} [binaryPrefixIndex=getBinaryPrefixIndex(bytes)] The binary prefix index. By default the most fitting binary prefix will be used.
 * @param {number} [fractionalPreserveCount=2] The amount of fractional digits to preserve in the new statement.
 * @param {string} [template="@\u00A0@"] The template to use to construct the binary statement.
 * @returns {!string} A binary statement with the specified bytes and the specified binary prefix index.
 * @throws {TypeError} If the specified binary prefix index is not a number.
 * @throws {ByteSizeError} If the specified binary prefix index is lower than 0 or higher than the binary prefix list length.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function createBinaryStatement(
    byteList,
    binaryPrefixIndex = getBinaryPrefixIndex(byteList),
    fractionalPreserveCount = 2,
    template = "@" + "\u00A0" /* No-break space */ + "@"
) {
    if (isNothing(binaryPrefixIndex))
        return createBinaryStatement(
            byteList,
            -1,
            fractionalPreserveCount
        );

    ByteSizeError.check(byteList);

    if (!isNumber(binaryPrefixIndex))
        throw new TypeError(createStringFromTemplate(
            COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate,
            "binaryPrefixIndex",
            "number"
        ));

    if (binaryPrefixIndex < -1)
        throw new ByteSizeError(COMMON_TEXT_LIST.invalidArgument + `the binary prefix index (the specified one is ${binaryPrefixIndex}) cannot be lower than -1.`);

    if (binaryPrefixIndex > BINARY_PREFIX_LIST.length)
        throw new ByteSizeError(`The specified binary prefix index (${binaryPrefixIndex}) cannot be higher than ${BINARY_PREFIX_LIST.length}.`);

    return binaryPrefixIndex === -1 ?
        createStringFromTemplate(
            template,
            byteList,
            LOCALIZED_TEXTS_MAP.get(COMMON_TEXT_NAME_LIST.bytesStatement)) :
        createStringFromTemplate(
            template,
            Math.roundSpecific(
                byteList / Math.pow(
                1024,
                binaryPrefixIndex + 1),
                fractionalPreserveCount),
            BINARY_PREFIX_LIST[binaryPrefixIndex]);
}
/**
 * @description Returns the index of the most fitting decimal prefix for the specified bytes.
 * @param {number} bytes The bytes.
 * @returns {number} The index of the most fitting decimal prefix for the specified bytes.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function getDecimalPrefixIndex(bytes) {
    // Same codes as getBinaryPrefixIndex(), but with DECIMAL_PREFIX_LIST instead of BINARY_PREFIX_LIST.

    ByteSizeError.check(bytes);

    /**
     * @description The estimated decimal prefix index.
     * @type {number}
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
 * @param {number} byteList The bytes.
 * @param {number} [decimalPrefixIndex=getDecimalPrefixIndex(bytes)] The decimal prefix index. By default the most fitting decimal prefix will be used.
 * @param {number} [fractionalPreserveCount=2] The amount of fractional digits to preserve in the new statement.
 * @param {string} [template="@\u00A0@"] The template to use to construct the decimal statement.
 * @returns {!string} A decimal statement with the specified bytes and the specified decimal prefix index.
 * @throws {TypeError} If the specified decimal prefix index is not a number.
 * @throws {ByteSizeError} If the specified decimal prefix index is lower than 0 or higher than the decimal prefix list length.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function createDecimalStatement(
    byteList,
    decimalPrefixIndex = getDecimalPrefixIndex(byteList),
    fractionalPreserveCount = 2,
    template = "@" + "\u00A0" /* No-break space */ + "@"
) {
    if (isNothing(decimalPrefixIndex))
        return createDecimalStatement(
            byteList,
            -1,
            fractionalPreserveCount
        );

    ByteSizeError.check(byteList);

    if (!isNumber(decimalPrefixIndex))
        throw new TypeError(createStringFromTemplate(
            COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate,
            "decimalPrefixIndex",
            "number"
        ));

    if (decimalPrefixIndex < -1)
        throw new ByteSizeError(COMMON_TEXT_LIST.invalidArgument + `the binary prefix index (the specified one is ${decimalPrefixIndex}) cannot be lower than -1.`);

    if (decimalPrefixIndex > BINARY_PREFIX_LIST.length)
        throw new ByteSizeError(`The specified binary prefix index (${decimalPrefixIndex}) cannot be higher than ${BINARY_PREFIX_LIST.length}.`);

    return decimalPrefixIndex === -1 ?
        createStringFromTemplate(
            template,
            byteList,
            LOCALIZED_TEXTS_MAP.get(COMMON_TEXT_NAME_LIST.bytesStatement)
        ) :
        createStringFromTemplate(
            template,
            Math.roundSpecific(
                byteList / Math.pow(
                1000,
                decimalPrefixIndex + 1
                ),
                fractionalPreserveCount),
            BINARY_PREFIX_LIST[decimalPrefixIndex]
        );
}

//</editor-fold>
//<editor-fold desc="CSS">

/**
 * @description Creates a pixel statement (for use with CSS).
 * @param {number} value A value in pixels. If the value is a float, the largest integer less than or equal to the value will be used.
 * @returns {!string} A pixel statement.
 * @throws {TypeError} If the value is null, undefined or not a number.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function createPixelStatement(value) {
    return checkRequiredNumber(
        value,
        "value"
    ).
        toString().
        concat("\u0070\u0078" /* Latin small letter P *//* Latin small letter X */);
}
/**
 * @description Creates a percent statement (for use with CSS).
 * @param {number} value A value in percents.
 * @returns {!string} A percent statement.
 * @throws {string} If the value is null, undefined or not a number.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function createPercentStatement(value) {
    return checkRequiredNumber(
        value,
        "value"
    ).
        toString().
        concat("\u0025" /* Percent sign */);
}
/**
 * @description A CSS-compatible one-hundred percent statement.
 * @type {string}
 */
const ONE_HUNDRED_PERCENT_STATEMENT = createPercentStatement(100);
/**
 * @description Returns the value from a pixel statement (for use with CSS).
 * @param {string} pixelStatement A value in pixels.
 * @param {number} defaultValue The value to return if no value can be extracted from the pixel statement.
 * @returns {!number} The value representing the number of pixels from the statement.
 * @throws {OperationError} If the specified pixel statement doesn't end with the px-suffix or if the total length of the pixel statement is lower than 2.
 * @throws {OperationError} If the pixel statement contains no value.
 * @throws {TypeError} If the pixel statement contains no numeric value.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function getFromPixelStatement(
    pixelStatement,
    defaultValue = 0
) {
    checkRequiredNumber(
        defaultValue,
        "defaultValue"
    );
    checkRequiredString(
        pixelStatement,
        "pixelStatement"
    );

    if (pixelStatement.isWhiteSpace() ||
        pixelStatement.isEmpty())
        return defaultValue;

    pixelStatement = pixelStatement.trim().
        toLowerCase();

    if (pixelStatement.length <= 2 ||
        !pixelStatement.endsWith("\u0070\u0078" /* Latin small letter P *//* Latin small letter X */))
        throw new OperationError(`${COMMON_TEXT_LIST.invalidArgument}No pixel statement found.`);

    /**
     * @description The unformatted pixel value (without the suffix).
     * @type {string}
     */
    const valueAsString = pixelStatement.substring(
        0,
        pixelStatement.length - 2
    ).
        trimToNull();

    if (!valueAsString)
        throw new OperationError(`${COMMON_TEXT_LIST.invalidArgument}No value found.`);

    /**
     * @description The (formatted) pixel value.
     * @type {number}
     */
    const value = Number(valueAsString);

    if (Number.isNaN(value))
        throw new TypeError(`${COMMON_TEXT_LIST.invalidArgument}No numeric value found.`);

    return value;
}
/**
 * @description Checks if the list is empty.
 * @returns {!boolean} If the list contains no elements.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
DOMTokenList.prototype.isEmpty = function () {
    return this.length === 0;
};
/**
 * @description Removes all elements from this list.
 * @returns {void}
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
 * @param {...string} classNameList The class names.
 * @returns {void}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
DOMTokenList.prototype.set = function (...classNameList) {
    this.clear();
    this.append.apply(
        this,
        classNameList
    );
};
/**
 * @description Appends the specified class names.
 * @param {...string} classNameList The class names.
 * @returns {void}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
DOMTokenList.prototype.append = function (...classNameList) {
    if (isNothing(checkOptionalArgument(
        classNameList,
        "classNameList",
        Array
    )))
        return;

    /**
     * @description A reference to <code>this</code>.
     * @type {DOMTokenList}
     */
    const domTokenList = this;
    classNameList.forEach(className =>
        domTokenList.add(className));
};
/**
 * @description Returns the first index at which the specified class name can be found in the list, or -1 if it is not present.
 * @param {string} className The class name to look for.
 * @returns {!number} The first index at which the specified class name can be found in the list, or -1 if it is not present.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
DOMTokenList.prototype.indexOf = function (className) {
    if (!isNothing(className) ||
        className.isWhiteSpace())
        for (/**
              * @description The current class name index.
              * @type {!number}
              */
             let classNameIndex = 0;
             classNameIndex < this.length;
             classNameIndex++
        )
            if (this[classNameIndex] === className)
                return classNameIndex;

    return -1;
};
/**
 * @description Replaces the specified old class name with the new one.
 * @param {string} oldClassName The old class name to replace.
 * @param {string} newClassName The class name to replace the old class name.
 * @returns {!boolean} If the old class has been found and replaced.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
DOMTokenList.prototype.replace = function (
    oldClassName,
    newClassName
) {
    /**
     * @description If this token list contains the specified old class name.
     * @type {boolean}
     */
    const hasOldClassName = this.contains(oldClassName);

    if (hasOldClassName) {
        this.remove(oldClassName);
        this.add(newClassName);
    }

    return hasOldClassName;
};
/**
 * @description Searches for a specified class name and if found replaces it with the other class name. Thus, if class name A is found it will be replaced with class name B, otherwise
 * if class name B is found it will be replaced with class name A.
 * @param {string} classNameA The first class name to search for and replace with the second class name.
 * @param {string} classNameB The second class name to search for and replace with the first class name.
 * @returns {number} One of the following:
 * <p>1 if the first class name has been found and replaced.</p>
 * <p>2 if the second class name has been found and replaced.</p>
 * <p>-1 if no class name has been found.</p>
 * @throws {string} If class name A or B is null, undefined or white space.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
DOMTokenList.prototype.switch = function (
    classNameA,
    classNameB
) {
    return this.replace(classNameA, classNameB) ? 1 :
        (this.replace(classNameB, classNameA) ? 2 : -1);
};
/**
 * @description Executes the provided function once for each item in this list. This loop is breakable.
 * @param {LoopCallback} callback Function that produces an item of this list.
 * @param {number} [startIndex] The start index.
 * @param {number} [endIndex] The end index.
 * @param {number} [step] The number by which the counter of the loop is incremented each time.
 * @param {Object} [scope] The value of <code>this</code> provided for the callback function.
 * @returns {!boolean} If the loop has been executed (and at least one item has been processed) and has not been broken.
 * @throws {TypeError} If the provided function returns a value that is not a boolean.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
DOMTokenList.prototype.loop = function (
    callback,
    startIndex,
    endIndex,
    step,
    scope
) {
    return loopThroughList(
        this,
        callback,
        startIndex,
        endIndex,
        step,
        scope
    );
};
/**
 * @description Executes the provided function once for each item in this list. This loop is unbreakable.
 * @param {ForEachCallback} callback Function that produces an item of this list.
 * @param {number} [startIndex] The start index.
 * @param {number} [endIndex] The end index.
 * @param {number} [step] The number by which the counter of the loop is incremented each time.
 * @param {Object} [scope] The value of <code>this</code> provided for the callback function.
 * @returns {void}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
DOMTokenList.prototype.forEach = function (
    callback,
    scope,
    startIndex,
    endIndex,
    step
) {
    return forEachInList(
        this,
        callback,
        startIndex,
        endIndex,
        step,
        scope
    );
};
/**
 * @description Returns the child element which has all of the specified class names. If more than one child element is found, an exception is thrown.
 * @param {string} names A string representing the list of class names to match; class names are separated by whitespace.
 * @returns {Element} The child element which has all the specified class names (or undefined if none is found).
 * @throws {Error} If more than one child element which has all of the specified class names has been found.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.prototype.getElementByClassName = function (names) {
    /**
     * @description The child elements which have all of the specified class names.
     * @type {HTMLCollection}
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
 * @param {string} names A string representing the list of class names to match; class names are separated by whitespace.
 * @throws {Error} If more than one child element which has all of the specified class names has been found.
 * @returns {!boolean} If this element has any child element which has all of the specified class names.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.prototype.hasElementByClassName = function (names) {
    /**
     * @description The child elements which have all of the specified class names.
     * @type {HTMLCollection}
     */
    const elementList = this.getElementsByClassName(names);

    if (elementList.length > 1)
        throw new Error("More than one element found.");

    return !elementList.isEmpty();
};
/**
 * @description Removes all child elements which have all of the specified class names.
 * @param {?(string|Array)} nameList A string or array representing the list of class names to match; class names are separated by whitespace.
 * @returns {?number} The number of elements that have been removed (or undefined if names is null, undefined or if no elements have been found with those names).
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.prototype.removeElementsByClassName = function (nameList) {
    if (isNothing(nameList))
        return undefined;

    if (nameList instanceof Array) {
        /**
         * @description The number of elements that have been removed.
         * @type {number}
         */
        let elementsRemoved = 0;
        nameList.forEach(name =>
            elementsRemoved += removeNodes(this.getElementsByClassName(name)).length);
        return elementsRemoved;
    }

    return removeNodes(this.getElementsByClassName(nameList)).length;
};
/**
 * @description Removes the child element which has all of the specified class names and returns it.
 * @param {(string|Array)} names A string or array representing the list of class names to match; class names are separated by whitespace.
 * @returns {Element} The element that has been removed (or undefined if names is null, undefined or if no element has been found with those names).
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLElement.prototype.removeElementByClassName = function (names) {
    /**
     * @description The child element which has all of the specified class names.
     * @type {Element}
     */
    const element = this.getElementByClassName(names);
    removeNode(element);
    return element;
};
/**
 * @description Sets the width of the element.
 * @param {number} width The width of the element.
 * @returns {boolean} If the width of the element has chagned (if the width of the element is not equal to the specified width).
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
CSSStyleDeclaration.prototype.setWidth = function (width) {
    checkRequiredNumber(
        width,
        "width"
    );

    /**
     * @description The width as a pixel statement.
     * @type {string}
     */
    const widthStatement = createPixelStatement(width);

    if (this.width === widthStatement)
        return false;

    this.width = widthStatement;
    return true;
};
/**
 * @description Sets the height of the element.
 * @param {number} height The height of the element.
 * @returns {boolean} If the height of the element has chagned (if the height of the element is not equal to the specified height).
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
CSSStyleDeclaration.prototype.setHeight = function (height) {
    checkRequiredNumber(
        height,
        "height"
    );

    /**
     * @description The height as a pixel statement.
     * @type {string}
     */
    const heightStatement = createPixelStatement(height);

    if (this.height === heightStatement)
        return false;

    this.height = heightStatement;
    return true;
};
/**
 * @description Returns the width of the document body.
 * @returns {number} The width of the document body.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLBodyElement.prototype.getWidth = function () {
    return document.documentElement.clientWidth - this.getOuterWidth();
};
/**
 * @typedef {Object} BodyWidthDetails Body width details gathered when setting the body width.
 * @property {number} bodyMinimumWidth The minimum width for the body.
 * @property {number} bodyWidth The body width.
 * @property {string} bodyWidthPixelStatment The body width converted to a pixel statement.
 * @property {boolean} hasChanged If the width of the body has been changed.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * @description Sets the document.body.style.width property in accordance to the actual width of the body.
 * @param {number} [minimumWidth] The minimum width to use. If this value is lower than the body's minimum width, it will be ignored.
 * @returns {BodyWidthDetails} Body width details gathered when setting the body width.
 * @throws {TypeError} If minimumWidth is not <code>null</code> or <code>undefined</code> and not a number either.
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

    if (!isNothing(minimumWidth)) {
        if (!isNumber(minimumWidth))
            throw new TypeError(createStringFromTemplate(
                COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate,
                "minimumWidth",
                "number"
            ));

        if (minimumWidth >= details.bodyMinimumWidth)
            details.bodyMinimumWidth = minimumWidth;
    }

    /**
     * @description The width of the document body.
     * @type {number}
     */
    const bodyWidth = this.getWidth();
    details.hasChanged = this.style.setWidth(details.bodyWidth = bodyWidth <= details.bodyMinimumWidth ?
        details.bodyMinimumWidth :
        bodyWidth);
    return details;
};
/**
 * @description Returns the height of the document body.
 * @returns {number} The height of the document body.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLBodyElement.prototype.getHeight = function () {
    return document.documentElement.clientHeight - this.getOuterHeight();
};
/**
 * @typedef {Object} BodyHeightDetails Body height details gathered when setting the body height.
 * @property {number} bodyMinimumHeight The minimum height for the body.
 * @property {number} bodyHeight The body height.
 * @property {string} bodyHeightPixelStatement The body height converted to a pixel statement.
 * @property {boolean} hasChanged If the height of the body has been changed.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * @description Sets the document.body.style.height property in accordance to the actual height of the body.
 * @param {number} [minimumHeight] The minimum height to use. If this value is lower than the body's minimum height, it will be ignored.
 * @returns {BodyHeightDetails} Body height details gathered when setting the body height.
 * @throws {TypeError} If minimumHeight is not <code>null</code> or <code>undefined</code> and not a number either.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
HTMLBodyElement.prototype.setHeight = function (minimumHeight) {
    this.style.height = "";

    /**
     * @description Body height details.
     * @type {BodyHeightDetails}
     */
    const details = {
        bodyMinimumHeight: getFromPixelStatement(getComputedStyle(this).minHeight)
    };

    if (!isNothing(minimumHeight)) {
        if (!isNumber(minimumHeight))
            throw new TypeError(createStringFromTemplate(
                COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate,
                "minimumHeight",
                "number"
            ));

        if (minimumHeight >= details.bodyMinimumHeight)
            details.bodyMinimumHeight = minimumHeight;
    }

    /**
     * @description The height of the document body.
     * @type {number}
     */
    const bodyHeight =  this.getHeight();
    details.hasChanged = this.style.setHeight(details.bodyHeight = bodyHeight <= details.bodyMinimumHeight ?
        details.bodyMinimumHeight :
        bodyHeight);
    return details;
};

/**
 * @description Sets the transform's translate function.
 * @param {number} abscissa The length representing the abscissa of the translating vector. If specified as a number the value will be converted to a pixel statement.
 * @param {number} [ordinate] The length representing the ordinate of the translating vector. If specified as a number the value will be converted to a pixel statement.
 * @returns {void}
 * @throws {TypeError} If the specified abscissa is null, undefined or neither a number or a string.
 * @throws {TypeError} If the specified ordinate is not null and undefined and neither a number or a string.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
CSSStyleDeclaration.prototype.setTransformTranslate = function (
    abscissa,
    ordinate
) {
    /**
     * @description The translate statement.
     * @type {string}
     */
    let translateStatement;

    if (isNothing(abscissa))
        throw new TypeError(createStringFromTemplate(
            COMMON_TEXT_LIST.invalidArgumentCannotBeNullOrUndefinedTemplate,
            "abscissa"
        ));

    if (isNumber(abscissa))
        translateStatement = createPixelStatement(abscissa);
    else if (isString(abscissa))
        translateStatement = abscissa.toString();
    else
        throw new TypeError(`${COMMON_TEXT_LIST.invalidArgument}"abscissa" is not a string or a number.`);

    if (!isNothing(ordinate)) {
        if (isNumber(ordinate))
            translateStatement += ", " + createPixelStatement(ordinate);
        else if (isString(ordinate))
            translateStatement += ", " + ordinate;
        else
            throw new TypeError(`${COMMON_TEXT_LIST.invalidArgument}"ordinate" is not a string or a number.`);
    }

    this.transform = `translate(${translateStatement})`;
};
/**
 * @description Returns the transform's translate value.
 * @returns {!string} The transform's translate value.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
CSSStyleDeclaration.prototype.getTransformTranslate = function () {
    // noinspection JSValidateTypes
    return getSingleValueFromString(
        "translate(@)",
        this.transform
    );
};

//<editor-fold desc="CSS Box Model">

/**
 * @description Returns the total sum of the top margin, padding and border.
 * @returns {number} The total sum of the top margin, padding and border.
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
 * @description Returns the total sum of the bottom margin, padding and border.
 * @returns {number} The total sum of the bottom margins, padding and border.
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
 * @returns {number} The total sum of the vertical margins, paddings and borders.
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
 * @returns {number} The height of the element's content, including content not visible on the screen due to overflow.
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
 * @returns {number} The inner and outer height of the rectangle box.
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
 * @description Returns the total sum of the right margin, padding and border.
 * @returns {number} The total sum of the right margin, padding and border.
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
 * @description Returns the total sum of the left margin, padding and border.
 * @returns {number} The total sum of the left margin, padding and border.
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
 * @returns {number} The total sum of the horizontal margins, paddings and borders.
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
 * @returns {number} The width of the element's content, including content not visible on the screen due to overflow.
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
 * @returns {number} The inner and outer width of the rectangle box.
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
//<editor-fold desc="Files">

/**
 * @description Executes the provided function once for each file in this list. This loop is breakable.
 * @param {LoopCallback} callback Function that produces a file from this list.
 * @param {number} [startIndex] The start index.
 * @param {number} [endIndex] The end index.
 * @param {number} [step] The number by which the counter of the loop is incremented each time.
 * @param {Object} [scope] The value of <code>this</code> provided for the callback function.
 * @returns {boolean} If the loop has been executed (and at least one item has been processed) and has not been broken.
 * @throws {TypeError} If the provided function returns a value that is not a boolean.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
FileList.prototype.loop = function (
    callback,
    scope,
    startIndex,
    endIndex,
    step
) {
    return loopThroughList(
        this,
        callback,
        startIndex,
        endIndex,
        step,
        scope
    );
};
/**
 * @description Executes the provided function once for each file in this list. This loop is unbreakable.
 * @param {ForEachCallback} callback Function that produces a file of this list.
 * @param {number} [startIndex] The start index.
 * @param {number} [endIndex] The end index.
 * @param {number} [step] The number by which the counter of the loop is incremented each time.
 * @param {Object} [scope] The value of <code>this</code> provided for the callback function.
 * @returns {void}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
FileList.prototype.forEach = function (
    callback,
    scope,
    startIndex,
    endIndex,
    step
) {
    return forEachInList(
        this,
        callback,
        startIndex,
        endIndex,
        step,
        scope
    );
};

//</editor-fold>
//<editor-fold desc="URL">

/**
 * @description Defines a list of queries that can be set and retrieved. All queries are saved as strings in this list because they are created to be appended to an URL.
 * @public
 * @class
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function QueryParameterList() {
    //<editor-fold desc="Properties">

    /**
     * @description A map to store queries.
     * @type {Map<string, string>}
     */
    let _map = new Map();
    /**
     * @description A reference to <code>this</code>.
     * @type {QueryParameterList}
     */
    const _queryParameterList = this;

    /**
     * @description Sets a new query in this list with the specified name and value. If the value of a query is <code>null</code> or <code>undefined</code> it will be not set.
     * @param {string} name The name of the query.
     * @param {number|boolean|string} value The value of the query.
     * @param {number|boolean|string} [defaultValue] The default value of the query to use if the value of the query is <code>null</code> or <code>undefined</code>.
     * @returns {!boolean} If the query has been set.
     * @throws {Error} If the name is null, undefined, empty or white space.
     * @throws {TypeError} If the name is not a string.
     * @throws {TypeError} If the value is not an instance of a recognized query type.
     * @public
     * @since 1.0
     */
    this.set = (
        name,
        value,
        defaultValue
    ) => {
        /**
         * @description Sets the new query in this list with the specified name and the converted value.
         * @param {string} value The value of the query, converted to a string.
         * @returns {void}
         * @private
         * @since 1.0
         * @author Manuel Milosavljević <manuel@synergystructure.com>
         */
        function setString(value) {
            if (!value.isEmpty())
                _map.set(
                    decodeURIComponent(name.toLowerCase()),
                    decodeURIComponent(value)
                );
        }

        checkRequiredString(
            name,
            "name"
        );

        if (name.isEmpty())
            throw new Error(`${COMMON_TEXT_LIST.invalidArgument}"name" cannot empty or white space.`);

        if (isNothing(value)) {
            if (isNothing(defaultValue))
                return false;

            value = defaultValue;
        }

        switch (typeof value) {
            case "number":
                setString(value.toString());
                return true;
            case "boolean":
                setString(value ?
                    QueryParameterList.BooleanTrueParameterValue :
                    QueryParameterList.BooleanFalseParameterValue);
                return true;
            case "string":
                setString(value);
                return true;
            default:
                throw new TypeError(`${COMMON_TEXT_LIST.invalidArgument}"value" is not an instance of a recognized query type.`);
        }
    };
    /**
     * @description Returns the string value of a query with the specified name.
     * @param {string} name The name of the query.
     * @returns {?string} The string value of a query with the specified name. If not found, undefined will be returned.
     * @public
     * @since 1.0
     */
    this.getString = name =>
        _map.get(name);
    /**
     * @description Returns the numeral value of a query with the specified name.
     * @param {string} name The name of the query.
     * @param {number} [radix] An integer between 2 and 36 that represents the radix (the base in mathematical numeral systems) of the query.
     * @returns {?number} The numeral value of a query with the specified name. If not found, undefined will be returned.
     * @public
     * @since 1.0
     */
    this.getNumber = (
        name,
        radix
    ) => {
        /**
         * @description The (unformatted) query value with the specified name.
         * @type {string}
         */
        const unformattedValue = _map.get(name);
        return unformattedValue === undefined ?
            undefined :
            Number.parseInt(
                unformattedValue,
                radix
            );
    };
    /**
     * @description Returns the boolean value of a query with the specified name.
     * @param {string} name The name of the query.
     * @returns {?boolean} The boolean value of a query with the specified name. If not found, <code>null</code> will be returned.
     * @public
     * @since 1.0
     */
    this.getBoolean = name => {
        /**
         * @description The unformatted value that is associated with the specified name.
         * @type {string}
         */
        const unformattedValue = _map.get(name);

        if (isNothing(unformattedValue) ||
            unformattedValue.isWhiteSpace())
            return undefined;

        switch (unformattedValue) {
            case QueryParameterList.NullParameterValue:
                return null;
            case QueryParameterList.BooleanTrueParameterValue:
                return true;
            case QueryParameterList.BooleanFalseParameterValue:
                return false;
            default:
                throw new TypeError("Invalid boolean value.");
        }
    };
    /**
     * @description Cuts (gets and deletes) the string value of a query with the specified name.
     * @param {string} name The name of the query.
     * @returns {?string} The cut string value of a query with the specified name. If not found, undefined will be returned.
     * @public
     * @since 1.0
     */
    this.cutString = name => {
        if (!_map.has(name))
            return undefined;

        /**
         * @description The query value with the specified name.
         * @type {?string}
         */
        const value = _queryParameterList.getString(name);
        _queryParameterList.delete(name);
        return value;
    };
    /**
     * @description Cuts (gets and deletes) the numeral value of a query with the specified name.
     * @param {string} name The name of the query.
     * @param {number} [radix] An integer between 2 and 36 that represents the radix (the base in mathematical numeral systems) of the query.
     * @returns {?number} The cut numeral value of a query with the specified name. If not found, undefined will be returned.
     * @public
     * @since 1.0
     */
    this.cutNumber = (
        name,
        radix
    ) => {
        if (!_map.has(name))
            return undefined;

        /**
         * @description The query value with the specified name.
         * @type {?number}
         */
        const value = _queryParameterList.getNumber(
            name,
            radix
        );
        _queryParameterList.delete(name);
        return value;
    };
    /**
     * @description Cuts (gets and deletes) the boolean value of a query with the specified name.
     * @param {string} name The name of the query.
     * @returns {boolean} The cut boolean value of a query with the specified name. If not found, undefined will be returned.
     * @public
     * @since 1.0
     */
    this.cutBoolean = name => {
        if (!_map.has(name))
            return undefined;

        /**
         * @description The query value with the specified name.
         * @type {?boolean}
         */
        const value = _queryParameterList.getBoolean(name);
        _queryParameterList.delete(name);
        return value;
    };
    /**
     * @description Deletes the query with the specified name from this list.
     * @param {string} name The name of the query.
     * @returns {boolean} If a query has been found with the specified name and deleted.
     * @public
     * @since 1.0
     */
    this.delete = name =>
        _map.delete(name);
    /**
     * @description Clears this list from all queries.
     * @returns {!boolean} If any queries have been deleted.
     * @public
     * @since 1.0
     */
    this.clear = () => {
        /**
         * @description If this query parameter list is empty.
         * @type {boolean}
         */
        const isEmpty = _queryParameterList.isEmpty();
        _map.clear();
        return !isEmpty;
    };
    /**
     * @description Checks if this list has a query with the specified name.
     * @param {string} name The name of the query.
     * @returns {!boolean} If this list has a query with the specified name.
     * @public
     * @since 1.0
     */
    this.has = name =>
        _map.has(name);
    /**
     * @description Checks if the list is empty or not.
     * @returns {!boolean} If this list has any queries.
     * @public
     * @since 1.0
     */
    this.isEmpty = () =>
        _map.isEmpty();
    /**
     * @description Executes the specified callback function once per each query in this list in insertion order.
     * @param {Function} callback The function to execute for each query.
     * @param {Object} [scope] The value to use as <code>this</code> when executing the callback function.
     * @returns {void}
     * @public
     * @since 1.0
     */
    this.forEach = (
        callback,
        scope
    ) =>
        _map.forEach(
            callback,
            scope
        );
    /**
     * @description Returns the textual representation of this query parameter list in the form of an URL query string.
     * @returns {!string} The textual representation of this query list.
     * @public
     * @since 1.0
     */
    this.toString = () => {
        /**
         * @description Creates a query parameter (from the first one in the list).
         * @returns {string} A query parameter.
         * @private
         * @since 1.0
         * @author Manuel Milosavljević <manuel@synergystructure.com>
         */
        function createQueryParameter() {
            /**
             * @description The name of the first query parameter in the list.
             * @type {string}
             */
            const name = queryParameterNameList.shift();
            return encodeURIComponent(name) +
                "\u003D" /* Equals sign: = */ +
                encodeURIComponent(_map.get(name));
        }

        /**
         * @description A list all available query parameter names.
         * @type {!string[]}
         */
        const queryParameterNameList = [];
        _queryParameterList.forEach((
            value,
            key
        ) =>
            queryParameterNameList.push(key));
        queryParameterNameList.sort();

        if (queryParameterNameList.isEmpty())
            return String();

        /**
         * @description The textual representation of this query list.
         * @type {string}
         */
        let string = "\u003F" /* Question mark: ? */ +
            createQueryParameter();

        while (!queryParameterNameList.isEmpty())
            string += "\u0026" /* Ampersand: & */ +
                createQueryParameter();

        return string;
    };

    //</editor-fold>
}
/**
 * @description The <code>true</code> value as a URL query parameter value.
 * @type {string}
 */
QueryParameterList.BooleanTrueParameterValue = "\u0074" /* Latin small letter T */;
/**
 * @description The <code>false</code> value as a URL query parameter value.
 * @type {string}
 */
QueryParameterList.BooleanFalseParameterValue = "\u0066" /* Latin small letter F */;
/**
 * @description The <code>null</code> value as a URL query parameter value.
 * @type {string}
 */
QueryParameterList.NullParameterValue = "\u006E" /* Latin small letter N */;
/**
 * @description Parses the specified query string to create a query list.
 * @param {string} queryString The query string to parse.
 * @returns {QueryParameterList} The query list.
 * @throws {Error} If the specified query string is not a string.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
QueryParameterList.parse = queryString => {
    if (isNothing(queryString))
        return null;

    if (!isString(queryString))
        throw new TypeError(`${COMMON_TEXT_LIST.invalidArgument}"queryString" is not a string.`);

    if (queryString.isEmpty())
        return null;

    /**
     * @description A new query list.
     * @type {QueryParameterList}
     */
    const queryList = new QueryParameterList();
    /**
     * @description The unformatted parameters from the specified query string.
     * @type {Array<string>}
     */
    const unformattedParameterList = (queryString.startsWith("\u003F" /* Question mark: ? */) ?
        queryString.substr(1) :
        queryString).
        split("\u0026" /* Ampersand: & */);

    while (!unformattedParameterList.isEmpty()) {
        /**
         * @description The first parameter from the unformatted parameter list.
         * @type {string[]}
         */
        const parameter = unformattedParameterList.pop().
            split("\u003D" /* Equals sign: = */);

        if (parameter.length !== 2)
            throw new Error("Invalid query found.");

        // noinspection JSCheckFunctionSignatures
        queryList.set(
            parameter.getFirst(),
            parameter.getLast()
        );
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
QueryParameterList.getAllAvailableQueries = () =>
    QueryParameterList.parse(location.search);
/**
 * @description Clears all queries from the current URL.
 * @param {string} [title] The title for the state.
 * @returns {void}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
QueryParameterList.clearUrlQueryParameterList = title =>
    history.pushState(
        null,
        isNothing(title) ? "" : title,
        location.pathname
    );
/**
 * @description Updates the URL to match the specified parameters.
 * @param {QueryParameterList} parameterList The parameters.
 * @param {string} title The title of the new state.
 * @returns {void}
 * @throws {TypeError} If the parameters variable is null, undefined or not an instance of QueryParameterList.
 * @throws {TypeError} If the title is null, undefined or not a string.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
QueryParameterList.updateUrl = (
    parameterList,
    title
) => {
    checkRequiredArgument(
        parameterList,
        "parameterList",
        QueryParameterList
    );
    checkRequiredString(
        title,
        "title"
    );

    if (parameterList.isEmpty())
        QueryParameterList.clearUrlQueryParameterList(title);
    else
        history.pushState(
            null,
            title,
            parameterList.toString()
        );
};
/**
 * @typedef {Object} UrlComponentList The components of an URL. Note: the user name and the password of the URL are not returned.
 * @property {string} schemeName The scheme name.
 * @property {string} hostName The host name (i.e. example.com).
 * @property {number} port The port (or -1 if none is specified).
 * @property {QueryParameterList} queryList The parameters.
 * @property {string} fragment The fragment.
 * @property {Function} toString Converts the components into an URL.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * @description Parses the specified string representation of a URL into an object containing all the components of an URL.
 * @param {string} unparsedUrl The string representation of the URL to parse.
 * @returns {UrlComponentList} The parsed URL.
 * @throws {TypeError} If the unparsed URL is not a string.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function parseUrl(unparsedUrl) {
    checkRequiredString(
        unparsedUrl,
        "unparsedUrl"
    );

    /**
     * @description The HTML anchor element for use as a URL parser.
     * @type {HTMLAnchorElement}
     */
    const parser = document.createElement("a");
    parser.href = unparsedUrl;

    /**
     * @description The URL path.
     * @type {!string[]}
     */
    const path = [];
    /**
     * @description The solidus character code.
     * @type {!string}
     */
    const solidusCharacterCode = "\u002F" /* Solidus: / */;

    if (!parser.pathname.isEmpty() &&
        parser.pathname !== solidusCharacterCode)
        parser.pathname.split(solidusCharacterCode).
        forEach(name => {
            if (!name.isEmpty())
                path.push(decodeURIComponent(name));
        });

    return Object.freeze({
        schemeName: parser.protocol,
        hostName: parser.hostname,
        port: isNothing(parser.port) ||
        parser.port.isEmpty() ? -1 :
            parseInt(parser.port),
        path: path,
        queryList: QueryParameterList.parse(parser.search),
        fragment: parser.hash,
        toString: function () {
            /**
             * @description The textual representation of this URL.
             * @type {string}
             */
            let string = String();

            if (this.schemeName)
                string += this.schemeName + "\u002F\u002F" /* Solidus: / */;

            string += this.hostName;

            if (this.port !== -1)
                string += "\u003A" /* Colon: : */ + this.port.toString();

            this.path.forEach(directory =>
                string += solidusCharacterCode + encodeURIComponent(directory));

            if (!isNothing(this.queryList))
                string += this.queryList.toString();

            if (this.fragment)
                string += this.fragment;

            return string;
        }
    });
}

//</editor-fold>
//<editor-fold desc="Localization">

/**
 *
 * @description Defines a locale.
 * @public
 * @version 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class Locale {
    //<editor-fold desc="Constructor">

    /**
     * @description Locale constructor.
     * @param {string} languageCode The language code in the ISO 639-1 format.
     * @param {string} countryCode The country code in the ISO 3166 alpha-2 format.
     * @throws {Error} If the language code is not a valid ISO 639-1 code.
     * @throws {Error} If the country code is not a valid ISO 3166-1 alpha-2 code.
     * @since 1.0
     */
    constructor(
        languageCode,
        countryCode
    ) {
        checkRequiredString(
            languageCode,
            "languageCode"
        );
        checkRequiredString(
            countryCode,
            "countryCode"
        );

        if (languageCode.length !== 2)
            throw new Error("The language code is not a valid ISO 639-1 code.");

        if (countryCode.length !== 2)
            throw new Error("The country code is not a valid ISO 3166-1 alpha-2 code.");

        /**
         * @description The language code in the ISO 639-1 format.
         * @type {string}
         */
        this.languageCode = languageCode.toLowerCase();
        /**
         * @description The country code in the ISO 3166 alpha-2 format.
         * @type {string}
         */
        this.countryCode = countryCode.toUpperCase();
    }

    //</editor-fold>
    //<editor-fold desc="Operations">

    /**
     * @description Returns a string representation of this locale.
     * @returns {!string}
     * @public
     * @since 1.0
     */
    toString() {
        return this.languageCode +
            "\u002D" /* Hyphen-minus: - */ +
            this.countryCode;
    }
    /**
     * @description Sets this locale as the default locale of the document.
     * @returns {!boolean} If the locale has been set (the locale won't be set if it has already been set).
     * @public
     * @since 1.0
     */
    setAsDefault() {
        /**
         * This locale as a string.
         * @type {string}
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
     * @returns {!Locale} The document locale.
     * @throws {Error} If no document locale has been found.
     * @public
     * @since 1.0
     */
    static getDocumentLocale() {
        /**
         * The document locale as a string.
         * @type {string}
         */
        const localeAsString = document.documentElement.lang;

        if (localeAsString.isEmpty())
            throw new Error("No document locale has been found.");

        /**
         * The locale as an array.
         * @type {Array<string>}
         */
        let localeAsArray = localeAsString.split("\u005F" /* Low line: _ */);

        if (localeAsArray.length === 1)
            localeAsArray = localeAsString.split("\u002D" /* Hyphen-minus: - */);

        if (localeAsArray.length !== 2)
            throw new Error("Both the language code and country code was expected, but only one was found.");

        return new Locale(
            localeAsArray[0],
            localeAsArray[1]
        );
    }

    //</editor-fold>
}
/**
 * @description A map of localized texts.
 * @type {Map<string, string>}
 */
let LOCALIZED_TEXTS_MAP = new Map();

LOCALIZED_TEXTS_MAP.set(
    COMMON_TEXT_NAME_LIST.bytesStatement,
    "bytes"
);

//</editor-fold>
//<editor-fold desc="Unicode">

/**
 * @description Defines any type of Unicode related error.
 * @public
 * @version 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class UnicodeError extends Error {
    //<editor-fold desc="Constructor">

    /**
     * @description UnicodeError constructor.
     * @param {string} message The message.
     * @returns {UnicodeError}
     */
    constructor(message) {
        super(message);
    }

    //</editor-fold>
}
/**
 * @description Defines character code functionality.
 * @public
 * @version 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class CharCode {
    //<editor-fold desc="Properties">

    /**
     * @description The minimum value of a <a href="http://unicode.org/glossary/#high_surrogate_code_unit">Unicode high-surrogate code unit</a> in the UTF-16 encoding.
     * @type {!number}
     */
    static get minimumHighSurrogate() {
        return 0xD800;
    }
    /**
     * @description The maximum value of a <a href="http://unicode.org/glossary/#high_surrogate_code_unit">Unicode high-surrogate code unit</a> in the UTF-16 encoding.
     * @type {!number}
     */
    static get maximumHighSurrogate() {
        return 0xDBFF;
    }
    /**
     * The minimum value of a <a href="http://unicode.org/glossary/#low_surrogate_code_unit">Unicode low-surrogate code unit</a> in the UTF-16 encoding.
     * @type {!number}
     */
    static get minimumLowSurrogate() {
        return 0xDC00;
    }
    /**
     * The maximum value of a <a href="http://unicode.org/glossary/#low_surrogate_code_unit">Unicode low-surrogate code unit</a> in the UTF-16 encoding.
     * @type {!number}
     */
    static get maximumLowSurrogate() {
        return 0xDFFF;
    }
    /**
     * @description Checks if the specified character code is a <a href="http://unicode.org/glossary/#low_surrogate_code_unit">(Unicode) low-surrogate code unit</a>.
     * @param {number} charCode The character code.
     * @returns {!boolean} If the specified character code is a <a href="http://unicode.org/glossary/#low_surrogate_code_unit">(Unicode) low-surrogate code unit</a>.
     * @public
     * @since 1.0
     */
    static isHighSurrogate(charCode) {
        return isNumber(charCode) &&
            charCode >= CharCode.minimumHighSurrogate &&
            charCode < (CharCode.maximumHighSurrogate + 1);
    }
    /**
     * @description Checks if the specified character code is a <a href="http://unicode.org/glossary/#high_surrogate_code_unit">(Unicode) high-surrogate code unit</a>.
     * @param {number} charCode The character code.
     * @returns {!boolean} If the specified character code is a <a href="http://unicode.org/glossary/#high_surrogate_code_unit">(Unicode) high-surrogate code unit</a>.
     * @public
     * @since 1.0
     */
    static isLowSurrogate(charCode) {
        return isNumber(charCode) &&
            charCode >= CharCode.minimumLowSurrogate &&
            charCode < (CharCode.maximumLowSurrogate + 1);
    }

    //</editor-fold>
}
/**
 * @description Defines a surrogate pair in Unicode.
 * @public
 * @version 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class SurrogatePair {
    //<editor-fold desc="Constructor">

    /**
     * @description SurrogatePair constructor.
     * @param {number} highSurrogateCharCode The <a href="http://www.unicode.org/glossary/#high_surrogate_code_unit">high surrogate character code</a>.
     * @param {number} lowSurrogateCharCode The <a href="http://www.unicode.org/glossary/#low_surrogate_code_unit">low surrogate character code</a>.
     * @throws {UnicodeError} If the specified high surrogate character code is not a high surrogate.
     * @throws {UnicodeError} If the specified low surrogate character code is not a low surrogate.
     */
    constructor(
        highSurrogateCharCode,
        lowSurrogateCharCode
    ) {
        if (!CharCode.isHighSurrogate(highSurrogateCharCode))
            throw new UnicodeError("The specified high surrogate character code is not a high surrogate.");

        if (!CharCode.isLowSurrogate(lowSurrogateCharCode))
            throw new UnicodeError("The specified low surrogate character code is not a low surrogate.");

        /**
         * @description The <a href="http://www.unicode.org/glossary/#high_surrogate_code_unit">high surrogate character code</a>.
         * @type {!number}
         */
        this.highSurrogate = highSurrogateCharCode;
        /**
         * @description The <a href="http://www.unicode.org/glossary/#low_surrogate_code_unit">low surrogate character code</a>.
         * @type {!number}
         */
        this.lowSurrogate = lowSurrogateCharCode;
    }
    /**
     * @description Creates a new {@link SurrogatePair} from the specified astral code point.
     * @param {number} astralCodePoint
     * @returns {!SurrogatePair} A new {@link SurrogatePair} from the specified astral code point.
     * @throws {UnicodeError} If the specified code point is in the BMP.
     * @public
     * @since 1.0
     */
    static create(astralCodePoint) {
        if (isBmpCodePoint(astralCodePoint))
            throw new UnicodeError("The specified code point is in the BMP.");

        /**
         * @description The code to use to create the surrogates.
         * @type {number}
         */
        const surrogateCode = astralCodePoint - 0x10000;
        return new SurrogatePair(
            0xD800 | (surrogateCode >> 10),
            0xDC00 | (surrogateCode & 0x3FF)
        );
    }
    //</editor-fold>
    //<editor-fold desc="Properties">
    /**
     * @description Returns the surrogate pair as a code point.
     * @returns {!number} The surrogate pair as a code point.
     * @public
     * @since 1.0
     */
    toCodePoint() {
        /**
         * @description The code point from the surrogate pair.
         * @type {number}
         */
        let codePoint = 0x10000;
        codePoint += (this.highSurrogate & 0x03FF) << 10;
        codePoint += this.lowSurrogate & 0x03FF;
        return codePoint;
    }
    //</editor-fold>
}
/**
 * @description Defines code point functionality.
 * @public
 * @version 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class CodePoint {
    /**
     * @description The minimum value of a <a href="http://www.unicode.org/glossary/#code_point">Unicode code point</a>.
     * @returns {!number}
     */
    static get minimum() {
        return 0x000000;
    }
    /**
     * @description The maximum value of a <a href="http://www.unicode.org/glossary/#code_point">Unicode code point</a>.
     * @returns {!number}
     */
    static get maximum() {
        return 0X10FFFF;
    }
    /**
     * @description Checks if the specified code point is a valid <a href="http://www.unicode.org/glossary/#code_point">Unicode code point</a>.
     * @param codePoint
     * @returns {!boolean}
     */
    static isValid(codePoint) {
        return isNumber(codePoint) &&
            codePoint >= CodePoint.minimum &&
            codePoint <= CodePoint.maximum;
    }
}

/**
 * @description Checks if the specified (Unicode) code point is in the Basic Multilingual Plane (BMP).
 * @param {number} codePoint The code point.
 * @returns {!boolean} If the specified (Unicode) code point is in the Basic Multilingual Plane (BMP).
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
 * @description Generators code points out of the specified string.
 * @param {string} string The string.
 * @generator
 * @yields {number} The next code point in the specified string.
 * @throws {UnicodeError} If a high surrogate is found but no low surrogate.
 * @throws {UnicodeError} If a high surrogate is found at the last index (which means that there is no low surrogate).
 * @throws {UnicodeError} If a low surrogate is found but no high surrogate.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function* codePointGenerator(string) {
    /**
     * @description The Unicode Normalization Form of the specified string, using the Normalization Form Canonical Composition.
     * @type {string}
     */
    const normalizedString = string.normalize("NFC");

    for (/**
          * @description The current index.
          * @type {number}
          */
         let index = 0;
         index < normalizedString.length;
         index++
    ) {
        /**
         * @description The character code at the current index.
         * @type {number}
         */
        const charCode = normalizedString.charCodeAt(index);

        if (CharCode.isHighSurrogate(charCode)) {
            if (++index < normalizedString.length) {
                /**
                 * @description The low surrogate character code.
                 * @type {number}
                 */
                const lowSurrogateCharCode = normalizedString.charCodeAt(index);

                if (!CharCode.isLowSurrogate(lowSurrogateCharCode))
                    throw new UnicodeError("High surrogate found but no low surrogate.");

                /**
                 * @description The current surrogate pair to return.
                 * @type {SurrogatePair}
                 */
                const surrogatePair = new SurrogatePair(
                    charCode,
                    lowSurrogateCharCode
                );
                yield surrogatePair.toCodePoint();
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
 * @param {number} codePoint The current code point being processed in a string.
 * @returns {boolean} If the loop must continue, if possible.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * @description Executes the provided function once for each code point in this string. This loop is breakable.
 * @param {CodePointLoopCallback} callback Function that produces an code point of this string.
 * @param {Object} [scope] The value of <code>this</code> provided for the callback function.
 * @returns {!boolean} If the loop has been executed (and at least one item has been processed) and has not been broken.
 * @throws {TypeError} If the provided function returns a value that is not a boolean.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
String.prototype.loopThroughCodePoints = function (
    callback,
    scope
) {
    /**
     * @description The result that will be returned.
     * @type {boolean}
     */
    let result = false;

    for (/**
     * @description The current code point.
     * @type {number}
     */
    const codePoint
        of codePointGenerator(this)
        ) {
        /**
         * @description If the loop can continue.
         * @type {boolean}
         */
        const canContinue = callback.call(
            scope,
            codePoint
        );

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
 * @description The callback function that produces a code point of a string during an unbreakable loop.
 * @callback ForEachCodePointCallback
 * @param {number} codePoint The current code point being processed in a string.
 * @returns {void} Nothing is expected to be returned and whatever will be returned will be ignored.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * @description Executes the provided function once for each code point in this string. This loop is unbreakable.
 * @param {ForEachCodePointCallback} callback Function that produces a code point of the string.
 * @param {Object} [scope] The value of <code>this</code> provided for the callback function.
 * @returns {void}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
String.prototype.forEachCodePoint = function (
    callback,
    scope
) {
    for (/**
     * @description The current code point.
     * @type {number}
     */
    const codePoint
        of codePointGenerator(this)
        )
        callback.call(
            scope,
            codePoint
        );
};
/**
 * @description Creates a Unicode notation from the specified code point.
 * @param {number} codePoint The code point to convert to a Unicode notation.
 * @throws {TypeError} If the specified character is not a string.
 * @throws {TypeError} If the code point is null, undefined or not a number.
 * @returns {string} A Unicode notation, representing the specified code point.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function createUnicodeNotation(codePoint) {
    if (!CodePoint.isValid(codePoint))
        throw new UnicodeError("The specified code point is not a valid Unicode code point.");

    /**
     * @description The minimum length of a unicode notation.
     * @type {!number}
     */
    const unicodeNotationMinimumLength = 4;
    /**
     * @description The Unicode notation.
     * @type {!string}
     */
    const unicodeNotation = codePoint.toString(16).
        toUpperCase();
    return unicodeNotation.length >= unicodeNotationMinimumLength ?
        unicodeNotation :
        // The extension method maskLeft() of class String is not used here because this method needs to work without SS.JS.
        "\u0030" /* Digit zero: 0 */.repeat(unicodeNotationMinimumLength - unicodeNotation.length) + unicodeNotation;
}

//</editor-fold>
//<editor-fold desc="Control Key">

/**
 * @description Defines a control key.
 * @public
 * @version 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class ControlKey {
    /**
     *
     * @param {number} codePoint The code point that represents the control key.
     * @param {string} name The name.
     * @since 1.0
     */
    constructor(
        codePoint,
        name
    ) {
        if (!CodePoint.isValid(codePoint))
            throw new UnicodeError("The specified code point is not a valid Unicode code point.");

        /**
         * @description The code point that represents the control key.
         * @type {!number}
         */
        this.codePoint = codePoint;
        /**
         * @description The name.
         * @type {!string}
         */
        this.name = name;
    }
    /**
     * @description Checks if the specified object is equal to <code>this</code>.
     * @param {ControlKey|KeyboardEvent} [object] The object to check.
     * @public
     * @since 1.0
     */
    equals(object) {
        return !isNothing(object) &&
            ((
                object instanceof ControlKey &&
                object.codePoint === this.codePoint &&
                object.name === this.name
            ) || (
                object instanceof KeyboardEvent &&
                !isNothing(object.key) &&
                object.key.length === 1 &&
                object.key.charCodeAt(0) === this.codePoint
            ));
    }
}

/**
 * @description Common control keys.
 * @type {{
 * backspace: ControlKey,
 * tab: ControlKey,
 * arrowDown: ControlKey,
 * arrowUp: ControlKey,
 * enter: ControlKey,
 * escape: ControlKey,
 * delete: ControlKey,
 * space: ControlKey
 * }}
 */
const COMMON_CONTROL_KEY_LIST = {
    arrowDown: new ControlKey(
        40,
        "Arrow Down"
    ),
    arrowUp: new ControlKey(
        38,
        "Arrow Up"
    ),
    enter: new ControlKey(
        13,
        "Enter"
    ),
    escape: new ControlKey(
        27,
        "Escape"
    ),
    "delete": new ControlKey(
        46,
        "Delete"
    ),
    backspace: new ControlKey(
        8,
        "Backspace"
    ),
    space: new ControlKey(
        32,
        "Space"
    ),
    tab: new ControlKey(
        9,
        "Tab"
    )
};

/**
 * @description Checks if the specified key code is a control code or not. A control code is a key code that does not represent a written symbol.
 * @param {number} keyCode A signed integer representing a key code.
 * @returns {boolean} If the key code is a control code.
 * @throws {TypeError} If the key code is null, undefined, not a number, not a signed number or not an integer.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 * @see http://en.wikipedia.org/wiki/Control_character
 */
function isControlKeyCode(keyCode) {
    checkRequiredNumber(
        keyCode,
        "keyCode"
    );

    if (!Number.isUnsignedInteger(keyCode))
        throw new TypeError(`${COMMON_TEXT_LIST.invalidArgument + "keyCode"} (${keyCode}) cannot be a signed integer.`);

    if (!Number.isInteger(keyCode))
        throw new TypeError(`${COMMON_TEXT_LIST.invalidArgument + "keyCode"} (${keyCode}) cannot be a float.`);

    return keyCode <= 46 || // basic control code
        keyCode >= 91 &&
        keyCode <= 93 || // left or right window key or select key
        keyCode >= 112 &&
        keyCode <= 130; // function key + Mac function keys (124-130)
}

//</editor-fold>
//<editor-fold desc="Utilities">
/**
 * @typedef {Object} ScreenPixelSize The screen size in pixels.
 * @property {number} height The height.
 * @property {number} width The width.
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
         * @type {number}
         */
        height: screen.height * devicePixelRatio,
        /**
         * @description The width in pixels of the screen.
         * @type {number}
         */
        width: screen.width * devicePixelRatio
    });
}
/**
 * @description Creates a binary notation from the specified bits.
 * @param {number} bitList The bits.
 * @param {number} bitListSize The number of specified bits.
 * @returns {!string} A binary notation, representing the specified bits.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function createBinaryNotation(
    bitList,
    bitListSize
) {
    return bitList.toString(2).
    maskLeft(
        "\u0030" /* Digit zero: 0 */,
        bitListSize
    );
}
/**
 * @description Set the width of the specified buttons to the width of the widest button available.
 * @param {Array<HTMLButtonElement>|HTMLCollection} buttonList An array of buttons (a button being an instance of HTMLButtonElement). Items of this array may be <code>null</code> or <code>undefined</code>.
 * @returns {number} The width of the widest button.
 * @throws {TypeError} If the specified buttons argument is not an array or an instance of HTMLCollection.
 * @throws {TypeError} If the specified buttons argument contains an item that is not a button.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function setButtonWidthToHighest(buttonList) {
    if (isNothing(buttonList))
        return undefined;

    if (!(buttonList instanceof Array) &&
        !(buttonList instanceof HTMLCollection)) {
        if (arguments.length > 1)
            return setButtonWidthToHighest([].slice.call(arguments));

        throw new TypeError(`${COMMON_TEXT_LIST.invalidArgument}"buttons" is not an array or an instance of HTMLCollection."`);
    }

    if (buttonList.isEmpty())
        return undefined;

    if (buttonList.length === 1)
        return buttonList[0].getBoundingClientRect().width;

    /**
     * @description The highest button width that can be found.
     * @type {number}
     */
    let highestButtonWidth = 0;
    buttonList.forEach((
        button,
        index
    ) => {
        if (isNothing(button))
            return;

        if (!(button instanceof HTMLButtonElement))
            throw new TypeError(`${COMMON_TEXT_LIST.invalidArgument}buttons item at index ${index} is not a button.`);

        /**
         * @description The width of the current button.
         * @type {number}
         */
        const buttonWidth = button.getBoundingClientRect().width;

        if (buttonWidth > highestButtonWidth)
            highestButtonWidth = buttonWidth;
    });

    if (highestButtonWidth === 0)
        return undefined;

    /**
     * @description The pixel statement of the highest button width that is found.
     * @type {string}
     */
    const highestButtonWidthPixelStatement = createPixelStatement(Math.ceil(highestButtonWidth));
    buttonList.forEach(button => {
        if (!isNothing(button))
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
function KeyValuePair(
    key,
    value
) {
    //<editor-fold desc="Properties">
    // TODO How do document this?
    Object.defineProperty(
        this,
        "key",
        {
            set: value =>
                key = value,
            get: () =>
                key
        }
    );
    // TODO How do document this?
    Object.defineProperty(
        this,
        "value",
        {
            set: _value =>
                value = _value,
            get: () =>
                value
        }
    );
    //</editor-fold>
}
/**
 * @description Returns the baseline URL (from the base element).
 * @returns {string} the baseline URL (from the base element).
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function getBaselineUrl() {
    /**
     * @description The base element.
     * @type {HTMLBaseElement}
     */
    const baseElement = document.querySelectorOnlyOne("head > base");

    if (isNothing(baseElement))
        throw new OperationError("There is no base element present.");

    if (baseElement.href.isEmpty())
        throw new OperationError("There is no baseline URL present in the base element present.");

    return baseElement.href;
}

/**
 * @description Defines a table using only division elements and CSS.
 * @public
 * @version 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class CssTable {
    /**
     * @description CssTable constructor.
     * @param parent {HTMLElement|string|boolean} [parent] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be
     * used as the id of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appended to any
     * node.
     * @param {string} [className=COMMON_CSS_CLASS_NAME_LIST.table] The class name (can only be one class name).
     * @since 1.0
     */
    constructor(
        parent,
        className = COMMON_CSS_CLASS_NAME_LIST.table
    ) {
        /**
         * @description The table.
         * @type {HTMLDivElement}
         */
        this.table = createDivisionElement(parent);

        if (!isNothing(className))
            this.table.classList.set(className);

        /**
         * @description The table header row.
         * @type {HTMLDivElement}
         */
        this.headerRow = createDivisionElement(this.table);
        /**
         * @description The current table body row.
         * @type {HTMLDivElement}
         */
        this.bodyRow = null;
        /**
         * @description The number of columns.
         * @type {number}
         */
        this.columnCount = 0;
    }
    /**
     * @description Creates and returns the header row cell.
     * @param {string} [title] The title.
     * @returns {!HTMLDivElement} The header row cell.
     * @since 1.0
     */
    createHeaderRowCell(title) {
        if (this.table.childElementCount > 1)
            throw new Error("This function can only be called when no body row has been created.");

        /**
         * @description The table header row cell.
         * @type {HTMLDivElement}
         */
        const headerRowCell = createDivisionElement(this.headerRow);

        if (!isNothing(title))
            headerRowCell.appendChild(document.createTextNode(title));

        this.columnCount++;
        return headerRowCell;
    }
    /**
     * @description Creates a body row and returns its cells.
     * @returns {HTMLDivElement[]} The body row cells.
     */
    createRow() {
        this.bodyRow = createDivisionElement(this.table);
        /**
         * @description The body row cells.
         * @type {HTMLDivElement[]}
         */
        const bodyRowCellList = [];

        for (/**
              * @description The current cell index.
              * @type {number}
              */
             let cellIndex = 0;
             cellIndex < this.columnCount;
             cellIndex++
        )
            bodyRowCellList.push(createDivisionElement(this.bodyRow));

        return bodyRowCellList;
    }
}
//</editor-fold>
