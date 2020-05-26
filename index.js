const urlAPI = "https://newsapi.org/v2/top-headlines?country=br&apiKey=c205c99918ee40a9bab0764c7d78cad7"

$(inicilizarPagina)

function inicilizarPagina() {
    $.getJSON(urlAPI, function (dadosRetornoAPI) {
        for (let noticia of dadosRetornoAPI.articles) {
            const urlImage = noticia.urlToImage
            const titulo = noticia.title
            const descricao = noticia.description
            $("section#news").append('<article class="card"><img class="card__image"src="' + urlImage +'"alt=""><h2>'+ titulo +'</h2><p>' + descricao + '</p></article')

        }
    })
}