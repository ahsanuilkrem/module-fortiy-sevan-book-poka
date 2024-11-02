import React from 'react';
import bannerImg from '../../assets/books.jpg/books.jpg';

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen border-2 border-sky-300 my-10">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bannerImg}
      className=" rounded-lg  " />
    <div>
      <h1 className="text-5xl font-bold">Books to foreshen up your bookshelf</h1>
      
      <button className="btn bg-green-600 my-8 rounded-md text-white">view the list</button>
    </div>
  </div>
</div>
    );
};

export default Banner;