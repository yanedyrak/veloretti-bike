import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "../shared/store/store";
import { Paths } from "./paths/Paths";
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Paths />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
