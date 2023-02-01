var app = app || {};

app.StockRouter = Backbone.Router.extend({

    // Define the application routes
    routes: {
        'stock/:stock': 'setStock',
        'stock/:stock/from/:from/to/:to': 'setState'
    },

    // 모델 변경을 감지하고 URL 라우터 업데이트
    initialize: function(attributes) {
        this.model = attributes.model;

        this.listenTo(this.model, 'change', function(m) {
            if (m.get('from') && m.get('to')) {
                this.setState(m.get('stock'), m.get('from'), m.get('to'));
            } else {
                this.setStock(m.get('stock'));
            }
        });
    },

    // 애플리케이션에 사용되는 주가 종목 코드를 설정하고 URL 변경 
    setStock: function(symbol) {
        var urlTpl = _.template('stock/<%= stock %>');

        this.model.set({stock: symbol});
        this.navigate(urlTpl({stock: symbol}), {trigger: true});
    },

    // 애플리케이션 상태 설정 및 URL 업데이트
    setState: function(symbol, from, to) {

        from = new Date(from),
        to = new Date(to);

        this.model.set({stock: symbol, from: from, to: to});

        var urlTpl = _.template('stock/<%= stock %>/from/<%= from %>/to/<%= to %>'),
            fromString = from.toDateString(),
            toString = to.toDateString();

        this.navigate(urlTpl({stock: symbol, from: fromString, to: toString}), {trigger: true});
    }

});