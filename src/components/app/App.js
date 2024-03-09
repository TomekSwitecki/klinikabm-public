import { Fragment } from "react";
import { Hero } from "../hero/Hero";
import { Navbar } from "../navbar/Navbar";
import { Testimonials } from "../_testimonials/Testimonials";
import { Uslugi } from "../_uslugi/Uslugi";
import { Faq } from "../faq/Faq";
import { Footer } from "../_footer/Footer";
import { DlaczegoMy } from "../_dlaczego-my/DlaczegoMy";
import { PhotoShowcase } from "../PhotoShowcase/PhotoShowcase";

export function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="app">
        <Hero />
        <Uslugi />
        <DlaczegoMy />
        <Testimonials />
        <PhotoShowcase />
        <Faq />
      </div>
      <Footer />
    </Fragment>
  );
}
