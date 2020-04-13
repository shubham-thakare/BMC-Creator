import React from "react";
import { Spinner } from "@blueprintjs/core";
import { StyledLoading } from "./styles/Loading.style";

const Loading = () => {
  return (
    <StyledLoading>
      <Spinner />
    </StyledLoading>
  );
};

export default Loading;
