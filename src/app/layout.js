import "./globals.css";

export const metadata = {
  title: "SNEHALATA SUPREME | Royal AI Ecosystem",
  description: "Crafted by Aura AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
