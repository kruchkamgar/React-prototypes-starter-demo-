
class DataVisContent extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return create('div', {key:1, className: "datavis container"}, [
      // <h2 class="lead header small d-flex">Analytics</h2>
      // <div id="revenueChart" class="panel chart">
      //   <div class="chart header container d-flex line-height-pt75">
      //     <`${headerSize}` class="small dim contents">Revenue</`${headerSize}`>
      //     <div class="small dim contents">...</div>
      //   </div>
      // <img src="img/Revenue.png"/>
      // </div>
      create('h2', {key:1, className: "lead header large d-flex"}, 'Analytics'),
      create('div', {key:2, id: 'revenueChartPanel', className: 'panel chart'}, [
        create('div', {key:1, className: 'chart header container d-flex line-height-pt75'}, [
          create(headerSize, {key:1, className: 'small dim contents'}, 'Revenue'),
          create('div', {key:2, className: 'small dim contents'}, '...')
        ]),
        create('div', {key:3, id: 'revenueChart', className: 'background-image'}),
      ]),
      create(PanelsWithFeeds, {key:3})
    ]);
  }

}
