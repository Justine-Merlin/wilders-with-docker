import { Route, Routes } from 'react-router-dom';
import AddWilderForm from './components/NewWilderForm/AddWilderForm';
import ScoresPage from './components/ScoresSection/ScoresPage';
import WilderPage from './components/WilderPage/WilderPage';
import WildersList from './components/WildersListSection/WildersList';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<WildersList />} />
          <Route path='/add-wilder' element={<AddWilderForm />} />
          <Route path='/scores' element={<ScoresPage />} />
          <Route path='/wilder/:id' element={<WilderPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
