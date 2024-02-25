import hero from '../assets/hero.jpeg';

const Hero = ()=> {
  return (
    <div>
     <img src={hero} className='w-full mx-56 max-h-[600px] max-w-[800px]  object-cover'/>
    </div>
  );
};
export default Hero
