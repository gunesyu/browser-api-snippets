(function(){
    var requestEstimate = document.getElementById('request_estimate')
    var quotaSpan = document.getElementById('quota')
    var usageSpan = document.getElementById('usage')

    var checkPersistence = document.getElementById('check_persistence')
    var persistedSpan = document.getElementById('persisted')

    var requestPersistence = document.getElementById('request_persistence')
    var persistenceSpan = document.getElementById('persistence')


    if (navigator.storage && navigator.storage.estimate) {

        requestEstimate.addEventListener('click', function(){

            navigator.storage.estimate().then(function (estimate) {
                quotaSpan.innerText = estimate.quota + ' bytes'
                usageSpan.innerText = estimate.usage + ' bytes'
            })

        }, false)

    } else {
        requestEstimate.parentElement.removeChild(requestEstimate)
        quotaSpan.innerText = 'not supported'
        usageSpan.innerText = 'not supported'
    }

    if (navigator.storage && navigator.storage.persisted) {

        checkPersistence.addEventListener('click', function(){

            navigator.storage.persisted().then(function (persisted) {
                persistedSpan.innerText = persisted ? 'true' : 'false'
            })

        }, false)

    } else {
        checkPersistence.parentElement.removeChild(checkPersistence)
        persistedSpan.innerText = 'not supported'
    }

    if (navigator.storage && navigator.storage.persisted) {

        requestPersistence.addEventListener('click', function(){

            navigator.storage.persist().then(function (result) {
                persistenceSpan.innerText = result ? 'Storage is now persisted... Check again for storage persistence above...' : 'Unable to make storage persistent'
            })

        }, false)

    } else {
        requestPersistence.parentElement.removeChild(checkPersistence)
        persistenceSpan.innerText = 'not supported'
    }
}())