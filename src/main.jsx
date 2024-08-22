import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App.jsx'
import './index.css';
import { Underlay, Overlay  } from "./dirty-export.jsx";
import { Header } from './header.jsx';

createRoot(document.getElementById("root")).render(
  <>
    <Underlay />
    <Header />
    <Suspense fallback={null}>
      <App />
    </Suspense>
    <Overlay />
  </>
);
