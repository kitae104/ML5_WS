/* global d3:false */

// Stock Charts
// ============

function translate(dx, dy) {
    return 'translate(' + [dx, dy] + ')';
}

function stockTitleChart() {
    'use strict';

    // 타이틀 기본 접근자
    var title = function(d) { return d.title; };

    // 차트 함수
    function chart(selection) {
        selection.each(function(data) {

            // Create the selection for the title
            var div = d3.select(this),
                par = div.selectAll('p.stock-title').data([data]);

            // Create the paragraph element on enter
            par.enter().append('p')
                .attr('class', 'stock-title');

            // Update the paragraph content
            par.text(title);
        });
    }

    // Title function accessor
    chart.title = function(titleAccessor) {
        if (!arguments.length) { return title; }
        title = titleAccessor;
        return chart;
    };

    return chart;
}


function stockAreaChart() {
    'use strict';

    // 차트 속성
    var width = 700,
        height = 300,
        margin = {top: 20, right: 20, bottom: 20, left: 30};

    // 시간 간격 
    var timeExtent;

    // 축과 블러시 활성화
    var yaxis = true,
        xaxis = true,
        brush = true;

    // 기본 접근자 함수 
    var date = function(d) { return new Date(d.date); };
    var value = function(d) { return +d.value; };

    // 기본 브러시 리스너
    var onBrush = function(extent) {};

    // 차트 함수 
    function chart(selection) {
        selection.each(function(data) {

            var div = d3.select(this),
                svg = div.selectAll('svg').data([data]),
                w = width - margin.left - margin.right,
                h = height - margin.top - margin.bottom,
                xScale,
                yScale,
                xAxis,
                yAxis;

            // Create and initialize the svg element on enter
            svg.enter().append('svg').call(svgInit);

            svg
                .attr('width', width)
                .attr('height', height);

            // Update the axis and chart positions
            svg.select('g.xaxis')
                .attr('transform', translate(margin.left, margin.top + h));

            svg.select('g.yaxis')
                .attr('transform', translate(margin.left, margin.top));

            svg.select('g.chart')
                .attr('transform', translate(margin.left, margin.top));

            svg.select('g.brush')
                .attr('transform', translate(margin.left, margin.top));

            timeExtent = timeExtent ? timeExtent : d3.extent(data, date);

            xScale = d3.time.scale()
                .domain(timeExtent)
                .range([0, w]);

            if (brush) {
                xScale.domain(d3.extent(data, date));
            }

            yScale = d3.scale.linear()
                .domain([0, d3.max(data, value)])
                .range([h, 0]);

            // 축 생성 
            xAxis = d3.svg.axis()
                .scale(xScale)
                .orient('bottom');

            yAxis = d3.svg.axis()
                .scale(yScale)
                .orient('left');

            // 축 추가
            if (xaxis) {
                svg.select('g.xaxis').call(xAxis);
            }

            if (yaxis) {
                svg.select('g.yaxis').call(yAxis);
            }

            // 영역 생성자
            var area = d3.svg.area()
                .x(function(d) { return xScale(date(d)); })
                .y0(yScale(0))
                .y1(function(d) { return yScale(value(d)); });

            // 경로 추가 + 시계열 데이터 추가 
            var path = svg.select('g.chart').selectAll('path')
                .data([data]);

            path.enter().append('path').attr('class', 'stock-area');

            path.attr('d', area)
                .attr('clip-path', 'url(#clip)');

            // 브러시 리스너 함수 
            function brushListener() {
                timeExtent = d3.event.target.extent();
                onBrush(timeExtent);
            }

            // Brush 동작 
            var brushBehavior = d3.svg.brush()
                .x(xScale)
                .on('brush', brushListener);

            // 차트 시간 간격의 초기값이 있는 경우 설정 
            if (timeExtent) {
                brushBehavior.extent(timeExtent);
            }

            // 동작 호출 
            if (brush) {
                svg.select('g.brush').call(brushBehavior);

                // 브러시 사각형의 높이 변경 
                svg.select('g.brush').selectAll('rect')
                    .attr('height', h);
            }

        });
    }

    var svgInit = function(selection) {

        // 클립 패스 정의 - 자기 경로 내부에 있는 내용만 화면에 표시
        selection.append('defs')
            .append('clipPath')
            .attr('id', 'clip')
            .append('rect')
                .attr('width', width - margin.left - margin.right)
                .attr('height', height - margin.top - margin.bottom);

        // 차트의 축 그룹 생성 
        selection.append('g').attr('class', 'chart');
        selection.append('g').attr('class', 'axis xaxis');
        selection.append('g').attr('class', 'axis yaxis');
        selection.append('g').attr('class', 'brush');
    };

    chart.width = function(w) {
        if (!arguments.length) { return width; }
        width = w;
        return chart;
    };

    chart.height = function(h) {
        if (!arguments.length) { return height; }
        height = h;
        return chart;
    };

    chart.margin = function(m) {
        if (!arguments.length) { return margin; }
        margin = m;
        return chart;
    };

    chart.value = function(valueAccessor) {
        if (!arguments.length) { return value; }
        value = valueAccessor;
        return chart;
    };

    chart.date = function(dateAccessor) {
        if (!arguments.length) { return date; }
        date = dateAccessor;
        return chart;
    };

    chart.xaxis = function(xAxis) {
        if (!arguments.length) { return xaxis; }
        xaxis = xAxis;
        return chart;
    };

    chart.yaxis = function(yAxis) {
        if (!arguments.length) { return yaxis; }
        yaxis = yAxis;
        return chart;
    };

    chart.brush = function(brushEnabled) {
        if (!arguments.length) { return brush; }
        brush = brushEnabled;
        return chart;
    };

    chart.brushListener = function(value) {
        if (!arguments.length) { return onBrush; }
        onBrush = value;
        return chart;
    };

    chart.timeExtent = function(extent) {
        if (!arguments.length) { return timeExtent; }
        timeExtent = extent;
        return chart;
    };

    return chart;
}