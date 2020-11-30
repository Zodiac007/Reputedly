import React from 'react';
import {
    FacebookShareButton, FacebookIcon,
    TwitterShareButton, TwitterIcon,
    RedditShareButton, RedditIcon,
    LinkedinShareButton, LinkedinIcon,
} from "react-share";
import Chance from 'chance';
export default function ShareButton() {
    const chance = new Chance()

    return (
        <>
            <a><h6 style={{ marginLeft: "4%",marginTop:"3%",textDecoration:"underline",color:"#3191FF" }}>Share with your friends</h6></a>
            <FacebookShareButton
                url={"http://www.camperstribe.com"}
                title={"Reputedly"}
                quote={`your social score ${chance.natural({ min: 40, max: 100 })}%`}
                hashtag="#reputedly"
                style={{ marginLeft: "4%" }}
            >
                <FacebookIcon size={36} />
            </FacebookShareButton>

            <RedditShareButton
                url={"http://localhost:5000/profile"}
                quote={`your social score ${chance.natural({ min: 40, max: 100 })}%`}
                hashtag="#reputedly"
                style={{ marginLeft: "1%" }}
            >
                <RedditIcon size={36} />
            </RedditShareButton>
            <TwitterShareButton
                url={"http://localhost:5000/profile"}
                quote={`your social score ${chance.natural({ min: 40, max: 100 })}%`}
                hashtag="#reputedly"
                style={{ marginLeft: "1%" }}
            >
                <TwitterIcon size={36} />
            </TwitterShareButton>
            <LinkedinShareButton
                url={"http://localhost:5000/profile"}
                quote={`your social score ${chance.natural({ min: 40, max: 100 })}%`}
                hashtag="#reputedly"
                style={{ marginLeft: "1%" }}
            >
                <LinkedinIcon size={36} />
            </LinkedinShareButton>
        </>
    )
}