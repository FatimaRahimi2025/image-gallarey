
import { useEffect, useState } from "react";
import Imagescard from "./Compponents/Imagescard";
import ImagesSearch from "./Compponents/ImageSreach";


function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState(); 

  useEffect(() => {
  const API_KEY = import.meta.env.VITE_PIXABAY_API_KEY;

  fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${term || "flowers"}&image_type=photo&pretty=true`)
    .then((res) => res.json())
    .then((data) => {
      console.log("Pixabay data:", data.this);
      setImages(data.hits); 
      setIsLoading(false);
    })
     .catch((err) => {
        console.error("Fetch error:", err);
        setIsLoading(false);
      });
}, [term]);

  return(
    <div className="Contianer mx-auto">
      <ImagesSearch  searchText={(text) => setTerm(text)}/>
      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
      ):  images.length > 0 ? (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <Imagescard key={image.id} image={image} />
          ))}
        </div>
      ) : (
        <p>No images found.</p>
      )};
    </div>
  )
}

export default App;
