import Main from "./pages/main";
import { ThemeProvider } from "styled-components";

function App() {
  const theme = {
      color: {
          primary: "#f6f7ff",
          secondary: "#9292A6",
          danger: "#FF7878",
          active: "#7B82FF",
          inactive: "#FFE8E8",
          mainText: "#080A39",
      },
  };

  return (
      <ThemeProvider theme={theme}>
          <Main />
      </ThemeProvider>
  );
}
 
export default App;
