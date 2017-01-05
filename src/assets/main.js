$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/whitemonkey.json',
    dataType: 'jsonp',
    success: function (response) {
      var courses = [];
      courses = response.courses.completed.map(function (item) {
        return $('<div/>')
                .addClass('course')
                .append($('<h3/>').text(item.title))
                .append($('<img/>').attr({src: item.badge}))
                .append($('<a/>').attr({
                  href: item.url,
                  target: '_blank'
                }).addClass('btn btn-primary').text('See Course'));
      });

      $('#badges').append(courses);
    }
  });

});
