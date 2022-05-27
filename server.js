const express = require('express')
const dotenv = require('dotenv')
const axios = require("axios").default

dotenv.config({path: './.env'});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(__dirname+"/public"));

app.set("view engine", "ejs");

let flag;

const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`);
})

app.get("/",(req,res)=>{
    res.render('index',{places:undefined});
})



app.post("/" , (req,res)=>{
    
    let places;

    // var noOfCitiesEle = document.getElementById('no-cities').value;
    // var noOfCities = JSON.parse(noOfCitiesEle);

    // if(noOfCities>10)
    //     noOfCitiesEle='10';
    // else if(noOfCities<1)
    //     noOfCitiesEle='1';

    var options = {
        method: 'GET',
        url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
        params: {countryIds: 'IN', namePrefix: req.body.searchInput, limit: '5'},
        headers: {
          'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
          'x-rapidapi-key': process.env.API_KEY
        }
      };
      
      axios.request(options).then(function (response) {
          places = response.data.data;
        //  console.log(places);
         res.render("index",{places});
      }).catch(function (error) {
          console.error(error);
      });

    
})

