import React from 'react';
import './AboutMe.css'

const AboutMe = () => {
	return (
		<section id="about-area" class="py-70 fix">
						<div class="container">
								<div class="row">
										<div class="col-lg-12 ">
											<div class="about-headline">
												<h3>FEW WORDS ABOUT MARUF</h3>
											</div>
										</div>
								</div>
								<div class="row">
										<div class="col-lg-8 pb-5 pb-lg-0 wow animate__animated animate__fadeInLeft animate__fast animate__delay-1s ">
												<div class="about-information">
														<h3>A Piece Of Information...</h3>
														<p class="lead">I'm a Full Stack Web Developer mainly & I have good experience on Graphics Design too. I'm currently performing as a Public Figure & Motivational Speaker on My Youtube Channel. I have been working as a Web Developer over the last 7 years. I used to work on Freelancer.com & Now I'm in a partnership business with some of my clients. On the other side. I was the Chife Operating Officer of an Affiliate Network called CPAWORKER.COM</p>
														<p class="lead">Moreover I used to work with different companies as a Customer Support manager, I handled inbound calls daily. Recently I am trying to work for the young generation as an Entrepreneur</p>
														<div class="cv-button-area d-flex">
																<div class="resume mr-2">
																	<a href="#" class="btn">Download Resume</a>
																</div>
																<div class="hire-me">
																	<a href="#" class="btn">Hire Me</a>
																</div>
														</div>
												</div>
										</div>
										<div class="d-none d-lg-block col-10 col-md-6 offset-md-3 col-lg-4  offset-lg-0 pt-5 pt-lg-0 wow animate__animated animate__fadeInRight animate__fast animate__delay-1s ">
														<div class="card bg-primary primary-change card-reg-form text-center">
																	<div class="card-body p-4">
																			<h3 class="text-light">Sign Up Today</h3>
																			<p class="text-light">Please fill out this form register</p>
																			<form>
																					<div class="form-group ">
																							<input class="form-control form-control-lg form-maintain" type="text" name="username" placeholder="Username" />
																					</div>
																					<div class="form-group ">
																							<input class="form-control form-control-lg form-maintain" type="text" name="email" placeholder="Email" />
																					</div>
																					<div class="form-group">
																							<input class="form-control form-control-lg form-maintain" type="text" name="pass1" placeholder="Password" />
																					</div>
																					<div class="form-group ">
																							<input class="form-control form-control-lg form-maintain" type="text" name="pass2" placeholder="Conirm Passwrod" />
																					</div>
																					<input type="submit" value="Submit" class="btn btn-outline-danger btn-submit btn-block" />

																			</form>
																	</div>
															</div>
										</div>
								</div>
						</div>
				</section>
	);
};

export default AboutMe;
