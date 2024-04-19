import logo from './logo.svg';
import './styles.css'
import BookList from './Components/ShowBook.js';
import AddBook from './Components/AddBook.js'
import axios from 'axios';
import { Routes, Route } from "react-router-dom";
axios.defaults.baseURL = "http://localhost:5000"
function App() {

    return (
      <div className="BookList">
        <Routes>
          <Route path='/' element={<BookList />} />
          <Route path='/create-book' element={<AddBook />} />
        </Routes>
      </div>
    );
}

export default App;
