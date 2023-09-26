import React, { useEffect, useState } from "react";

import AppHeader from "./AppHeader/AppHeader";
import PhoneList from "./phoneLists/PhoneList";

import Services from "../services/phoneServices"

const Content = () => {

    const [persons, setPersons] = useState([])

    useEffect ( () => {
        Services 
            .get()
            .then( returnedObjects => {
                setPersons(returnedObjects);
            })
    },[]);

    return (
        <>
            <AppHeader />
            <PhoneList persons={persons}/>
        </>
    )
}

export default Content