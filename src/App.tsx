import { Provider } from "react-redux";
import useCachedResources from "@/hooks/useCachedResources";
import Route from "@/routes";
import store from "@/redux";

export default function App() {
  const isLoadingComplete = useCachedResources();

  return (
    isLoadingComplete && (
      <Provider store={store}>
        <Route />
      </Provider>
    )
  );
}
