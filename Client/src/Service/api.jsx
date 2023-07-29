import axios from 'axios';

const URL =process.env.REACT_APP_URL;
export const Authantication = async(data)=>{
try {
     return await axios.post(`${URL}/signup`,data)
} catch (error) {
    //console.log('Error on callling API',error);
}
}