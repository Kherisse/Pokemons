import pokes from "../assets/pokemon1.png";

export default function Homehero() {
  return (
    <div className="hero w-full mt-10 bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={pokes} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="mx-auto text-center">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Welcome to the new Pokemon Library! Come and explore Pokemon specs
            and details!
          </p>
        </div>
      </div>
    </div>
  );
}
