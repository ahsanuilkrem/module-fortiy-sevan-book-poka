import { Link } from "react-router-dom";


const Book = ({book}) => {
    const {bookId, image, bookName, author, tags,category} = book;
    return (
        <div className="card bg-base-100 w-96 shadow-xl p-6">
        <figure className="bg-slate-200 py-8 rounded-2xl">
          <img
            src={image}
            className="h-[166px]"
            alt={bookName} />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-4">
          {
                tags.map((tag, index) => <button
                  key={index}
                 class="btn btn-md bg-stone-200 text-green-500 text-base">{tag}</button>)
            }
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>By:{author}</p>
          <div className="border-t-2 border-dashed"></div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            <div className="flex gap-2">
              <div>
                <Link to={`/books/${bookId}`}><button>Details</button></Link>
              </div>
               <div className="rating gap-1">
                   <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" />
                     <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
                  </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Book;