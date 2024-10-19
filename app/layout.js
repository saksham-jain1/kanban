import { Inter } from "next/font/google";
import { Providers } from "./Components/Helpers/Providers";
import "./globals.css";
import Header from "./Components/Header";
import EditModal from "./Components/Modals.js/EditModal";
import BgModal from "./Components/Modals.js/BgModal";
import ShareModal from "./Components/Modals.js/ShareModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kanban App",
  description: "Kanban board ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Providers>
          <EditModal />
          <BgModal />
          <ShareModal />
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
