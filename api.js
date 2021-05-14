const fetch = require('node-fetch');
const url = "http://musicbrainz.org/ws/2/artist/5b11f4ce-a62d-471e-81fc-a69a8278c7da?fmt=json";
const fetchMusic = async(url) => {
    const data=await fetch(url);
    const fetchedData=await data.json();
    console.log(fetchedData);
}
fetchMusic(url);
