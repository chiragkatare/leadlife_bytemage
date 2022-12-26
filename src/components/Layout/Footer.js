import {Link} from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
export default function Footer() {
	return (
		<footer className="footer-wrapper">
			<div className="footer-widgets-wrapper">
				<div className="container">
					<div className="row">
						<div className="col-xl-3 col-lg-4 col-md-6 col-12">
							<div className="single-footer-widget wow fadeInLeft">
								<div className="about-us-widget">
									<Link to="/">
										<a className="footer-logo d-block">
											<img src="/img/lead-life-logo1.png" alt="xmoze" />
										</a>
									</Link>
									<p>
										Xmoze helps millions of people get the best Wordpress theme design and offers
										software reviews, ratings, comprehensive services.
									</p>
								</div>
							</div>
						</div>
						<div className="col-xl-2 col-lg-3 offset-xl-1 col-md-6 col-12">
							<div className="single-footer-widget wow fadeInLeft" data-wow-delay=".2s">
								<div className="widget-title">
									<h5>Company</h5>
								</div>
								<ul>
									<li>
										<Link to="/about">
											<a>About xmoze</a>
										</Link>
									</li>
									<li>
										<Link to="/contact">
											<a>Contact & support</a>
										</Link>
									</li>
									<li>
										<Link to="/#">
											<a>Setting & privacy</a>
										</Link>
									</li>
									<li>
										<Link to="#">
											<a>Setting & privacy</a>
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-2 col-lg-3 offset-xl-1 col-md-6 col-12">
							<div className="single-footer-widget wow fadeInLeft" data-wow-delay=".4s">
								<div className="widget-title">
									<h5>Services</h5>
								</div>
								<ul>
									<li>
										<Link to="#">
											<a>Incident responder</a>
										</Link>
									</li>
									<li>
										<Link to="#">
											<a>Secure managed IT</a>
										</Link>
									</li>
									<li>
										<Link to="#">
											<a>Check website Url</a>
										</Link>
									</li>
									<li>
										<Link to="#">
											<a>Locker security</a>
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-2 col-lg-3 offset-xl-1 col-md-6 col-12">
							<div className="single-footer-widget wow fadeInLeft" data-wow-delay=".6s">
								<div className="widget-title">
									<h5>Resources</h5>
								</div>
								<ul>
									<li>
										<Link to="#">
											<a>Payment plans</a>
										</Link>
									</li>
									<li>
										<Link to="#">
											<a>Blogs & guides</a>
										</Link>
									</li>
									<li>
										<Link to="#">
											<a>Premium support</a>
										</Link>
									</li>
									<li>
										<Link to="#">
											<a>Our products</a>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-bottom-wrapper">
				<div className="container">
					<div className="footer-bottom-content d-md-flex justify-content-between">
						<div className="site-copyright wow fadeInUp" data-wow-delay=".2" data-wow-duration="1s">
							<p>
								&copy; 2022{" "}
								<Link to="#">
									<a>LeadLife</a>
								</Link>{" "}
								All Rights Reserved.
							</p>
						</div>
						<div
							className="social-links mt-4 mt-md-0 wow fadeInUp"
							data-wow-delay=".3"
							data-wow-duration="1s"
						>
							<Link to="#">
								<a>
									<FaFacebookF />
								</a>
							</Link>
							<Link to="#">
								<a>
									<FaTwitter />
								</a>
							</Link>
							<Link to="#">
								<a>
									<FaInstagram />
								</a>
							</Link>
							<Link to="#">
								<a>
									<FaLinkedinIn />
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
