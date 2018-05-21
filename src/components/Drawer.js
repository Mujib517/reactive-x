import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  ListItem,
  ListItemText,
  Divider,
  List
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

class CbDrawer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.toggleDrawer = this
      .toggleDrawer
      .bind(this);
  }

  render() {
    const config = this.getConfiguration();
    const menu = [
      {
        label: 'Home',
        link: ''
      }, {
        label: 'About',
        link: ''
      }, {
        label: 'Contact',
        link: ''
      }
    ];

    return (
      <div>
        <AppBar position={config.position} color={config.color}>
          <Toolbar>
            <IconButton aria-label="Menu" onClick={this.toggleDrawer}>
              <MenuIcon/>
            </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer variant="persistent" open={this.state.open}>
          <IconButton onClick={this.toggleDrawer}>
            <ChevronLeftIcon/>
          </IconButton>
          <Divider/>
          <List>
            {menu.map(m => {
              return (
                <div key={m.label}>
                  <ListItem button>
                    <ListItemText >{m.label}</ListItemText>
                  </ListItem>
                  <Divider/>
                </div>
              )
            })}
          </List>
        </Drawer>
      </div>
    );
  }

  getConfiguration() {
    let config = this.props.config || {};
    config.position = config.position || "fixed";
    config.color = config.color || "secondary";

    return config;
  }

  toggleDrawer() {
    this.setState({
      open: !this.state.open
    });
  }
}

export default CbDrawer;