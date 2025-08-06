import { Button, Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        md: `"nav   nav"
             "aside main"`,
      }}
    >
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>
      <Show above="md">
        <GridItem area="aside" bg="#ECC94B">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="#4299e1">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
