import React from 'react';
import './Global.css';

const Global = () => {
  const locations = [
    { name: 'FLORENCE, ITALY', image: 'https://imgs.search.brave.com/eut7FrXlDo2vX5pEuTh8WmmpWp4hdAlCzfzCbSNjvMA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9iL2I2L0lt/YWdlX2NyZWF0ZWRf/d2l0aF9hX21vYmls/ZV9waG9uZS5wbmcv/OTYwcHgtSW1hZ2Vf/Y3JlYXRlZF93aXRo/X2FfbW9iaWxlX3Bo/b25lLnBuZw' },
    { name: 'PARIS, FRANCE', image: 'https://imgs.search.brave.com/eut7FrXlDo2vX5pEuTh8WmmpWp4hdAlCzfzCbSNjvMA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9iL2I2L0lt/YWdlX2NyZWF0ZWRf/d2l0aF9hX21vYmls/ZV9waG9uZS5wbmcv/OTYwcHgtSW1hZ2Vf/Y3JlYXRlZF93aXRo/X2FfbW9iaWxlX3Bo/b25lLnBuZw' },
    { name: 'TBILISI, GEORGIA', image: 'https://imgs.search.brave.com/eut7FrXlDo2vX5pEuTh8WmmpWp4hdAlCzfzCbSNjvMA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9iL2I2L0lt/YWdlX2NyZWF0ZWRf/d2l0aF9hX21vYmls/ZV9waG9uZS5wbmcv/OTYwcHgtSW1hZ2Vf/Y3JlYXRlZF93aXRo/X2FfbW9iaWxlX3Bo/b25lLnBuZw' },
    { name: 'DELHI, INDIA', image: 'https://imgs.search.brave.com/eut7FrXlDo2vX5pEuTh8WmmpWp4hdAlCzfzCbSNjvMA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9iL2I2L0lt/YWdlX2NyZWF0ZWRf/d2l0aF9hX21vYmls/ZV9waG9uZS5wbmcv/OTYwcHgtSW1hZ2Vf/Y3JlYXRlZF93aXRo/X2FfbW9iaWxlX3Bo/b25lLnBuZw' },
    { name: 'DUBAI, UAE', image: 'https://imgs.search.brave.com/eut7FrXlDo2vX5pEuTh8WmmpWp4hdAlCzfzCbSNjvMA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9iL2I2L0lt/YWdlX2NyZWF0ZWRf/d2l0aF9hX21vYmls/ZV9waG9uZS5wbmcv/OTYwcHgtSW1hZ2Vf/Y3JlYXRlZF93aXRo/X2FfbW9iaWxlX3Bo/b25lLnBuZw' },
  ];

  return (
    <div className="global-presence">
      <h2>Global Presence</h2>
      <div className="location-cards">
        {locations.map((location, index) => (
          <div key={index} className="location-card">
            <div className="location-image" style={{ backgroundImage: `url(${location.image})` }}></div>
            <p className="location-name">{location.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Global;