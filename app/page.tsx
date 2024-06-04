import Head from "next/head";

//components
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<>
			<Head>
				<meta
					name="facebook-domain-verification"
					content="o8kln1ppmlh5w99e719pbx4jitw81a"
				/>
			</Head>
			<main className="main">
				<Hero />
				<About />
				<Services />
				<Portfolio />
				<Testimonials />
				<Contact />
				<Footer />
			</main>
		</>
	);
}
