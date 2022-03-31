/*!
 * UTF-8 SS.JS
 * Copyright © 2020-2022 Synergy Structure®. All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at
 * https://mozilla.org/MPL/2.0/.
 */
/*
 * UTF-8 SS.JS is an open source module that provides UTF-8 functionality to JavaScript. For more information visit http://synergystructure.com/utf-8-ss.js.
 * This module depends on SS.JS.
 */

/* global COMMON_TEXT_LIST, FRAMEWORK */

"use strict";

//<editor-fold desc="Module">

FRAMEWORK.registerModule({
    name: "utf-8",
    version: "pts 1"
});

//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="Implementation">

/**
 * @description Generates code points from the specified bytes.
 * @param {number[]} byteList The bytes.
 * @param {number} [byteListIndex=0] The byte list index, which is the index of the first byte to be read.
 * @generator
 * @yields {number} The next code point.
 * @throws {IndexOutOfBoundsError} If the byte list index is lower than 0.
 * @throws {IndexOutOfBoundsError} If the byte list index is higher than the length of the byte list.
 * @throws {UnicodeError} If an unknown byte is found.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function* utf8ByteArrayToCodePointGenerator(
    byteList,
    byteListIndex = 0
) {
    /**
     * @description Returns the current byte.
     * @returns {number}
     * @throws {UnicodeError} If the requested byte is missing.
     * @throws {UnicodeError} If an invalid UTF-8 byte is found.
     * @private
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    function getByte() {
        if (byteListIndex > byteList.length)
            throw new UnicodeError("Requested byte is missing.");

        /**
         * @description The current byte.
         * @type {number}
         */
        const byte = byteList[byteListIndex++];

        if (byte < 0 ||
            byte > (1 << 8) - 1)
            throw new IllogicalError("An unsigned byte cannot be lower than 0 or higher than 255.");

        if (byte === 0xC0 ||
            byte === 0xC1)
            throw new UnicodeError(`Invalid UTF-8 byte found (${byte} at index (${byteListIndex - 1})). Bytes C0 and C1 are invalid because overlong sequences are disallowed.`);

        if (byte >= 0xF5 &&
            byte <= 0xFD)
            throw new UnicodeError(`Invalid UTF-8 byte found (${byte} at index (${byteListIndex - 1})). A byte in the range of F5 to FD is invalid because they would encode code ` +
                `points larger than the U+10FFFF limit of Unicode.`);

        return byte;
    }
    /**
     * @description Returns the current paired byte (consisting of 6 bits).
     * @returns {number} The current paired byte (consisting of 6 bits).
     * @throws {UnicodeError} If an invalid paired byte is found.
     * @private
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    function getPairedByte() {
        /**
         * @description The current paired byte.
         * @type {number}
         */
        const pairedByte = getByte();

        if (pairedByte >> 6 !== 0b10)
            throw new UnicodeError("Invalid paired byte found.");

        return pairedByte & createBitMask(6);
    }
    /**
     * @description Checks the validity of specified code point.
     * @param {number} codePoint The code point.
     * @returns {number} The code point.
     * @throws {UnicodeError} If the specified code point is invalid.
     * @private
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    function checkCodePoint(codePoint) {
        if (codePoint >= 0xD800 &&
            codePoint <= 0xDFFF)
            throw new UnicodeError(`Invalid code point (${createUnicodeNotation(codePoint)}) found. A code point in the range U+D800–U+DFFF is reserved for UTF-16 surrogate halves.`);

        return codePoint;
    }

    checkRequiredArgument(
        byteList,
        "byteList",
        Array
    );
    checkRequiredNumber(
        byteListIndex,
        "byteListIndex"
    );

    if (byteListIndex < 0)
        throw new IndexOutOfBoundsError(`${COMMON_TEXT_LIST.invalidArgument}The byte list index (i.e. ${byteListIndex}) cannot be lower than 0.`);

    if (byteListIndex > byteList.length)
        throw new IndexOutOfBoundsError(`${COMMON_TEXT_LIST.invalidArgument}The byte list index (i.e. ${byteListIndex}) cannot be higher than the length of the byte list (` +
            `${byteList.length}).`);

    while (byteListIndex < byteList.length) {
        /**
         * @description The current byte.
         * @type {number}
         */
        const byte = getByte();

        if (byte >> 7 === 0b0)
            yield checkCodePoint(byte);
        else if (byte >> 5 === 0b110)
            yield checkCodePoint(((byte & createBitMask(5)) << 6) | getPairedByte());
        else if (byte >> 4 === 0b1110)
            yield checkCodePoint(((byte & createBitMask(4)) << 12) | ((getPairedByte() << 6) | getPairedByte()));
        else if (byte >> 3 === 0b11110)
            yield checkCodePoint(((byte & createBitMask(3)) << 18) | ((((getPairedByte() << 6) | getPairedByte()) << 6) | getPairedByte()));
        else
            throw new UnicodeError(`Unknown byte found (${byte}).`);
    }
}

//</editor-fold>