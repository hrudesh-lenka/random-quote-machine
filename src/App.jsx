import './App.css';
import {useState, useEffect} from 'react';
import { Card, Button } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import TwitterIcon from '@mui/icons-material/Twitter';
import COLOR_ARRAY from './color'

function App() {
    const [responseData, setResponseData] = useState({});
    const [errors, setErrors] = useState(null);
    const [bgColor, setBgColor] = useState('#991AFF');
    
    async function fetchData() {
        let randomInteger = Math.floor(COLOR_ARRAY.length * Math.random())
        setBgColor(COLOR_ARRAY[randomInteger])
        const res = await fetch("https://dummyjson.com/quotes/random");
        res
          .json()
          .then(res => setResponseData(res))
          .catch(err => setErrors(err));
      }

    useEffect(() => {
      fetchData();
    },[])

    console.log(errors);
    
  return (
      <div className='body' style={{backgroundColor: bgColor}}>
        <Card id="quote-box">
            <p id="text" style={{color: bgColor}}><FormatQuoteIcon />{responseData.quote}</p>
            <p id="author" style={{color: bgColor}}>-{responseData.author}</p>
            <div className='button-twitter'>
              <a id="tweet-quote" href={encodeURI(`http://twitter.com/intent/tweet?text=${responseData.quote} -${responseData.author}`)}><TwitterIcon style={{backgroundColor: bgColor, color: 'white'}} /></a>
              <Button id="new-quote" style={{backgroundColor: bgColor}} onClick={() => fetchData()}>
                New quote
              </Button>
            </div>
        </Card>
      </div>
  );
}


export default App;
