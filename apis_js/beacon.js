(function () {
    var beaconEndpoint = apis.filter(function (api) { return api.id == "beacon" })[0].content.vendor.endpoint

    function sendBeaconInfo(info) {
        if (navigator.sendBeacon) {
            navigator.sendBeacon(beaconEndpoint, info)
        }
    }

    window.addEventListener('load', function () { sendBeaconInfo('Your page is loaded...') })

    document.querySelectorAll('.buttons button').forEach(function (button) {
        button.addEventListener('click', function (e) {
            sendBeaconInfo('Info from clicked button: ' + e.target.dataset.info)
        }, false)
    })

    window.addEventListener('unload', function () { sendBeaconInfo('You exit...') })
}())