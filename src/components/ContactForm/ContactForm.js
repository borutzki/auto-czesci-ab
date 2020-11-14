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
        <label htmlFor="name">Imię i nazwisko:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        ></input>
        <label htmlFor="email">E-Mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        ></input>
        <label htmlFor="phone">Numer telefonu:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        ></input>
        <label htmlFor="message">Wiadomość:</label>
        <textarea
          type="text"
          id="message"
          name="message"
          style={{ height: "6rem" }}
          value={formData.message}
          onChange={handleChange}
        ></textarea>
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
