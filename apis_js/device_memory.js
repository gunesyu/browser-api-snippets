(function(){
    var request = document.getElementById('request')
    var memorySpan = document.getElementById('memory')

    if (navigator.deviceMemory) {

        request.addEventListener('click', function(){

            memorySpan.innerText = navigator.deviceMemory + ' GB'

        }, false)

    } else {
        request.parentElement.removeChild(request)
        memorySpan.innerText = 'not supported'
    }
}())