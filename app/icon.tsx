import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 128,
  height: 128,
};

export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 32,
          position: "relative",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Glassmorphism overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: 32,
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        />

        {/* Inner highlight */}
        <div
          style={{
            position: "absolute",
            top: 4,
            left: 4,
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.4)",
            filter: "blur(2px)",
          }}
        />

        {/* JP Text with gradient */}
        <div
          style={{
            background:
              "linear-gradient(135deg, #3478F6 0%, #FF2D55 50%, #FF9500 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontWeight: 700,
            fontSize: 64,
            letterSpacing: "-2px",
            fontFamily: "system-ui, -apple-system, sans-serif",
            position: "relative",
            zIndex: 10,
          }}
        >
          JP
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
