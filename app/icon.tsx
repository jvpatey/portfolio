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
          background:
            "linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #1e293b 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 24,
          position: "relative",
          border: "1px solid rgba(51, 65, 85, 0.5)",
        }}
      >
        {/* Inner glow layer */}
        <div
          style={{
            position: "absolute",
            inset: "6px",
            background:
              "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(79, 70, 229, 0.2) 100%)",
            borderRadius: 20,
          }}
        />

        {/* JP Text */}
        <div
          style={{
            background:
              "linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #a78bfa 100%)",
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

        {/* Decorative dots */}
        <div
          style={{
            position: "absolute",
            top: 22,
            right: 22,
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#60a5fa",
            opacity: 0.9,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 22,
            left: 22,
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: "#818cf8",
            opacity: 0.9,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
