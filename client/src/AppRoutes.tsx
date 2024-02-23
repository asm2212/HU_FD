import { Navigate, Route, Routes } from "react-router-dom"

const AppRoutes = () => {
      return (   
        <Routes>
            <Route path="/" element={<span>home page</span>} />
            <Route path="/profile" element={<span>profile page</span>} />
            <Route path="*" element={<Navigate to = "/" />} />
       </Routes>
      );''
};

export default AppRoutes;
