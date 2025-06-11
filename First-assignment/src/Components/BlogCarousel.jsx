import React, { useState, useEffect } from 'react';
import './BlogCarousel.css';

const BlogCarousel = () => {
  const blogs = [
    {
      title: '1',
      description: 'Learn how AI-Augmented RPA leverages Machine Learning to boost efficiency and innovation in automation.',
      image: 'https://imgs.search.brave.com/eut7FrXlDo2vX5pEuTh8WmmpWp4hdAlCzfzCbSNjvMA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9iL2I2L0lt/YWdlX2NyZWF0ZWRf/d2l0aF9hX21vYmls/ZV9waG9uZS5wbmcv/OTYwcHgtSW1hZ2Vf/Y3JlYXRlZF93aXRo/X2FfbW9iaWxlX3Bo/b25lLnBuZw',
    },
    {
      title: '2',
      description: 'Learn how AI-Augmented RPA leverages Machine Learning to boost efficiency and innovation in automation.',
      image: 'https://imgs.search.brave.com/eut7FrXlDo2vX5pEuTh8WmmpWp4hdAlCzfzCbSNjvMA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9iL2I2L0lt/YWdlX2NyZWF0ZWRf/d2l0aF9hX21vYmls/ZV9waG9uZS5wbmcv/OTYwcHgtSW1hZ2Vf/Y3JlYXRlZF93aXRo/X2FfbW9iaWxlX3Bo/b25lLnBuZw',
    },
    {
      title: '3',
      description: 'Learn how AI-Augmented RPA leverages Machine Learning to boost efficiency and innovation in automation.',
      image: 'https://imgs.search.brave.com/eut7FrXlDo2vX5pEuTh8WmmpWp4hdAlCzfzCbSNjvMA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9iL2I2L0lt/YWdlX2NyZWF0ZWRf/d2l0aF9hX21vYmls/ZV9waG9uZS5wbmcv/OTYwcHgtSW1hZ2Vf/Y3JlYXRlZF93aXRo/X2FfbW9iaWxlX3Bo/b25lLnBuZw',
    },
    {
      title: '4',
      description: 'Learn how AI-Augmented RPA leverages Machine Learning to boost efficiency and innovation in automation.',
      image: 'https://imgs.search.brave.com/eut7FrXlDo2vX5pEuTh8WmmpWp4hdAlCzfzCbSNjvMA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9iL2I2L0lt/YWdlX2NyZWF0ZWRf/d2l0aF9hX21vYmls/ZV9waG9uZS5wbmcv/OTYwcHgtSW1hZ2Vf/Y3JlYXRlZF93aXRo/X2FfbW9iaWxlX3Bo/b25lLnBuZw',
    },
    {
      title: '5',
      description: 'Learn how AI-Augmented RPA leverages Machine Learning to boost efficiency and innovation in automation.',
      image: 'https://imgs.search.brave.com/eut7FrXlDo2vX5pEuTh8WmmpWp4hdAlCzfzCbSNjvMA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9iL2I2L0lt/YWdlX2NyZWF0ZWRf/d2l0aF9hX21vYmls/ZV9waG9uZS5wbmcv/OTYwcHgtSW1hZ2Vf/Y3JlYXRlZF93aXRo/X2FfbW9iaWxlX3Bo/b25lLnBuZw',
    },
    {
      title: '6',
      description: 'Learn how AI-Augmented RPA leverages Machine Learning to boost efficiency and innovation in automation.',
      image: 'https://imgs.search.brave.com/eut7FrXlDo2vX5pEuTh8WmmpWp4hdAlCzfzCbSNjvMA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9iL2I2L0lt/YWdlX2NyZWF0ZWRf/d2l0aF9hX21vYmls/ZV9waG9uZS5wbmcv/OTYwcHgtSW1hZ2Vf/Y3JlYXRlZF93aXRo/X2FfbW9iaWxlX3Bo/b25lLnBuZw',
    },
    
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 3;

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % blogs.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + blogs.length) % blogs.length);
  };

  const getVisibleBlogs = () => {
    const result = [];
    for (let i = 0; i < visibleCards; i++) {
      result.push(blogs[(startIndex + i) % blogs.length]);
    }
    return result;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <h1>Latest Blogs</h1>
      <div className="carousel-wrapper">
        <button className="carousel-arrow left-arrow" onClick={prevSlide}>←</button>
        <div className="carousel-track">
          {getVisibleBlogs().map((blog, index) => (
            <div key={index} className="carousel-card">
              <div className="card-image">
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className="card-content">
                <h2>{blog.title}</h2>
                <p>{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-arrow right-arrow" onClick={nextSlide}>→</button>
      </div>
    </div>
  );
};

export default BlogCarousel;
