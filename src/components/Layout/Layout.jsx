import {Outlet} from "react-router-dom";
import Section from "./Section";
import Container from "./Container";

const Layout = () => {
  return (
    <Section>
      <Container>
        <Outlet />
      </Container>
    </Section>
  );
};
export default Layout;
