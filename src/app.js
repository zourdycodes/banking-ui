import { CardSection, Header } from "./components";
import { OuterWrapper } from "./styles/Wrapper";

export const App = () => {
  return (
    <div className="app">
      <Header />
      <OuterWrapper>
        <CardSection />
      </OuterWrapper>
    </div>
  );
};
