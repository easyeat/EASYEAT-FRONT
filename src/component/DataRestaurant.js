import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import "../css/style_restaurant.css"
import Star from '@material-ui/icons/Stars'
class DataRestaurant extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (

            <Card style={{display: 'flex'}}>
                <div className="details">
                    <CardContent className="content">
                        <Typography component="h5" variant="h5">
                            Plato
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Descipcion Plato
                        </Typography>
                        <Star style={{color:"#FFDC00"}}/>
                    </CardContent>
                  
                </div>
                <CardMedia
                    style={{ width: "100%"}}
                    image="https://images-gmi-pmc.edge-generalmills.com/f4c0a86f-b080-45cd-a8a7-06b63cdb4671.jpg"
                    title="Live from space album cover"
                />
            </Card>
        )

    }
}

export default DataRestaurant;