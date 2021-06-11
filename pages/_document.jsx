import Document, { Html, Head, Main, NextScript } from 'next/document';


export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="me" href="https://fosstodon.org/@siarie" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
