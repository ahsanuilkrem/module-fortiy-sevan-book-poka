import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredreadList } from "../utility/addToDB";

;

const BookDetail = () => {

    const {bookId} = useParams();
    const id = parseInt(bookId);

    const data = useLoaderData();

    const book = data.find(book => book.bookId === id)
    
    const {bookId: currentBookId, image} = book;

    const handleMarkAsRead = (id) => {

      addToStoredreadList(id);

    }

    return (

        <div className="card card-side bg-base-100 p-4 my-8">
  <figure>
    <img
      src={image}
      className="w-52 p-5 rounded-lg"
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{currentBookId}</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-outline btn-accent">Mark as Read</button>
      <button className="btn btn-accent">Add to Wishlist</button>
    </div>
  </div>
</div>
    );
};

export default BookDetail;