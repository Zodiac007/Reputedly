import React, { useContext } from 'react';
import UserProvider from './UserProvider';
import _ from 'lodash'


export default function Nav() {
    const userData = useContext(UserProvider.context);

    return (
        <nav className="navbar navbar-light" style={{ backgroundColor: "#D60054" }}>
            <a className="navbar-brand" style={{ color: "#fff", marginLeft: "4%" }} href="#">
                Reputedly
            </a>
            {
                !_.isEmpty(userData) ?
                    <a href="/auth/logout" type="button" style={{ marginRight: "4%" }} className="btn btn-outline-light">Logout</a>
                    :
                    <a href="/auth/logout" type="button" style={{ marginRight: "4%" }} className="btn btn-outline-light">Login with any Social Media</a>
            }
        </nav>
    )
}