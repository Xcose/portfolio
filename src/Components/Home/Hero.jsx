import React from "react";
import SiteNav from "../../Shared/navbar";
import BGI from "../../images/adrien-olichon-ilVYjf0J378-unsplash.jpg";
import redSquare from "../../images/XM.svg";

function Hero() {
	return (
		<div
			className="vh-100"
			id="home"
			style={{
				background: `url(${BGI}) no-repeat center center fixed`,
				backgroundSize: "cover",
				backgroundBlendMode: "multiply",
			}}
		>
			<div className="h-100 text-white">
				{/* navigation bar */}
				<SiteNav />
				{/* call to atcion */}
				<div className="postion-relative">
					<img
						src={redSquare}
						className="position-absolute top-50 start-50 translate-middle"
					/>
					<div className="position-absolute top-50 start-50 translate-middle title display-1 p-5 w-100 text-center">
						Xhantilomzi Mfecane
					</div>
					<div className="position-absolute bottom-0 start-50 translate-middle-x">
						<a href="#bio" class="btn btn-outline-danger rounded-pill">
							All about you
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
