import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {" "}
    {/* strictmode => react render tout les composants 2 fois pour détecter les erreurs de composants impures => composant qui ne fait pas la mm chose a chaque fois qu'on l'appel */}
    <App />
  </React.StrictMode>
);
