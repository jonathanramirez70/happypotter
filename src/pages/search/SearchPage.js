import React, { useEffect } from 'react';
import ItemCard from "../../components/ItemCard";
import CardList from "../../components/CardList";
import { TextField, Button } from '@mui/material';
import './SearchPage.css';

const API = "https://hp-api.herokuapp.com/api/";

function SearchPage() {

    const [searchedData, setSearchedData] = React.useState();
    const [peopleArray, setPeopleArray] = React.useState([]);
    const [currentPeopleArray, setCurrentPeopleArray] = React.useState([]);

    useEffect(() => {
        getPeople();
    }, []);

    const getPeople = async () => {
        const response = await fetch(`${API}characters/`);
        const people = await response.json();
        setPeopleArray(people);
        setCurrentPeopleArray(people);
    }
    
    const filter = () => {
        const people = peopleArray.filter(row => row.name.toLowerCase().includes(searchedData.toLowerCase()));
        setCurrentPeopleArray(people);
    }

    // if (!trainersArray?.length) {
    //     return <div>No hay info</div>
    // }

    return(
        <>
			
			<div className="container">
                <div className="searchInput">
				    <TextField className="searchInput" id="standard-basic" label="Search..." variant="standard" onChange={(e) => setSearchedData(e.target.value)} />
                    <Button variant="contained" onClick={()=> filter()} >Search</Button>
                </div>
				{
					<CardList>
						{currentPeopleArray.map((peopleInArray, index) => <ItemCard key={index} person={peopleInArray}/> )}
					</CardList> 
				}
			</div>
        </>
    );
}

export default SearchPage;