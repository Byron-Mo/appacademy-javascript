function FollowToggle(el) {
  this.$el = $(el);
  this.userId = this.$el.data("user-id");
  this.followState = this.$el.data("initial-follow-state");
  this.render();
  this.$el.on("click", this.handleClick.bind(this));
}

FollowToggle.prototype.render = function () {
  if (this.followState === "unfollowed") {
    this.$el.text("Follow!");

  } else if (this.followState === "followed") {
    this.$el.text("Unfollow!");

  } else if (this.followState === "following") {
    this.$el.text("Following...");
  } else if (this.followState === "unfollowing") {
    this.$el.text("Unfollowing...");
  }
};

FollowToggle.prototype.handleClick = function (e) {
  e.preventDefault();
  var type;
  var state;
  var transitionState;

  if (this.followState === "unfollowed") {
    type = "POST";
    state = "followed";
    transitionState = "following";
  } else {
    type = "DELETE";
    state = "unfollowed";
    transitionState = "unfollowing";
  }

  this.followState = transitionState;
  this.$el.prop("disabled", true);
  this.render();

  $.ajax({
    url: "/users/" + this.userId + "/follow",
    type: type,
    dataType: "json",
    success: function() {
      this.followState = state;
      this.$el.prop("disabled", false);
      this.render();
    }.bind(this)
  });
};

module.exports = FollowToggle;
