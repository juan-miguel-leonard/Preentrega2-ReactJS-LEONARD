import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Banner from "./components/Banner"
import Error404 from "./components/Error404"
import NavBar from "./components/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path={"/"} element={<ItemListContainer />} />
      <Route path={"/category/:id"} element={<ItemListContainer />} />
      <Route path={"/item/:id"} element={<ItemDetailContainer />} />
      <Route path={"*"} element={<Error404 />} />
    </Routes>
    <Banner />
    </BrowserRouter>
    

  )
}

export default App
