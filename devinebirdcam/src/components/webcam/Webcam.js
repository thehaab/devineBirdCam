
import React, { useEffect, useRef } from 'react';
import './webcam.css';

function Webcam() {
// Create a video element
const videoElement = document.createElement('video');
videoElement.autoplay = true;
const videoRef = useRef(null);

// Create a MediaSource object
const mediaSource = new MediaSource();

// Set up the video source
const videoSource = '/* rtmp://192.168.1.12:1935 */';

// Attach the MediaSource to the video element
videoElement.src = URL.createObjectURL(mediaSource);

// Listen for the MediaSource's sourceopen event
mediaSource.addEventListener('sourceopen', () => {
  // Create a SourceBuffer object
  const sourceBuffer = mediaSource.addSourceBuffer('video/mp4; codecs="avc1.42E01E"');

  // Fetch the video stream and append it to the SourceBuffer
  fetch(videoSource)
    .then(response => response.arrayBuffer())
    .then(data => {
      sourceBuffer.appendBuffer(data);
    });
});

// Append the video element to the document body
  document.body.appendChild(videoElement);

  return (
    <div>
      <h1>birdCam</h1>
      {videoElement.src ? (
        <video ref={videoRef} className='webcam-window' />
      ) : (
        <p>Camera offline</p>
      )}
    </div>
  );
}

export default Webcam;