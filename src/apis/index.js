import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '7b642aed2489a8f6bfc80d04a2421e1c',
        }
})