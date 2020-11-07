import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo
          to={ROUTES.HOME}
          alt="Reels"
          src="/images/logo/favicon.png"
        />
        <Header.ButtonLink>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
