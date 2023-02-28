import Header from "./components/header/Header";

function App() {
  return (
    <div className="flex relative bg-slate-200 w-full h-screen">
      <div className="flex absolute flex-col inset-x-8 w-11/12">
        <Header></Header>
      </div>
    </div>
  );
}

export default App;
