
import BookSingleCard from './bookSingleCard';



// eslint-disable-next-line react/prop-types
const BookCard=({books})=>{
    return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      
        {
        // eslint-disable-next-line react/prop-types
        books.map(book=>{
        return(
         <BookSingleCard key={book._id} book={book} />
        )
        })}
    </div>
    )
}
export default BookCard