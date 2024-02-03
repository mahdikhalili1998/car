import Header from "../components/Header";
import HowWork from "../components/HowWork";
import WhyUs from "../components/WhyUs";
import { createContext, useEffect, useState } from "react";
import Car from "../components/car";
import { useQuery } from "@apollo/client";
import { GET_DATA } from "../graphql/queries";
import { createQuery, finder, keeper } from "../helper/help";
import { useSearchParams } from "react-router-dom";

export const InfoContext = createContext();
function Homepage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [car, setCar] = useState([]);
  const [display, setDisplay] = useState([]);
  const [query, setQuery] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const { data } = useQuery(GET_DATA);

  useEffect(() => {
    {
      !data ? null : setDisplay(data.carInfos);
    }
    {
      !data ? null : setCar(data.carInfos);
    }
    setQuery(keeper(searchParams));
  }, [data]);

  useEffect(() => {
    setSearchParams(query);
    setSearchValue(query.search || "");
    const result = finder(car, query.search);
    setDisplay(result);
  }, [query]);

  const searchHandler = () => {
    setQuery((query) => createQuery(query, { search: searchValue }));
  };

  return (
    <InfoContext.Provider
      value={{ searchValue, setSearchValue, searchHandler }}
    >
      <div>
        <Header />
        <HowWork />
        <WhyUs />
        <Car display={display} />
      </div>
    </InfoContext.Provider>
  );
}

export default Homepage;
