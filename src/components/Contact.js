import { useState, React } from 'react';
import './styles/Contact.css';

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailError, setEmailError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || message === '') {
            alert('Please fill in required fields.');
        } else if (emailError) {
            alert('Please enter a valid email address.');
        } else {
            const confirmation = window.confirm(`${name}, you sure you would like to send this message?`);
    if (confirmation) {
            // NEEDS SERVER SIDE TO SEND FORM TO AN EMAIL OR STORE IN DB
            alert(`Thank you for reaching out ${name}. You will now be redirected.`);
            window.location.href = `mailto:businessjgm@icloud.com?subject=${'contact from ' + name}&body=${message}`
            setName('');
            setEmail('');
            setMessage('');
            setEmailError(false);

            console.log('Form submitted');
        };
    }
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmailError(!emailRegex.test(e.target.value));
    };


    return (

        <div>
            <form action="#" method="post" id="contact_form" onSubmit={handleSubmit}>

                <div className="name">
                    <label htmlFor="name"></label>
                    <input type="text" placeholder="Your Name / Preferred Name" name="name" id="name_input" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>

                <div className="email">
                    <label htmlFor="email"></label>
                    <input type="email" placeholder="Your Email" name="email" id="email_input" value={email} onChange={handleEmailChange} required />
                    {emailError && <p className="error-message">Please enter a valid email address.</p>}
                </div>

                <div className="telephone">
                    <label htmlFor="telephone"></label>
                    <input type="text" placeholder="Your Contact Phone Number" name="telephone" id="telephone_input" />
                </div>


                <div className="message">
                    <label htmlFor="message"></label>
                    <textarea name="message" placeholder="Send Me a Message:" id="message_input" cols="30" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                </div>

                <div className="submit">
                    <input type="submit" value="Submit Message" id="form_button" />
                </div>
            </form>
        </div>
    );
}


export default Contact;