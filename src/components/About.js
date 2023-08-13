import img from '../images/about.jpeg';
import Title from './Title';

const About = () => {
  return (
    <section className='section' id='about'>
      <Title text1='about' text2='us' />

      <div className='section-center about-center'>
        <div className='about-img'>
          <img src={img} className='about-photo' alt='awesome beach' />
        </div>
        <article className='about-info'>
          <h3>Tailored Experiences</h3>
          <p>
            At AdventureQuest Tours, we understand that every traveler is
            unique. That's why our tours can be tailored to suit your
            preferences, whether you're seeking pulse-pounding activities,
            serene retreats, cultural immersions, or a blend of it all.
          </p>
          <h3>Discover the Extraordinary</h3>
          <p>
            Our meticulously crafted tours are designed to immerse you in the
            heart and soul of every destination. Trek through lush rainforests,
            scale towering mountain peaks, dive into crystalline waters teeming
            with marine life, and traverse charming cobblestone streets in
            ancient cities.
          </p>
          <a href='#about' className='btn'>
            read more
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
