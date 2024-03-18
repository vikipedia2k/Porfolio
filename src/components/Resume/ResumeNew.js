import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import myPdf from "../../Assets/../Assets/Resume.pdf"; // import the PDF file

import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={myPdf} // use myPdf instead of pdf
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "1400px" }}>
  <div style={{ width: "60%", height: "80%", border: "1px solid black" }}>
    <iframe src="https://drive.google.com/file/d/1s7QzfbiMBzSgiAuYFxnfM9eWML-Oxto0/preview" frameborder="0" height="100%" width="100%" style={{ margin: 0, padding: 0 }}></iframe>
  </div>
</div>

      

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={myPdf} // use myPdf instead of pdf
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
