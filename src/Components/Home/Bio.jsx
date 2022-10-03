import React from "react";
import selfie from "../../images/programmer.jpg";

function Bio() {
	return (
		<div className="vh-100 p-5" id="bio">
			<div className="row">
				<div className="col-12 col-md-6">
					<img src={selfie} alt="Selfie" className="rounded w-100" />
				</div>
				<div className="col-12 col-md-6 d-flex align-items-center p-md-5 py-5">
					<div>
						<p className="fs-1 text-uppercase text-md-start text-center">
							Who am I
						</p>
						<p>
							I am continuously looking to better the skill set that I have
							acquired over my years of study and willing to learn new things
							that will benefit me and the ones around me. I am a good team
							player that works well with other people, I am a problem solver
							and I can manage my time well.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Bio;
