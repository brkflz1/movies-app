
import axios from 'axios'
import { AUTH_ROOT } from './config'

export default async function postLoginUser(body) {
    try {
        const response = await axios({
            method: 'post',
            url: AUTH_ROOT + '/login',
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