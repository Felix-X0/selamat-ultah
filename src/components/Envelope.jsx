export default function Envelope() {
  return (
    <div
      style={{
        width: "260px",
        height: "180px",
        background: "#f7e7ce",
        borderRadius: "12px",
        position: "relative",
        boxShadow: "0 15px 35px rgba(0,0,0,.35)",
        cursor: "pointer",
        transition: ".3s"
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 0,
          height: 0,
          borderLeft: "130px solid transparent",
          borderRight: "130px solid transparent",
          borderTop: "90px solid #ead6b7"
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "18px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "55px",
          height: "55px",
          background: "#b00020",
          borderRadius: "50%",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "24px"
        }}
      >
        ❤
      </div>
    </div>
  );
}
