var app = app || {};

// Stock Collection
app.StockList = Backbone.Collection.extend({
    model: app.Stock,
    url: '/stocks/data/stocks.json'
});