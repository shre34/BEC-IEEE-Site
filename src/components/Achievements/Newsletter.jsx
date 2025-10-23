import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Download } from 'lucide-react';
import HTMLFlipBook from 'react-pageflip';
import { pdfjs, Document, Page as PdfPage } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Page = React.forwardRef(({ pageNumber, width }, ref) => {
  return (
    <div ref={ref} className="bg-white flex justify-center items-center shadow-lg">
      <PdfPage pageNumber={pageNumber} width={width} />
    </div>
  );
});

const useWindowSize = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return size;
};

const Newsletter = () => {
  const pdfs = [
    { year: '2024', name: 'BEC-IEEE YEARBOOK 2024', path: '/pdfs/BEC-IEEE YEARBOOK 2024_20241224_111201_0000_1_11zon.pdf' },
    { year: '2023', name: 'Souvenir 2023', path: '/pdfs/Souvenir Final_1_11zon.pdf' }
  ];

  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedPdf, setSelectedPdf] = useState(pdfs[0]);
  const [pdfError, setPdfError] = useState(null);
  const [width] = useWindowSize();
  
  const flipBook = useRef();
  const mobileContainerRef = useRef();
  const mobilePageRefs = useRef([]);

  const onFlip = (e) => {
    setCurrentPage(e.data);
  };

  const isMobile = width < 768;

  // This effect manages the body scroll lock to prevent page scroll while hovering the flipbook on desktop.
  useEffect(() => {
    const newsletterContainer = document.getElementById('newsletter-container');

    const handleMouseEnter = () => {
      if (!isMobile) {
        document.body.style.overflow = 'hidden';
      }
    };

    const handleMouseLeave = () => {
      document.body.style.overflow = 'auto';
    };

    if (newsletterContainer) {
      newsletterContainer.addEventListener('mouseenter', handleMouseEnter);
      newsletterContainer.addEventListener('mouseleave', handleMouseLeave);
    }

    // Cleanup function to run when component unmounts or isMobile changes.
    return () => {
      document.body.style.overflow = 'auto'; // Always restore scroll on cleanup
      if (newsletterContainer) {
        newsletterContainer.removeEventListener('mouseenter', handleMouseEnter);
        newsletterContainer.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [isMobile]); // Rerun this effect if isMobile changes

  const bookWidth = isMobile ? 300 : 800;
  const bookHeight = isMobile ? 450 : 600;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPdfError(null);
    setCurrentPage(0); // Reset to first page on new PDF load
    mobilePageRefs.current = mobilePageRefs.current.slice(0, numPages);
  }

  function onDocumentLoadError(error) {
    setPdfError('Failed to load PDF. Please try again later.');
    console.error(error);
  }

  const handleYearChange = (e) => {
    const selected = pdfs.find(p => p.path === e.target.value);
    setSelectedPdf(selected);
  };

  const handleNext = () => {
    if (isMobile) {
      const newPage = Math.min(currentPage + 1, numPages - 1);
      const pageRef = mobilePageRefs.current[newPage];
      if (pageRef) pageRef.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      setCurrentPage(newPage);
    } else {
      flipBook.current?.pageFlip().flipNext();
    }
  };

  const handlePrev = () => {
    if (isMobile) {
      const newPage = Math.max(currentPage - 1, 0);
      const pageRef = mobilePageRefs.current[newPage];
      if (pageRef) pageRef.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      setCurrentPage(newPage);
    } else {
      flipBook.current?.pageFlip().flipPrev();
    }
  };

  const handleSliderChange = (e) => {
    const pageNum = parseInt(e.target.value, 10);
    setCurrentPage(pageNum);
    if (isMobile) {
      const pageRef = mobilePageRefs.current[pageNum];
      if (pageRef) pageRef.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    } else {
      flipBook.current?.pageFlip().turnToPage(pageNum);
    }
  };

  return (
    <div className="flex flex-col items-center py-8 w-full">
      <div className="mb-6">
        <select 
          onChange={handleYearChange} 
          value={selectedPdf.path}
          className="bg-gray-800 border border-purple-500 rounded-lg text-white p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
        >
          {pdfs.map(pdf => (
            <option key={pdf.year} value={pdf.path}>
              {pdf.year}
            </option>
          ))}
        </select>
      </div>
      <div 
        id="newsletter-container"
        className="relative group"
      >
        {!isMobile && (
          <>
            <button 
              onClick={handlePrev} 
              className="absolute top-1/2 -translate-y-1/2 left-0 z-10 p-2 bg-black/30 hover:bg-black/50 rounded-full text-white transition-all opacity-0 group-hover:opacity-100 group-hover:left-4 disabled:opacity-0"
              disabled={currentPage === 0}
            >
              <ArrowLeft size={24} />
            </button>
            <button 
              onClick={handleNext} 
              className="absolute top-1/2 -translate-y-1/2 right-0 z-10 p-2 bg-black/30 hover:bg-black/50 rounded-full text-white transition-all opacity-0 group-hover:opacity-100 group-hover:right-4 disabled:opacity-0"
              disabled={currentPage === numPages - 1}
            >
              <ArrowRight size={24} />
            </button>
          </>
        )}

        <Document 
          file={selectedPdf.path} 
          onLoadSuccess={onDocumentLoadSuccess} 
          onLoadError={onDocumentLoadError}
          key={selectedPdf.path}
          loading={
            <div style={{ width: bookWidth, height: bookHeight }} className="flex justify-center items-center bg-gray-900/50 rounded-lg">
              <div className="text-white text-xl animate-pulse">Loading Newsletter...</div>
            </div>
          }
        >
          {numPages && (
            isMobile ? (
              <div 
                ref={mobileContainerRef}
                className="flex overflow-x-auto bg-gray-900/50 p-4 rounded-lg border border-purple-800/50 shadow-lg scroll-smooth"
                style={{ width: '90vw', height: bookHeight + 40 }}
              >
                <div className="flex space-x-2">
                  {[...Array(numPages).keys()].map((p) => (
                    <div 
                      key={`pdf-page-${p + 1}`} 
                      ref={el => mobilePageRefs.current[p] = el}
                      className="bg-white shadow-md"
                    >
                      <PdfPage pageNumber={p + 1} width={bookWidth} />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div style={{ width: `${bookWidth}px`, height: `${bookHeight}px` }}>
                <HTMLFlipBook
                  width={400}
                  height={bookHeight}
                  size="stretch"
                  showCover={true}
                  className="shadow-2xl"
                  ref={flipBook}
                  onFlip={onFlip}
                >
                  {[...Array(numPages).keys()].map((p) => (
                    <Page key={`page-${p + 1}`} pageNumber={p + 1} width={400} />
                  ))}
                </HTMLFlipBook>
              </div>
            )
          )}
        </Document>
        {pdfError && 
          <div style={{ width: bookWidth, height: bookHeight }} className="flex justify-center items-center bg-red-900/50 rounded-lg">
            <div className="text-white text-xl p-4 text-center">{pdfError}</div>
          </div>
        }
      </div>

      {/* Controls Section */}
      {numPages && (
        <div className="flex flex-col items-center gap-4 mt-8 w-full max-w-xl px-4">
          <div className="flex items-center gap-4 w-full">
            {isMobile && <button onClick={handlePrev} className="p-2 bg-purple-600 hover:bg-purple-700 rounded-full text-white transition-colors"><ArrowLeft size={20} /></button>}
            <input 
              type="range" 
              min="0" 
              max={numPages - 1} 
              value={currentPage}
              onChange={handleSliderChange}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
            {isMobile && <button onClick={handleNext} className="p-2 bg-purple-600 hover:bg-purple-700 rounded-full text-white transition-colors"><ArrowRight size={20} /></button>}
            <a href={selectedPdf.path} download={`${selectedPdf.name}.pdf`} className="p-2 bg-green-600 hover:bg-green-700 rounded-full text-white transition-colors no-underline flex-shrink-0">
              <Download size={20} />
            </a>
          </div>
          <div className="text-purple-300">
            Page {currentPage + 1} of {numPages}
          </div>
        </div>
      )}
    </div>
  );

};

export default Newsletter;
