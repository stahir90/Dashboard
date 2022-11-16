import { Response } from "../common/types/index";

const useCity = () => {
  return {
    fetchPopulation: () =>
      fetch(
        "https://datausa.io/api/data?drilldowns=State&measures=Population&year=2019"
      ).then((response) => response.json() as Promise<Response>),
  };
};

export default useCity;
