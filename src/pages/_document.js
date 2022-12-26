import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head>
				<Link to="/fonts/GeneralSans-Bold.eot" rel="stylesheet" />
				<Link to="/fonts/GeneralSans-Bold.woff" rel="stylesheet" />
				<Link to="/fonts/GeneralSans-Bold.woff2" rel="stylesheet" />

				<Link to="/fonts/GeneralSans-Medium.eot" rel="stylesheet" />
				<Link to="/fonts/GeneralSans-Medium.woff" rel="stylesheet" />
				<Link to="/fonts/GeneralSans-Medium.woff2" rel="stylesheet" />

				<Link to="/fonts/GeneralSans-Regular.eot" rel="stylesheet" />
				<Link to="/fonts/GeneralSans-Regular.woff" rel="stylesheet" />
				<Link to="/fonts/GeneralSans-Regular.woff2" rel="stylesheet" />

				<Link to="/fonts/GeneralSans-Semibold.eot" rel="stylesheet" />
				<Link to="/fonts/GeneralSans-Semibold.woff" rel="stylesheet" />
				<Link to="/fonts/GeneralSans-Semibold.woff2" rel="stylesheet" />

				<Link to="/fonts/xmoze.eot" rel="stylesheet" />
				<Link to="/fonts/xmoze.woff" rel="stylesheet" />
				<Link to="/fonts/xmoze.woff2" rel="stylesheet" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
