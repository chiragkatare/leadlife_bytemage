import logo from './logo.svg';
import "react-image-lightbox/style.css";
import "react-modal-video/css/modal-video.min.css";
import "slick-carousel/slick/slick.css";
import Layout from "./components/Layout/Layout";
import "./styles/animate.css";
import "./styles/bootstrap.min.css";
import "./styles/icons.css";
import "./styles/scss/style.scss";
import FaqContent from "./components/Faq/FaqContent";
import HeroThree from "./components/Hero/HeroThree";
import ContentBlockOne from "./components/HomeThree/ContentBlockOne";
import ContentBlockThree from "./components/HomeThree/ContentBlockThree";
import ContentBlockTwo from "./components/HomeThree/ContentBlockTwo";
import Cta from "./components/HomeThree/Cta";
import PricingContentTwo from "./components/Pricing/PricingContentTwo";
import FeaturesFour from "./components/Features/FeaturesFour";
import TestimonialTwo from "./components/Testimonial/TestimonialTwo";

function App() {
  return (
    <>
      {/* <Head>
				<link rel="icon" href="/img/lead-life-logo1.png" />
			</Head> */}
      <Layout>
        <HeroThree />
        <FeaturesFour />
        <Cta />
        <ContentBlockOne />
        <ContentBlockTwo />
        {/* <ContentBlockThree /> */}
        <PricingContentTwo />
      </Layout>
    </>


  );
}


export default App;
