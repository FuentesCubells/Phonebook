import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import AppHeader from "./AppHeader/AppHeader";
import PhoneList from "./phoneLists/PhoneList";

import Add from "./forms/Add";


import Services from "../services/phoneServices";

const Content = ({ text }) => {
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  

  useEffect(() => {
    Services.get().then((returnedObjects) => {
      setPersons(returnedObjects);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <AppHeader text={text}/>
      {location.pathname === "/" ? (
            loading ? (
            <p>Loading...</p>
            ) : (
            <PhoneList persons={persons} />
            )
        ) : (
            <Add Services={Services}/>
      )}
    </>
  );
};

export default Content;
