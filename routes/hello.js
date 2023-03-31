
// importing packages
const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

// To load environment variable 
if(process.env.NODE_ENV != 'production'){
    require('dotenv').config();
}

const Api_Key = process.env.RAPID_API_KEY



    // feeds/autocomplete
router.get(`/feed/autocomplete`, async function (req, res) {
    const url = 'https://yummly2.p.rapidapi.com/feeds/auto-complete?q=chicken%20soup';

    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': Api_Key,
          'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
        }
      };
      
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }
        const data = await response.json();
        res.status(200).json(data);
    } catch (err) {
        console.error(err);
        if (err.name === 'FetchError' || err.name === 'TypeError') {
            res.status(500).json({msg: `Failed to make API request.`});
        } else if (err.name === 'SyntaxError') {
            res.status(500).json({msg: `Failed to parse API response.`});
        } else {
            res.status(500).json({msg: `Internal Server Error.`});
        }
    }
});




//  feeds/search
router.get(`/feed/search`, async function (req, res) {
const url = 'https://yummly2.p.rapidapi.com/feeds/search?start=0&maxResult=18&maxTotalTimeInSeconds=7200&q=chicken%20soup&allowedAttribute=diet-lacto-vegetarian%2Cdiet-low-fodmap&FAT_KCALMax=1000';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': Api_Key,
    'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
  }
};

try {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
    }
    const data = await response.json();
    res.status(200).json(data);
} catch (err) {
    console.error(err);
    if (err.name === 'FetchError' || err.name === 'TypeError') {
        res.status(500).json({msg: `Failed to make API request.`});
    } else if (err.name === 'SyntaxError') {
        res.status(500).json({msg: `Failed to parse API response.`});
    } else {
        res.status(500).json({msg: `Internal Server Error.`});
    }
}
	
});


// Feeds/List
router.get(`/feed/list`, async function (req, res) {
const url = 'https://yummly2.p.rapidapi.com/feeds/list?limit=24&start=0';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': Api_Key,
    'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
  }
};

try {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
    }
    const data = await response.json();
    res.status(200).json(data);
} catch (err) {
    console.error(err);
    if (err.name === 'FetchError' || err.name === 'TypeError') {
        res.status(500).json({msg: `Failed to make API request.`});
    } else if (err.name === 'SyntaxError') {
        res.status(500).json({msg: `Failed to parse API response.`});
    } else {
        res.status(500).json({msg: `Internal Server Error.`});
    }
}
	
});


// feeds/list-similarities
router.get(`/feed/list-similarities`, async function (req, res) {
const url = 'https://yummly2.p.rapidapi.com/feeds/list-similarities?limit=18&start=0&id=15-Minute-Baked-Salmon-with-Lemon-9029477&apiFeedType=moreFrom&authorId=Yummly';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': Api_Key,
    'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
  }
};

try {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
    }
    const data = await response.json();
    res.status(200).json(data);
} catch (err) {
    console.error(err);
    if (err.name === 'FetchError' || err.name === 'TypeError') {
        res.status(500).json({msg: `Failed to make API request.`});
    } else if (err.name === 'SyntaxError') {
        res.status(500).json({msg: `Failed to parse API response.`});
    } else {
        res.status(500).json({msg: `Internal Server Error.`});
    }
}
	
});

// tags/list
router.get(`/tags/list`, async function (req, res) {
    const url = 'https://yummly2.p.rapidapi.com/tags/list';
    
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': Api_Key,
        'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
      }
    };
    
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }
        const data = await response.json();
        res.status(200).json(data);
    } catch (err) {
        console.error(err);
        if (err.name === 'FetchError' || err.name === 'TypeError') {
            res.status(500).json({msg: `Failed to make API request.`});
        } else if (err.name === 'SyntaxError') {
            res.status(500).json({msg: `Failed to parse API response.`});
        } else {
            res.status(500).json({msg: `Internal Server Error.`});
        }
    }  
        
    });


//  categories/list
router.get(`/categories/list`, async function (req, res) {
    const url = 'https://yummly2.p.rapidapi.com/categories/list';

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': Api_Key,
        'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
      }
    };
    
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }
        const data = await response.json();
        res.status(200).json(data);
    } catch (err) {
        console.error(err);
        if (err.name === 'FetchError' || err.name === 'TypeError') {
            res.status(500).json({msg: `Failed to make API request.`});
        } else if (err.name === 'SyntaxError') {
            res.status(500).json({msg: `Failed to parse API response.`});
        } else {
            res.status(500).json({msg: `Internal Server Error.`});
        }
    }  
        
    });





// reviews/list
    router.get(`/reviews/list`, async function (req, res) {
   const url = 'https://yummly2.p.rapidapi.com/reviews/list?offset=0&globalId=a8d6747a-bfaa-46a7-92fb-892e3f76b264&limit=20';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': Api_Key,
    'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
  }
};
        
try {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
    }
    const data = await response.json();
    res.status(200).json(data);
} catch (err) {
    console.error(err);
    if (err.name === 'FetchError' || err.name === 'TypeError') {
        res.status(500).json({msg: `Failed to make API request.`});
    } else if (err.name === 'SyntaxError') {
        res.status(500).json({msg: `Failed to parse API response.`});
    } else {
        res.status(500).json({msg: `Internal Server Error.`});
    }
}  
            
        });


module.exports = router;