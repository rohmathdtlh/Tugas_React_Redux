import React from "react";
import { Provider } from "react-redux";
import store from "./slices/store";
import UserComponent from "./components/UserComponent";
import CounterComponent from "./components/CounterComponent"; // Pastikan path ini benar
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CounterComponent /> {/* Menampilkan CounterComponent */}
        <UserComponent /> {/* Menampilkan UserComponent */}
      </div>
    </Provider>
  );
}

export default App;
