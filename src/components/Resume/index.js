import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/umd/entry.webpack";
import { Anchor } from "grommet";

import resumePDF from "../../assets/resume.pdf";

function Resume() {
	const [pageNumber, setPageNumber] = useState(1);

	return (
		<section id="resume">
			<Anchor pad="small" href={resumePDF} download="resume.pdf">
				Download
			</Anchor>

			<Document file={resumePDF}>
				<Page pageNumber={pageNumber} />
			</Document>
		</section>
	);
}

export default Resume;
