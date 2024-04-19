import { useEffect, useState } from 'react';
import '../styles.css';
import Book from './Book'
import axios from 'axios';
import { Link } from 'react-router-dom';

const BookList = () => {
    const [books, setBooks] = useState([]);
    // get thedata
    useEffect(() => {
        axios
            .get('http://localhost:5000')
            .then((res) => {
                setBooks(res.data)
                console.log(res.data);
            })
            .catch((err) => {
                console.log("Not getting data. " + err)
            });

    }, []);



    const handleDelete = (id) => {
        axios
            .delete('http://localhost:5000/' + id)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log("Delete error. " + err)
            });

        setBooks(books.filter((each) => each._id !== id));
    }

    const bookList =
        books.length === 0
            ? 'no book'
            : books.map((each, i) => (

                <Book id={each._id} key={i} book={each} deleteBook={handleDelete} />

            ))

    return (
        <div className="BookList">
            <div className="col-md-12">
          <br />
          <h2 className="display-4 text-center">Books List</h2>
          <p className="text-center ">{books.length}</p>
        </div>
        <div className="col-md-11">
          <Link className="btn btn-info float-right" to="/create-book">
            + Add New Book
            </Link>
          <br /><br />
          <hr />
        </div>
             <div className="list">
                {bookList}
             </div>
      </div>
    )
};

export default BookList;
