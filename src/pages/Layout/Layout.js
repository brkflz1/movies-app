import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import AuthStatus from '../AuthStatus/AuthStatus'

export default function Layout() {
    return (
        <div>
            <AuthStatus />

            <ul>
                <li>
                    <Link to="/">Public Page</Link>
                </li>
                <li>
                    <Link to="/protected">Protected Page</Link>
                </li>
            </ul>

            <Outlet />
        </div>
    )
}
