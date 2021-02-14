import Head from "next/head"
import Navbar from "../organisms/Navbar"

export default function About() {
	return (
		<>
			<Head>
				<title>About • Ekim Kael | UX Engineer from Cameroon.</title>
			</Head>

			<Navbar />

			<div className="container">
				<div className="row">
					<div className="col-12 col-md-6">
						<img
							src="/icon.png"
							className="img-fluid"
							alt="Memoji of Ekim Kael"
						/>
					</div>
					<div className="col-md-6 text-muted lead">
						<p>
							I'm a self-taught{" "}
							<span className="badge-secondary">UX Engineer</span> (UI|UX
							designer and Frontend developer) from{" "}
							<span className="text-secondary">Cameroon</span>. I design and
							build{" "}
							<span className="badge-secondary">intuitive interfaces</span>{" "}
							which allow users to quickly get started with your
							services/products. That's why I like to work on{" "}
							<span className="text-secondary">products/projects</span> that are{" "}
							<span className="badge-secondary">useful</span> to people.
						</p>
						<h3 className="text-secondary">Random things about me.</h3>
						<ul>
							<li>I love being precise and concise.</li>
							<li>
								I loved Windows Phones especially the Windows Phone 10 release.
							</li>
							<li>
								My teammates call me Doctor Bootstrap as I master the 4th
								version 😵.
							</li>
							<li>
								I love animes, my favorites are Full Metal Alchemist Brotherhood
								• Shingeki No Kyojin.
							</li>
							<li>
								I didn't like to update Windows each month, but today I build
								apps and people just magically discover the new version 😂 and I
								find it funny.
							</li>
							<li>In multi-storey buildings, I like the second floor.</li>
							<li>
								I'm panicked and stressed when I see over ten tabs open on my
								browser.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}
