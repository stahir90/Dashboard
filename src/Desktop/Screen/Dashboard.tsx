import { FC } from 'react';
import Landing from '../component/Landing';
import { useCityPopulation } from '../hooks/Dashboard';

const Dashboard: FC = () => {
  const { data } = useCityPopulation();

  return <Landing />;
};

export default Dashboard;
