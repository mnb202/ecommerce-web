import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {routes} from './routes';
import DefaultLayout from './components/DefaultLayout/DefaultLayout';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page
            const Layout =route.isShowHeader ? DefaultLayout : Fragment

            return (
              <Route path={route.path} element={
                <Layout>
                  <Page/>
                </Layout>
              } />
            )
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
