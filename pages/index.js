import Head from "next/head"
import Link from "next/link"
import Mail from "../organisms/socials/Mail"
import GitHub from "../organisms/socials/GitHub"
import Twitter from "../organisms/socials/Twitter"
import Behance from "../organisms/socials/Behance"
import LinkedIn from "../organisms/socials/LinkedIn"
import Dribbble from "../organisms/socials/Dribbble"
import ExternalLink from "../organisms/ExternalLink"

export default function Home() {
	return (
		<>
			<Head>
				<title>Hello 👋🏾 • Ekim Kael | UX Engineer from Cameroon.</title>
				<meta name="title" content="Ekim Kael | UX Engineer from Cameroon." />
				<meta
					name="description"
					content="I build apps that help your users to quickly understand what you do so they can get started with you."
				/>
			</Head>

			<header className="welcome-hero flex-centered">
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-7">
							<h3>Hello 👋🏾, I'm</h3>
							<h1 className="w-title text-white">
								<b>Ekim Kael.</b>
							</h1>
							<h3 className="text-secondary">UX Engineer • UX Developer.</h3>
							<p className="w-lead text-white py-3">
								I love when beautiful things are useful.
							</p>

							<div
								className="btn-group btn-group-lg border-0"
								role="group"
								aria-label="social medias icons buttons"
							>
								<a
									href="https://twitter.com/ekimkael/"
									className="btn btn-primary"
									target="_blank"
									rel="noreferrer noopener"
								>
									<Twitter />
								</a>
								<a
									href="https://github.com/ekimkael/"
									className="btn btn-primary"
									target="_blank"
									rel="noreferrer noopener"
								>
									<GitHub width="24" height="24" />
								</a>
								<a
									href="https://dribbble.com/ekimkael/"
									className="btn btn-primary"
									target="_blank"
									rel="noreferrer noopener"
								>
									<Dribbble />
								</a>
								<a
									href="https://behance.net/ekimkael/"
									className="btn btn-primary"
									target="_blank"
									rel="noreferrer noopener"
								>
									<Behance />
								</a>
								<a
									href="https://linkedin.com/in/michelmbili/"
									className="btn btn-primary"
									target="_blank"
									rel="noreferrer noopener"
								>
									<LinkedIn />
								</a>
							</div>
							{/* Contact */}
							<div className="my-4">
								<section className="btn-group">
									<a
										href="mailto:michelmbili@gmail.com"
										className="btn btn-outline-light"
										target="_blank"
										rel="noreferrer noopener"
									>
										📨 Contact Me
									</a>
									<Link href="/about">
										<a className="btn btn-outline-light">• WHO AM I? 🤷🏾‍♂️ •</a>
									</Link>
								</section>
							</div>
						</div>
						<div className="col-12 col-md-5">
							<hr className="d-md-none" />
							<div className="container">
								<div className="row justify-content-between">
									<h5>
										<b>Projects.</b>
									</h5>

									<Link href="/works">
										<a>See more</a>
									</Link>
								</div>
							</div>
							<ul className="list-group">
								<li className="list-group-item list-group-item-action">
									<div className="d-flex w-100 justify-content-between">
										<h3 className="text-secondary mb-1">
											<b>Nextrap</b>
										</h3>
										<small className="badge badge-info align-self-start">
											Open Source
										</small>
									</div>
									<p className="mb-1">
										A Nextjs boilerplate with steroid packages.
									</p>
									<section
										className="btn-group btn-group-sm"
										role="group"
										aria-label="Basic example"
									>
										<a
											href="https://github.com/ekimkael/nextrap"
											target="blank"
											role="button"
											className="btn btn-outline-light border-0"
										>
											<GitHub width="16" height="16" />
										</a>
										<a
											href="https://nextrap.vercel.app/"
											target="blank"
											role="button"
											className="btn btn-outline-light border-0"
										>
											<ExternalLink />
										</a>
									</section>
								</li>
								<li className="list-group-item list-group-item-action">
									<div className="d-flex w-100 justify-content-between">
										<h3 className="text-secondary mb-1">
											<b>Cococi</b>
										</h3>
										<small className="badge badge-danger align-self-start">
											Client
										</small>
									</div>
									<p className="mb-1">
										Non-profit organization helping orphans.
									</p>
									<div
										class="btn-group btn-group-sm"
										role="group"
										aria-label="Basic example"
									>
										<a
											href="https://cococi.org/"
											target="blank"
											role="button"
											className="btn btn-outline-light border-0"
										>
											<ExternalLink />
										</a>
									</div>
								</li>
								<li className="list-group-item list-group-item-action">
									<div className="d-flex w-100 justify-content-between">
										<h3 className="text-secondary mb-1">
											<b>Cryptochain</b>
										</h3>
										<section>
											<small className="badge badge-secondary align-self-start mr-1">
												Redesign
											</small>
											<small className="badge badge-secondary align-self-start">
												Personal
											</small>
										</section>
									</div>
									<p className="mb-1">
										Buy, sell bitcoin without pain and save time.
									</p>
									<section
										class="btn-group btn-group-sm"
										role="group"
										aria-label="Basic example"
									>
										<a
											href="https://github.com/ekimkael/blockchain"
											target="blank"
											role="button"
											className="btn btn-outline-light border-0"
										>
											<GitHub width="16" height="16" />
										</a>
										<a
											href="https://cryptomum.vercel.app/"
											target="blank"
											role="button"
											className="btn btn-outline-light border-0"
										>
											<ExternalLink />
										</a>
									</section>
								</li>
								<li className="list-group-item list-group-item-action">
									<div className="d-flex w-100 justify-content-between">
										<h3 className="text-secondary mb-1">
											<b>WPTB</b>
										</h3>
										<section>
											<small className="badge badge-secondary align-self-start mr-1">
												CLI
											</small>
											<small className="badge badge-secondary align-self-start">
												Tool
											</small>
										</section>
									</div>
									<p className="mb-1">
										CLI to scraffold WordPress theme development.
									</p>
									<section
										class="btn-group btn-group-sm"
										role="group"
										aria-label="Basic example"
									>
										<a
											href="https://github.com/ekimkael/wptb"
											target="blank"
											role="button"
											className="btn btn-outline-light border-0"
										>
											<GitHub width="16" height="16" />
										</a>
									</section>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}
