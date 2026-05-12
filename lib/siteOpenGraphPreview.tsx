/** JSX for `next/og` ImageResponse — poster gradient + browser frame (share preview). */

export function SiteOpenGraphPreview() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage:
          "linear-gradient(118deg, #050608 0%, #071924 16%, #0a2540 32%, #0c4a6e 48%, #155e75 58%, #4338ca 78%, #1e1436 100%)",
        position: "relative",
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          width: 1000,
          height: 500,
          borderRadius: 18,
          border: "1px solid rgba(255,255,255,0.14)",
          background: "rgba(7, 8, 12, 0.88)",
          boxShadow:
            "0 28px 90px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            padding: "12px 16px",
            borderBottom: "1px solid rgba(255,255,255,0.09)",
            background: "rgba(255,255,255,0.04)",
          }}
        >
          <div style={{ display: "flex", gap: 7 }}>
            <div
              style={{
                width: 11,
                height: 11,
                borderRadius: 6,
                background: "rgba(248,113,113,0.88)",
              }}
            />
            <div
              style={{
                width: 11,
                height: 11,
                borderRadius: 6,
                background: "rgba(250,204,21,0.88)",
              }}
            />
            <div
              style={{
                width: 11,
                height: 11,
                borderRadius: 6,
                background: "rgba(74,222,128,0.88)",
              }}
            />
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                maxWidth: 520,
                width: "100%",
                padding: "7px 14px",
                borderRadius: 9,
                background: "rgba(0,0,0,0.4)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(226,232,240,0.9)",
                fontSize: 14,
                textAlign: "center",
                letterSpacing: "0.03em",
              }}
            >
              jeffreypatey.dev
            </div>
          </div>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            padding: "32px 40px 28px",
            gap: 22,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "rgba(148,163,184,0.95)",
              }}
            >
              Hi, my name is
            </div>
            <div
              style={{
                fontSize: 48,
                fontWeight: 700,
                lineHeight: 1.06,
                color: "#ffffff",
                letterSpacing: "-0.03em",
              }}
            >
              Jeffrey Patey
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                fontSize: 22,
                fontWeight: 600,
                color: "rgba(248,250,252,0.96)",
                maxWidth: 640,
                lineHeight: 1.35,
              }}
            >
              <span>Full stack software developer</span>
              <span
                style={{
                  fontSize: 17,
                  fontWeight: 400,
                  color: "rgba(148,163,184,0.95)",
                }}
              >
                with a healthcare background.
              </span>
            </div>
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            {[
              "rgba(34,211,238,0.4)",
              "rgba(129,140,248,0.32)",
              "rgba(255,255,255,0.09)",
            ].map((bg, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: 6,
                  borderRadius: 3,
                  background: bg,
                }}
              />
            ))}
          </div>

          <div style={{ display: "flex", gap: 14, marginTop: "auto" }}>
            {[
              {
                label: "Projects",
                barBackgroundImage:
                  "linear-gradient(135deg, rgba(34,211,238,0.45), rgba(129,140,248,0.35))",
              },
              {
                label: "Experience",
                barBackgroundImage:
                  "linear-gradient(135deg, rgba(129,140,248,0.38), rgba(34,211,238,0.22))",
              },
              {
                label: "Contact",
                barBackgroundColor: "rgba(255,255,255,0.09)",
              },
            ].map((card) => (
              <div
                key={card.label}
                style={{
                  flex: 1,
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.035)",
                  padding: "14px 16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    height: 5,
                    width: "40%",
                    borderRadius: 2,
                    ...(card.barBackgroundImage
                      ? { backgroundImage: card.barBackgroundImage }
                      : { backgroundColor: card.barBackgroundColor }),
                  }}
                />
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: "rgba(241,245,249,0.95)",
                  }}
                >
                  {card.label}
                </div>
                <div
                  style={{
                    height: 3,
                    width: "100%",
                    borderRadius: 2,
                    background: "rgba(255,255,255,0.06)",
                  }}
                />
                <div
                  style={{
                    height: 3,
                    width: "72%",
                    borderRadius: 2,
                    background: "rgba(255,255,255,0.05)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
