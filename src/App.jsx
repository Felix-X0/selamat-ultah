import Envelope from "./components/Envelope";

export default function App() {
  return (
    <div
      style={{
        height: "100vh",
        background:
          "linear-gradient(135deg,#4a0000,#830000,#c1121f)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white"
      }}
    >
      <h1
        style={{
          fontFamily: "cursive",
          fontSize: "58px",
          marginBottom: "25px"
        }}
      >
        Press the Envelope
      </h1>

      <Envelope />

      <p
        style={{
          marginTop: "40px",
          fontSize: "22px",
          fontStyle: "italic"
        }}
      >
        Tap the envelope ❤️
      </p>
    </div>
  );
}
