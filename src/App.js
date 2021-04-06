import './App.css';
import {useState, useEffect} from 'react';
import { Card, Button } from '@material-ui/core';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

function App() {
    const [responseData, setResponseData] = useState({});
    const [errors, setErrors] = useState(null);
    
    async function fetchData() {
        const res = await fetch("https://api.quotable.io/random");
        res
          .json()
          .then(res => setResponseData(res))
          .catch(err => setErrors(err));
      }

    useEffect(() => {
        fetchData();
    },[])

    console.log(responseData.quote);
    console.log(responseData.quote);
    console.log(errors);
    
  return (
      <div className='body' style={styles.container}>
        <Card id="quote-box" style={{backgroundColor: 'white'}}>
            <p id="text" style={{fontSize: '2rem', color:'aqua'}}><FormatQuoteIcon />{responseData.content}</p>
            <p id="author" style={{justifyContent: 'right', fontSize: '1rem', color: 'aqua'}}>-{responseData.author}</p>
            <div >
            <a id="tweet-quote" href="twitter.com/intent/tweet"></a>
            <Button id="new-quote" style={{color: 'aqua'}} onClick={() => fetchData()}>
                New quote
            </Button>
            </div>
        </Card>
      </div>
  );
}
const styles = {
    container:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'aquamarin',
    },
    quoteBox:{
    position: 'fixed',
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    color: 'purple',
    fontSize: '20px',
    border: '2px solid purple',
    flexWrap: 'wrap'
    }
  }

export default App;
