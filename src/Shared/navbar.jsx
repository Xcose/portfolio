import React from "react";

function SiteNav() {
	return (
		<nav class="navbar navbar-expand-lg bg-transparent" id="siteNav">
			<div class="container-fluid">
				<a class="navbar-brand text-white" href="#">
					Navbar
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav ms-auto">
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#home">
								Home
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#bio">
								Bio
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#education">
								Education
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#project">
								Project
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#skills">
								Skills
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link disabled">Disabled</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default SiteNav;
