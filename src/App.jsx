import { Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";

function App() {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
