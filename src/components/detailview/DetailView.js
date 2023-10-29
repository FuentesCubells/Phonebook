import React , { useState, useEffect }from "react";
import { useParams } from 'react-router-dom';

const DetailView = ({persons}) => {
  const { name } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (persons.length > 0) {
      setLoading(false);
    }
  }, [persons]);

  const person = persons.filter(obj => Object.values(obj).includes(name));

  if (loading) {
    return <p>Loading...</p>; // Or any loading component
  }
  
  return (
    <div className="edit-container">
      <div className="edit-actions">
        <button className="edit-action">Edit</button>
        <button className="edit-action">Erase</button>
      </div>
      
      <div className="edit-content">
        <div className="content-title">
          <img></img>
          <div className="content-info">
            <div className="icon">
              {person[0].icon}
            </div>
            <div className="content-name">
              <h2>{person[0].name}</h2>
              <h3>{person[0].role}</h3>
            </div>
          </div>
        </div>
        <div className="content-description">
        <div className="contact-info">
            <h3>City</h3>
            <div className="border-div"></div>
              <p>{person[0].city}</p>
          </div>
        <div className="contact-info">
            <h3>Phone Number</h3>
            <div className="border-div"></div>
              <p>{person[0].phone}</p>
          </div>
          <div className="contact-info">
            <h3>Email</h3>
            <div className="border-div"></div>
            <p>{person[0].email}</p>
          </div>
          <div className="contact-info">
            <h3>Works for</h3>
            <div className="border-div"></div>
            <p>{person[0].company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailView;
