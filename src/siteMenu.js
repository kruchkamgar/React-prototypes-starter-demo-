
class SiteMenu extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return create('div', {key:1, className: 'site menu container d-flex'}, [
             create('div', {key:1, id: 'hamburger-container'},
               create('img', {key:1, src: 'img/hamburger.png', id: 'hamburger', className: 'p-fixed, menu-btn', onClick: () => this.props.toggle() })
             ),
             create('div', {key:2, className: 'icons wrapper'}, [
               create('div', {key:1, className: 'icons container d-flex'}, [
                 // responsive: render multiple of each—
                 // each within a container to help justify
                 create('div', {key:1, className: 'lead small' }, 'Analytics'),
                 create('div', {key:2, id: 'logo-container'},
                   create('img', {key:1, src: 'img/logo.png', id: 'logo-img' }) ),
                 create('div', {key:3, id: 'notification-icon-container'},
                   create('img', {key:1, src: 'img/notification-icon.png', id: 'notification-icon-img', className: 'site-menu-icons' }) ),
                 create('div', {key:4, id: 'site-menu-icons-container'},
                   create('img', {key:1, src: 'img/site-menu-icons.png', id: 'site-menu-icons-img', className: 'site-menu-icons' }) )
               ])
             ])
           ]);
  }
}
