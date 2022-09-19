import React from "react";
import selfie from "../../images/programmer.jpg";

function Bio() {
	return (
		<div className="vh-100 p-5">
			<p className="fs-1 text-center" id="bio">
				Who am I
			</p>
			<div className="row">
				<div className="col-12 col-md-6">
					<img src={selfie} alt="Selfie" className="rounded w-100" />
				</div>
				<div className="col-12 col-md-6">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
						aliquam necessitatibus accusantium dolores nam magnam expedita quasi
						dolorum blanditiis illo quam quo, ut consequuntur exercitationem
						doloremque vero est ea ipsam? Exercitationem, nisi. Vel ut fuga
						expedita? Maxime incidunt quos harum vitae quaerat unde officia ab
						blanditiis pariatur voluptas delectus labore, magnam odio provident
						iusto eaque, quia dignissimos temporibus, accusantium consequuntur?
						Sapiente illo laudantium cupiditate qui est laborum? Sit quas
						architecto molestias nostrum doloribus perspiciatis officiis aperiam
						laboriosam. Cupiditate voluptatum, porro qui dignissimos consequatur
						sunt harum iste debitis! Soluta, veniam animi? Rerum harum facilis
						enim nulla labore. Architecto saepe, voluptas atque nemo eius magni
						beatae, corporis, ipsum minus doloribus voluptatibus? Provident
						saepe molestiae consequatur minus culpa quas, fugit eligendi eveniet
						in. Ipsa molestias blanditiis, itaque vitae iste iusto nesciunt
						ullam quae repellat, sapiente perferendis explicabo. Dolorem eum
						dolor adipisci eaque mollitia porro temporibus a quas expedita,
						numquam provident quam sed consequatur!
					</p>
				</div>
			</div>
		</div>
	);
}

export default Bio;
