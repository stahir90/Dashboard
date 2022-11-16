import { useQuery } from 'react-query';
import useCity from '../../services/city';

const useCityPopulation = () => {
  const cityService = useCity();
  return useQuery(['population', 'city'], cityService.fetchPopulation, {
    retry: false,
  });
};

export { useCityPopulation };
