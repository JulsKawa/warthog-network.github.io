import { useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PDFViewer(props) {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function prevPage() {
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);
  }

  function nextPage() {
    setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1);
  }

  function onLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <nav>
        <button onClick={prevPage}>Previous Page</button>
        <button onClick={nextPage}>Next Page</button>
      </nav>
      <div className="pages">{pageNumber} of {numPages}</div>
      <div className="page">
        <Document
          file='ComPDFKit_Sample_File_Web.pdf'
          onLoadSuccess={onLoadSuccess}
          renderMode="canvas"
        >
          <Page
            key={pageNumber}
            pageNumber={pageNumber}
          />
        </Document>
      </div>
    </div>
  )
}
 