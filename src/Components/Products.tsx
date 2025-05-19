import { useEffect, useState } from "react";
import { AppContainer } from "./appStyle";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ActionAreaCard from "./CardComponent";
import { Button, MenuItem, Select } from "@mui/material";
import TableViewRoundedIcon from "@mui/icons-material/TableViewRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import { TableView } from "./TableView";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
};

export default function Products(props) {
  const [productlist, setProductList] = useState<Product[]>([]);
  const [isGridView, setIsGridView] = useState(true);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProductList(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const sortProducts = (order) => {
    const sorted = [...productlist].sort((a, b) => {
      if (order === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setProductList(sorted);
    setSortOrder(order);
  };

  if (productlist.length === 0) return null;

  if (productlist.length > 0) {
    return (
      <AppContainer>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1>Products</h1>
          <Select
            value={sortOrder}
            onChange={(e) => sortProducts(e.target.value)}
            style={{ backgroundColor: "white", width: "200px" }}
          >
            <MenuItem value="asc">Price: Low to High</MenuItem>
            <MenuItem value="desc">Price: High to Low</MenuItem>
          </Select>

          <Button
            style={{ display: "inline" }}
            onClick={() => setIsGridView(!isGridView)}
          >
            {isGridView ? <TableViewRoundedIcon /> : <GridViewRoundedIcon />}
          </Button>
        </Box>
        <Box sx={{ marginBottom: "20px", overflow: "auto" }}>
          {isGridView ? (
            <Grid container spacing={2}>
              {productlist?.map((product) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product.id}>
                  <ActionAreaCard productinfo={product} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Grid size={12}>
              <TableView tableData={productlist || []} />
            </Grid>
          )}
        </Box>
      </AppContainer>
    );
  }
}
