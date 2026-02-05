import "./globals.css";

export const metadata = {
  title: "SNEHALATA SUPREME | Royal Fashion Ecosystem",
  description: "AI-Powered Fashion Hub for Elite Brands",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
