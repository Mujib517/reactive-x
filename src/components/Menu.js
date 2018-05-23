import React from 'react';

export class Menu extends React.Component {

  render() {
    const menu = this.props.menu;

    let template;

    if(menu){
      template= menu.map(m=><button className="mui-btn mui-btn--flat">{m}</button>);
    }

    return (
      <div className="mui-appbar reactive-menu">
         {template}
      </div>
    );
  }
}

export default Menu;