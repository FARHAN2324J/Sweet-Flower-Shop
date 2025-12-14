import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const Home = lazy(() => import("../pages/Home/Home"));
const Gallery = lazy(() => import("../pages/Gallery/Gallery"));

export const AppRoutes = () => {
  return (
    // <Suspense fallback={<Spinner />}>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Route>
      <Route path="*" element={<div>Page Not Found !</div>} />
    </Routes>
    // </Suspense>
  );
};
