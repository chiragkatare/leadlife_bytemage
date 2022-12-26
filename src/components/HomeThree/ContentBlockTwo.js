import React from 'react';

export default function ContentBlockTwo() {
	return (
		<section className="content-block section-padding style-2 section-bg-2 fw500">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-xl-5 mt-5 mt-xl-0 order-2 order-xl-1">
						<div className="block-contents">
							<div className="section-title mb-4 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
								<h2>Conceptual clarity through visualisation</h2>
							</div>
							<p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
								our content enables young learners
								to develop core skills and concepts while learning alongside. We also help little ones learn
								foundational topics with video-based learning that is
								interactive and personalised.
							</p>
							<ul className="checked-list bg-checked color-set">
								<li className="wow fadeInUp" data-wow-delay=".5s">
									This will help speed leaning
								</li>
								<li className="wow fadeInUp" data-wow-delay=".7s">
									Make tracking childs prrogress easier
								</li>
							</ul>
						</div>
					</div>
					<div className="col-xl-5 offset-xl-2 ps-xl-0 order-1 order-xl-2">
						<div className="block-img">
							<img src="/img/home3/block2.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
