import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//include componets
import NavBar from "./navbar";
import JumboTron from "./jumbotron";
import CardBox from "./card";
import Footer from "./footer";

//create your first component
const Home = () => {
	return (
		<>
			<NavBar />
			<div class="container">
				<JumboTron />
				<div class="row text-center mb-5">
					<div class="col align-self-start">
						<CardBox />
					</div>
					<div class="col align-self-center">
						<CardBox />
					</div>
					<div class="col align-self-end">
						<CardBox />
					</div>
					<div class="col align-self-end">
						<CardBox />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
