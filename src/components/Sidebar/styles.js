import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  imageLink: {
    display: "flex",
    justifyContent: "center",
    padding: "10% 0 0 0",
    // padding: "10% 0",
  },
  image: {
    width: "70%",
  },
  logoImg: {
    width: "70%",
    height: "50%",
  },
  links: {
    color: theme.palette.text.primary,
    textDecoration: "none",
  },
  genreImages: {
    filter: theme.palette.mode === "dark" ? "invert(1)" : "dark",
  },
  bigText: {
    color: "primary",
    fontSize: 30,
  },
}));
