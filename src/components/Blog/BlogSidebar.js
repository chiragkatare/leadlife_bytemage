import {Link} from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
export default function BlogSidebar() {
	return (
		<>
			<div className="blog-sidebar-wrapper fw500">
				<div className="single-sidebar-wid search-box-widgets">
					<form action="#">
						<input type="text" placeholder="Type to search..." />
						<button type="submit">
							<AiOutlineSearch />
						</button>
					</form>
				</div>
				<div className="single-sidebar-wid">
					<div className="wid-title">
						<h5>Blog Categories</h5>
					</div>
					<div className="widget_categories">
						<ul>
							<li>
								<Link to="/news">
									<a>From The Himalayas (01)</a>
								</Link>
							</li>
							<li>
								<Link to="/news">
									<a>Smart Info (18)</a>
								</Link>
							</li>
							<li>
								<Link to="/news">
									<a>Smart Transform (59)</a>
								</Link>
							</li>
							<li>
								<Link to="/news">
									<a>SmartInspire (03)</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="single-sidebar-wid">
					<div className="wid-title">
						<h5>Recent Posts</h5>
					</div>
					<div className="recent-posts">
						<div className="single-post-item">
							<Link to="/news-details">
								<a>Eat Right : Benefits of Eating The Right Food?</a>
							</Link>
							<span>Dec. 8, 2022</span>
						</div>
						<div className="single-post-item">
							<Link to="/news-details">
								<a>Benefits Of Eating The Right Food : Energy And Sleep Levels</a>
							</Link>
							<span>Nov. 27, 2022</span>
						</div>
						<div className="single-post-item">
							<Link to="/news-details">
								<a>Benefits Of Eating The Right Food : Longer and better life </a>
							</Link>
							<span>Nov. 18, 2022</span>
						</div>
						<div className="single-post-item">
							<Link to="/news-details">
								<a>Benefits Of Eating The Right Food : Pleasure</a>
							</Link>
							<span>Oct. 09, 2022</span>
						</div>
						{/* <div className="single-post-item">
							<Link to="/news-details">
								<a>Ubisoft will pursue NFT plans despite blowback</a>
							</Link>
							<span>Jan. 05, 2022</span>
						</div> */}
					</div>
				</div>
				<div className="single-sidebar-wid">
					<div className="wid-title">
						<h5>Popular Tags</h5>
					</div>
					<div className="tagcloud">
						<Link to="/news">
							<a>New</a>
						</Link>
						<Link to="/news">
							<a>Quizzes</a>
						</Link>
						<Link to="/news">
							<a>Smart Inspire</a>
						</Link>
						{/* <Link to="/news">
							<a>Marketing</a>
						</Link> */}
					</div>
				</div>
			</div>

			<div className="newsletter-subscribe-widgets text-white">
				<div className="wid-title">
					<h5>Join Us!</h5>
				</div>
				<p>Subscribe our newsletter and stay up to date about the company</p>
				<div className="newsletter-subscribe">
					<form action="#">
						<input type="email" placeholder="Enter your email" />
						<button type="submit" className="submit-btn">
							Subscribe Now
						</button>
					</form>
				</div>
			</div>
		</>
	);
}
