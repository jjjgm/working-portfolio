import React, { useState } from 'react';
import './styles/Form.css';


function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailError, setEmailError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all required fields.');
        } else if (emailError) {
            alert('Please enter a valid email address.');
        } else {
            // NEEDS SERVER SIDE TO SEND FORM TO AN EMAIL OR STORE IN DB
            alert(`Thank you for reaching out ${name}. You will now be redirected`);
            window.location.href = `mailto:businessjgm@icloud.com?subject=${'contact from ' + name}&body=${message}`
            setName('');
            setEmail('');
            setMessage('');
            setEmailError(false);

            console.log('Form submitted');
        };
    }

    return (
        <div className="form-row">
            <h2>LET'S GET IN CONTACT</h2>
            <div className="contact-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-row">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-row">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>

                    <div className="form-row">
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>
        </div>


    )
}

export default Form;