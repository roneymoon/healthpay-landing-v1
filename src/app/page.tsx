import Faqs from "@/sections/Faqs";
import Features from "@/sections/Features";
import Hero from "@/sections/Hero";
import Integrations from "@/sections/Integrations";
import Introduction from "@/sections/Introduction";
import LogoTicker from "@/sections/LogoTicker";
import Navbar from "@/sections/Navbar";
import CallToAction from "@/sections/CallToAction";
import Footer from "@/sections/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero/>
            <LogoTicker/>
            <Introduction/>
            <Features/>
            <Integrations/>
            <Faqs/>
            <CallToAction/>
            <Footer/>
        </>
    );
}


// Page Themes
// #3c8fe8 - primary
// #8bdbf6 - secondary

// additional colors
// #0079d0 - tertiary
// #8bdbf6 - quaternary
// #0079d0 - quinary
// #8bdbf6 - senary
// #0079d0 - septenary
// #8bdbf6 - octonary
// #0079d0 - nonary
// #8bdbf6 - denary
