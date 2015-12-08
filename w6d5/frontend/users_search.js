function UsersSearch (el) {
  this.$el = $(el);
  this.$input = this.$el.attr("input");
  this.$ul = this.$input.attr("ul");
  this.$el.on("input", this.handleInput.bind(this));
}

UsersSearch.prototype.handleInput = function () {
  $.ajax({
    url: "/users/search",
    type: "GET",
    data: {input: this.$input.val()},
    dataType: "json",
    success: function(userInput) {

    }

  });
};

UsersSearch.prototype.renderResults = function (users) {
  // body...
};

module.exports = UsersSearch;
