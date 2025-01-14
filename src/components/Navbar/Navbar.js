import React from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Button, Container, MenuItem} from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event';
import GroupIcon from '@material-ui/icons/Group';
import {Link} from "react-router-dom";
import RssFeedIcon from '@material-ui/icons/RssFeed';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Auth} from "aws-amplify";
import BookmarkIcon from '@material-ui/icons/Bookmark';
import {updateLoginState} from "../../actions/loginActions";
import {connect} from "react-redux";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        background: "#002145",
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },

        [theme.breakpoints.down('sm')]: {
            width: 0,
            display:'none',
        },


    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    signOutButton:{
        float: 'right',
        backgroundColor:"#0055B7",
        color:"white",
        textTransform:'none',
        fontSize:"15px"

    },
    appName:{
        minWidth:"50%",
        fontWeight:"400"
    },
    drawerPaperClose: {
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
    label:{
        fontSize:"16px"
    },
    menuItem:{
        marginTop:theme.spacing(2)
    }

}));

function Navbar() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    async function signOut() {
        updateLoginState("signIn");
        await Auth.signOut();
        window.location.reload()
    }
    const handleClickAway = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >

                <Toolbar>
                    <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, {
                                [classes.hide]: open,
                            })}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={classes.appName} variant="h5">
                            Student App
                        </Typography>

                    <Container>
                        <Button className={classes.signOutButton} variant={'contained'} startIcon={<ExitToAppIcon/>}
                                onClick={signOut}>
                            Sign out
                        </Button>
                    </Container>


                </Toolbar>
            </AppBar>

            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <MenuItem onClick={handleClickAway} component={Link} to="/settings" className={classes.menuItem}>
                        <ListItemIcon>{<PersonIcon fontSize={"large"} />}</ListItemIcon>
                        <ListItemText primary={"Profile"} classes={{primary:classes.label}}/>
                    </MenuItem>


                </List>
                <Divider className={classes.menuItem} />
                <List>
                    <MenuItem onClick={handleClickAway} component={Link} to="/" className={classes.menuItem} >

                        <ListItemIcon>{<HomeIcon fontSize={"large"} />}</ListItemIcon>
                        <ListItemText primary={"For you"} classes={{primary:classes.label}} />
                    </MenuItem>

                    <MenuItem onClick={handleClickAway} component={Link} to="/clubs" className={classes.menuItem}>
                        <ListItemIcon>{<GroupIcon fontSize={"large"} />}</ListItemIcon>
                        <ListItemText primary={"Clubs"} classes={{primary:classes.label}} />
                    </MenuItem>
                    <MenuItem onClick={handleClickAway} component={Link} to="/events" className={classes.menuItem}>
                        <ListItemIcon>{<EventIcon  fontSize={"large"}/>}</ListItemIcon>
                        <ListItemText primary={"Events"} classes={{primary:classes.label}} />
                    </MenuItem>

                    <MenuItem onClick={handleClickAway} component={Link} to="/news" className={classes.menuItem}>
                        <ListItemIcon>{<RssFeedIcon fontSize={"large"}/>}</ListItemIcon>
                        <ListItemText primary={"News and blogs"} classes={{primary:classes.label}} />
                    </MenuItem>
                    <MenuItem onClick={handleClickAway} component={Link} to="/savedItems" className={classes.menuItem}>
                        <ListItemIcon>{<BookmarkIcon fontSize={"large"} />}</ListItemIcon>
                        <ListItemText primary={"Saved Items"} classes={{primary:classes.label}} />
                    </MenuItem>

                </List>
            </Drawer>

            <main className={classes.content}>
                <div className={classes.toolbar} />
            </main>

        </div>
    );
}
const mapDispatchToProps = {
    updateLoginState,
};
export default connect( null,mapDispatchToProps)(Navbar);
