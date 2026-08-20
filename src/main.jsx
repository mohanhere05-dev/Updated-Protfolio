import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3000,
        style: {
          background: "#0b0d20",
          color: "var(--text-primary)",
          border: "1px solid rgba(139, 92, 246, 0.5)",
          borderRadius: "10px",
        },
      }}
    />
  </StrictMode>,
)
