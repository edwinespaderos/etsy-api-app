var ItemView = Backbone.View.extend({
 
  initialize: function(){
    $('.jumbotron').append(this.el);
    this.render()
  },

  renderTemplate: _.template($('#list-view-temp').text()),
  

  render: function(){
    this.$el.html(this.renderTemplate(this.model.attributes));
  }
})