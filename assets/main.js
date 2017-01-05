$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/whitemonkey.json',
    dataType: 'jsonp',
    success: function (response) {
      var courses = [];
      courses = response.courses.completed.map(function (item) {
        return $('<div/>', { 'class': 'course' })
                .append($('<h3/>', { 'text': item.title }))
                .append($('<img/>', { 'src': item.badge }))
                .append($('<a/>', {
                  'href': item.url,
                  'target': '_blank',
                  'class': 'btn btn-primary',
                  'text': 'See Course'
                }));
      });

      $('#badges').append(courses);
    }
  });

});
