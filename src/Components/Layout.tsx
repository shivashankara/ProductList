import { Container, Grid } from "@mui/material";
import Footer from "./Footer";
import HeaderComponent from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid size={12}>
            <HeaderComponent />
          </Grid>
          <Grid size={12}>
            <main>{children}</main>
          </Grid>
          <Grid size={12}>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
