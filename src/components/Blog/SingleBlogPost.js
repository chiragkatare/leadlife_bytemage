import {Link} from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
export default function SingleBlogPost({ post }) {
	return (
		<div className="single-news-card wow fadeInUp">
			<div className="news-thumb bg-cover" style={{ backgroundImage: `url(/img/blog/${post.img})` }}></div>
			<div className="contents">
				<div className="post-meta d-flex">
					<div className="post-cat">
						<Link to="/news">
							<p>{post.category}</p>
						</Link>
					</div>
					<div className="post-date">
						<span>{post.date}</span>
					</div>
				</div>
				<h4>
					<Link to="/post/1">
						<a>{post.title}</a>
					</Link>
				</h4>
				<p> {post.content} ...</p>

				<Link to="/post/1">
					<p className="read-more-link">
						read more <BsArrowRight color="#5B7486" size={18} />
					</p>
				</Link>
			</div>
		</div>
	);
}
