import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
       <section className="py-5 contact py-70">
           <div className="container">
               <div className=" text-center text-white mb-5">
                    <h5 style={{color:'#f9004d'}}>Contact</h5>
                    <h1>Always  connect with us</h1>
               </div>
               <div className="col-md-9 mx-auto">
                   <form action="https://formspree.io/f/myylebpo" method="POST">
                       <div className="form-group">
                           <input type="text"  name="Email" className="form-control" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group">
                           <input  name="Name" type="text" className="form-control" placeholder="Subject *"/>
                       </div>
                       <div className="form-group">
                           <textarea name="message" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group text-center">
                           <button type="submit" className="btn btn-brand"> Submit </button>
                       </div>
                   </form>
               </div>
           </div>
       </section>
    );
};

export default Contact;
