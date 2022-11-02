import React from 'react';
import { Drawer, Typography, List, ListItem, ListItemIcon, ListItemText, AppBar, Toolbar, Avatar } from '@mui/material';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { Box } from '@mui/system';
import { format } from 'date-fns';

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
    },
    appbar: {
        width: `calc(100% - ${drawerWidth})px !important`
    },
    toolbar: (theme) => theme.mixins.toolbar,
    date: {
        flexGrow: 1
    },
    avatar: (theme) => ({
        marginLeft: theme.spacing(2)
    })
};

export default function Layout({ children }) {
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
        <AppBar 
            style = {{width: `calc(100% - ${drawerWidth}px)`}}
            elevation={0}
        >
            <Toolbar>
                <Typography sx={styles.date}>
                   Today is {format(new Date(), 'do MMMM Y')}
                </Typography>
                <Typography>Mario</Typography>
                <Avatar src="/mario-av.png" sx={styles.avatar} />
            </Toolbar>
        </AppBar>

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
            <Box sx={styles.toolbar}></Box>
            <div style={{ paddingTop: '20px' }}>
                {children}
            </div>
        </div>
    </div>
  )
}
