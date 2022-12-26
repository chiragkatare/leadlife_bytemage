import {Link} from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
export default function Pagination() {
	return (
		<div className="page-nav-wrap wow fadeInUp mt-80 text-center" data-wow-delay=".3s">
			<ul>
				<li className="current-page">
					<Link to="#">
						<a>1</a>
					</Link>
				</li>
				<li>
					<Link to="#">
						<a>2</a>
					</Link>
				</li>
				<li>
					<Link to="#">
						<a>3</a>
					</Link>
				</li>
				<li>
					<Link to="#">
						<a>4</a>
					</Link>
				</li>
				<li>
					<Link to="#">
						<a>
							<HiArrowRight />
						</a>
					</Link>
				</li>
			</ul>
		</div>
	);
}
