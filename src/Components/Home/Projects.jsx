import React from "react";
import logo from "../../Black.jpg";

function Projects() {
	return (
		<React.Fragment>
			<p className="fs-1" id="project">
				Projects
			</p>
			<div
				id="carouselExampleIndicators"
				class="carousel slide col-md-6 offset-md-3"
				data-bs-ride="carousel"
			>
				<div class="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="0"
						class="active"
						aria-current="true"
						aria-label="Slide 1"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="1"
						aria-label="Slide 2"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="2"
						aria-label="Slide 3"
					></button>
				</div>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img src={logo} class="d-block w-100" alt="..." />
					</div>
					<div class="carousel-item">
						<img src={logo} class="d-block w-100" alt="..." />
					</div>
					<div class="carousel-item">
						<img src={logo} class="d-block w-100" alt="..." />
					</div>
				</div>
				<button
					class="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide="prev"
				>
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button
					class="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide="next"
				>
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
		</React.Fragment>
	);
}

export default Projects;
