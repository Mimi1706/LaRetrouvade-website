import "./App.css"

import Home from "./pages/Home"

import Header from "./components/Header/Header"

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<Home />}></Route>
          <Route
            path="/LaRetrouvade-Website/"
            element={<Navigate to="/accueil" replace />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
