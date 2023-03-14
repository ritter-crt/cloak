import Image from "next/image";
import styled from "styled-components";
import HandWorking from "../src/assets/hand-working.jpg";
import TailorWorking from "../src/assets/tailor-with-sewing-machine.jpg";
import Dressmaker from "../src/assets/male-dressmaker-with-computer.jpg";


export default function ImageBoard() {
	return (
		<ImageWrapper>
			<StyledText>
				CLOAK is a platform dedicated to exchange, sell and get sewing patterns.
			</StyledText>
			<StyledImageOne>
				<Image src={TailorWorking} placeholder="blur"height="300" width="200" alt="working Hand"></Image>
			</StyledImageOne>
			<StyledImageTwo>
				<Image src={HandWorking} placeholder="blur" height="100" width="150" alt="working Hand"></Image>
			</StyledImageTwo>
			<StyledImageThree>
				<Image src={Dressmaker} placeholder="blur" height="200" width="320" alt="working Hand"></Image>
			</StyledImageThree>
		</ImageWrapper>
	);
}

const ImageWrapper = styled.div`
	width: 100%;
	height: 40rem;
	position: relative;
`;

const StyledImageOne = styled.div`
	position: absolute;
	object-fit: contain;
	left: 10%;
	width: 250px;
	height: 300px;
`;

const StyledImageTwo = styled.div`
	object-fit: contain;
	position: absolute;
	top: 7%;
	right: 15%;
`;

const StyledImageThree = styled.div`
	object-fit: contain;
	position: absolute;
	top: 50%;
	padding: 10%;
`;

const StyledText = styled.div`
	width: 40%;
	bottom: 44%;
	position: absolute;
	right: 3%;
	padding: 33px;
	letter-spacing: 0.05rem;
	line-height: 1.2rem;
	font-size: 11pt;
	color: black;
`;
