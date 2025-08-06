// 酒店设施页面入口 - 展示领域分组页面架构
import { Page } from "./models/page";
import Main from "./views/main";

const HotelFacility = () => {
  return (
    <Page.Provider>
      <Main />
    </Page.Provider>
  );
};

export default HotelFacility;
