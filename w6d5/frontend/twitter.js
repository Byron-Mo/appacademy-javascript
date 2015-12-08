var FollowToggle = require("./follow_toggle.js");
var UsersSearch = require("./users_search.js");

$(document).ready(function() {
  $('.follow-toggle').each(function (index, button) {
    new FollowToggle(button);
  });
});
