import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PageHeading } from 'components/PageHeading/PageHeading';
import * as bookShelfAPI from '../services/bookshelf-api';

export const BookDetailsView = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    bookShelfAPI.fetchBookById(bookId).then(setBook);
  }, [bookId]);

  return (
    <>
      <PageHeading>Книга {bookId}</PageHeading>
      {book && (
        <>
          <img src={book.imgUrl} alt={book.title} />
          <h2>{book.title}</h2>
          <p>Автор: {book.author.name}</p>
          <p>{book.descr}</p>
        </>
      )}
    </>
  );
};
