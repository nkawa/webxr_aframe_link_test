'use client';

require('aframe');

export default function Home() {




  return (
    <>
    
    <script src="https://rawgit.com/fernandojsg/aframe-teleport-controls/master/dist/aframe-teleport-controls.min.js"></script>
    <a-scene xr-mode-ui="enabled: true">
      <a-text
        position="0 20 -20"
        align="left"
        anchor="center"
        value="hogheoge-vr"
        color="#ccc"
        width="100"></a-text>

      <a-text value = "Hello" position="-1 20 -32" width="200" align="center" color="#FFFFFF"></a-text>

      <a-plane id="anglim_background" position="0 0 -3" width="1.3" height="0.3" color="red" opacity="1.0">
              <a-text id = "anglelimit" value = "angle limit" position="0 0 0.01" align="center" color="#FFFFFF"></a-text>
              </a-plane>

<a-link position="0 1 -30" href="robots" title="Goto Robots" image="#homeThumbnail"></a-link>

      
      <a-text id="tileText0" font="fonts/mplus-msdf.json" font-image="fonts/mplus-msdf.png" negate="false" position="-2.9 0.2 -3.9" align="left" anchor="left" value="[text3]" color="#333" width="5"></a-text>
      <a-box id="tileBase0" color="#cccccc" position="0 0 -4" height="0.8" width="6" depth="0.1">hello</a-box>

      <a-text id="tileText1" font="fonts/mplus-msdf.json" font-image="fonts/mplus-msdf.png" negate="false" position="-2.9 1.2 -3.9" align="left" anchor="left" value="[test]" color="#333" width="5"></a-text>
      <a-box id="tileBase1" color="#cccccc" position="0 1.0 -4" height="0.8" width="6" depth="0.1"></a-box>

      <a-text id="tileText2" font="fonts/mplus-msdf.json" font-image="fonts/mplus-msdf.png" negate="false" position="-2.9 2.2 -3.9" align="left" anchor="left" value="[text1]" color="#333" width="5"></a-text>
      <a-box id="tileBase2" color="#cccccc" position="0 2.0 -4" height="0.8" width="6" depth="0.1"></a-box>

      <a-text id="tileText3" font="fonts/mplus-msdf.json" font-image="fonts/mplus-msdf.png" negate="false" position="-2.9 3.2 -3.9" align="left" anchor="left" color="#333" value="[text0]" width="5"></a-text>
      <a-box id="tileBase3" color="#cccccc" position="0 3.0 -4" height="0.8" width="6" depth="0.1"></a-box>

      <a-text id="spotButtonText" color="white" font="fonts/mplus-msdf.json" font-image="fonts/mplus-msdf.png" negate="false" position="0 3 -3.9" align="center" anchor="center" color="#333" value="作業開始" width="8"></a-text>
      <a-box id="spotButtonBase" color="orange" position="0 3.0 -4" height="0.8" width="6" depth="0.1"></a-box>

      <a-text id="spotTileText" font="fonts/mplus-msdf.json" font-image="fonts/mplus-msdf.png" negate="false" position="-2.9 -1 -3.9" align="left" anchor="left" value="[text3]" color="#333" width="5"></a-text>
      <a-box id="spotTileBase" color="#cccccc" position="0 -1 -4" height="0.8" width="6" depth="0.1"></a-box>

      <a-text
        position="0 3 -15"
        align="center"
        anchor="center"
        value="----"
        color="#000"
        width="30"
        id="infoTextClick"></a-text>
      <a-text
        position="0 4 -15"
        align="center"
        anchor="center"
        value="----"
        color="#000"
        width="30"
        id="infoTextMqtt"
      ></a-text>
      <a-text
        position="0 20 -30"
        align="center"
        anchor="center"
        value="metaworker-vr"
        color="#ccc"
        width="100"></a-text>
        {/*
      <a-video
        id="sora-video-part"
        src="#video-el"
        width="32"
        height="18"
        position="0 0 -25"
      ></a-video>
      */
    }
     
     <a-sky color="#333333"></a-sky>
{//     <a-entity cursor raycaster="far: 20; interval: 1000; objects: .clickable"></a-entity>

//<a-entity hand-controls="left"></a-entity>
//<a-entity hand-controls="right"></a-entity>

}
<a-entity id="cameraRig">
            <a-entity id="head" camera wasd-controls look-controls position="0 1.6 0">
            </a-entity>
            <a-entity id="ctlL"
                teleport-controls="cameraRig: #cameraRig; teleportOrigin: #head; startEvents: teleportstart; endEvents: teleportend"
                raycaster="objects: .collidable; far:1.2; " oculus-touch-controls="hand: left" input-listen>
                <a-text value="Trigger: shoot a ball\nGrip: Grab large object\nX: Teleport" position="0 0.08 0"
                    rotation="-90 0 0" scale="0.1 0.1 0.1" align="center" color="#FFFFFF"></a-text>
              <a-sphere radius="0.01" position="0 0 -1.2" color="#FFFFFF"></a-sphere>
            </a-entity>
            <a-entity id="ctlR" raycaster="objects: .collidable; far:1.2; " oculus-touch-controls="hand: right" input-listen>
                <a-text value="Trigger: shoot a ball\nGrip: Grab large object\nA: Remove small balls"
                    position="0 0.08 0" rotation="-90 0 0" scale="0.1 0.1 0.1" align="center" color="#FFFFFF"></a-text>
              <a-sphere radius="0.01" position="0 0 -1.2" color="#FFFFFF"></a-sphere>
            </a-entity>
        </a-entity>
      {/* 
<a-entity laser-controls="hand: right" raycaster="objects: .collidable; far: 5" position="0 0.6 -0.2" vr-right-controller ></a-entity>
<a-entity laser-controls="hand: left " raycaster="objects: .collidable; far: 5"  vr-left-controller ></a-entity>
      <a-camera>
        <a-cursor></a-cursor>
      </a-camera>
*/}
    </a-scene></>
  );
}
