import {Outlet} from "react-router-dom";
import Section from "./Section";
import Container from "./Container";
import Switch from "../Switch/Switch";

const Layout = () => {
  return (
    <Section>
      <Container>
        <Switch />
        <Outlet />
      </Container>
    </Section>
  );
};
export default Layout;
