import React from "react";
import blob1 from "../../images/blob.svg";
import blob2 from "../../images/blob(1).svg";
import study from "../../images/6-2-education-png-hd.png";
import career from "../../images/kindpng_2960536.png";

function Education() {
	return (
		<div className="p-5 my-5" id="education">
			<div className="row py-5">
				{/* Qulifications */}
				<div className="col-12 col-md-6">
					<p className="fs-1 text-center">Qualifications</p>
					<ul>
						<li>Bachelor of Technology: Information Technology</li>
						<li>National Diploma: Information Technology</li>
						<li>National Senior Certificate Grade 12 /Matric.</li>
					</ul>
				</div>
				<div className="col-12 col-md-6 text-center">
					<img src={study} />
				</div>
			</div>
			<div className="row py-5">
				{/* Work Experience */}
				<div className="col-12 col-md-6 text-center">
					<img src={career} className="w-50" />
				</div>
				<div className="col-12 col-md-6">
					<p className="fs-1 text-center">Experience</p>
					<dl className="row">
						<dt className="col-12 col-md-3">
							Axxess Hosting Support (current)
						</dt>
						<dd className="col-12 col-md-9">
							I am currently working for Axxess hosting support where my role
							deals with assisting and supporting clients with hosting queries
							for their domains as well as email queries.
						</dd>
						<dt className="col-12 col-md-3">Axxess Technical Support</dt>
						<dd className="col-12 col-md-9">
							I am currently working for Axxess technical support where my role
							deals with assisting and supporting clients with technical queries
							for Fibre and ADSL connection, emails, LTE and VoIP.
						</dd>
						<dt className="col-12 col-md-3">Tier 2 Senior Associate</dt>
						<dd className="col-12 col-md-9">
							I am currently working as a tier 2 outbound Senior Associate that
							deals with internal technical cases as well as escalated internal
							technical cases that need to be attended for email, ADSL, Telkom
							Fibre and other third-party companies like Vumatel and Link
							Africa.
						</dd>
					</dl>
				</div>
			</div>
		</div>
	);
}

export default Education;
