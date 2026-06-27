const photos = [
  "https://picsum.photos/300/300?1",
  "https://picsum.photos/300/300?2",
  "https://picsum.photos/300/300?3",
  "https://picsum.photos/300/300?4"
];

export default function Gallery() {
  return (
    <div
      style={{
        marginTop: "40px",
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        gap: "15px",
        width: "340px"
      }}
    >
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo}
          alt={`Memory ${index + 1}`}
          style={{
            width: "100%",
            borderRadius: "15px",
            boxShadow: "0 10px 20px rgba(0,0,0,.3)"
          }}
        />
      ))}
    </div>
  );
}
