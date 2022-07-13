import { ThemeProvider } from "@mui/material";
import "App.css";
import { Provider } from "react-redux";
import Root from "routes";
import store from "store";
import "style/index.scss";
import { lightTheme } from "theme/lightTheme";
import PrerenderTailwind from "views/prerender/PrerenderTailwind";

function App() {
  return (
    <Provider store={store}>
      <PrerenderTailwind />
      <ThemeProvider theme={lightTheme}>
        <Root />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
