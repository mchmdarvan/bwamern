import React from "react";
import Fade from "react-reveal/Fade";
import Button from "elements/Button";

export default function Activities({ data }) {
	return (
		<section className="container">
			<h4 className="mb-3 font-weight-medium">Treasure to Choose</h4>
			<div className="container-grid">
				{data.activities.map((activites, index) => {
					return (
						<div class="item column-3 row-1" key={`activities-${index}`}>
							<div className="card">
								<figure className="img-wrapper" style={{ height: 180 }}>
									<img
										src={activites.imageUrl}
										alt={activites.name}
										className="img-cover"
									/>
								</figure>
								<div className="meta-wrapper">
									<Button
										type="link"
										href={`/activities/${activites._id}`}
										className="stretched-link d-block text-gray-800"
									>
										<h5 className="h4">{activites.name}</h5>
									</Button>
									<span className="text-gray-500">
										{activites.type}
									</span>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
