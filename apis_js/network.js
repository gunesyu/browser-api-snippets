(function(){
    var state = document.getElementById('state')
    var check = document.getElementById('check')

    var listen = document.getElementById('listen')
    var changes = document.getElementById('changes')


    check.addEventListener('click', promptFirstState, false)

    listen.addEventListener('click', function(){

        updateState()

        state.innerHTML = "Network changes is now being listened... <br />" + state.innerHTML

    }, false)

    function promptFirstState() {
        var status = (navigator.onLine) ? 'online' : 'offline'

        state.innerHTML = "Network state is detected: <strong>" + status + "</strong>"
        state.className = status
    }


    function updateState(e) {

        var newState = (navigator.onLine) ? 'online' : 'offline'

        state.innerHTML = "You are now <strong>" + newState + "</strong>"
        state.className = newState

        if (navigator.connection) {

            state.innerHTML += "<br />Connection type information is available..."

            var type = navigator.connection
            state.innerHTML += "<br />Effective type: " + type.effectiveType
            state.innerHTML += "<br />Downlink speed: " + type.downlink + " MB"
            state.innerHTML += "<br />Estimated round-trip time: " + type.rtt + " ms"

            navigator.connection.removeEventListener("chenge", updateState)
            navigator.connection.addEventListener("change", updateState)
        }

        window.removeEventListener("online", updateState)
        window.removeEventListener("offline", updateState)
        window.addEventListener("online", updateState)
        window.addEventListener("offline", updateState)
    }

}())