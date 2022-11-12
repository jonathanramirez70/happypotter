import Grid from '@mui/material/Grid';

export default function CardList(props){
	return (
		<Grid container spacing={2}>
			{props.children}
		</Grid>
	)
}	