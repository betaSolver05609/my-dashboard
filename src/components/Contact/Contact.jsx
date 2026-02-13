import React from 'react';
const Contact=()=> {
    const [emailSendingDone, setEmailSendingDone] = React.useState(false);
    const [isSending, setIsSending] = React.useState(false);
    const [error, setError] = React.useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);
        setError("");

        const formData = new FormData(e.target);
        formData.append("_subject", "New portfolio contact request");
        formData.append("_template", "table");
        formData.append("_captcha", "false");

        fetch("https://formsubmit.co/ajax/someindras@gmail.com", {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success === "true" || data.success === true) {
                    setEmailSendingDone(true);
                    e.target.reset();
                    return;
                }
                setError("Unable to send your message right now. Please try again.");
            })
            .catch(() => {
                setError("Unable to send your message right now. Please try again.");
            })
            .finally(() => setIsSending(false));
    };

    return (
        <div className="contact-form" id='connect'>
            <div className="w-left">
                <div className="awesome">
                    <span>Get in Touch</span>
                    <span>Contact me</span>
                    <div className="blur s-blur1" style={{background: '#ABF1FF94'}}></div>
                </div>
            </div>

            <div className="c-right">
                <form onSubmit={sendEmail}>
                    <input type="text" name="from_name" className="user" placeholder="Name"/>
                    <input type="email" name="user_email" className="user" placeholder="E-Mail"/>
                    <textarea name="message" className="user" placeholder="message"/>
                    <input type="submit" value={isSending ? "Sending..." : "Send"} className="button" disabled={isSending}/>
                    <span>{emailSendingDone && "Thanks for Connecting. I will reply to you as soon as possible.!"}</span>
                    <span>{error}</span>
                    <div className="blur c-blur1" style={{background: 'var(--purple)'}}></div> 
                </form>
            </div>
        </div>

    )
}

export default Contact;
