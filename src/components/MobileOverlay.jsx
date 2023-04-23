function MobileOverlay() {
  return (
    <div className="overlay">
      <div
        style={{
          backgroundColor: "white",
          width: "75%",
          maxWidth: "500px",
          height: "250px",
          padding: "35px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h3>This game is not playable on mobile devices :(</h3>
      </div>
    </div>
  );
}

export default MobileOverlay;
