import React, { useState } from "react";
import { Form, FormField, TextInput, TextArea, Box } from "grommet";

import { validateEmail } from "../../utils/helpers";

function ContactForm() {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [errorMessage, setErrorMessage] = useState("");

	const { name, email, message } = formState;

	function handleChange(e) {
		if (e.target.name === "email") {
			const isValid = validateEmail(e.target.value);
			console.log(isValid);
			if (!isValid) {
				setErrorMessage("Your email is invalid.");
			} else {
				setErrorMessage("");
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log(formState);
	}

	console.log(formState);
	return (
		<Box pad="large" gap="medium">
			<Form onSubmit={handleSubmit}>
				<Box pad="small">
					<FormField label="Name" name="name" required>
						<TextInput
							name="name"
							defaultValue={name}
							onChange={handleChange}
						/>
					</FormField>
				</Box>
				<Box pad="small">
					<FormField label="Email" name="email" required>
						<TextInput
							type="email"
							name="email"
							defaultValue={email}
							onChange={handleChange}
						/>
					</FormField>
				</Box>
				<Box pad="small">
					<FormField label="Message" name="message" required>
						<TextArea
							name="message"
							defaultValue={message}
							onChange={handleChange}
						/>
					</FormField>
				</Box>

				{errorMessage && (
					<div>
						<p className="error-text">{errorMessage}</p>
					</div>
				)}
				<button type="submit">Submit</button>
			</Form>
		</Box>
	);
}

export default ContactForm;
