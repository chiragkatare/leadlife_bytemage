import {Link} from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimesCircle } from "react-icons/fa";
import MenuItems from "./Menu/MenuItems";
import { menuItems } from "./menuItems";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="header-1">
			<div className="container">
				<div className="row align-items-center justify-content-between">
					<div className="col-lg-2 col-sm-5 col-md-4 col-6">
						<div className="logo">
							<Link to="/">
								<>
									<img src="https://leadlife.in/wp-content/uploads/2022/12/lead-life-logo1.png" alt="Leaflife" />
								</>
							</Link>
						</div>
					</div>
					<div className="col-lg-10 text-end p-lg-0 d-none d-lg-flex justify-content-between align-items-center">
						<div className="menu-wrap">
							<div className="main-menu">
								<ul>
									<li>
										<a href="/">Home</a>
										{/* <ul className="sub-menu">
											<li>
												<Link to="/">
													<a>Home 1</a>
												</Link>
											</li>
											<li>
												<Link to="/index-two">
													<a>Home 2</a>
												</Link>
											</li>
											<li>
												<Link to="/index-three">
													<a>Home 3</a>
												</Link>
											</li>
										</ul> */}
									</li>
									<li>
										<Link to="/about">
											<a>About</a>
										</Link>
									</li>
									<li>
										{" "}
										<Link to="/services">
											<a>Services</a>
										</Link>
									</li>
									<li>
										<a href="#">Pages</a>
										<ul className="sub-menu">
											<li>
												<Link to="/faq">
													<a>faq</a>
												</Link>
											</li>
											<li>
												<Link to="/team">
													<a>team</a>
												</Link>
											</li>
											<li>
												<Link to="/projects">
													<a>portfolio</a>
												</Link>
											</li>
											<li>
												<Link to="/pricing">
													<a>pricing</a>
												</Link>
											</li>
											<li>
												<Link to="/404">
													<a>404</a>
												</Link>
											</li>
										</ul>
									</li>
									<li>
										<Link to="/news">
											<a>News</a>
										</Link>
									</li>
									<li>
										<Link to="/contact">
											<a>Contact</a>
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="header-right-element text-white">
							<a href="#">login</a>
							<Link to="/contact">
								<a className="theme-btn black">get started</a>
							</Link>
						</div>
					</div>
					<div className="d-block d-lg-none col-sm-1 col-md-8 col-6">
						<div className="mobile-nav-wrap">
							<div id="hamburger" onClick={() => setIsOpen((prev) => !prev)}>
								<FaBars />
							</div>

							<div className={`mobile-nav ${isOpen ? "show" : ""}`}>
								<button type="button" className="close-nav" onClick={() => setIsOpen((prev) => !prev)}>
									<FaTimesCircle />
								</button>
								<nav className="sidebar-nav">
									<ul className="metismenu" id="mobile-menu">
										{menuItems.map((menu, index) => (
											<MenuItems isOpenMenu={isOpen} key={index} items={menu} />
										))}
									</ul>

									<Link to="/contact">
										<a className="theme-btn d-block mt-4 text-center ms-0">Register</a>
									</Link>
								</nav>
							</div>
						</div>
						<div
							className={`overlay ${isOpen ? "active" : ""}`}
							onClick={() => setIsOpen((prev) => !prev)}
						></div>
					</div>
				</div>
			</div>
		</header>
	);
}
