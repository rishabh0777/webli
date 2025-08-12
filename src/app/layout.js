import "boxicons/css/boxicons.min.css";
import "./globals.css";
import { Toaster } from 'react-hot-toast';




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="JtjC0Spp1E4E7qkWm6b3CI6fpyxqbM4CT1FXrAwLR28" />
      </head>
      <body>
      <main>{children}</main>
      <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#1a1a1a',
              color: '#fff',
              borderRadius: '8px',
              fontSize: '0.9rem',
            },
            success: {
              iconTheme: {
                primary: '#22c55e',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  );
}
