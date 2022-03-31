/*!
 * Temperature SS.JS
 * Copyright © 2019-2022 Synergy Structure®. All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at
 * https://mozilla.org/MPL/2.0/.
 */
/*
 * Temperature SS.JS is an open source module that provides temperature functionality to JavaScript. For more information visit http://synergystructure.com/temperature-ss.js.
 */

/* global FRAMEWORK */

"use strict";

//<editor-fold desc="Module">

FRAMEWORK.registerModule({
    name: "temperature",
    version: "pts 1"
});

//</editor-fold>
//<editor-fold desc="Celsius">

/**
 * Defines a static interface that represents Celsius functionality.
 * @public
 * @version 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class Celsius {
    //<editor-fold desc="Properties">

    /**
     * @description Converts the specified Celsius value to a Kelvin value and returns it.
     * @param {number} celsius The Celsius value.
     * @returns {number} The Kelvin value converted from the specified Celsius value.
     */
    static toKelvin(celsius) {
        return celsius + 273.15;
    }
    /**
     * @description Converts the specified Celsius value to a Fahrenheit value and returns it.
     * @param {number} celsius The Celsius value.
     * @returns {number} The Fahrenheit value converted from the specified Celsius value.
     */
    static toFahrenheit(celsius) {
        return (celsius * (9 / 5)) + 32;
    }
    /**
     * @description Converts the specified Celsius value to a Rankine value and returns it.
     * @param {number} celsius The Celsius value.
     * @returns {number} The Rankine value converted from the specified Celsius value.
     */
    static toRankine(celsius) {
        return (celsius + 273.15) * (9 / 5);
    }

    //</editor-fold>
}

//</editor-fold>
//<editor-fold desc="Kelvin">

/**
 * Defines a static interface that represents Kelvin functionality.
 * @public
 * @version 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class Kelvin {
    //<editor-fold desc="Properties">

    /**
     * @description Converts the specified Kelvin value to a Celsius value and returns it.
     * @param {number} kelvin The Kelvin value.
     * @returns {number} The Celsius value converted from the specified Kelvin value.
     */
    static toCelsius(kelvin) {
        return kelvin - 273.15;
    }
    /**
     * @description Converts the specified Kelvin value to a Fahrenheit value and returns it.
     * @param {number} kelvin The Kelvin value.
     * @returns {number} The Fahrenheit value converted from the specified Kelvin value.
     */
    static toFahrenheit(kelvin) {
        return (kelvin * (9 / 5)) - 459.67;
    }
    /**
     * @description Converts the specified Kelvin value to a Rankine value and returns it.
     * @param {number} kelvin The Kelvin value.
     * @returns {number} The Rankine value converted from the specified Kelvin value.
     */
    static toRankine(kelvin) {
        return kelvin * (9 / 5);
    }

    //</editor-fold>
}

//</editor-fold>
//<editor-fold desc="Fahrenheit">

/**
 * Defines a static interface that represents Fahrenheit functionality.
 * @public
 * @version 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class Fahrenheit {
    //<editor-fold desc="Properties">

    /**
     * @description Converts the specified Fahrenheit value to a Celsius value and returns it.
     * @param {number} fahrenheit The Fahrenheit value.
     * @returns {number} The Celsius value converted from the specified Fahrenheit value.
     */
    static toCelsius(fahrenheit) {
        return (fahrenheit - 32) * (5 / 9);
    }
    /**
     * @description Converts the specified Fahrenheit value to a Kelvin value and returns it.
     * @param {number} fahrenheit The Fahrenheit value.
     * @returns {number} The Kelvin value converted from the specified Fahrenheit value.
     */
    static toKelvin(fahrenheit) {
        return (fahrenheit + 459.67) * (5 / 9);
    }
    /**
     * @description Converts the specified Fahrenheit value to a Rankine value and returns it.
     * @param {number} fahrenheit The Fahrenheit value.
     * @returns {number} The Rankine value converted from the specified Fahrenheit value.
     */
    static toRankine(fahrenheit) {
        return fahrenheit + 459.67;
    }

    //</editor-fold>
}

//</editor-fold>
//<editor-fold desc="Rankine">

/**
 * Defines a static interface that represents Rankine functionality.
 * @public
 * @version 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class Rankine {
    //<editor-fold desc="Properties">

    /**
     * @description Converts the specified Rankine value to a Celsius value and returns it.
     * @param {number} rankine The Rankine value.
     * @returns {number} The Celsius value converted from the specified Rankine value.
     */
    static toCelsius(rankine) {
        return (rankine - 491.67) * (5 / 9);
    }
    /**
     * @description Converts the specified Rankine value to a Fahrenheit value and returns it.
     * @param {number} rankine The Rankine value.
     * @returns {number} The Fahrenheit value converted from the specified Rankine value.
     */
    static toFahrenheit(rankine) {
        return rankine - 459.67;
    }
    /**
     * @description Converts the specified Rankine value to a Kelvin value and returns it.
     * @param {number} rankine The Rankine value.
     * @returns {number} The Kelvin value converted from the specified Rankine value.
     */
    static toKelvin(rankine) {
        return rankine * (5 / 9);
    }

    //</editor-fold>
}

//</editor-fold>
