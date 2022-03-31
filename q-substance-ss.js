/*!
 * Q Substance™ SS.JS
 * Copyright © 2019-2022 Synergy Structure®. All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at
 * https://mozilla.org/MPL/2.0/.
 */
/*
 * Q Substance SS.JS is an open source module that provides web service functionality to SS.JS. For more information visit http://synergystructure.com/q-substance-ss.js.
 * This module depends on SS.JS.
 */

/* global IN_DEBUG_MODE */
/* global FormData */
/* global FRAMEWORK */

"use strict";

//<editor-fold desc="Options">

/**
 * @description Option keys.
 * @type {{httpRequestTimeout: string}}
 */
const Q_SUBSTANCE_OPTION_KEY_LIST = {
    /**
     * @description The option key to set and obtain a value for the <code>XMLHttpRequest.timeout</code> property.
     */
    httpRequestTimeout: "httpRequestTimeout"
};

//</editor-fold>
//<editor-fold desc="Module">

FRAMEWORK.registerModule({
    name: "q substance",
    version: "1.0.0.0"
});

//</editor-fold>
//<editor-fold desc="HTTP">

/**
 * @description A list of HTTP response status codes.
 * @type {{success: Object, clientError: Object, serverError: Object, redirection: Object}}
 * @readonly
 * @see http://w3.org/Protocols/rfc2616/rfc2616-sec10.html
 * @see https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
 */
const HTTP_STATUS_CODE_LIST = {
    /**
     * @description This class of status code indicates that the client's request was successfully received, understood and accepted.
     * @type {Object}
     */
    success: {
        /**
         * @description Standard response for successful HTTP requests. The actual response will depend on the request method used. In a GET request, the response will contain an entity
         * corresponding to the requested resource. In a POST request, the response will contain an entity describing or containing the result of the action.
         * @type {number}
         */
        ok: 200,
        /**
         * @description The request has been fulfilled and resulted in a new resource being created.
         * @type {number}
         */
        created: 201,
        /**
         * @description The request has been accepted for processing, but the processing has not been completed. The request might or might not eventually be acted upon, as it might be
         * disallowed when processing actually takes place.
         * @type {number}
         */
        accepted: 202,
        /**
         * @description The server successfully processed the request, but is returning information that may be from another source.
         * @type {number}
         */
        nonAuthoritativeInformation: 203,
        /**
         * @description The server successfully processed the request, but is not returning any content.
         * @type {number}
         */
        noContent: 204,
        /**
         * @description The server successfully processed the request, but is not returning any content. Unlike a 204 response, this response requires that the requester reset the
         * document view.
         * @type {number}
         */
        resetContent: 205,
        /**
         * @description The server is delivering only part of the resource (byte serving) due to a range header sent by the client. The range header is used by tools like wget to enable
         * resuming of interrupted downloads, or split a download into multiple simultaneous streams.
         * @type {number}
         */
        partialContent: 206,
        /**
         * @description The message body that follows is an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.
         * @type {number}
         */
        multiStatus: 207,
        /**
         * @description The members of a DAV binding have already been enumerated in a previous reply to this request, and are not being included again.
         * @type {number}
         */
        alreadyReported: 208,
        /**
         * @description The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the
         * current instance.
         * @type {number}
         */
        imUsed: 226
    },
    /**
     * @description This class of status code indicates the client must take additional action to complete the request.
     * @type {Object}
     */
    redirection: {
        /**
         * @description Indicates multiple options for the resource that the client may follow. It, for instance, could be used to present different format options for video, list files
         * with different extensions, or word sense disambiguation.
         * @type {number}
         */
        multipleChoices: 300,
        /**
         * @description This and all future requests should be directed to the specified URI.
         * @type {number}
         */
        movedPermanently: 301,
        /**
         * @description This is an example of industry practice contradicting the standard. The HTTP/1.0 specification (RFC 1945) required the client to perform a temporary redirect
         * (the original describing phrase was "Moved Temporarily"), but popular browsers implemented 302 with the functionality of a 303 See Other. Therefore, HTTP/1.1 added status
         * codes 303 and 307 to distinguish between the two behaviours. However, some Web applications and frameworks use the 302 status code as if it were the 303.
         * @type {number}
         */
        found: 302,
        /**
         * @description The response to the request can be found under another URI using a GET method. When received in response to a POST (or PUT/DELETE), it should be assumed that the
         * server has received the data and the redirect should be issued with a separate GET message.
         * @type {number}
         */
        seeOther: 303,
        /**
         * @description Indicates that the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match. This means that there is
         * no need to retransmit the resource, since the client still has a previously-downloaded copy.
         * @type {number}
         */
        notModified: 304,
        /**
         * @description The requested resource is only available through a proxy, whose address is provided in the response. Many HTTP clients (such as Mozilla and Internet Explorer) do
         * not correctly handle responses with this status code, primarily for security reasons.
         * @type {number}
         */
        useProxy: 305,
        /**
         * @description No longer used. Originally meant "Subsequent requests should use the specified proxy."
         * @type {number}
         */
        switchProxy: 306,
        /**
         * @description In this case, the request should be repeated with another URI; however, future requests should still use the original URI. In contrast to how 302 was
         * historically implemented, the request method is not allowed to be changed when reissuing the original request. For instance, a POST request should be repeated using another
         * POST request.
         * @type {number}
         */
        temporaryRedirect: 307,
        /**
         * @description The request, and all future requests should be repeated using another URI. 307 and 308 (as proposed) parallel the behaviours of 302 and 301, but do not allow
         * the HTTP method to change. So, for example, submitting a form to a permanently redirected resource may continue smoothly.
         * @type {number}
         */
        permanentRedirect: 308
    },
    /**
     * @description The 4xx class of status code is intended for cases in which the client seems to have erred.
     * @type {Object}
     */
    clientError: {
        /**
         * @description The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request
         * message framing, or deceptive request routing).
         * @type {number}
         */
        badRequest: 400,
        /**
         * @description Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the
         * requested response.
         * @type {number}
         */
        unauthorized: 401,
        /**
         * @description Reserved for future use. The original intention was that this code might be used as part of some form of digital cash or micropayment scheme, but that has not
         * happened, and this code is not usually used. YouTube uses this status if a particular IP address has made excessive requests, and requires the person to enter a CAPTCHA.
         * @type {number}
         */
        paymentRequired: 402,
        /**
         * @description The requested resource could not be found but may be available again in the future. Subsequent requests by the client are permissible.
         * @type {number}
         */
        forbidden: 403,
        /**
         * @description The requested resource could not be found but may be available again in the future. Subsequent requests by the client are permissible.
         * @type {number}
         */
        notFound: 404,
        /**
         * @description A request was made of a resource using a request method not supported by that resource; for example, using GET on a form which requires data to be presented via
         * POST, or using PUT on a read-only resource.
         * @type {number}
         */
        methodNotAllowed: 405,
        /**
         * @description The requested resource is only capable of generating content not acceptable according to the Accept headers sent in the request.
         * @type {number}
         */
        notAcceptable: 406,
        /**
         * @description The client must first authenticate itself with the proxy.
         * @type {number}
         */
        proxyAuthenticationRequired: 407,
        /**
         * @description The server timed out waiting for the request. According to HTTP specifications: "The client did not produce a request within the time that the server was
         * prepared to wait. The client MAY repeat the request without modifications at any later time."
         * @type {number}
         */
        requestTimeout: 408,
        /**
         * @description Indicates that the request could not be processed because of conflict in the request, such as an edit conflict in the case of multiple updates.
         * @type {number}
         */
        conflict: 409,
        /**
         * @description Indicates that the resource requested is no longer available and will not be available again. This should be used when a resource has been intentionally removed
         * and the resource should be purged. Upon receiving a 410 status code, the client should not request the resource again in the future. Clients such as search engines should
         * remove the resource from their indices. Most use cases do not require clients and search engines to purge the resource, and a "404 Not Found" may be used instead.
         * @type {number}
         */
        gone: 410,
        /**
         * @description The request did not specify the length of its content, which is required by the requested resource.
         * @type {number}
         */
        lengthRequired: 411,
        /**
         * @description The server does not meet one of the preconditions that the requester put on the request.
         * @type {number}
         */
        preconditionFailed: 412,
        /**
         * @description The request is larger than the server is willing or able to process. Called "Request Entity Too Large " previously.
         * @type {number}
         */
        payloadTooLarge: 413,
        /**
         * @description The URI provided was too long for the server to process. Often the result of too much data being encoded as a query-string of a GET request, in which case it
         * should be converted to a POST request.
         * @type {number}
         */
        requestURITooLong: 414,
        /**
         * @description The request entity has a media type which the server or resource does not support. For example, the client uploads an image as image/svg+xml, but the server
         * requires that images use a different format.
         * @type {number}
         */
        unsupportedMediaType: 415,
        /**
         * @description The client has asked for a portion of the file (byte serving), but the server cannot supply that portion. For example, if the client asked for a part of the
         * file that lies beyond the end of the file.
         * @type {number}
         */
        requestedRangeNotSatisfiable: 416,
        /**
         * @description The server cannot meet the requirements of the Expect request-header field.
         * @type {number}
         */
        expectationFailed: 417,
        /**
         * @description The request was directed at a server that is not able to produce a response (for example because a connection reuse).
         * @type {number}
         */
        misdirectedRequest: 421,
        /**
         * @description The request was well-formed but was unable to be followed due to semantic errors.
         * @type {number}
         */
        unprocessableEntity: 422,
        /**
         * @description The client should switch to a different protocol such as TLS/1.0, specified in the Upgrade header field.
         * @type {number}
         */
        upgradeRequired: 426,
        /**
         * @description The origin server requires the request to be conditional. Intended to prevent "the 'lost update' problem, where a client GETs a resource's state, modifies it
         * and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict."
         * @type {number}
         */
        preconditionRequired: 428,
        /**
         * @description The user has sent too many requests in a specified amount of time. Intended for use with rate limiting schemes.
         * @type {number}
         */
        tooManyRequests: 429,
        /**
         * @description The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large.
         * @type {number}
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
         * @type {number}
         */
        internalServerError: 500,
        /**
         * @description The server either does not recognize the request method, or it lacks the ability to fulfill the request. Usually this implies future availability (e.g., a new
         * feature of a web-service API).
         * @type {number}
         */
        notImplemented: 501,
        /**
         * @description The server was acting as a gateway or proxy and received an invalid response from the upstream server.
         * @type {number}
         */
        badGateway: 502,
        /**
         * @description The server is currently unavailable (because it is overloaded or down for maintenance). Generally, this is a temporary state.
         * @type {number}
         */
        serviceUnavailable: 503,
        /**
         * @description The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.
         * @type {number}
         */
        gatewayTimeout: 504,
        /**
         * @description The server does not support the HTTP protocol version used in the request.
         * @type {number}
         */
        httpVersionNotSupported: 505,
        /**
         * @description Transparent content negotiation for the request results in a circular reference.
         * @type {number}
         */
        variantAlsoNegotiates: 506,
        /**
         * @description The client needs to authenticate to gain network access. Intended for use by intercepting proxies used to control access to the network (e.g., "captive portals"
         * used to require agreement to Terms of Service before granting full Internet access via a Wi-Fi hotspot).
         * @type {number}
         */
        networkAuthenticationRequired: 511
    }
};
Object.freeze(HTTP_STATUS_CODE_LIST);

/**
 * @description HTTP methods that correspond to CRUD operations.
 * @type {!string}
 * @readonly
 */
const CRUD_HTTP_METHOD_LIST = {
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
};
Object.freeze(CRUD_HTTP_METHOD_LIST);

/**
 * @description Defines a manager for HTTP request caching.
 * @constructor
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function HttpRequestCacheManager() {
    //<editor-fold desc="Private Operations">

    /**
     * @description Returns a newly generated HTTP request ID.
     * @returns {!number}
     * @private
     * @since 1.0
     * @author Manuel Milosavljević
     */
    function generateHttpRequestId() {
        /**
         * @description The generated HTTP request ID result.
         * @type {IteratorYieldResult<number>}
         * @private
         */
        const generatedHttpRequestIdResult = _httpRequestIdGenerator.next();

        if (generatedHttpRequestIdResult.done) {
            _httpRequestIdGenerator = generateLocalId();
            return generateHttpRequestId();
        }

        return generatedHttpRequestIdResult.value;
    }

    //</editor-fold>
    //<editor-fold desc="Properties">

    /**
     * @description The HTTP request ID generator.
     * @type {Generator<number, void, *>}
     * @private
     */
    let _httpRequestIdGenerator = generateLocalId();
    /**
     * @description The cache that contains the HTTP requests.
     * @type {Map<number, XMLHttpRequest>}
     */
    const _httpRequestCache = new Map();

    //</editor-fold>
    //<editor-fold desc="Public Operations">

    /**
     * @description Sets the specified HTTP request in this cache manager.
     * @param {XMLHttpRequest} httpRequest The HTTP request.
     * @returns {!number} The (HTTP request) ID.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević
     */
    this.set = httpRequest => {
        /**
         * @description The ID.
         * @type {number}
         */
        const id = generateHttpRequestId();
        _httpRequestCache.set(
            id,
            httpRequest
        );
        return id;
    };
    /**
     * @description Returns the HTTP request with the specified ID.
     * @param {number} id The (HTTP request) ID.
     * @returns {?XMLHttpRequest} The HTTP request.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević
     */
    this.get = id =>
        _httpRequestCache.get(id);
    /**
     * @description Deletes the HTTP request with the specified ID from the cache.
     * @param {number} id The (HTTP request) ID.
     * @returns {!boolean} If an HTTP request has been found with the specified ID and deleted.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević
     */
    this.delete = id =>
        _httpRequestCache.delete(id);
    /**
     * @description Aborts the specified HTTP request with the specified ID and deletes it from the cache.
     * @param {number} id
     * @returns {XMLHttpRequest} The aborted HTTP request, if there is one.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević
     */
    this.abort = id => {
        /**
         * @description The HTTP request cache to delete.
         * @type {?XMLHttpRequest}
         */
        const httpRequest = _httpRequestCache.get(id);

        if (!isNothing(httpRequest)) {
            httpRequest.abort();
            _httpRequestCache.delete(id);
        }

        return httpRequest;
    };
    /**
     * @description Aborts all cached HTTP requests and deletes them from the cache.
     * @returns {void}
     * @public
     * @since 1.0
     * @author Manuel Milosavljević
     */
    this.abortAll = () => {
        if (!_httpRequestCache.isEmpty()) {
            _httpRequestCache.forEach(httpRequest =>
                httpRequest.abort());
            _httpRequestCache.clear();
        }
    };
    /**
     * @description Returns if the cache is empty.
     * @returns {!boolean} If the cache is empty.
     * @public
     * @since 1.0
     * @author Manuel Milosavljević
     */
    this.isEmpty = () =>
        _httpRequestCache.isEmpty();

    //</editor-fold>
}

/**
 * @description Checks if CORS (Cross-Origin Resource Sharing) is supported (by XMLHttpRequest).
 * @returns {!boolean} If CORS is supported.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
XMLHttpRequest.prototype.supportsCors = function () {
    return "withCredentials" in this;
};

//</editor-fold>
//<editor-fold desc="Errors">

/**
 * @description Defines a representation of a network error.
 * @public
 * @version 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
class NetworkError extends Error {
    //<editor-fold desc="Constructor">

    /**
     * @description NetworkError constructor.
     * @param {string} message The message.
     * @param {number} httpStatusCode The HTTP status code.
     * @param {string} httpStatusDescription The HTTP status description.
     * @since 1.0
     */
    constructor(
        message,
        httpStatusCode,
        httpStatusDescription
    ) {
        super(message);
        this.httpStatusCode = httpStatusCode;
        this.httpStatusDescription = httpStatusDescription;
    }

    //</editor-fold>
}

//</editor-fold>
//<editor-fold desc="Web Service">

/**
 * @description Common HTTP request parameter names.
 * @type {{
 * name: string,
 * id: string
 * }}
 */
const COMMON_HTTP_REQUEST_PARAMETER_NAME_LIST = {
    /**
     * @description An ID.
     */
    id: "id",
    /**
     * @description A name.
     */
    name: "name",
    /**
     * @description A value.
     */
    value: "value"
};

/**
 * @description Meta information of a web service.
 * @param {string} [name="default"] The name.
 * @param {string} [url] The URL. If empty, the <base> element must be present in the header.
 * @class
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
function WebService (
    name = "default",
    url= getBaselineUrl()
) {
    //<editor-fold desc="Properties">

    /**
     * @description The name.
     * @type {!string}
     */
    this.name = name;
    /**
     * @description The URL.
     * @type {!string}
     */
    this.url = url;
    /**
     * @description The HTTP request cache manager.
     * @type {!HttpRequestCacheManager}
     */
    this.httpRequestCacheManager = new HttpRequestCacheManager();

    //</editor-fold>
}
/**
 * @description The callback function to execute when an HTTP response is received and ready to be processed.
 * @callback WebService.OnRequestReadyCallback
 * @param {XMLHttpRequest} httpRequest The HTTP request.
 * @returns {boolean} If the HTTP request has been processed successfully.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * @description The callback function to execute when an exception is caught during an HTTP request.
 * @callback WebService.OnRequestExceptionCallback
 * @param {Object} exception The caught exception.
 * @param {XMLHttpRequest} request A reference to the HTTP request.
 * @returns {void}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * @description The callback function to execute when the HTTP request has been aborted.
 * @callback WebService.OnRequestAbortCallback
 * @param {ProgressEvent} progressEvent The event measuring the progress of the HTTP request.
 * @returns {void}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * @description The callback function to execute when the data transfer is in progress.
 * @callback WebService.OnRequestProgressCallback
 * @param {ProgressEvent} progressEvent The event measuring the progress of the HTTP request.
 * @returns {void}
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * @description Web service HTTP configuration to make an HTTP request.
 * @typedef {Object} WebServiceHttpRequestConfiguration
 * @property {!string} method The HTTP method to use.
 * @property {!string} url The URL to send the request to.
 * @property {!string} mediaType The media type.
 * @property {WebService.OnRequestReadyCallback} [onReady] The method to execute when a HTTP response is received and ready to be processed.
 * @property {FormData} [parameterList] The request parameters.
 * @property {XMLHttpRequestResponseType} [responseType] The type of data that is expected to be returned from the HTTP response when a HTTP response is received and ready to be
 * processed.
 * @property {WebService.OnRequestExceptionCallback} [onException] The method to execute when an exception is caught during an HTTP request.
 * @property {WebService.OnRequestAbortCallback} [onAbort] The method to execute when the HTTP request has been aborted.
 * @property {WebService.OnRequestProgressCallback} [onProgress] The method to execute upon data transfer progress.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
/**
 * @description Creates a new HTTP request to communicate with a web service.
 * @param {!WebServiceHttpRequestConfiguration} configuration The HTTP request configuration.
 * @returns {!XMLHttpRequest} An instance of XMLHttpRequest.
 * @public
 * @since 1.0
 * @author Manuel Milosavljević <manuel@synergystructure.com>
 */
WebService.createRequest = configuration => {
    /**
     * @description Throws the specified error if "onException" is not set, otherwise the specified error will be passed to the "onException" method.
     * @param {Error|string} error The error.
     * @returns {void}
     * @throws {Error} The specified error if "onException" is not set.
     * @private
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    function throwException(error) {
        if (configuration.isPropertyNullOrUndefined("onException"))
            throw error;

        configuration.onException(
            error,
            request
        );
    }
    /**
     * @description Creates a new {@link NetworkError} with the specified HTTP status details and throws it with {@link throwException()}.
     * @param {number} httpStatusCode The HTTP status code.
     * @param {string} httpStatusDescription The HTTP status description.
     * @returns {void}
     * @private
     * @since 1.0
     * @author Manuel Milosavljević <manuel@synergystructure.com>
     */
    function throwHttpException(
        httpStatusCode,
        httpStatusDescription
    ) {
        throwException(new NetworkError(
            "A network error has occurred.",
            httpStatusCode,
            httpStatusDescription
        ));
    }

    /**
     * @description The HTTP request.
     * @type {XMLHttpRequest}
     */
    const request = new XMLHttpRequest();

    try {
        request.open(
            configuration.method,
            configuration.url
        );

        if (!configuration.isPropertyNullOrUndefined("responseType"))
            request.responseType = configuration.responseType;

        if (OPTION_MAP.has(Q_SUBSTANCE_OPTION_KEY_LIST.httpRequestTimeout)) {
            // noinspection JSValidateTypes
            request.timeout = OPTION_MAP.get(Q_SUBSTANCE_OPTION_KEY_LIST.httpRequestTimeout);
            request.addEventListener(
                "timeout",
                () => throwHttpException(
                    request.status,
                    request.statusText
                )
            );
        }

        request.addEventListener(
            "readystatechange",
            () => {
                if (request.readyState !== 4 /* 4 === ok */)
                    return;

                switch (request.status) {
                    case 0: // 0 == internal error or the HTTP request has been aborted
                        if (IN_DEBUG_MODE)
                            console.warn("A 0 has been returned instead of an HTTP status.");
                        return; // ready state is "ok", so ignore this.
                    default:
                        if (!configuration.isPropertyNullOrUndefined("onReady") &&
                            !configuration.onReady(request))
                            throwHttpException(
                                request.status,
                                request.statusText
                            );
                }
            }
        );

        if (!configuration.isPropertyNullOrUndefined("onProgress"))
            request.upload.addEventListener(
                "progress",
                configuration.onProgress
            );

        if (!configuration.isPropertyNullOrUndefined("onAbort"))
            request.addEventListener(
                "abort",
                configuration.onAbort
            );

        request.addEventListener(
            "error",
            () => throwHttpException(
                request.status,
                request.statusText
            )
        );

        if (configuration.isPropertyNullOrUndefined("parameterList"))
            request.send();
        else {
            if (!configuration.isPropertyNullOrUndefined("mediaType"))
                request.setRequestHeader(
                    "Content-Type",
                    configuration.mediaType
                );
            else if (!(configuration.parameterList instanceof FormData) &&
                IN_DEBUG_MODE)
                console.warn("Parameters have been set and they are not an instance of FormData but a media type has been specified.");

            request.send(configuration.parameterList);
        }
    } catch (error) {
        throwException(error);
    }

    return request;
};

//</editor-fold>