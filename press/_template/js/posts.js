$(function () {
         var urlRss = 'http://www.windowsteam.com.br/feed/';
         $.ajax({
             type: "GET",
             url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=1000&callback=?&q=' + encodeURIComponent(urlRss),
             dataType: 'json',
             error: function (xhr) {
                 var erro = xhr.responseText;
                 alert('Erro ao ler o feed: ' + erro);
             },
             success: function (xml) {
                 values = xml.responseData.feed.entries;
                 for(var i = 0; i < 3; i++) {
                     var value = values[i];
                     var li = $("<li />");
                     li.html(value.title + "<br />" + value.content);
                     $("#result").append(li);
                 }
                 
             }
         });
     });