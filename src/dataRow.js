'use strict';
const create = React.createElement;

class DataPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return create(
      'div', { className: 'panel flex-item' },
      [ create('img', {key: 1, src: `img/${this.props.data.image}`, className: "icon large" }),
        create('div', {key: 2, className: "text container"}, [
          create('div', {key: 2, className: "display-text extra-large" }, this.props.data.display),
          create('div', {key: 3, className: "explainer-text dim size-default" }, this.props.data.explainer) ])
        ]);
  }
}


// data
const dataRowData = [
  { display: "1,428", explainer: "Vehicles on track", image: 'check-icon.png'},
  { display: "158.3 mi", explainer: "Distance driven", image: 'geo-mark-icon.png'},
  { display: "87.4 kWh", explainer: "Energy consumed", image: 'lightning-icon.png'},
  { display: "24.2 h", explainer: "Total drive time", image: 'distance-icon.png' }
]

class DataRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data =
    dataRowData
    .map( (panel_data, index) =>
      create(DataPanel, { key: index, data: panel_data }) )

    return create('div', { className: "dataRow" },
        create('div', { className: "container d-flex" }, data ) );
  }
}
