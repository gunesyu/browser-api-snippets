(function(){

    var nonmodalButton = document.getElementById('nonmodal')
    var modalButton = document.getElementById('modal')

    var dialog = document.getElementById('dialog')

    var closedSpan = document.getElementById('closed')

    nonmodalButton.addEventListener('click', function(){

        if (dialog.open) {
            dialog.close()
        }
        dialog.show()

    }, false)


    modalButton.addEventListener('click', function(){

        if (dialog.open) {
            dialog.close()
        }
        dialog.showModal()

    }, false)


    document.querySelectorAll('.modal-dismiss').forEach(function(button) {
        button.addEventListener('click', function(){
            var info = this.dataset.info
            dialog.close(info)
        }, false)
    })

    dialog.addEventListener('close', function(e){
        closedSpan.innerText = "close event with " + dialog.returnValue + " value"
    })

    dialog.addEventListener('cancel', function(e){
        closedSpan.innerText = "cancel event with " + dialog.returnValue + " value"
    })
}())