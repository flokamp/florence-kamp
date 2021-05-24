import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/umd/entry.webpack";

import resumePDF from "../../assets/resume.pdf";

function Resume() {
	const [numPages, setNumPages] = useState(1);
	const [pageNumber, setPageNumber] = useState(1);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}

	return (
		<section id="resume">
			<button id="download-btn" href={resumePDF} download="resume.pdf">
				Download resume
			</button>

			<Document file={resumePDF} onLoadSuccess={onDocumentLoadSuccess}>
				<Page pageNumber={pageNumber} />
			</Document>
		</section>
	);
}

export default Resume;
