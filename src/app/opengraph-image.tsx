import { ImageResponse } from "next/og";

export const alt =
  "miamio | 横浜・鶴ヶ峰のプライベートまつ毛エクステ・ラッシュリフトサロン";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FAFAFA",
          position: "relative",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 60,
            width: 48,
            height: 2,
            backgroundColor: "#B5A397",
          }}
        />

        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.45em",
            color: "#B5A397",
            textTransform: "uppercase",
            marginBottom: 28,
          }}
        >
          Private Eyelash Salon
        </div>

        <div
          style={{
            fontSize: 120,
            fontWeight: 300,
            letterSpacing: "0.25em",
            color: "#333333",
            marginLeft: "0.25em", // letter-spacing の右余白ぶんを補正
          }}
        >
          miamio
        </div>

        <div
          style={{
            marginTop: 36,
            fontSize: 20,
            letterSpacing: "0.35em",
            color: "#737373",
            textTransform: "uppercase",
          }}
        >
          Yokohama · Tsurugamine
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            width: 48,
            height: 2,
            backgroundColor: "#B5A397",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
