import axios from 'axios'
import { MOVIE_DB } from './config'

export default async function getAuthenticateService(token) {
    try {
        const response = await axios({
            method: 'get',
            url: MOVIE_DB + `/authenticate/${token}`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        
        return response
      } catch (error) {
        
        return error
      }
}