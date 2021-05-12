import React, { useState, useEffect, useRef } from 'react';
import './video.scss';

const VideoContainer = () => {
  const [width, setWidth] = useState(0);
  const myRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log('useEffect triggered');
    myRef.current?.addEventListener('onresize', (e) => {
      console.log(e);
    });
    myRef.current?.addEventListener('click', (e) => {
      console.log('cliecked', e);
    });
  }, []);
  return (
    <div className="video-container" ref={myRef}>
      <video
        controls
        src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
        style={{}}
      ></video>
    </div>
  );
};

export default VideoContainer;
