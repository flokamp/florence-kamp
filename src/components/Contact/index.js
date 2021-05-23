import React, { useState } from "react";
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
		} else {
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required.`);
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
		<div className="flex-row">
			<form id="contact-form" onSubmit={handleSubmit}>
				<h1>Contact me 💬</h1>
				<div className="contact-input">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						defaultValue={name}
						onChange={handleChange}
						name="name"
					/>
				</div>
				<div className="contact-input">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						defaultValue={email}
						name="email"
						onChange={handleChange}
					/>
				</div>
				<div className="contact-input">
					<label htmlFor="message">Message</label>
					<textarea
						name="message"
						defaultValue={message}
						onChange={handleChange}
						rows="5"
					/>
				</div>
				{errorMessage && (
					<div>
						<p className="error-text">{errorMessage}</p>
					</div>
				)}
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default ContactForm;
