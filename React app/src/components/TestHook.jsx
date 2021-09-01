import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import webImg from "../assets/image/DrawKit-Vector-Illustration-ecommerce-08.svg";

class Home extends React.Component {
	render() {
		return (
			<div class="mb-3">
				<div class="pt-4 wish-list">
					<h5 class="mb-4">
						Cart (<span>2</span> items)
					</h5>

					<div class="row mb-4">
						<div class="col-md-5 col-lg-3 col-xl-3">
							<div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
								<img
									class="img-fluid w-100"
									src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
									alt="Sample"
								/>
							</div>
						</div>
						<div class="col-md-7 col-lg-9 col-xl-9">
							<div>
								<div class="d-flex justify-content-between">
									<div>
										<h5>Blue denim shirt</h5>
										<p class="mb-3 text-muted text-uppercase small">
											Shirt - blue
										</p>
										<p class="mb-2 text-muted text-uppercase small">
											Color: blue
										</p>
										<p class="mb-3 text-muted text-uppercase small">
											Size: M
										</p>
									</div>
									<div>
										<div class="def-number-input number-input safari_only mb-0 w-100">
											<button
												onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
												class="minus decrease"></button>
											<button
												onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
												class="plus increase"></button>
										</div>
										<small
											id="passwordHelpBlock"
											class="form-text text-muted text-center">
											(Note, 1 piece)
										</small>
									</div>
								</div>
								<div class="d-flex justify-content-between align-items-center">
									<div>
										<a
											href="#!"
											type="button"
											class="card-link-secondary small text-uppercase mr-3">
											<i class="fas fa-trash-alt mr-1"></i>{" "}
											Remove item{" "}
										</a>
										<a
											href="#!"
											type="button"
											class="card-link-secondary small text-uppercase">
											<i class="fas fa-heart mr-1"></i>{" "}
											Move to wish list{" "}
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row mb-4">
						<div class="col-md-5 col-lg-3 col-xl-3">
							<div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
								<img
									class="img-fluid w-100"
									src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg"
									alt="Sample"
								/>
							</div>
						</div>
						<div class="col-md-7 col-lg-9 col-xl-9">
							<div>
								<div class="d-flex justify-content-between">
									<div>
										<h5>Red hoodie</h5>
										<p class="mb-3 text-muted text-uppercase small">
											Shirt - red
										</p>
										<p class="mb-2 text-muted text-uppercase small">
											Color: red
										</p>
										<p class="mb-3 text-muted text-uppercase small">
											Size: M
										</p>
									</div>
									<div>
										<div class="def-number-input number-input safari_only mb-0 w-100">
											<button
												onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
												class="minus"></button>
											<button
												onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
												class="plus"></button>
										</div>
									</div>
								</div>
								<div class="d-flex justify-content-between align-items-center">
									<div>
										<a
											href="#!"
											type="button"
											class="card-link-secondary small text-uppercase mr-3">
											<i class="fas fa-trash-alt mr-1"></i>{" "}
											Remove item{" "}
										</a>
										<a
											href="#!"
											type="button"
											class="card-link-secondary small text-uppercase">
											<i class="fas fa-heart mr-1"></i>{" "}
											Move to wish list{" "}
										</a>
									</div>
									<p class="mb-0">
										<span>
											<strong>$35.99</strong>
										</span>
									</p>
								</div>
							</div>
						</div>
					</div>
					<p class="text-primary mb-0">
						<i class="fas fa-info-circle mr-1"></i> Do not delay the
						purchase, adding items to your cart does not mean
						booking them.
					</p>
				</div>
			</div>
		);
	}
}
export default Home;

// return (
// 	<div class="d-flex justify-content-center container mt-5">
// 		<div class="card p-3 bg-white">
// 			<i class="fa fa-apple"></i>
// 			<div class="about-product text-center mt-2">
// 				<img
// 					src="https://i.imgur.com/3VTaSeb.png"
// 					width="300"
// 				/>
// 				<div>
// 					<h4>Believing is seeing</h4>
// 				</div>
// 			</div>
// 			<div class="stats mt-2">
// 				<h5 class="fw-light">this is awdasd</h5>
// 			</div>

// 			<div class="d-flex justify-content-between">
// 				<div class="stats mt-2">
// 					<h5>Rs. 20000000</h5>
// 				</div>
// 				<div class="stats mt-2"></div>
// 				<button
// 					class="ms-auto p-2 "
// 					type="submit"
// 					className="btn btn-dark md-1 rounded-pill shadow-sm">
// 					Submit
// 				</button>
// 			</div>
// 		</div>
// 	</div>
// );
