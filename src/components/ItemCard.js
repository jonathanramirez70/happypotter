import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


export default function ItemCard({ person }) {
    let navigate = useNavigate();

    const routeChange = () =>{ 
        let path = `/details/`; 
        navigate(path);
    }

  return (
    <Grid item xs={4} md={3} lg={2}>
        <Card  sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="250"
                image={person.image}
                alt={person.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                    {person.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {person.wizard? 'Wizard': 'No Wizard'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Show</Button>
            </CardActions>
        </Card>
    </Grid>
    );
}