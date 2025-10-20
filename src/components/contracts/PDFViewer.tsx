"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Loader2 } from "lucide-react";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PdfViewerClient({ url }: { url: string }) {
  const [numPages, setNumPages] = useState<number>();
  const [loading, setLoading] = useState(true);

  return (
    <div className="w-full h-full bg-[#F7F8FA] overflow-auto p-4 flex justify-center">
      {loading && <Loader2 className="animate-spin size-8 text-gray-400" />}
      <Document
        file={url}
        onLoadSuccess={({ numPages }) => {
          setNumPages(numPages);
          setLoading(false);
        }}
        loading={null}
      >
        {Array.from(new Array(numPages), (_, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} width={800} />
        ))}
      </Document>
    </div>
  );
}
