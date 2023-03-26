import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: 'Client-ID tvkqJVu_fOziKejGcJ7G53jfaij1Z8-Gr7SB1QRCKS0'
        },
        params: {
            query: term
        }
    });

    return response.data.results;
}

export default searchImages;