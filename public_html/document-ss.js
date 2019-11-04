/*!
 * Synergy Structure JavaScript framework v0.8.0
 * http://synergystructure.com/
 *
 * Copyright Synergy Stucture and other contributors
 * Released under the MIT license
 * http://synergystructure.com/license
 */

"use strict";

//<editor-fold defaultstate="collapsed" desc="Basic">
/* global QueryParameterList */
/* global ClientId */
/* global COMMON_TEXT_LIST */
/* global Function */
/* global DomId */
/* global COMMON_DOM_ID_LIST */
/* global COMMON_CSS_CLASS_NAME_LIST */
/* global COMMON_EVENT_TYPE_LIST */
/* global CustomEventTarget, COMMON_PARAMETER_NAME_LIST, HTMLBodyElement, HTMLDivElement */
//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="Tab & Tab Manager">
/**
 * @description The method to execute when a tab document needs to be activated.
 * @callback TabActivateDocumentCallback
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * @description The method to execute when a tab document needs to be deactivated.
 * @callback TabDeactivateDocumentCallback
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * @description The method to execute in response to RWD (Responsive Web Design) changes in the document, such as when the window has been resized.
 * @callback RespondToChangesCallback
 * @param {RwdMeta} rwdName RWD meta information.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * @description Defines a tab for a document.
 * @param {String} [id] The ID of the tab (if not specified, one will be generated).
 * @param {String} [documentName] The name of the document.
 * @param {String} [title] The title of the tab or document.
 * @param {String} [className] The class name to use for the document body. 
 * @param {HeaderConfiguration} [headerConfiguration] Header configuration.
 * @param {TabActivateDocumentCallback} [activateDocument] The method to execute when the tab document needs to be activated.
 * @param {TabDeactivateDocumentCallback} [deactivateDocument] The method to execute when the tab document needs to be deactived.
 * @param {RespondToChangesCallback} [respondToChanges] The method to execute in response to RWD changes.
 * @throws {TypeError} If the specified ID is not null, undefined and not an instance of string.
 * @throws {TypeError} If the specified name is not a string or an empty string.
 * @throws {String} If the specified name is not a known document name.
 * @throws {TypeError} If either the specified activate-document, deactivate-document or the RWD callback is null, undefined or a not instance of Function.
 * @throws {TypeError} If the specified title is null, undefined or not a string.
 * @throws {TypeError} If the specified class name is null, undefined or not a string.
 * @throws {TypeError} If the specified function to execute when the height and/or width of the document has changed and/or when RWD content needs to be created or adjusted is null, undefined or not
 * a string.
 * @public
 * @class Tab
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function Tab(id, documentName, title, className, headerConfiguration, activateDocument, deactivateDocument, respondToChanges) {
    /**
     * @description Updates the URL with the parameters from this tab.
     * @returns {undefined}
     * @private
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    function updateUrl() {
        GLOBAL_EVENT_LISTENER.dispatchEvent(Tab.urlUpdateEventName, _queryParameterList, _tab);
    }
    /**
     * @description Checks the class name specified by the user.
     * @param {String} value The class name as specified by the user.
     * @returns {undefined}
     * @throws {TypeError} If the specified value is null, undefined or not a string.
     * @private
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    function checkClassName(value) {
        if (!isNullOrUndefined(value) &&
                !isString(value))
            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "className", "string"));
    }
    /**
     * @description Checks the title specified by the user.
     * @param {String} value The title as specified by the user.
     * @returns {undefined}
     * @throws {TypeError} If the specified value is null, undefined or not a string.
     * @private
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    function checkTitle(value) {
        if (!isNullOrUndefined(value) &&
                !isString(value))
            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "title", "string"));
    }
    /**
     * @description Checks the activate-document callback specified by the user.
     * @param {TabActivateDocumentCallback} value The activate-document callback as specified by the user.
     * @returns {undefined}
     * @throws {TypeError} If the specified value is null, undefined or not a Function.
     * @private
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    function checkActivateDocument(value) {
        if (!isNullOrUndefined(value) &&
                !(value instanceof Function))
            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "activateDocument", "Function"));
    }
    /**
     * @description Checks the deactivate-document callback specified by the user.
     * @param {TabDeactivateDocumentCallback} value The deactivate-document callback as specified by the user.
     * @returns {undefined}
     * @throws {TypeError} If the specified value is null, undefined or not a Function.
     * @private
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    function checkDeactivateDocument(value) {
        if (!isNullOrUndefined(value) &&
                !(value instanceof Function))
            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "deactivateDocument", "Function"));
    }
    /**
     * @description Checks the RWD callback specified by the user.
     * @param {RespondToChangesCallback} value The RWD callback as specified by the user.
     * @returns {undefined}
     * @throws {TypeError} If the specified value is null, undefined or not a Function.
     * @private
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    function checkRespondToChanges(value) {
        if (!isNullOrUndefined(value) &&
                !(value instanceof Function))
            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "respondToChanges", "Function"));
    }
    // TODO Add documentation
    function hasBody() {
        return !!_body ||
                !isNullOrUndefined(_body = document.getElementByDomIdFromTemplate(COMMON_DOM_ID_LIST.tabTemplate, id));
    }

    /**
     * @description A reference to <code>this</code>.
     * @type {Tab}
     */
    const _tab = this;
    /**
     * The creation date of this tab.
     * @type {Date}
     */
    const _created = new Date();
    /**
     * The query parameter list.
     * @type {QueryParameterList}
     */
    const _queryParameterList = new QueryParameterList();
    /**
     * The date on which this tab was last used.
     * @type {Date}
     */
    let _lastUsed = _created;
    /**
     * The body of this tab.
     * @type {HTMLDivElement}
     */
    let _body;

    if (isNullOrUndefined(id))
        id = ClientId.generate();
    else if (!isString(id))
        throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "id", "string"));
    else if ((id = id.trim()).isEmpty())
        id = ClientId.generate();

    checkTitle(title);
    checkClassName(className);
    checkActivateDocument(activateDocument);
    checkDeactivateDocument(deactivateDocument);
    checkRespondToChanges(respondToChanges);
    Object.defineProperty(this, "id", {
        get: () => id
    });
    Object.defineProperty(this, "name", {
        get: ()=> documentName
    });
    Object.defineProperty(this, "title", {
        set: value => {
            checkTitle(value);
            title = value;

            if (hasBody() &&
                    _body.classList.contains(COMMON_CSS_CLASS_NAME_LIST.activeTab))
                GLOBAL_EVENT_LISTENER.dispatchEvent(Tab.setApplicationSubTitleEventName, _tab.title);
        },
        get: () => title
    });
    Object.defineProperty(this, "className", {
        set: value => {
            checkClassName(value);
            className = value;

            if (hasBody() &&
                    _body.classList.contains(COMMON_CSS_CLASS_NAME_LIST.activeTab)) {
                _tab.body.classList.set(COMMON_CSS_CLASS_NAME_LIST.activeTab);
                _tab.body.classList.add(className);
            }
        },
        get: () => className
    });
    Object.defineProperty(this, "headerConfiguration", {
        set: value => headerConfiguration = value,
        get: () => headerConfiguration
    });
    Object.defineProperty(this, "activateDocument", {
        set: value => {
            checkActivateDocument(value);
            activateDocument = value;
        },
        get: () => () => {
            _lastUsed = new Date();
            updateUrl();

            if (!!_tab.title)
                GLOBAL_EVENT_LISTENER.dispatchEvent(Tab.setApplicationSubTitleEventName, _tab.title);

            return !activateDocument ?
                undefined :
                activateDocument();
        }
    });
    Object.defineProperty(this, "deactivateDocument", {
        set: value => {
            checkDeactivateDocument(value);
            deactivateDocument = value;
        },
        get: () => () => {
            QueryParameterList.clearUrlQueryParameterList();
            GLOBAL_EVENT_LISTENER.dispatchEvent(Tab.resetApplicationTitleEventName);
            return !deactivateDocument ?
                undefined :
                deactivateDocument();
        }
    });
    Object.defineProperty(this, "respondToChanges", {
        set: value => {
            checkRespondToChanges(value);
            respondToChanges = value;
        },
        get: () => respondToChanges
    });
    Object.defineProperty(this, "created", {
        get: () => _created
    });
    Object.defineProperty(this, "lastUsed", {
        get: () => _lastUsed
    });
    Object.defineProperty(this, "body", {
        get: () => {
            if (!hasBody())
                throw "The body of the tab is missing.";

            return _body;
        }
    });
    /**
     * @description Clears the body from any contents.
     * @returns {undefined}
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.clearBody = () => {
        if (!!_body) {
            // TODO Add documentation
            const tabClassName = _body.classList.contains(COMMON_CSS_CLASS_NAME_LIST.activeTab) ?
                COMMON_CSS_CLASS_NAME_LIST.activeTab :
                COMMON_CSS_CLASS_NAME_LIST.inactiveTab;
            _body.removeChildren();
            _body.removeAllAttributes();
            _body.id = DomId.createFromTemplate(COMMON_DOM_ID_LIST.tabTemplate, _tab.id);
            _body.classList.set(tabClassName);

            if (!!_tab.className)
                _body.classList.add(_tab.className);
        }

        _tab.parameterList.clear();

        if (!isNullOrUndefined(documentName))
            _tab.parameterList.set(COMMON_PARAMETER_NAME_LIST.documentName, documentName);
    };
    /**
     * @description If this tab is a page.
     * @returns {unresolved}
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.isPage = () => isNullOrUndefined(documentName);
    /**
     * @description Provides access to URL query parameters.
     * @type {Object}
     */
    this.parameterList = {
        /**
         * @description Sets the specified parameters and updates the URL.
         * @param {String} name The parameter name.
         * @param {String|Number|Boolean} value The parameter value.
         * @returns {undefined}
         * @public
         * @since 1.0
         * @author Manuel Milosavljević <manuel@synergystructure.com>
         */
        set: (name, value) => {
            // TODO Add documentation
            const hasBeenSet = _queryParameterList.set(name, value);
            updateUrl();
            return hasBeenSet;
        },
        /**
        * @description Returns a string parameter value with the specified name.
        * @param {String} name The parameter name.
        * @returns {string|undefined} The parameter value (if one is found).
        * @public
        * @since 1.0
        * @author Manuel Milosavljević <manuel@synergystructure.com>
        */
        getString: name => _queryParameterList.getString(name),
        /**
        * @description Returns a number parameter value with the specified name.
        * @param {String} name The parameter name.
        * @param {Number} radix The radix (or base) of the parameter value.
        * @returns {Number|undefined} The parameter value (if one is found).
        * @public
        * @since 1.0
        * @author Manuel Milosavljević <manuel@synergystructure.com>
        */
        getNumber: (name, radix) => _queryParameterList.getNumber(name, radix),
        /**
        * @description Returns a boolean parameter value with the specified name.
        * @param {String} name The parameter name.
        * @returns {boolean|undefined} The parameter value (if one is found).
        * @public
        * @since 1.0
        * @author Manuel Milosavljević <manuel@synergystructure.com>
        */
        getBoolean: name => _queryParameterList.getBoolean(name),
        /**
        * @description Deletes a parameter with the specified name and updates the URL (if the parameter has been found and deleted).
        * @param {String} name The paramter name.
        * @returns {Boolean} If the parameter has been deleted.
        * @public
        * @since 1.0
        * @author Manuel Milosavljević <manuel@synergystructure.com>
        */
        delete: name => {
            if (_queryParameterList.delete(name)) {
                updateUrl();
                return true;
            }

            return false;
        },
        /**
         * @description Checks if a parameter exists.
         * @param {String} name The name of the parameter to look for.
         * @returns {Boolean} If the the parameter exists.
         * @public
         * @since 1.0
         * @author Manuel Milosavljević <manuel@synergystructure.com>
         */
        has: name => _queryParameterList.has(name),
        /**
        * @description Clears all parameters, except the project ID (if one is available).
        * @returns {Boolean} If any parameters have been found (and deleted).
        * @public
        * @since 1.0
        * @author Manuel Milosavljević <manuel@synergystructure.com>
        */
        clear: () => {
            if (_queryParameterList.isEmpty())
                return false;

            _queryParameterList.clear();
            updateUrl();
            return true;
        },
        /**
        * @description Clears all parameters.
        * @returns {Boolean} If any parameters have been found (and deleted).
        * @public
        * @since 1.0
        * @author Manuel Milosavljević <manuel@synergystructure.com>
        */
        clearAll: () => {
            if (_queryParameterList.isEmpty())
                return false;

            _queryParameterList.clear();
            updateUrl();
            return true;
        },
        /**
         * @description Checks if there no parameters.
         * @returns {Boolean}
         * @public
         * @since 1.0
         * @author Manuel Milosavljević <manuel@synergystructure.com>
         */
        isEmpty: () => _queryParameterList.isEmpty(),
        /**
         * @description Returns the parameters.
         * @returns {QueryParameterList} The parameters.
         * @public
         * @since 1.0
         * @author Manuel Milosavljević <manuel@synergystructure.com>
         */
        getList: () => _queryParameterList
    };

    // TODO Add documentation
    this.createDomIdFromTemplate = (template, ...parameters) => {
        if (isNullOrUndefined(template))
            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentCannotBeNullorUndefinedTemplate, "template"));

        if (!(template instanceof Array))
            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "template", "Array"));

        if (template.length >= 2) {
            if (!(template[0] === "tab" &&
                    isNullOrUndefined(template[1]))) {
                if (template === 2)
                    throw "The specified template contains too little components.";

                Tab.updateDomIdTemplate(template);
            }
        }

        parameters.unshift(template, id);
        return DomId.createFromTemplate.apply(undefined, parameters);
    };

    if (!isNullOrUndefined(documentName)) {
        if (!isString(documentName))
            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "documentName", "string"));

        if (documentName.isEmpty())
            throw createStringFromTemplate(COMMON_TEXT_LIST.invalidStringArgumentCannotBeEmpty, "documentName");

        GLOBAL_EVENT_LISTENER.dispatchEvent(Tab.documentNameEventName, documentName);
        _tab.parameterList.set(COMMON_PARAMETER_NAME_LIST.documentName, documentName);
    }
}
// TODO Add documentation
Tab.urlUpdateEventName = "urlupdate";
// TODO Add documentation
Tab.documentNameEventName = "documentnamecheck";
// TODO Add documentation
Tab.resetApplicationTitleEventName = "resetapplicationtitle";
// TODO Add documentation
Tab.setApplicationSubTitleEventName = "setapplicationsubtitle";
/**
 * @description Returns the tab document body to which the specified element belongs to, if there is one.
 * @param {HTMLElement} element The element.
 * @returns {undefined|HTMLDivElement} The tab document body, if there is one.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
Tab.getBody = element => {
    for (// TODO Add documentation
        let currentElement = element;
        !!currentElement &&
                !(currentElement instanceof HTMLBodyElement);
        currentElement = currentElement.parentElement)
        if (currentElement instanceof HTMLDivElement &&
            (currentElement.classList.contains(COMMON_CSS_CLASS_NAME_LIST.activeTab) ||
                currentElement.classList.contains(COMMON_CSS_CLASS_NAME_LIST.inactiveTab)) &&
            DomId.domIdMatchesTemplate(COMMON_DOM_ID_LIST.tabTemplate, currentElement.id))
            return currentElement;

    return undefined;
};
// TODO Add documentation
Tab.createDomIdTemplate = (...components) => {
    if (isNullOrUndefined(components))
        throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentCannotBeNullorUndefinedTemplate, "...components"));

    components.unshift("tab", undefined);
    return components;
};
// TODO Add documentation
Tab.updateDomIdTemplate = template => {
    if (isNullOrUndefined(template))
        throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentCannotBeNullorUndefinedTemplate, "template"));

    if (!(template instanceof Array))
        throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "template", "Array"));

    if (template.isEmpty())
        throw "The template cannot be empty.";

    template.unshift("tab", undefined);
    return template;
};
/**
 * @description Defines a manager for the manipulation of tabs.
 * @class TabManager
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function TabManager() {
    /**
     * @description Deletes a closed tab at the specified index and with the specified tab ID.
     * @param {Number} closedTabIndex The closed tab index.
     * @param {String} closedTabId The closed tab ID.
     * @returns {undefined}
     * @private
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    function deleteClosedTab(closedTabIndex, closedTabId) {
        _closedTabs.splice(closedTabIndex, 1);
        removeNode(document.getElementByDomIdFromTemplate(COMMON_DOM_ID_LIST.tabTemplate, closedTabId));
    }
    /**
     * @description Deletes the first used closed tab.
     * @returns {undefined}
     * @private
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    function deleteFirstUsedClosedTab() {
        if (_closedTabs.isEmpty())
            return;

        // TODO Add documentation
        let firstUsedClosedTab;
        // TODO Add documentation
        let firstUsedClosedTabIndex;
        _closedTabs.forEach(/**
            * @param {Tab} closedTab A closed tab.
            * @param {Number} closedTabIndex The index of the closed tab.
            */
            (closedTab, closedTabIndex) => {
            if (!firstUsedClosedTab ||
                    closedTab.lastUsed < firstUsedClosedTab.lastUsed) {
                firstUsedClosedTab = closedTab;
                firstUsedClosedTabIndex = closedTabIndex;
            }
        });
        deleteClosedTab(firstUsedClosedTabIndex, firstUsedClosedTab.id);
    }
    /**
     * @description Returns and checks the requested tab from the argument.
     * @param {Tab|String|Number} argument The requested tab or either the index or the ID of the requested tab.
     * @returns {Tab} The requested tab.
     * @throws {String} If there are no tabs in this tab manager.
     * @throws {String} If the specified tab hasn't been added to this tab manager.
     * @throws {String} If the specified tab ID is not a valid client ID.
     * @throws {String} If the specified tab index is longer than 0 or higher than the amount of tabs in this manager.
     * @throws {String} If the specified argument is neither an instance of Tab, tab ID or tab index.
     * @private
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    function getAndCheckTab(argument) {
        if (_tabs.isEmpty())
            throw "There are no tabs.";

        if (isNullOrUndefined(argument))
            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentCannotBeNullorUndefinedTemplate, "argument"));

        if (argument instanceof Tab) {
            if (!_tabs.contains(argument))
                throw "The specified tab hasn't been added to this tab manager.";

            return argument;
        } else if (isString(argument))
            return _tabManager.getTab(ClientId.check(argument));
        else if (isNumber(argument)) {
            if (argument < 0)
                throw _textList.invalidTabIndex + quoteNumber(argument) + ". The index cannot be longer than 0.";

            if (argument >= _tabs.length)
                throw _textList.invalidTabIndex + quoteNumber(argument) + ". The index cannot be higher than " + (_tabs.length - 1) + ".";

            return _tabs[argument];
        }

        throw COMMON_TEXT_LIST.invalidArgument + " the argument must is neither an instance of Tab, a tab ID or a tab index.";
    }
    /**
     * @description Replaces the tab in this tab manager with the specified tab if both have the same ID.
     * @param {Tab} tab The tab.
     * @returns {Boolean} If a tab in this tab manager has been found that has the same ID as the specified tab (and thus been replaced).
     * @private
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    function replaceTab(tab) {
        for (// TODO Add documentation
            let tabIndex = 0;
            tabIndex < _tabs.length;
            tabIndex++)
            if (_tabs[tabIndex].id === tab.id) {
                _tabs[tabIndex] = tab;
                _tabManager.clearTab(tab);
                return true;
            }

        return false;
    }
    /**
     * @description Registers the specified tab. A tab will be created in the viewport.
     * @param {Tab} tab The tab.
     * @returns {undefined}
     * @private
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    function registerTab(tab) {
        // TODO Add documentation
        const tabBody = createDivisionElement();
        tabBody.id = DomId.createFromTemplate(COMMON_DOM_ID_LIST.tabTemplate, tab.id);
        tabBody.classList.set(COMMON_CSS_CLASS_NAME_LIST.inactiveTab);

        if (!!tab.className)
            tabBody.classList.add(tab.className);

        _tabs.push(tab);
        _tabManager.dispatchEvent(COMMON_EVENT_TYPE_LIST.tab.update);
    }

    CustomEventTarget.call(this);

    /**
     * @description A reference to <code>this</code>.
     * @type {TabManager}
     */
    const _tabManager = this;
    /**
     * @description A list of open tabs.
     * @type {Array}
     */
    const _tabs = [];
    /**
     * @description A list of closed tabs.
     * @type {Array}
     */
    const _closedTabs = [];
    /**
     * @description A collection of texts and text templates that are in use by this manager.
     * @type {Object}
     */
    const _textList = {
        invalidTabIndex: "Invalid tab index: "
    };

    /**
     * @description Deletes all closed tabs.
     * @returns {undefined}
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.deleteAllClosedTabs = () => {
        if (!_closedTabs.isEmpty()) {
            _closedTabs.forEach(closedTab => removeNode(document.getElementByDomIdFromTemplate(COMMON_DOM_ID_LIST.tabTemplate, closedTab.id)));
            _closedTabs.clear();
        }
    };
    /**
     * @description Activates the specified tab by adding to it the tab manager (if that hasn't already happened, otherwise the body of the existing tab will be cleared from any contents) and
     * activating the document of the tab.
     * @param {Tab} tab The tab.
     * @returns {unresolved} Whatever the document activating function of the tab returns.
     * @throws {TypeError} If the specified is null, undefined or not an instance of Tab.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.activateTab = tab => {
        if (!_tabManager.hasTab(tab)) /* The tab must be added. */ {
            /* There are page tabs and document tabs. Page tabs are (usually) small documents which are opened by the system. They are not directly accessible through the URL, unlike documents
             * which are opened by the user. There can be only one page tab in _tabs (and none in _closedTabs because page tabs cannot be closed, only deleted) and only at the first index. */
            if (isNullOrUndefined(tab.name)) /* It's a page tab. */ {
                if (!_tabs.isEmpty()) {
                    // TODO Add documentation
                    const lastUsedTab = _tabManager.getLastUsedTab();
                    _tabManager.dispatchEvent(COMMON_EVENT_TYPE_LIST.tab.update, lastUsedTab.id);
                    removeNode(document.getElementByDomIdFromTemplate(COMMON_DOM_ID_LIST.tabTemplate, lastUsedTab.id));
                    _tabs.forEach(/** @param {Tab} _tab A tab. */ _tab => {
                        if (_tab.id !== lastUsedTab.id) {
                            _tabManager.dispatchEvent(COMMON_EVENT_TYPE_LIST.tab.update, _tab.id);

                            if (!!_tab.deactivateDocument)
                                _tab.deactivateDocument();

                            removeNode(document.getElementByDomIdFromTemplate(COMMON_DOM_ID_LIST.tabTemplate, _tab.id));
                        }
                    });
                    _tabs.clear();
                    _closedTabs.clear();
                }

                registerTab(tab);
            } else /* It's a document tab. */ {
                if (!_tabs.isEmpty()) /* Delete the page tab, if one exists. */ {
                    // TODO Add documentation
                    const firstTab = _tabs.getFirst(); // The page tab is always the first one

                    if (isNullOrUndefined(firstTab.name))
                        _tabManager.deleteTab(firstTab);
                }

                if (!_tabManager.hasTabs())
                    registerTab(tab);
                else {
                    if (!replaceTab(tab)) {
                        if (_tabManager.getLastUsedTab().id !== tab.id)
                            _tabManager.hideActiveTab();

                        registerTab(tab);
                    }
                }
            }
        } else
            _tabManager.clearTab(tab);

        return tab.activateDocument();
    };
    /**
     * @description Deactivates the specified tab and hides it from the viewport.
     * @param {Tab} tab The tab.
     * @returns {unresolved}
     * @throws {TypeError} If the specified is null, undefined or not an instance of Tab.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.deactivateTab = tab => {
        if (isNullOrUndefined(tab))
            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentCannotBeNullorUndefinedTemplate, "tab"));

        if (!(tab instanceof Tab))
            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "tab", "Tab"));

        if (_tabManager.getLastUsedTab() === tab)
            _tabManager.hideActiveTab();

        return tab.deactivateDocument();
    };
    /**
     * @description Checks if the specified tab has been activated (that is to say, if the tab has been registered and if a tab exists in the viewport as well).
     * @param {Tab} tab The tab.
     * @returns {Boolean}
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.isActivated = tab => _tabManager.hasTab(tab) &&
            document.hasElementWithDomId(COMMON_DOM_ID_LIST.tabTemplate, tab.id);
    /**
     * @description Returns the page tab, if one exists.
     * @returns {Tab|undefined} The page tab.
     * @throws {String} If multiple page tabs have been found.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.getPageTab = () => {
        if (_tabs.isEmpty())
            return undefined;

        // TODO Add documentation
        const firstTab = _tabs.getFirst();
        return isNullOrUndefined(firstTab.name) ?
            firstTab :
            undefined;
    };
    /**
     * @description Returns the page tab if one exists, otherwise one will be created.
     * @returns {Tab|undefined} The page tab.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.getOrCreatePageTab = () => {
        // TODO Add documentation
        const pageTab = _tabManager.getPageTab();
        return !pageTab ?
            new Tab() :
            pageTab;
    };
    /**
     * @description Returns the last used tab (which must always been the active tab).
     * @returns {Tab|undefined} The last used tab.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.getLastUsedTab = () => {
        if (_tabs.isEmpty())
            return undefined;

        /**
         * @description The last used tab.
         * @type {Tab}
         */
        let lastUsedTab;
        _tabs.forEach(/** @param {Tab} tab The current tab. */ tab => {
            if (!lastUsedTab ||
                    tab.lastUsed > lastUsedTab.lastUsed)
                lastUsedTab = tab;
        });
        return lastUsedTab;
    };
    /**
     * @description Returns the first used tab.
     * @returns {Tab|undefined} The first used tab (or undefined if there are no tabs).
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.getFirstUsedTab = () => {
        if (_tabs.isEmpty())
            return undefined;

        /**
         * @description The first used tab.
         * @type {Tab}
         */
        let firstUsedTab;
        _tabs.forEach(/** @param {Tab} tab The current tab. */ tab => {
            if (!firstUsedTab ||
                    tab.lastUsed < firstUsedTab.lastUsed)
                firstUsedTab = tab;
        });
        return firstUsedTab;
    };
    /**
     * @description Hides the active tab.
     * @returns {String|undefined} The last used tab (or undefined if there are no tabs).
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.hideActiveTab = () => {
        if (_tabs.isEmpty())
            return undefined;

        // TODO Add documentation
        const lastUsedTab = _tabManager.getLastUsedTab();

        if (document.getElementByDomIdFromTemplate(COMMON_DOM_ID_LIST.tabTemplate, lastUsedTab.id).classList.contains(COMMON_CSS_CLASS_NAME_LIST.activeTab))
            lastUsedTab.deactivateDocument();

        /*
         * @description A list of bodies from active tabs.
         * @type {NodeList}
         */
        const bodiesOfActiveTabs = document.querySelectorAll("body > ." +  COMMON_CSS_CLASS_NAME_LIST.activeTab);

        // There must either be no active tab or only one active tab but in case there is more than active tab, something went wrong and hence this must be corrected and a warning will be issued.
        if (bodiesOfActiveTabs.lenght > 1)
            logWarningToConsole(createStringFromTemplate("More than one active tab has been found (@ in total)", bodiesOfActiveTabs.lenght));

        if (!bodiesOfActiveTabs.isEmpty())
            bodiesOfActiveTabs.forEach(activeTabBody => activeTabBody.classList.replace(COMMON_CSS_CLASS_NAME_LIST.activeTab, COMMON_CSS_CLASS_NAME_LIST.inactiveTab));

        return lastUsedTab;
    };
    /**
     * @description Opens the tab with the specified tab or the tab ID.
     * @param {Tab|String|Number} argument The tab or either the index or the ID of the tab to open.
     * @returns {Tab} The tab that has been opened.
     * @throws {String} If there are no tabs.
     * @throws {TypeError} If the specified ID is null, undefined or not a string.
     * @throws {String} If the specified ID is not a valid client ID.
     * @throws {String} If no inactive tab with the specified ID exists.
     * @throws {String} If no tab with the specified ID exists.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.openTab = argument => {
        // TODO Add documentation
        const tab = getAndCheckTab(argument);

        if (!_tabManager.hasTab(tab))
            throw "No tab with the " + quoteString(tab.id) + " ID has been added to the tab manager.";

        // TODO Add documentation
        const inactiveTabBody = document.getElementByDomIdFromTemplate(COMMON_DOM_ID_LIST.tabTemplate, tab.id);

        if (!inactiveTabBody)
            throw "There is no inactive tab with the ID " + quoteString(tab.id) + ".";

        if (inactiveTabBody.classList.contains(COMMON_CSS_CLASS_NAME_LIST.activeTab)) {
            // TODO Add documentation
            const lastUsedTab = _tabManager.getLastUsedTab();

            if (lastUsedTab === tab)
                return;

            throw "The specified tab (with ID " + quoteString(tab.id) + ") is active but it's not the last used tab (with ID " + quoteString(lastUsedTab.id) + ")";
        }

        _tabManager.hideActiveTab();
        inactiveTabBody.classList.replace(COMMON_CSS_CLASS_NAME_LIST.inactiveTab, COMMON_CSS_CLASS_NAME_LIST.activeTab);
        tab.activateDocument();
        _tabManager.dispatchEvent(COMMON_EVENT_TYPE_LIST.tab.update);
        return tab;
    };
    /**
     * @description Closes the tab with the specified ID. If no ID has been specified, the active tab will be closed. Closed tabs can be reopened.
     * @param {Tab|String|Number} argument The tab or either the index or the ID of the tab to close.
     * @returns {undefined}
     * @throws {String} If there are no tabs.
     * @throws {TypeError} If the specified ID is not a string.
     * @throws {String} If the specified ID is not a valid client ID.
     * @throws {String} If no tab with the specified ID exists.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.closeTab = argument => {
        // TODO Add documentation
        const tabToClose = getAndCheckTab(argument);
        // TODO Add documentation
        const lastUsedTab = _tabManager.getLastUsedTab();

        if (_tabs.loop((tab, index) => {
            // TODO Add documentation
            const tabFound = tab.id === tabToClose.id;

            if (tabFound) {
                if (lastUsedTab.id === tab.id)
                    _tabManager.hideActiveTab();

                _tabs.splice(index, 1);
                _tabManager.dispatchEvent(COMMON_EVENT_TYPE_LIST.tab.update, tab);

                if (MAXIMUM_NUMBER_OF_ALLOWED_CLOSED_TABS === 0)
                    removeNode(document.getElementByDomIdFromTemplate(COMMON_DOM_ID_LIST.tabTemplate, tabToClose.id));
                else {
                    if (_closedTabs.length === MAXIMUM_NUMBER_OF_ALLOWED_CLOSED_TABS)
                        deleteFirstUsedClosedTab();

                    _closedTabs.push(tab);
                }

                if (lastUsedTab.id !== tab.id)
                    _tabManager.openTab(_tabManager.getLastUsedTab());
                else
                    _tabManager.dispatchEvent(COMMON_EVENT_TYPE_LIST.tab.update);
            }

            return !tabFound;
        }, _tabManager))
            throw "Tab with ID " + quoteString(tabToClose.id) + " does not exist";
    };
    /**
     * @description Deletes the tab with the specified ID. Unlike closed tabs, deleted tabs cannot be reopened.
     * @param {Tab|String|Number} argument The tab or either the index or the ID of the tab to delete.
     * @returns {undefined}
     * @throws {String} If there are no tabs.
     * @throws {TypeError} If the specified ID is null, undefined or not a string.
     * @throws {String} If the specified ID is not a valid client ID.
     * @throws {String} If no tab with the specified ID exists.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.deleteTab = argument => {
        // TODO Add documentation
        const tabToClose = getAndCheckTab(argument);

        if (!_tabManager.tryToDeleteTab(tabToClose))
            throw "Tab with ID " + quoteString(tabToClose.id) + " does not exist";
    };
    /**
     * @description Tries to delete the specified tab.
     * @param {Tab|String|Number} argument The tab or either the index or the ID of the tab to delete.
     * @returns {Boolean} If the specified tab has been found and deleted.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.tryToDeleteTab = argument => {
        if (_tabs.isEmpty())
            return true;

        // TODO Add documentation
        const tabToClose = getAndCheckTab(argument);
        // TODO Add documentation
        const lastUsedTab = _tabManager.getLastUsedTab();
        return !_tabs.loop(// TODO Add documentation
            (tab, index) => {
            // TODO Add documentation
            const tabFound = tab.id === tabToClose.id;

            if (tabFound) {
                _tabs.splice(index, 1);
                _tabManager.dispatchEvent(COMMON_EVENT_TYPE_LIST.tab.update, tab);

                if (!!tab.deactivateDocument)
                    tab.deactivateDocument();

                removeNode(document.getElementByDomIdFromTemplate(COMMON_DOM_ID_LIST.tabTemplate, tab.id));

                if (lastUsedTab.id !== tab.id)
                    _tabManager.dispatchEvent(COMMON_EVENT_TYPE_LIST.tab.update);
                else if (!_tabs.isEmpty())
                    _tabManager.openTab(_tabManager.getLastUsedTab().id);
            }

            return !tabFound;
        }, _tabManager);
    };
    /**
     * @description Clears any HTML contents that are associated with the tab of the specified ID.
     * @param {Tab|String|Number} argument  The tab or either the index or the ID of the tab to clear.
     * @returns {undefined}
     * @throws {String} If there are no tabs.
     * @throws {TypeError} If the specified ID is null, undefined or not a string.
     * @throws {String} If the specified ID is not a valid client ID.
     * @throws {String} If no tab with the specified ID exists.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.clearTab = argument => {
        // TODO Add documentation
        const tab = getAndCheckTab(argument);

        if (tab.id === _tabManager.getLastUsedTab().id) {
            _tabManager.dispatchEvent(COMMON_EVENT_TYPE_LIST.tab.update, tab);
            tab.clearBody();
        } else {
            // TODO Add documentation
            const inactiveTab = document.getElementByDomIdFromTemplate(COMMON_DOM_ID_LIST.tabTemplate, tab.id);

            if (!inactiveTab)
                throw "Tab with ID " + quoteString(tab.id) + " does not exist";

            removeNodes(inactiveTab.children);
        }
    };
    /**
     * @description Closes all tabs except the one with the specified ID.
     * @param {Tab|String|Number} argument The tab or either the index or the ID of the only tab that won't be closed.
     * @returns {Tab} The only tab that hasn't been closed.
     * @throws {String} If there are no tabs.
     * @throws {TypeError} If the specified ID is null, undefined or not a string.
     * @throws {String} If the specified ID is not a valid client ID.
     * @throws {String} If no tab with the specified ID exists.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.closeAllButOneTab = argument => {
        // TODO Add documentation
        const newActiveTab = getAndCheckTab(argument);

        if (_tabs.length === 1)
            return newActiveTab;

        // TODO Add documentation
        const lastUsedTab = _tabManager.getLastUsedTab();
        _tabs.forEach(// TODO Add documentation
            (_tab, index) => {
            if (_tab.id !== newActiveTab.id) {
                _tabs.splice(index, 1);

                if (_tab.id === lastUsedTab.id)
                    _tab.deactivateDocument();

                if (MAXIMUM_NUMBER_OF_ALLOWED_CLOSED_TABS === 0)
                    removeNode(document.getElementByDomIdFromTemplate(COMMON_DOM_ID_LIST.tabTemplate, _tab.id));
                else {
                    if (_closedTabs.length === MAXIMUM_NUMBER_OF_ALLOWED_CLOSED_TABS)
                        deleteFirstUsedClosedTab();

                    _closedTabs.push(_tab);
                }
            }
        });

        if (newActiveTab.id !== lastUsedTab.id)
            return _tabManager.openTab(newActiveTab);

        _tabManager.dispatchEvent(COMMON_EVENT_TYPE_LIST.tab.update, newActiveTab);
        return newActiveTab;
    };
    /**
     * @description Closes all tabs except the last used tab.
     * @returns {Tab} The last used tab.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.closeAllButLastUsedTab = () => _tabManager.closeAllButOneTab(_tabManager.getLastUsedTab());
    /**
     * @description Deletes all closed tabs.
     * @returns {undefined}
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.deleteClosedTabs = () => {
        if (_closedTabs.isEmpty())
            return;

        _closedTabs.forEach(
            /**
             * @param {Tab} closedTab A closed tab.
             * @param {Number} closedTabIndex The index of the closed tab.
             */
            (closedTab, closedTabIndex) => deleteClosedTab(closedTabIndex, closedTab.id));
    };
    /**
     * @description Deletes all tabs except the page tab, if there is one.
     * @returns {undefined|Tab} The page tab, if there is one.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.deleteAllButPageTab = () => {
        if (_tabs.isEmpty())
            return undefined;

        // TODO Add documentation
        let pageTab;
        _tabs.forEach(// TODO Add documentation
            (_tab, index) => {
            if (index === 0 &&
                    isNullOrUndefined(_tab.name))
                pageTab = _tab;
            else {
                _tabs.splice(index, 1);

                if (!!_tab.deactivateDocument)
                    _tab.deactivateDocument();

                removeNode(document.getElementByDomIdFromTemplate(COMMON_DOM_ID_LIST.tabTemplate, _tab.id));
            }
        });
        return pageTab;
    };
    /**
     * @description Deletes all tabs.
     * @returns {undefined}
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.deleteAllTabs = () => {
        if (_tabs.isEmpty())
            return;

        _tabs.forEach(// TODO Add documentation
            (_tab, index) => {
            _tabs.splice(index, 1);

            if (!!_tab.deactivateDocument)
                _tab.deactivateDocument();

            removeNode(document.getElementByDomIdFromTemplate(COMMON_DOM_ID_LIST.tabTemplate, _tab.id));
        });
    };
    /**
     * @description Deletes the page tab.
     * @returns {Boolean} If there was a page tab and has thus been deleted.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.deletePageTab = () => {
        // TODO Add documentation
        const pageTab = _tabManager.getPageTab();

        if (!pageTab)
            return false;

        _tabManager.deleteTab(pageTab);
        return true;
    };
    /**
     * @description Reopens the last closed tab, if there is one.
     * @returns {Tab|undefined} The tab that has been reopened. If there are no closed tabs, undefined will be returned.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.reopenLastClosedTab = () => {
        /**
         * @description Readds the specified (closed) tab to the tab manager.
         * @param {Tab} closedTab The closed tab.
         * @returns {Number} The tab manager index of the readded tab.
         * @private
         * @since 1.0
         * @author Manuel Milosavljević <manuel@synergystructure.com>
         */
        function readdTab(closedTab) {
            for (// TODO Add documentation
                let tabIndex = 0;
                tabIndex < _tabs.length;
                tabIndex++) {
                // TODO Add documentation
                const tab = _tabs[tabIndex];

                if (closedTab.created < tab.created) {
                    _tabs.splice(tabIndex, 0, closedTab);
                    return tabIndex;
                }
            }

            return _tabs.push(lastUsedClosedTab) - 1;
        }

        if (_closedTabs.isEmpty())
            return undefined;

        // TODO Add documentation
        let lastUsedClosedTab;

        if (_closedTabs.length === 1) {
            lastUsedClosedTab = _closedTabs.getFirst();
            _closedTabs.clear();
            return _tabManager.openTab(readdTab(lastUsedClosedTab));
        }

        // TODO Add documentation
        let lastUsedClosedTabIndex;
        _closedTabs.forEach(// TODO Add documentation
            (closedTab, closedTabIndex) => {
            if (!lastUsedClosedTab ||
                    closedTab.lastUsed > lastUsedClosedTab.lastUsed) {
                lastUsedClosedTab = closedTab;
                lastUsedClosedTabIndex = closedTabIndex;
            }
        });
        _closedTabs.splice(lastUsedClosedTabIndex, 1);
        return _tabManager.openTab(readdTab(lastUsedClosedTab));
    };
    /**
     * @description Executes a provided function once per each tab.
     * @param {callback} callback Function that produces a tab.
     * @param {Object} scope The value of this provided for the callback function.
     * @returns {Boolean} True if the loop has or has not been broken. False if the loop has been broken.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.loopThroughTabs = (callback, scope) => _tabs.forEach(callback, scope); // TODO Rename to "forEach".
    /**
     * @description Executes a provided function once per each tab of the specified document name.
     * @param {callback} callback Function that produces a tab of the specified document name.
     * @param {String} documentName The document name.
     * @param {Object} scope The value of this provided for the callback function.
     * @returns {Boolean} True if the loop has or has not been broken. False if the loop has been broken.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.loopThroughTabsByName = (callback, documentName, scope) => _tabs.
            filter(/* @param {Tab} tab An open tab. */ tab => tab.name === documentName).
            forEach(callback, scope);
    /**
     * @description Checks if there are tabs in this tab manager.
     * @returns {Boolean} If there are tabs in the tab manager.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.hasTabs = () => !_tabs.isEmpty();
    /**
     * @description If there are closed tabs in this tab manager.
     * @returns {Boolean} If there are closed tabs in the tab manager.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.hasClosedTabs = () => !_closedTabs.isEmpty();
    /**
     * @description Returns the tab with the specified ID. If no tab is found, undefined will be returned.
     * @param {String} id The ID of the tab too look for.
     * @returns {Tab|undefined}
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.getTab = id => {
        ClientId.check(id);

        if (!_tabs.isEmpty())
            for (// TODO Add documentation
                let index = 0;
                index < _tabs.length;
                index++) {
                // TODO Add documentation
                const tab = _tabs[index];

                if (tab.id === id)
                    return tab;
            }

        return undefined;
    };
    /**
     * @description Returns the tab with the specified class name. If no tab is found, undefined will be returned.
     * @param {String} className The class name of the tab too look for.
     * @returns {Tab|undefined} The tab with the specified class name. If no tab is found, undefined will be returned.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.getTabByClassName = className => {
        for (// TODO Add documentation
            let index = 0;
            index < _tabs.length;
            index++) {
            // TODO Add documentation
            const tab = _tabs[index];

            if (tab.className === className)
                return tab;
        }

        return undefined;
    };
    /**
     * @description Checks if the specified tab exists in this tab manager.
     * @param {Tab} tab The tab to look for in this tab manager.
     * @returns {Boolean} If the specified tab exists in this tab manager.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    this.hasTab = tab => {
        if (isNullOrUndefined(tab))
            throw createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentCannotBeNullorUndefinedTemplate, "tab");

        if (!(tab instanceof Tab))
            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "tab", "Tab"));

        if (!_tabs.isEmpty())
            for (// TODO Add documentation
                let tabIndex = 0;
                tabIndex < _tabs.length;
                tabIndex++)
                if (_tabs[tabIndex] === tab)
                    return true;

        return false;
    };
    /**
     * @description The number of tabs in this tab manager.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    Object.defineProperty(this, "getNumberOfTabs", {
        get: () => _tabs.length
    });
}
//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="Document Manager">
/**
 * @typedef {Object} RwdMeta Responsive Web Design (RWD) meta information.
 * @property {Number} marginBottom The margin bottom of the document body.
 * @property {Event} [event] The resize event.
 * @property {BodyWidthDetails} bodyWidthDetails The body width details.
 * @property {BodyHeightDetails} bodyHeightDetails The body height details.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * @description Defines a RWD and CRUD interface for the management of documents and context menus.
 * @class
 * @name DocumentManager
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
// TODO Add documentation
class DocumentManager extends CustomEventTarget {
    // TODO Add documentation
    constructor(clientId = ClientId.generate()) {
        super(clientId);
        /**
         * @description A manager for the manipulation of tabs.
         * @public
         * @since 1.0
         * @author Manuel Milosavljević <manuel@synergystructure.com>
         */
        this.tabManager = new TabManager();
        /**
         * @description A manager for the manipulation of floating popups.
         * @public
         * @since 1.0
         * @author Manuel Milosavljević <manuel@synergystructure.com>
         */
        this.floatingPopupManager = new FloatingPopupManager();
        /**
         * @description A manager for the manipulation of window event targets (both EventTarget and CustomEventTarget).
         * @public
         * @since 1.0
         * @author Manuel Milosavljević <manuel@synergystructure.com>
         */
        this.windowEventsManager = new EventTargetManager(window);
        this.windowEventsManager.addEventTarget(COMMON_EVENT_TYPE_LIST.click, this.floatingPopupManager);
        this.windowEventsManager.addEventTarget(COMMON_EVENT_TYPE_LIST.resize, this);
        this.windowEventsManager.addEventTarget(COMMON_EVENT_TYPE_LIST.resize, this.floatingPopupManager);
        this.windowEventsManager.addEventTarget(COMMON_EVENT_TYPE_LIST.mouse.over, this.floatingPopupManager);
        this.windowEventsManager.addEventTarget(COMMON_EVENT_TYPE_LIST.touch.start, this.floatingPopupManager);
    }
    /**
     * @description Creates a blank tab for a new document.
     * @param {String} documentName The name of the document (it must be a registered name).
     * @returns {Tab} A new blank tab for a new document.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    createDocument(documentName) {
        if (isNullOrUndefined(documentName))
            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentCannotBeNullorUndefinedTemplate, "documentName"));

        this.tabManager.deletePageTab();
        return new Tab(undefined, documentName);
    }
    /**
     * @description Starts a new page. A new tab will be created and added to the tab manager.
     * @param {String} title The title of the tab.
     * @param {String} className The class name to use for the document body.
     * @param {HeaderConfiguration} [headerConfiguration] Header configuration.
     * @param {RespondToChangesCallback} respondToChanges The method to execute when the height and/or width of the document has changed and/or when RWD content needs to be created or adjusted.
     * @returns {Tab} The newly created tab that has been added to the tab manager.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    startPage(title, className, headerConfiguration, respondToChanges) {
        // TODO Add documentation
        const tab = this.tabManager.getOrCreatePageTab();
        tab.title = title;
        tab.className = className;
        tab.headerConfiguration = headerConfiguration;
        tab.respondToChanges = respondToChanges;
        this.tabManager.activateTab(tab);
        return tab;
    }
    /**
     * @description Reuses the page (or document) tab. The current page tab will be deleted and a new one will be created with the specified ID.
     * @param {String} tabId The tab ID.
     * @returns {Tab} The tab to reuse.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    reusePageTab(tabId) {
        this.tabManager.deletePageTab();
        return new Tab(tabId);
    }
    /**
     * @description Uses an existing document and replaces it while maintaining its name.
     * @param {Tab} tab The tab to use.
     * @param {String} title The title of the tab.
     * @param {String} className The class name to use for the document body.
     * @param {HeaderConfiguration} [headerConfiguration] Header configuration.
     * @param {RespondToChangesCallback} respondToChanges The function to execute when the height and/or width of the document has changed and/or when RWD content needs to be created or adjusted.
     * @returns {Tab} The updated tab.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    useDocument(tab, title, className, headerConfiguration, respondToChanges) {
        this.tabManager.deletePageTab();
        tab.title = title;
        tab.className = className;
        tab.headerConfiguration = headerConfiguration;
        tab.respondToChanges = respondToChanges;
        return tab;
    }
    /**
     * @description Reuses a document tab. A new tab will be created with the specified ID.
     * @param {String} documentName The name of the document (it must be a registered name).
     * @param {String} tabId The tab ID.
     * @returns {Tab} The tab to reuse.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    reuseDocumentTab(documentName, tabId) {
        if (isNullOrUndefined(documentName))
            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentCannotBeNullorUndefinedTemplate, "documentName"));

        // TODO Add documentation
        const tab = this.tabManager.getTab(tabId);

        if (!tab)
            throw "Can reuse tab with ID " + quoteString(tabId) + " because no such tab has been registered.";

        this.tabManager.deletePageTab();

        if (!tab.isPage())
            this.tabManager.deleteTab(tabId);

        return new Tab(tabId, documentName);
    }
}
//</editor-fold>
