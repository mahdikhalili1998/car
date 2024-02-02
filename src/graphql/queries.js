import { gql } from "@apollo/client";

const GET_DATA = gql`
  query CarInfos {
    carInfos {
      color
      engine
      features
      fuelType
      horsePower
      id
      make
      mileage
      model
      price
      transmission
      cover {
        url
      }
      images {
        url
      }
      year
    }
  }
`;
export { GET_DATA };
