import styled from 'styled-components';
import Button from './Button';



export default function LoginForm() {
	return (
		<EntryForm>
			<StyledParagraph>calling all sewing lovers</StyledParagraph>
			<StyledHeader>We invite you to join cloak.</StyledHeader>
			<StyledLabel htmlFor="email" name="email" id="email">
				email
			</StyledLabel>
			<StyledInput type="email" name="email" autoComplete="off" aria-label="Enter text" />
			<StyledLabel htmlFor="password" name="password" id="password">
				password
			</StyledLabel>
			<StyledInput type="password" name="password" aria-label="Enter your name" />
			<Button></Button>
		</EntryForm>
	);
}

const EntryForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
    padding: 0rem 3rem 5rem 3rem
`;

const StyledHeader = styled.h2`
	margin-top: 10px;
	margin-bottom: 10px;
	letter-spacing: 0.05rem;
	line-height: 1.2rem;
	font-size: 14pt;
`;

const StyledParagraph = styled.p`
	letter-spacing: 0.05rem;
	line-height: 1.2rem;
	font-size: 11pt;
	text-transform: uppercase;
`;

const StyledInput = styled.input`
	border: none;
	border-bottom: 3px solid black;
	padding: 5px 10px;
	outline: none;
`;

const StyledLabel = styled.label`
	padding-top: 10px;
	padding-bottom: 10px;
	margin-top: 5px;
`;
