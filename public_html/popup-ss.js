/* 
 * The MIT License
 *
 * Copyright 2019 manuelmilosavljevic.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


/* global CustomEventTarget */

//<editor-fold defaultstate="collapsed" desc="Popup">
// TODO Add documentation
class WindowPopup {}

// TODO Add documentation
function destroyWindowPopup(tabElement) {
    return removeNode(getWindowPopup(tabElement));
}
/**
 * @description Creates a window popup (that is to say, a full screen popup).
 * @param {HTMLElement} parent The parent
 * @returns {HTMLDivElement} The window popup.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function createWindowPopup(parent) {
    destroyWindowPopup(parent);

    const popup = createDivisionElement(parent);
    popup.classList.set(COMMON_CSS_CLASS_NAME_LIST.popup);
    return popup;
}
/**
 * @description Returns a window popup from the specified parent. If none is found one will be created.
 * @param {HTMLElement} parent The parent
 * @returns {HTMLDivElement} The window popup.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function getOrCreateWindowPopup(parent) {
    let popUp = getWindowPopup(parent);

    if (!popUp) {
        popUp = createDivisionElement(parent);
        popUp.classList.set(COMMON_CSS_CLASS_NAME_LIST.popup);
    }

    return popUp;
}
/**
 * @description Returns a window popup from the specified parent, if one can be found.
 * @param {HTMLElement} parent The parent
 * @returns {undefined|HTMLDivElement} The window popup, if one can be found.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function getWindowPopup(parent) {
    checkRequiredArgument(parent, "parent", HTMLDivElement);

    if (!(parent.classList.contains(COMMON_CSS_CLASS_NAME_LIST.activeTab) ||
            parent.classList.contains(COMMON_CSS_CLASS_NAME_LIST.inactiveTab)) ||
            !DomId.domIdMatchesTemplate(COMMON_DOM_ID_LIST.tabTemplate, parent.id))
        throw new TypeError(COMMON_TEXT_LIST.invalidArgument + "the specified tab element is not a tab.");

    return parent.selectOnlyOneChildByClassName(COMMON_CSS_CLASS_NAME_LIST.popup);
}
/**
 * @description Returns the window popup that is found in one of the parent elements of the specified child element, if one exists.
 * @param {HTMLElement} childElement The child element.
 * @returns {parentElement|HTMLDivElement} The window popup that is found in one of the parent elements of the specified child element, if one exists.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function getWindowPopupFromChildElement(childElement) {
    checkRequiredArgument(childElement, "childElement", HTMLElement);

    for (/** @description The current element. @type {HTMLElement} */
        let element = childElement; !!element &&
            !(element instanceof HTMLBodyElement); element = element.parentElement)
        if (element instanceof HTMLDivElement &&
                element.classList.contains(COMMON_CSS_CLASS_NAME_LIST.popup))
            return element;

    return undefined;
}
/**
 * @description Defines a floating popup interface.
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class FloatingPopup extends CustomEventTarget {
    /**
     * @description KeyValuePair constructor.
     * @param {HTMLElement|String|Boolean|Tab} [parent] The parent node to which to append the floating poup, if parent is an instance of HTMLElement. If the parent is a string, it will be used as the id
     * of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appeneded to any node. If the parent is an instance of
     * Tab the floating poup will be appended to the tab body.
     * @param {String} hotspotId the hotspot ID.
     * @public
     * @constructs FloatingPopup
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    constructor(parent, hotspotId) {
        super(hotspotId);

        if (isNullOrUndefined(parent))
            parent = document.body;
        else if (!(parent instanceof HTMLElement))
            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "parent", "HTMLElement"));

        // TODO Add documentation
        this.body = null;
        // TODO Add documentation
        this.parent = parent;
        // TODO Add documentation
        this.hotspotId;
    }
    // TODO Add documentation
    close() {
        removeNode(this.body);
        this.body = undefined;
    }
    // TODO Add documentation
    create() {
        if (!!this.body)
            this.close();

        this.body = createDivisionElement(parent);
        this.body.dataset.type = FloatingPopup.type;
        this.body.dataset.hotspotId = this.hotspotId;
        return this.body;
    }
    // TODO Add documentation
    open() {
        this.create();
        this.dispatchEvent(COMMON_EVENT_TYPE_LIST.create);
    }
    /**
     * @description The component type name of the floating popup (used to identify floating popups as a component).
     * @type {String}
     */
    static get type() {
        return "floating popup";
    }
}
/**
 * @description Defines a floating popup interface for simple context popups. A context popup is a simple pointy floating popup that displays only information to the user.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class ContextPopup extends FloatingPopup {
    /**
     * @description ContextPopup constructor.
     * @param {HTMLElement|String|Boolean|Tab} [parent] The parent node to which to append the floating poup, if parent is an instance of HTMLElement. If the parent is a string, it will be used as the id
     * of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appeneded to any node. If the parent is an instance of
     * Tab the floating poup will be appended to the tab body.
     * @param {String} hotspotId the hotspot ID.
     * @public
     * @constructs ContextPopup
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    constructor(parent, hotspotId) {
        super(parent, hotspotId);
    }
    // TODO Add documentation
    close() {
        this.dispatchEvent(COMMON_EVENT_TYPE_LIST.destroy);
        super.close();
    }
    // TODO Add documentation
    create() {
        const contextPopupBody = super.create();
        const contextPopupBodyPointer = createDivisionElement(contextPopupBody);
        contextPopupBodyPointer.classList.set(COMMON_CSS_CLASS_NAME_LIST.pointer);
        createDivisionElement(contextPopupBodyPointer); // The arrow
        return contextPopupBody;
    }
}
/**
 * @description Defines a floating popup inferface for context menus. A context menu is a simple pointy floating popup that displays a list of choices to the user.
 * @param {HTMLElement|String|Boolean|Tab} [parent] The parent node to which to append the floating poup, if parent is an instance of HTMLElement. If the parent is a string, it will be used as the id
 * of the parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appeneded to any node. If the parent is an instance of
 * Tab the floating poup will be appended to the tab body.
 * @param {String} hotspotId the hotspot ID.
 * @public
 * @class ContextMenu
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function ContextMenu(parent, hotspotId) {
    FloatingPopup.call(this, parent, hotspotId);

    // TODO Add documentation
    this.addOption = (text, addIcon) => {
        checkRequiredString(text, "text");

        // TODO Add documentation
        const defaultContextMenuListItem = _contextMenuBodyList.createItemElement();

        if (isNullOrUndefined(addIcon))
            addIcon = false;
        else if (!isBoolean(addIcon))
            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "addIcon", "Boolean"));

        if (addIcon)
            createParagraphElement(defaultContextMenuListItem);

//        defaultContextMenuListItem.dataset.name = name;
        createParagraphElement(defaultContextMenuListItem, text);
        return defaultContextMenuListItem;
    };
    // TODO Add documentation
    this.addGroup = text => {
        checkRequiredString(text, "text");

        // TODO Add documentation
        const defaultContextMenuListItem = _contextMenuBodyList.createItemElement();
        defaultContextMenuListItem.classList.set("group");
        createParagraphElement(defaultContextMenuListItem, text);
        return defaultContextMenuListItem;
    };
    // TODO Add documentation
    this.deselect = () => {
        // TODO Add documentation
        const selectedContextMenuListItem = _contextMenuBodyList.getElementByClassName(COMMON_CSS_CLASS_NAME_LIST.selected);

        if (!!selectedContextMenuListItem)
            _contextMenuBodyList.classList.remove(COMMON_CSS_CLASS_NAME_LIST.selected);
    };
    // TODO Add documentation
    this.selectListItem = name => {
        if (isNullOrUndefined(name))
            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentCannotBeNullorUndefinedTemplate, "contextPopup"));

        // TODO Add documentation
        let contextMenuListItem;

        if (isString(name)) {
            contextMenuListItem = this.list.querySelectorOnlyOne("li" + createQueryDataNameAttribute("delete all"));

            if (!contextMenuListItem)
                throw `Context menu list item with the name ${quoteString(name)} has not been found.`;
        } else if (name instanceof HTMLLIElement) {
            if (name.parentElement !== contextMenuListItem)
                throw new Error(createStringFromTemplate("The specified context menu list item doesn't belong to this context menu."));

            contextMenuListItem = name;
            name = contextMenuListItem.dataset.name;
        } else
            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "contextPopup", "String (or HTMLLIElement)"));

        // TODO Add documentation
        const selectedContextMenuListItem = _contextMenuBodyList.getElementByClassName(COMMON_CSS_CLASS_NAME_LIST.selected);

        if (!!selectedContextMenuListItem) {
            if (selectedContextMenuListItem === contextMenuListItem)
                return;

            _contextMenuBodyList.classList.remove(COMMON_CSS_CLASS_NAME_LIST.selected);
        }

        contextMenuListItem.classList.set(COMMON_CSS_CLASS_NAME_LIST.selected);
    };
    // TODO Add documentation
    this.close = (parentMethod =>
        () => {
            this.dispatchEvent(COMMON_EVENT_TYPE_LIST.destroy);
            parentMethod.call(this);
        }
    )(this.close);
    // TODO Add documentation
    this.create = (parentMethod =>
        () => {
            // TODO Add documentation
            const contextMenuBody = parentMethod.call(this);
            contextMenuBody.classList.set(COMMON_CSS_CLASS_NAME_LIST.defaultContextMenu);
            _contextMenuBodyList = createUnorderedListElement(contextMenuBody);
            return contextMenuBody;
        }
    )(this.create);
    // TODO Add documentation
    this.clearList = () => removeNodes(_contextMenuBodyList.children);

    // TODO Add documentation
    let _contextMenuBodyList;
    Object.defineProperty(this, "list", {
        get: () => _contextMenuBodyList
    });
    // TODO Add documentation
    this.autoRefresh = true;
}
// TODO Add documentation
FloatingPopup.position = (body, hotspot, isCentered) => {
    if (!("type" in body.dataset &&
            body.dataset.type === FloatingPopup.type))
        throw new Error("No valid floating popup body has been specified.");

    if (!("hotspotId" in body.dataset &&
            ClientId.isValid(body.dataset.hotspotId)))
        throw new Error("The specified floating popup body doesn't have a valid hotspot ID specified.");

    // TODO Add documentation
    let bodyPointerArrow;
    // TODO Add documentation
    let bodyPointerArrowBoundingClientRectangles = undefined;
    // TODO Add documentation
    let hasPointer;

    if (!body.children.isEmpty()) {
        hasPointer = !isNullOrUndefined(bodyPointerArrow = body.querySelector(createStringFromTemplate(".@ > div:empty", COMMON_CSS_CLASS_NAME_LIST.pointer)));

        if (body.children.length !== 1 &&
                bodyPointerArrow.parentElement === body.children.getLast())
            body.insertBefore(bodyPointerArrow.parentElement, body.children.getFirst());
    } else
        hasPointer = false;

    if (hasPointer) {
        bodyPointerArrow.style.margin = "";
        bodyPointerArrowBoundingClientRectangles = bodyPointerArrow.getBoundingClientRect();
    } else {
        bodyPointerArrow = undefined;
        bodyPointerArrowBoundingClientRectangles = undefined;
    }

    body.style.top = "";
    body.style.right = "";
    body.style.bottom = "";
    body.style.left = "";

    // TODO Add documentation
    const bodyWidth = body.getBoxWidth();
    // TODO Add documentation
    const bodyHeight = body.getBoxHeight();
    body.style.height = createPixelStatement(body.getBoxHeight());
    body.style.width = createPixelStatement(bodyWidth);

    // TODO Add documentation
    const hotspotBoundingClientRectangles = hotspot.getBoundingClientRect();
    // TODO Add documentation
    const bodyBoundingClientRectangles = body.getBoundingClientRect();
    // TODO Add documentation
    let idealBodyTopPosition = hotspotBoundingClientRectangles.top + hotspotBoundingClientRectangles.height;
    body.style.top = createPixelStatement(idealBodyTopPosition);

    // TODO Add documentation
    let idealBodyLeftPosition = isCentered ?
        hotspotBoundingClientRectangles.left - ((bodyBoundingClientRectangles.width / 2) - (hotspotBoundingClientRectangles.width / 2)) :
        hotspotBoundingClientRectangles.left;
    body.style.left = createPixelStatement(idealBodyLeftPosition);

    // Check if the context menu is not entirely vertically visible in the viewport:
    if (idealBodyTopPosition + bodyHeight > document.body.getHeight()) {
        // TODO The pointer has to be replaced from top to bottom

        body.insertAfter(bodyPointerArrow, body.children.getLast());
        idealBodyTopPosition = hotspotBoundingClientRectangles.top - bodyHeight;

        if (idealBodyTopPosition >= 0)
            body.style.top = createPixelStatement(idealBodyTopPosition);
        else {
            // TODO Go full screen and return
            debugger;
        }
    }

    // Check if the floating popup body is not entirely horizontally visible in the viewport:
    if (idealBodyLeftPosition + bodyWidth > document.body.getWidth()) {
        if (hasPointer) {
            bodyPointerArrowBoundingClientRectangles = bodyPointerArrow.getBoundingClientRect();
            body.style.left = createPixelStatement(idealBodyLeftPosition -= ((idealBodyLeftPosition + bodyWidth) - document.body.getWidth()));
            bodyPointerArrow.style.margin = (createPixelStatement(0) + "\u0020").multiply(3) + createPixelStatement(
                    ((bodyWidth / 2) -
                    (bodyPointerArrowBoundingClientRectangles.width / 2)) +
                    (bodyPointerArrowBoundingClientRectangles.left - bodyPointerArrow.getBoundingClientRect().left)
            );
        } else
            body.style.left = createPixelStatement(idealBodyLeftPosition -= ((idealBodyLeftPosition + bodyWidth) - document.body.getWidth()));

        if (idealBodyLeftPosition + bodyWidth > document.body.getWidth()) {
            // TODO Go full screen and return
            debugger;
        }
    }
};
/**
 * @description Defines a manager for the manipulation of context menus.
 * @class FloatingPopupManager
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function FloatingPopupManager() { // TODO Add @throw tags.
    /**
     * @description Checks if the specified element is the body of a floating popup.
     * @param {HTMLElement} element The element.
     * @returns {Boolean} If the specified element is the body of a floating popup.
     * @private
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    function isFloatingPopupBody(element) {
        return element instanceof HTMLDivElement &&
            !element.dataset.isPropertyNullOrUndefined("type") &&
            !element.dataset.isPropertyNullOrUndefined("hotspotId") &&
            element.dataset.type === FloatingPopup.type;
    }
    /**
     * @description Returns the body of the floating popup, if one exists in either the specified element or one of its parent elements.
     * @param {HTMLElement} element The element.
     * @returns {HTMLElement|undefined} The body of the floating popup, if one exists in either the specified element or one of its parent elements.
     * @private
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    function getFloatingPopupBody(element) {
        for (; !!element &&
                !(element instanceof HTMLBodyElement); element = element.parentElement)
            if (isFloatingPopupBody(element))
                return element;

        return undefined;
    }
    /**
     * @description Returns the element that has a hotspot ID, if one exists in either the specified element or one of its parent elements.
     * @param {HTMLElement} element The element.
     * @returns {HTMLElement|undefined} The element that has a hotspot ID, if one exists in either the specified element or one of its parent elements.
     * @private
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    function getHotspotIdentifier(element) {
        for (; !!element &&
                !(element instanceof HTMLBodyElement); element = element.parentElement)
            if (!element.dataset.isPropertyNullOrUndefined("hotspotId"))
                return element;

        return undefined;
    }
    /**
     * @description Returns the index of the floating popup registration with the specified hotspot ID.
     * @param {String} hotspotId The hotspot ID.
     * @returns {Number|undefined}
     * @private
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    function getRegistrationIndex(hotspotId) {
        for (let registrationIndex = 0; registrationIndex < _registrations.length; registrationIndex++) 
        {
            // TODO Add documentation
            const registration = _registrations[registrationIndex];

            if (registration.floatingPopup.hotspotId === hotspotId)
                return registrationIndex;
        }

        return undefined;
    }
    /**
     * @description Returns the hotspot of the specified name (in the dataset) between the specified starting element and ending element, if one is found.
     * @param {HTMLElement} startElement The starting element.
     * @param {HTMLElement} endElement The ending element.
     * @param {String} name The name.
     * @returns {HTMLElement|undefined} The hotspot of the specified name (in the dataset) between the specified starting element and ending element, if one is found.
     * @private
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    function getHotspotByName(startElement, endElement, name) {
        for (let element = startElement; !!element &&
                element !== endElement.parentElement; element = element.parentElement)
            if (!element.dataset.isPropertyNullOrUndefined("name") &&
                    element.dataset.name === name)
                return element;

        return undefined;
    }
    /**
     * @description Returns the hotspot with the specified class names between the specified starting element and ending element, if one is found.
     * @param {HTMLElement} startElement The starting element.
     * @param {HTMLElement} endElement The ending element.
     * @param {Array} classNames The class names.
     * @returns {HTMLElement|undefined} The hotspot with the specified class names between the specified starting element and ending element, if one is found.
     * @private
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    function getHotspotByClassNames(startElement, endElement, classNames) {
        checkElement: for (let element = startElement; !!element &&
                element !== endElement.parentElement; element = element.parentElement)
            if (element.classList.length >= classNames.length) {
                for (let classNameIndex = 0; classNameIndex < classNames.length; classNameIndex++)
                    if (!element.classList.contains(classNames[classNameIndex]))
                        continue checkElement;

                return element;
            }

        return undefined;
    }
    /**
     * @description Returns the hotspot of the specified tag name between the specified starting element and ending element, if one is found.
     * @param {HTMLElement} startElement The starting element.
     * @param {HTMLElement} endElement The ending element.
     * @param {String} tagName The tag name.
     * @returns {HTMLElement|undefined} The specified tag name between the specified starting element and ending element, if one is found.
     * @private
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    function getHotspotByTagName(startElement, endElement, tagName) {
        for (let element = startElement; !!element &&
                element !== endElement.parentElement; element = element.parentElement)
            if (element.tagName === tagName)
                return element;

        return undefined;
    }
    /**
     * @description Creates a new floating popup registration.
     * @param {FloatingPopup|ContextPopup|ContextMenu} floatingPopup The floating popup.
     * @param {Boolean} [isCentered=true] If the floating popup should be centered in relationship to the hotspot.
     * @param {String} [description] A description (for use only in debug mode).
     * @returns {FloatingPopupManager.Registration} The new floating popup registration.
     * @throws {String} If the specified floating popup has already been added.
     * @throws {TypeError} If isCentered is not a boolean.
     * @private
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    function createRegistration(floatingPopup, isCentered, description) {
        if (isNullOrUndefined(floatingPopup))
            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentCannotBeNullorUndefinedTemplate, "floatingPopup"));

        _registrations.forEach((registration, index) => {
            if (isNullOrUndefined(document.querySelector(createQueryAttribute("data-hotspot-id", registration.floatingPopup.hotspotId))))
                _registrations.splice(index, 1);
            else if (registration.floatingPopup.hotspotId === floatingPopup.hotspotId)
                throw `The specified floating popup (with hotspot ID ${quoteString(floatingPopup.hotspotId)}) has already been added.`;
        });

        if (isNullOrUndefined(isCentered))
            isCentered = true;
        else if (!isBoolean(isCentered))
            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "isCentered", "boolean"));

        // TODO Add documentation
        const registration = {
            floatingPopup: floatingPopup,
            isCentered: isCentered
        };
        _registrations.push(registration);

        if (ENABLE_DEBUG_MODE)
            registration.description = description;

        return registration;
    }

    CustomEventTarget.call(this);

    /**
     * @description A reference to <code>this</code>.
     * @type {FloatingPopupManager}
     */
    const _floatingPopupManager = this;
    /**
     * @typedef {Object} FloatingPopupManager.Registration A floating popup registration.
     * @property {FloatingPopup|ContextPopup|ContextMenu} floatingPopup The floating popup.
     * @property {Boolean} isCentered If the floating popup should be centered in relationship to the hotspot.
     * @property {type} [description] A description (for use only in debug mode).
     * @private
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    /**
     * @description A list of floating popup registrations.
     * @type {Array<FloatingPopupManager.Registration>}
     */
    const _registrations = [];
    // TODO Add documentation
    let _activeRegistrationIndex;
    // TODO Add documentation
    let _activeHotspot;
    // TODO Add documentation
    let _deactivationTimeoutId;

    /**
     * @description Checks if a floating popup registration with the specified hotspot ID exists.
     * @param {String} hotspotId The hotspot ID.
     * @returns {Boolean} If a floating popup registration with the specified hotspot ID exists.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.hasRegistration = hotspotId => {
        ClientId.check(hotspotId);
        return !_registrations.loop(registration => registration.floatingPopup.hotspotId !== hotspotId);
    };
    /**
     * @description Registers a new floating popup registration by name (an element must have this name set in its dataset).
     * @param {FloatingPopup|ContextPopup|ContextMenu} floatingPopup The floating popup.
     * @param {String} name The name.
     * @param {Boolean} [isCentered=true] If the floating popup should be centered in relationship to the hotspot.
     * @param {String} [description] A description (for use only in debug mode).
     * @returns {undefined}
     * @throws {TypeError} If the specified name is null, undefined, not a string or empty.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.registerByName = (floatingPopup, name, isCentered, description) => {
        checkRequiredString(name, "name");

        // TODO Add documentation
        const registration = createRegistration(floatingPopup, isCentered, description);
        registration.name = name;
    };
    /**
     * @description Registers a new floating popup registration by class name(s).
     * @param {FloatingPopup|ContextPopup|ContextMenu} floatingPopup The floating popup.
     * @param {Array} classNames The class name(s).
     * @param {Boolean} [isCentered=true] If the floating popup should be centered in relationship to the hotspot.
     * @param {String} [description] A description (for use only in debug mode).
     * @returns {undefined}
     * @throws {TypeError} If the specified class names is null, undefined or not an array.
     * @throws {Error} If the specified class names is empty.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.registerByClassName = (floatingPopup, classNames, isCentered, description) => {
        // TODO Add documentation
        const registration = createRegistration(floatingPopup, isCentered, description);

        if (isNullOrUndefined(classNames))
            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentCannotBeNullorUndefinedTemplate, "classNames"));

        if (isString(classNames))
            registration.classNames = [classNames];
        else if (classNames instanceof Array) {
            if (classNames.isEmpty())
                throw new Error(COMMON_TEXT_LIST.invalidArgument + "classNames cannot be empty.");

            registration.classNames = classNames;
        } else
            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "classNames", "Array"));
    };
    /**
     * @description Registers a new floating popup registration by tag name.
     * @param {FloatingPopup|ContextPopup|ContextMenu} floatingPopup The floating popup.
     * @param {Array} tagName The tag name.
     * @param {Boolean} [isCentered=true] If the floating popup should be centered in relationship to the hotspot.
     * @param {String} [description] A description (for use only in debug mode).
     * @returns {undefined}
     * @throws {TypeError} If the specified name is null, undefined, not a string or empty.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.registerByTagName = (floatingPopup, tagName, isCentered, description) => {
        // TODO Add documentation
        const registration = createRegistration(floatingPopup, isCentered, description);

        if (isNullOrUndefined(tagName))
            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentCannotBeNullorUndefinedTemplate, "tagName"));

        if (!isString(tagName)) {
            if (tagName instanceof HTMLElement)
                tagName = tagName.tagName;
            else
                throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "tagName", "string"));
        } else if ((tagName = tagName.trim()).isEmpty())
            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidStringArgumentCannotBeEmpty, "tagName"));

        registration.tagName = tagName.toUpperCase();
    };
    /**
     * @description Registers a new floating popup registration with a delegate hotspot ID (that is to say, a hotspot that is not.
     * @param {FloatingPopup|ContextPopup|ContextMenu} floatingPopup The floating popup.
     * @param {String} delegateId The delegate ID.
     * @param {Boolean} [isCentered=true] If the floating popup should be centered in relationship to the hotspot.
     * @param {String} [description] A description (for use only in debug mode).
     * @returns {undefined}
     * @throws {TypeError} If the specified delegate ID is null, undefined or not a string.
     * @throws {Error} If the specified delgate ID is empty or not a valid DOM ID.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.registerByDelegateId = (floatingPopup, delegateId, isCentered, description) => {
        // TODO Add documentation
        const registration = createRegistration(floatingPopup, isCentered, description);

        if (isNullOrUndefined(delegateId))
            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentCannotBeNullorUndefinedTemplate, "delegateId"));

        if (!DomId.isValid(delegateId))
            throw new Error(COMMON_TEXT_LIST.invalidArgument + quoteString(delegateId) + " is not a valid client ID.");

        registration.delegateId = delegateId;
    };
    /**
     * @description Deactivates the active floating popup.
     * @param {Boolean} [force=false] If the deactivation should be enforced. If not, the deactivation will be delayed a bit (as specified by MILLISECONDS_BEFORE_POPUP_DEACTIVATION in options.js).
     * @returns {undefined}
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.deactivateFloatingPopup = force => {
        /**
         * @description Deactivates the active floating popup immediately – that is to say, without any delay.
         * @returns {undefined}
         * @private
         * @since 1.0
         * @author Manuel Milosavljević <manuel@synergystructure.com>
         */
        function deactivateFloatingPopupImmediately() {
            if (!isNullOrUndefined(_activeRegistrationIndex)) {
                _registrations[_activeRegistrationIndex].floatingPopup.close();
                _activeRegistrationIndex = undefined;
                _activeHotspot = undefined;
                _deactivationTimeoutId = undefined;
            }
        }

        if (!isNullOrUndefined(_activeRegistrationIndex)) {
            if (force) {
                deactivateFloatingPopupImmediately();
            } else {
                if (!isNullOrUndefined(_deactivationTimeoutId))
                    clearTimeout(_deactivationTimeoutId);

                _deactivationTimeoutId = setTimeout(deactivateFloatingPopupImmediately, MILLISECONDS_BEFORE_POPUP_DEACTIVATION);
            }
        }
    };
    /**
     * @description Returns the registered floating popup with the specified hotspot ID, if one exists.
     * @param {String} hotspotId The hotspot ID.
     * @returns {undefined|FloatingPopupManager.Registration} The registered floating popup with the specified hotspot ID, if one exists. 
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.getRegisteredFloatingPopup = hotspotId => {
        ClientId.check(hotspotId);

        for (let registrationIndex = 0; registrationIndex < _registrations.length; registrationIndex++) {
            const registration = _registrations[registrationIndex];

            if (registration.floatingPopup.hotspotId === hotspotId)
                return registration.floatingPopup;
        }

        return undefined;
    };
    /**
     * @description Returns the active floating popup, if there is one.
     * @returns {FloatingPopup|ContextPopup|ContextMenu|undefined} The active floating popup, if there is one.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.getActiveFloatingPopup = () => !isNullOrUndefined(_activeRegistrationIndex) &&
            isNullOrUndefined(_deactivationTimeoutId) ?
            _registrations[_activeRegistrationIndex].contextPopup :
            undefined;
    this.addEventListener(COMMON_EVENT_TYPE_LIST.click, mouseEvent => {
        // TODO Add documentation
        const contextPopupBody = getFloatingPopupBody(mouseEvent.target);

        if (!contextPopupBody)
            return true;

        // TODO Add documentation
        const registrationIndex = getRegistrationIndex(contextPopupBody.dataset.hotspotId);

        if (isNullOrUndefined(registrationIndex))
            return true;

        // TODO Add documentation
        const floatingPopup = _registrations[registrationIndex].floatingPopup;
        floatingPopup.dispatchEvent(COMMON_EVENT_TYPE_LIST.click, mouseEvent);

        if (floatingPopup.autoRefresh) {
            try {
                removeNodes(floatingPopup.body.childNodes);
//                floatingPopup.dispatchEvent(COMMON_EVENT_TYPES.create, "refresh");
            } 
            catch(err) {
                // TODO What to do about this?
//                  geen actie noodzakelijk
            }
        }

        return false;
    });
    this.addEventListener(COMMON_EVENT_TYPE_LIST.resize, () => {
        if (!isNullOrUndefined(_activeRegistrationIndex) &&
                !isNullOrUndefined(_activeHotspot)) {
            /**
             * @description The active floating popup registration.
             * @type {FloatingPopupManager.Registration}
             */
            const registration = _registrations[_activeRegistrationIndex];
            FloatingPopup.position(registration.floatingPopup.body, _activeHotspot, registration.isCentered);
        }
    });
    this.addEventListener(COMMON_EVENT_TYPE_LIST.mouse.over, mouseEvent => {
        if (_registrations.isEmpty())
            return true;

        {
            // TODO Add documentation
            const contextPopupBody = getFloatingPopupBody(mouseEvent.target);

            if (!!contextPopupBody) {
                if (isNullOrUndefined(_activeRegistrationIndex))
                    throw new Error("Context popup has been found but it's not activated.");

                // TODO Add documentation
                const registration = _registrations[_activeRegistrationIndex];

                if (registration.floatingPopup.body !== contextPopupBody)
                    throw new Error("Context popup has been found but it's not registered.");

                if (!isNullOrUndefined(_deactivationTimeoutId))
                    clearTimeout(_deactivationTimeoutId);

                return true;
            }
        }

        /**
         * @description The element that has a hotspot ID, if one exists in either the specified element or one of its parent elements.
         * @type {HTMLElement|undefined}
         */
        const hotspotIdentifier = getHotspotIdentifier(mouseEvent.target);

        if (!hotspotIdentifier) {
            _floatingPopupManager.deactivateFloatingPopup(false);
            return true;
        }

        /**
         * @description The index of the floating popup registration with the specified hotspot ID.
         * @type {Number|undefined}
         */
        const registrationIndex = getRegistrationIndex(hotspotIdentifier.dataset.hotspotId);

        if (isNullOrUndefined(registrationIndex)) {
            _floatingPopupManager.deactivateFloatingPopup(false);
            return true;
        }

        /**
         * @description The floating popup registration at the {@link registrationIndex}.
         * @type {FloatingPopupManager.Registration}
         */
        const registration = _registrations[registrationIndex];
        // TODO Add documentation
        const hotspot = !registration.isPropertyNullOrUndefined("name") ?
            getHotspotByName(mouseEvent.target, hotspotIdentifier, registration.name) :
            !registration.isPropertyNullOrUndefined("classNames") ?
            getHotspotByClassNames(mouseEvent.target, hotspotIdentifier, registration.classNames) :
            !registration.isPropertyNullOrUndefined("delegateId") ?
            document.getElementById(registration.delegateId) :
            getHotspotByTagName(mouseEvent.target, hotspotIdentifier, registration.tagName);

        if (!hotspot) {
            _floatingPopupManager.deactivateFloatingPopup();
            return true;
        }

        if (!registration.floatingPopup.dispatchEvent(COMMON_EVENT_TYPE_LIST.show)) {
            registration.floatingPopup.close();

            if (!isNullOrUndefined(_activeRegistrationIndex) &&
                    _activeRegistrationIndex === registrationIndex) {
                _activeRegistrationIndex = undefined;
                _activeHotspot = undefined;
            }
        } else if (isNullOrUndefined(_activeRegistrationIndex)) {
            registration.floatingPopup.open();
            _activeRegistrationIndex = registrationIndex;
            FloatingPopup.position(registration.floatingPopup.body, _activeHotspot = hotspot, registration.isCentered);
            return false;
        } else if (_activeRegistrationIndex !== registrationIndex) {
            _floatingPopupManager.deactivateFloatingPopup(true);
            _activeRegistrationIndex = registrationIndex;
            registration.floatingPopup.open();
            FloatingPopup.position(registration.floatingPopup.body, _activeHotspot = hotspot, registration.isCentered);
            return false;
        }

        return true;
    });
}
//</editor-fold>