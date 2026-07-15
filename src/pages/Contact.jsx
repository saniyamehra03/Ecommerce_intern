import React from 'react'

const Contact = () => {
  return (
    <div className='container' py-5>

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

            <form>

              <div className="mb-3">
                <label className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter subject"
                />
              </div>

              <div className="mb-4">
                <label className="form-label">
                  Message
                </label>
                <textarea
                  rows="5"
                  className="form-control"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg w-100 rounded-pill"
              >
                Send Message
              </button>

            </form>

      
    </div>
    </div>
    </div>
    </div>
    
  )
}

export default Contact