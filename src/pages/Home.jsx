import React from "react";
import Hero from "../Components/Home/Hero";
import Bio from "../Components/Home/Bio";
import Education from "../Components/Home/Education";
import Projects from "../Components/Home/Projects";
import Skills from "../Components/Home/Skills";

function Home() {
	return (
		<React.Fragment>
			<div
				data-bs-spy="scroll"
				data-bs-target="#siteNav"
				data-bs-offset="0"
				class="scrollspy-example"
				tabindex="0"
			>
				<Hero />
				<Bio />
				<Education />
				<Projects />
				<Skills />
			</div>
		</React.Fragment>
	);
}

export default Home;
