import React from 'react';
import './Contact.css';
import msg from '../../assets/msg-icon.png';
import mail from '../../assets/mail-icon.png';
import phone from '../../assets/phone-icon.png';
import location from '../../assets/location-icon.png';
import white from '../../assets/white-arrow.png';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us message<img src={msg} alt='mail' /></h3>
        <p>Feel free to reach out through the contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service.</p>
        <ul>
          <li><img src={mail} alt='' />contact@educat.in</li>
          <li><img src={phone} alt='' />+91 76543 21980</li>
          <li><img src={location} alt='' />77 Massachusetts, Madhapur, Hitech City <br />Hyderabad.</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <div className="name">
            <input type="text" placeholder="Enter your name" id="username" required />
          </div>

          <div className="email">
            <input type="email" placeholder="Enter your email" id="email" required />
          </div>

          <div className="number">
            <input type="tel" placeholder="Enter your phone number" id="phone" required />
          </div>

          <div className="text">
            <textarea rows="7" cols="60" placeholder="Enter your message here..." id="message" required />
          </div>

          <button type="submit" className='btn dark-btn'>submit<img src={white} alt='arrow' /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact;
