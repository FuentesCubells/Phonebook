import React, { useEffect, useState } from "react";
import { useLocation,  useParams  } from "react-router-dom";

import AppHeader from "./AppHeader/AppHeader";
import PhoneList from "./phoneLists/PhoneList";

import Add from "./forms/Add";
import Edit from "./forms/Edit";

import Services from "../services/phoneServices";

const Content = ({ text }) => {
  const {name} = useParams();
  
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
      <AppHeader text={text} />
      {location.pathname === "/" ? (
        loading ? (
          <p>Loading...</p>
        ) : (
          <PhoneList persons={persons} />
        )
      ) : location.pathname === `/edit` ? (
        <Edit Services={Services} />
      ) : (
        <Add Services={Services} />
      )}
    </>
  );
};

export default Content;
