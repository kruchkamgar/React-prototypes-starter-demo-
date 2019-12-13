
class VerticalMenu extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    // responsibility 'lifted up' to app.js--
    // let display = 'd-none';
    // if (this.state.visibility) { display = 'd-block'; }
console.log (this.props.toggle);
    return create('div', {key:1, className: 'container vertical menu flex-item'}, [
             // create('img', {key:1, src: 'img/hamburger.png', onClick: () => this.props.toggle() }),
             create('img', {key:2, src: 'img/verticalMenu.png'})
           ]);
  }

}
