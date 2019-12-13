
const headerSize = "h6";

class PanelsWithFeeds extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return [
      create(DataRow, {key:1}),
      create('div', {key:2, className:"flexRow d-flex"}, [
        // latest trips, and trips by weekday
        create(DataList, {key:1}),
        create('div', {key:2, className: "panel chart flex-item", id: "tripsChart"}, [
         create('div', {key:1, className: "header container d-flex"}, [
           create(headerSize, {key:1, className: "small dim contents"}, "trips by weekday" ),
           create('div', {key:2, className: "small dim line-height-pt75 contents"}, "..." ) ]),
         // trips by weekday img
         create('div', {key:2, id: 'tripsByWeekdayChart', className: 'background-image'})
        ])
      ]) ];
  }

}
