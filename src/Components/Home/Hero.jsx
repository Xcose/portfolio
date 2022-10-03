import React from "react";
import SiteNav from "../../Shared/navbar";
import BGI from "../../images/blake-connally.jpg";

function Hero() {
	return (
		<div
			className="vh-100"
			id="home"
			style={{
				background: `url(${BGI}) no-repeat center center fixed rgba(0, 0, 0, 0.75)`,
				backgroundSize: "cover",
				backgroundBlendMode: "multiply",
			}}
		>
			<div className="h-100 text-white">
				{/* navigation bar */}
				<SiteNav />
				{/* call to atcion */}
				<div className="postion-relative">
					<p className="position-absolute top-50 start-50 translate-middle display-3 border border-danger border-5 p-5">
						Xhantilomzi Mfecane
					</p>
				</div>
			</div>
		</div>
	);
}

export default Hero;
