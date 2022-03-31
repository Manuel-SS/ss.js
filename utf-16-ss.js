/*!
 * UTF-8 SS.JS
 * Copyright © 2019-2022 Synergy Structure®. All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at
 * https://mozilla.org/MPL/2.0/.
 */
/*
 * UTF-16 SS.JS is an open source module that provides additional UTF-16 functionality to JavaScript. For more information visit http://synergystructure.com/utf-16-ss.js.
 * NOTE: These codes are copied from the Unicode section in SS.JS.
 */

"use strict";

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
    checkRequiredNumber(
        codePoint,
        "codePoint"
    );

    if (!CodePoint.isValid(codePoint))
        throw new UnicodeError("The specified code point is not a valid Unicode code point.");

    /**
     * @description The minimum length of a unicode notation.
     * @type {!number}
     */
    const unicodeNotationMinimumLength = 4;
    /**
     * @description The unicode notation.
     * @type {!string}
     */
    const unicodeNotation = codePoint.toString(16).
    toUpperCase();
    return unicodeNotation.length >= unicodeNotationMinimumLength ?
        unicodeNotation :
        // The extension method maskLeft() of class String is not used here because this method needs to work without SS.JS.
        "\u0030" /* Digit zero: 0 */.repeat(unicodeNotationMinimumLength - unicodeNotation.length) + unicodeNotation;
}
