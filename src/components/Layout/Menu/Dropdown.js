import {Link} from "react-router-dom";
export default function Dropdown({ submenus, isDropdownOpen }) {
	const style = {
		height: isDropdownOpen ? submenus.length * 49 : "0",
	};

	return (
		<ul className={`sub-menu ${isDropdownOpen ? "show" : ""}`} style={style}>
			{submenus.map((submenu, index) => (
				<li key={index}>
					<Link to={`${submenu.path !== "/" ? "/" + submenu.path : submenu.path}`}>
						<a>{submenu.title}</a>
					</Link>
				</li>
			))}
		</ul>
	);
}
