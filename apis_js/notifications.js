(function(){

    var requestButton = document.getElementById('request')
    var requestResultSpan = document.getElementById('permission_result')

    var basicButton = document.getElementById('basic')

    var customButton = document.getElementById('custom')

    requestButton.addEventListener('click', function(){

        Notification.requestPermission().then(function (result) {
            requestResultSpan.innerText = "Notification permission request resulted with: " + result
        })

    }, false)

    basicButton.addEventListener('click', function(){

        if (Notification.permission == "granted") {

            var notify = new Notification("This is a basic notification!")

        }
        else
        {
            requestResultSpan.innerText = "You need to allow notifications first"
        }

    }, false)

    customButton.addEventListener('click', function(){

        if (Notification.permission == "granted") {

            var notify = new Notification("This is a custom notification with some features", {
                body: "Clicking will redirect you to somewhere",
                requireInteraction: true,
                icon: "https://media.giphy.com/media/QBjok2NBIzSR7IaDQK/giphy.gif"
            })

            notify.onclick = function(e) {
                e.target.close()

                window.open("https://gph.is/g/aNz2PrK", "_blank")
            }

        }
        else
        {
            requestResultSpan.innerText = "You need to allow notifications first"
        }

    }, false)

}())