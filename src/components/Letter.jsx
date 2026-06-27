export default function Letter() {
  return (
    <div
      style={{
        width: "320px",
        background: "#fffef8",
        borderRadius: "12px",
        padding: "25px",
        boxShadow: "0 10px 30px rgba(0,0,0,.25)",
        color: "#333",
        lineHeight: "1.8",
        fontFamily: "Georgia, serif"
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#c2185b",
          marginBottom: "20px"
        }}
      >
        💌 Happy Birthday 💌
      </h2>

      <p>
        Selamat ulang tahun!
      </p>

      <p>
        Semoga semua impianmu tercapai, selalu diberi kesehatan,
        kebahagiaan, dan kesuksesan.
      </p>

      <p>
        Terima kasih telah menjadi seseorang yang luar biasa.
      </p>

      <p
        style={{
          marginTop: "25px",
          textAlign: "right",
          fontWeight: "bold"
        }}
      >
        ❤️ With Love
      </p>
    </div>
  );
}
