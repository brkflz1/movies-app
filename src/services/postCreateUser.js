
import axios from 'axios'
import { AUTH_ROOT } from './config'


export default async function postCreateUser(body) {
    try {
        const response = await axios({
            method: 'post',
            url: AUTH_ROOT + '/register',
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