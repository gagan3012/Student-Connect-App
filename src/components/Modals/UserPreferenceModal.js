import {AppBar, Collapse, Dialog, Fade, ListItem, ListItemIcon, ListItemText, Slide} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import CloseIcon from '@material-ui/icons/Close';
import {PreferenceListItem} from "../ListItem/ListItem";
import {
    newsBlogsClubsOptions,
    academicOptions,
    eventsOptions,
    mensSportsOptions,
    womensSportOptions, womensSportsOptions
} from "../../assets/SurveyCategories";
import BookIcon from "@material-ui/icons/Book";
import EditIcon from '@material-ui/icons/Edit';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import RssFeedIcon from "@material-ui/icons/RssFeed";
import EventIcon from '@material-ui/icons/Event';
import {Sports} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },    modifyButton:{
        backgroundColor:"#0055B7",
        color:"white",
        textTransform:'none'

    },
    appBar: {
        position: 'relative',
        background: "#002145",
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },



}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export default function UserPreferenceModal(props){
    const classes = useStyles();
    const {userPreference} = props
    console.log(userPreference)
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange=(param)=> {
        if(param.category==="mensSportsList" || param.category==="womensSportsList"){
            userPreference.sportsPreference[param.category][param.backendName]=param.checked
        }else{
            userPreference[param.category][param.backendName]=param.checked

        }
    }
    const handleSwitchChange=(param)=>{
        userPreference.emailNotification=param
    }

    return(
        <div>
            <Button className={classes.modifyButton} onClick={handleClickOpen} startIcon={<EditIcon/>}>
                Modify
            </Button>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Change preferences
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose} startIcon={<SaveAltIcon/>}>
                            Save
                        </Button>
                    </Toolbar>
                </AppBar>
                <List>
                    <PreferenceListItem label={"News, Blogs and Clubs"}
                                        nestedItem={newsBlogsClubsOptions.map(item=>({ name: item.name,
                                            backendName: item.backendName, checked:userPreference["newsBlogsClubsPreference"][item.backendName] }))} icon={<RssFeedIcon/>}/>
                    <PreferenceListItem label={"Events"}
                                        nestedItem={eventsOptions.map(item=>({ name: item.name, backendName: item.backendName,checked:userPreference["eventsPreference"][item.backendName] }) )} icon={<EventIcon/>}/>
                    <PreferenceListItem label={"Academic"}
                                        nestedItem={academicOptions.map(item=>({ name: item.name, backendName: item.backendName,checked:userPreference["academicPreference"][item.backendName] }) )} icon={<BookIcon/>}/>
                    <PreferenceListItem label={"Men's Sports"}
                                        nestedItem={mensSportsOptions.map(item=>({ name: item.name, backendName: item.backendName,checked:userPreference["sportsPreference"]["mensSportsList"][item.backendName] }) )} icon={<Sports/>}/>
                    <PreferenceListItem label={"Women's Sports"}
                                        nestedItem={womensSportsOptions.map(item=>({ name: item.name, backendName: item.backendName,checked:userPreference["sportsPreference"]["womensSportsList"][item.backendName]  }) )
                    } icon={<Sports/>}/>


                </List>
            </Dialog>
        </div>

    )
}