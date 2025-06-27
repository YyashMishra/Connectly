import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'; //useParams extracts dynamic segment like id from the URL
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'; 
import './Home.css';

const VideoPage = () => {
  const { id } = useParams(); //destructuring id from useParams
  const roomID = id; //assigning id to roomID
  const containerRef = useRef(null); //creating a ref for the DOM container

  useEffect(() => {
      // generate Kit Token
      const appID = 965149886;
      const serverSecret = "3c8520ef3f0382b2bdb86c82f3dab2b9";
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  Date.now().toString(),  "ABCDE"); // it creates a unique token for each user to join the room.

      // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);

      // start the call
      zp.joinRoom({
        container: containerRef.current,
        sharedLinks: [
          {
            name: 'Copy link',
            url:
             window.location.protocol + '//' + 
             window.location.host + '/room/' +
              roomID,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
      });
  }, [roomID]);

  return (
   <div>
     <nav className='navbar'>
         <div className='navbar-logo'>Connectly</div>
     </nav>
     
     
     <div ref={containerRef} width='100%' style={{ position: 'absolute', top: '65px', left: 300 , height: 'calc(100vh - 65px)' }}>
     </div>
   </div>
  )
}

export default VideoPage;
