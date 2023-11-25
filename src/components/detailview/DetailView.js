import React , { useState, useEffect }from "react";
import { useParams,  useNavigate, useLocation } from 'react-router-dom';

const DetailView = ({ Services,  persons, setReloadUsers}) => {
  
  const navigate =  useNavigate();
  const location = useLocation();
  const id  = useParams();
  const [loading, setLoading] = useState(true);
  
  const person = Object.values(persons).find(obj => Object.values(obj).includes(id.name));
  

  useEffect(() => {
    
    if (persons.length > 0) {
      setLoading(false);
    }
   
  }, [persons]);

  
  const handleDelete = async () => {
    try {
      const deleteData = new FormData();
      deleteData.append('id', id.name);

      let response = await Services.deleteContact(id.name, deleteData);
      setReloadUsers(true);
      navigate('/');

    } catch (error) {
      
    }
  }

  if (loading) {
    return <p>Loading...</p>; // Or any loading component
  }
  
  return (
    <div className="edit-container">
      <div className="edit-actions">
        <button className="edit-action"><a href={`/edit-contact/${id.name}`}>Edit</a></button>
        <button className="edit-action"><a href={`#`} onClick={handleDelete}>Erase</a></button>
      </div>
      
      <div className="edit-content">
        <div className="content-title">
          <img alt="portrait" src={person.image}/>
          <div className="content-info">
            <div className="icon">
              {person.icon}
            </div>
            <div className="content-name">
              <h2>{person.name}</h2>
              <h3>{person.role}</h3>
            </div>
          </div>
        </div>
        <div className="content-description">
        <div className="contact-info">
            <h3>City</h3>
            <div className="border-div"></div>
              <p>{person.city}</p>
          </div>
        <div className="contact-info">
            <h3>Phone Number</h3>
            <div className="border-div"></div>
              <p>{person.phone}</p>
          </div>
          <div className="contact-info">
            <h3>Email</h3>
            <div className="border-div"></div>
            <p>{person.email}</p>
          </div>
          <div className="contact-info">
            <h3>Works for</h3>
            <div className="border-div"></div>
            <p>{person.company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailView;
