(function(){
    var app = document.getElementById('app')

    apis.forEach(function(api){
        var apiItemMarkup = document.getElementById('api_item').innerHTML

        app.innerHTML = app.innerHTML + apiItemMarkup
            .replace(/{{example_url}}/g, 'apis/' + api.id + '.html')
            .replace(/{{name}}/g, api.name)

            .replace(/{{definition_label}}/g, api.definition.display_name)
            .replace(/{{definition_from_label}}/g, api.definition.from.display_name)
            .replace(/{{definition_from_url}}/g, api.definition.from.url)
            .replace(/{{definition_from_url_label}}/g, api.definition.from.source)
            .replace(/{{definition}}/g, api.definition.content)

            .replace(/{{docs_url}}/g, api.docs.url)
            .replace(/{{docs_label}}/g, api.docs.display_name)

            .replace(/{{support_url}}/g, api.support.url)
            .replace(/{{support_label}}/g, api.support.display_name)
    })
}())