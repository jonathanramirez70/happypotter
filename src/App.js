import './App.css';
import { TextField, Button } from '@mui/material';
import { useState }from 'react';
import CardList from './components/CardList';



function App() {
  const [inputSearch, setInputSearch] = useState();
  const [loaded, setLoaded] = useState(false);
  if (!loaded) {
    return (
      <div className="App">
        <TextField id="standard-basic" label="Search..." variant="standard" onChange={(e) => setInputSearch(e.target.value)} />
        <Button variant="contained" onClick={()=> setLoaded(true)} >Search</Button>
      </div>
    );
  } else {
    return <CardList search={inputSearch}/>
  }
  
}

export default App;
