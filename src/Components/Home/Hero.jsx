import React from "react";
import SiteNav from "../../Shared/navbar";

function Hero() {
	return (
		<div className="vh-100" id="home">
			<div className="h-100">
				{/* navigation bar */}
				<SiteNav />
				{/* call to atcion */}
				<div className="postion-relative">
					<p className="position-absolute top-50 start-50 translate-middle fs-1">
						Xhantilomzi Mfecane wow
					</p>
				</div>
			</div>
		</div>
	);
}

export default Hero;
