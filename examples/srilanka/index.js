import Hocago from '../../';

const srilankaData = require('./data/srilanka.js');

const lk = new Hocago(
  document.getElementById('map'),
  srilankaData, {
    // backgroundColor: '#404a59',
    // geo: {
    //   label: {
    //       emphasis: {
    //           show: false
    //       }
    //   },
    //   roam: true,
    //   itemStyle: {
    //       normal: {
    //           areaColor: '#323c48',
    //           borderColor: '#404a59'
    //       },
    //       emphasis: {
    //           areaColor: '#2a333d'
    //       }
    //   }
    // }
  });
lk.point({
    _id: 'Colombo',
    coordinate: [79.8612430, 6.9270790],
  })
  .point([{
    _id: 'Anuradhapura',
    coordinate: [80.3881330, 8.3451850],
  }, {
    _id: 'Trincomalee',
    coordinate: [81.1967960, 8.5922000],
  }, {
    _id: 'Kandy',
    coordinate: [80.6337260, 7.2905720],
  }, {
    _id: 'Galle',
    coordinate: [80.2209770, 6.0535190],
  }, {
    _id: 'Ella',
    coordinate: [81.0465530, 6.8666990],
  }, {
    _id: 'Tissamahaharama',
    coordinate: [81.2876690, 6.2791540],
  }])
  .type([{
    _id: 'train',
    name: 'Train',
    zlevel: 1,
    effect: {
      show: true,
      period: 6,
      trailLength: 0,
      // color: '#fff',
      // symbolSize: 3
    },
    lineStyle: {
      normal: {
        color: '#d14',
        width: 1.2,
        curveness: 0.2
      }
    },
  }, {
    _id: 'bus',
    name: 'Bus',
    zlevel: 1,
    effect: {
      show: true,
      period: 6,
      trailLength: 0,
      // color: '#fff',
      // symbolSize: 3
    },
    lineStyle: {
      normal: {
        color: '#004a5e',
        width: 1,
        curveness: 0.1
      }
    },
  }])
  .line({
    type: 'train',
    from: 'Colombo',
    to: 'Galle'
  })
  .line([{
    type: 'train',
    from: 'Colombo',
    to: 'Anuradhapura'
  }, {
    type: 'train',
    from: 'Anuradhapura',
    to: 'Trincomalee'
  }, {
    type: 'train',
    from: 'Colombo',
    to: 'Kandy'
  }, {
    type: 'train',
    from: 'Kandy',
    to: 'Ella'
  }, {
    type: 'train',
    from: 'Kandy',
    to: 'Anuradhapura'
  }, {
    type: 'bus',
    from: 'Colombo',
    to: 'Kandy'
  }, {
    type: 'bus',
    from: 'Kandy',
    to: 'Ella'
  }, {
    type: 'bus',
    from: 'Colombo',
    to: 'Galle'
  }, {
    type: 'bus',
    from: 'Ella',
    to: 'Galle'
  }, {
    type: 'bus',
    from: 'Ella',
    to: 'Tissamahaharama'
  }, {
    type: 'bus',
    from: 'Galle',
    to: 'Tissamahaharama'
  }]);
