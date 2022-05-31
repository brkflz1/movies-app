import React from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate  } from 'react-router-dom';

export default function LoginPage() {
    let navigate = useNavigate();
    let location = useLocation();
    const dispatch = useDispatch()
    // let auth = useAuth();
  
    let from = location.state?.from?.pathname || "/";
  
    function handleSubmit(event) {
      event.preventDefault();
  
      let formData = new FormData(event.currentTarget);
      let username = formData.get("username");
  
        
    }

    return (
      <div>
        <p>You must log in to view the page at {from}</p>
  
        <form onSubmit={handleSubmit}>
          <label>
            Username: <input name="username" type="text" />
          </label>
          <label>
            Password: <input name="password" type="password" />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    );
}
