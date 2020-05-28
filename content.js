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
                url_message: 'Check here for your api usage results',
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
    },
    {
        id: 'cache',
        name: 'Cache API',
        definition: {
            display_name: 'Definition',
            content: 'The Cache interface provides a storage mechanism for Request / Response object pairs that are cached, for example as part of the ServiceWorker life cycle. Note that the Cache interface is exposed to windowed scopes as well as workers. You don\'t have to use it in conjunction with service workers, even though it is defined in the service worker spec.',
            from: {
                display_name: 'See',
                source: 'MDN',
                url: 'https://developer.mozilla.org/en-US/docs/Web/API/Cache'
            }
        },
        docs: {
            display_name: 'Check MDN Docs',
            url: 'https://developer.mozilla.org/tr/docs/Web/API/Cache'
        },
        support: {
            display_name: 'Check Browser Support',
            url: 'https://caniuse.com/#feat=mdn-api_cache'
        },
        content: {
            vendor: {
                endpoint: 'https://httpbin.org/json',
                url: 'https://httpbin.org/',
                url_message: 'Check this great playground',
                info: 'HTTPbin.org | A simple HTTP Request & Response Service',
            },
            content: [
                'You are responsible for implementing how your script (e.g. in a ServiceWorker) handles Cache updates',
                'Items in a Cache do not get updated unless explicitly requested; they don’t expire unless deleted',
                'Call any of the Cache methods to maintain the Cache',
                'Each browser has a hard limit on the amount of cache storage that a given origin can use'
            ],
            code: 'CacheStorage.open() --> Cache.add(request), ... '
        }
    },
    {
        id: 'storage_manager',
        name: 'StorageManager API',
        definition: {
            display_name: 'Definition',
            content: 'The StorageManager interface of the the Storage API provides an interface for managing persistance permissions and estimating available storage. You can get a reference to this interface using either navigator.storage or WorkerNavigator.storage.',
            from: {
                display_name: 'See',
                source: 'MDN',
                url: 'https://developer.mozilla.org/en-US/docs/Web/API/StorageManager'
            }
        },
        docs: {
            display_name: 'Check Docs',
            url: 'https://storage.spec.whatwg.org/'
        },
        support: {
            display_name: 'Check Browser Support',
            url: 'https://caniuse.com/#feat=mdn-api_storagemanager'
        },
        content: {
            content: [
                'This feature is available only in secure contexts (HTTPS)',
                'Defines an API for persistent storage and quota estimates, as well as the platform storage architecture',
                '<strong>!!! At this time, there is no programmatic way to tell the browser you no longer need persistent storage</strong>'
            ],
            code: 'StorageManager.estimate() ...'
        }
    },
    {
        id: 'device_memory',
        name: 'Device Memory API',
        definition: {
            display_name: 'Definition',
            content: 'The deviceMemory read-only property of the Navigator interface returns the approximate amount of device memory in gigabytes. This value is an approximation given by rounding down to the nearest power of 2 and dividing that number by 1024. Also, the lower and upper bounds are used to protect privacy of owners of very low- or high-end devices.',
            from: {
                display_name: 'See',
                source: 'MDN',
                url: 'https://developer.mozilla.org/en-US/docs/Web/API/Navigator/deviceMemory'
            }
        },
        docs: {
            display_name: 'Check Docs',
            url: 'https://www.w3.org/TR/device-memory/'
        },
        support: {
            display_name: 'Check Browser Support',
            url: 'https://caniuse.com/#feat=mdn-api_navigator_devicememory'
        },
        content: {
            content: [
                'This feature is available only in secure contexts (HTTPS)',
                'There are two ways to acces the approximate amount of RAM device has: via JavaScript API and via Client Hints HTTP header'
            ],
            code: 'navigator.deviceMemory || HTTP Client Hints Device-Memory'
        }
    },
    {
        id: 'dialog',
        name: 'Dialog API',
        definition: {
            display_name: 'Definition',
            content: 'The HTMLDialogElement interface provides methods to manipulate <dialog> elements. It inherits properties and methods from the HTMLElement interface.',
            from: {
                display_name: 'See',
                source: 'MDN',
                url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement'
            }
        },
        docs: {
            display_name: 'Check Docs',
            url: 'https://www.w3.org/TR/html52/interactive-elements.html#the-dialog-element'
        },
        support: {
            display_name: 'Check Browser Support',
            url: 'https://caniuse.com/#search=dialog'
        },
        content: {
            content: [
                'You can style dialog with regular css rules',
                'You can style modal type dialog\'s backdrop with pseudoelement <strong>::backdrop</strong>',
                'Has <strong>"close"</strong> (regular close) and <strong>"cancel"</strong> (close with esc key) events',
                'There is also polyfill available'
            ],
            code: ''
        }
    },
    {
        id: 'notifications',
        name: 'Notifications API',
        definition: {
            display_name: 'Definition',
            content: 'The Notifications API allows web pages to control the display of system notifications to the end user. These are outside the top-level browsing context viewport, so therefore can be displayed even when the user has switched tabs or moved to a different app. The API is designed to be compatible with existing notification systems, across different platforms.',
            from: {
                display_name: 'See',
                source: 'MDN',
                url: 'https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API'
            }
        },
        docs: {
            display_name: 'Check Docs',
            url: 'https://www.w3.org/TR/notifications/'
        },
        support: {
            display_name: 'Check Browser Support',
            url: 'https://caniuse.com/#feat=notifications'
        },
        content: {
            content: [
                'This feature is available only in secure contexts (HTTPS)',
                'First, the user needs to grant the current origin permission to display system notifications, which is generally done when the app or site initialises',
                'Next, a new notification is created'
            ],
            code: 'Notification.requestPermission() -->  Notification()'
        }
    },
    {
        id: 'network',
        name: 'Network State and Information API',
        definition: {
            display_name: 'Definition',
            content: 'The Network Information API provides information about the system\'s connection in terms of general connection type (e.g., \'wifi\', \'cellular\', etc.). This can be used to select high definition content or low definition content based on the user\'s connection. The entire API consists of the addition of the NetworkInformation interface and a single property to the Navigator interface: Navigator.connection.',
            from: {
                display_name: 'See',
                source: 'MDN',
                url: 'https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API'
            }
        },
        docs: {
            display_name: 'Check Docs',
            url: 'https://www.w3.org/TR/netinfo-api/'
        },
        support: {
            display_name: 'Check Browser Support',
            url: 'https://caniuse.com/#feat=mdn-api_networkinformation'
        },
        content: {
            content: [
                'Connection type change is listened from connection object while network status is listened from window object'
            ],
            code: ''
        }
    },
    {
        id: 'page_visibility',
        name: 'Page Visibility API',
        definition: {
            display_name: 'Definition',
            content: 'With tabbed browsing, there is a reasonable chance that any given webpage is in the background and thus not visible to the user. The Page Visibility API provides events you can watch for to know when a document becomes visible or hidden, as well as features to look at the current visibility state of the page.',
            from: {
                display_name: 'See',
                source: 'MDN',
                url: 'https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API'
            }
        },
        docs: {
            display_name: 'Check Docs',
            url: 'https://www.w3.org/TR/page-visibility-2/'
        },
        support: {
            display_name: 'Check Browser Support',
            url: 'https://caniuse.com/#feat=pagevisibility'
        },
        content: {
            content: [
                'When the user minimizes the window or switches to another tab, the API sends a visibilitychange event'
            ],
            code: 'visibilitychange event for document --> document.visibilityState readonly property'
        }
    },
    {
        id: 'geolocation',
        name: 'Geolocation API',
        definition: {
            display_name: 'Definition',
            content: 'The Geolocation API allows the user to provide their location to web applications if they so desire. For privacy reasons, the user is asked for permission to report location information.',
            from: {
                display_name: 'See',
                source: 'MDN',
                url: 'https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API'
            }
        },
        docs: {
            display_name: 'Check Docs',
            url: 'https://w3c.github.io/geolocation-api/'
        },
        support: {
            display_name: 'Check Browser Support',
            url: 'https://caniuse.com/#feat=mdn-api_geolocation'
        },
        content: {
            content: [
                'This feature is available only in secure contexts (HTTPS)'
            ],
            code: 'navigator.geolocation'
        }
    }
];