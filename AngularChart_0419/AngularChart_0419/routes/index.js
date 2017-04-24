module.exports = function (app, RealTimeChartData) { 
    app.get('/', function (req, res) {
        /// res.sendfile('./views/index.html');
        res.render('index');
    });

    app.post('/api/realChart', function (req, res) {
        var realTimeChartData = new RealTimeChartData();
        realTimeChartData.label = req.body.label;
        realTimeChartData.point = req.body.point;
        realTimeChartData.save(function (err) {
            if (err) {
                console.error(err);
                res.json({ result: 0 });
                return;
            }
            
            /// var jsonRealTimeChartData = JSON.stringify(realTimeChartData);
            /// res.send(jsonRealTimeChartData);
            res.send(realTimeChartData);
            console.log("Save Success!");

            return res;
        });
    });
}