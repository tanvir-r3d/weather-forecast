import React, {useContext, useEffect, useState} from "react";
import {MDBCol, MDBInput} from "mdbreact";
import axios from "axios";
import {API, API_KEY} from "../config";
import {CapitalContext} from "../Context/CapitalContext";
import SearchList from "./SearchList";

const Search = () => {
    const {setCapital} = useContext(CapitalContext);
    const [searchKey, setSearchKey] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const handleSearchChange = (event) => {
        setSearchKey(event.target.value)
    };

    const search = async () => {
        if (searchKey) {
            const {data} = await axios(`${API}/search.json?key=${API_KEY}&q=${searchKey}`);
            setSearchResult([...data]);
        }
    };

    const handleCapitalSelect = (capital) => {
        setCapital(capital);
        setSearchKey("");
        setSearchResult([]);
    };

    useEffect(() => {
        search();
    }, [searchKey]);

    return (<>
        <MDBCol md="3"/>
        <MDBCol md="6">
            <MDBInput hint="Search" type="text"
                      onInput={(event) => handleSearchChange(event)}
                      containerClass="mt-0"/>
        </MDBCol>
        <MDBCol md="3"/>
        <MDBCol md="3"/>
        <MDBCol md="6">
            <SearchList result={searchResult} handleCapitalSelect={handleCapitalSelect}/>
        </MDBCol>
        <MDBCol md="3"/>
    </>);
}

export default Search;