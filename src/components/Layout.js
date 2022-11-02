import React from 'react';
import { Drawer, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const drawerWidth = 240;

const styles = {
    page: {
        background: '#f9f9f9',
        width: '100%'
    },
    drawer: {
        width: drawerWidth,
        ".MuiDrawer-paper": {
            width: drawerWidth,
          },
    },
    drawerPaper: {
        width: drawerWidth
    },
    root: {
        display: 'flex'
    },
    active: {
        background: '#f4f4f4'
    },
    header: {
        padding: '10px'
    }
};

export default function Layout({children}) {
    const history = useHistory();
    const location = useLocation();

    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color="secondary" />,
            path: '/'
        },
        {
            text: 'Create Note',
            icon: <AddCircleOutlineOutlined color="secondary" />,
            path: '/create'
        }
    ];

  return (
    <div style={styles.root}>
        {/* App Bar */}

        {/* Side Drawer */}
        <Drawer
            sx={styles.drawer}
            variant="permanent"
            anchor="left"
            classes={{ paper: styles.drawerPaper }}
        >
            <div>
                <Typography variant="h5" sx={styles.header}>
                    Ninja Notes
                </Typography>
            </div>

            {/** List / Links */}
            <List>
                { menuItems.map(item => (
                    <ListItem 
                        button
                        key={item.text}
                        onClick={() => history.push(item.path)}
                        sx={location.pathname === item.path ? styles.active: null}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>

        <div style={styles.page}>
            {children}
        </div>
    </div>
  )
}
