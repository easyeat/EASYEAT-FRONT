import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import logo from '../images/EasyEat.png'
import '../css/style_registry.css'
import {Link}  from 'react-router-dom'

class login extends React.Component {


  render () {
    return (
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className='paper'>
          <center>
            <img className='image' src={logo} alt='Icon Easy Eat' />
            <Typography component='h1' variant='h5'>
              Sign in
            </Typography>
          </center>
          <form className='form' noValidate>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password' />
            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label='Remember me' />
            <br></br>
            <Link to="/platos" style={{textDecoration:"none"}}>
              <Button
                  style={{
                  backgroundColor: '#6200EE'
                  }}
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                className='submit'>
                Sign In
              </Button>
            </Link>
            <br></br>
            <br></br>
            <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2'> Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/">
                {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
        </Box>
      </Container>
    )
  }

}

export default login
