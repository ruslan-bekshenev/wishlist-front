import { FC } from "react";
import { Box } from "@mui/material";
import { Container } from "@mui/system";

import { IComponentWithChildren } from "../../../types";

import Header from "../../Header";

const MainLayout: FC<IComponentWithChildren> = ({ children }) => (
  <>
    <Header />
    <Box marginY={10}>
      <Container maxWidth="md">{children}</Container>
    </Box>
  </>
);

export default MainLayout;
