
import React, { useContext } from 'react';
import UserProvider from './UserProvider';
import SocialMedia from './SocialMedia';
import ShareButton from './ShareButton';
import _ from 'lodash';
import Chance from 'chance';





export default function Model() {
    const userData = useContext(UserProvider.context);
    const jsonCode = JSON.stringify(userData.displayName);
    const jsonCode2 = JSON.stringify(userData.id);
    const jsonCode3 = JSON.stringify(userData.username);
    // const newJson = jsonCode.replace(/"/g, ' ')
    const chance = new Chance();
    const style = {
        textAlign: "left",
        marginTop: "8%",
        marginBottom: "2%",
        marginLeft: "4%"
    }
    return (
        <>
            {/* Button trigger modal */}
            <div style={style}>
                <button type="button" style={{ backgroundColor: "#C70039", border: "none" }} className="btn btn-secondary" data-toggle="modal" data-target="#exampleModal">
                    Check Your Social Score
                </button>
            </div>


            {!_.isEmpty(userData) ? <h5 style={{ color: "#6B007D", textAlign: "left", marginLeft: "4%" }}>ID: {jsonCode2}</h5> : null}
            {!_.isEmpty(userData) ? <h1 style={{ color: "#DA0043", textAlign: "left", marginLeft: "4%" }}>DisplayName: {jsonCode}</h1> : null}
            {!_.isEmpty(jsonCode3) ? <h4 style={{ color: "#6B007D", textAlign: "left", marginLeft: "4%" }}>UserName: {jsonCode3}</h4> : null}
            {!_.isEmpty(userData) ? <h5 style={{ color: "#2D017B",marginTop:"2%", textAlign: "left", marginLeft: "4%" }}>Also Check with these handles</h5> : null}
            {!_.isEmpty(userData) ? <SocialMedia /> : null}
            {!_.isEmpty(userData) ? <h1 style={{ textAlign: "left", color: "#003D83", marginTop: "2%", marginLeft: "4%" }}>Your Social Score is {chance.natural({ min: 40, max: 100 })}%</h1> : null}

            {!_.isEmpty(userData) ? <ShareButton /> : null}
            {/* Model */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Sign in with any of the Services below</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-footer">
                            <a href="/auth/facebook" type="button" className="btn btn-info">Facebook</a>
                            <a href="/auth/reddit" type="button" className="btn btn-danger">Reddit</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}