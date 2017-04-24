var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var realTimeChartDataSchema = new Schema({
    label: Number,
    point: Number
});

module.exports = mongoose.model('realTimeChartData', realTimeChartDataSchema);