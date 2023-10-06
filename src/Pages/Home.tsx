
import jointest from '../assets/Img/jointest.jpg';
import AboutusBanner from '../assets/Img/testcode.jpg';


const AboutusBannerImg = { backgroundImage: `url(${AboutusBanner})` };

function Home() {
  return (
    <>
      <div className="innerBanner" style={AboutusBannerImg}>
        <div className="container">
          <div className="row">
            <div className="col-8 mx-auto">
              <h1>Dynamic Code Swith</h1>
            </div>
          </div>
        </div>
      </div>



      <div className='container py-5'>
        <div className='row'>
          <div className='col-xl-6'>
            <p>
              In partnership with Dutton Books, Amazon Literary Partnership, and Feminist Press, Girls Write Now is thrilled to announce our newest publication, Girls Write Now On the Other Side of Everything: 2023 Anthology. Set for release on Tuesday, May 23rd, the anthology is a multi-genre showcase of the best writing from today’s next-gen voices and leaders.</p>
            <p>
              “In a world that often encourages girls and gender expansive youth to listen rather than speak, Girls Write Now reminds us our power lies in boldly using our words and voices—as forces for change, to uplift one another, and to thoughtfully write and share the stories that matter most.”
            </p>
            <p>
              Do you know what it’s like to communicate with your family across a salty ocean’s divide? Do you want the sun and moon to enter your home with stories written in embers? Do you seek voices that will shatter expectations? Welcome to the other side of everything. It’s the other side of silence, the other side of childhood, the other side of hate, the other side of indifference, it’s the other side of sides, where the binary breaks down. It’s a new paradigm, a destination, a different perspective, a mindset, a state of openness, the space between the endless folds in your forehead, hopes for tomorrow, and reflections on the past. This anthology of diverse voices is an everything bagel of literary genres and love songs, secrets whispered in the dark of night, conversations held with ancestors under the sea.
            </p>

          </div>
          <div className='col-xl-6'>
            <img src={jointest} className='img-fluid' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
