export default function DefaultLayout({children}) {
	return (
		<div className="container">
			<main role="main">
				{children}
			</main>
		</div>
	)
}
