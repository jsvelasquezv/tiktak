import { createSignal, JSXElement, Ref } from "solid-js";
import styles from "./styles.module.css";

const SRC = "https://f.vimeocdn.com/_videos/home/desktop-masthead-720p-2.mp4";

const VideoPlayer = () => {
  const [playing, setPlaying] = createSignal(false);
  let video: HTMLVideoElement;

  const handlePlay = () => {
    if (!video) return;
    if (playing()) {
      video.pause();
    } else {
      video.play();
    }

    setPlaying(!playing());
  };

  return (
    <div>
      <video ref={video!} class={styles.video} src={SRC} controls={false} />
      <button class={styles.player} onclick={handlePlay}></button>
    </div>
  );
};

export { VideoPlayer };
