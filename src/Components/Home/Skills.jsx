import React from "react";

function Skills() {
	return (
		<div className="p-5 my-5">
			<p className="fs-1 text-center" id="skills">
				Skills
			</p>
			<div className="row">
				<div className="col-md-6 col-12">
					<p className="fs-3 text-center">Hard skills</p>
					<dl className="row">
						<dt className="col-12 col-md-3">Extensive</dt>
						<dd className="col-12 col-md-9">
							C#, bootstrap, HTML, CSS, React JS
						</dd>
						<dt className="col-12 col-md-3">Solid</dt>
						<dd className="col-12 col-md-9">
							MySQL, PHP using CodeIgniter framework
						</dd>
						<dt className="col-12 col-md-3">Basic/Limited</dt>
						<dd className="col-12 col-md-9">
							JavaScript, Angular JS, ASP.NET, SQL Server, Express JS, Firebase,
							MongoDB
						</dd>
					</dl>
				</div>
				<div className="col-md-6 col-12">
					<p className="fs-3 text-center">Soft skills</p>
					<p>
						Problem solving skills, good work ethic, a team player, a quick
						learner and able to take criticism and able to manage time.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Skills;
