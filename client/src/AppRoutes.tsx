import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/layout";

const AppRoutes = () => {
      return (   
        <Routes>
            <Route path="/" element={<Layout>home page</Layout>} />
            <Route path="/profile" element={<span>profile page</span>} />
            <Route path="*" element={<Navigate to = "/" />} />
       </Routes>
      );''
};

export default AppRoutes;
