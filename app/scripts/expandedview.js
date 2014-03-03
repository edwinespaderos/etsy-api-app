 var ExpandedView = {};

_.extend(ExpandedView, Backbone.Events);

object.on("alert", function(msg) {
  alert("Triggered " + msg);
});

object.trigger("alert", "an event");


