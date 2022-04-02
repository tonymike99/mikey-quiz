import { Slide, Fade, Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { slideshowImages } from "../data/index";

function Slideshow() {
  const properties = {
    duration: 1000,
  };

  return (
    <>
      <div className="slide-container">
        <Zoom scale={0.4} {...properties}>
          {slideshowImages.map((slideshowImage, index) => (
            <img
              key={index}
              style={{ width: "100%" }}
              src={slideshowImage.url}
            />
          ))}
        </Zoom>
      </div>
    </>
  );
}

export { Slideshow };
