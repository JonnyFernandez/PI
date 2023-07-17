import { Admin, CreateForm, Detail, Favorite, Home, LandinPage,  UpdateForm } from './components/views';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {

  

  return (
    <div className="App">

      <div>

     
        <Routes>

          <Route path='/' element={<LandinPage />} />
          
          <Route path='/home' element={<Home />} />
          
          <Route path='/admin' element={<Admin />} />
          
          <Route path='/favorite' element={<Favorite />} />
          
          <Route path='/home/:id' element={<Detail />} />
          
          <Route path='/admin/add' element={<CreateForm />} />
          
          {/* <Route path='/update' element={<UpdateForm />} /> */}
          



        </Routes>





      </div>

    </div>
  );
}

export default App;
