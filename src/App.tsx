import { MainLayout } from "./layouts/MainLayout";
import { MainPage } from "./pages/MainPage";
import "antd/dist/antd.css";

function App() {
  return (
    <MainLayout>
      <MainPage />
    </MainLayout>
  );
}

export default App;
