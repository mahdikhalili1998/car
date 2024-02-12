import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_COMMENT } from "../graphql/queries";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import Loader from "./Loader";

function ShowComment({ id }) {
  const [cm, setCm] = useState([]);
  const { loading, data, error } = useQuery(GET_COMMENT, { variables: { id } });
  useEffect(() => {
    if (data) {
      {
        data ? setCm(data.comments) : null;
      }
    }
  }, [data]);

  // console.log(cm);
  return (
    <div>
      {cm.length > 0 ? (
        cm.map((item) => (
          <Container
            key={item.id}
            maxWidth={"lg"}
            sx={{
              boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
              borderRadius: "1.5rem",
            }}
          >
            <Grid width={"100%"} mb={4} container padding={1}>
              <Grid xs={12} item mb={4}>
                <Avatar
                  sx={{
                    marginBottom: ".7rem",
                    width: "6rem",
                    height: "6rem",
                    marginLeft: "-1rem",
                  }}
                >
                  {item.name[0]}
                </Avatar>
                <Typography component={"p"} variant="h6">
                  {item.name}
                </Typography>
              </Grid>
              <Grid item mt={"-2rem"}>
                <Typography component={"p"} variant="p" fontSize={"2rem"}>
                  {item.text}
                </Typography>
              </Grid>
            </Grid>
          </Container>
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default ShowComment;
