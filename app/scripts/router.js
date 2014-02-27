var MainRouter = Backbone.Router.extend({
  routes: {
    "shops" : "showShops",
    "shops/:keyword" : "showShops"
  },
 
  initialize: function(){
    this.items = new ItemsCollection;
    this.items.on('add', function(item){
      new ItemView({model: item})
    })
  },
 
  showShops: function(keyword){
    if (keyword) {
      this.items.url = "https://api.etsy.com/v2/listings/active/title.js?keywords="+ keyword +"&includes=Images&api_key=4vrbm3vo57peni06gsiwgh6b&callback=?"
    }
    this.items.fetch();
  }
}); 
