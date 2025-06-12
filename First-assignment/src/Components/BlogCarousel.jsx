import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './BlogCarousel.css';

const BlogCarousel = () => {
  const cards = [
    {
      id: 1,
      title: "Card 1",
      content: "This is the first card.",
      image: "https://imgs.search.brave.com/eut7FrXlDo2vX5pEuTh8WmmpWp4hdAlCzfzCbSNjvMA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9iL2I2L0lt/YWdlX2NyZWF0ZWRf/d2l0aF9hX21vYmls/ZV9waG9uZS5wbmcv/OTYwcHgtSW1hZ2Vf/Y3JlYXRlZF93aXRo/X2FfbW9iaWxlX3Bo/b25lLnBuZw",
      link: "https://example.com/card1",
    },
     {
      id: 1,
      title: "Card 1",
      content: "This is the first card.",
      image: "https://imgs.search.brave.com/eut7FrXlDo2vX5pEuTh8WmmpWp4hdAlCzfzCbSNjvMA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9iL2I2L0lt/YWdlX2NyZWF0ZWRf/d2l0aF9hX21vYmls/ZV9waG9uZS5wbmcv/OTYwcHgtSW1hZ2Vf/Y3JlYXRlZF93aXRo/X2FfbW9iaWxlX3Bo/b25lLnBuZw",
      link: "https://example.com/card1",
    }, {
      id: 1,
      title: "Card 1",
      content: "This is the first card.",
      image: "https://imgs.search.brave.com/eut7FrXlDo2vX5pEuTh8WmmpWp4hdAlCzfzCbSNjvMA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9iL2I2L0lt/YWdlX2NyZWF0ZWRf/d2l0aF9hX21vYmls/ZV9waG9uZS5wbmcv/OTYwcHgtSW1hZ2Vf/Y3JlYXRlZF93aXRo/X2FfbW9iaWxlX3Bo/b25lLnBuZw",
      link: "https://example.com/card1",
    }, {
      id: 1,
      title: "Card 1",
      content: "This is the first card.",
      image: "https://imgs.search.brave.com/eut7FrXlDo2vX5pEuTh8WmmpWp4hdAlCzfzCbSNjvMA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9iL2I2L0lt/YWdlX2NyZWF0ZWRf/d2l0aF9hX21vYmls/ZV9waG9uZS5wbmcv/OTYwcHgtSW1hZ2Vf/Y3JlYXRlZF93aXRo/X2FfbW9iaWxlX3Bo/b25lLnBuZw",
      link: "https://example.com/card1",
    }, {
      id: 1,
      title: "Card 1",
      content: "This is the first card.",
      image: "https://imgs.search.brave.com/eut7FrXlDo2vX5pEuTh8WmmpWp4hdAlCzfzCbSNjvMA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9iL2I2L0lt/YWdlX2NyZWF0ZWRf/d2l0aF9hX21vYmls/ZV9waG9uZS5wbmcv/OTYwcHgtSW1hZ2Vf/Y3JlYXRlZF93aXRo/X2FfbW9iaWxlX3Bo/b25lLnBuZw",
      link: "https://example.com/card1",
    },
  ];

 return (
    <div className="carousel-container">
      <h1>Blogs</h1>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        className="blog-swiper"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <a href={card.link} target="_blank" rel="noopener noreferrer" className="carousel-card-link">
              <div className="carousel-card">
                <img
                  src={card.image}
                  alt={card.title}
                  className="carousel-card-image"
                />
                <div className="carousel-card-content">
                  <h3>{card.title}</h3>
                  <p>{card.content}</p>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}

        {/* Navigation buttons */}
        <div className="swiper-button-prev custom-arrow"></div>
        <div className="swiper-button-next custom-arrow"></div>
      </Swiper>
    </div>
  );
};

export default BlogCarousel;