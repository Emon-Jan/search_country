import { Layout } from "antd";
import "./App.css";
import Detail from "./components/detail/Detail";
import Result from "./components/result/Result";
import Search from "./components/search/Search";
import AppContext from "./contexts/AppContext";

const { Content } = Layout;

function App() {
  return (
    <Layout className="App">
      <Content>
        <AppContext>
          <Search></Search>
          <Result></Result>
          <Detail></Detail>
        </AppContext>
      </Content>
    </Layout>
  );
}

export default App;
