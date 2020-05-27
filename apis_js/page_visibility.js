(function(){

    var changes = document.getElementById('changes')


    changes.innerHTML += promptStateInfo(document.visibilityState, 'Initial status is here...')

    document.addEventListener('visibilitychange', function() {
        changes.innerHTML += promptStateInfo(document.visibilityState)
    })


    function promptStateInfo(state, preMessage){
        var message = (preMessage) ? preMessage+'<br />' : ''
        message += '<p class="' + state + '">Visibility state: ' + state + ' at ' + new Date().toUTCString() +'</p>'
        return message
    }

}())

