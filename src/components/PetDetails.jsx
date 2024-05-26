export default function PetDetails({ setPetId }) {
  return (
    // <div className="col-span-1  grid w-full sm:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 gap-2 p-10 bg-sky-500/100 sm:mx-auto rounded-md ">
    <div className="grid col-span-3 w-full sm:grid-cols-1 gap-2 p-10 sm:mx-auto rounded-md bg-indigo-800 bg-opacity-50 rounded-sm">
      <h1 className="underline">POKEMON DETAILS</h1>
      <h1>{setPetId}</h1>
    </div>
  );
}
