import { ImageResponse } from "next/og";

export const alt = "Opal Screening: DOT drug testing, C/TPA and workplace screening";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const mark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 240"><defs><linearGradient id="b" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5ce6f2"/><stop offset=".5" stop-color="#25b2e8"/><stop offset="1" stop-color="#1f5fd8"/></linearGradient><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8af3ff"/><stop offset="1" stop-color="#2a5ae6"/></linearGradient><mask id="m" maskUnits="userSpaceOnUse" x="0" y="0" width="200" height="240"><path d="M100 6 182 50v82c0 48-36 82-82 102-46-20-82-54-82-102V50Z" fill="#fff"/><path d="M100 70c11 6 22 12 28 20 6 9 8 21 8 34s-2 25-8 35c-6 9-17 16-28 22-11-6-22-13-28-22-6-10-8-22-8-35s2-25 8-34c6-8 17-14 28-20Z" fill="#000"/><g fill="none" stroke="#000" stroke-width="7" stroke-linecap="round"><path d="M128 0 58 60c-9 18-13 40-13 64s4 44 12 58l33 22"/><path d="M72 248l70-60c9-18 13-40 13-64s-4-44-12-58l-33-22"/></g></mask></defs><g mask="url(#m)"><rect width="200" height="240" fill="url(#b)"/><path d="M100 6 182 50v82c0 48-36 82-82 102l50-48c7-18 10-40 10-62s-3-42-10-58Z" fill="#1c2848"/></g><path d="M100 102 112.5 124 100 148 87.5 124Z" fill="url(#g)"/></svg>`;

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "80px 96px",
          background: "radial-gradient(circle at 78% 45%, #0f3a5c 0%, #0a1124 55%)",
          color: "#f4f7fb",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 680 }}>
          <div style={{ fontSize: 30, letterSpacing: 10, fontWeight: 800, color: "#9fe8f2" }}>OPAL SCREENING</div>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.02, marginTop: 28, letterSpacing: -2 }}>Workplace Screening. Done Right.</div>
          <div style={{ fontSize: 28, marginTop: 28, color: "#b4c0d4" }}>DOT drug & alcohol testing · C/TPA · FMCSA Clearinghouse · Employer screening</div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img width={300} height={360} src={`data:image/svg+xml;base64,${Buffer.from(mark).toString("base64")}`} alt="" />
      </div>
    ),
    size,
  );
}
