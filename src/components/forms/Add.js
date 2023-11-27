import React, { useState } from "react";
import { useParams,  useNavigate } from 'react-router-dom';

const Add = ({ Services, persons, setReloadUsers }) => {
  const navigate =  useNavigate();

  const {id} = useParams();
  const person = persons.filter(obj => Object.values(obj).includes(id));

  const [name, setName] = useState(person.length > 0 ? (person[0].name ? person[0].name : "") : "");
  const [phone, setPhone] = useState(person.length > 0 ? (person[0].phone ? person[0].phone : "") : "");
  const [email, setEmail] = useState(person.length > 0 ? (person[0].email ? person[0].email : "") : "");
  const [company, setCompany] = useState(person.length > 0 ? (person[0].company ? person[0].company : "") : "");
  const [role, setRole] = useState(person.length > 0 ? (person[0].role ? person[0].role : "") : "");
  const [sector, setSector] = useState(person.length > 0 ? (person[0].sector ? person[0].sector : "") : "");
  const [city, setCity] = useState(person.length > 0 ? (person[0].city ? person[0].city : "") : "");
  const [photo, setPhoto] = useState(null);

  const [selected, setSelected] = useState(null);

  const [errors, setErrors] = useState({
    name: null,
    phone: null,
    email: null,
    photo: null,
    exist: null,
  });
  
  const services = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <g clipPath="url(#clip0_105_3886)">
        <path
          d="M25.128 31.48C23.475 31.48 21.843 30.836 20.623 29.618C18.926 27.92 18.333 25.394 19.081 23.125L8.87399 12.92C6.60299 13.667 4.07999 13.073 2.38299 11.377C0.478991 9.474 -0.0210087 6.564 1.13899 4.137C1.18899 4.032 1.28699 3.957 1.40299 3.937C1.52099 3.919 1.63599 3.955 1.71799 4.038L5.71999 8.04C6.35999 8.678 7.39999 8.679 8.03999 8.04C8.67899 7.4 8.67899 6.36 8.03999 5.72L4.03799 1.718C3.95499 1.635 3.91799 1.518 3.93699 1.403C3.95699 1.288 4.03099 1.19 4.13699 1.139C6.56399 -0.0220006 9.47299 0.478999 11.376 2.382C13.074 4.08 13.668 6.606 12.918 8.876L23.124 19.081C25.395 18.329 27.92 18.925 29.617 20.623C31.519 22.526 32.019 25.435 30.86 27.863C30.809 27.968 30.711 28.043 30.595 28.062C30.487 28.084 30.364 28.044 30.28 27.962L26.278 23.96C25.639 23.321 24.598 23.321 23.96 23.96C23.32 24.6 23.32 25.64 23.96 26.278L27.962 30.28C28.044 30.363 28.082 30.48 28.062 30.595C28.042 30.71 27.968 30.809 27.863 30.86C26.991 31.277 26.057 31.48 25.128 31.48ZM8.96799 12.146C9.06199 12.146 9.15399 12.183 9.22199 12.251L19.75 22.775C19.85 22.875 19.882 23.023 19.833 23.155C19.068 25.217 19.578 27.554 21.133 29.108C22.697 30.672 25.029 31.168 27.075 30.413L23.451 26.789C22.532 25.869 22.532 24.372 23.451 23.451C24.375 22.533 25.871 22.534 26.789 23.451L30.413 27.075C31.168 25.028 30.673 22.697 29.108 21.133C27.554 19.578 25.219 19.068 23.155 19.833C23.023 19.881 22.876 19.85 22.775 19.75L12.25 9.225C12.15 9.126 12.118 8.977 12.167 8.845C12.933 6.783 12.422 4.446 10.868 2.891C9.30399 1.327 6.97199 0.830999 4.92499 1.587L8.54899 5.211C8.99299 5.655 9.23699 6.248 9.23699 6.88C9.23699 7.512 8.99199 8.105 8.54799 8.548C7.65999 9.437 6.09799 9.436 5.21099 8.548L1.58699 4.925C0.831991 6.971 1.32699 9.303 2.89099 10.868C4.44499 12.422 6.78299 12.932 8.84299 12.168C8.88399 12.153 8.92599 12.146 8.96799 12.146ZM2.85799 31.24C2.76599 31.24 2.67299 31.204 2.60399 31.135L0.860991 29.392C0.724991 29.256 0.719991 29.038 0.848991 28.895L3.78499 25.666C3.85099 25.593 3.94399 25.551 4.04299 25.548C4.11999 25.548 4.23599 25.584 4.30599 25.653L5.06999 26.417L12.546 18.94L13.055 19.45L5.57899 26.927L6.34199 27.69C6.41199 27.76 6.44999 27.855 6.44699 27.954C6.44399 28.053 6.40199 28.145 6.32899 28.212L3.09999 31.148C3.03199 31.209 2.94499 31.24 2.85799 31.24ZM1.61299 29.125L2.86999 30.383L5.56499 27.932L4.06299 26.43L1.61299 29.125ZM21.361 14.518L20.851 14.009L30.162 4.698C30.546 4.315 30.757 3.806 30.757 3.265C30.757 2.724 30.546 2.215 30.162 1.832C29.374 1.044 28.088 1.042 27.298 1.832L17.987 11.143L17.477 10.634L26.788 1.323C27.826 0.284999 29.636 0.286999 30.672 1.323C31.191 1.842 31.477 2.531 31.477 3.265C31.477 3.999 31.191 4.688 30.672 5.207L21.361 14.518ZM19.674 12.831L19.164 12.322L28.446 3.04L28.956 3.549L19.674 12.831Z"
          fill="#463E02"
        />
      </g>
      <defs>
        <clipPath id="clip0_105_3886">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
  const education = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <rect width="32" height="32" />
      <path
        d="M29.36 30.9999H28.64C28.64 27.3039 26.813 23.8489 23.913 21.5529L20.661 27.1799C20.561 27.3549 20.342 27.4119 20.17 27.3119L16 24.9059L11.83 27.3109C11.658 27.4129 11.437 27.3519 11.339 27.1789L8.08901 21.5549C5.18801 23.8509 3.36001 27.3049 3.36001 30.9999H2.64001C2.64001 25.4149 6.57101 20.3529 12.11 18.6349C9.86601 17.2819 8.46001 14.8389 8.46001 12.1799C8.46001 11.1169 8.67601 10.0939 9.10301 9.13594L5.36001 6.97394V14.9999H4.64001V6.34994C4.64001 6.34594 4.64001 6.34194 4.64001 6.33694C4.64501 6.20394 4.72301 6.08394 4.84301 6.02594L15.843 0.675941C15.942 0.626941 16.059 0.626941 16.157 0.675941L27.157 6.02594C27.277 6.08394 27.355 6.20394 27.359 6.33694C27.364 6.46994 27.295 6.59494 27.179 6.66094L22.896 9.13594C23.323 10.0939 23.54 11.1159 23.54 12.1799C23.54 14.8369 22.137 17.2799 19.897 18.6349C25.433 20.3529 29.36 25.4159 29.36 30.9999ZM8.66801 21.1209L11.781 26.5089L15.82 24.1789C15.931 24.1149 16.068 24.1149 16.179 24.1789L20.217 26.5089L23.332 21.1189C22.007 20.1839 20.487 19.4829 18.836 19.0909C18.686 19.0549 18.575 18.9279 18.561 18.7739C18.546 18.6209 18.631 18.4749 18.773 18.4119C21.231 17.3149 22.819 14.8699 22.819 12.1809C22.819 11.1889 22.612 10.2379 22.203 9.34894C20.875 9.34494 13.827 9.34694 9.79601 9.34994C9.38701 10.2389 9.17901 11.1889 9.17901 12.1799C9.17901 14.8699 10.771 17.3159 13.235 18.4109C13.376 18.4729 13.462 18.6199 13.447 18.7729C13.433 18.9269 13.322 19.0539 13.172 19.0899C11.518 19.4829 9.99601 20.1859 8.66801 21.1209ZM15.883 8.62794C19.695 8.62794 21.341 8.63394 22.069 8.65494V7.26094L21.798 7.10894C20.418 6.32994 18.701 5.35994 16.03 5.35994C13.319 5.35994 11.565 6.34494 10.155 7.13594L9.93001 7.26094V8.62994C12.346 8.62894 14.302 8.62794 15.883 8.62794ZM16.03 4.63994C18.89 4.63994 20.699 5.66094 22.153 6.48194L22.604 6.73394C22.719 6.79694 22.791 6.91794 22.791 7.04894V8.36594L26.234 6.37694L16 1.39994L5.76701 6.37694L9.21001 8.36694V7.04994C9.21001 6.91894 9.28101 6.79794 9.39701 6.73494L9.80301 6.50794C11.285 5.67594 13.13 4.63994 16.03 4.63994Z"
        fill="#161616"
      />
    </svg>
  );
  const health = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <rect width="32" height="32" />
      <path
        d="M16.002 31.359C14.977 31.359 14.143 30.525 14.143 29.5C14.143 28.598 14.789 27.843 15.643 27.675V25.346C13.404 25.163 11.64 23.284 11.64 21V18.927C9.62701 20.327 8.36001 22.635 8.36001 25.192V31H7.64001V25.191C7.64001 21.619 9.89901 18.49 13.231 17.307C11.901 16.401 11.079 14.885 11.079 13.243C11.079 11.228 12.296 9.493 14.034 8.733C14.144 8.354 14.2 7.96 14.2 7.561C14.2 6.083 13.409 4.709 12.157 3.956C11.79 4.782 10.961 5.359 10 5.359C9.03901 5.359 8.21001 4.782 7.84301 3.957C6.59001 4.709 5.80001 6.083 5.80001 7.561C5.80001 9.217 6.78001 10.723 8.29601 11.397C8.43701 11.46 8.52202 11.606 8.50802 11.76C8.49402 11.913 8.38301 12.041 8.23301 12.076C4.77501 12.895 2.36001 15.951 2.36001 19.508V26H1.64001V19.509C1.64001 15.912 3.89701 12.783 7.22601 11.622C5.90001 10.715 5.08001 9.201 5.08001 7.561C5.08001 5.76 6.08101 4.092 7.65201 3.236C7.64401 3.158 7.64001 3.08 7.64001 3C7.64001 1.698 8.69901 0.639999 10 0.639999C11.301 0.639999 12.36 1.698 12.36 3C12.36 3.08 12.356 3.159 12.348 3.236C13.919 4.092 14.92 5.761 14.92 7.561C14.92 7.865 14.893 8.166 14.837 8.462C15.582 8.28 16.416 8.28 17.161 8.462C17.106 8.166 17.078 7.865 17.078 7.561C17.078 6.235 17.608 4.978 18.546 4.056L17.744 3.254C17.636 3.145 17.607 2.979 17.677 2.84C17.721 2.75 18.801 0.639999 21.999 0.639999C25.197 0.639999 26.277 2.75 26.321 2.84C26.389 2.979 26.362 3.145 26.254 3.254L25.452 4.056C26.39 4.978 26.92 6.236 26.92 7.561C26.92 9.201 26.1 10.715 24.774 11.622C28.103 12.784 30.36 15.913 30.36 19.509V26H29.64V19.509C29.64 15.952 27.226 12.896 23.768 12.077C23.618 12.041 23.507 11.914 23.493 11.761C23.478 11.607 23.564 11.461 23.705 11.398C25.222 10.723 26.201 9.217 26.201 7.562C26.201 6.429 25.747 5.354 24.945 4.566L24.256 5.256C24.182 5.331 24.082 5.374 23.976 5.36C23.872 5.353 23.776 5.3 23.713 5.217C23.696 5.196 23.232 4.632 22 4.632C20.791 4.632 20.299 5.203 20.279 5.227C20.214 5.305 20.118 5.353 20.017 5.357C19.896 5.362 19.815 5.325 19.745 5.253L19.056 4.564C18.254 5.352 17.8 6.427 17.8 7.561C17.8 7.959 17.856 8.353 17.966 8.733C19.703 9.493 20.921 11.229 20.921 13.243C20.921 14.883 20.101 16.397 18.775 17.304C22.103 18.466 24.361 21.595 24.361 25.192V31H23.64V25.191C23.64 22.614 22.373 20.3 20.361 18.91V21C20.361 23.282 18.598 25.16 16.362 25.345V27.675C17.216 27.843 17.862 28.598 17.862 29.5C17.861 30.525 17.027 31.359 16.002 31.359ZM16.002 28.36C15.374 28.36 14.862 28.871 14.862 29.5C14.862 30.128 15.373 30.639 16.002 30.639C16.63 30.639 17.141 30.128 17.141 29.5C17.141 28.871 16.63 28.36 16.002 28.36ZM12.359 18.482V21C12.359 23.007 13.992 24.64 15.999 24.64C18.006 24.64 19.639 23.007 19.639 21V18.47C19.061 18.158 18.433 17.917 17.767 17.76C17.617 17.724 17.506 17.597 17.492 17.443C17.477 17.29 17.563 17.144 17.704 17.081C19.221 16.406 20.2 14.9 20.2 13.244C20.2 10.928 18.316 9.044 16 9.044C13.684 9.044 11.799 10.928 11.799 13.244C11.799 14.9 12.779 16.406 14.295 17.081C14.436 17.143 14.521 17.289 14.507 17.442C14.493 17.595 14.383 17.723 14.234 17.759C13.567 17.922 12.939 18.168 12.359 18.482ZM10 1.36C9.09601 1.36 8.36001 2.096 8.36001 3C8.36001 3.904 9.09601 4.64 10 4.64C10.904 4.64 11.64 3.904 11.64 3C11.64 2.096 10.904 1.36 10 1.36ZM18.456 2.946L20.014 4.504C20.352 4.25 20.992 3.912 22 3.912C23.021 3.912 23.655 4.246 23.99 4.501L25.545 2.946C25.207 2.468 24.189 1.36 22 1.36C19.812 1.36 18.794 2.467 18.456 2.946Z"
        fill="#161616"
      />
    </svg>
  );
  const fairness = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <rect width="32" height="32" />
      <path
        d="M26 29.3599H6.00001V28.6399H12.659C12.826 27.0749 14.074 25.8269 15.64 25.6599V11.3329C14.509 11.1589 13.64 10.1789 13.64 8.99989C13.64 7.82089 14.509 6.84089 15.64 6.66689V3.35989H6.13601L10.309 10.3149C10.343 10.3709 10.36 10.4349 10.36 10.4999C10.36 13.1799 8.18001 15.3599 5.50001 15.3599C2.82001 15.3599 0.640015 13.1799 0.640015 10.4999C0.640015 10.4349 0.658015 10.3709 0.691015 10.3149L5.19101 2.81489C5.25601 2.70689 5.37401 2.63989 5.50001 2.63989H26.5C26.626 2.63989 26.743 2.70589 26.809 2.81489L31.309 10.3149C31.342 10.3709 31.361 10.4349 31.361 10.4999C31.361 13.1799 29.18 15.3599 26.501 15.3599C23.822 15.3599 21.641 13.1799 21.641 10.4999C21.641 10.4349 21.66 10.3709 21.693 10.3149L25.866 3.35989H16.36V6.66789C17.491 6.84189 18.36 7.82189 18.36 9.00089C18.36 10.1799 17.491 11.1599 16.36 11.3339V25.6609C17.926 25.8279 19.174 27.0759 19.341 28.6409H26V29.3599ZM13.384 28.6399H18.615C18.439 27.3539 17.334 26.3599 16 26.3599C14.667 26.3599 13.561 27.3539 13.384 28.6399ZM22.376 10.8599C22.559 12.9749 24.339 14.6399 26.5 14.6399C28.661 14.6399 30.441 12.9749 30.624 10.8599H22.376ZM1.37501 10.8599C1.55801 12.9749 3.33801 14.6399 5.50001 14.6399C7.66201 14.6399 9.44101 12.9749 9.62501 10.8599H1.37501ZM16 7.35989C15.096 7.35989 14.36 8.09589 14.36 8.99989C14.36 9.90389 15.096 10.6399 16 10.6399C16.904 10.6399 17.64 9.90389 17.64 8.99989C17.64 8.09589 16.904 7.35989 16 7.35989ZM22.636 10.1399H30.365L26.5 3.69989L22.636 10.1399ZM1.63601 10.1399H9.36501L5.50001 3.69989L1.63601 10.1399Z"
        fill="#161616"
      />
    </svg>
  );

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onPhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onCompanyChange = (event) => {
    setCompany(event.target.value);
  };

  const onRoleChange = (event) => {
    setRole(event.target.value);
  };

  const onCityChange = (event) => {
    setCity(event.target.value);
  };

  const onPhotoChange = (event) => {
    if (event.target.files[0]) {
      if (
        event.target.files[0].type !== "image/jpeg" &&
        event.target.files[0].type !== "image/png"
      ) {
        setErrors({ ...errors, photo: "Only JPG and PNG files are allowed" });
      } else {
        setErrors({ ...errors, photo: null });
        setPhoto(event.target.files[0]);
      }
    }
  };

  const handleIcon = (sector) => {
    setSector(sector);
    setSelected(sector);
  };
  const handleIconName = (sector) => {
    return selected === sector ? "contact-icon-selected" : "contact-icon";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    
    if( typeof id !== 'undefined' && id !== null ) {
      formData.append("id", id);
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("email", email);
      formData.append("company", company);
      formData.append("role", role);
      formData.append("sector", sector);
      formData.append("city", city);

    } else {
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("email", email);
      formData.append("company", company);
      formData.append("role", role);
      formData.append("sector", sector);
      formData.append("city", city);
    }
    

    if (photo) {
      formData.append("image", photo);
    }

    if(!id) {
        newContact(formData);
    } else {
      edit(formData, id);
    } 
  };

  const newContact = async (formData) => {

    try {
      const response = await Services.add(formData);
      setReloadUsers(true);
      navigate(`/#${name}`);

    } catch (error) {
      console.log(error);
      if (error.response && error.response.data && error.response.data.error ) {
        const errorData = error.response.data.error;

        if( error.response.data.error === 'Contacts validation failed: email: Path `email` is invalid (test@ gmail.com).') { 

          setErrors({
            name: errorData.name || null,
            phone: errorData.phone || null,
            email: 'Enter a valid email address',
          });
          
        } else {

          setErrors({
            name: errorData.name || null,
            phone: errorData.phone || null,
            email: errorData.email || null,
          });
        }
        
        
      } else {
        setErrors({
          exist: error.response.data.exist || null
        });
      }
    }
    return true;
  }

  const edit = async (formData, id) => {
      try {
        const response = await Services.edit(formData, id);
   
        if (response.message === "Contact updated successfully" ) {
         
          setReloadUsers(true);
          navigate(`/detail/${id}`);
        }
      } catch (error) {
        const errorData = error.response.data.error;
      }
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-field">
        <label className="form-label" htmlFor="name">
          Name:
        </label>
        {errors.name ? (
          <div className="error-message">
            <p>{errors.name}</p>
          </div>
        ) : (
          ""
        )}
        <input
          onChange={onNameChange}
          className="form-input"
          type="text"
          id="name"
          name="name"
          value={name}
          placeholder="Name Lastname"
        />
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="phone">
          Phone:
        </label>
        {errors.phone ? (
          <div className="error-message">
            <p>{errors.phone}</p>
          </div>
        ) : (
          ""
        )}
        <input
          onChange={onPhoneChange}
          className="form-input"
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          placeholder="Phone"
        />
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="email">
          Email:
        </label>
        {errors.email ? (
          <div className="error-message">
            <p>{errors.email}</p>
          </div>
        ) : (
          ""
        )}
        <input
          onChange={onEmailChange}
          className="form-input"
          type="text"
          id="email"
          name="email"
          value={email}
          placeholder="Email"
        />
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="company">
          Company:
        </label>
        <input
          onChange={onCompanyChange}
          className="form-input"
          type="text"
          id="company"
          name="company"
          value={company}
          placeholder="Company"
        />
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="role">
          Role:
        </label>
        <input
          onChange={onRoleChange}
          className="form-input"
          type="text"
          id="role"
          name="role"
          value={role}
          placeholder="Role"
        />
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="city">
          City:
        </label>
        <input
          onChange={onCityChange}
          className="form-input"
          type="text"
          id="city"
          name="city"
          value={city}
          placeholder="City"
        />
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="file-input">
          Upload a photo:
        </label>
        <input
          onChange={onPhotoChange}
          className="form-input"
          type="file"
          id="image"
          name="image"
          lang="en"
        />
        {errors.photo ? (
          <div className="error-message">
            <p>{errors.photo}</p>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="sector">
          Sector:
        </label>
        <div className="form-icons">
          <figure
            onClick={() => handleIcon("services")}
            className={handleIconName("services")}
          >
            {services}
          </figure>
          <figure
            onClick={() => handleIcon("education")}
            className={handleIconName("education")}
          >
            {education}
          </figure>
          <figure
            onClick={() => handleIcon("health")}
            className={handleIconName("health")}
          >
            {health}
          </figure>
          <figure
            onClick={() => handleIcon("fairness")}
            className={handleIconName("fairness")}
          >
            {fairness}
          </figure>
        </div>
      </div>
      {errors.exist ? (
        <div className="error-message">
          <p>{errors.exist}</p>
        </div>
      ) : (
        ""
      )}
      <div className="form-submit">
        <button className="submit-button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Add;
