import { useState } from 'react'
import axios from 'axios' // Add this line to import axios
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchHeader from './SearchHeader'
import searchImages from './Api'
import ImageList from './Components/ImageList'

function App() {

  const [images, setImages] = useState([]);

  const handelSubmit = async (term) => {

    const result = await searchImages(term);
    setImages(result);

  };

  return (

    <div className="App">
      <SearchHeader search={handelSubmit} />
      <ImageList imagesPlaceHolder={images} />
    </div>
  )
}

export default App
