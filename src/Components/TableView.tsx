import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

export function TableView({ tableData }) {
       const products = tableData || [];
  if (products.length === 0) return null;

  return (
    <>
      <Table sx={{ minWidth: 650, bgcolor:"ActiveBorder" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                <img src={product.image} alt={product.title} width="50" />
              </TableCell>
              <TableCell>{product.title}</TableCell>
              <TableCell>${product.price}</TableCell>
              <TableCell>{product.rating?.rate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
