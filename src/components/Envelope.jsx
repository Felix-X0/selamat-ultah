import { useState } from "react";

export default function Envelope() {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      style={{
        position: "relative",
        width: "280px",
        height: "190px",
        cursor: "pointer",
        marginTop: "30px"
      }}
    >
      {/* Tutup Amplop */}
      <div
        style={{
          position: "absolute",
          width: 0,
          height: 0,
          borderLeft: "140px solid transparent",
          borderRight: "140px solid transparent",
          borderTop: "95px solid #ead7b8",
          transform: open ? "rotateX(180deg)" : "rotateX(0deg)",
          transformOrigin: "top",
          transition: "0.8s",
          zIndex: 5
        }}
      />

      {/* Isi Surat */}
      <div
        style={{
          position: "absolute",
          left: "20px",
          right: "20px",
          top: open ? "-90px" : "40px",
          height: "160px",
          background: "#fff",
          borderRadius: "8px",
          transition: "0.8s",
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#222",
          fontWeight: "bold",
          fontSize: "22px"
        }}
      >
        💌 Happy Birthday 💌
      </div>

      {/* Badan Amplop */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "280px",
          height: "170px",
          background: "#f5e5c5",
          borderRadius: "10px",
          boxShadow: "0 15px 35px rgba(0,0,0,.35)",
          zIndex: 3
        }}
      />

      {/* Segel */}
      <div
        style={{
          position: "absolute",
          bottom: "45px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "55px",
          height: "55px",
          background: "#b00020",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "24px",
          zIndex: 6
        }}
      >
        ❤
      </div>
    </div>
  );
}
