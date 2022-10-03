import React from "react";
import logo from "../../Black.jpg";

function Projects() {
	return (
		<div className="p-5 my-5">
			<p className="fs-1 text-center" id="project">
				Projects
			</p>
			<div className="row text-center">
				<div className="col-12 col-md-6">
					<div class="card bg-dark text-white">
						<img src={logo} class="card-img" alt="..." />
						<div class="card-img-overlay">
							<h5 class="card-title">Tic Tac Toe</h5>
							{/* <p class="card-text">
								This is a wider card with supporting text below as a natural
								lead-in to additional content. This content is a little bit
								longer.
							</p> */}
							<a
								href="#"
								class="btn btn-primary position-absolute top-50 start-50 translate-middle"
							>
								Visit
							</a>
						</div>
					</div>
				</div>
				<div className="col-12 col-md-6">
					<div class="card bg-dark text-white">
						<img src={logo} class="card-img" alt="..." />
						<div class="card-img-overlay">
							<h5 class="card-title">SBWL Data Deals</h5>
							{/* <p class="card-text">
								This is a wider card with supporting text below as a natural
								lead-in to additional content. This content is a little bit
								longer.
							</p> */}
							<a
								href="#"
								class="btn btn-primary position-absolute top-50 start-50 translate-middle"
							>
								Visit
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;
