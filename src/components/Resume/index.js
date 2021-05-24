import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import resumePDF from "../../assets/resume.pdf";

function Resume() {
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}

	return (
		<div>
			<Document file={resumePDF} onLoadSuccess={onDocumentLoadSuccess}>
				<Page pageNumber={pageNumber} />
			</Document>
		</div>
	);
}

export default Resume;
