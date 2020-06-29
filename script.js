const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Prompt to select media strem, pass to video element and then play
async function selectMediaStream() {
   try {
      const mediaStream = await navigator.mediaDevices.getDisplayMedia();
      videoElement.srcObject = mediaStream;
      videoElement.onloadedmetadata = () => {
         videoElement.play();
      }
   } catch(error) {
      console.log('whoop, error here:', error);
   }
}


button.addEventListener('click', async () => {
   button.disabled = true;
   await videoElement.requestPictureInPicture();
   button.disabled = false;
});
// On load

selectMediaStream();
