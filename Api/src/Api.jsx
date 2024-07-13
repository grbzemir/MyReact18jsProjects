import axios from 'axios';

const searchImages = async (term) => {

    //pexels-api
    const response = await axios.get('https://api.pexels.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 1HnVDXsxSYmBT5X90wrR37FuvHmHjCq6djj1xqApOrZaFXj2NdXu1KmE'
        },
        params: {
            query: term,
        },
    });

    // debugger;
    return response.data.resulst;
};


export default searchImages;    