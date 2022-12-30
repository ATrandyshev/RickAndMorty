import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./store/sotre";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { CharactersPage } from "./pages/CharactersPage/CharactersPage";
import { CharacterInfoPage } from "./pages/CharacterInfoPage/CharacterInfoPage";
import { LocationsPage } from "./pages/LocationsPage/LocationsPage";
import { EpisodesPage } from "./pages/EpisodesPage/EpisodesPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { Layout } from "./components/Layout/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<CharactersPage />} />
          <Route path="/character/:id" element={<CharacterInfoPage />} />

          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/locations/:id" element={<CharacterInfoPage />} />

          <Route path="/episodes" element={<EpisodesPage />} />
          <Route path="/episodes/:id" element={<CharacterInfoPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </Provider>
);
