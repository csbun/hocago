const extend = require('extend');
const echarts = require('echarts');
let uuid = 0;

export default class Hocago {
  constructor(el, mapJson, opt) {
    this._id = `hocago-${++uuid}`;
    this._pointMap = {};
    this._typeIdxMap = {};

    echarts.registerMap(this._id, mapJson);
    this.chart = echarts.init(el);
    this.option = {
      geo: {
        map: this._id,
      },
      series: [{
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        label: {
          normal: {
            show: true,
            position: 'right',
            formatter: '{b}'
          }
        },
        data: []
      }]
    };
    this._setOption(opt);
  }

  _setOption(opt) {
    if (opt) {
      extend(true, this.option, opt);
    }
    this.chart.setOption(this.option, true);
  }

  point(opt) {
    if (opt instanceof Array) {
      opt.map(optItem => this.point(optItem));
    } else {
      this._pointMap[opt._id] = opt.coordinate;
      this.option.series[0].data = [];
      for (let key of Object.keys(this._pointMap)) {
        this.option.series[0].data.push({
          name: key,
          value: this._pointMap[key],
        });
      }
    }
    return this;
  }

  type(opt) {
    if (opt instanceof Array) {
      opt.map(optItem => this.type(optItem));
    } else {
      opt.type = 'lines';
      if (this._typeIdxMap.hasOwnProperty(opt._id)) {
        extend(true, this.option.series[this._typeIdxMap[opt._id]], opt);
      } else {
        this._typeIdxMap[opt._id] = this.option.series.length;
        this.option.series.push(extend({ data: []}, opt));
      }
    }
    return this;
  }

  line(opt) {
    if (opt instanceof Array) {
      opt.map(optItem => this.line(optItem));
    } else {
      if (this._typeIdxMap.hasOwnProperty(opt.type)) {
        const fromCoord = this._pointMap[opt.from];
        const toCoord = this._pointMap[opt.to];
        if (fromCoord && toCoord) {
          this.option.series[this._typeIdxMap[opt.type]].data.push([{
              coord: fromCoord
          }, {
              coord: toCoord
          }]);
          this._setOption();
        } else {
          console.error(`from: ${opt.from} OR to: ${opt.to} NOT found!`);
        }
      } else {
        console.error(`type: ${opt.type} NOT found!`);
      }
    }
    return this;
  }
}
