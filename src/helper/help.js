const finder = (cars, search) => {
  if (!search) return cars;
  const searchedCars = cars.filter((item) =>
    item.make.toLowerCase().includes(search)
  );
  return searchedCars;
};
const createQuery = (currentQuery, newQuery) => {
  if (newQuery.search === "") {
    const { search, ...other } = currentQuery;
    return other;
  }
  return {
    ...currentQuery,
    ...newQuery,
  };
};

const keeper = (searchParams) => {
  const query = {};
  const search = searchParams.get("search");
  if (search) query.search = search;
  return query;
};

export { finder, createQuery, keeper };
