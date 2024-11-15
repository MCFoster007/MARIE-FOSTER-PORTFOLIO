import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please Fill the Form!');
      return;
    }

   
    console.log('Form submitted:', formData);

   
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <form onSubmit={handleSubmit} id="form">
        <fieldset>
          <legend>Fill out:</legend>
          <label>
            Name:
            <input
              type="text"
              name="name"
              size="30"
              maxLength="100"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              size="30"
              maxLength="100"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </fieldset>
        <fieldset>
          <p>
            <label htmlFor="message">Message:</label>
            <br />
            <textarea
              rows="4"
              cols="40"
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <br />
            <input type="submit" value="Submit Information" />
          </p>
        </fieldset>
      </form>
    </div>
  );
}
