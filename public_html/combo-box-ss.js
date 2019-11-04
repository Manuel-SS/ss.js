/*!
 * Synergy Structure JavaScript framework v1.0.0
 * http://synergystructure.com/js
 *
 * Copyright Synergy Stucture and other contributors
 * Released under the MIT license
 * http://synergystructure.com/license
 */

"use strict";

/* global ClientId */
/* global COMMON_CSS_CLASS_NAME_LIST */
/* global ONE_HUNDRED_PERCENT_STATEMENT */
/* global COMMON_TEXT_LIST */
/* global HTMLBodyElement */
/* global HTMLHtmlElement */
/* global COMMON_EVENT_TYPE_LIST */
/* global createNavigationElement */
/* global COMBO_BOX_PICKER_SPACE_REDUCTION_IN_FULL_SCREEN */
/* global Tab */
/* global LOCALIZED_TEXTS_MAP */
/* global TOLERATE_MISSING_COMBO_BOX_PICKER_OPTION_VALUE */
/* global COMMON_CONTROL_KEY_LIST */


/**
 * @description Defines a combo box error.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević
 */
class ComboBoxError extends Error {
    /**
     * @description ComboBoxError constructor.
     * @param {String} message The detail message.
     * @constructs ComboBoxError
     * @since 1.0
     * @author Manuel Milosavljević
     */
    constructor(message) {
        super(message);
    }
};


/**
 * @typedef {Object} ComboBoxOption Combo box option.
 * @property {String} key The key, used to identify the option.
 * @property {String} value The value to show to the user.
 * @property {Boolean} [isSelected=false] If this option is selected.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević
 */
// TODO Finish documentation: add @throws
/**
 * @description Creates a combo box that can be modified by the user.
 * @param {String} [id=undefined] The ID of the element.
 * @param {HTMLElement|String|Boolean} [parent=false] The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used as the id of the
 * parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appeneded to any node.
 * @param {Array<ComboBoxOption>} [optionList=undefined] All options available to the user.
 * @param {Boolean} [isReadOnly=false] If the combo box is read-only.
 * @param {Number|Boolean} [requirementStatus=false] If the user must specify a value (true or 1) or not (false or 0) and in case the user must specify a value if the combo picker should be shown
 * upon creation (2).
 * @param {Boolean} [isHidden=false] If the combo box is hidden from the user.
 * @param {Boolean} [hideEmptyOption=false] If the empty option should be hidden.
 * @param {Boolean} [isMultiselectional=false] If the user can select more than one option.
 * @returns {HTMLDivElement} The combo box frame.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević
 */
function showComboBox(id, parent, optionList, isReadOnly = false, requirementStatus = false, isHidden = false, hideEmptyOption = false, isMultiselectional = false, firstScrollableParent = parent) {
    /**
     * @description Sets a custom validity state on the combo box.
     * @param {Boolean} isValid If the combo box is valid.
     * @returns {undefined}
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function setValidityState(isValid) {
        setCustomValidityState(comboBox, isRequired, isValid);
    }
    /**
     * @description Tries to destroys the combo picker (and removes all associated event handlers). The mouse event is examined to determine where the user has clicked. If the user has clicked on
     * the combo box, combo picker or if the element that has been clicked has for some reason no parent element, the combo picker won't be destroyed.
     * @param {MouseEvent} mouseEvent The mouse event from the on-click event handler.
     * @returns {Boolean} If the combo picker has been destroyed.
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function tryToDestroyComboPicker(mouseEvent) {
        if (!comboPicker)
            return false;
        
        if (!!mouseEvent)
            for (// TODO Add documentation
                let element = mouseEvent.target; element &&
                    !(element instanceof HTMLBodyElement) &&
                    !(element instanceof HTMLHtmlElement); element = element.parentElement)
                switch (element) {
                    case comboBox:
                    case comboPicker:
                    case comboBoxButton:
                        return false;
                    default:
                        if (element.parentElement === null)
                            return false;
                }

        destroyComboPicker();
        return true;
    }
    /**
     * @description Removes all click and wheel event listeners from the window and document body that are associated with the combo picker.
     * @returns {undefined}
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function removeExternalEventListeners() {
        window.removeEventListener(COMMON_EVENT_TYPE_LIST.click, tryToDestroyComboPicker);
        window.removeEventListener(COMMON_EVENT_TYPE_LIST.resize, checkComboPickerPosition);
    }
    /**
     * @description Appends all click and wheel event listeners to the window and document body that are associated with the time picker.
     * @returns {undefined}
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function appendExternalEventListeners() {
        window.addEventListener(COMMON_EVENT_TYPE_LIST.click, tryToDestroyComboPicker);
        window.addEventListener(COMMON_EVENT_TYPE_LIST.resize, checkComboPickerPosition);
    }
    /**
     * @description Destroys the combo picker (and removes all associated event handlers).
     * @returns {undefined}
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function destroyComboPicker() {
        if (!comboPicker)
            return;

        removeExternalEventListeners();
        removeNode(comboPicker, false);
        comboPicker = undefined;
        comboBoxButton.classList.remove(cssClassNameList.iconUp);
        comboBoxButton.classList.add(cssClassNameList.iconDown);
    }
    /**
     * @description Returns a list of visible combo picker list items.
     * @returns {Array|undefined} A list of visible combo picker list items.
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function getVisibleComboPickerListItems() {
        return !comboPicker ? undefined :
            comboPicker.querySelectorAll(`.${cssClassNameList.comboPicker} > ul > li:not([style*="display"])`);
    }
    /**
     * @description Checks the position of the combo picker in the viewport and adjusts it if necessary. The default position of the combo picker is to the bottom right of the combo box. If the combo
     * picker is positioned at least partially outside of the viewport – either horizontally or vertically – this function will resposition it either to the top and/or left of the combo box.
     * @returns {undefined}
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function checkComboPickerPosition() {
        if (!comboBox ||
                !comboPicker) {
            window.removeEventListener(COMMON_EVENT_TYPE_LIST.resize, checkComboPickerPosition);
            firstScrollableParent.removeEventListener(COMMON_EVENT_TYPE_LIST.scroll, checkComboPickerPosition);
            return;
        }

        comboPicker.style.left = "";
        comboPicker.style.top = "";
        comboPicker.style.height = "";
        comboPicker.style.width = "";
        comboPicker.style.border = "";
        comboPicker.style.boxShadow = "";

        /**
         * @description The screen size.
         * @type {ScreenPixelSize}
         */
        const screenPixelSize = getScreenPixelSize();
        /**
         * @description The combo picker box width.
         * @type {Number}
         */
        const comboPickerBoxWidth = comboPicker.getBoxWidth();

        if ((comboPickerBoxWidth + (comboPickerBoxWidth / 100) * 80) >= screenPixelSize.width) {
            comboPicker.style.left = createPixelStatement(0);
            comboPicker.style.top = createPixelStatement(0);

            // TODO Add documentation
            const comboPickerHeader = createHeaderElement(false);
            comboPicker.insertBefore(comboPickerHeader, comboPicker.children.getFirst());
            comboPickerHeader.appendChild(comboBox);
            createNavigationElement(comboPickerHeader).classList.set(COMMON_CSS_CLASS_NAME_LIST.vectorImage, "close-icon");

            comboPicker.style.width = createPixelStatement(document.body.getWidth());
            comboPicker.style.height = createPixelStatement(document.body.getHeight());
            comboPicker.style.border = "none";
            comboPicker.style.boxShadow = "none";
            return;
        }

        /**
         * @description The combo box frame width.
         * @type {Number}
         */
        const comboBoxFrameWidth = comboBoxFrame.getBoxWidth();
        /**
         * @description The size of the combo box and its position relative to the viewport.
         * @type {DOMRect}
         */
        const comboBoxClientRectangles = comboBox.getBoundingClientRect();

        if (comboPickerBoxWidth < comboBoxFrameWidth)
            comboPicker.style.width = createPixelStatement(comboBoxFrameWidth - comboPicker.getOuterWidth());
        else if (comboBoxClientRectangles.left + comboPickerBoxWidth < screenPixelSize.width)
            comboPicker.style.width = createPixelStatement(screenPixelSize.width - (comboBoxClientRectangles.left + comboPickerBoxWidth) > COMBO_BOX_PICKER_SPACE_REDUCTION_IN_FULL_SCREEN ?
                comboPickerBoxWidth - COMBO_BOX_PICKER_SPACE_REDUCTION_IN_FULL_SCREEN :
                comboPickerBoxWidth);
        else
            comboPicker.style.width = createPixelStatement(screenPixelSize.width - comboBoxClientRectangles.left - COMBO_BOX_PICKER_SPACE_REDUCTION_IN_FULL_SCREEN);

        comboPicker.style.left = createPixelStatement(comboBoxClientRectangles.left + comboPickerBoxWidth > document.documentElement.getBoxWidth() ?
            (comboBoxClientRectangles.left + comboBoxClientRectangles.width) - comboPickerBoxWidth :
            comboBoxClientRectangles.left);

        // TODO Add documentation
        const comboBoxList = comboPicker.querySelector("ul");
        // TODO Add documentation
        const firstScrollableParentBoundingClientRect = firstScrollableParent.getBoundingClientRect();
        // TODO Add documentation
        const visibleComboBoxListItems = getVisibleComboPickerListItems().length;

        if (visibleComboBoxListItems === 0)
            throw new UnknownError("There are no list items in the combo box.");

        // TODO Add documentation
        let spaceNeededToShowAllComboPickerListItems = 0;
        comboBoxList.children.forEach(comboPickerListItem => spaceNeededToShowAllComboPickerListItems += comboPickerListItem.getBoxHeight());

        // TODO Add documentation
        const availableSpaceAboveComboBox = comboBoxClientRectangles.top - firstScrollableParentBoundingClientRect.top;
        // TODO Add documentation
        const availableSpaceBelowComboBox = (firstScrollableParentBoundingClientRect.height + firstScrollableParentBoundingClientRect.top) - comboBoxClientRectangles.bottom;
        // TODO Add documentation
        let comboPickerBoxHeight;
        // TODO Add documentation
        let placeComboPickerBelowBox;

        if (spaceNeededToShowAllComboPickerListItems < availableSpaceBelowComboBox) {
            placeComboPickerBelowBox = true;
            comboPickerBoxHeight = spaceNeededToShowAllComboPickerListItems;
        } else if (spaceNeededToShowAllComboPickerListItems < availableSpaceAboveComboBox) {
            placeComboPickerBelowBox = false;
            comboPickerBoxHeight = spaceNeededToShowAllComboPickerListItems;
        } else {
            placeComboPickerBelowBox = availableSpaceBelowComboBox > availableSpaceAboveComboBox;
            comboPickerBoxHeight = placeComboPickerBelowBox ?
                availableSpaceBelowComboBox :
                availableSpaceAboveComboBox;
        }

        // TODO Add documentation
        const documentHeight = document.body.getBoxHeight();

        if (placeComboPickerBelowBox) {
            if (documentHeight - (comboPickerBoxHeight + comboBoxClientRectangles.bottom) < COMBO_BOX_PICKER_SPACE_REDUCTION_IN_FULL_SCREEN)
                comboPickerBoxHeight -= COMBO_BOX_PICKER_SPACE_REDUCTION_IN_FULL_SCREEN;

            comboPicker.style.top = createPixelStatement(comboBoxClientRectangles.top + comboBoxClientRectangles.height);
            comboBoxButton.classList.remove(cssClassNameList.iconUp);
            comboBoxButton.classList.add(cssClassNameList.iconDown);
        } else {
//            if (documentHeight - (comboPickerBoxHeight + comboBoxClientRectangles.top) < COMBO_BOX_PICKER_SPACE_REDUCTION_IN_FULL_SCREEN)
//                comboPickerBoxHeight -= COMBO_BOX_PICKER_SPACE_REDUCTION_IN_FULL_SCREEN;

            comboPicker.style.top = createPixelStatement(comboBoxClientRectangles.top - comboPickerBoxHeight);
            comboBoxButton.classList.remove(cssClassNameList.iconDown);
            comboBoxButton.classList.add(cssClassNameList.iconUp);
        }

        comboPicker.style.height = createPixelStatement(comboPickerBoxHeight);
    }
    /**
     * @description Returns the selected combo picker list item, if one exists.
     * @returns {undefined|HTMLLIElement} The selected combo picker list item, if one exists.
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function getSelectedComboPickerListItem() {
        return !!comboPicker ?
            comboPicker.getElementByClassName(COMMON_CSS_CLASS_NAME_LIST.selected) :
            undefined;
    }
    /**
     * @description Selects the specified combo picker list item.
     * @param {HTMLLIElement} comboPickerListItem The combo picker list item.
     * @returns {undefined}
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function selectComboPickerListItem(comboPickerListItem) {
        // TODO Add documentation
        function clearSelection() {
            selectedKeyList.clear();
            setValidityState(false);
        }

        if (!comboPicker ||
                !comboPickerListItem)
            return;

        if (isMultiselectional) {
            if (comboPickerListItem.classList.contains(COMMON_CSS_CLASS_NAME_LIST.selected)) /* This can never be the "blank" option. */ {
                comboPickerListItem.classList.remove(COMMON_CSS_CLASS_NAME_LIST.selected);
                selectedKeyList.delete(comboPickerListItem.dataset.key);
            } else
                comboPickerListItem.classList.add(COMMON_CSS_CLASS_NAME_LIST.selected);

            // TODO Add documentation
            const selectedOptionList = Array.from(comboPickerListItem.parentElement.querySelectorAll("." + COMMON_CSS_CLASS_NAME_LIST.selected));
            selectedKeyList.clear();

            if (!selectedOptionList.isEmpty()) {
                selectedKeyList.merge(selectedOptionList.map(x => x.dataset.key));
                comboBox.value = "";

                if (!selectedOptionList.map(x => x.textContent).loop(value => {
                    if (value.contains(","))
                        return false;

                    if (comboBox.value.isEmpty())
                        comboBox.value = value;
                    else
                        comboBox.value += ", " + value;

                    return true;
                }))
                    comboBox.value = "Multiple values selected";
            }

            setValidityState(true);
        } else {
            if (comboPickerListItem.classList.contains(COMMON_CSS_CLASS_NAME_LIST.selected))
                return;

            // TODO Add documentation
            const selectedComboPickerListItem = getSelectedComboPickerListItem();

            if (!!selectedComboPickerListItem)
                selectedComboPickerListItem.classList.remove(COMMON_CSS_CLASS_NAME_LIST.selected);

            if ("key" in comboPickerListItem.dataset) {
                comboBox.value = comboPickerListItem.textContent;
                selectedKeyList.clear();
                selectedKeyList.push(comboPickerListItem.dataset.key);
                setValidityState(true);
            } else
                clearSelection();
        }

        if (selectedKeyList.isEmpty()) {
            comboBox.value = "";
            comboBox.readOnly = false;
        } else if (selectedKeyList.length === 1) {
            comboBox.value = comboPickerListItem.textContent;
            comboBox.readOnly = false;
        } else {
            comboBox.readOnly = true;
        }

        comboBox.dispatchEvent(new Event(COMMON_EVENT_TYPE_LIST.select));
    }
    /**
     * @description Scrolls the specified selected combo picker list item into view.
     * @param {HTMLLIElement} selectedComboPickerListItem The selected combo picker list item.
     * @returns {undefined}
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function scrollSelectedComboPickerListItemIntoView(selectedComboPickerListItem) {
        comboPicker.scrollTop = 0;

        // TODO Add documentation
        const comboPickerInnerHeight = comboPicker.getInnerHeight();

        if (comboPicker.scrollHeight > comboPickerInnerHeight &&
                selectedComboPickerListItem.offsetTop > comboPickerInnerHeight) {
            // TODO Add documentation
            const comboPickerScrollTopMaximum = comboPicker.scrollHeight - comboPicker.getInnerHeight();
            comboPicker.scrollTop = selectedComboPickerListItem.offsetTop > comboPickerScrollTopMaximum ?
                comboPickerScrollTopMaximum :
                selectedComboPickerListItem.offsetTop;
       }
    }
    /**
     * @description Shows and updates a visual combo picker that can be modified by the user and used to select an option.
     * @returns {HTMLInputElement} The combo picker.
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function showComboPicker() {
        if (isLocked)
            return undefined;

        isLocked = true;

        try {
            if (!!comboPicker)
                destroyComboPicker();

            comboPicker = createDivisionElement("Tab" in window ?
                Tab.getBody(comboBox) :
                document.body);
            comboPicker.style.visibility = "hidden";
            comboPicker.classList.set(COMMON_CSS_CLASS_NAME_LIST.picker, cssClassNameList.comboPicker);
            comboPicker.dataset.componentId = comboBoxFrame.dataset.componentId;

            // TODO Add documentation
            let selectedComboPickerListItem;

            if (!isNullOrUndefined(optionList)) {
                // TODO Add documentation
                const comboPickerList = createUnorderedListElement(comboPicker);
                // TODO Add documentation
                const comboPickerListItemCreator = option => {
                    // TODO Add documentation
                    const comboPickerListItem = comboPickerList.createItemElement();
                    comboPickerListItem.dataset.key = option.key;
                    comboPickerListItem.appendText(option.value);
                    return comboPickerListItem;
                };

                if (!hideEmptyOption)
                    comboPickerList.createItemElement().appendChild(document.createTextNode(LOCALIZED_TEXTS_MAP.get(textNames.blank)));

                if (selectedKeyList.isEmpty())
                    optionList.forEach(/** @param {ComboBoxOption} option Combo box option. */ option => comboPickerListItemCreator(option));
                else {
                    // TODO Add documentation
                    const setSelectedComboPickerListItem = selectedKeyList.length === 1;
                    optionList.forEach(/** @param {ComboBoxOption} option Combo box option. */ option => {
                        // TODO Add documentation
                        const comboPickerListItem = comboPickerListItemCreator(option);

                        if (selectedKeyList.contains(option.key)) {
                            comboPickerListItem.classList.set(COMMON_CSS_CLASS_NAME_LIST.selected);

                            if (setSelectedComboPickerListItem)
                                selectedComboPickerListItem = comboPickerListItem;
                        }
                    });
                }
            }

            //(firstScrollableParent = findFirstScrollableParentElement(comboBox.parentElement)).addEventListener(COMMON_EVENT_TYPE_LIST.scroll, checkComboPickerPosition);
            comboBoxButton.classList.remove(cssClassNameList.iconDown);
            comboBoxButton.classList.add(cssClassNameList.iconUp);
            checkComboPickerPosition();
            appendExternalEventListeners();
            comboPicker.style.zIndex = getComputedStyle(comboPicker).zIndex - 1;
            comboPicker.style.visibility = "";
            comboBox.focus();
            comboPicker.addEventListener(COMMON_EVENT_TYPE_LIST.click, mouseEvent => {
                // TODO Add documentation
                const comboPickerListItem = getItemFromListOnClick(mouseEvent);

                if (!!comboPickerListItem) {
                    selectComboPickerListItem(comboPickerListItem, true);

                    if (!isMultiselectional)
                        destroyComboPicker();
                }
            });

            if (!!selectedComboPickerListItem)
                scrollSelectedComboPickerListItemIntoView(selectedComboPickerListItem);

            return comboPicker;
        } finally {
            isLocked = false;
        }
    }
    // TODO Add documentation
    function setOptions(value) {
        selectedKeyList.clear();
        comboBox.readOnly = false;
        optionList = value;

        // TODO Add documentation
        let disableComboBox = isNullOrUndefined(optionList);

        if (!disableComboBox) {
            if (!(optionList instanceof Array))
                throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "options", "Array"));

            disableComboBox = optionList.isEmpty();
        }

        if (disableComboBox)
            comboBox.disable();
        else {
            // TODO Add documentation
            let selectedOptionFound = false;
            // TODO Add documentation
            let comboBoxValue = "";
            optionList.forEach(/** @param {ComboBoxOption} option The current combo box option.
                ** @param {Number} index The current combo box option index. */
                (option, index) => {
                if (option.isPropertyNullOrUndefined("key"))
                    throw new ComboBoxError(`No ${quoteString("key")} property found in option (at index ${index}).`);

                if (isNullOrUndefined(option.key))
                    throw new ComboBoxError(`The ${quoteString("key")} property in option (at index ${index}) is null or undefined.`);

                if (!isString(option.key))
                    option.key = option.key.toString();

                if (option.isPropertyNullOrUndefined("value")) {
                    if (TOLERATE_MISSING_COMBO_BOX_PICKER_OPTION_VALUE)
                        option.value = "";
                    else
                        throw new ComboBoxError(`Combo box: no ${quoteString("value")} property found in option (at index ${index}).`);
                } else if (isNullOrUndefined(option.value)) 
                    option.value = "";
                else if (!isString(option.value))
                    option.value = option.value.toString();

                if (!option.isPropertyNullOrUndefined("isSelected")) {
                    if (!isBoolean(option.isSelected))
                        throw new ComboBoxError(`The ${quoteString("isSelected")} property (at index ${index}) is not a boolean.`);

                    if (option.isSelected) {
                        if (selectedOptionFound) {
                            if (!isMultiselectional)
                                throw new ComboBoxError("More than one selected option found.");

                            if (!comboBox.readOnly) {
                                comboBoxValue = "Multiple values selected"; // Todo localize
                                comboBox.readOnly = true;
                            }
                        } else {
                            selectedOptionFound = true;
                            comboBoxValue = option.value;
                        }

                        selectedKeyList.push(option.key);
                    }
                }
            });
            optionList.forEach(/** @param {ComboBoxOption} option Combo box option. */ option =>
                optionList.forEach(/** @param {ComboBoxOption} otherOption Combo box option. */ otherOption => {
                    if (option !== otherOption &&
                            option.key === otherOption.key)
                        throw new ComboBoxError("Duplicate keys found.");
                })
            );
            comboBox.value = comboBoxValue;
        }
    }
    // TODO Add documentation
    function comboBoxOnClick() {
        if (!comboBox.disabled &&
                !comboPicker)
            showComboPicker();
        else
            destroyComboPicker();
    }
    // TODO Add documentation
    function setRequirement(value) {
        if (isNullOrUndefined(value))
            isRequired = false;
        else if (isNumber(value)) {
            if (value < 0 ||
                    value > 2)
                throw new ComboBoxError("Requirement status cannot be lower than 0 or higher than 2.");

            isRequired = value > 0;
        } else if (isBoolean(value))
            isRequired = value;
        else
            throw new TypeError(createStringFromTemplate("Requirement status must either be a boolean or a number (between 0 and 2)."));
    }

    /**
     * @description A collection of CSS class names that are in use by this component.
     * @type {Object}
     */
    const cssClassNameList = Object.freeze({
        comboPicker: "combo-picker",
        iconDown: "icon-down",
        iconUp: "icon-up",
        iconDisabled: "icon-disabled"
    });
    // TODO Add documentation
    const selectedKeyList = [];

    // TODO Add documentation
    let textNames = {
        blank: "blank",
        noListItems: "no combo picker list items"
    };
    // TODO Add documentation
    let itemNames = {
        noMatchesFound: "no matches found"
    };
    // TODO Add documentation
    let comboBox;
    // TODO Add documentation
    let comboPicker;
    // TODO Add documentation
    let isLocked = false;
    // TODO Add documentation
    let comboBoxFrame;
    // TODO Add documentation
    let isRequired;

    setRequirement(requirementStatus);
    comboBox = createTextBox(id, parent = comboBoxFrame = createDivisionElement(parent), "", isReadOnly, isRequired);

    comboBoxFrame.dataset.componentId = ClientId.generate();
    comboBoxFrame.classList.set(COMMON_CSS_CLASS_NAME_LIST.boxFrame);

    // TODO Add documentation
    const comboBoxButton = createDivisionElement(comboBoxFrame);
    comboBoxButton.classList.set(COMMON_CSS_CLASS_NAME_LIST.icon, cssClassNameList.iconDown);

    // TODO Add documentation
    const comboBoxButtonImage = createDivisionElement(comboBoxButton);
    comboBoxButtonImage.classList.set(COMMON_CSS_CLASS_NAME_LIST.vectorImage);
    comboBoxButton.style.width = createPixelStatement(comboBoxButtonImage.getBoxWidth() /* combo box button icon */);
    comboBoxButton.style.height = createPixelStatement(comboBox.getBoxHeight() - comboBoxButton.getOuterHeight());
    comboBox.style.width = `calc(${ONE_HUNDRED_PERCENT_STATEMENT} - ${createPixelStatement(comboBoxButton.getBoxWidth())})`;

    if (isNullOrUndefined(isReadOnly))
        isReadOnly = false;
    else if (!isBoolean(isReadOnly))
        throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "isReadOnly", "Boolean"));

    if (isNullOrUndefined(isHidden)) {
        isHidden = false;
        comboBox.style.visibility = "hidden";
    } else {
        if (!isBoolean(isHidden))
            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "isHidden", "Boolean"));

        comboBox.style.visibility = "visible";
    }

    if (isNullOrUndefined(hideEmptyOption))
        hideEmptyOption = false;
    else if (!isBoolean(hideEmptyOption))
        throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "hideEmptyOption", "Boolean"));

    if (isNullOrUndefined(isMultiselectional))
        isMultiselectional = false;
    else if (!isBoolean(isMultiselectional))
        throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "isMultiselectional", "Boolean"));

    comboBox.spellcheck = false;
    comboBox.classList.set(COMMON_CSS_CLASS_NAME_LIST.box, COMMON_CSS_CLASS_NAME_LIST.comboBox);
    comboBox.disable = () => {
        comboBox.disabled = true;
        comboBox.value = LOCALIZED_TEXTS_MAP.get(textNames.noListItems);

        if (!!comboPicker)
            destroyComboPicker();

        comboBoxButton.classList.remove(cssClassNameList.iconDown);
        comboBoxButton.classList.add(cssClassNameList.iconDisabled);
    };
    comboBox.enable = () => {
        comboBox.disabled = false;
        comboBox.value = "";
        //selectedKeys = undefined;
    };
    setOptions(optionList);
    comboBox.addEventListener(COMMON_EVENT_TYPE_LIST.click, comboBoxOnClick);
    comboBoxButton.addEventListener(COMMON_EVENT_TYPE_LIST.click, comboBoxOnClick);
    comboBox.addEventListener(COMMON_EVENT_TYPE_LIST.key.up, keyboardEvent => {
        /**
         * @description Shows all (invisible) combo picker list items.
         * @param {type} comboPickerListItems
         * @returns {undefined}
         * @private
         * @since 1.0
         * @author Manuel Milosavljević
         */
        function showAllComboPickerListItems(comboPickerListItems) {
            comboPickerListItems.forEach(/** @param {HTMLLIElement} comboPickerListItem Combo box list item. */ comboPickerListItem => {
                if (comboPickerListItem.style.display === "none")
                    comboPickerListItem.style.display = "";
            });
        }

        if (!comboPicker)
            showComboPicker();

        if (isControlKeyCode(keyboardEvent.keyCode))
            switch (keyboardEvent.keyCode) {
                case COMMON_CONTROL_KEY_LIST.enter.code: {
                    // TODO Add documentation
                    const visibleComboPickerListItems = getVisibleComboPickerListItems();

                    switch (visibleComboPickerListItems.length) {
                        case 0:
                            showAllComboPickerListItems(comboPickerListItems);
                            break;
                        case 1:
                            selectComboPickerListItem(visibleComboPickerListItems.getFirst(), true);
                            destroyComboPicker();
                            break;
                    }
                }
                    return;
                case COMMON_CONTROL_KEY_LIST.delete.code:
                case COMMON_CONTROL_KEY_LIST.backspace.code:
                    break;

                case COMMON_CONTROL_KEY_LIST.tab.code:
                    return;

                case COMMON_CONTROL_KEY_LIST.arrowDown.code: {
                    // TODO Add documentation
                    const selectedComboPickerListItem = getSelectedComboPickerListItem();

                    if (!!selectedComboPickerListItem) {
                        if (!!selectedComboPickerListItem.nextElementSibling) {
                            selectComboPickerListItem(selectedComboPickerListItem.nextElementSibling, true);
                            scrollSelectedComboPickerListItemIntoView(selectedComboPickerListItem.nextElementSibling);
                        }
                    } else {
                        // TODO Add documentation
                        const firstComboPickerListItem = comboPicker.querySelector("ul > li:first-child");

                        if (!!firstComboPickerListItem.nextElementSibling) {
                            selectComboPickerListItem(firstComboPickerListItem.nextElementSibling, true);
                            scrollSelectedComboPickerListItemIntoView(firstComboPickerListItem.nextElementSibling);
                        } else {
                            if (!!selectedKeyList)
                                selectedKeyList = undefined;

                            if (!comboBox.value.isEmpty())
                                comboBox.value = "";

                            scrollSelectedComboPickerListItemIntoView(firstComboPickerListItem);
                        }
                    }
                }
                    return;
                case COMMON_CONTROL_KEY_LIST.arrowUp.code: {
                    // TODO Add documentation
                    const selectedComboPickerListItem = getSelectedComboPickerListItem();

                    if (!!selectedComboPickerListItem) {
                        if (!!selectedComboPickerListItem.previousElementSibling) {
                            if ("key" in selectedComboPickerListItem.previousElementSibling.dataset) {
                                selectComboPickerListItem(selectedComboPickerListItem.previousElementSibling, true);
                                scrollSelectedComboPickerListItemIntoView(selectedComboPickerListItem.previousElementSibling);
                            } else {
                                if (!!selectedKeyList)
                                    selectedKeyList = undefined;

                                if (!comboBox.value.isEmpty())
                                    comboBox.value = "";

                                selectedComboPickerListItem.classList.remove(COMMON_CSS_CLASS_NAME_LIST.selected);
                                scrollSelectedComboPickerListItemIntoView(comboPicker.querySelector("ul > li:first-child"));
                            }
                        }
                    }
                }
                    return;
                case COMMON_CONTROL_KEY_LIST.escape.code:
                    destroyComboPicker();
                    return;
                default:
                    return;
            }

        // TODO Add documentation
        const comboPickerListItems = comboPicker.querySelectorAll("ul > li");

        if (isNullOrUndefined(comboBox.value) ||
                comboBox.value.isWhiteSpace())
            showAllComboPickerListItems(comboPickerListItems);
        else {
            // TODO Add documentation
            let matchesFound = 0;
            comboPickerListItems.forEach(/** @param {HTMLLIElement} comboPickerListItem A combo-picker list item. */ comboPickerListItem => {
                if ("name" in comboPickerListItem.dataset)
                    removeNode(comboPickerListItem);
                else if (comboPickerListItem.textContent.containsIgnoreCase(comboBox.value)) {
                    matchesFound++;

                    if (comboPickerListItem.style.display === "none")
                        comboPickerListItem.style.display = "";
                } else if (comboPickerListItem.className === "")
                    comboPickerListItem.style.display = "none";
            });

            switch (matchesFound) {
                case 0: {
                    // TODO Add documentation
                    const noMatchesFoundComboBoxListItem = comboPicker.children.getFirst().createItemElement();
                    noMatchesFoundComboBoxListItem.dataset.name = itemNames.noMatchesFound;
                    noMatchesFoundComboBoxListItem.appendText("No matches found."); // Todo localize
                    setValidityState(false);
                }
                    break;
                case 1:
                    setValidityState(true);

                    break;
                default:
                    setValidityState(false);
            }
        }

        checkComboPickerPosition();
    });
    comboBox.addEventListener(COMMON_EVENT_TYPE_LIST.key.down, keyboardEvent => {
        if (!comboBox.disabled &&
                COMMON_CONTROL_KEY_LIST.tab.equals(keyboardEvent)) {
            destroyComboPicker();

            if (!selectedKeyList) {
                if (comboBox.value.isEmpty())
                    comboBox.value = "";
            } else {
                if (!!optionList)
                    optionList.loop(/** @param {ComboBoxOption} option A combo-box option. */ option => {
                        // TODO Add documentation
                        const selectedOptionFound = option.key === selectedKeyList;

                        if (selectedOptionFound) {
                            setValidityState(true);
                            
                            if (comboBox.value !== option.value)
                                comboBox.value = option.value;
                        } else
                            setValidityState(true);

//                        if (selectedOptionFound && comboBox.value !== option.value)
//                            comboBox.value = option.value;

                        return !selectedOptionFound;
                    });
            }
        }
    });
    Object.defineProperty(comboBoxFrame, "selectedKeys", {
        get: () => {
            if (!isMultiselectional)
                throw new ComboBoxError("This property can only be used when multiple items can be selected.");

            return selectedKeyList;
        },
        set: keys => {
            if (!isMultiselectional)
                throw new ComboBoxError("This property can only be used when multiple items can be selected.");

            if (isNullOrUndefined(keys))
                throw new TypeError(COMMON_TEXT_LIST.invalidPropertyCannotBeNullorUndefinedTemplate);

            if (!(keys instanceof Array))
                throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidPropertyDataTypeTemplate, "array"));

            if (keys.isEmpty())
                return;

            if (!comboPicker) {
                if (selectedKeyList.equals(keys))
                    return;

                selectedKeyList.clear();

                if (!optionList)
                    throw new ComboBox("There are no options.");

                checkKey: for (// TODO Add documentation
                    let keyIndex = 0; keyIndex < keys.length; keyIndex++) {
                    // TODO Add documentation
                    const key = keys[keyIndex];

                    if (!optionList.contains(key))
                        throw new ComboBoxError(`The key ${quoteString(key)} could not be found.`);

                    selectedKeyList.append(key);

                    if (keys.length === 1)
                        comboBox.value = option.value;

                    for (// TODO Add documentation
                        let optionIndex = 0; optionIndex < optionList.length; optionIndex++) {
                        // TODO Add documentation
                        const option = optionList[optionIndex];

                        if (option.key === key) {
                            comboBox.value = option.value;
                            selectedKeyList.append(key);
                            continue checkKey;
                        }
                    }
                }

                setValidityState(true);
            } else
                selectComboPickerListItem(comboPicker.querySelector("ul > li" + createQueryDataAttribute("key", key)), false);
        }
    });
    Object.defineProperty(comboBoxFrame, "selectedKey", {
        get: () => {
            if (isMultiselectional)
                throw new ComboBoxError("This property can only be used when only one item can be selected.");

            return selectedKeyList.isEmpty() ?
                undefined :
                selectedKeyList.getFirst();
        },
        set: key => {
            if (isMultiselectional)
                throw new ComboBoxError("This property can only be used when only one item can be selected.");

            if (isNullOrUndefined(key))
                throw new TypeError(COMMON_TEXT_LIST.invalidPropertyCannotBeNullorUndefinedTemplate);

            if (!isString(key))
                throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidPropertyDataTypeTemplate, "string"));

            if (!comboPicker) {
                if (key === selectedKeyList)
                    return;

                if (!optionList)
                    throw new ComboBoxError("There are no options.");

                for (// TODO Add documentation
                    let optionIndex = 0; optionIndex < optionList.length; optionIndex++) {
                    // TODO Add documentation
                    let option = optionList[optionIndex];

                    if (option.key === key) {
                        comboBox.value = option.value;
                        selectedKeyList.append(option.key);
                        setValidityState(true);
                        return;
                    }
                }

                throw new ComboBoxError("The specified key could not be found.");
            } else
                selectComboPickerListItem(comboPicker.querySelector("ul > li" + createQueryDataAttribute("key", key)), false);
        }
    });
    Object.defineProperty(comboBoxFrame, "selectedValue", {
        get: () => {
            if (!!optionList &&
                    !!selectedKeyList)
                for (// TODO Add documentation
                    let optionIndex = 0; optionIndex < optionList.length; optionIndex++) {
                    // TODO Add documentation
                    const option = optionList[optionIndex];

                    if (option.key === selectedKeyList)
                        return option.value;
                }

            return undefined;
        }
    });
    Object.defineProperty(comboBoxFrame, "options", {
        get: () => optionList,
        set: value => {
            setOptions(value);

            if (!comboBox.disabled &&
                !!comboPicker)
                showComboPicker();
        }
    });
    Object.defineProperty(comboBoxFrame, "valid", {
        set: value => setCustomValidityState(comboBox, isRequired, value),
        get: () => getCustomValidity(comboBox, isRequired)
    });
    Object.defineProperty(comboBoxFrame, "input", {
        get: () => comboBox
    });

    if (isRequired &&
            isNumber(requirementStatus) &&
            requirementStatus === 2)
        comboBoxOnClick();

    window.addEventListener(COMMON_EVENT_TYPE_LIST.scroll, () => {
        if (!!comboPicker) {
            checkComboPickerPosition();
            return;
        }

    });
    return comboBoxFrame;
}
// TODO Add documentation
function ComboBoxOptionList(isPlural = false) {
    checkRequiredBoolean(isPlural, "isPlural");

    // TODO Add documentation
    const _storage = [];
    // TODO Add documentation
    let _selectedKeys = [];
    // TODO Add documentation
    this.set = (key, value, isSelected = false) => {
        checkRequiredString(key, "key");
        checkRequiredBoolean(isSelected, "isSelected");

        if (!_storage.isEmpty() &&
                !_storage.loop(comboBoxOption => comboBoxOption.key !== key))
            throw "A combo box option with the specified key has already been set in this list.";

        if (isNullOrUndefined(value))
            return;

        if (isSelected) {
            if (!isPlural &&
                    !_selectedKeys.isEmpty())
                throw "Cannot set more than one selected key in a non-plural combo box option list.";

            _selectedKeys.push(key);
        }

        _storage.push(Object.freeze({
            key: key,
            value: value
        }));
    };
    // TODO Add documentation
    this.forEach= callback => _storage.forEach(callback);
    
    this.s = _storage;
}
// TODO Add documentation
function createComboBoxItem(key, value, isSelected) {
    return Object.freeze({
        key: key,
        value: value,
        isSelected: isSelected
    });
}
