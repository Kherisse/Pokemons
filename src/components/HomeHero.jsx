import pokes from "../assets/pokemon1.png";

export default function Homehero() {
  return (
    <div className="hero w-full mt-10 bg-base-200 mx-auto">
      <div className="hero-content  flex flex-wrap">
        <img src={pokes} className="sm:max-w-sm rounded-lg shadow-2xl " />
        <div className="mx-auto text-center">
          <h1 className="text-5xl font-bold sm:text-sm">Box Office News!</h1>
          <p className="py-6 text-sm">
            Welcome to the new Pokemon Library! Come and explore your favorite
            Pokemon Information!
          </p>
        </div>
      </div>
    </div>
  );
}
