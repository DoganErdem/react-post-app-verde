import { Route, Routes } from "react-router-dom";
import Comments from "./components/comments/Comments";
import Feeder from "./components/feeder/Feeder";
import Header from "./components/header/Header";
import PostDetail from "./components/postDetail/PostDetail";


function App() {

  return (
    <div className="flex bg-slate-400 w-full min-h-screen ">
      <div className="flex relative flex-col inset-x-8 w-11/12">
        <Header />
        <Routes>
          <Route path="/" element={<Feeder />}></Route>

          <Route path="post/:id" element={<PostDetail />}></Route>  
          <Route path="/test" element={<Comments />}></Route>  
          <Route path='post/:id/comments' element={<Comments />}></Route>  
        </Routes>
        
        

      </div>
    </div>
  );
}

export default App;
