import { CardSection, Header, ChartSection } from "./components";
import { OuterWrapper } from "./styles/Wrapper";

export const App = () => {
  return (
    <div className="app">
      <Header />
      <OuterWrapper>
        <CardSection />
        <ChartSection />
      </OuterWrapper>
    </div>
  );
};
