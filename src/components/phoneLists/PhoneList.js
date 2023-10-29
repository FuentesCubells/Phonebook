import React from "react";

const PhoneList = ({ persons }) => {

  return persons.map((person) => (
    <article className="contact" key={person.name}>
      <header className="contact-header">
        <section className="contact-title">
          <a href={`/detail/${person.name}`}>
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
  ));
};

export default PhoneList;
