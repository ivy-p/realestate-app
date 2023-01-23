import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'dc444c542dmshdaf55b81de218d1p1baf2cjsn88e6d3260d7f',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    });

    return data;
}