
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {menuVisibility: false};
  }

  toggleVisibility = () =>
    this.setState({ menuVisibility: !this.state.menuVisibility });

  render () {
    let verticalMenu;

    if (this.state.menuVisibility) {
      verticalMenu = create(VerticalMenu, {key:1, id: 2, toggle: this.toggleVisibility}); }

    let components = [
      create('div', {key:1, className: "page wrapper"}, [
        verticalMenu,
        create('div', {key:2, className: 'page container d-flex'}, [
          create(SiteMenu, {key:1, toggle: this.toggleVisibility}),
          create('div', {key:2, className: 'contents container d-flex'}, [
            create(DataVisContent, {key:2}) ])
        ])
      ])
    ];

    return components;
  }
}


const domAppContainer = document.querySelector('.app.wrapper');

ReactDOM.render(create(App), domAppContainer);
