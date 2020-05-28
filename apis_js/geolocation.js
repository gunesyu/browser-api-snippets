(function () {

    var check = document.getElementById('check')
    var check_prompt = document.getElementById('check_prompt')

    var watch = document.getElementById('watch')
    var watch_prompt = document.getElementById('watch_prompt')

    if (!navigator.geolocation) {
        var t = "Your browser does not support geolocation!"
        check_prompt.innerHTML = t
        watch_prompt.innerHTML = t

        check.parentElement.removeChild(check)
        watch.parentElement.removeChild(watch)

        return
    }

    check_prompt.style.display = 'none'
    var latSpan = document.getElementById('lat')
    var lonSpan = document.getElementById('lon')
    var accSpan = document.getElementById('acc')

    check.addEventListener('click', function () {

        navigator.geolocation.getCurrentPosition(
            function (position) {

                check_prompt.style.display = 'block'

                latSpan.innerText = position.coords.latitude
                lonSpan.innerText = position.coords.longitude
                accSpan.innerText = position.coords.accuracy

            },
            function (error) {

                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        check_prompt.innerHTML = "You denied the request..."
                        break;
                    case error.POSITION_UNAVAILABLE:
                        check_prompt.innerHTML = "Location information is unavailable..."
                        break;
                    case error.TIMEOUT:
                        check_prompt.innerHTML = "The request timed out..."
                        break;
                    case error.UNKNOWN_ERROR:
                        check_prompt.innerHTML = "An unknown error occurred..."
                        break;
                }
            }
        )

    }, false)

    watch_prompt.style.display = 'none'
    var watchLatSpan = document.getElementById('watch_lat')
    var watchLonSpan = document.getElementById('watch_lon')
    var watchAccSpan = document.getElementById('watch_acc')
    var watchSpeSpan = document.getElementById('watch_spe')

    watch.addEventListener('click', function () {

        navigator.geolocation.watchPosition(
            function (position) {

                watch_prompt.style.display = 'block'

                watchLatSpan.innerText = position.coords.latitude
                watchLonSpan.innerText = position.coords.longitude
                watchAccSpan.innerText = position.coords.accuracy

                if (position.coords.speed) {
                    watchSpeSpan.innerText = position.coords.speed
                }

            },
            function (error) {

                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        watch_prompt.innerHTML = "You denied the request..."
                        break;
                    case error.POSITION_UNAVAILABLE:
                        watch_prompt.innerHTML = "Location information is unavailable..."
                        break;
                    case error.TIMEOUT:
                        watch_prompt.innerHTML = "The request timed out..."
                        break;
                    case error.UNKNOWN_ERROR:
                        watch_prompt.innerHTML = "An unknown error occurred..."
                        break;
                }
            },
            { maximumAge: 0, timeout: 600 }
        )

    }, false)

})()