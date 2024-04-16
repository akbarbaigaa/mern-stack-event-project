import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/api/v1/message/send", {
      name,
      email,
      subject,
      message
  },
      {
       withCredentials: true, headers:{"Content-Type":"application/json"}
     } 
    ).then(res => {
      toast.success(res.data.message);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    })
      .catch((error) => {
        toast.error(error.response.data.message);
        console.log(error);
    })
  }

  return (
    <>
      <div className="contact container">
        <div className="banner">
          <div className="item">
            <h4>Address</h4>
            <p>Any where, Any City, 1234</p>
          </div>
          <div className="item">
            <h4>Call Us</h4>
            <p>Call Us: +19-924-312-3420</p>
          </div>
          <div className="item">
            <h4>Mail Us</h4>
            <p>baig.true@gmail.com</p>
          </div>
        </div>
        <div className="banner">
          <div className="item">
            <iframe
              style={{
                width: '100%',
                height: '400px',
                frameborder: '0',
                scrolling: 'no',
                marginheight: '0',
                marginwidth: '0',
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Mysore%20570019+(Web%20Development%20)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps tracker sport</a>
            </iframe>
          </div>
          <div className="item">
            <form onSubmit={handleSendMessage}>
              <h2>CONTACT</h2>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                rows={10}
                type="text"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type='submit'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
