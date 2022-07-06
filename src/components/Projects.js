import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
	const projects = [
		{
			title: "Marketing Agency",
			description: "Help clients implement and manage marketing operations",
			link: "https://akingston-dev.github.io/SYTE/build/#/",
			imgUrl: projImg1,
		},
		{
			title: "Banking Startup",
			description:
				"online systems that provide users access to their personal bank account",
			link: "https://akingston-dev.github.io/PAYMNT/build/#/",
			imgUrl: projImg2,
		},
		{
			title: "Cryptocurrency Trading",
			description: "Website where users buy, sell, and trade cryptocurrency",
			link: "https://akingston-dev.github.io/cryptoapi/build/",
			imgUrl: projImg3,
		},
		{
			title: "Administration Panel",
			description: "Primary tool for you to work with your online store",
			link: "https://akingston-dev.github.io/ADMIN/build/",
			imgUrl: projImg4,
		},
		{
			title: "Business Data Analyst",
			description:
				"Processes to help workers make decisions to solve complex problems",
			link: "https://akingston-dev.github.io/Aptive/build/",
			imgUrl: projImg5,
		},
		{
			title: "Movie API",
			description: "Helps users find a movie they are looking for",
			link: "https://akingston-dev.github.io/moviess/build/#/",
			imgUrl: projImg6,
		},
	];

	return (
		<section className="project" id="project">
			<Container>
				<Row>
					<Col size={12}>
						<h2>Projects</h2>
						<p>
							Here are some of the applications I have built over the years in
							for display. They are containing accessible and professional
							design as a reflection of some of the frontend work I will be
							doing.
						</p>
						<Tab.Container id="projects-tabs" defaultActiveKey="first">
							<Nav
								variant="pills"
								className="nav-pills mb-5 justify-content-center align-items-center"
								id="pills-tab"
							>
								<Nav.Item>
									<Nav.Link eventKey="first">Showcasing</Nav.Link>
								</Nav.Item>
							</Nav>
							<Tab.Content>
								<Tab.Pane eventKey="first">
									<Row>
										{projects.map((project, index) => {
											return <ProjectCard key={index} {...project} />;
										})}
									</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="section">
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Cumque quam, quod neque provident velit, rem explicabo
										excepturi id illo molestiae blanditiis, eligendi dicta
										officiis asperiores delectus quasi inventore debitis quo.
									</p>
								</Tab.Pane>
								<Tab.Pane eventKey="third">
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Cumque quam, quod neque provident velit, rem explicabo
										excepturi id illo molestiae blanditiis, eligendi dicta
										officiis asperiores delectus quasi inventore debitis quo.
									</p>
								</Tab.Pane>
							</Tab.Content>
						</Tab.Container>
					</Col>
				</Row>
			</Container>
			<img className="background-image-right" src={colorSharp2}></img>
		</section>
	);
};
