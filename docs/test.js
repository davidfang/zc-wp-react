/**
 * Created by mingwang.fang on 2016/5/11.
 */
"use strict";

import React from "react";
import ReactDOM from "react-dom";
import d3 from "d3";

import * as ReStock from "react-stockcharts";

var parseDate = d3.time.format("%Y-%m-%d").parse

import "stylesheets/re-stock";

var testPage = require("lib/page/UpdatingDataPage").default;


function renderPage(data) {
    data.forEach((d, i) => {
        d.date = new Date(parseDate(d.date).getTime());
        d.open = +d.open;
        d.high = +d.high;
        d.low = +d.low;
        d.close = +d.close;
        d.volume = +d.volume;
        // console.log(d);
    });
    class ExamplesPage extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            var Page = testPage;
            var yeomanImage = require('./images/yeoman.png');
            var  userInfo = {name:'张三丰',thumbnails:yeomanImage,account:5000};
            return (
                <div>
                    <Page  someData={data}/>
                </div>
            );
        }
    };

    ReactDOM.render(<ExamplesPage />, document.getElementById("chart-goes-here"));
}


d3.tsv("data/MSFT_full.tsv", (err2, MSFTFull) => {
    d3.json("data/barData.json", (err5, barData) => {
        d3.json("data/groupedBarData.json", (err6, groupedBarData) => {
            renderPage(MSFTFull);

        });
    });
});
