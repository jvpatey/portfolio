import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

// Image generation for Apple devices
export default function AppleIcon() {
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
          borderRadius: 40,
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
            borderRadius: 40,
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        />

        {/* Inner highlight */}
        <div
          style={{
            position: "absolute",
            top: 6,
            left: 6,
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.4)",
            filter: "blur(3px)",
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
            fontSize: 90,
            letterSpacing: "-3px",
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
