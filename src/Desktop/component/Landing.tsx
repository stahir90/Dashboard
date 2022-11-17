import { FC } from "react";
import Card from "../../common/component/Card";
import Container from "../../common/component/Container";
import { PopulationList } from "../../common/types";

interface iLanding {
  cities: PopulationList | undefined;
}

const Landing: FC<iLanding> = ({ cities }) => {
  return (
    <Container justify="center">
      {cities?.map((city) => {
        return (
          <Card
            key={city.State}
            title={city.State}
            middle={`Population: ${city.Population}`}
            last={`Jahr: ${city.Year}`}
          />
        );
      })}
    </Container>
  );
};

export default Landing;
