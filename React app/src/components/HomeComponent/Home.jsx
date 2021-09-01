import React from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

// import webImg from "../../assets/image/undraw_online_message_re_3m5v.svg";
// import webImg2 from "../../assets/image/Allura - Online Searching.png";
// import webImg3 from "../../assets/image/pexels-kampus-production-7289723.jpg";
import webImg4 from "../../assets/image/DrawKit-Vector-Illustration-ecommerce-01.svg";
import "./hero.css";
export function Home() {
	return (
		<>
			<section className="hero-banner bg-light py-5">
				<div className="container">
					<div className="row row align-items-center ">
						<div className="col-lg-5 offset-lg-1 order-lg-1">
							<img
								src={webImg4}
								className="img-fluid"
								className="img-fluid w-200"
								alt="Web Development"
							/>
						</div>
						<div className="col-lg-5">
							<h1 classNameName="mt-3">
								Get your business online now!
							</h1>
							<h4 className="mt-2">
								Make your business an online success
							</h4>
							<div className="row mt-4">
								<Link to="/signup">
									<Button variant="dark">SignUp</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
