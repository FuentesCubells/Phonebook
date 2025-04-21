import React, { useEffect, useState } from "react";

const PhoneList = ({ persons }) => {
  
  const [searchTerm, setValue] = useState([]);
  const [fileterd, setFiltered] = useState(persons);

  const handleSearch = (event) => {
    
    const filter = persons.filter((person) =>
      person.name.toLowerCase().includes( event.target.value.toLowerCase())
    );
   
    setFiltered(filter);
    setValue(event.target.value);
    
  };

  useEffect(() => {
    setFiltered(persons)
  }, [persons]);
  
  
  return (
    <>
      <div className="search-bar">
        <input type="text" placeholder="Search" className="search-text" value={searchTerm} onChange={handleSearch}/>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect width="20" height="20" fill="white" fill-opacity="0.01"/>
          <path d="M18.125 17.2412L13.4049 12.5211C14.5391 11.1595 15.1047 9.41299 14.984 7.64496C14.8633 5.87693 14.0656 4.2235 12.7569 3.02862C11.4482 1.83374 9.72919 1.18941 7.9575 1.22967C6.18581 1.26993 4.49785 1.99168 3.24476 3.24477C1.99166 4.49787 1.26991 6.18583 1.22965 7.95752C1.18939 9.7292 1.83372 11.4482 3.0286 12.7569C4.22348 14.0657 5.87692 14.8633 7.64494 14.984C9.41297 15.1047 11.1595 14.5391 12.5211 13.4049L17.2412 18.125L18.125 17.2412ZM2.5 8.12501C2.5 7.01249 2.8299 5.92495 3.44798 4.99993C4.06606 4.0749 4.94457 3.35393 5.9724 2.92819C7.00024 2.50245 8.13124 2.39105 9.22238 2.60809C10.3135 2.82514 11.3158 3.36086 12.1025 4.14754C12.8891 4.93421 13.4249 5.93648 13.6419 7.02763C13.859 8.11877 13.7476 9.24977 13.3218 10.2776C12.8961 11.3054 12.1751 12.1839 11.2501 12.802C10.3251 13.4201 9.23752 13.75 8.125 13.75C6.63366 13.7484 5.20388 13.1552 4.14935 12.1007C3.09481 11.0461 2.50165 9.61635 2.5 8.12501Z" fill="#161616"/>
        </svg>
      </div>
      <div className="list-container">
        {fileterd.map((person) => (
          <article className="contact" key={person.name} id={person.name}>
            <header className="contact-header">
              <section className="contact-title">
                <a href={`/detail/${person._id}`}>
                  <h2 className="contact-name">{person.name}</h2>
                </a>
                <p className="contact-role">{person.role}</p>
              </section>
              <figure className="list-icon">{person.icon}</figure>
            </header>
            <section className="contact-details">
              <address className="contact-address">{person.city}</address>
              <div className="border-div"></div>
              <p className="contact-phone">{person.phone}</p>
            </section>
          </article>
        ))}
      </div>
    </>
  );
};

export default PhoneList;
