(function(){

    var url = apis.filter(function (api) { return api.id == "cache" })[0].content.vendor.endpoint

    var showResultInThis = document.getElementById('result')

    document.getElementById('get').addEventListener('click', function (){

        getJSONData(url, showResultInThis)

    }, false)

    document.getElementById('clear').addEventListener('click', function (){

        if ('caches' in window) {

            caches.delete('custom-data-cache-key').then(function (result) {
                var message = result ? 'Cache deleted...' : 'An error has occured...<br /><strong>Get data into your cache first to see this properly working.</strong<'
                showResultInThis.innerHTML = '<p>'+ message +'</p>'

            })

        }

    }, false)
}())

function getJSONData(url, showResultInThis) {

    if ('caches' in window) {

        window.caches.open('custom-data-cache-key').then(function (cache) {

            cache.match(url).then(function (result) {

                if (result == undefined) {

                    showResultInThis.innerHTML = '<p>not found in cache</p>'

                    UIMessage()

                    fetch(url).then(function (result) {

                        var clonedResponse = result.clone()

                        cache.put(url, result)

                        clonedResponse.text().then(function (data) {
                            showResultInThis.innerHTML += '<code>data:' + data + '</code>'
                            setTimeout(UIMessageRemove, 1000)
                        })
                    })
                }
                else
                {
                    result.text().then(function (text) {
                        showResultInThis.innerHTML = '<p>cache hit:<p><code>url: ' + url + '</code><br /><br /><code>data: ' + text + '</code>'
                    })
                }
            })
        })
    }
}