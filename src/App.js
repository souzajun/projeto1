import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AlbumPhotos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
      setPhotos(response.data);
      
    } catch (error) {
      console.error('Foto não localizada:', error);
    }
  };


    
  return (
    <body>
    <div class="col-sm-12">
      <h2 id="titulo1">Photos</h2>
      {photos.map(photo => (
        <div id="titulo2 "class='caroussel cartao card' key={photo.id}>
          <img src={photo.thumbnailUrl} alt={photo.title} title={photo.title} />
          Foto: {photo.id}
      </div>
      ))}
    </div>
    </body>
  );
};

export default AlbumPhotos;