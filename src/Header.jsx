import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import LogOutIcon from '@material-ui/icons/PowerSettingsNew';
import {ArrowDropDown, ArrowDropUp} from '@material-ui/icons';


const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  menuLink: {
    color: '#000',
    marginTop: '6px',   
    '&:hover': {
        textDecoration: 'none',
      },    
  },
  menuLinkActive: {
    color: '#000',
    marginTop: '6px',
    fontWeight: 'bold',   
    '&:hover': {
        textDecoration: 'none',
      },    
  },
  menuLinkTopLine:{
    position: 'relative',
    backgroundColor: 'unset',
    height: 5,
    top: '-8px',
  },
  menuLinkTopLineActive:{
    position: 'relative',
    backgroundColor: 'green',
    height: 5,
    top: '-8px',
  },
  navigationContainer: {
      display: 'flex',
      justifyContent: 'space-between',
  },
  menuItemsContainer: {
      display: 'flex',
  },
  menuItemBox:{
      marginRight: '40px',
  },
  logOutText:{
      marginLeft: 5
  },
  imageFlagBtn:{
    width: 24,
    borderRadius: '50%',
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [topMenuActive, setTopMenuActive] = React.useState('Farms');

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleTopMenu = (value) => {
    setTopMenuActive(value)
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: -50, horizontal: 'center' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >      
      <MenuItem onClick={handleMenuClose}>
          <LogOutIcon />
          <span className={classes.logOutText}>Log out</span>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" color="default">
        <Toolbar>          
          <Typography className={classes.title} variant="h6" noWrap>
            Material-UI
          </Typography>         
          <Container maxWidth="md" className={classes.navigationContainer}>
          <div className={classes.menuItemsContainer}>
              <div className={classes.menuItemBox}>
                <div className={topMenuActive === 'Farms' ? classes.menuLinkTopLineActive: classes.menuLinkTopLine}></div>  
                <Link href="#" onClick={(e)=> {e.preventDefault(); handleTopMenu('Farms');}} className={topMenuActive === 'Farms' ? classes.menuLinkActive : classes.menuLink}>Farms</Link>
              </div>
              <div className={classes.menuItemBox}>
              <div className={topMenuActive === 'Customers' ? classes.menuLinkTopLineActive: classes.menuLinkTopLine}></div> 
                <Link href="#" onClick={(e)=> {e.preventDefault(); handleTopMenu('Customers');}} className={topMenuActive === 'Customers' ? classes.menuLinkActive : classes.menuLink}>Customers</Link>
              </div>
              <div className={classes.menuItemBox}>
              <div className={topMenuActive === 'Graphs' ? classes.menuLinkTopLineActive: classes.menuLinkTopLine}></div> 
                <Link href="#" onClick={(e)=> {e.preventDefault(); handleTopMenu('Graphs');}} className={topMenuActive === 'Graphs' ? classes.menuLinkActive : classes.menuLink}>Graphs</Link>
              </div>                
           </div>        
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={1} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>            
            <Button
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="false"
              onClick={handleProfileMenuOpen}
              color="inherit"
              style={{textTransform: 'unset'}}              
            >
                <span>User Name</span>
                {anchorEl === null? <ArrowDropDown /> : <ArrowDropUp />}
            </Button>
            <IconButton aria-label="show 4 new mails" color="inherit">
                <img src="image/il.svg" alt="Hebrew" className={classes.imageFlagBtn}/>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
          </Container>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}