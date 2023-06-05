import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { publicRoutes } from '../src/routes/index.js'

import DefaultLayout from '../src/layout/DefaultLayout/index.js'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {
            publicRoutes.map((route, index) => {
              const Page = route.component
              const Layout = route.layout || DefaultLayout;
              return (<Route key={index}
                path={route.path}
                element={<Layout>
                  <Page></Page>
                </Layout>
                }>
              </Route>)
            })
          }
        </Routes>
      </div>
    </Router>

  );
}

export default App;
