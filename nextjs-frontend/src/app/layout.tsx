import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Box, ThemeProvider } from "@mui/material"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"

import theme from "../theme"
import { Navbar } from "@/components/Navbar/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Code Commerce",
  description: "Uma Full Cycle Shop",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <div>
              <Navbar />
              <Box
                component="main"
                sx={{
                  flexGrow: 1,
                  bgcolor: "background.default",
                  mt: ["122px", "135px", "146px"],
                  p: 3, // trabalha com escala padrão de 8px; logo o padding final vai ser de 24px
                }}
              >
                {children}
              </Box>
            </div>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
