import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import NewCollections from '../Components/NewCollections/NewCollections';
import Newsletter from '../Components/Newsletter/Newsletter';
import ScrollToTop from '../Components/ScrollToTop';

export default function Shop() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <ScrollToTop />
      <NewCollections />
      <Newsletter />
    </div>
  );
}