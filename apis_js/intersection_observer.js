(function(){

    var observer = new IntersectionObserver(function(entries){

        var targetElement = entries[0]
        /* do your stuff here... */

        /**/
        var ind = Math.ceil(targetElement.intersectionRatio * 3) - 1;
        var cl = (ind == -1) ? '' : 'bg-' + ([0, 0.5, 1.0][ind] * 100)
        if (targetElement.target.className != cl) {
            targetElement.target.className = cl
        }
        /**/
    },
    {
        threshold: [0, 0.5, 1.0]
    })

    var element = document.getElementById('target_element')
    if (element) {
        observer.observe(element)
    }
})()