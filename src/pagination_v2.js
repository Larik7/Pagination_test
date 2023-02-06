$('#demo').pagination({ 
    dataSource: 'https://api.flickr.com/services/feeds/photos_public.gne?tags=cat&tagmode=any&format=json&jsoncallback=?', 
    locator: 'items', 
    total_pages: 1000, 
    results: 20,
    ajax: { 
        beforeSend: function() { 
            dataContainer.html('Loading data from flickr.com ...'); 
        } 
    }, 
    callback: function(data, pagination) { 
        // template method of yourself 
        var html = template(data); 
        dataContainer.html(html); 
    } 
})

// async & dinamic total numb

// $('#demo').pagination({
//     dataSource: 'https://api.flickr.com/services/feeds/photos_public.gne?tags=cat&tagmode=any&format=json&jsoncallback=?',
//     locator: 'items',
//     totalNumberLocator: function (response) {
//         // you can return totalNumber by analyzing response content 
//         return Math.floor(Math.random() * (1000 - 100)) + 100;
//     },
//     pageSize: 20,
//     ajax: {
//         beforeSend: function () {
//             dataContainer.html('Loading data from flickr.com ...');
//         }
//     },
//     callback: function (data, pagination) {
//         // template method of yourself 
//         var html = template(data);
//         dataContainer.html(html);
//     }
// });

