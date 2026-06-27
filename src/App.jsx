import Envelope from "./components/Envelope";

export default function App() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background:
          "linear-gradient(135deg,#430000,#8b0000,#b71c1c)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "white"
      }}
    >
      <h1
        style={{
          fontFamily: "cursive",
          fontSize: "52px"
        }}
      >
        Press the Envelope
      </h1>

      <Envelope />

      <p
        style={{
          marginTop: "25px",
          fontSize: "22px",
          fontStyle: "italic"
        }}
      >
        Tap to continue
      </p>
    </div>
  );
}
