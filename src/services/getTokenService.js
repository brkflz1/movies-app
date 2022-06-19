import axios from 'axios'
import { MOVIES_DEVELOPERS } from './config'

export default async function getTokenService(body) {
    try {
        const response = await axios({
            method: 'get',
            url: MOVIES_DEVELOPERS + '/3/authentication/token/new?api_key=6cd7f7bf67d197108ceb1be22406ba3a',
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