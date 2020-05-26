var apis = [
    {
        id: 'beacon',
        name: 'Beacon API',
        example_url: 'apis/beacon.html',
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
    }
];