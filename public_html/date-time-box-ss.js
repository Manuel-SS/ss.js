/*!
 * Synergy Structure JavaScript framework v0.8.0
 * http://synergystructure.com/
 *
 * Copyright Bakker&Spees, Synergy Stucture and other contributors
 * Released under the MIT license
 * http://synergystructure.com/license
 */

"use strict";

/* global Function */
/* global COMMON_EVENT_TYPE_LIST */
/* global HTMLDivElement */
/* global HTMLParagraphElement */
/* global createParagraphElement */
/* global HTMLBodyElement */
/* global HTMLHtmlElement */
/* global HTMLUListElement */
/* global ENABLE_DATE_PICKER_ANIMATION */
/* global Event */
/* global COMMON_CSS_CLASS_NAME_LIST */
/* global Intl */
/* global getLocale */
/* global ENABLE_DATE_PICKER_DESTRUCTION_ANIMATION */
/* global DATE_TIME_PICKER_ANIMATION_SPEED_PER_PIXEL */
/* global HTMLSelectElement */
/* global Tab */
/* global LOCALIZED_TEXTS_MAP */
/* global COMMON_TEXT_LIST */
/* global COMMON_CONTROL_KEY_LIST */
/* global ONE_HUNDRED_PERCENT_STATEMENT */
/* global FloatingPopup */
/* global MILLISECONDS_IN_ONE_HOUR */
/* global MILLISECONDS_IN_ONE_MINUTE */
/* global MILLISECONDS_IN_ONE_SECOND */
/* global ClientId */

/**
 * @description Defines a date-time error.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević
 */
class DateTimeError extends Error {
    /**
     * @description DateTimeError constructor.
     * @param {String} message The detail message.
     * @constructs DateTimeError
     * @since 1.0
     * @author Manuel Milosavljević
     */
    constructor(message) {
        super(message);
    }
};
/**
 * @description Signed integers representing date box display options.
 * @type {Object}
 */
const DATE_TIME_BOX_DISPLAY = Object.freeze({
    withTime: 0,
    withDate: 1,
    withBoth: 2
});
/**
 * @description Creates a new instance of HTMLSelectElement and fills the select element with time information options using the provided callback function.
 * @param {String} [id] The ID of the element.
 * @param {HTMLElement|String|Boolean} parent The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used as the id of the
 * parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appeneded to any node.
 * @param {Function} getTimeFunction The callback function (i.e. getHours(), getMinutes(), etc) to use to fill the select element with time information options.
 * @param {Number} [selectedTime] The selected time information that matches the index of the option in the select element.
 * @returns {HTMLSelectElement} The new instance of HTMLSelectElement, filled with time information options.
 * @throws {TypeError} If the get time function is null, undefined or not an instance of Function.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević
 */
function createTimeSelectElement(id, parent, getTimeFunction, selectedTime) {
    if (isNullOrUndefined(getTimeFunction))
        throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentCannotBeNullorUndefinedTemplate, "getTimeFunction"));

    if (!(getTimeFunction instanceof Function))
        throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "getTimeFunction", "Function"));

    // TODO Add documentation
    const timeSelect = createSelectElement(id, parent);
    // TODO Add documentation
    const setSelectedTime = !isNullOrUndefined(selectedTime);
    getTimeFunction((index, value) => timeSelect.insertOption(index, value).selected = setSelectedTime &&
            index === selectedTime);
    return timeSelect;
}
/**
 * @description Loops through the hours of a day and executes the provided callback function for each hour.
 * @param {Function} callback Function that receives the hour of the day, taking two arguments:
 * <ol>
 * <li>The index of the current hour being processed.</li>
 * <li>The textual 24 and 12 hour representation of the current hour.</li>
 * </ol>
 * @returns {undefined}
 * @throws {TypeError} If the callback function is null, undefined or not an instance of Function.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević
 */
function loopThroughHoursOfDay(callback) {
    /**
     * @description Creates a 12-hour clock notation of the specified hour.
     * @param {Number} hour The hour (from 0 to 23).
     * @returns {String} A 12-hour clock notation.
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function create24HourNotation(hour) {
        return hour > 9 ?
            String(hour) :
            String(hour).maskLeft("0", 2);
    }
    /**
     * @description Creates a 24-hour clock notation of the specified hour.
     * @param {Number} hour The hour (from 0 to 23).
     * @returns {String} A 24-hour clock notation.
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function create12HourNotation(hour) {
        return hour === 0 ?
            "12\xA0AM" :
                    hour === 12 ?
            "12\xA0PM" :
                    hour >= 13 &&
                    hour <= 23 ?
            String(hour - 12).maskLeft("0", 2) + "\xA0PM" :
                    String(hour).maskLeft("0", 2) + "\xA0AM";
    }
    /**
     * @description Creates both a 24-hour and 12-hour clock notation of the specified hour.
     * @param {Number} hour The hour (from 0 to 23).
     * @returns {String} A 24-hour clock notation.
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function createCombinedHourNotation(hour) {
        return create24HourNotation(hour) + "\xA0/\xA0" + create12HourNotation(hour);
    }

    if (isNullOrUndefined(callback))
        throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentCannotBeNullorUndefinedTemplate, "callback"));

    if (!(callback instanceof Function))
        throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "callback", "Function"));

    for (// TODO Add documentation
        let hour = 0, createHourNotation = ("uses24HourClock" in sessionStorage ?
        (parseBoolean(sessionStorage.uses24HourClock) ?
        create24HourNotation : create12HourNotation) :
                createCombinedHourNotation);
        hour <= 23;
        hour++) { // TODO should be between 00 and 24 (24 denotes midnight at the end of a calendar day)
        callback(hour, createHourNotation(hour));
    }
}
/**
 * @description Creates a new instance of HTMLSelectElement and fills the select element with hour information options using the provided callback function.
 * @param {String} [id] The ID of the element.
 * @param {HTMLElement|String|Boolean} parent The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used as the id of the
 * parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appeneded to any node.
 * @param {Number} [selectedHour] The selected hour information that matches the index of the option in the select element.
 * @returns {HTMLSelectElement} The new instance of HTMLSelectElement, filled with hour information options.
 * @throws {String} If the get hour function is null, undefined or not an instance of Function.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević
 */
function createHourSelectElement(id, parent, selectedHour) {
    return createTimeSelectElement(id, parent, loopThroughHoursOfDay, selectedHour);
}
/**
 * @description Loops through the minutes of an hour and executes the provided callback function for each minute.
 * @param {Function} callback Function that receives the minutes of the hour, taking two arguments:
 * <ol>
 * <li>The index of the current minute being processed.</li>
 * <li>The textual representation of the current minute(s) ("00"-"59").</li>
 * </ol>
 * @returns {undefined}
 * @throws {String} If the callback function is null, undefined or not an instance of Function.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević
 */
function loopThroughMinutesOfHour(callback) {
    for (// TODO Add documentation
        let index = 0; index <= 59; index++)
        callback(index, String(index).maskLeft("0", 2));
}
/**
 * @description Creates a new instance of HTMLSelectElement and fills the select element with minute information options using the provided callback function.
 * @param {String} [id] The ID of the element.
 * @param {HTMLElement|String|Boolean} parent The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used as the id of the
 * parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appeneded to any node.
 * @param {Number} [selectedMinute] The selected minute information that matches the index of the option in the select element.
 * @returns {HTMLSelectElement} The new instance of HTMLSelectElement, filled with minute information options.
 * @throws {String} If the get minute function is null, undefined or not an instance of Function.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević
 */
function createMinuteSelectElement(id, parent, selectedMinute) {
    return createTimeSelectElement(id, parent, loopThroughMinutesOfHour, selectedMinute);
}
/**
 * @description Loops through the seconds of an minute and executes the provided callback function for each second.
 * @param {Function} callback Function that receives the seconds of the minute, taking two arguments:
 * <ol>
 * <li>The index of the current second being processed.</li>
 * <li>The textual representation of the current second(s) ("00"-"59").</li>
 * </ol>
 * @returns {undefined}
 * @throws {String} If the callback function is null, undefined or not an instance of Function.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević
 */
function loopThroughSecondsOfMinute(callback) {
    for (// TODO Add documentation
        let index = 0;
        index <= 59;
        index++) // TODO should be between 00 and 60 (30 denotes an added leap second)
        callback(index, String(index).maskLeft("0", 2));
}
/**
 * @description Creates a new instance of HTMLSelectElement and fills the select element with second information options using the provided callback function.
 * @param {String} [id] The ID of the element.
 * @param {HTMLElement|String|Boolean} parent The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used as the id of the
 * parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appeneded to any node.
 * @param {Number} [selectedSecond] The selected second information that matches the index of the option in the select element.
 * @returns {HTMLSelectElement} The new instance of HTMLSelectElement, filled with second information options.
 * @throws {String} If the get second function is null, undefined or not an instance of Function.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević
 */
function createSecondSelectElement(id, parent, selectedSecond) {
    return createTimeSelectElement(id, parent, loopThroughSecondsOfMinute, selectedSecond);
}
/**
 * @description Loops through the milliseconds of a second and executes the provided callback function for each millisecond.
 * @param {Function} callback Function that receives the milliseconds of the second, taking two arguments:
 * <ol>
 * <li>The index of the current millisecond being processed.</li>
 * <li>The textual representation of the current millisecond(s) ("00"-"59").</li>
 * </ol>
 * @returns {undefined}
 * @throws {String} If the callback function is null, undefined or not an instance of Function.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević
 */
function loopThroughMillisecondsOfSecond(callback) {
    if (isNullOrUndefined(callback))
        throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentCannotBeNullorUndefinedTemplate, "callback"));

    if (!(callback instanceof Function))
        throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "callback", "Function"));

    for (// TODO Add documentation
        let millisecond = 0;
        millisecond <= 999;
        millisecond++)
        callback(millisecond, String(millisecond).maskLeft("0", 3));
}
/**
 * @description Creates a new instance of HTMLSelectElement and fills the select element with millisecond information options using the provided callback function.
 * @param {String} id The ID of the element.
 * @param {HTMLElement|String|Boolean} parent The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used as the id of the
 * parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appeneded to any node.
 * @param {Number} [selectedMillisecond] The selected millisecond information that matches the index of the option in the select element.
 * @returns {HTMLSelectElement} The new instance of HTMLSelectElement, filled with millisecond information options.
 * @throws {String} If the get millisecond function is null, undefined or not an instance of Function.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević
 */
function createMillisecondSelectElement(id, parent, selectedMillisecond) {
    return createTimeSelectElement(id, parent, loopThroughMillisecondsOfSecond, selectedMillisecond);
}
/**
 * @description Creates an HTMLInputElement as a control for selecting/entering a date - with or without a time - value based on ISO 8601.
 * @param {String} [id] The ID of the element.
 * @param {HTMLElement|String|Boolean} parent The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used as the id of the
 * parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appeneded to any node.
 * @param {String} [value] The (date/date) value of the input element.
 * @param {Boolean} [withTime=false] If time may be specified in addition to the date.
 * @param {Boolean} [isReadOnly=false] If the input element will be read only.
 * @param {Boolean} [isRequired=false] If the input element must have a value filled out by the user.
 * @param {Boolean} [isHidden] If the input element must be hidden from the user.
 * @returns {undefined} A new instance of HTMLInputElement.
 * @throws {TypeError} If the "readOnly" argument is not null or undefined but neither a boolean.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević
 */
function showDateBox(id, parent, value, withTime = false, isReadOnly = false, isRequired = false, isHidden = false, firstScrollableParent = parent) {
    /**
     * @description Sets a custom validity state on the date box.
     * @param {Boolean} isValid If the date box is valid.
     * @returns {undefined}
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function setValidityState(isValid) {
        setCustomValidityState(dateBox, isRequired, isValid);
    }
    /**
     * @description Parses the specified date or date-time string or date to produce a date or date-time.
     * @param {String} dateTimeString A string value representing a date or date-time. The string should be in a format recognized by the <code>Date.parse()</code> method.
     * @returns {Number} 0 if there is no date or date-time string specified; 1 if the date or date-time string has been successful parsed; or 2 if the date or date-time string is invalid. If the
     * date or date string can and has been parsed.
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function parseDateString(dateTimeString) {
        if (!isNullOrUndefined(dateTimeString) &&
                !dateTimeString.isWhiteSpace()) {
            // TODO Add documentation
            const parsedDateTime = new Date(dateTimeString);

            if (!isNaN(parsedDateTime.getTime())) {
                selectedDateTime = parsedDateTime;
                setValidityState(true);
                return 1;
            } else
                return 2;
        }

        return 0;
    }
    /**
     * @description Gets the date (and time if applicable) in the ISO 8601 format.
     * @returns {String} The date (and time if applicable) in the ISO 8601 format.
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function getIso8601Value() {
        if (isNullOrUndefined(selectedDateTime))
            return undefined;

        // TODO Add documentation
        const dateTimeComponentMask = "0";
        // TODO Add documentation
        let iso8601Value = selectedDateTime.getFullYear() + dateSeparator +
                String(selectedDateTime.getMonth() + 1).maskLeft(dateTimeComponentMask, 2) + dateSeparator +
                String(selectedDateTime.getDate()).maskLeft(dateTimeComponentMask, 2);

        if (withTime)
            iso8601Value += "T" +
                String(selectedDateTime.getHours()).maskLeft(dateTimeComponentMask, 2) + timeSeparatorDefault +
                String(selectedDateTime.getMinutes()).maskLeft(dateTimeComponentMask, 2) + timeSeparatorDefault +
                String(selectedDateTime.getSeconds()).maskLeft(dateTimeComponentMask, 2);

        return iso8601Value;
    }
    /**
     * @description Updates the date or date notation of the date box, using the input and select elements of the date picker. Note: this method can only be called after the input and
     * select elements of the date picker have been created.
     * @returns {undefined}
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function updateDateBox() {
        dateBox.value = getIso8601Value();
        setValidityState(true);
    }
    /**
     * @description Prevents the default body scroll.
     * @param {WheelEvent} wheelEvent The wheel event from the wheel event handler.
     * @returns {undefined}
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function preventDefaultBodyScroll(wheelEvent) {
        wheelEvent.preventDefault();
    }
    /**
     * @description Selects a day in the date picker.
     * @param {MouseEvent} mouseEvent The mouse event from the on-click event handler.
     * @returns {undefined}
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function selectDay(mouseEvent) {
        if (!datePicker)
            return;

        datePicker.removeEventListener(COMMON_EVENT_TYPE_LIST.click, selectDay);

        try {
            // TODO Add documentation
            let day;
            // TODO Add documentation
            let dayItem = mouseEvent.target;

            if (dayItem instanceof HTMLDivElement) {
                if (dayItem.classList.contains(cssClassNameList.weekNumber))
                    return;

                dayItem = dayItem.selectOnlyOneChildByTagName("p");
            }

            if (dayItem instanceof HTMLParagraphElement) {
                if (!dayItem.parentElement.parentElement.classList.contains(cssClassNameList.weekDays))
                    return;

                day = dayItem.getNumber();
            } else
                return;

            if (dayItem.parentElement.classList.contains(cssClassNameList.selectedDay))
                return;

            if (dayItem.parentElement.classList.contains(cssClassNameList.otherMonthWeekDay)) {
                // Every month has at most 28 days. By setting the day to 28 or lower, the year and month can be changed without running into any issues with the day.
                selectedDateTime.setDate(1);

                if (!!dayItem.parentElement.parentElement.previousElementSibling &&
                        dayItem.parentElement.parentElement.previousElementSibling.classList.contains(cssClassNameList.weekHeaderDays))
                    gotoPreviousMonth();
                else
                    goToNextMonth();

                selectedDateTime.setDate(day);
                resetDays();
                updateDateBox();
            } else {
                // TODO Add documentation
                const selectedDayItemParagraph = getCalendar().querySelectorOnlyOne(`.${cssClassNameList.selectedDay} > p`);

                if (!!selectedDayItemParagraph) {
                    if (Number.parseInt(selectedDayItemParagraph.getNumber()) === day) {
                        if (!mouseEvent.shiftKey)
                            destroyDatePicker();

                        return;
                    }

                    selectedDayItemParagraph.parentElement.classList.remove(cssClassNameList.selectedDay);
                }

                dayItem.parentElement.classList.append(cssClassNameList.selectedDay);
                selectedDateTime.setDate(day);
                updateDateBox();
            }

            if (!mouseEvent.shiftKey)
                destroyDatePicker();
        } finally {
            if (!!datePicker)
                datePicker.addEventListener(COMMON_EVENT_TYPE_LIST.click, selectDay);
        }
    }
    /**
    * @description Goes to the next month in the date picker.
    * @returns {undefined}
    * @private
    * @since 1.0
    * @author Manuel Milosavljević
    */
    function goToNextMonth() {
        if (monthSelect.selectedIndex === 11) {
            selectedDateTime.setMonth(monthSelect.selectedIndex = 0);
            selectedDateTime.setFullYear(++yearBox.valueAsNumber);
        } else
            selectedDateTime.setMonth(++monthSelect.selectedIndex);

        resetDays();
        updateDateBox();
    }
    /**
     * @description Goes to the current date and time in the date picker.
     * @returns {undefined}
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function goToCurrentDate() {
        /**
         * @description Checks if the update of the date box must be scheduled when <code>test</code> is <code>true</code>.
         * @param {Boolean} test If the update of the date box must be scheduled.
         * @returns {Boolean} The value of <code>test</code>.
         * @private
         * @since 1.0
         * @author Manuel Milosavljević
         */
        function checkUpdateStatus(test) {
            if (test &&
                    !mustUpdateDateBox)
                mustUpdateDateBox = true;

            return test;
        }

        // TODO Add documentation
        const currentDate = Date.getCurrent();

        if (currentDate.getFullYear() !== selectedDateTime.getFullYear() ||
                currentDate.getMonth() !== selectedDateTime.getMonth()) {
            if (yearBox.valueAsNumber !== currentDate.getFullYear())
                yearBox.valueAsNumber = currentDate.getFullYear();

            if (monthSelect.selectedIndex !== currentDate.getMonth())
                monthSelect.selectedIndex = currentDate.getMonth();

            selectedDateTime = currentDate;
            resetDays();
            updateDateBox();
            return;
        }

        // TODO Add documentation
        let mustUpdateDateBox = false;

        if (currentDate.getDate() !== selectedDateTime.getDate()) {
            // TODO Add documentation
            const selectedItem = datePicker.getElementByClassName(cssClassNameList.selectedDay);

            if (!!selectedItem)
                selectedItem.classList.remove(cssClassNameList.selectedDay);

            // TODO Add documentation
            const currentWeek = currentDate.getISOWeek();
            // TODO Add documentation
            const weekLists = datePicker.getElementsByClassName(cssClassNameList.weekDays);

            weekLoop:
            for (// TODO Add documentation
                let weekListIndex = 0;
                weekListIndex < weekLists.length;
                weekListIndex++) {
                // TODO Add documentation
                const weekList = weekLists[weekListIndex];

                if (weekList.children.getFirst().getNumber() === currentWeek)
                    for (// TODO Add documentation
                        let weekListItemIndex = 1;
                        weekListItemIndex < weekList.children.length - 1;
                        weekListItemIndex++) {
                        // TODO Add documentation
                        const weekListItem = weekList.children[weekListItemIndex];

                        if (!weekListItem.classList.contains(cssClassNameList.otherMonthWeekDay) &&
                                weekListItem.getNumber() === currentDate.getDate()) {
                            weekListItem.classList.append(cssClassNameList.selectedDay);

                            if (withTime) {
                                mustUpdateDateBox = true;
                                break weekLoop;
                            } else {
                                selectedDateTime = currentDate;
                                updateDateBox();
                                return;
                            }
                        }
                }
            }
        }

        if (withTime) {
            if (checkUpdateStatus(currentDate.getHours() !== selectedDateTime.getHours()))
                selectedDateTime.setHours(hourSelect.selectedIndex = currentDate.getHours());

            if (checkUpdateStatus(currentDate.getMinutes() !== selectedDateTime.getMinutes()))
                selectedDateTime.setMinutes(minuteSelect.selectedIndex = currentDate.getMinutes());

            if (checkUpdateStatus(currentDate.getSeconds() !== selectedDateTime.getSeconds()))
                selectedDateTime.setSeconds(secondSelect.selectedIndex = currentDate.getSeconds());
        }

        if (mustUpdateDateBox)
            updateDateBox();
   }
    /**
     * @description Goes to the previous month in the date picker.
     * @returns {undefined}
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function gotoPreviousMonth() {
        if (monthSelect.selectedIndex === 0) {
            selectedDateTime.setMonth(monthSelect.selectedIndex = 11);
            selectedDateTime.setFullYear(--yearBox.valueAsNumber);
        } else
            selectedDateTime.setMonth(--monthSelect.selectedIndex);

        resetDays();
        updateDateBox();
    }
    /**
     * @description Goes to the next year in the date picker.
     * @returns {undefined}
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function goToNextYear() {
        selectedDateTime.setFullYear(++yearBox.valueAsNumber);
        resetDays();
        updateDateBox();
    }
    /**
     * @description Goes to the previous year in the date picker.
     * @returns {undefined}
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function goToPreviousYear() {
        selectedDateTime.setFullYear(--yearBox.valueAsNumber);
        resetDays();
        updateDateBox();
    }
    /**
     * @description Resets the days of the selected month in the date picker.
     * @returns {undefined}
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function resetDays() {
        removeNodes(datePicker.getElementsByClassName(cssClassNameList.weekDays));
        setDays();
        checkDatePickerPosition();
    }
    /**
     * @description Sets the days of the selected month in the date picker.
     * @returns {undefined}
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function setDays() {
        // TODO Add documentation
        const date = new Date(selectedDateTime.getFullYear(), selectedDateTime.getMonth(), 1);
        // TODO Add documentation
        const dayOffset = date.getISODay();

        if (dayOffset !== 0)
            date.setDate(date.getDate() - dayOffset);

        // TODO Add documentation
        const weeks = Math.ceil((Date.getLastDayOfMonth(selectedDateTime.getFullYear(), selectedDateTime.getMonth() + 1) + dayOffset) / 7);
        // TODO Add documentation
        const calendar = getCalendar();
        // TODO Add documentation
        const footer = datePicker.getElementByTagName("footer");

        setWeek: // Add all the days of the month 
        for (// TODO Add documentation
            let weekIndex = 0;
            weekIndex < weeks;
            weekIndex++) {
            // TODO Add documentation
            let weekList;

            if (!!footer)
                calendar.insertBefore(weekList = createUnorderedListElement(false), footer);
            else
                weekList = createDivisionElement(calendar);

            weekList.classList.set(cssClassNameList.weekDays);

            // TODO Add documentation
            let weekListItem = createDivisionElement(weekList);
            weekListItem.classList.set(cssClassNameList.weekNumber);
            createParagraphElement(weekListItem, date.getISOWeek().toString());

            for (// TODO Add documentation
                let dayOfWeek = 0;
                dayOfWeek < 7;
                dayOfWeek++) {
                // TODO Add documentation
                const dayOfMonth = date.getDate();
                weekListItem = createDivisionElement(weekList);

                // TODO Add documentation
                const monthOfDay = date.getMonth();

                if (selectedDateTime.getFullYear() === maximumDateSupported.year &&
                        monthOfDay >= selectedDateTime.getMonth() &&
                        selectedDateTime.getMonth() === maximumDateSupported.month &&
                        dayOfMonth >= maximumDateSupported.dayOfMonth) {
                    weekListItem.classList.set(cssClassNameList.unsupportedDay);

                    while (++dayOfWeek < 7)
                        weekList.createItemElement().classList.set(cssClassNameList.unsupportedDay);

                    break setWeek;
                }

                if (date.getMonth() === selectedDateTime.getMonth()) {
                    if (dayOfMonth === selectedDateTime.getDate())
                        weekListItem.classList.set(cssClassNameList.selectedDay);
                } else
                    weekListItem.classList.set(cssClassNameList.otherMonthWeekDay);

                createParagraphElement(weekListItem, dayOfMonth.toString());
                date.setDate(dayOfMonth + 1);
            }
        }
    }
    /**
     * @description Scrolls through years or months, depending on where in the date picker the user is scrolling.
     * @param {WheelEvent} wheelEvent The wheel event from the wheel event handler.
     * @returns {undefined}
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function scroll(wheelEvent) {
        /**
         * @description Executes one of the two specified methods, based on the specified delta value from the wheel event. If the delta value is lower than 0 then the method
         * <code>methodForLowerDelta()</code> will be executed. If the delta value is higher than 0 then the method <code>methodForHigherDelta()</code> will be executed. If the delta value is 0,
         * neither one of the two methods will be executed.
         * @param {Function} methodForLowerDelta The method to execute when the delta value is lower than 0.
         * @param {Function} methodForHigherDelta The method to execute when the deltra value is higher than 0.
         * @param {Number} delta The X or Y delta of the wheel event.
         * @returns {undefined}
         * @private
         * @since 1.0
         * @author Manuel Milosavljević
         */
        function executeNavigationMethod(methodForLowerDelta, methodForHigherDelta, delta) {
            if (delta < 0)
                methodForLowerDelta();
            else if (delta > 0)
                methodForHigherDelta();
        }

        if (wheelEvent.deltaY === 0 &&
                wheelEvent.deltaX === 0)
            return;

        try {
            datePicker.removeEventListener(COMMON_EVENT_TYPE_LIST.wheel, scroll);

            switch (wheelEvent.target) {
                case yearBox:
                    executeNavigationMethod(goToNextYear, goToPreviousYear, wheelEvent.deltaY);
                    break;
                case monthSelect:
                    executeNavigationMethod(goToNextMonth, gotoPreviousMonth, wheelEvent.deltaY);
                    break;
                default:
                    for (// TODO Add documentation
                        let element = wheelEvent.target;
                        element &&
                                !(element instanceof HTMLBodyElement) &&
                                !(element instanceof HTMLHtmlElement);
                        element = element.parentElement)
                        if (element instanceof HTMLUListElement &&
                            (element.classList.contains(cssClassNameList.weekDays) ||
                            element.classList.contains(cssClassNameList.weekHeaderDays))) {
                            executeNavigationMethod(goToNextYear, goToPreviousYear, wheelEvent.deltaY);
                            executeNavigationMethod(gotoPreviousMonth, goToNextMonth, wheelEvent.deltaX);
                            break;
                        }
            }
        } finally {
            datePicker.addEventListener(COMMON_EVENT_TYPE_LIST.wheel, scroll);
        }
    }
    /**
     * @description Removes all click and wheel event listeners from the window and document body that are associated with the date picker.
     * @returns {undefined}
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function removeExternalEventListeners() {
        window.removeEventListener(COMMON_EVENT_TYPE_LIST.click, tryToDestroyDatePicker);
        window.removeEventListener(COMMON_EVENT_TYPE_LIST.scroll, destroyDatePicker);
        window.removeEventListener(COMMON_EVENT_TYPE_LIST.resize, checkDatePickerPosition);
        document.body.removeEventListener(COMMON_EVENT_TYPE_LIST.wheel, preventDefaultBodyScroll);
    }
    /**
     * @description Appends all click and wheel event listeners to the window and document body that are associated with the date picker.
     * @returns {undefined}
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function appendExternalEventListeners() {
        window.addEventListener(COMMON_EVENT_TYPE_LIST.click, tryToDestroyDatePicker);
        window.addEventListener(COMMON_EVENT_TYPE_LIST.scroll, destroyDatePicker);
        window.addEventListener(COMMON_EVENT_TYPE_LIST.resize, checkDatePickerPosition);
        document.body.addEventListener(COMMON_EVENT_TYPE_LIST.wheel, preventDefaultBodyScroll);
    }
    /**
     * @description Shows the date (and time if applicable) in the user's locale format.
     * @returns {undefined}
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function showLocaleDateTimeBox() {
        // TODO Add documentation
        const optionList = {
            year: "numeric",
            month: "long",
            day: "numeric"
        };

        if (withTime) {
            optionList.hour =
            optionList.minute =
            optionList.second = "numeric";
        }

        dateBox.value = new Intl.DateTimeFormat(getLocale().toString(), optionList).format(selectedDateTime);
    }
    /**
     * @description Destroys the date picker (and removes all associated event handlers).
     * @returns {undefined}
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function destroyDatePicker() {
        /**
         * @description Destroys the copy of the date picker. The destruction interval will be cleared (if applicable), the date picker copy will be removed and the date box will become read only and
         * display the the date (and tiem if applicable) in the user's loale format.
         * @returns {undefined}
         * @private
         * @since 1.0
         * @author Manuel Milosavljević
         */
        function destroyDateTimePickerCopy() {
            if (destructionInterval !== undefined) {
                clearInterval(destructionInterval);
                destructionInterval = undefined;
            }

            removeNode(dateTimePickerCopy, false);
            dateTimePickerCopy = undefined;
            dateBox.readOnly = true;
            showLocaleDateTimeBox();
        }

        if (!datePicker)
            return;

        // TODO Add documentation
        let dateTimePickerCopy = datePicker;
        datePicker = undefined;
        removeExternalEventListeners();
        dateTimePickerCopy.style.opacity = "1";

        if (!ENABLE_DATE_PICKER_DESTRUCTION_ANIMATION) {
            destroyDateTimePickerCopy();
            return;
        }

        // TODO Add documentation
        let totalTargets = 0;
        dateTimePickerCopy.children.forEach(/** @param {Node} child A child of the date-time picker. */ child => totalTargets += child.children.length);
        dateTimePickerCopy.style.height = createPixelStatement(dateTimePickerCopy.offsetHeight); // TODO Use new box model functionality
        dateTimePickerCopy.style.width = "";

        // TODO Add documentation
        const opacity = 1.0;
        // TODO Add documentation
        const opacityDecreasePerChildDestruction = opacity / totalTargets;
        // TODO Add documentation
        var destructionInterval = setInterval(() => {
            if (datePicker) {
                dateTimePickerCopy.style.opacity = "0.0";
                destroyDateTimePickerCopy();
                return;
            }

            // TODO Add documentation
            const randomChild = dateTimePickerCopy.children[Math.trunc(getRandomArbitraryNumber(0, dateTimePickerCopy.children.length - 1))];
            removeNode(randomChild.children[Math.trunc(getRandomArbitraryNumber(0, randomChild.children.length - 1))]);
            dateTimePickerCopy.style.opacity = (opacity -= opacityDecreasePerChildDestruction).toString();

            if (randomChild.children.isEmpty())
                removeNode(randomChild);

            if (dateTimePickerCopy.children.isEmpty())
                destroyDateTimePickerCopy();
        }, 8);
    }
    /**
     * @description Tries to destroys the date picker (and removes all associated event handlers). The mouse event is examined to determine where the user has clicked. If the user has clicked on
     * the date box, date picker or if the element that has been clicked has for some reason no parent element, the date picker won't be destroyed.
     * @param {MouseEvent} mouseEvent The mouse event from the on-click event handler.
     * @returns {Boolean} If the date picker has been destroyed.
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function tryToDestroyDatePicker(mouseEvent) {
        if (!datePicker)
            return false;

        if (!!mouseEvent)
            for (// TODO Add documentation
                let element = mouseEvent.target;
                element &&
                        !(element instanceof HTMLBodyElement ||
                        element instanceof HTMLHtmlElement);
                element = element.parentElement)
                switch (element) {
                    case dateBox:
                    case datePicker:
                    case dateBoxButton:
                        return false;
                    default:
                        if (element.parentElement === null)
                            return false;
                }

        destroyDatePicker();
        return true;
    }
    /**
     * @description Returns the calendar from the date picker, which must be opened first.
     * @returns {HTMLElement} The calendar from the date picker.
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function getCalendar() {
        return datePicker.selectOnlyOneChildByClassName(cssClassNameList.calendar);
    }
    /**
     * @description Checks the position of the date picker in the viewport and adjusts it if necessary. The default position of the date picker is to the bottom right of the date box. If the date
     * picker is positioned at least partially outside of the viewport – either horizontally or vertically – this function will resposition it either to the top and/or left of the date box.
     * @returns {undefined}
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function checkDatePickerPosition() {
        /**
         * @description Clears the date picker interval and thus stops the timer of whatever date picker animation has been going on.
         * @returns {undefined}
         * @private
         * @since 1.0
         * @author Manuel Milosavljević
         */
        function clearDatePickerInterval() {
            if (dateTimePickerIntervalId) {
                clearInterval(dateTimePickerIntervalId);
                dateTimePickerIntervalId = undefined;
            }
        }
        /**
         * @description Moves the date picker vertically incrementally, animating the movement.
         * @returns {undefined}
         * @private
         * @since 1.0
         * @author Manuel Milosavljević
         */
        function moveDatePickerVertically() {
            if (!datePicker ||
                    !dateTimePickerIntervalId) {
                clearDatePickerInterval();
                return;
            }

            // TODO Add documentation
            const newDateTimePickerTopPosition = getFromPixelStatement(datePicker.style.top) + dateTimePickerTopStep;
            datePicker.style.top = createPixelStatement(newDateTimePickerTopPosition);

            if (newDateTimePickerTopPosition === correctDatePickerTopPosition) {
                clearDatePickerInterval();
                return;
            }
        }

        if (dateTimePickerIntervalId) {
            clearInterval(dateTimePickerIntervalId);
            dateTimePickerIntervalId = undefined;
        }

        if (!dateBox ||
                !datePicker) {
            window.removeEventListener(COMMON_EVENT_TYPE_LIST.resize, checkDatePickerPosition);
            firstScrollableParent.removeEventListener(COMMON_EVENT_TYPE_LIST.scroll, checkDatePickerPosition);
            return;
        }

        // TODO Add documentation
        const calendar = getCalendar();
        calendar.style.height = "";

        datePicker.style.left = "";
        datePicker.style.top = "";
        datePicker.style.height = "";
        datePicker.style.width = "";
        datePicker.style.border = "";
        datePicker.style.boxShadow = "";

        /**
         * @description The size of the date box and its position relative to the viewport.
         * @type {DOMRect}
         */
        const dateBoxClientRectangles = dateBox.getBoundingClientRect();
        // TODO Add documentation
        const dateBoxLeft = Math.round(dateBoxClientRectangles.left);
        // TODO Add documentation
        const datePickerBoxWidth = datePicker.getBoxWidth();

        if (dateBoxLeft + datePickerBoxWidth > document.documentElement.getBoxWidth()) {
            // TODO Add documentation
            const dateBoxButtonClientRectangles = dateBoxButton.getBoundingClientRect();
            datePicker.style.left = createPixelStatement((dateBoxButtonClientRectangles.left + dateBoxButtonClientRectangles.width) - datePickerBoxWidth);
        } else
            datePicker.style.left = createPixelStatement(dateBoxLeft);

        // TODO Add documentation
        const datePickerBoxHeight = datePicker.getBoxHeight();
        // TODO Add documentation
        const correctDatePickerTopPosition = dateBoxClientRectangles.top + datePickerBoxHeight > document.documentElement.getBoxHeight() ?
            dateBoxClientRectangles.top - datePickerBoxHeight :
            dateBoxClientRectangles.bottom;

        /**
         * @description The absolute top position in pixels at which the date picker must appear, which is either at above or below the date box.
         * @type {String}
         */
        const correctDatePickerTopPositionPixelStatement = createPixelStatement(correctDatePickerTopPosition);
        // TODO Add documentation
        let dateTimePickerTopStep;

        if (datePicker.style.top !== correctDatePickerTopPositionPixelStatement) {
            if (datePicker.style.top === "" ||
                    !ENABLE_DATE_PICKER_ANIMATION)
                datePicker.style.top = correctDatePickerTopPositionPixelStatement;
            else {
                dateTimePickerTopStep = correctDatePickerTopPosition - getFromPixelStatement(datePicker.style.top) > 0 ? 1 : -1;
                dateTimePickerIntervalId = setInterval(moveDatePickerVertically, DATE_TIME_PICKER_ANIMATION_SPEED_PER_PIXEL);
            }
        }

        if ((datePickerBoxWidth + (datePickerBoxWidth / 100) * 80) >= document.body.getBoxWidth()) /* Show full screen */ {
            datePicker.style.left = createPixelStatement(0);
            datePicker.style.top = createPixelStatement(0);
            datePicker.style.width = createPixelStatement(document.body.getWidth());
            datePicker.style.height = createPixelStatement(document.body.getHeight());
            datePicker.style.border = "none";
            datePicker.style.boxShadow = "none";
            calendar.style.height = createPixelStatement(calendar.getBoxWidth());
        }
    }
    /**
     * @description Shows and updates a visual calendar that can be modified by the user.
     * @param {Boolean} focusOnDateBox If the date box focussed after the date picker is created and shown.
     * @returns {HTMLInputElement} The date picker.
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function showDatePicker(focusOnDateBox) {
        /**
         * @description Checks if the specified triggered on-change event conforms to the requirements needed to change a  date or time unit.
         * @param {Event} event The event from a on-change event handler.
         * @param {Number} currentDateOrTimeUnit The currently selected date or time unit.
         * @param {Number} newDateOrTimeUnit The newly selected time unit.
         * @returns {Boolean} If the specified triggered on-change event conforms to the requirements needed to change a date or time unit.
         * @private
         * @since 1.0
         * @author Manuel Milosavljević
         */
        function canChangeDateOrTimeUnit(event, currentDateOrTimeUnit, newDateOrTimeUnit) {
            return !isNullOrUndefined(event) &&
                    currentDateOrTimeUnit !== newDateOrTimeUnit &&
                    event instanceof Event &&
                    event.type === "change" &&
                    event.target instanceof HTMLSelectElement &&
                    event.target.type === "select-one" &&
                    event.target.validity.valid;
        }
        /**
         * @description Creates a navigation button element in the header and returns it.
         * @param {String} className The class name of the button.
         * @param {type} onClickEventListener The on-click event listener to add to the button.
         * @returns {HTMLSpanElement} The button element.
         * @private
         * @since 1.0
         * @author Manuel Milosavljević
         */
        function createHeaderNavigationButton(className, onClickEventListener) {
            // TODO Add documentation
            const headerNavigationButton = createSpanElement(headerNavigation);
            headerNavigationButton.className = className;
            headerNavigationButton.addEventListener(COMMON_EVENT_TYPE_LIST.click, onClickEventListener);

            // TODO Add documentation
            const headerNavigationButtonLink = createLinkElement(headerNavigationButton);
            headerNavigationButtonLink.className = COMMON_CSS_CLASS_NAME_LIST.vectorImage;
            return headerNavigationButton;
        }

        if (isLocked)
            return undefined;

        try {
            if (!!datePicker)
                tryToDestroyDatePicker();

            if (isNullOrUndefined(selectedDateTime))
                selectedDateTime = Date.getCurrent();

            updateDateBox();
            dateBox.readOnly = false;
            dateBox.removeAttribute("readonly");
            datePicker = createDivisionElement("Tab" in window ?
                Tab.getBody(dateBox) :
                document.body);
            datePicker.style.visibility = "hidden";
            datePicker.classList.set(COMMON_CSS_CLASS_NAME_LIST.picker, cssClassNameList.datePicker);
            datePicker.dataset.componentId = dateBoxFrame.dataset.componentId;

            // TODO Add documentation
            const dateHeader = createHeaderElement(datePicker);

            // TODO Add documentation
            const calendar = createSectionElement(datePicker);
            calendar.classList.set(cssClassNameList.calendar);

            // TODO Add documentation
            const daysOfWeekList = createDivisionElement(calendar);
            daysOfWeekList.classList.set(cssClassNameList.weekHeaderDays);

            // TODO Add documentation
            const weekNumberItem = createDivisionElement(daysOfWeekList);
            weekNumberItem.classList.set(cssClassNameList.weekNumber);
            weekNumberItem.title = LOCALIZED_TEXTS_MAP.get(textNameList.weekNumber);
            createParagraphElement(weekNumberItem, LOCALIZED_TEXTS_MAP.get(textNameList.weekHashtag));

            // Add the names of the days of the week in the header.
            for (// TODO Add documentation
                let daysOfWeekIndex = 0;
                daysOfWeekIndex < 7;
                daysOfWeekIndex++) {
                // TODO Add documentation
                const daysOfWeekListItem =  createDivisionElement(daysOfWeekList);
                createParagraphElement(daysOfWeekListItem, (daysOfWeekListItem.title = Date.getWeekDayName(daysOfWeekIndex)).substr(0, 2));
            }

            setDays();
            yearBox = createNumberBox(undefined, dateHeader, selectedDateTime.getFullYear());
            yearBox.title = LOCALIZED_TEXTS_MAP.get(textNameList.year);
            yearBox.min = minimumDateSupported.year;
            yearBox.max = maximumDateSupported.year;
            yearBox.addEventListener(COMMON_EVENT_TYPE_LIST.change, event => {
                if (Number.isNaN(yearBox.valueAsNumber) ||
                        !event.target.validity.valid) {
                    alert(LOCALIZED_TEXTS_MAP.get(textNameList.invalidYearSpecified));
                } else if (yearBox.valueAsNumber !== selectedDateTime.getFullYear()) {
                    selectedDateTime.setFullYear(yearBox.valueAsNumber);
                    resetDays();
                    updateDateBox();
                }
            });
    //        createSpanElement(dateHeader, "\xA0" + dateSeparator);

            // Firefox (and browsers that don't support "number" as an input type) shows the number input box with a too wide width. The following codes adjust the width of the number input box.

            monthSelect = createSelectElement(undefined, dateHeader);
            monthSelect.style.visibility = "hidden";
            monthSelect.insertOption(0, selectedDateTime.getFullYear());
            yearBox.style.width = createPixelStatement(monthSelect.getBoundingClientRect().width);
            monthSelect.remove(0);
            monthSelect.style.visibility = "";
            monthSelect.title = LOCALIZED_TEXTS_MAP.get(textNameList.month);
            monthSelect.addEventListener(COMMON_EVENT_TYPE_LIST.change, event => {
                if (canChangeDateOrTimeUnit(event, monthSelect.selectedIndex, selectedDateTime.getMonth())) {
                    selectedDateTime.setMonth(monthSelect.selectedIndex);
                    resetDays();
                    updateDateBox();
                }
            });

            for (// TODO Add documentation
                let index = 0;
                index < 12;
                index++)
                monthSelect.insertOption(index, Date.getLocalizedMonthName(index)).selected = index === selectedDateTime.getMonth();

            if (datePickerStyle === 1) {
                daySelect = createSelectElement(undefined, dateHeader);

                for (// TODO Add documentation
                    let dayOfMonth = 1, lastDayofMonth = selectedDateTime.getLastDayofMonth();
                    dayOfMonth <= lastDayofMonth;
                    dayOfMonth++)
                    daySelect.insertOption(dayOfMonth, dayOfMonth).selected = dayOfMonth === selectedDateTime.getDate();

                daySelect.addEventListener(COMMON_EVENT_TYPE_LIST.change, event => {
                    // TODO Add documentation
                    const newDay = daySelect.selectedIndex + 1;

                    if (canChangeDateOrTimeUnit(event, daySelect.newDay, selectedDateTime.getDate())) {
                        selectedDateTime.setDate(newDay);
                        resetDays();
                        updateDateBox();
                    }
                });
                createParagraphElement(createDivisionElement(dateHeader), LOCALIZED_TEXTS_MAP.get(textNameList.today)).addEventListener(COMMON_EVENT_TYPE_LIST.click, () => {
                    goToCurrentDate();
                    destroyDatePicker();
                });
            }

            if (datePickerStyle === 0) {
                headerNavigation = createNavigationElement(dateHeader);
                headerNavigation.classList.set(cssClassNameList.navigation);

                if (!(selectedDateTime.getFullYear() === yearBox.min &&
                        selectedDateTime.getMonth() === 0))
                    createHeaderNavigationButton(cssClassNameList.previousMonthButton, gotoPreviousMonth);

                createHeaderNavigationButton(cssClassNameList.currentMonthButton, goToCurrentDate);

                if (!(selectedDateTime.getFullYear() === yearBox.max &&
                        selectedDateTime.getMonth() === 7))
                    createHeaderNavigationButton(cssClassNameList.nextMonthButton, goToNextMonth);

                createHeaderNavigationButton(cssClassNameList.closeButton, () => destroyDatePicker());
            }

            if (withTime) {
                // TODO Add documentation
                const timeHeader = createFooterElement(datePicker);
                secondSelect = createSecondSelectElement(undefined, timeHeader, selectedDateTime.getSeconds());
                secondSelect.addEventListener(COMMON_EVENT_TYPE_LIST.change, event => {
                    if (canChangeDateOrTimeUnit(event, secondSelect.selectedIndex, selectedDateTime.getSeconds())) {
                        selectedDateTime.setSeconds(secondSelect.selectedIndex);
                        updateDateBox();
                    }
                });
                createSpanElement(timeHeader, "\xA0" + timeSeparatorDefault);
                minuteSelect = createMinuteSelectElement(undefined, timeHeader, selectedDateTime.getMinutes());
                minuteSelect.addEventListener(COMMON_EVENT_TYPE_LIST.change, () => {
                    if (minuteSelect.selectedIndex !== selectedDateTime.getMinutes()) {
                        selectedDateTime.setMinutes(minuteSelect.selectedIndex);
                        updateDateBox();
                    }
                });
                createSpanElement(timeHeader, "\xA0" + timeSeparatorDefault);
                hourSelect = createHourSelectElement(undefined, timeHeader, selectedDateTime.getHours());
                hourSelect.addEventListener(COMMON_EVENT_TYPE_LIST.change, () => {
                    if (hourSelect.selectedIndex !== selectedDateTime.getHours()) {
                        selectedDateTime.setHours(hourSelect.selectedIndex);
                        updateDateBox();
                    }
                });
            }

            checkDatePickerPosition();
            datePicker.addEventListener(COMMON_EVENT_TYPE_LIST.click, selectDay);
            datePicker.addEventListener(COMMON_EVENT_TYPE_LIST.wheel, scroll);
            appendExternalEventListeners();
            datePicker.style.zIndex = getComputedStyle(datePicker).zIndex - 1;
            datePicker.style.visibility = "";

            if (focusOnDateBox)
                dateBox.focus();

            return datePicker;
        } finally {
            isLocked = false;
        }
    }
    // TODO Add documentation
    function dateBoxOnClick() {
        if (!!datePicker)
            tryToDestroyDatePicker();
        else
            showDatePicker(true);
    }

    // TODO Add documentation
    const datePickerStyle = 0;

    /**
     * @description A collection of CSS class names that are in use by this component.
     * @type {Object}
     */
    const cssClassNameList = Object.freeze({
        calendar: "calendar",
        currentMonthButton: "current-month-button",
        datePicker: "date-picker",
        navigation: "navigation",
        nextMonthButton: "next-month-button",
        otherMonthWeekDay: "other-month-week-day",
        previousMonthButton: "previous-month-button",
        closeButton: "close-button",
        selectedDay: "selected-day",
        unsupportedDay: "unsupported-day",
        weekDays: "week-days",
        weekHeaderDays: "week-header-days",
        weekNumber: "week-number"
    });
     /**
     * @description A collection of text names that are in use by this component.
     * @type {Object}
     */
    const textNameList = Object.freeze({
        defaultDateFormat: "default date format",
        year: "year",
        month: "month",
        weekNumber: "week number",
        weekHashtag: "w#",
        today: "date picker today",
        invalidYearSpecified: "invalid year specified",
        invalidDateSpecifiedCurrentDateWillBeUsed: "invalid date specified, current date will be used",
        invalidDateSpecified: "invalid date specified"
    });
    /**
     * @description The hotspot ID.
     * @type {String}
     */
    const hotspotId = ClientId.generate();
    // TODO Add documentation
    const dateSeparator = "-";
    // TODO Add documentation
    const timeSeparatorDefault = ":";
    // TODO Add documentation
    let dateBox;
    // TODO Add documentation
    let dateBoxFrame;

    dateBox = createTextBox(id, parent = dateBoxFrame = createDivisionElement(parent), value, isReadOnly, isRequired, isHidden);
    dateBox.spellcheck = false;
    dateBox.classList.set(COMMON_CSS_CLASS_NAME_LIST.box, COMMON_CSS_CLASS_NAME_LIST.dateBox);
    dateBox.readOnly = true;
    dateBox.placeholder = LOCALIZED_TEXTS_MAP.get(textNameList.defaultDateFormat);
    dateBoxFrame.dataset.componentId = ClientId.generate();
    dateBoxFrame.classList.set(COMMON_CSS_CLASS_NAME_LIST.boxFrame);

    // TODO Add documentation
    const dateBoxButton = createDivisionElement(dateBoxFrame);
    dateBoxButton.classList.set(COMMON_CSS_CLASS_NAME_LIST.icon);

    // TODO Add documentation
    const dateBoxButtonImage = createDivisionElement(dateBoxButton);
    dateBoxButtonImage.classList.set(COMMON_CSS_CLASS_NAME_LIST.vectorImage);
    dateBoxButton.style.width = createPixelStatement(dateBoxButtonImage.getBoxWidth() /* date box button icon */);
    dateBoxButton.style.height = createPixelStatement(dateBox.getBoxHeight() - dateBoxButton.getOuterHeight());
    dateBox.style.width = `calc(${ONE_HUNDRED_PERCENT_STATEMENT} - ${createPixelStatement(dateBoxButton.getBoxWidth())})`;

    if (isNullOrUndefined(withTime))
        withTime = false;
    else if (!isBoolean(withTime))
        throw createStringFromTemplate(COMMON_TEXT_LIST.invalidBooleanArgumentDataTypeTemplate, "withTime");
    else if (withTime)
        dateBox.placeholder += "Thh:mm:ss";

    // TODO Add documentation
    let dateTimePickerIntervalId;
    // TODO Add documentation
    let selectedDateTime;
    // TODO Add documentation
    let datePicker;
    // TODO Add documentation
    let yearBox;
    // TODO Add documentation
    let monthSelect;
    // TODO Add documentation
    let daySelect;
    // TODO Add documentation
    let headerNavigation;
    // TODO Add documentation
    let hourSelect;
    // TODO Add documentation
    let minuteSelect;
    // TODO Add documentation
    let secondSelect;
    // TODO Add documentation
    const maximumDateSupported = Object.freeze({
        year: 275760,
        month: 7,
        dayOfMonth: 13
    });
    // TODO Add documentation
    const minimumDateSupported = Object.freeze({
        year: 100
    });
    // TODO Add documentation
    let isLocked = false;

    if (isNullOrUndefined(isReadOnly))
        isReadOnly = false;
    else if (!isBoolean(isReadOnly))
        throw createStringFromTemplate(COMMON_TEXT_LIST.invalidBooleanArgumentDataTypeTemplate, "isReadOnly");

    if (isNullOrUndefined(isHidden)) {
        isHidden = false;
        dateBox.style.visibility = "hidden";
    } else {
        if (!isBoolean(isHidden))
            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "isHidden", "Boolean"));

        dateBox.style.visibility = "visible";
    }

    if (!isReadOnly) {
        dateBox.addEventListener(COMMON_EVENT_TYPE_LIST.click, dateBoxOnClick);
        dateBoxButton.addEventListener(COMMON_EVENT_TYPE_LIST.click, dateBoxOnClick);
        dateBox.addEventListener(COMMON_EVENT_TYPE_LIST.key.down, keyboardEvent => {
            if (!!datePicker &&
                    COMMON_CONTROL_KEY_LIST.tab.equals(keyboardEvent))
                tryToDestroyDatePicker();
        });
        dateBox.addEventListener(COMMON_EVENT_TYPE_LIST.key.up, keyboardEvent => {
            if (COMMON_CONTROL_KEY_LIST.enter.equals(keyboardEvent)) {
                if (!datePicker)
                    showDatePicker(false);
                else {
                    if (keyboardEvent.shiftKey)
                        goToCurrentDate();
                    else if (!parseDateString(dateBox.value))
                        alert(textNameList.invalidDateSpecified);
                    else
                        tryToDestroyDatePicker();
                }
            }
            else if (COMMON_CONTROL_KEY_LIST.backspace.equals(keyboardEvent) ||
                COMMON_CONTROL_KEY_LIST.delete.equals(keyboardEvent) ||
                keyboardEvent.keyCode === 186 /* colon */ ||
                keyboardEvent.keyCode === 189 /* hype */ ||
                keyboardEvent.keyCode === 84 /* T */ ||
                (keyboardEvent.keyCode >= 96 &&
                keyboardEvent.keyCode <= 105)) {

                if (datePicker &&
                        !parseDateString(dateBox.value))
                    return;

                showDatePicker(false);
            }
        });
    }

    if (isNullOrUndefined(isRequired))
        isRequired = false;
    else if (!isBoolean(isRequired))
        throw createStringFromTemplate(COMMON_TEXT_LIST.invalidBooleanArgumentDataTypeTemplate, "isRequired");

    switch (parseDateString(value)) {
        case 0 /* fI there is no date or date-time string specified */:
            setValidityState(false);

            /*if (isRequired) {
                selectedDateTime = Date.getCurrent();
                setValidity(true);
                showLocaleDateTimeBox();
            }*/

            break;
        case 1 /* If the date or date-time string has been successful parsed. */:
            showLocaleDateTimeBox();
            setValidityState(true);
            break;
        case 2 /* If the date or date string can and has been parsed. */:
            setValidityState(false);

            throw "Invalid date-time value specified.";
    }

    Object.defineProperty(dateBox, "iso8601Value", {
        set: value => {
            if (parseDateString(value))
                showLocaleDateTimeBox();
            else {
                setValidityState(false);
                throw "Invalid ISO 8601 value specified.";
            }
        },
        get: () => getIso8601Value()
    });
    Object.defineProperty(dateBox, "valid", {
        get: () => getCustomValidity(dateBox, isRequired)
    });

    return dateBoxFrame;
}
/**
 * @description Creates an HTMLInputElement as a control for selecting/entering a time value based on ISO 8601.
 * @param {String} [id] The ID of the element.
 * @param {HTMLElement|String|Boolean} parent The parent node to which to append the element, if parent is an instance of HTMLElement. If the parent is a string, it will be used as the id of the
 * parent node. If parent is "true" or not set, the element will be appended to the document body. If the parent is "false" it will not be appeneded to any node.
 * @param {String} [value] The (time) value of the input element.
 * @param {Boolean} [withMilliseconds=false] If milliseconds may be specified.
 * @param {Boolean} [isReadOnly=false] If the input element will be read only.
 * @param {Boolean} [isRequired=false] If the input element must have a value filled out by the user.
 * @param {Boolean} [isHidden] If the input element must be hidden from the user.
 * @returns {HTMLInputElement} A new instance of HTMLInputElement.
 * @throws {TypeError} If the "readOnly" argument is not null or undefined but neither a boolean.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević
 */
function showTimeBox(id, parent, value, withMilliseconds = false, isReadOnly = false, isRequired = false, isHidden = false, firstScrollableParent = parent) {
    /**
     * @description Sets a custom validity state on the time box.
     * @param {Boolean} isValid If the time box is valid.
     * @returns {undefined}
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function setValidityState(isValid) {
        setCustomValidityState(timeBox, isRequired, isValid);
    }
    /**
     * @description Parses the specified time string to produce a time notation.
     * @param {String} timeString A string representing an ISO 8601 time notation in the form of hh:mm:ss or hh:mm:ss.sss.
     * @returns {Boolean} {Number} 0 if there is no time string specified; 1 if the time string has been successful parsed; or 2 if the time string is invalid. If the date or date string can and has
     * been parsed.
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function parseTimeString(timeString) {
        /**
         * @description Tests if the specified string can be parsed to produce a time component.
         * @param {String} timeComponentString A string representing a time component (i.e. hours, minutes, seconds or milliseconds).
         * @param {String} name The name of the time component (will be used to create a property in variable <code>selectedTime</code>).
         * @param {Number} min The minimum allowed value for the time component.
         * @param {Number} max The maximum allowed value for the time component.
         * @returns {Boolean} If the time component string can be (and has been) parsed.
         */
        function canParseTimeComponentString(timeComponentString, name, min, max) {
            if (timeComponentString === null) {
                selectedTime[name] = 0;
                return true;
            }

            const number = parseInt(timeComponentString);

            if (Number.isNaN(number) ||
                    number < min ||
                    number > max)
                return false;

            selectedTime[name] = number;
            return true;
        }

        if (isNullOrUndefined(timeString) ||
                timeString.isWhiteSpace()) {
            if (selectedTime)
                selectedTime = undefined;

            return 0;
        } else
            selectedTime = {};

        // TODO Add documentation
        const timeComponentStrings = timeString.split(":");
        
        if (timeComponentStrings.length === 1) {
            
        }

        if ((timeComponentStrings.length > 3) ||
                (timeComponentStrings.length >= 1 &&
                !canParseTimeComponentString(timeComponentStrings[0].trimToNull(), "hours", 0, 23)) ||
                (timeComponentStrings.length >= 2 &&
                !canParseTimeComponentString(timeComponentStrings[1].trimToNull(), "minutes", 0, 59))) {
            selectedTime = undefined;
            return 2;
        }

        if (timeComponentStrings.length === 3) {
            // TODO Add documentation
            const timeComponentString = timeComponentStrings[2].trimToNull();

            if (timeComponentString !== null) {
                // TODO Add documentation
                const timeSubcomponents = timeComponentString.split(".");

                if ((timeSubcomponents.length > 2) ||
                        (timeSubcomponents.length >= 1 &&
                        !canParseTimeComponentString(timeSubcomponents[0].trimToNull(), "seconds", 0, 59)) ||
                        (timeSubcomponents.length === 2 &&
                        !canParseTimeComponentString(timeSubcomponents[1].trimToNull(), "milliseconds", 0, 999))) {
                    selectedTime = undefined;
                    return 2;
                }
            }
        }

        return 1;
    }
    /**
     * @description Updates the time notation of the time box, using the select elements of the time picker, and saves the time notation (to <code>selectedTime</code>). Note: this method can only
     * be called after the select elements of the time picker have been created.
     * @returns {undefined}
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function updateTimeBox() {
        // TODO Add documentation
       const timeComponentMask = "0";
       timeBox.value = String(selectedTime.hours).maskLeft(timeComponentMask, 2) + timeSeparatorDefault +
               String(selectedTime.minutes).maskLeft(timeComponentMask, 2) + timeSeparatorDefault +
               String(selectedTime.seconds).maskLeft(timeComponentMask, 2);

       if (withMilliseconds)
           timeBox.value += "." + String(selectedTime.milliseconds).maskLeft(timeComponentMask, 3);
       else if (selectedTime.milliseconds)
           delete selectedTime.milliseconds;

        setValidityState(true);
   }
    /**
     * @typedef {Object} TimeRecord A time record.
     * @property {Number} hours The hours (00 to 23).
     * @property {Number} minutes The minutes (00 to 59).
     * @property {Number} seconds The seconds (00 to 59).
     * @property {Number} [milliseconds] The milliseconds (00 to 999)
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    /**
     * @description Returns the current time.
     * @returns {TimeRecord} The current time.
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function getCurrentTime() {
        // TODO Add documentation
       const currentDate = Date.getCurrent();
       // TODO Add documentation
       const currentTime = {
            hours: currentDate.getHours(),
            minutes: currentDate.getMinutes(),
            seconds: currentDate.getSeconds()
        };

        if (withMilliseconds)
            currentTime.milliseconds = currentDate.getMilliseconds();

        return currentTime;
   }
    /**
     * @description Destroys the time picker (and removes all associated event handlers).
     * @returns {undefined}
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function destroyTimePicker() {
        if (!timePicker)
            return;

        timeBox.readOnly = true;
        showLocaleTimeBox();

        removeExternalEventListeners();
//        removeNode(timePicker, false);
//        timePicker = undefined;

        timePicker.close();
    }
    /**
     * @description Goes to the current time in the time picker.
     * @returns {undefined}
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function goToCurrentTime() {
        /**
         * @description Checks if the update of the time box must be scheduled when <code>test</code> is <code>true</code>.
         * @param {Boolean} test If the update of the time box must be scheduled.
         * @returns {Boolean} The value of <code>test</code>.
         * @private
         * @since 1.0
         * @author Manuel Milosavljević
         */
        function checkUpdateStatus(test) {
            if (test &&
                    !mustUpdateDateTimeBox)
                mustUpdateDateTimeBox = true;

            return test;
        }

        // TODO Add documentation
        const currentTime = getCurrentTime();
        // TODO Add documentation
        let mustUpdateDateTimeBox = false;

        if (checkUpdateStatus(currentTime.hours !== selectedTime.hours))
            selectedTime.hours = hourSelect.selectedIndex = currentTime.hours;

        if (checkUpdateStatus(currentTime.minutes !== selectedTime.minutes))
            selectedTime.minutes = minuteSelect.selectedIndex = currentTime.minutes;

        if (checkUpdateStatus(currentTime.seconds !== selectedTime.seconds))
            selectedTime.seconds = secondSelect.selectedIndex = currentTime.seconds;

        if (withMilliseconds &&
                checkUpdateStatus(currentTime.milliseconds !== selectedTime.milliseconds))
            selectedTime.milliseconds = millisecondSelect.selectedIndex = currentTime.milliseconds;

        if (mustUpdateDateTimeBox)
            updateTimeBox();
    }
    /**
     * @description Hides the time picker when the user clicks on the window.
     * @param {Event} event The on-click event.
     * @returns {undefined}
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function hideTimePicker(event) {
        for (// TODO Add documentation
            let element = event.target; element &&
                    !(element instanceof HTMLBodyElement) &&
                    !(element instanceof HTMLHtmlElement);
            element = element.parentElement)
            switch (element) {
                case timeBox:
                case timePicker.body:
                case timeBoxButton:
                    return;
                default:
                    if (element.parentElment === null)
                        return;
            }

        destroyTimePicker();
    }
    /**
     * @description Removes all click and wheel event listeners from the window and document body that are associated with the time picker.
     * @returns {undefined}
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function removeExternalEventListeners() {
        window.removeEventListener(COMMON_EVENT_TYPE_LIST.click, hideTimePicker);
//        window.removeEventListener(COMMON_EVENT_TYPES.resize, checkTimePickerPosition);
    }
    /**
     * @description Appends all click and wheel event listeners to the window and document body that are associated with the time picker.
     * @returns {undefined}
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function appendExternalEventListeners() {
        window.addEventListener(COMMON_EVENT_TYPE_LIST.click, hideTimePicker);
//        window.addEventListener(COMMON_EVENT_TYPES.resize, checkTimePickerPosition);
    }
    /**
     * @description Shows the time in the user's locale format.
     * @returns {undefined}
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function showLocaleTimeBox() {
        // Not yet implemented.
    }
    /**
     * @description Checks the position of the time picker in the viewport and adjusts it if necessary. The default position of the time picker is to the bottom right of the time box. If the time
     * picker is positioned at least partially outside of the viewport  – either horizontally or vertically  – this function will resposition in either to the top and/or left of the time box.
     * @returns {undefined}
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function checkTimePickerPosition() {
        if (true)
            return;

        if (!timeBox ||
                !timePicker) {
            window.removeEventListener(COMMON_EVENT_TYPE_LIST.resize, checkTimePickerPosition);
            firstScrollableParent.removeEventListener(COMMON_EVENT_TYPE_LIST.scroll, checkTimePickerPosition);
            return;
        }

        /**
         * @description The size of the date box and its position relative to the viewport.
         * @type {DOMRect}
         */
        const timeBoxClientRectangles = timeBox.getBoundingClientRect();
        // TODO Add documentation
        const timeBoxLeft = Math.round(timeBoxClientRectangles.left);
        // TODO Add documentation
        const timePickerBoxWidth = timePicker.getBoxWidth();

        if (timeBoxLeft + timePickerBoxWidth > document.documentElement.getBoxWidth()) {
            // TODO Add documentation
            const timeBoxButtonClientRectangles = timeBoxButton.getBoundingClientRect();
            timePicker.style.left = createPixelStatement((timeBoxButtonClientRectangles.left + timeBoxButtonClientRectangles.width) - timePickerBoxWidth);
        } else
            timePicker.style.left = createPixelStatement(timeBoxLeft);

        // TODO Add documentation
        const timePickerBoxHeight = timePicker.getBoxHeight();
        timePicker.style.top = createPixelStatement(Math.round(timeBoxClientRectangles.top + timePickerBoxHeight > document.documentElement.getBoxHeight() ?
            timeBoxClientRectangles.top - timePickerBoxHeight :
            timeBoxClientRectangles.top + timeBoxClientRectangles.height));
    }
    /**
     * @description Shows and updates a visual time picker that can be modified by the user.
     * @returns {HTMLInputElement} The time picker.
     * @throws {String} If the time box is null, undefined, not an instance of HTMLInputElement or otherwise not a valid time box.
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function showTimePicker() {
        /**
         * @description Checks if the specified triggered on-change event conforms to the requirements needed to change a time unit.
         * @param {Event} event The event from a on-change event handler.
         * @param {Number} currentTimeUnit The currently selected time unit (i.e. hours, minutes, seconds or milliseconds).
         * @param {Number} newTimeUnit The newly selected time unit.
         * @returns {Boolean} If the specified triggered on-change event conforms to the requirements needed to change a time unit.
         * @private
         * @since 1.0
         * @author Manuel Milosavljević
         */
        function canChangeTimeUnit(event, currentTimeUnit, newTimeUnit) {
            return !isNullOrUndefined(event) &&
                    currentTimeUnit !== newTimeUnit &&
                    event instanceof Event &&
                    event.type === "change" &&
                    event.target instanceof HTMLSelectElement &&
                    event.target.type === "select-one" &&
                    event.target.validity.valid;
        }
        /**
         * @description Creates a navigation button element in the header and returns it.
         * @param {String} className The class name of the button.
         * @param {type} onClickEventListener The on-click event listener to add to the button.
         * @returns {HTMLSpanElement} The button element.
         * @private
         * @since 1.0
         * @author Manuel Milosavljević
         */
        function createHeaderNavigationButton(className, onClickEventListener) {
            // TODO Add documentation
            const headerNavigationButton = createSpanElement(headerNavigation); // TODO Fix this.
            headerNavigationButton.className = className;
            headerNavigationButton.addEventListener(COMMON_EVENT_TYPE_LIST.click, onClickEventListener);
            createLinkElement(headerNavigationButton);
            return headerNavigationButton;
        }

        if (isLocked)
            return undefined;

        isLocked = true;

        try {
            if (!!timePicker.body)
                destroyTimePicker();

            if (isNullOrUndefined(selectedTime))
                selectedTime = getCurrentTime();

            updateTimeBox();
            timeBox.readOnly = false;
            timeBox.removeAttribute("readonly");
//            timePicker = createDivisionElement(Tab.getBody(timeBox));
//            timePicker.style.visibility = "hidden";
//            timePicker.classList.set(cssClassNames.timePicker);
//            timePicker.dataset.componentId = timeBoxFrame.dataset.componentId;

            timePicker.open();
            timePicker.body.classList.set(cssClassNames.timePicker);

            // TODO Add documentation
            const timeHeader = createHeaderElement(timePicker.body);
            hourSelect = createHourSelectElement(undefined, timeHeader, selectedTime.hours);
            hourSelect.addEventListener(COMMON_EVENT_TYPE_LIST.change, event => {
                if (canChangeTimeUnit(event, selectedTime.hours, hourSelect.selectedIndex)) {
                    selectedTime.hours = hourSelect.selectedIndex;
                    updateTimeBox();
                }

            });
            hourSelect.title = LOCALIZED_TEXTS_MAP.get(textNames.hours);
            createSpanElement(timeHeader, "\xA0" + timeSeparatorDefault + "\xA0");
            minuteSelect = createMinuteSelectElement(undefined, timeHeader, selectedTime.minutes);
            minuteSelect.title = LOCALIZED_TEXTS_MAP.get(textNames.minutes);
            minuteSelect.addEventListener(COMMON_EVENT_TYPE_LIST.change, event => {
                if (canChangeTimeUnit(event, selectedTime.minutes, minuteSelect.selectedIndex)) {
                    selectedTime.minutes = minuteSelect.selectedIndex;
                    updateTimeBox();
                }
            });
            createSpanElement(timeHeader, "\xA0" + timeSeparatorDefault + "\xA0");
            secondSelect = createSecondSelectElement(undefined, timeHeader, selectedTime.seconds);
            secondSelect.title = LOCALIZED_TEXTS_MAP.get(textNames.seconds);
            secondSelect.addEventListener(COMMON_EVENT_TYPE_LIST.change, event => {
                if (canChangeTimeUnit(event, selectedTime.seconds, secondSelect.selectedIndex)) {
                    selectedTime.seconds = secondSelect.selectedIndex;
                    updateTimeBox();
                }
            });

            if (withMilliseconds) {
                createSpanElement(timeHeader, "\xA0" + timeSeparatorMillisecond);
                millisecondSelect = createMillisecondSelectElement(timeHeader, undefined, selectedTime.milliseconds);
                millisecondSelect.title = LOCALIZED_TEXTS_MAP.get(textNames.milliseconds);
                millisecondSelect.addEventListener(COMMON_EVENT_TYPE_LIST.change, event => {
                    if (canChangeTimeUnit(event, selectedTime.milliseconds, millisecondSelect.selectedIndex))
                        updateTimeBox();    
                });
            }

            // TODO Add documentation
            var headerNavigation = createParagraphElement(timeHeader);
            headerNavigation.classList.set(cssClassNames.navigation);
            createHeaderNavigationButton(cssClassNames.currentTimeButton, goToCurrentTime);
            createHeaderNavigationButton(cssClassNames.closeButton, () => destroyTimePicker());
            
            FloatingPopup.position(timePicker.body, timeBoxFrame, false);
            
//            checkTimePickerPosition();
//            (firstScrollableParent = findFirstScrollableParentElement(timeBox.parentElement)).addEventListener(COMMON_EVENT_TYPES.scroll, checkTimePickerPosition);
            appendExternalEventListeners();
//            timePicker.style.zIndex = getComputedStyle(timePicker).zIndex - 1;
//            timePicker.style.visibility = "";
            timeBox.focus();

            return timePicker;
        } finally {
            isLocked = false;
        }
    }
    // TODO Add documentation
    function timeBoxOnClick() {
        if (!!timePicker.body)
            destroyTimePicker();
        else if (isNullOrUndefined(timeBox.value) ||
                timeBox.value.isWhiteSpace() ||
                parseTimeString(timeBox.value))
            showTimePicker();
        else {
            alert(LOCALIZED_TEXTS_MAP.get(textNames.invalidTimeSpecifiedCurrentTimeWillBeUsed));
            showTimePicker();
        }
    }

    /**
     * @description A collection of CSS class names that are in use by this component.
     * @type {Object}
     */
    const cssClassNames = {
        timePicker: "time-picker",
        navigation: "navigation",
        closeButton: "close-button",
        currentTimeButton: "current-time"
    };
    /**
     * @description A collection of text names that are in use by this component.
     * @type {Object}
     */
    const textNames = {
        hours: "hours",
        minutes: "minutes",
        seconds: "seconds",
        milliseconds: "milliseconds",
        invalidTimeSpecifiedCurrentTimeWillBeUsed: "invalid time specified, current time will be used"
    };
    // TODO Add documentation
    const timeSeparatorDefault = ":";
    // TODO Add documentation
    const timeSeparatorMillisecond = ".";
    // TODO Add documentation
    const hotspotId = ClientId.generate();
    // TODO Add documentation
    let timeBox;
    // TODO Add documentation
    let timeBoxFrame;

    if (arguments.length === 1 &&
            id instanceof Object) {
        // TODO Add documentation
        const textBoxConfiguration = arguments[0];
        textBoxConfiguration.parent = timeBoxFrame = createDivisionElement(textBoxConfiguration.parent);

        if ("withMilliseconds" in textBoxConfiguration) {
            withMilliseconds = textBoxConfiguration.withMilliseconds;
            delete textBoxConfiguration.withMilliseconds;
        }

        timeBox = createTextBox(textBoxConfiguration);
    } else
        timeBox = createTextBox(id, parent = timeBoxFrame = createDivisionElement(parent), value, isReadOnly, isRequired, isHidden);

    timeBox.spellcheck = false;
    timeBox.classList.set(COMMON_CSS_CLASS_NAME_LIST.timeBox);
    timeBox.readOnly = true;
    timeBox.placeholder = "hh:mm:ss";
    //timeBox.pattern = "^(2[0-3]|[01][0-9]):?([0-5][0-9]):?([0-5][0-9])$";
    timeBoxFrame.dataset.componentId = ClientId.generate();
    timeBoxFrame.dataset.hotspotId = hotspotId;
    timeBoxFrame.classList.set(COMMON_CSS_CLASS_NAME_LIST.boxFrame);

    // TODO Add documentation
    const timeBoxButton = createDivisionElement(timeBoxFrame);
    timeBoxButton.classList.set(COMMON_CSS_CLASS_NAME_LIST.icon);

    // TODO Add documentation
    const timeBoxButtonImage = createDivisionElement(timeBoxButton);
    timeBoxButton.style.width = createPixelStatement(timeBoxButtonImage.getBoxWidth() /* time box button icon */);
    timeBoxButton.style.height = createPixelStatement(timeBox.getBoxHeight() - timeBoxButton.getOuterHeight());
    timeBox.style.width = createStringFromTemplate("calc(@ - @)", ONE_HUNDRED_PERCENT_STATEMENT, createPixelStatement(timeBoxButton.getBoxWidth()));

    if (isNullOrUndefined(withMilliseconds))
        withMilliseconds = false;
    else if (!isBoolean(withMilliseconds))
        throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "withMilliseconds", "number"));
    else if (withMilliseconds)
        timeBox.placeholder += ".sss";

    /**
     * @description The selected time in the form of an object with the properties "hours", "minutes", "seconds" and "milliseconds".
     * @type {Object}
     */
    let selectedTime;
    // TODO Add documentation
    const timePicker = new FloatingPopup(Tab.getBody(timeBox), hotspotId);
    // TODO Add documentation
    let hourSelect;
    // TODO Add documentation
    let minuteSelect;
    // TODO Add documentation
    let secondSelect;
    // TODO Add documentation
    let millisecondSelect;
    // TODO Add documentation
    let isLocked = false;

    if (isNullOrUndefined(isReadOnly))
        isReadOnly = false;
    else if (!isBoolean(isReadOnly))
        throw createStringFromTemplate(COMMON_TEXT_LIST.invalidBooleanArgumentDataTypeTemplate, "isReadOnly");

    if (isNullOrUndefined(isHidden)) {
        isHidden = false;
        timeBox.style.visibility = "hidden";
    } else {
        if (!isBoolean(isHidden))
            throw new TypeError(createStringFromTemplate(COMMON_TEXT_LIST.invalidArgumentDataTypeTemplate, "isHidden", "Boolean"));

        timeBox.style.visibility = "visible";
    }

    if (!isReadOnly) {
        timeBox.addEventListener(COMMON_EVENT_TYPE_LIST.click, timeBoxOnClick);
        timeBoxButton.addEventListener(COMMON_EVENT_TYPE_LIST.click, timeBoxOnClick);
        timeBox.addEventListener(COMMON_EVENT_TYPE_LIST.key.down, keyboardEvent => {
            if (timePicker &&
                    COMMON_CONTROL_KEY_LIST.tab.equals(keyboardEvent))
                destroyTimePicker();
        });
        timeBox.addEventListener(COMMON_EVENT_TYPE_LIST.key.up, () => {
            if (parseTimeString(timeBox.value)) {
                if (timePicker) {
                    if (hourSelect.selectedIndex !== selectedTime.hours)
                        hourSelect.selectedIndex = selectedTime.hours;

                    if (minuteSelect.selectedIndex !== selectedTime.minutes)
                        minuteSelect.selectedIndex = selectedTime.minutes;

                    if (secondSelect.selectedIndex !== selectedTime.seconds)
                        secondSelect.selectedIndex = selectedTime.seconds;

                    if (withMilliseconds &&
                            millisecondSelect.selectedIndex !== selectedTime.milliseconds)
                        millisecondSelect.selectedIndex = selectedTime.milliseconds;
                }
            } else
                showTimePicker();
        });
    }

    if (isNullOrUndefined(isRequired))
        isRequired = false;
    else if (!isBoolean(isRequired))
        throw createStringFromTemplate(COMMON_TEXT_LIST.invalidBooleanArgumentDataTypeTemplate, "isRequired");

    switch (parseTimeString(value)) {
        case 0 /* If there is no time string specified. */:
            setValidityState(false);

            break;
        case 1 /* If the time string has been successful parsed. */:
            timeBox.value = value;
            setValidityState(true);

            break;
        case 2 /* If the time string is invalid. */:
            setValidityState(false);

            throw "Invalid time value specified.";
    }

    Object.defineProperty(timeBox, "valueInMilliseconds", {
        set: value => {
            if (isNullOrUndefined(value))
                throw "The value in milliseconds cannot be null or undefined";

            if (!isNumber(value))
                throw "The value in milliseconds is not a number.";

            if (value < 0)
                throw "The value in milliseconds cannot be lower than 0.";

            selectedTime = {};

            if (value >= MILLISECONDS_IN_ONE_HOUR) {
                selectedTime.hours = Math.trunc(value / MILLISECONDS_IN_ONE_HOUR);

                if (selectedTime.hours !== 0) {
                    if (selectedTime.hours > 23)
                        throw "";

                    value -= selectedTime.hours * MILLISECONDS_IN_ONE_HOUR;
                }
            } else
                selectedTime.hours = 0;

            if (value >= MILLISECONDS_IN_ONE_MINUTE) {
                selectedTime.minutes = Math.trunc(value / MILLISECONDS_IN_ONE_MINUTE);

                if (selectedTime.minutes !== 0)
                    value -= selectedTime.minutes * MILLISECONDS_IN_ONE_MINUTE;
            } else
                selectedTime.minutes = 0;

            if (value >= MILLISECONDS_IN_ONE_SECOND) {
                selectedTime.seconds = Math.trunc(value / MILLISECONDS_IN_ONE_SECOND);

                if (selectedTime.seconds !== 0)
                    value -= selectedTime.seconds * MILLISECONDS_IN_ONE_SECOND;
            } else
                selectedTime.seconds = 0;

            if (withMilliseconds)
                selectedTime.milliseconds = value;
            
            updateTimeBox();
        },
        get: () => selectedTime ?
                (withMilliseconds ?
                    selectedTime.milliseconds :
                    0) + (selectedTime.seconds * MILLISECONDS_IN_ONE_SECOND) + (selectedTime.minutes * MILLISECONDS_IN_ONE_MINUTE) + (selectedTime.hours * MILLISECONDS_IN_ONE_HOUR) :
                undefined
    });
    Object.defineProperty(timeBox, "valid", {
        get: () => getCustomValidity(timeBox, isRequired)
    });

    return timeBoxFrame;
}
