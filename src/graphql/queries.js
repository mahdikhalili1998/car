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

const GET_COMMENT = gql`
  query MyQuery($id: ID!) {
    comments(where: { carInfo: { id: $id } }) {
      id
      name
      text
    }
  }
`;
export { GET_DATA, GET_COMMENT };
