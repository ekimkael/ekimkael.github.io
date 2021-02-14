import Link from "next/link"
import { useRouter } from "next/router"

function Navbar() {
	const router = useRouter()
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<div className="container">
				<button
					type="button"
					className="navbar-brand btn btn-link"
					onClick={() => router.back()}
				>
					← Back
				</button>

				<div className="collapse navbar-collapse">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link href="/works">
								<a className="nav-link">Works</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/about">
								<a className="nav-link">About</a>
							</Link>
						</li>
						<li className="nav-item">
							<a href="mailto:michelmbili@gmail.com" className="nav-link">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
