import { Link } from "react-router-dom";
const Book = (props) => {
    return (

            <div className='card-container'>
                <img
                    src='https://images.unsplash.com/photo-1495446815901-a7297e633e8d'
                    alt='Books'
                    height='200'
                />
                <div className='desc'>
                    {/* <button>XXXX</button> */}
                    <h2>
                        <Link to={'/show-book/' + props.book._id}>{props.book.title}</Link>
                    </h2>
                    <h3>{props.book.author}</h3>
                    <p>{props.book.description} <div align="right"><button 
                        onClick={() => {
                            props.deleteBook(props.book._id);
                        }}
                    >X</button> </div></p>
                    
                    
                </div>
            </div>

    )
}

export default Book;