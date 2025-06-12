import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './ProgramsCarousel.css';

const ProgramsCarousel = () => {
  const programs = [
    {
      id: 1,
      program1: {
        name: 'Popular Program 1',
        school: 'University of Florence',
        fees: '€12,000/year',
        scholarship: 'Up to €5,000',
      },
      branch: {
        name: 'Branch',
        description: 'Arts & Humanities',
      },
      program2: {
        name: 'Popular Program 2',
        school: 'Sorbonne University',
        fees: '€15,000/year',
        scholarship: 'Up to €7,000',
      },
    },
    {
      id: 2,
      program1: {
        name: 'Popular Program 1',
        school: 'Trinity College Dublin',
        fees: '€18,000/year',
        scholarship: 'Up to €6,000',
      },
      branch: {
        name: 'Branch',
        description: 'Business & Management',
      },
      program2: {
        name: 'Popular Program 2',
        school: 'University of Barcelona',
        fees: '€10,000/year',
        scholarship: 'Up to €4,000',
      },
    },
  ];

  return (
    <div className="programs-carousel-container">
      <h1>Popular Programs</h1>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        className="programs-swiper"
      >
        {programs.map((programSet) => (
          <SwiperSlide key={programSet.id}>
            <div className="program-card">
              <div className="program-section program-left">
                <h3>{programSet.program1.name}</h3>
                <p><strong>Name of the School:</strong> {programSet.program1.school}</p>
                <p><strong>Fees:</strong> {programSet.program1.fees}</p>
                <p><strong>Scholarship:</strong> {programSet.program1.scholarship}</p>
              </div>
              <div className="program-section program-divider">
                <h3>{programSet.branch.name}</h3>
                <p>{programSet.branch.description}</p>
              </div>
              <div className="program-section program-right">
                <h3>{programSet.program2.name}</h3>
                <p><strong>Name of the School:</strong> {programSet.program2.school}</p>
                <p><strong>Fees:</strong> {programSet.program2.fees}</p>
                <p><strong>Scholarship:</strong> {programSet.program2.scholarship}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation buttons */}
        <div className="swiper-button-prev custom-arrow"></div>
        <div className="swiper-button-next custom-arrow"></div>
      </Swiper>
    </div>
  );
};

export default ProgramsCarousel;