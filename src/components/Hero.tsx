import mobileHero from "../images/image-hero-mobile.png";
import desktopHero from "../images/image-hero-desktop.png";
import databiz from "../images/client-databiz.svg";
import audiophile from "../images/client-audiophile.svg";
import meet from "../images/client-meet.svg";
import maker from "../images/client-maker.svg";

function Hero() {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:grid-rows-1 h-[calc(100vh-6rem)] overflow-hidden">
      <img src={mobileHero} alt="Hero" className="mb-10 lg:hidden" />
      <img
        src={desktopHero}
        alt="Hero"
        className="hidden lg:inline-block col-start-2 h-[85%] object-contain justify-self-center"
      />
      <div className="lg:col-start-1 lg:row-start-1 lg:justify-self-center my-auto">
        <h1 className="almost-black font-bold text-[2.6rem] lg:text-8xl text-center lg:text-left mb-3 lg:mb-10">
          Make <br className="hidden lg:inline" /> Remote Work
        </h1>
        <p className="medium-gray text-center text-xl px-1 mb-10 lg:mb-16 lg:text-left lg:text-2xl">
          Get your team in sync, no matter your location.
          <br className="hidden lg:inline" /> Streamline processes, create team
          rituals, and <br className="hidden lg:inline" /> watch productivity
          soar.
        </p>
        <div className="flex justify-center lg:justify-start mb-16 lg:mb-28">
          <button className="almost-white bg-[#141414] py-4 px-8 rounded-xl">
            Learn More
          </button>
        </div>
        <div className="flex justify-evenly lg:justify-between w-full lg:w-[95%]">
          <img
            src={databiz}
            alt="Databiz"
            className="w-24 lg:w-28 object-contain"
          />
          <img
            src={audiophile}
            alt="Audiophile"
            className="w-16 lg:w-20 object-contain"
          />
          <img src={meet} alt="Meet" className="w-20 lg:w-24 object-contain" />
          <img
            src={maker}
            alt="Maker"
            className="w-20 lg:w-24 object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
