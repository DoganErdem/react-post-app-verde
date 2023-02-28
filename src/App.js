import Feeder from "./components/feeder/Feeder";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="flex bg-slate-400 w-full ">
      <div className="flex absolute flex-col inset-x-8 w-11/12">
        <Header />
        <Feeder />
      </div>
    </div>
  );
}

export default App;
