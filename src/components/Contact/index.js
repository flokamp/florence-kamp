import React, { useState } from "react";
import {
	Form,
	TextInputField,
	TextAreaField,
	validators,
} from "grommet-controls";

import { Box, Button, Heading } from "grommet";

export default function ContactForm() {
	const [formState, setFormState] = useState({});

	const { name, email, message } = formState;
	return (
		<Box align="center">
			<Box width="medium" margin="large">
				<Heading>Contact me</Heading>
				<Form
					onChange={(name, value) => {
						console.log(name, value);
						setFormState(value);
					}}
					onSubmit={(values) => setFormState(values)}>
					<TextInputField
						label="Name"
						name="name"
						validation={[validators.required()]}
						defaultValue={name}
					/>
					<TextInputField
						label="Email"
						name="email"
						validation={[validators.email()]}
						defaultValue={email}
					/>

					<TextAreaField
						label="Message"
						name="message"
						validation={[validators.required()]}
						defaultValue={message}
					/>
					<Box
						tag="footer"
						margin={{ top: "medium" }}
						direction="row"
						justify="between">
						<Button type="submit" primary label="Send message" />
					</Box>
				</Form>
			</Box>
		</Box>
	);
}
