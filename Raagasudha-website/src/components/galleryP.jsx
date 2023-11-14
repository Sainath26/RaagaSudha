// Plan for gallery form now
// No need of props as of now, just use classic html tag with for loop for dymanic rendering
// and write a js script to get the names of all the images and store it in an array
import "../style/main.css";
import "../style/fonts.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Gallery() {
  const imgUrl = new URL("../assets/images/homeimg/1.jpg", import.meta.url)
    .href;
  const imgUr2 = new URL("../assets/images/homeimg/2.jpg", import.meta.url)
    .href;
  const imgUr3 = new URL("../assets/images/homeimg/4.jpg", import.meta.url)
    .href;
  const imgUr4 = new URL("../assets/images/homeimg/5.jpg", import.meta.url)
    .href;
  const imgUr5 = new URL(
    "../assets/images/homeimg/_DSC1013.JPG",
    import.meta.url
  ).href;
  const imgUr6 = new URL(
    "../assets/images/homeimg/_DSC1040.JPG",
    import.meta.url
  ).href;
  const imgUr7 = new URL(
    "../assets/images/homeimg/_DSC1208.JPG",
    import.meta.url
  ).href;
  const imgUr8 = new URL(
    "../assets/images/homeimg/_DSC1254.JPG",
    import.meta.url
  ).href;
  const imgUr9 = new URL(
    "../assets/images/homeimg/_DSC1279.JPG",
    import.meta.url
  ).href;
  const imgUr10 = new URL(
    "../assets/images/homeimg/_DSC1438.JPG",
    import.meta.url
  ).href;
  const imgUr11 = new URL(
    "../assets/images/homeimg/_DSC1562.JPG",
    import.meta.url
  ).href;

  return (
    <div className="Gallery">
      <Carousel autoPlay={true} infiniteLoop={true}>
        <div>
          <img src={imgUr11} />
          <p className="legend">Image 1</p>
        </div>
        <div>
          <img src={imgUr10} />
          <p className="legend">Image 2</p>
        </div>
        <div>
          <img src={imgUr9} />
          <p className="legend">Image 3</p>
        </div>
        <div>
          <img src={imgUr8} />
          <p className="legend">Image 4</p>
        </div>
        <div>
          <img src={imgUr7} />
          <p className="legend">Image 5</p>
        </div>
        <div>
          <img src={imgUr7} />
          <p className="legend">Image 6</p>
        </div>
        <div>
          <img src={imgUr6} />
          <p className="legend">Image 7</p>
        </div>
        <div>
          <img src={imgUr5} />
          <p className="legend">Image 8</p>
        </div>
        <div>
          <img src={imgUr4} />
          <p className="legend">Image 9</p>
        </div>
        <div>
          <img src={imgUr3} />
          <p className="legend">Image 10</p>
        </div>
        <div>
          <img src={imgUr2} />
          <p className="legend">Image 10</p>
        </div>
        <div>
          <img src={imgUrl} />
          <p className="legend">Image 11</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Gallery;
