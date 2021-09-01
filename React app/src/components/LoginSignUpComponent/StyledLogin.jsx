import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import webImg from "../../assets/image/DrawKit-Vector-Illustration-ecommerce-10.svg";
import "./localStyle.css";
import SignUp from "../SignUp";
import { Link } from "react-router-dom";
import Login from "../Login";

export default function StyledLogin() {
	return (
		<div className="container-fluid">
			<div className="bg-login">
				<div className="row no-gutter">
					<div className="col-md-6 d-none d-md-flex">
						<img className="bg-image" src={webImg} alt="" />
					</div>

					<div className="col-md-6">
						<div className="login d-flex align-items-center py-5 bg-login-part">
							<div className="container">
								<div className="row">
									<div className="col-lg-10 col-xl-7  ">
										<h3>Login</h3>
										<p className="text-muted ">
											Welcome back!
										</p>
										<Login />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
