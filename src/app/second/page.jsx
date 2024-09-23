'use client';

//require('aframe');
//require('../../vendor/aframe-gui/dist/aframe-gui.js');

//require('aframe');
import 'aframe';

import 'aframe-troika-text';
import '../../vendor/aframe-tooltip-component';
import '../../vendor/link-controls';
import '../../vendor/camera-position';

import '../../vendor/aframe-gui/scripts/vars';
import '../../vendor/aframe-gui/components/item';
import '../../vendor/aframe-gui/components/cursor';
import '../../vendor/aframe-gui/components/toggle';
import '../../vendor/aframe-gui/components/interactable';
import '../../vendor/aframe-gui/components/rounded';
import '../../vendor/aframe-gui/components/label';
import '../../vendor/aframe-gui/components/flex-container';
import '../../vendor/aframe-gui/components/button';
import '../../vendor/aframe-gui/components/icon-label-button';

export default function Home() {

    const testuttonAction5 =(e) => {
        console.log('testuttonAction5', e);
    }

    const testButtonAction1 =(e) => {
        console.log('testButtonAction1', e);
    }

    window.testButtonAction =(e) => {
        console.log('testButtonAction', e);
        window.testButtonAction =(e) => {
            console.log('testButtonAction', e);
//            window.location.href = '/robots'; // goto second!
            window.location.replace('/second'); // goto second!
        }
    
    }


    return (
        <> <a-scene xr-mode-ui="enabled: true"
        camera-position
            cursor__mouse="rayOrigin: mouse"
            cursor__touch="rayOrigin: touch"
        >
            <a-assets>
                <a-asset-item id="iconfontsolid" src="assets/fonts/fa-solid-900.ttf"></a-asset-item>
                <a-asset-item id="iconfontbrand" src="assets/fonts/fa-brands-400.ttf"></a-asset-item>
                <a-asset-item id="textfont1" src="assets/fonts/PermanentMarker-Regular.ttf"></a-asset-item>
                <a-asset-item id="textfont2" src="assets/fonts/PressStart2P-Regular.ttf"></a-asset-item>
                <a-asset-item id="textfont3" src="assets/fonts/Plaster-Regular.ttf"></a-asset-item>
                <a-asset-item id="textfont4" src="assets/fonts/DiplomataSC-Regular.ttf"></a-asset-item>
                <img id="thumbIndex" crossOrigin="anonymous" src="https://cdn.aframe.io/link-traversal/thumbs/index.png"/>

            </a-assets>

            <a-gui-flex-container id="topflex"
                flex-direction="column" justify-content="center" align-items="normal" item-padding="0.05"
                opacity="0.5" width="2.9" height="4.2" panel-color="#221222" panel-rounded="0.2"
                position="0 2.5 -6" rotation="0 0 0" is-top-container="true"
            >
                <a-gui-label
                    width="2.5" height="0.75"
                    value="Second Page"
                    
                    font-size="0.35"
                    line-height="0.8"
                    letter-spacing="0"
                    margin="0 0 0.05 0"
                >
                </a-gui-label>
                <a-gui-button
				width="3.5" 
				height="0.8" 
				onclick="testButtonAction"
                background-color="#ff0000"
				value="日本語も出るなんてすごい！"></a-gui-button>

                <a-gui-button
                    id="btn1"
                    width="2.5"
                    height="0.7"
                    base-depth="0.05"
                    depth="0.2"
                    gap="0.1"
                    radius="0"
                    onclick="testButtonAction"
                    value="この言語じゃ無理でしょ？ABCDE　ｚABC"
                    font-family="assets/fonts/ShinRetroMaruGothic-Medium.ttf"
                    font-size="0.2"
                    margin="0 0 0.05 0"
                    toggle="true"
                >
                </a-gui-button>
                <a-gui-button
                    id="btn2"
                    width="2.5"
                    height="0.7"
                    base-depth="0.05"
                    depth="0.2"
                    gap="0.1"
                    radius="0"
                    onclick="testButtonAction"
                    value="この言語じゃ無理でしょ？"
                    font-family="assets/fonts/ShinRetroMaruGothic-Bold.ttf"
                    font-size="0.2"
                    margin="0 0 0.05 0"
                ></a-gui-button>
                <a-gui-button
                    id="btn3"
                    width="2.5"
                    height="0.7"
                    gap="0.1"
                    radius="0"
                    onclick="testButtonAction"
                    value="この言語じゃ無理でしょ？"
                    font-family="assets/fonts/BIZUDPGothic-Bold.ttf"
                    font-size="0.2"
                    margin="0 0 0.05 0"
                    toggle="true"
                ></a-gui-button>
                <a-gui-icon-label-button
                    width="2.5" height="0.75"
                    onclick="testButtonAction"
                    icon="f2b9"
                    icon-font="assets/fonts/fa-solid-900.ttf"
                    value="アイコンも使える"
                    font-size="0.16"
                    margin="0 0 0.05 0"
                >
                </a-gui-icon-label-button>
            </a-gui-flex-container>

            <a-link position="-3 -2 -5" href="/robots" title="Goto robots" image="#thumbIndex">Go to Robots</a-link>

            {/*
                <a-text id="spotButtonText" color="white" position="0 3 -3.9" align="center" anchor="center" color="#333" value="start" width="8"></a-text>
                <a-box id="spotButtonBase" color="orange" position="0 3.0 -4" height="0.8" width="6" depth="0.1" class="raycastable"></a-box>

                <a-text id="tileText0" position="-2.9 0.2 -3.9" align="left" anchor="left" value="not good text!" color="#333" width="5"></a-text>
                <a-box id="tileBase0" color="#cccccc" position="0 0 -4" height="0.8" width="6" depth="0.1" class="raycastable"></a-box>


                            <a-entity id="cameraRig">
                <a-entity id="head" camera wasd-controls look-controls position="0 1.6 0">
                </a-entity>

                <a-entity id="ctlL"
                    teleport-controls="cameraRig: #cameraRig; teleportOrigin: #head; startEvents: teleportstart; endEvents: teleportend"
                    raycaster="objects: .collidable; far:1.2; " oculus-touch-controls="hand: left" input-listen>
                </a-entity>
            </a-entity>
                <a-text
                    position="0 20 -30"
                    align="center"
                    anchor="center"
                    value="metaworker-vr"
                    color="#ccc"
                    width="100"></a-text>
                <a-entity laser-controls="hand: right" raycaster="objects: .raycastable; far: 5" position="0 0.6 -0.2" cursor="rayOrigin: mouse" ></a-entity>
		<a-entity id="leftHand" link-controls="hand: left" laser-controls="hand: left" raycaster="objects: [gui-interactable],[link] "></a-entity>
		<a-entity id="rightHand" laser-controls="hand: right" raycaster="objects: [gui-interactable],[link]"></a-entity>
		<a-entity id="leftHand"   laser-controls="hand: left"   raycaster="far: 100; objects: [link];" link-controls="hand: left" ></a-entity>
*/
            }
            <a-sky color="#444466"></a-sky>

         {//   <!-- Mouse cursor so we can click on the scene with mouse or touch. -->
}
		<a-entity id="mouseCursor" cursor="rayOrigin: mouse" raycaster="objects: [gui-interactable],[link]"></a-entity>
		<a-entity id="rightHand"  link-controls="hand: right" raycaster="objects: [gui-interactable],[link]"></a-entity>


{//		<!-- Camera + cursor. -->
}
		<a-entity id="cameraRig" position="0 0 0">
			<a-camera look-controls wasd-controls position="0 0 0">
			</a-camera>
		</a-entity>




        </a-scene>
        </>
    );
}
