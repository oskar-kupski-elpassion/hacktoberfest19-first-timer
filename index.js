var users = [];
var i = 0;

var getData = (function($) {
  var URL =
    "https://api.github.com/repos/rowhitswami/hacktoberfest18-ft/contributors?per_page=500";

  $.get(URL, function(data, status) {
    if (data.length > 0) {
      data.forEach(function(user) {
        if (users.indexOf(user.login) == -1) {
          var name = user.login || "";

          if (user.type !== "User") {
            name = "Anonymous";
          }

          var template =
            "<a href='" + user.html_url + "' target='_blank' class='contributor' " +
                "style='background-image: url(" + user.avatar_url + ");'>" +
              "<span class='contributor__see-more'>" +
                "Click to see" +
              "</span>" +
              "<span class='contributor__name'>" +
                user.login +
              "</span>" +
            "</a>";

          $("#contributors").append(template);
          users[i] = user.login;
          i = i + 1;
        }
      });
    }
  });
})($);
