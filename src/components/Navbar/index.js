import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./Navbar.module.css";
import scrollToElement from "scroll-to-element";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      marginLeft: drawerWidth,
    },
  },
  smallScreenButton: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  bigScreenButton: {
    [theme.breakpoints.only("xs", "sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerSections = [
    { name: "HOME", className: ".header-section" },
    { name: "ABOUT", className: ".about-section" },
    { name: "EXPERIENCE", className: ".experience-section" },
    { name: "PROJECTS", className: ".projects-section" },
    { name: "CONTACT", className: ".contact-section" },
  ];

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {drawerSections.map((section, index) => (
          <ListItem
            button
            key={index}
            onClick={() => scrollToElement(section.className)}
          >
            <ListItemText primary={section.name} />
          </ListItem>
        ))}
        <ListItem
          button
          component="a"
          key={drawerSections.length + 1}
          href="https://drive.google.com/file/d/179IEqsFVeBQ0wYcz28ii3BBVz5oP0mjg/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ListItemText primary={"CV / RESUME"} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            id="home-button"
            className={classes.bigScreenButton}
            onClick={() => scrollToElement(".header-section")}
          >
            <HomeRoundedIcon />
          </IconButton>
          <div className={styles.centerPadding}></div>
          <Button
            color="inherit"
            className={classes.bigScreenButton}
            onClick={() => scrollToElement(".about-section")}
          >
            about
          </Button>
          <Button
            color="inherit"
            className={classes.bigScreenButton}
            onClick={() => scrollToElement(".experience-section")}
          >
            experience
          </Button>
          <Button
            color="inherit"
            className={classes.bigScreenButton}
            onClick={() => scrollToElement(".projects-section")}
          >
            projects
          </Button>
          <Button
            color="inherit"
            className={classes.bigScreenButton}
            onClick={() => scrollToElement(".contact-section")}
          >
            contact
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            style={{ marginLeft: "5px" }}
            className={classes.bigScreenButton}
            href="https://drive.google.com/file/d/179IEqsFVeBQ0wYcz28ii3BBVz5oP0mjg/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            CV / Resume
          </Button>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.smallScreenButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{ paper: classes.drawerPaper }}
            ModalProps={{ keepMounted: true }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};

export default Navbar;
