

function getData(query) {
  var BASE_URL = "https://www.googleapis.com/youtube/v3/search";
  var apiInfo = {
      part: 'snippet',
      key: "AIzaSyACDgryj-8paweKFCFxPsrvkwRz6Rg_a8U",
      q: query,
      maxResults: 4
  }
  $.getJSON(BASE_URL, apiInfo, displayData);
}

function displayData(data) {
    var resultElement = '';
    if (data.items) {
        data.items.forEach(function(item) {
            resultElement += '<p><a href="https://www.youtube.com/watch?v=' + item.id.videoId + '"><img src="' + item.snippet.thumbnails.medium.url + '"></a><br>  ' + item.snippet.title + '</p>';

        });
    } else {
        resultElement += '<p>No results</p>';
    }

    $('.js-search-results').html(resultElement);
}

function getSearchTerm() {
  $("form").on("click", "button", function(event) {
    event.preventDefault();
      var query = $(".js-query").val()
      getData(query);
  }); 
}

$(function(){
  getSearchTerm();
})



