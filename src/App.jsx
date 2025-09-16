// import { useEffect, useState } from "react";
// import Imagescard from "./Compponents/Imagescard";

// function App() {
//   const [images, setImages] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [term, setTerm] = useState('');

//   useEffect(() => {
//     const API_KEY = import.meta.env.VITE_PIXABAY_API_KEY;

//     fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${term}&image_type=photo&pretty=true`)
//       .then(res => res.json())
//       .then(data => {
//         console.log("Pixabay data:", data);
//         setImages(data.hits);
      
//       })
//       .catch((err) => console.log(err));
//   }, [term]);

//   return(
//     <div className="Contianer mx-auto"> 
//     <div className="grid grid-cols-3 gap-4">
//       {
//         images.map((image) => (
//            <Imagescard key={image.id} image={image}/>
//         ))
//       }

//     </div>

//     </div>
   
//   )
// }

// export default App;

import { useEffect, useState } from "react";
import Imagescard from "./Compponents/Imagescard";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [term, setTerm] = useState("flowers"); // مقدار اولیه برای تست

  useEffect(() => {
    if (!term) return; // اگر term خالی بود، API صدا زده نشه
    const API_KEY = import.meta.env.VITE_PIXABAY_API_KEY;
    setIsLoading(true);

    fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Pixabay data:", data.hits);
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setIsLoading(false);
      });
  }, [term]);

  return (
    <div className="container mx-auto p-4">
      {/* Input برای جستجوی داینامیک */}
      <div className="mb-6">
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search for images..."
          className="border p-2 w-full rounded"
        />
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : images.length > 0 ? (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <Imagescard key={image.id} image={image} />
          ))}
        </div>
      ) : (
        <p>No images found.</p>
      )}
    </div>
  );
}

export default App;
