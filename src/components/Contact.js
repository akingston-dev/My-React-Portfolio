import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
	const form = useRef();

	const sendEmail = e => {
		emailjs
			.sendForm(
				"service_kurbryj",
				"template_a2ejhkb",
				form.current,
				"6IPP79qIjUlH3Lh1N"
			)
			.then(
				result => {
					console.log(result.text);
					console.log("Message Sent");
				},
				error => {
					console.log(error.text);
				}
			);
	};

	return (
		<section className="contact" id="connect">
			<Container>
				<Row className="align-items-center">
					<Col size={12} md={6}>
						<img className src={contactImg} alt="Contact Us" />
					</Col>
					<Col size={12} md={6}>
						<div>
							<h2>Get In Touch</h2>
							<form ref={form} onSubmit={sendEmail}>
								<Row>
									<Col size={12} sm={6} className="px-1">
										<input
											type="text"
											placeholder="First and Last Name"
											name="user_name"
										/>
									</Col>

									<Col size={12} sm={6} className="px-1">
										<input
											type="email"
											placeholder="Email Address"
											name="user_email"
										/>
									</Col>

									<Col size={12} className="px-1">
										<textarea name="message" placeholder="Message" />
										<input type="submit" value="Send" />
									</Col>
								</Row>
							</form>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
