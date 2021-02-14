import Head from "next/head"
import Navbar from "../organisms/Navbar"

export default function Works() {
	return (
		<>
			<Head>
				<title>Works • Ekim Kael | UX Engineer from Cameroon.</title>
			</Head>

			<Navbar />

			<div className="container">
				<div className="row">
					<div className="col-12 col-md-7">
						<img
							src="/nextrap.png"
							className="img-fluid"
							alt="Memoji of Ekim Kael"
						/>
					</div>
					<div className="col-md-5 text-muted lead">
						<ul className="list-group">
							<li className="list-group-item list-group-item-action">
								<div className="d-flex w-100 justify-content-between">
									<h3 className="text-white mb-1">
										<b>Nextrap</b>
									</h3>
									<small className="badge badge-info align-self-start">
										Open Source
									</small>
								</div>
								<p className="mb-1">
									A Nextjs boilerplate with steroid packages.
								</p>
							</li>
							<li className="list-group-item list-group-item-action">
								<div className="d-flex w-100 justify-content-between">
									<h3 className="text-white mb-1">
										<b>Cococi</b>
									</h3>
									<small className="badge badge-danger align-self-start">
										Client
									</small>
								</div>
								<p className="mb-1">Non-profit organization helping orphans.</p>
							</li>
							<li className="list-group-item list-group-item-action">
								<div className="d-flex w-100 justify-content-between">
									<h3 className="text-white mb-1">
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
							</li>
							<li className="list-group-item list-group-item-action">
								<div className="d-flex w-100 justify-content-between">
									<h3 className="text-white mb-1">
										<b>Chosenews</b>
									</h3>
									<small className="badge badge-secondary align-self-start">
										Redesign
									</small>
								</div>
								<p className="mb-1">Redesign of a daily news app.</p>
							</li>
							<li className="list-group-item list-group-item-action">
								<div className="d-flex w-100 justify-content-between">
									<h3 className="text-white mb-1">
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
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}
