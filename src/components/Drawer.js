import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  List
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
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
        <Drawer variant="persistent" open={this.state.open}>
          <div>
            <IconButton onClick={this.toggleDrawer}>
              <ChevronLeftIcon/>
            </IconButton>
          </div>
          <Divider/>
          <List>
            {menu.map(m => {
              return (
                <div>
                  <ListItem button key={m.label}>
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
    config.color = config.color || "accent";

    return config;
  }

  toggleDrawer() {
    this.setState({
      open: !this.state.open
    });
  }
}

export default CbDrawer;