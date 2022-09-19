import React from "react";
import SiteNav from "../../Shared/navbar";
import BGI from "../../images/blackfeathers.jpg";

function Hero() {
	return (
		<div
			className="vh-100"
			id="home"
			style={{
				background: `url(${BGI})  no-repeat center center fixed`,
				backgroundSize: "cover",
			}}
		>
			<div className="h-100 text-white">
				{/* navigation bar */}
				<SiteNav />
				{/* call to atcion */}
				<div className="postion-relative">
					<p className="position-absolute top-50 start-50 translate-middle fs-1">
						Xhantilomzi Mfecane
					</p>
				</div>
			</div>
		</div>
	);
}

export default Hero;
