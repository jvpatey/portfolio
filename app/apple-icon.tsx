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
          background:
            "linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #1e293b 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 40,
          position: "relative",
          border: "1px solid rgba(51, 65, 85, 0.5)",
        }}
      >
        {/* Inner glow layer */}
        <div
          style={{
            position: "absolute",
            inset: "8px",
            background:
              "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(79, 70, 229, 0.2) 100%)",
            borderRadius: 32,
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
            fontSize: 90,
            letterSpacing: "-3px",
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
            top: 28,
            right: 28,
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#60a5fa",
            opacity: 0.9,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 28,
            left: 28,
            width: 6,
            height: 6,
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
