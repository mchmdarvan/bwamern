import React from "react";
import ReactHTMLParser from "react-html-parser";
import Fade from "react-reveal/Fade";

export default function PageDetailDescription({ data }) {
	return (
		<Fade bottom>
			<main>
				<h4>About the Place</h4>
				{ReactHTMLParser(data.description)}
				<div className="row" style={{ marginTop: 30 }}>
					{data.features.map((feature, index) => {
						return (
							<div
								key={`features-${index}`}
								className="col-3"
								style={{ marginBottom: 20 }}
							>
								<img
									width="38"
									className="d-block mb-2"
									src={feature.imageUrl}
									alt={feature.name}
								/>{" "}
								<span>{feature.qty}</span>{" "}
								<span className="text-gray-500 font-weight-light">
									{feature.name}
								</span>
							</div>
						);
					})}
				</div>
			</main>
		</Fade>
	);
}
