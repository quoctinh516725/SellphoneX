import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import routes from "./routes/routes";
import ScrollToTop from "./components/ScrollToTop";
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Route Layout */}
        {routes.map((route, index) => {
          if (route.children) {
            const Layout = route.layout || Fragment;
            return (
              <Route key={index} path={route.path} element={<Layout />}>
                {route.children.map((childRoute, childIndex) => {
                  const Child = childRoute.component;
                  return (
                    <Route
                      key={childIndex}
                      path={childRoute.path}
                      element={<Child />}
                    />
                  );
                })}
              </Route>
            );
          }

          const Page = route.component;
          const Layout = route.isDefault ? DefaultLayout : Fragment;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
