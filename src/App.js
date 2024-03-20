import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React,{ useState,useEffect } from "react";
import Navbar from './Components/Navbar'
import Theme from './Components/Theme'
import ImageSearch from './Components/Search'
import ImageCard from './Components/Imagecards'

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);

  return (
    <> 
    <Navbar />  
      <div className="container mx-auto mt-20">
        <ImageSearch searchText={(text) => setTerm(text)} />
        {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>}
        {/* {isLoading ? 
          <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> :
          <div className="grid grid-cols-3 gap-4">
            {images.map(image => <ImageCard key={image.id} image={image} />)}
          </div>
        } */}
         <div className="grid grid-cols-3 gap-4">
            {images.map(image => <ImageCard key={image.id} image={image} />)}
          </div>
    </div>
      <div className="font-bold"></div>
    <div className="flex flex-1 px-4 py-7 pl-0 pr-84 mr-16 pt-28 justify-end">
            <Theme />
          </div>
     </>
  );
}

export default App;
