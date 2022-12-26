import {Link} from "react-router-dom";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
// import React from 'react';
import { ImFacebook, ImInstagram, ImPinterest, ImTwitter } from "react-icons/im";
// import { FlashcardArray } from "react-quizlet-flashcard";
import BlogSidebar from "./BlogSidebar";
export default function BlogDetails() {
	return (
		<div className="blog-details-wrapper section-padding mtm-30">
			<div className="container">
				<div className="row">
					<div className="col-xl-8 col-12 pe-xl-5">
						<div className="blog-content">
							<img src="/img/blog/food1.webp" alt="" />

							<div className="post-meta d-flex">
								<div className="post-cat">
									<Link to="/news">
										<a>Sponsored</a>
									</Link>
								</div>
								<div className="post-date">
									<span>Dec. 8, 2022</span>
								</div>
							</div>

							<h3 className="pt-md-4">
								Eat Right : Some Basics About The Food We Eat{" "}
							</h3>
							<p className="mt-4">
								Food is one of the most essential requirements for the sustenance of the human body.</p>
							<p className="mt-4">Even if we don’t have clothing and shelter, we can still survive if we provide our body with the nutrients it needs.</p>
							<p className="mt-4">Food provides us with a number of nutrients, <strong>such as carbohydrates, fats, proteins, minerals and vitamins</strong>. These ingredients in turn provide us with the energy to perform various activities throughout the day and help in developing our body to perform various vital functions and activities, necessary to carry our daily life.</p>

							<p className="mt-4 mb-4">
								In whichever part of the world, we are, the food that we eat, will have a combination of these ingredients, in or the other form.
							</p>
							<p className="mt-4">
								Whether it is Rice and Chapati in Indian meals; Pizza and Risotto in Mediterranean Cuisine or Noodles and Rice in Chinese Cuisines, ultimately it will have a combination of <strong>Proteins, Carbs and Fats</strong> which are necessary for <strong>the sustenance of our body</strong>.
							</p>
							<h4>The more Local it is, the Better it is!</h4>
							<p className="mt-4">
								As we all have evolved from our ancestors who lived life eating food locally to them and hence our body’s response to the food from the local region would be naturally much better.
							</p>
							<p className="mt-4">And hence as far as possible we must consume more of the local food available to us.</p>
							<p className="mt-4">Let’s understand more about the food in the next part…</p>

							Happy Eating !!!

							<blockquote>
								<p>
									“Food is not rational. Food is culture, habit, craving and identity”
								</p>
								<cite>― Jonathen foer</cite>
							</blockquote>

							<img src="/img/blog/food2.webp" className="me-lg-3" alt="" />
							<img src="/img/blog/food3.webp" alt="" />

							<h5>Key Takeaways</h5>
							<ul>
								<li>
								Food provides us with a number of nutrients, such as carbohydrates, fats, proteins, minerals and vitamins. These ingredients in turn provide us with the energy.
								</li>
								<li>
								Proteins, Carbs and Fats which are necessary for the sustenance.
								</li>
								<li>
								The more Local food is, the Better it is
								</li>
							</ul>
						</div>

						<div className="related-post-wrapper">
							<div className="row">
								<div className="col-md-6 col-xl-4 col-12">
									<div className="single-related-post">
										<p>
											<HiArrowLeft /> Previous
										</p>
										<Link to="/news-details">
											<a>Benefits Of Eating The Right Food : Physical Appearance</a>
										</Link>
									</div>
								</div>
								<div className="col-md-6 col-xl-4 mt-md-0 mt-4 offset-xl-4 col-12 text-md-end">
									<div className="single-related-post">
										<p>
											Next <HiArrowRight />
										</p>
										<Link to="/news-details">
											<a>Sports : Kheloge Nahi Toh Jeetoge Kaise</a>
										</Link>
									</div>
								</div>
							</div>
						</div>

						<div className="share-post-wrapper d-flex justify-content-between align-items-center">
							<div className="share-title">
								<h5 className="mb-0">Share this post:</h5>
							</div>
							<div className="share-links">
								<Link to="/#">
									<a>
										<ImFacebook className="facebook" />
									</a>
								</Link>
								<Link to="/#">
									<a>
										<ImTwitter className="twitter" />
									</a>
								</Link>
								<Link to="/#">
									<a>
										<ImInstagram className="instagram" />
									</a>
								</Link>
								<Link to="/#">
									<a>
										<ImPinterest className="pinterest" />
									</a>
								</Link>
							</div>
						</div>

						<div className="comments-wrapper">
							<h5>3 comments on this post:</h5>

							<div className="comments-list">
								<div className="single-comment">
									<div
										className="user-img bg-cover"
										style={{ backgroundImage: "url(/img/blog/author2.jpg)" }}
									></div>
									<div className="comment-data">
										<h6>Juliya Naik</h6>
										<span>Dec. 25, 2021</span>

										<p>
											Leading an organization is incredibly rewarding and equally humbling.
											Confidence and humility. Every success is rewarding.
										</p>

										<a href="#" className="replay-btn">
											Reply
										</a>
									</div>
								</div>
								<div className="single-comment replay-comment">
									<div
										className="user-img bg-cover"
										style={{ backgroundImage: "url(/img/blog/author_img.jpg" }}
									></div>
									<div className="comment-data">
										<h6>Sakib Masum</h6>
										<span>Dec. 25, 2021</span>

										<p>
											we should be focusing on local food.
										</p>

										<a href="#" className="replay-btn">
											Reply
										</a>
									</div>
								</div>
								<div className="single-comment">
									<div
										className="user-img bg-cover"
										style={{ backgroundImage: "url(/img/blog/author3.jpg" }}
									></div>
									<div className="comment-data">
										<h6>Salman Ahmed</h6>
										<span>Mar. 05, 2022</span>

										<p>
											Good Content
										</p>

										<a href="#" className="replay-btn">
											Reply
										</a>
									</div>
								</div>
							</div>

							<div className="comment-form-wrapper">
								<h5 className="mb-30">Leave a comment</h5>

								<form action="#" className="comment-form row">
									<div className="col-md-6 col-12">
										<input type="text" placeholder="Name" />
									</div>
									<div className="col-md-6 col-12">
										<input type="email" placeholder="Email Address" />
									</div>
									<div className="col-md-12 col-12">
										<textarea placeholder="Write your comment"></textarea>
									</div>

									<div className="col-md-12 col-12">
										<button className="theme-btn" type="submit">
											Comment
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div className="col-xl-4 col-12">
						|<BlogSidebar />
					</div>
				</div>
			</div>
		</div>
	);
}
