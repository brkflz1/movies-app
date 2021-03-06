
import axios from 'axios'
import { MOVIES_ROOT } from './config'


export default async function postCreateUser(body) {
    try {
        const response = await axios({
            method: 'get',
            url: MOVIES_ROOT + '/3/discover/movie?sort_by=popularity.desc&api_key=6cd7f7bf67d197108ceb1be22406ba3a',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, 
            data: body
        });
        
        return response
      } catch (error) {
        
        return error
      }
}