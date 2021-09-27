import {
  CardSection,
  Header,
  ChartSection,
  MessagingSection,
} from "./components";
import { OuterWrapper } from "./styles/Wrapper";

export const App = () => {
  return (
    <div className="app">
      <Header />
      <OuterWrapper>
        <CardSection />
        <ChartSection />
        <MessagingSection />
      </OuterWrapper>
    </div>
  );
};
