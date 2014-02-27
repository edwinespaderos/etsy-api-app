var Item = Backbone.Model.extend({});
var ItemsCollection = Backbone.Collection.extend({
  model: Item,
  url: "https://api.etsy.com/v2/listings/active.js?api_key=kr9rjq7dc9c24jv6fccq2hus&includes=Images&callback=?",
 
  parse: function(response) {
    return response.results;
  }


})

