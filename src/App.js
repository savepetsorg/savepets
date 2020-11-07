import { Fragment } from "react";
import Title from "./components/atoms/Title";
import TwitchIcon from "./assets/icons/Twitch";
import eagleImage from "./assets/images/eagle.jpg";
import MapMarkerAltSolid from "./assets/icons/MapMarkerAltSolid";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { CssBaseline, Button } from "@material-ui/core";

const SEED = process.env.NODE_ENV === "production" ? "save" : "";
const GLOBAL = process.env.NODE_ENV === "production" ? true : false;
const generateClassName = createGenerateClassName({
  disableGlobal: GLOBAL,
  seed: SEED,
  productionPrefix: "pets",
});

function App() {
  return (
    <Fragment>
      <StylesProvider generateClassName={generateClassName}>
        <CssBaseline />
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <Title />
        <div>
          <TwitchIcon width="100px" height="100px" />
          <MapMarkerAltSolid width="50px" height="50px" />
        </div>
        <img src={eagleImage} alt="eagle-head" style={{ maxHeight: "300px" }} />
      </StylesProvider>
    </Fragment>
  );
}

export default App;
