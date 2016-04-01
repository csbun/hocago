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
  .point({
    _id: 'Galle',
    coordinate: [80.2209770, 6.0535190],
  })
  .point([{
    _id: 'Ella',
    coordinate: [81.0465530, 6.8666990],
  }, {
    _id: 'Kandy',
    coordinate: [80.6337260, 7.2905720],
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
        color: '#000',
        width: 1,
        curveness: 0.2
      }
    },
  }])
  .line({
    type: 'train',
    from: 'Colombo',
    to: 'Galle'
  });
