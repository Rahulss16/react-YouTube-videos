import axios from 'axios';

const KEY = 'AIzaSyDrDcVZa65epoESo4n7IHUtGEBndoxMq3o';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults:5,
        key: KEY
    },
});