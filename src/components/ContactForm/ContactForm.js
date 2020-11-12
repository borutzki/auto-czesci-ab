import React, { useState } from "react";
import "./contactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [messages, setMessages] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      const newMessage = { ...formData, id: new Date().getTime().toString() };
      setMessages([...messages, newMessage]);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Imię i nazwisko:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          E-Mail:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Numer telefonu:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Wiadomość:
          <input
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></input>
        </label>
        <button>Wyślij</button>
      </form>
      <section>
        <h2>Wiadomości:</h2>
        {messages.map((item, index) => {
          const { id, name, email, phone, message } = item;
          return (
            <div key={id} className="testDiv">
              <h4>Imię: {name}</h4>
              <h4>Email: {email}</h4>
              <h4>Telefon: {phone}</h4>
              <h4>Wiadomość: {message}</h4>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default ContactForm;
