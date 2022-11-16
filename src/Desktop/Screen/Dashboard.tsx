import { FC } from "react";
import Container from "../../common/component/Container";
import { colors } from "../../theme";
import Landing from "../component/Landing";
import { useCityPopulation } from "../hooks/Dashboard";

const Dashboard: FC = () => {
  const { data } = useCityPopulation();

  return (
    <Container bgColor={colors.grey} center={true}>
      <Landing />
    </Container>
  );
};

export default Dashboard;
