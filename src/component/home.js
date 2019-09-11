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
import NavBar from "../component/NavBar"
import Image from 'material-ui-image'
import {Link}  from 'react-router-dom'
class PageRestaurant extends React.Component {
    render() {
        return (
            <Container component='main' maxWidth='xs'>
                <CssBaseline />
                <div className="paper">
                    <NavBar />
                    <Image src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX26459683.jpg" />
                    <Link to="/platos">
                    <Button
                        style={{
                            backgroundColor: '#6200EE',color:"#fff",marginTop:"30%"
                        }}
                        type='submit'
                        fullWidth
                        variant='contained'
                        color='#fff'
                        className='submit'>
                        Continuar Con la Orden
              </Button>
              </Link>
              <br/>
              <br/>
              <center>
                <Typography component='h10' variant='h10'>
                Por el momento solo tenemos un restaurante dale continuar
                </Typography>

              </center> 

                    <ButtonQR />


                </div>

            </Container>
        )
    }

}

export default PageRestaurant;

