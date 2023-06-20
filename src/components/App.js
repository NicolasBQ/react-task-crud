import { Provider } from "./Context";
import { AppUI } from "./AppUI";

const App = () => {
  return (
    <Provider>
      <AppUI />
    </Provider>
  )
}

export default App;
