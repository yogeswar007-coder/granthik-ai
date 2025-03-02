// import React, { useEffect, useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'animate.css/animate.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import './App.css';

// function App() {
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         fetch("http://127.0.0.1:8000/")
//             .then(response => response.json())
//             .then(data => {
//                 console.log("Backend Response:", data);
//                 setData(data);
//             })
//             .catch(error => console.error("Error fetching data:", error));
//     }, []);

//     function processFile() {
//         const fileInput = document.getElementById("fileInput");
//         const file = fileInput.files[0];
    
//         if (!file) {
//             alert("Please select a file first!");
//             return;
//         }
    
//         const formData = new FormData();
//         formData.append("file", file);
    
//         fetch("http://127.0.0.1:8000/upload/", {
//             method: "POST",
//             body: formData
//         })
//         .then(response => response.json())  // Convert response to JSON
//         .then(data => {
//             console.log("Backend Response:", data);  // Log the full response
            
//             // Update the UI with actual response data
//             document.getElementById("results").innerHTML = `
//                 <h4>Results:</h4>
//                 <p><strong>Tags:</strong> ${data.tags.join(", ")}</p>
//                 <p><strong>Filename:</strong> ${data.metadata.filename}</p>
//                 <p><strong>Content Type:</strong> ${data.metadata.content_type}</p>
//             `;
//         })
//         .catch(error => {
//             alert("Error uploading file!");
//             console.error("Upload Error:", error);
//         });
//     }
    
    

//     return (
//         <div className="dark-theme">
//             {/* Navbar */}
//             <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
//                 <div className="container">
//                     <a className="navbar-brand" href="#">Granthik AI</a>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarNav">
//                         <ul className="navbar-nav ms-auto">
//                             <li className="nav-item"><a className="nav-link" href="#features">Features</a></li>
//                             <li className="nav-item"><a className="nav-link" href="#demo">Demo</a></li>
//                             <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>

//             {/* Hero Section */}
//             <section className="hero-section text-center text-white d-flex align-items-center">
//                 <div className="container">
//                     <h1 className="display-4 animate__animated animate__fadeInDown">Revolutionize Document Management</h1>
//                     <p className="lead animate__animated animate__fadeInUp">AI-powered NLP tools for smarter document processing.</p>
//                     <a href="#demo" className="btn btn-primary btn-lg animate__animated animate__fadeInUp">Try the Demo</a>
//                 </div>
//             </section>

//             {/* Features Section */}
//             <section id="features" className="py-5">
//                 <div className="container">
//                     <h2 className="text-center mb-5 animate__animated animate__fadeIn">Features</h2>
//                     <div className="row">
//                         <div className="col-md-4 text-center feature-card animate__animated animate__fadeInLeft">
//                             <div className="card h-100 shadow">
//                                 <div className="card-body">
//                                     <i className="fas fa-tags fa-3x mb-3"></i>
//                                     <h4>Automated Classification</h4>
//                                     <p>Automatically categorize documents using advanced NLP algorithms.</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-4 text-center feature-card animate__animated animate__fadeInUp">
//                             <div className="card h-100 shadow">
//                                 <div className="card-body">
//                                     <i className="fas fa-user-tag fa-3x mb-3"></i>
//                                     <h4>Entity Recognition</h4>
//                                     <p>Extract names, dates, locations, and other entities from text.</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-4 text-center feature-card animate__animated animate__fadeInRight">
//                             <div className="card h-100 shadow">
//                                 <div className="card-body">
//                                     <i className="fas fa-project-diagram fa-3x mb-3"></i>
//                                     <h4>Topic Modeling</h4>
//                                     <p>Identify key topics and themes in large document collections.</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Demo Section */}
//             <section id="demo" className="py-5">
//                 <div className="container">
//                     <h2 className="text-center mb-5 animate__animated animate__fadeIn">Try the Demo</h2>
//                     <div className="card shadow animate__animated animate__fadeInUp">
//                         <div className="card-body">
//                             <input type="file" id="fileInput" className="form-control mb-3" />
//                             <button onClick={processFile} className="btn btn-primary w-100">Upload</button>
                            
//                             {/* API Response Section */}
//                             <div id="results" className="mt-4">
//                                 <h4>Results:</h4>
//                                 {data ? (
//                                     <>
//                                         <p><strong>Tags:</strong> {data.tags}</p>
//                                         <p><strong>Metadata:</strong> {data.metadata}</p>
//                                     </>
//                                 ) : (
//                                     <p>Loading...</p>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* About Section */}
//             <section id="about" className="py-5">
//                 <div className="container">
//                     <h2 className="text-center mb-5 animate__animated animate__fadeIn">About Granthik AI</h2>
//                     <div className="row">
//                         <div className="col-md-6 animate__animated animate__fadeInLeft">
//                             <h3>Our Mission</h3>
//                             <p>At Granthik AI, we aim to revolutionize document management by leveraging cutting-edge AI and NLP technologies.</p>
//                         </div>
//                         <div className="col-md-6 animate__animated animate__fadeInRight">
//                             <h3>Why Choose Us?</h3>
//                             <ul>
//                                 <li>Advanced AI-powered document classification and tagging.</li>
//                                 <li>Seamless integration with existing workflows.</li>
//                                 <li>Enhanced search capabilities for faster retrieval.</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Footer */}
//             <footer className="text-center py-3">
//                 <p>&copy; 2025 Granthik AI. All rights reserved.</p>
//             </footer>
//         </div>
//     );
// }

// export default App;

// import React, { useEffect, useState, useRef } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'animate.css/animate.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import './App.css';

// function App() {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [dragging, setDragging] = useState(false);
//     const dropRef = useRef(null);

//     useEffect(() => {
//         fetch("http://127.0.0.1:8000/")
//             .then(response => response.json())
//             .then(data => {
//                 console.log("Backend Response:", data);
//                 setData(data);
//             })
//             .catch(error => console.error("Error fetching data:", error));
//     }, []);

//     function handleFileUpload(file) {
//         if (!file) {
//             alert("Please select a file first!");
//             return;
//         }

//         const formData = new FormData();
//         formData.append("file", file);
//         setLoading(true);

//         fetch("http://127.0.0.1:8000/upload/", {
//             method: "POST",
//             body: formData
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log("Backend Response:", data);
//             setData(data);
//         })
//         .catch(error => {
//             alert("Error uploading file!");
//             console.error("Upload Error:", error);
//         })
//         .finally(() => {
//             setLoading(false);
//         });
//     }

//     function handleFileChange(event) {
//         const file = event.target.files[0];
//         handleFileUpload(file);
//     }

//     function handleDragOver(event) {
//         event.preventDefault();
//         setDragging(true);
//     }

//     function handleDragLeave() {
//         setDragging(false);
//     }

//     function handleDrop(event) {
//         event.preventDefault();
//         setDragging(false);

//         const file = event.dataTransfer.files[0];
//         if (file) {
//             handleFileUpload(file);
//         }
//     }

//     return (
//         <div className="dark-theme">
//             {/* Navbar */}
//             <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
//                 <div className="container">
//                     <a className="navbar-brand" href="#">Granthik AI</a>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarNav">
//                         <ul className="navbar-nav ms-auto">
//                             <li className="nav-item"><a className="nav-link" href="#features">Features</a></li>
//                             <li className="nav-item"><a className="nav-link" href="#demo">Demo</a></li>
//                             <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>

//             {/* Hero Section */}
//             <section className="hero-section text-center text-white d-flex align-items-center">
//                 <div className="container">
//                     <h1 className="display-4 animate__animated animate__fadeInDown">Revolutionize Document Management</h1>
//                     <p className="lead animate__animated animate__fadeInUp">AI-powered NLP tools for smarter document processing.</p>
//                     <a href="#demo" className="btn btn-primary btn-lg animate__animated animate__fadeInUp">Try the Demo</a>
//                 </div>
//             </section>

//             {/* Features Section */}
//             <section id="features" className="py-5">
//                 <div className="container">
//                     <h2 className="text-center mb-5 animate__animated animate__fadeIn">Features</h2>
//                     <div className="row">
//                         <div className="col-md-4 text-center feature-card animate__animated animate__fadeInLeft">
//                             <div className="card h-100 shadow">
//                                 <div className="card-body">
//                                     <i className="fas fa-tags fa-3x mb-3"></i>
//                                     <h4>Automated Classification</h4>
//                                     <p>Automatically categorize documents using advanced NLP algorithms.</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-4 text-center feature-card animate__animated animate__fadeInUp">
//                             <div className="card h-100 shadow">
//                                 <div className="card-body">
//                                     <i className="fas fa-user-tag fa-3x mb-3"></i>
//                                     <h4>Entity Recognition</h4>
//                                     <p>Extract names, dates, locations, and other entities from text.</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-4 text-center feature-card animate__animated animate__fadeInRight">
//                             <div className="card h-100 shadow">
//                                 <div className="card-body">
//                                     <i className="fas fa-project-diagram fa-3x mb-3"></i>
//                                     <h4>Topic Modeling</h4>
//                                     <p>Identify key topics and themes in large document collections.</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Demo Section */}
//             <section id="demo" className="py-5">
//                 <div className="container">
//                     <h2 className="text-center mb-5 animate__animated animate__fadeIn">Try the Demo</h2>
//                     <div className="card shadow animate__animated animate__fadeInUp">
//                         <div className="card-body">
//                             {/* Drag and Drop */}
//                             <div
//                                 ref={dropRef}
//                                 className={`drop-zone ${dragging ? "dragging" : ""}`}
//                                 onDragOver={handleDragOver}
//                                 onDragLeave={handleDragLeave}
//                                 onDrop={handleDrop}
//                             >
//                                 <p>Drag & Drop a file here or click to upload</p>
//                                 <input type="file" id="fileInput" className="form-control" onChange={handleFileChange} />
//                             </div>

//                             {/* Upload Button */}
//                             <button className="btn btn-primary w-100 mt-3" onClick={() => document.getElementById("fileInput").click()}>
//                                 Upload
//                             </button>

//                             {/* API Response Section */}
//                             <div id="results" className="mt-4">
//     {data ? (
//         <>
//             <h4>Results:</h4>
//             <p><strong>Filename:</strong> {data.metadata?.filename || "N/A"}</p>
//             <p><strong>Content Type:</strong> {data.metadata?.content_type || "N/A"}</p>
//             <p><strong>Tags:</strong> {Array.isArray(data.tags) ? data.tags.join(", ") : "No tags available"}</p>
//         </>
//     ) : (
//         <p>No data yet. Upload a file to see results.</p>
//     )}
// </div>

//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Footer */}
//             <footer className="text-center py-3">
//                 <p>&copy; 2025 Granthik AI. All rights reserved.</p>
//             </footer>
//         </div>
//     );
// }

// export default App;

// import React, { useEffect, useState, useRef } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'animate.css/animate.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import './App.css';

// function App() {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [dragging, setDragging] = useState(false);
//     const [selectedFile, setSelectedFile] = useState(null);
//     const dropRef = useRef(null);

//     useEffect(() => {
//         fetch("http://127.0.0.1:8000/")
//             .then(response => response.json())
//             .then(data => {
//                 console.log("Backend Response:", data);
//                 setData(data);
//             })
//             .catch(error => console.error("Error fetching data:", error));
//     }, []);

//     function handleFileUpload(file) {
//         if (!file) {
//             alert("Please select a file first!");
//             return;
//         }

//         setSelectedFile(file); // Save selected file for preview
//         setLoading(true);

//         const formData = new FormData();
//         formData.append("file", file);

//         fetch("http://127.0.0.1:8000/upload/", {
//             method: "POST",
//             body: formData
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log("AI Response:", data);
//             setData(data);
//         })
//         .catch(error => {
//             alert("Error uploading file!");
//             console.error("Upload Error:", error);
//         })
//         .finally(() => {
//             setLoading(false);
//         });
//     }

//     function handleFileChange(event) {
//         const file = event.target.files[0];
//         handleFileUpload(file);
//     }

//     function handleDragOver(event) {
//         event.preventDefault();
//         setDragging(true);
//     }

//     function handleDragLeave() {
//         setDragging(false);
//     }

//     function handleDrop(event) {
//         event.preventDefault();
//         setDragging(false);

//         const file = event.dataTransfer.files[0];
//         if (file) {
//             handleFileUpload(file);
//         }
//     }

//     return (
//         <div className="dark-theme">
//             {/* Navbar */}
//             <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
//                 <div className="container">
//                     <a className="navbar-brand" href="#">Granthik AI</a>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarNav">
//                         <ul className="navbar-nav ms-auto">
//                             <li className="nav-item"><a className="nav-link" href="#features">Features</a></li>
//                             <li className="nav-item"><a className="nav-link" href="#demo">Demo</a></li>
//                             <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>

//             {/* Hero Section */}
//             <section className="hero-section text-center text-white d-flex align-items-center">
//                 <div className="container">
//                     <h1 className="display-4 animate__animated animate__fadeInDown">Revolutionize Document Management</h1>
//                     <p className="lead animate__animated animate__fadeInUp">AI-powered NLP tools for smarter document processing.</p>
//                     <a href="#demo" className="btn btn-primary btn-lg animate__animated animate__fadeInUp">Try the Demo</a>
//                 </div>
//             </section>

//             {/* Features Section */}
//             <section id="features" className="py-5">
//                 <div className="container">
//                     <h2 className="text-center mb-5 animate__animated animate__fadeIn">Features</h2>
//                     <div className="row">
//                         <div className="col-md-4 text-center feature-card animate__animated animate__fadeInLeft">
//                             <div className="card h-100 shadow">
//                                 <div className="card-body">
//                                     <i className="fas fa-tags fa-3x mb-3"></i>
//                                     <h4>Automated Classification</h4>
//                                     <p>Automatically categorize documents using AI-powered NLP models.</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-4 text-center feature-card animate__animated animate__fadeInUp">
//                             <div className="card h-100 shadow">
//                                 <div className="card-body">
//                                     <i className="fas fa-user-tag fa-3x mb-3"></i>
//                                     <h4>Entity Recognition</h4>
//                                     <p>Extract names, dates, locations, and key information from documents.</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-4 text-center feature-card animate__animated animate__fadeInRight">
//                             <div className="card h-100 shadow">
//                                 <div className="card-body">
//                                     <i className="fas fa-project-diagram fa-3x mb-3"></i>
//                                     <h4>Topic Modeling</h4>
//                                     <p>Identify key topics and themes in large document collections.</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Demo Section */}
//             <section id="demo" className="py-5">
//                 <div className="container">
//                     <h2 className="text-center mb-5 animate__animated animate__fadeIn">Try the Demo</h2>
//                     <div className="card shadow animate__animated animate__fadeInUp">
//                         <div className="card-body">
//                             {/* Drag and Drop */}
//                             <div
//                                 ref={dropRef}
//                                 className={`drop-zone ${dragging ? "dragging" : ""}`}
//                                 onDragOver={handleDragOver}
//                                 onDragLeave={handleDragLeave}
//                                 onDrop={handleDrop}
//                             >
//                                 <p>Drag & Drop a file here or click to upload</p>
//                                 <input type="file" id="fileInput" className="form-control" onChange={handleFileChange} />
//                             </div>

//                             {/* Upload Button */}
//                             <button className="btn btn-primary w-100 mt-3" onClick={() => document.getElementById("fileInput").click()}>
//                                 {loading ? "Processing..." : "Upload"}
//                             </button>

//                             {/* File Preview */}
//                             {selectedFile && (
//                                 <div className="mt-3">
//                                     <h5>Selected File:</h5>
//                                     <p>{selectedFile.name}</p>
//                                 </div>
//                             )}

//                             {/* API Response Section */}
//                             <div id="results" className="mt-4">
//                                 {data ? (
//                                     <>
//                                         <h4>Results:</h4>
//                                         <p><strong>Filename:</strong> {data.metadata?.filename || "N/A"}</p>
//                                         <p><strong>Content Type:</strong> {data.metadata?.content_type || "N/A"}</p>
//                                         <p><strong>Tags:</strong> {Array.isArray(data.tags) ? data.tags.join(", ") : "No tags available"}</p>
//                                     </>
//                                 ) : (
//                                     <p>No data yet. Upload a file to see results.</p>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Footer */}
//             <footer className="text-center py-3">
//                 <p>&copy; 2025 Granthik AI. All rights reserved.</p>
//             </footer>
//         </div>
//     );
// }

// export default App;
// import React, { useEffect, useState, useRef } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'animate.css/animate.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import './App.css';

// const BACKEND_URL = "https://914a-34-145-249-28.ngrok-free.app";  // Replace with your actual Colab URL

// function App() {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [dragging, setDragging] = useState(false);
//     const [selectedFile, setSelectedFile] = useState(null);
//     const [uploadedFiles, setUploadedFiles] = useState([]);
//     const dropRef = useRef(null);

//     // Fetch uploaded files from backend
//     function fetchUploadedFiles() {
//         fetch(`${BACKEND_URL}/files/`)
//             .then(response => response.json())
//             .then(files => {
//                 console.log("Uploaded Files:", files);
//                 setUploadedFiles(files);
//             })
//             .catch(error => console.error("Error fetching uploaded files:", error));
//     }

//     // Fetch backend response and uploaded files on page load
//     useEffect(() => {
//         fetch(`${BACKEND_URL}/`)
//             .then(response => response.json())
//             .then(data => {
//                 console.log("Backend Response:", data);
//                 setData(data);
//             })
//             .catch(error => console.error("Error fetching data:", error));

//         fetchUploadedFiles();
//     }, []);

//     // Handle file upload
//     function handleFileUpload(file) {
//         if (!file) {
//             alert("Please select a file first!");
//             return;
//         }

//         setSelectedFile(file);
//         setLoading(true);

//         const formData = new FormData();
//         formData.append("file", file);

//         fetch(`${BACKEND_URL}/upload/`, {
//             method: "POST",
//             body: formData
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log("AI Response:", data);
//             setData(data);
//             fetchUploadedFiles();
//         })
//         .catch(error => {
//             alert("Error uploading file!");
//             console.error("Upload Error:", error);
//         })
//         .finally(() => {
//             setLoading(false);
//         });
//     }

//     function handleFileChange(event) {
//         const file = event.target.files[0];
//         handleFileUpload(file);
//     }

//     function handleDragOver(event) {
//         event.preventDefault();
//         setDragging(true);
//     }

//     function handleDragLeave() {
//         setDragging(false);
//     }

//     function handleDrop(event) {
//         event.preventDefault();
//         setDragging(false);

//         const file = event.dataTransfer.files[0];
//         if (file) {
//             handleFileUpload(file);
//         }
//     }

//     return (
//         <div className="dark-theme">
//             <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
//                 <div className="container">
//                     <a className="navbar-brand" href="#">Granthik AI</a>
//                 </div>
//             </nav>

//             <section className="hero-section text-center text-white d-flex align-items-center">
//                 <div className="container">
//                     <h1 className="display-4">Revolutionize Document Management</h1>
//                     <p className="lead">AI-powered NLP tools for smarter document processing.</p>
//                 </div>
//             </section>

//             <section id="demo" className="py-5">
//                 <div className="container">
//                     <h2 className="text-center mb-5">Try the Demo</h2>
//                     <div className="card shadow">
//                         <div className="card-body">
//                             <div
//                                 ref={dropRef}
//                                 className={`drop-zone ${dragging ? "dragging" : ""}`}
//                                 onDragOver={handleDragOver}
//                                 onDragLeave={handleDragLeave}
//                                 onDrop={handleDrop}
//                             >
//                                 <p>Drag & Drop a file here or click to upload</p>
//                                 <input type="file" id="fileInput" className="form-control" onChange={handleFileChange} />
//                             </div>

//                             <button className="btn btn-primary w-100 mt-3" onClick={() => document.getElementById("fileInput").click()}>
//                                 {loading ? "Processing..." : "Upload"}
//                             </button>

//                             <div id="results" className="mt-4">
//                                 {data ? (
//                                     <>
//                                         <h4>Results:</h4>
//                                         <p><strong>Filename:</strong> {data.metadata?.filename || "N/A"}</p>
//                                         <p><strong>Content Type:</strong> {data.metadata?.content_type || "N/A"}</p>
//                                         <p><strong>Classification:</strong> {data.classification || "N/A"}</p>
//                                         <p><strong>Keywords:</strong> {Array.isArray(data.keywords) ? data.keywords.join(", ") : "No keywords extracted"}</p>
//                                     </>
//                                 ) : (
//                                     <p>No data yet. Upload a file to see results.</p>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section id="uploaded-files" className="py-5">
//                 <div className="container">
//                     <h2 className="text-center mb-5">Uploaded Files</h2>
//                     <div className="list-group">
//                         {uploadedFiles.length > 0 ? (
//                             uploadedFiles.map((file, index) => (
//                                 <div key={index} className="list-group-item">
//                                     <p><strong>Filename:</strong> {file.filename}</p>
//                                     <p><strong>Classification:</strong> {file.classification}</p>
//                                 </div>
//                             ))
//                         ) : (
//                             <p className="text-center">No files uploaded yet.</p>
//                         )}
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default App;

import React, { useEffect, useState, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'animate.css/animate.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

function App() {
    // const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(false);
    // const [dragging, setDragging] = useState(false);
    // const [selectedFile, setSelectedFile] = useState(null);
    // const dropRef = useRef(null);
    // const [folders, setFolders] = useState([]);

    // useEffect(() => {
    //     fetch("https://1720-34-145-249-28.ngrok-free.app/api/data")
    //         .then(response => response.json())
    //         .then(data => {
    //             setData(data);
    //         })
    //         .catch(error => console.error("Error fetching data:", error));

    //     fetchFolders();
    // }, []);

    // function fetchFolders() {
    //     fetch("https://1720-34-145-249-28.ngrok-free.app/api/data/folders/")
    //         .then(response => response.json())
    //         .then(data => setFolders(data))
    //         .catch(error => console.error("Error fetching folders:", error));
    // }

    // function handleFileUpload(file) {
    //     if (!file) {
    //         alert("Please select a file first!");
    //         return;
    //     }

    //     setSelectedFile(file);
    //     setLoading(true);

    //     const formData = new FormData();
    //     formData.append("file", file);

    //     fetch("https://1720-34-145-249-28.ngrok-free.app/api/upload/", {
    //         method: "POST",
    //         body: formData
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         setData(data);
    //         fetchFolders(); // Reload folders after upload
    //     })
    //     .catch(error => {
    //         alert("Error uploading file!");
    //     })
    //     .finally(() => {
    //         setLoading(false);
    //     });
    // }

    // function handleFileChange(event) {
    //     const file = event.target.files[0];
    //     handleFileUpload(file);
    // }

    // function handleDragOver(event) {
    //     event.preventDefault();
    //     setDragging(true);
    // }

    // function handleDragLeave() {
    //     setDragging(false);
    // }

    // function handleDrop(event) {
    //     event.preventDefault();
    //     setDragging(false);

    //     const file = event.dataTransfer.files[0];
    //     if (file) {
    //         handleFileUpload(file);
    //     }
    // }

    // return (
    //     <div className="dark-theme">
    //         <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    //             <div className="container">
    //                 <a className="navbar-brand" href="#">Granthik AI</a>
    //             </div>
    //         </nav>

    //         <section className="hero-section text-center text-white d-flex align-items-center">
    //             <div className="container">
    //                 <h1 className="display-4">Revolutionize Document Management</h1>
    //                 <p className="lead">AI-powered NLP tools for smarter document processing.</p>
    //                 <a href="#demo" className="btn btn-primary btn-lg">Try the Demo</a>
    //             </div>
    //         </section>

    //         <section id="demo" className="py-5">
    //             <div className="container">
    //                 <h2 className="text-center mb-5">Try the Demo</h2>
    //                 <div className="card shadow">
    //                     <div className="card-body">
    //                         <div
    //                             ref={dropRef}
    //                             className={`drop-zone ${dragging ? "dragging" : ""}`}
    //                             onDragOver={handleDragOver}
    //                             onDragLeave={handleDragLeave}
    //                             onDrop={handleDrop}
    //                         >
    //                             <p>Drag & Drop a file here or click to upload</p>
    //                             <input type="file" id="fileInput" className="form-control" onChange={handleFileChange} />
    //                         </div>
    //                         <button className="btn btn-primary w-100 mt-3" onClick={() => document.getElementById("fileInput").click()}>
    //                             {loading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : "Upload"}
    //                         </button>

    //                         {selectedFile && (
    //                             <div className="mt-3">
    //                                 <h5>Selected File:</h5>
    //                                 <p>{selectedFile.name}</p>
    //                             </div>
    //                         )}

    //                         <div id="results" className="mt-4">
    //                             {data ? (
    //                                 <>
    //                                     <h4>Results:</h4>
    //                                     <p><strong>Filename:</strong> {data.metadata?.filename || "N/A"}</p>
    //                                     <p><strong>Content Type:</strong> {data.metadata?.content_type || "N/A"}</p>
    //                                 </>
    //                             ) : (
    //                                 <p>No data yet. Upload a file to see results.</p>
    //                             )}
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </section>

    //         <section id="folderSection" className="py-5">
    //             <h3>Uploaded Folders</h3>
    //             <div className="folder-list">
    //                 {folders.map(folder => (
    //                     <div className="folder-item" key={folder.id}>
    //                         <h5>{folder.name}</h5>
    //                         <p>{folder.description}</p>
    //                         <button className="btn-view">View Folder</button>
    //                     </div>
    //                 ))}
    //             </div>
    //         </section>
    //     </div>
    // );
    return (
        <div>
            <h1>Hello, World!</h1>  {/* Temporary test */}
        </div>
    );
}

export default App;
