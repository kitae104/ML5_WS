var app = app || {};

// 애플리케이션 뷰
app.StockAppView = Backbone.View.extend({

    // The application view will listen for changes in the stock collection
    initialize: function() {
        this.listenTo(app.Stocks, 'reset', this.render);
        app.Stocks.fetch({reset: true});
    },

    render: function() {

        // Get the first stock in the collection
        var first = app.Stocks.first();

        // Set the stock to the first item in the collection, if not set
        if (!this.model.get('stock')) {
            this.model.set('stock', first.get('symbol'));
        }

        // Create and initialize the title view
        var titleView = new app.StockTitleView({
            model: this.model,
            el: 'div#stock-title'
        });

        // Create and initialize the selector view
        var controlView = new app.StockSelectorView({
            model: this.model,
            el: 'div#stock-control'
        });

        // Create and initialize the context view
        var contextView = new app.StockContextView({
            model: this.model,
            el: 'div#stock-context'
        });

        // Create and initialize the detail view
        var detailView = new app.StockDetailView({
            model: this.model,
            el: 'div#stock-detail'
        });

        // 주식 데이터 가져오기
        this.model.fetchData();
        return this;
    }
});