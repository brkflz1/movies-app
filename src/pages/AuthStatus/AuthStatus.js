import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function AuthStatus() {
    // let auth = useAuth();
    let navigate = useNavigate();

    if (!false) {
        return <p>You are not logged in.</p>;
    }

    return (
        <p>
            Welcome {false}!{" "}
            <button
                // onClick={() => {
                //     auth.signout(() => navigate("/"));
                // }}
            >
                Sign out
            </button>
        </p>
    );
}
