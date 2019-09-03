import React from 'react';
import Fab from '@material-ui/core/Fab';
import Image from 'material-ui-image'
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography'
export default class QR extends React.Component {

    render() {

        return (
            <Fab color="primary" aria-label="add" style={{ margin: "10px",position: "fixed",
                        bottom: "0",
                        right: "0" }}>
            <Typography  >
                QR
            </Typography>
                <AddIcon />

                
            </Fab>

        )
    }

}