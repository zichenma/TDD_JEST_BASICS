import axios from 'axios';

export const fetchData = () => {
    return axios.get('/').then(res => res.data);
}

export const getNumber =() => {
    return 123;
}

// assume backend return such data:
// '(function(){return '123'})()'