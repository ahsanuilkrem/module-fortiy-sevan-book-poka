import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../utility/addToDB';
import Book from '../Book/Book';

const ListedBooks = () => {

    const [readList, setReadList] = useState([]);

    const allBooks = useLoaderData();


    useEffect( () => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        

        // not the worst way
        console.log(storedReadList, storedReadListInt, allBooks);

        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));

        setReadList(readBookList);

    })


    return (
        <div>
            <h3 className="text-3xl my-8">Listed Books</h3>

            <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2 className='text-2xl'>Books I list: {readList.length}</h2>
      <div>
        {
            readList.map(book => <Book key={book.bookId} book={book}></Book>)
        }
      </div>
    </TabPanel>
    <TabPanel>
      <h2 className='text-2xl'> My Wish list</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ListedBooks;