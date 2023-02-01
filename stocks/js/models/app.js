var app = app || {};

// 애플리케이션 모델 
app.StockAppModel = Backbone.Model.extend({

  // 주식 데이터 URL용으로 컴파일된 템플릿
  urlTemplate: _.template('/stocks/data/<%= url %>'),

  // 기본값 
  defaults: {
      stock: null,
      from: null,
      to: null,
      data: []
  },

  initialize: function() {
      this.on('change:stock', this.fetchData);
      this.listenTo(app.Stocks, 'reset', this.fetchData);
  },

  // 부가적인 메소드
  getStock: function() {

      var symbol = this.get('stock'),
          stock = app.Stocks.get(symbol);

      return stock;
  },

  fetchData: function() {

      var that = this,
          stock = this.getStock(),
          url,
          dateExtent;

      if (stock) {

          url = this.urlTemplate(stock.toJSON());

          d3.json(url, function(error, data) {

              if (error) { return error; }

              data.values.forEach(function(d) {
                  d.date = new Date(d.date);
                  d.price = +d.price;
              });

              // Set the stock data
              that.set('data', data.values);

              // Set the initial time interval, if not set
              if ((!that.get('from')) || (!that.get('to'))) {
                  dateExtent = d3.extent(data.values, function(d) {
                      return d.date;
                  });

                  that.set({from: dateExtent[0], to: dateExtent[1]});
              }
          });
      }
  }
});