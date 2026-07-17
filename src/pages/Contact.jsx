
import React ,{useState} from 'react'
const Contact = () => {
  const[formData ,setFormData] =useState({
    name:"",
    email:"",
    phone:"",
    message:"",
  });

  const[errors,setErrors] =useState({});
  const [success ,setSuccess] =useState ("");
  const handleChange =(e) => {
    setFormData({
      ...formData,[e.target.name]: e.target.value
    });
  };

  const handleSubmit =(e) =>{
    e.preventDefault();
    let newErrors ={};
    if(!formData.name.trim()){
      newErrors.name ="Name is required";
    }
    if(!formData.email.trim()){
      newErrors.email="Email is required";
    } else if(!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
   if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    setErrors(newErrors);
     if(Object.keys(newErrors).length ===0){
      setSuccess('Message sent successfully!');
      setFormData({
        name:"",
        email:"",
        phone:"",
        message:"",
      });
     } else{
      setSuccess("");
     }
     };
  return (
    <div className='container py-5'>

      <div className='text-center mb-5'>
     <h1 className='display-4 fw-bold'>
      Contact Us
     </h1>
      <p className="text-muted fs-5">
         We'd love to hear from you. Feel free to reach out!
      </p>
     </div>

     <div className='row g-5'>
      <div className="col-lg-5">
        <div className="card contact-card border-0 shadow rounded-4 p-4">

            <h3 className="fw-bold mb-4">Get In Touch</h3>
      <div className='mb-4'>
          <h5>📍 Address</h5>
              <p className="text-muted mb-0">
                Ranikhet, Uttarakhand, India
              </p>
      </div>
       <div className="mb-4">
              <h5>📞 Phone</h5>
              <p className="text-muted mb-0">
                +91 98765 43210
              </p>
       </div>
        <div className="mb-4">
              <h5>📧 Email</h5>
              <p className="text-muted mb-0">
                support@novacart.com
              </p>
            </div>

         <div>
              <h5>🕒 Working Hours</h5>
              <p className="text-muted mb-0">
                Monday - Saturday
                <br />
                9:00 AM - 7:00 PM
              </p>
         </div>
      </div>

      </div>
       <div className="col-lg-7">

          <div className="card border-0 shadow rounded-4 p-4">

            <h3 className="fw-bold mb-4">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your full name"
                />
                {errors.name && (
                   <small className="text-danger">{errors.name}</small>
                  )}
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <small className="text-danger">{errors.email}</small>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter Phone No."
                />
                {errors.phone &&(
                  <small className='text-danger'>{errors.phone}</small>
                )}
              </div>

              <div className="mb-4">
                <label className="form-label">
                  Message
                </label>
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Write your message..."
                ></textarea>
                {errors.message &&(
                  <small className='text-danger'>{errors.message}</small>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg w-100 rounded-pill"
              >
                Send Message
              </button>
              {success &&(
                <p className='text-success text-center mt-3'>
                  {success}
                </p>
              )}
            </form>
    </div>
    </div>
    </div>
    </div>
    
  )
}

export default Contact