import { useRef } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const pauseMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  return (
    <div
      style={{
        marginTop: "30px",
        display: "flex",
        gap: "15px",
        justifyContent: "center"
      }}
    >
      <audio ref={audioRef} src="/music/birthday.mp3" loop />

      <button
        onClick={playMusic}
        style={{
          padding: "12px 25px",
          borderRadius: "30px",
          border: "none",
          background: "#ff4081",
          color: "white",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        ▶ Play Music
      </button>

      <button
        onClick={pauseMusic}
        style={{
          padding: "12px 25px",
          borderRadius: "30px",
          border: "none",
          background: "#444",
          color: "white",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        ⏸ Pause
      </button>
    </div>
  );
}
