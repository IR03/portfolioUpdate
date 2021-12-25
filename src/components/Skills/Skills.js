import React from "react";
// import { Container } from "react-bootstrap";
import html from "../../Assets/icons/html.png";
import css from "../../Assets/icons/css.png";
import sass from "../../Assets/icons/sass.png";
import js from "../../Assets/icons/js.png";
import react from "../../Assets/icons/react.png";
import bootstrap from "../../Assets/icons/bootstrap.png";
// import wp from "../../Assets/icons/wp.png";
import redux from "../../Assets/icons/redux.png";
import node from "../../Assets/icons/nodejs.png";
import express from "../../Assets/icons/expressjs.png";
import mongo from "../../Assets/icons/mongodb.png";
import material from "../../Assets/icons/meta-ui.png";
import heroku from "../../Assets/icons/heroku.png";
import netlify from "../../Assets/icons/netlify.png";
import firebase from "../../Assets/icons/firebase.png";
import git from "../../Assets/icons/git.png";
import github from "../../Assets/icons/github.png";
import vs from "../../Assets/icons/vs-code.png";
import npm from "../../Assets/icons/npm.png";
// import cdt from "../../Assets/icons/cdt.png";
// import cPanel from "../../Assets/icons/cp.png";
// import xd from "../../Assets/icons/xd.png";
import figma from "../../Assets/icons/figma.png";
import './Skills.css'

const Skills = () => {
	return (
		<>
			<div className="row">
				<div className="col-12">
					<section>
						<div class="container py-5 ">
							<div class="skills text-dark">
								<div class="row">
									<div class="col-md-4 single-skill">
										<h5 class="text-white border-bottom border-white d-inline pb-1">Comfortable:</h5>
										<ul class="list-inline pt-2">
											<li class="list-inline-item p-1 m-1 rounded ">React.js</li>
											<li class="list-inline-item p-1 m-1 rounded ">React Bootstrap
											</li>
											<li class="list-inline-item p-1 m-1 rounded ">React Router</li>
											<li class="list-inline-item p-1 m-1 rounded ">JavaScript</li>
											<li class="list-inline-item p-1 m-1 rounded ">REST API</li>
											<li class="list-inline-item p-1 m-1 rounded ">SASS</li>
											<li class="list-inline-item p-1 m-1 rounded ">Bootstrap</li>
											<li class="list-inline-item p-1 m-1 rounded ">CSS</li>
											<li class="list-inline-item p-1 m-1 rounded ">HTML</li>
										</ul>
									</div>
									<div class="col-md-4 single-skill">
										<h5 class="text-white border-bottom border-white d-inline pb-1">Familiar:</h5>
										<ul class="list-inline pt-2">
											<li class="list-inline-item p-1 m-1 rounded ">Node.js</li>
											<li class="list-inline-item p-1 m-1 rounded ">Express.js</li>
											<li class="list-inline-item p-1 m-1 rounded ">MongoDB</li>
											<li class="list-inline-item p-1 m-1 rounded ">Material UI</li>
											<li class="list-inline-item p-1 m-1 rounded ">C/C++</li>
										</ul>
									</div>
									<div class="col-md-4 single-skill">
										<h5 class="text-white border-bottom border-white d-inline pb-1">Tools:</h5>
										<ul class="list-inline pt-2">
											<li class="list-inline-item p-1 m-1 rounded ">VS Code</li>
											<li class="list-inline-item p-1 m-1 rounded ">Heroku</li>
											<li class="list-inline-item p-1 m-1 rounded ">Firebase</li>
											<li class="list-inline-item p-1 m-1 rounded ">Netlify</li>
											<li class="list-inline-item p-1 m-1 rounded ">Git</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<h4 className="mt-5 mb-3 text-center  font-weight-bold">Front End languages</h4>
					<div className="row d-flex justify-content-center align-items-center text-white">
						<div className="text-center">
							<img
								className="mx-4 my-3"
								style={{ width: "40px" }}
								src={react}
								alt=""
							/>
							<figcaption>React</figcaption>
						</div>
						{/* <div className="text-center">
							<img
								className="mx-4 my-3"
								style={{ width: "40px" }}
								src={redux}
								alt=""
							/>
							<figcaption>Redux</figcaption>
						</div> */}
						<div className="text-center">
							<img
								className="mx-4 my-3"
								style={{ width: "35px", paddingTop: "8px" }}
								src={js}
								alt=""
							/>
							<figcaption>JavaScript</figcaption>
						</div>
						<div className="text-center">
							<img
								className="mx-4 my-3"
								style={{ width: "57px" }}
								src={bootstrap}
								alt=""
							/>
							<figcaption>Bootstrap</figcaption>
						</div>
						<div className="text-center">
							<img
								className="mx-4 my-3"
								style={{ width: "40px", paddingTop: "15px" }}
								src={material}
								alt=""
							/>
							<figcaption>Material-UI</figcaption>
						</div>
						<div className="text-center">
							<img
								className="mx-4 my-3"
								style={{ width: "45px", paddingTop: "10px" }}
								src={sass}
								alt=""
							/>
							<figcaption>Sass</figcaption>
						</div>
						<div className="text-center">
							<img
								className="mx-4 my-3"
								style={{ width: "33px" }}
								src={firebase}
								alt=""
							/>
							<figcaption>Firebase</figcaption>
						</div>
						<div className="text-center">
							<img
								className="mx-4 my-3"
								style={{ width: "40px" }}
								src={html}
								alt=""
							/>
							<figcaption>HTML</figcaption>
						</div>
						<div className="text-center">
							<img
								className="mx-4 my-3"
								style={{ width: "36px" }}
								src={css}
								alt=""
							/>
							<figcaption>CSS</figcaption>
						</div>
					</div>

					<h4 className="mt-5 mb-3 text-center  font-weight-bold">Back End languages</h4>
					<div className="row d-flex justify-content-center align-items-center text-white">
						<div className="text-center">
							<img
								className="mx-4 my-3"
								style={{ width: "36px" }}
								src={node}
								alt=""
							/>
							<figcaption>Node.js</figcaption>
						</div>
						<div className="text-center">
							<img
								className="mx-4 my-3"
								style={{ width: "40px" }}
								src={express}
								alt=""
							/>
							<figcaption>Express.js</figcaption>
						</div>
						<div className="text-center">
							<img
								className="mx-4 my-3"
								style={{ width: "45px" }}
								src={mongo}
								alt=""
							/>
							<figcaption>MongoDB</figcaption>
						</div>

						<div className="text-center">
							<img
								className="mx-4 my-3"
								style={{ width: "40px" }}
								src={heroku}
								alt=""
							/>
							<figcaption>Heroku</figcaption>
						</div>
					</div>

					<h4 className="mt-5 mb-3 text-center  font-weight-bold">Tools</h4>
					<div className="row d-flex justify-content-center align-items-center text-white">
						<div className="text-center">
							<img
								className="mx-4 my-3"
								style={{ width: "40px" }}
								src={vs}
								alt=""
							/>
							<figcaption>Visual Studio Code</figcaption>
						</div>
						<div className="text-center">
							<img
								className="mx-4 my-3"
								style={{ width: "43px" }}
								src={git}
								alt=""
							/>
							<figcaption>Git</figcaption>
						</div>
						<div className="text-center">
							<img
								className="mx-4 my-3"
								style={{ width: "40px" }}
								src={github}
								alt=""
							/>
							<figcaption>GitHub</figcaption>
						</div>
						<div className="text-center">
							<img
								className="mx-4 my-3"
								style={{ width: "38px" }}
								src={netlify}
								alt=""
							/>
							<figcaption>Netlify</figcaption>
						</div>
						<div className="text-center">
							<img
								className="mx-4 my-3"
								style={{ width: "75px", paddingTop: "10px" }}
								src={npm}
								alt=""
							/>
							<figcaption>npm</figcaption>
						</div>
						<div className="text-center">
							<img
								className="mx-4 my-3"
								style={{ width: "25px", paddingTop: "0px" }}
								src={figma}
								alt=""
							/>
							<figcaption>Figma</figcaption>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Skills;
