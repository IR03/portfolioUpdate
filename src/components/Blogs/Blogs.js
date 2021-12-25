import React from 'react';
import './Blog.css'

const Blogs = () => {
	return (
		<section id="blogs" class="blogs-area py-md-5 py-sm-4 py-3">
			<div class="container">
				<div class="section-title green-highlight text-center">
					<h2>Blogs</h2>
				</div>
				<div class="row text-white py-md-5 py-sm-4 py-3">
					<div class="card-deck">
						<div class="col-md-4 col-sm-6 my-3">
							<div class="card blog-card">
								<img class="card-img-top" src="images/blogs/blog-1.png" alt="blog" />
								<div class="card-body">
									<h5 class="card-title green-highlight">20 Must Learn Interview Questions From HTML </h5>
									<p class="card-text">Discussed very basic topics of HTML & HTML5 that is needed to start a interview.</p>
								</div>
								<div class="card-footer">
									<div class="btn btn-outline-success">
										<a href="https://medium.com/@asimachowdhury.lu/20-must-learn-interview-questions-from-html-ff9ccf9583cc"
											target="_blank" class="green-highlight">Read More</a>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-4 col-sm-6 my-3">
							<div class="card blog-card">
								<img class="card-img-top" src="images/blogs/blog-2.png" alt="blog" />
								<div class="card-body">
									<h5 class="card-title green-highlight">React Fundamental Core Concept</h5>
									<p class="card-text">Discussed about fundamental core concepts of React.</p>
								</div>
								<div class="card-footer">
									<div class="btn btn-outline-success">
										<a href="https://medium.com/@asimachowdhury.lu/react-fundamental-core-concept-264922a01794"
											target="_blank" class="green-highlight">Read More</a>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-4 col-sm-6 my-3">
							<div class="card blog-card">
								<img class="card-img-top" src="images/blogs/blog-3.jpeg" alt="blog" />
								<div class="card-body">
									<h5 class="card-title green-highlight">JavaScript Tricky Concept!</h5>
									<p class="card-text">Discussed some of tricky topics of JavaScript for a beginner friendly blog.</p>
								</div>
								<div class="card-footer">
									<div class="btn btn-outline-success">
										<a href="https://medium.com/@asimachowdhury.lu/javascript-tricky-concept-ef27ffaca1ed"
											target="_blank" class="green-highlight">Read More</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Blogs;
