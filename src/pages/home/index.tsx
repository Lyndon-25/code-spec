import { Page } from "./models/page";
import Main from "./views/main";

const Home = () => {
  return (
    <Page.Provider>
      <Main />
    </Page.Provider>
  );
};

export default Home;
