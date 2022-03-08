import React from "react";
import Current from "./Current";
import Search from "./Search";
import {MDBRow} from "mdbreact";
import {WrapWithCapitalContext} from "../Context/CapitalContext";

function Weather() {
    return (
        <>
            <MDBRow center>
                <WrapWithCapitalContext>
                    <Search/>
                    <Current/>
                </WrapWithCapitalContext>
            </MDBRow>
        </>
    );
}

export default Weather;