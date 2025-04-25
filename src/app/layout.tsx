import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "WayniWallet",
	description: "Challenge Técnico",
};

export const viewport: Viewport = {
	themeColor: "#0FD08B",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased`}>
				<div className="max-w-[430px] mx-auto overflow-hidden p-5">
					{children}
				</div>
			</body>
		</html>
	);
}
