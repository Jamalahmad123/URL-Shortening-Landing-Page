import Nav from "./components/Nav";
import Hero from "./components/Hero";
import UrlForm from "./components/UrlForm";
import Stats from "./components/Stats";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

{
}
function App() {
  return (
    <>
      <Nav />
      <Hero />
      <main className="bg-lightGray">
        <UrlForm />
        <Stats />
      </main>
      <Cta />
      <Footer />
    </>
  );
}

export default App;
