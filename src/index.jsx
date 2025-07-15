import ReactDOM from "react-dom/client";
import React from 'react';
import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
//with jsx
//ReactDOM.createRoot(entryPoint).render(<App />);
//using standard javascripts features
ReactDOM.createRoot(entryPoint).render(React.createElement(App));
