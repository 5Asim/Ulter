type NullableHTMLElement<T> = T | null;

interface Camera {
  video: NullableHTMLElement<HTMLVideoElement>;
  context: NullableHTMLElement<CanvasRenderingContext2D>;
  canvas: NullableHTMLElement<HTMLCanvasElement>;
  startCamera(w?: number, h?: number): void;
  takeSnapshot(): void;
}

const camera: Camera = (function () {
  let width = 0;
  let height = 0;

  function createObjects() {
    const video = document.createElement('video');
    video.id = 'video';
    video.width = width;
    video.height = height;
    video.autoplay = true;
    document.body.appendChild(video);

    const canvas = document.createElement('canvas');
    canvas.id = 'canvas';
    canvas.width = width;
    canvas.height = height;
    document.body.appendChild(canvas);
  }

  return {
    video: null,
    context: null,
    canvas: null,

    startCamera(w = 680, h = 480) {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        width = w;
        height = h;

        createObjects();

        this.video = document.getElementById('video') as HTMLVideoElement;
        this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
        this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;

        (function (video) {
          navigator.mediaDevices.getUserMedia({video: true}).then(function (stream) {
            video.srcObject = stream;
            video.play();
          });
        })(this.video);
      }
    },

    takeSnapshot() {
      if (this.context && this.video) {
        this.context.drawImage(this.video, 0, 0, width, height);
      }
    }
  }
})();

export default camera;
