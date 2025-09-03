import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import routes from "./routes/routes";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<DefaultLayout />}>
          {routes.map((route, index) => {
            const Page = route.component;
            return (
              <Route key={index} path={route.path} element={<Page />}></Route>
            );
          })}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
