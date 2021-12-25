import React from 'react';
import './Services.css';
import '../../../node_modules/animate.css';

const Services = () => {
	return (
		<section id="services-area" className="py-70" style={{ background: '#101010' }}>
			<div className="container">
				<div className="row pb-5 ">
					<div className="container">
						<div className="work-top">
							<div className=" text-center text-white mb-5">
								<h5 style={{ color: '#f9004d', letterSpacing: '2px', fontWeight: 'bold' }}>Services</h5>
								<h1>Some of My Services</h1>
							</div>
						</div>
					</div>
				</div>
				<div className="row text-center pt-5 pb-0 pb-lg-5 mb-35">

					<div className="col-12  col-md-4  mt-5 mt-md-0 pt-4 pt-md-0 ">
						<div className="icon-wrapper wow animate__animated animate__fadeInLeft animate__fast animate__delay-1s">
							<div className="laptop-icon">
								<i className="fas fa-laptop"></i>
							</div>
							<h3 className="title text-white mt-4">FRONT END WEB APP</h3>
							<p className="lead">I can make a Fully responsive front end and static website with react. </p>
							<span className="number">1</span>
						</div>
					</div>
					<div className="col-12  col-md-4  mt-5 mt-md-0 pt-4 pt-md-0">
						<div className="icon-wrapper wow animate__animated animate__fadeInUp animate__fast animate__delay-1s">
							<div className="laptop-icon">
								<i className="fas fa-search"></i>
							</div>
							<h3 className="title text-white mt-4">E-COMMERCE WEB APP</h3>
							<p className="lead">I do build an e-commerce web app with React, MongoDB and Stripe Payment Gateway.</p>
							<span className="number">2</span>
						</div>
					</div>
					<div className="col-12  col-md-4  mt-5 mt-md-0 pt-4 pt-md-0">
						<div className="icon-wrapper wow animate__animated animate__fadeInRight animate__fast animate__delay-1s ">
							<div className="laptop-icon">
								<i className="fas fa-exchange-alt"></i>
							</div>
							<h3 className="title text-white  mt-4">WEB DEVELOPMENT</h3>
							<p className="lead">Clean and fresh issue free code to make your website dynamic perfectly.</p>
							<span className="number">3</span>
						</div>
					</div>

				</div>
				<div className="row text-center pt-0 pt-md-3 pt-lg-5  ">

					<div className="col-12  col-md-4  mt-5 mt-md-0 pt-4 pt-md-0">
						<div className="icon-wrapper wow animate__animated animate__fadeInLeft animate__fast animate__delay-1s ">
							<div className="laptop-icon">
								<i className="fas fa-edit"></i>
							</div>
							<h3 className="title text-white mt-4">RESPONSIVE DESIGN</h3>
							<p className="lead">Responsive Design which will be working almost all browsers and screens, Mobile, TaB, PC etc</p>
							<span className="number">4</span>
						</div>
					</div>
					<div className="col-12  col-md-4  mt-5 mt-md-0 pt-4 pt-md-0">
						<div className="icon-wrapper wow animate__animated animate__fadeInDown animate__fast animate__delay-1s">
							<div className="laptop-icon">
								<i className="fas fa-window-restore"></i>
							</div>
							<h3 className="title text-white mt-4">FULL STACK WEB APP</h3>
							<p className="lead">Using MERN Stack I usually make Full Stack Web Application and For Authentication Firebase.</p>
							<span className="number">5</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
