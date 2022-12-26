import { BiLayerMinus } from "react-icons/bi";
import { FaHatCowboySide } from "react-icons/fa";
import { MdOutlineMobileScreenShare } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
export default function FeaturesFour() {
	return (
		<section className="strong-services-wrapper section-bg section-padding fw500">
			<div className="container">
				<div className="col-lg-8 ps-xl-5 pe-xl-5 col-12 offset-lg-2 text-center">
					<div className="block-contents">
						<div className="section-title wow fadeInUp" data-wow-duration="1s">
							<h2>Learn from anywhere with access to web</h2>
							<p>
								Our vision is to be the source
								for childhood learning on the internet
								available from anywhere.
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6 col-xl-3">
						<div className="strong-service-card card1">
							<div className="icon">
								<BiLayerMinus />
							</div>
							<div className="service-title">
								<h3>Rich Educative Content</h3>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-xl-3">
						<div className="strong-service-card card2">
							<div className="icon">
								<MdOutlineMobileScreenShare />
							</div>
							<div className="service-title">
								<h3>Informative Video Content</h3>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-xl-3">
						<div className="strong-service-card card3">
							<div className="icon">
								<FaHatCowboySide />
							</div>
							<div className="service-title">
								<h3>Elaborative and Interative Quizes for Assesments</h3>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-xl-3">
						<div className="strong-service-card card4">
							<div className="icon">
								<RiSecurePaymentFill />
							</div>
							<div className="service-title">
								<h3>Privacy and Security of children</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
