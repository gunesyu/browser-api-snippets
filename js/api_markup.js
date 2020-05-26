((function(){
    var app = document.getElementById('app')
    var api = apis.filter(function(api){ return api.id == app.dataset.api })[0]
    var content = api.content

    var markup = '<h1>'+ api.name +'</h1>'
    for(var i = 0; i < content.content.length; i++)
        markup += '<p> - '+ content.content[i] + '</p>'
    markup += '<br /><code>'+ content.code + '</code><br /><br />'

    if(content.vendor) {
        markup += '<p>' + content.vendor.url_message + ': <a href="' + content.vendor.url + '" target="_blank">' + content.vendor.info + '</a></p>'
    }

    app.innerHTML = markup + app.innerHTML
})())


function UIMessage(){
    var message = document.createElement('div')
    message.id = "ui_message"
    message.innerHTML = "<p class='message'>Fetching...</p>"

    document.body.appendChild(message)
}
function UIMessageRemove(){
    var message = document.getElementById('ui_message')
    message.parentElement.removeChild(message)
}