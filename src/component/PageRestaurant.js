import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import logo from "../images/logo.jpg"
import "../css/style_registry.css"
import CRestaurante from "../component/DataRestaurant"
import ButtonQR from "../component/ButtonQR"

class PageRestaurant extends React.Component {
    render() {
        return (
            <Container component='main' maxWidth='xs'>
                <CssBaseline />
                <div className="paper">
                    <center>
                        <img className='image' src={logo} alt='Icon Easy Eat' />
                        <Typography component='h1' variant='h5'>
                            Restaurantes
            </Typography>
                    </center>
                    <CRestaurante />
                    <br />
                    <CRestaurante />
                    <br />
                    <ButtonQR />
                    <CRestaurante />
                    <br />
                    <CRestaurante />
                    <br />

                </div>
                {/*<Box mt={8}>

                </Box>*/}
            </Container>
        )
    }

}

export default PageRestaurant;

