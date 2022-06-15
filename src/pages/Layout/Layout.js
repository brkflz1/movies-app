import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div>

            <ul>
                <li>
                    <Link to="/">Public Page</Link>
                </li>
                <li>
                    <Link to="/movies">Go to Movie Database</Link>
                </li>
            </ul>

            <Outlet />
        </div>
    )
}
