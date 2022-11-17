import { FC } from "react";
import Container from "../../common/component/Container";
import Header, { HeaderTypes } from "../../common/component/Header";
import { colors } from "../../theme";
import Landing from "../component/Landing";
import { useCityPopulation } from "../hooks/Dashboard";

const Dashboard: FC = () => {
  const { data } = useCityPopulation();

  return (
    <Container bgColor={colors.grey} justify="start" fullScreen={true}>
      <Header type={HeaderTypes.H1}>{"Population der Staaten"}</Header>
      <Landing cities={data?.data} />
    </Container>
  );
};

export default Dashboard;
