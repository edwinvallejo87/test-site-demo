import Header from '@/components/Header';
import Banner from '@/components/Banner';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
