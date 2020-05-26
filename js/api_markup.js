((function(){
    var app = document.getElementById('app')
    var api = apis.filter(function(api){ return api.id == app.dataset.api })[0]
    var content = api.content

    var markup = '<h1>'+ api.name +'</h1>'
    for(var i = 0; i < content.content.length; i++)
        markup += '<p> - '+ content.content[i] + '</p>'
    markup += '<br /><code>'+ content.code + '</code><br /><br />'

    if(content.vendor) {
        markup += '<p>Check here for your api usage results: <a href="' + content.vendor.url + '" target="_blank">' + content.vendor.info + '</a></p>'
    }

    app.innerHTML = markup + app.innerHTML
})())