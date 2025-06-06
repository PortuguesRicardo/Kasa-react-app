
import accommodations from '../data/accommodations.json';
import Card from '../components/Card';
import Banner from '../components/Banner';
import bannerImage from '../assets/beachCliff.jpg';
import '../styles/Home.scss';


function Home() {
  return (
    <div>
      <Banner image={bannerImage} text="At home, everywhere, and anywhere" />
      <div className="cards-container">
        {accommodations.map(({ id, title, cover }) => (
          <Card key={id} id={id} title={title} cover={cover} />
        ))}
      </div>
    </div>
  );
}


export default Home;

