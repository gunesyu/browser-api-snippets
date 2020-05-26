var apis = [
    {
        id: 'beacon',
        name: 'Beacon API',
        definition: {
            display_name: 'Definition',
            content: 'The Beacon interface is used to schedule an asynchronous and non-blocking request to a web server. Beacon requests use the HTTP POST method and requests typically do not require a response. Requests are guaranteed to be initiated before a page is unloaded and they are run to completion, without requiring a blocking request (for example XMLHttpRequest).',
            from: {
                display_name: 'See',
                source: 'MDN',
                url: 'https://developer.mozilla.org/en-US/docs/Web/API/Beacon_API'
            }
        },
        docs: {
            display_name: 'Check Docs',
            url: 'https://www.w3.org/TR/beacon/'
        },
        support: {
            display_name: 'Check Browser Support',
            url: 'https://caniuse.com/#search=beacon'
        },
        content: {
            vendor: {
                endpoint: 'https://putsreq.com/S0Y59TUEUvD089Rh0uXC',
                url: 'https://putsreq.com/S0Y59TUEUvD089Rh0uXC/inspect',
                info: 'PutsReq (http mocker) Requests',
            },
            content: [
                'Useful when you need to send data and don\'t require a response',
                'Data is sent during idle processing interval'
            ],
            code: 'navigator.sendBeacon(targetURL, data)'
        }
    },
    {
        id: 'intersection_observer',
        name: 'IntersectionObserver API',
        definition: {
            display_name: 'Definition',
            content: 'The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document\'s viewport.<br />It lets code register a callback function that is executed whenever an element they wish to monitor enters or exits another element (or the viewport), or when the amount by which the two intersect changes by a requested amount.',
            from: {
                display_name: 'See',
                source: 'MDN',
                url: 'https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API'
            }
        },
        docs: {
            display_name: 'Check Docs',
            url: 'https://www.w3.org/TR/intersection-observer/'
        },
        support: {
            display_name: 'Check Browser Support',
            url: 'https://caniuse.com/#search=intersectionObserver'
        },
        content: {
            content: [
                'Lazy-loading of images or other content as a page is scrolled',
                'Implementing "infinite scrolling" web sites, where more and more content is loaded and rendered as you scroll, so that the user doesn\'t have to flip through pages',
                'Reporting of visibility of advertisements in order to calculate ad revenues',
                'Deciding whether or not to perform tasks or animation processes based on whether or not the user will see the result'
            ],
            code: 'new IntersectionObserver(callback, options)'
        }
    }
];