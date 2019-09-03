import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../images/EasyEat.png'
import AccountCircle from '@material-ui/icons/AccountCircle';
import Container from '@material-ui/core/Container'
class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ flexGrow: "1", }}>
                <AppBar position="fixed" style={{ backgroundColor: "#001f3f" }}>
                    <Toolbar>
                        <IconButton edge="start" style={{ marginRight: "20" }} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>

                        <Container>
                            <center>
                                <a href="#"><img className='image' src={logo} style={{ border: "0" }} alt='Icon Easy Eat' /></a>

                            </center>
                        </Container>
                        <IconButton

                            edge="end"
                            aria-label="account of current user"
                            //aria-controls={menuId}
                            aria-haspopup="true"
                            //onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
        )


    }
}
export default NavBar;