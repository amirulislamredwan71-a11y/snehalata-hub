import './globals.css' // CSS ফাইল ইমপোর্ট নিশ্চিত করুন

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
