import React from "react";
import "./VideoSection.css";

const VideoSection = () => {
  return (
    <div className="wavy-section">
      {/* Wavy Top SVG */}
      <svg className="wave-top" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path
          className="wave-path"
          
        />
      </svg>

      {/* Video Container */}
      <div className="video-container">
        <img
          src="http://www.pixelstalk.net/wp-content/uploads/2016/06/Color-Wallpaper-HD-Pictures-download.jpg"
          alt="Background"
          className="background-image"
        />

        <div className="video-overlay">
          <div className="header">
            <img
              src="https://www.drunkelephant.com/cdn/shop/files/trunk-lid_200x200.png"
              alt="Logo"
              className="logo"
            />
            <div>
              <h2 className="title">DE.COM</h2>
              <p className="subtitle">Drunk Elephant Skincare</p>
            </div>
          </div>

          <div className="video-box">
  <div className="video-blur-bg" />
  <iframe
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID?enablejsapi=1&modestbranding=1&rel=0&showinfo=0&color=white&transparent=1"
  title="YouTube video"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
</div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
