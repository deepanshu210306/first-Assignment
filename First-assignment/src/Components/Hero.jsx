import "./Hero.css";
import headerClip from "./header_clip.mp4";

const Hero = () => {
  return (
    <div className="hero">
      <video
        autoPlay
        muted
        loop
        className="hero-video"
      >
        <source src={headerClip} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1>Your Dream Study Abroad Journey Starts Here</h1>
        <h2>Expert IELTS Training & Visa Guidance for Top Universities in USA, UK, Canada, Europe, Germany & Australia</h2>
        <p className="tagline">4500+ Students Admitted | Free Counselling | 100% Visa Support</p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Book Free Counselling</button>
          <button className="btn btn-secondary">Check Scholarship Eligibility</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;