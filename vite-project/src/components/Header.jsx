import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  ImageListItem,
} from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {/* <ImageList
              sx={{ width: 400, height: 100 }}
              // cols={3}
              // rowHeight={164}
            > */}
              {/* {itemData.map((item) => ( */}
              <ImageListItem sx={{ width: 100, height: 10 }}>
                <img
                  srcSet={`?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`https://virtual-labs-project-alok.vercel.app/static/media/logo.f34fcba5c9c3501ad06b.jpg`}
                  alt="..."
                  loading="lazy"
                />
              </ImageListItem>
              {/* ))} */}
              {/* </ImageList> */}
            </Typography>
            <Button color="inherit">Home</Button>
            <Link to="simulation" style={{ color: "#fff" }}>
              <Button color="inherit">Simulation</Button>
            </Link>
            <Link to="experiments" style={{ color: "#fff" }}>
              <Button color="inherit">Ecperiment</Button>
            </Link>
            <Button color="inherit">Patnern</Button>
            <Button color="inherit">Contact</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
