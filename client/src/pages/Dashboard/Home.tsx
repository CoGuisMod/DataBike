/* Icons import */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <section className="w-full h-full pl-8 pr-4 py-4">
      <div className="flex justify-between items-center w-full">
        {/* Title */}
        <div>
          <h1 className="font-bold text-xl">Productos</h1>
        </div>

        {/* Search bar */}
        <div className="relative flex items-center">
          <input
            type="text"
            className="rounded-full text-slate-900 pl-2 pr-8 py-1"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute right-2 text-lg text-slate-900"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
