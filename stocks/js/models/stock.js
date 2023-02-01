var app = app || {};

// 주가 정보 모델 
app.Stock = Backbone.Model.extend({

  // Default stock symbol, name and url
  defaults: { symbol: null, name: null, url: null },

  // The stock symbol is unique, it can be used as ID
  idAttribute: 'symbol'
});