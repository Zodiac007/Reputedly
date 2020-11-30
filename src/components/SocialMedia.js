import React from 'react';
// import UserProvider from './UserProvider';


export default function SocialMedia() {

    return (
        <>
            <div style={{ marginTop: "0%", textAlign: "left" }}>
                <a href="/auth/twitter" type="button" style={{ marginLeft: "4%", backgroundColor: "#005AC7", border: "none" }} className="btn btn-info">
                    Twitter
                </a>
                <a href="/auth/instagram" type="button" style={{ marginLeft: "1%", backgroundColor: "#FB02C7", border: "none" }} className="btn btn-danger">
                    Instagram
                </a>
                <a href="/auth/github" type="button" style={{ marginLeft: "1%", backgroundColor: "#0A0008", border: "none" }} className="btn btn-info">
                    Github
                </a>
                <a href="/auth/linkedin" type="button" style={{ marginLeft: "1%", backgroundColor: "#8109F9", border: "none" }} className="btn btn-danger">
                    Linkedin
                </a>
            </div>
        </>
    )

}

