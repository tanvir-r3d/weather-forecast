import React from "react";
import {MDBIcon, MDBTable, MDBTableBody, MDBTableHead} from "mdbreact";

const SearchList = (props) => {
    const searchResult = props.result;
    const handleCapitalSelect = (capital) => {
        props.handleCapitalSelect(capital);
    }
    if (searchResult && searchResult.length) {
        return (
            <>
                <MDBTable>
                    <MDBTableHead>
                        <tr>
                            <th>Capital</th>
                            <th>Country</th>
                            <th>Select</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {searchResult.map((row) => (
                            <tr onClick={() => handleCapitalSelect(row.name)} style={{cursor: "pointer"}}
                                key={row.name}>
                                <td>{row.name}</td>
                                <td>{row.country}</td>
                                <td><MDBIcon className={'text-success'} icon="check-circle"/></td>
                            </tr>))}
                    </MDBTableBody>
                </MDBTable>
            </>
        );
    } else {
        return (
            <></>
        );
    }
}

export default SearchList;