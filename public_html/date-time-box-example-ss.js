
/* global COMMON_EVENT_TYPE_LIST, DomId, LOCALIZED_TEXTS_MAP */

// TODO Add documentation
function respondToChanges() {
    document.body.setWidth(300);
    document.body.setHeight(300);
}

// TODO Add documentation
function boot() {// Since JavaScript is enabled, clear everything.
    removeNodes(document.body.childNodes);
    document.addEventListener(COMMON_EVENT_TYPE_LIST.resize, respondToChanges);

    // SS.JS texts

    // Month text names

    LOCALIZED_TEXTS_MAP.set("january", "January");
    LOCALIZED_TEXTS_MAP.set("february", "February");
    LOCALIZED_TEXTS_MAP.set("march", "March");
    LOCALIZED_TEXTS_MAP.set("april", "April");
    LOCALIZED_TEXTS_MAP.set("may", "May");
    LOCALIZED_TEXTS_MAP.set("june", "June");
    LOCALIZED_TEXTS_MAP.set("july", "July");
    LOCALIZED_TEXTS_MAP.set("august", "August");
    LOCALIZED_TEXTS_MAP.set("september", "September");
    LOCALIZED_TEXTS_MAP.set("october", "October");
    LOCALIZED_TEXTS_MAP.set("november", "November");
    LOCALIZED_TEXTS_MAP.set("december", "December");

    // Weekday text names

    LOCALIZED_TEXTS_MAP.set("monday", "Monday");
    LOCALIZED_TEXTS_MAP.set("tuesday", "Tuesday");
    LOCALIZED_TEXTS_MAP.set("wednesday", "Wednesday");
    LOCALIZED_TEXTS_MAP.set("thursday", "Thursday");
    LOCALIZED_TEXTS_MAP.set("friday", "Friday");
    LOCALIZED_TEXTS_MAP.set("saturday", "Saturday");
    LOCALIZED_TEXTS_MAP.set("sunday", "Sunday");

    // Date-Time Box SS.JS texts

    LOCALIZED_TEXTS_MAP.set("default date format", "YYYY-MM-DD");
    LOCALIZED_TEXTS_MAP.set("year", "Year");
    LOCALIZED_TEXTS_MAP.set("month", "Month");
    LOCALIZED_TEXTS_MAP.set("week number", "Week number");
    LOCALIZED_TEXTS_MAP.set("w#", "W#");
    LOCALIZED_TEXTS_MAP.set("date picker today", "Today");
    LOCALIZED_TEXTS_MAP.set("invalid year specified", "Invalid year specified. Try again.");
    LOCALIZED_TEXTS_MAP.set("invalid date specified, current date will be used", "Invalid date. The current date will be used instead.");
    LOCALIZED_TEXTS_MAP.set("invalid date specified", "The date that you have entered is invalid. Please try again.");

    showDateBox(DomId.create("example", "date", "time", "box"), document.body);
    respondToChanges();
}
