import Button from "@/components/Button";
import Input from "@/components/Input";
import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("")

  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true)
    sendMail();
  }

  const sendMail = async() => {
    const data = {
      name: name,
      email: email,
      message: message
    }
    await axios.post(`https://softcdevserver.cyclic.app/contact/create`, data).then((res) => {
      setResponse(res.data.message)
      setName("")
      setEmail("")
      setMessage("")
      setLoading(false)
    }).catch((err) => {
      setLoading(false)
      setResponse(err.message)
    })
  }

  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="contact-title">What&apos;s Next?</h2>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-text">
        Looking for a developer? Feel free to contact me.
      </p>
      <div className="contact-cta">
        {/* <Button link="mailto:rajeev.ramachandran1511@gmail.com" text="Say Hello" /> */}
        {response.length > 0 && <div className="response">{response}</div>}
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <input type="text" onChange={(e) => setName(e.target.value)} maxLength={20} placeholder="Name" className={`input`} required/>
          <input type="email" onChange={(e) => setEmail(e.target.value)} maxLength={50} placeholder="Your Email" className={`input`} required/>
          <textarea placeholder="Say Hello" onChange={(e) => setMessage(e.target.value)} className="input" required/>
          <button className="second-btn" type="submit">
            {loading? <><i className="fa fa-circle-o-notch fa-spin"></i> Sending</> : "Send"}
          </button>
        </form>
        
      </div>
    </motion.div>
  );
}

export default Contact;
