
const latestTripsData = [
  { title: 'Chrysler Building - The High Line', dollars:'$28', date: '06/03/2018', duration: '24min' },
  { title: 'Theatre District - Prospect Park', dollars:'$34', date: '06/03/2018', duration: '21min' },
  { title: 'Brooklyn Museum - Times Square', dollars:'$39', date: '06/04/2018', duration: '45min' },
  { title: 'Brookfield Place - Chelse Market', dollars:'$29', date: '06/04/2018', duration: '14min' },
  { title: 'Smorgasburg - Yankee Stadium', dollars:'$52', date: '06/05/2018', duration: '52min' },
  { title: 'Smorgasburg - Yankee Stadium', dollars:'$44', date: '06/05/2018', duration: '22min' }
]

class DataItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return create(
      'div', { className: 'dataItem' },
      create('div', {key: 2, className: "display-text size-default" },
        [ create('div', { key:1 }, this.props.data.title),
          create('div', { key:2 }, this.props.data.dollars) ]),
      // create('p', {key: 3, className: "displayText size-default" }, this.props.data.dollars),
      create('div', {key: 3, className: "display-text size-default dim" },
        [ create('div', {key:1}, this.props.data.date),
          create('div', {key:2}, this.props.data.duration) ])
      // create('p', {key: 5, className: "displayText size-default dim" }, this.props.data.duration) ]
    )
  }
}

class DataList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    let data =
    latestTripsData
    .map( (list_data, index) =>
      create(DataItem, { key: index+2, data: list_data }) )

    // add header
    data.unshift(
      create('div', {key:1, className: "header container d-flex"}, [
        create(headerSize, {key:1, className: "small dim contents"}, "latest trips" ),
        create('div', {key:2, className: "small dim line-height-pt75 contents"}, "..." ) ])
    );
    // console.log(data);

    return create('div', { className: "panel dataList" },
      create('div', { className: "container contents" }, data) );
  }
}
