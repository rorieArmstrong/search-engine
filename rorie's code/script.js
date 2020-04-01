$("form").submit(function (e) {
    e.preventDefault();

    var query = $("#searchBar").val();

    let result;

    var API_KEY = "6d0d53e22b308aba126396137fcbabd9";

    var url = 'http://api.serpstack.com/search?access_key=' + API_KEY + '&type=web&query=' + query

    console.log(url)

    $.get(url, function (data) {
        console.log(data)

        data.organic_results.forEach(res => {
            result = `<h1>${res.title}</h1><br><a href="${res.url}">${res.url}</a><p>${res.snippet}</p>`

            $('#result').append(result)
        })
    })
})