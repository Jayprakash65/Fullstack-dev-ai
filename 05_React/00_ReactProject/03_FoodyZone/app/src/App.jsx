import { useEffect, useState } from "react";
import FoodyZone from "./assets/FoodyZone.svg";
import backgroundImg from "./assets/bg.png";
import SearchResult from "./components/SearchResult";

export const BASE_URL = "http://localhost:9000";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoding] = useState(false);
  const [error, setError] = useState();
  const [filteredData, setFilteredData] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState('all');

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoding(true);

      try {
        const response = await fetch(BASE_URL);
        const data = await response.json();

        setData(data);
        setFilteredData(data);
        setLoding(false);
      } catch (error) {
        setError("Unable to fetch data");
      }
    };

    fetchFoodData();
  }, []);

  // fetchFoodData();

  const searchFood = (e) => {
    const searchValue = e.target.value;

    if (searchValue === "") {
      setFilteredData(null);
    }

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredData(filter);
  };

  const filterFood = (type) => {
    if (type === "all") {
      setFilteredData(data);
      setSelectedBtn("all");
      return;
    }

    const filter = data?.filter((food) => {
      return food.type.toLowerCase().includes(type.toLowerCase());
    });

    setFilteredData(filter);
    setSelectedBtn(type);
  };

  const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];

  if (error) return <div>{error}</div>;
  if (loading) return <div> Loading.....</div>;

  return (
    <>
      <div>
        <div className="max-w-9xl mx-auto bg-[#323334] flex flex-col items-center justify-between gap-9 ">
          <div className="  flex flex-col md:flex-row gap-8 items-center justify-between   w-full py-5 md:px-20 lg:px-60">
            <div className="">
              <img className="" src={FoodyZone} alt="logo" />
            </div>

            <div className="w-[300px] ">
              <input
                className=" px-2 py-2  text-white outline-none border border-red-700 rounded w-full"
                placeholder="Search Food"
                type="text"
                onChange={searchFood}
              />
            </div>
          </div>

          <div className="flex gap-5 mb-14">
            {filterBtns.map((btn) => (
              <button
                key={btn.name}
                onClick={() => filterFood(btn.type)}
                className={` text-white px-5 py-2 rounded ${selectedBtn === btn.type ? 'bg-amber-400': 'bg-red-600'}`}
              >
                {btn.name}
              </button>
            ))}
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(${backgroundImg})` }}
          className="bg-cover h-full  min-h-[720px]"
        >
          <SearchResult data={filteredData} />
        </div>
      </div>
    </>
  );
}

export default App;
