import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import theme_pattern from '../assets/theme_pattern.svg';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Fullscreen, Thumbnails, Zoom } from 'yet-another-react-lightbox/plugins';


import './Photos.css';
// import images from './api-mock.json';
import { getImages } from './api';

const Photos = () => {
  const [imageList, setImageList] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    const fetchData = async() => {
      const responseJson = await getImages();
      setImageList(responseJson.resources);
      setNextCursor(responseJson.next_cursor);
      setIsLoading(false);
    }
    fetchData();
  },[])

  const handleLoadMoreButtonClick = async () => {
    const responseJson = await getImages(nextCursor);
    setImageList((currentImageList)=> [
      ...currentImageList,
      // spread the current image list...
      ...responseJson.resources
      // ...and append the next 10 images (if they exist)
    ]);
    setNextCursor(responseJson.next_cursor);
  }

  // console.log(imageList);
  // console.log(isLoading);

  return (
    <>
      <Navbar />
      <div className="photos-page-container">
        <div className="intro-text">
          Below is a gallery of images taken on my annual bike trip in the Alps.<br/>
        </div>
          {isLoading ? 
            <div className="loading-message">
              <p>Loading photos...</p><br />
              <p>Using the free versions of Cloudinary
                and Render. This may take awhile the first time you 
                visit my photos. Try reloading if you still see this message
                after 30 seconds.</p>
              
              <div class="tenor-gif-embed" data-postid="21269167" data-share-method="host" data-aspect-ratio="1.24514" data-width="100%"><a href="https://tenor.com/view/hi-gif-21269167">Hi GIF</a>from <a href="https://tenor.com/search/hi-gifs">Hi GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
            </div>
          : null}
        <div className="image-grid">
          {imageList.map((image, index)=>
            <>
              <div className="item">
                <img
                  key={index} 
                  src={image.url} 
                  alt={image.public_id}
                  onClick={()=>setIndex(index)}
                />
                <div onClick={()=>setIndex(index)} className="innerText">View</div>
              </div>
            </>
          )}
        </div>
        <div className="load-more-photos">
          {nextCursor && <button onClick={handleLoadMoreButtonClick}>Load More Images</button>}
        </div>
        {isLoading && nextCursor ? 
            <div className="loading-message">
              <p>Loading photos...<br />
                Using the free versions of Cloudinary and Render. This may take awhile the first time you visit my photos. Try reloading if you still see this message after 30 seconds.
              </p>
            </div>
          : null}
     
          {/* <button onClick={()=>setOpen(true)}>Open Lightbox</button> */}
          <Lightbox 
            plugins={[Fullscreen, Zoom, Thumbnails]}
            captions={{
              showToggle: true,
              descriptionTextAlign: 'end',
            }}
            slides={imageList.map((image)=>({ src: image.url }))}
            index={index}
            open={index >= 0}
            close={()=>setIndex(-1)}
            // key={imageList.map((image, index)=>(image.public_id ))}
          />
    
      </div>
      <Contact />
      <Footer />
    </>
  )
}

export default Photos
