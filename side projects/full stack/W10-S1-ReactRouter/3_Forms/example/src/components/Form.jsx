import React, { useState } from 'react';
import './Form.css';
import { useEffect } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [otherValue,setOtherValue] = useState('none');

  useEffect(() => {
    if(otherValue=="other")
    {
      //show other box
    }
  }, [otherValue]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const onDDChange = (e) => {
    const { value } = e.target;
    setOtherValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted:\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
  };

  return (
    <div className="form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <select name="form-dropdown" id="form-dropdown" onChange={onDDChange}>
          <option value="facebook">Facebook</option>
          <option value="instagram">Instagram</option>
          <option value="other">Other</option>
        </select>
        <div className='dropdown-other'>
          <div className="form-group">
            <label>
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default Form;
