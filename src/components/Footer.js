import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export const Footer = () => {
	return (
		<footer className="footer">
			<Container>
				<Row className="align-items-center">
					<Col size={12} sm={6}>
						<img src={logo} alt="Logo" />
					</Col>
					<Col size={12} sm={6} className="text-center text-sm-end">
						<div className="social-icon">
							<a
								href="https://www.linkedin.com/in/aj-kingston-4399a521a/"
								target="_blank"
								rel="noreferrer"
							>
								<BsLinkedin color="white" size={17} />
							</a>
							<a
								href="https://github.com/akingston-dev"
								target="_blank"
								rel="noreferrer"
							>
								<BsGithub color="white" size={17} />
							</a>
						</div>
						<p>Copyright 2022. All Rights Reserved</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};
