import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "Saeed Ijaz - Creative Designer",
  description: "Portfolio of Saeed Ijaz, showcasing creative design work and expertise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <div className="mouse-interactive-orb mouse-interactive-orb-1" id="orb1"></div>
        <div className="mouse-interactive-orb mouse-interactive-orb-2" id="orb2"></div>
        {children}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const orb1 = document.getElementById('orb1');
              const orb2 = document.getElementById('orb2');
              
              let mouseX = 0;
              let mouseY = 0;
              let orb1X = 0;
              let orb1Y = 0;
              let orb2X = 0;
              let orb2Y = 0;
              
              document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
              });
              
              function animate() {
                const speed1 = 0.05;
                const speed2 = 0.03;
                
                orb1X += (mouseX - orb1X - 200) * speed1;
                orb1Y += (mouseY - orb1Y - 200) * speed1;
                
                orb2X += (mouseX - orb2X - 150) * speed2;
                orb2Y += (mouseY - orb2Y - 150) * speed2;
                
                if (orb1) {
                  orb1.style.transform = \`translate(\${orb1X}px, \${orb1Y}px)\`;
                }
                if (orb2) {
                  orb2.style.transform = \`translate(\${orb2X}px, \${orb2Y}px)\`;
                }
                
                requestAnimationFrame(animate);
              }
              
              animate();
            })();
          `
        }} />
      </body>
    </html>
  );
}
