import {
  CardSection,
  Header,
  ChartSection,
  MessagingSection,
  PaymentSection,
  AccordionSection,
  Footer,
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
        <PaymentSection />
        <AccordionSection />
      </OuterWrapper>

      <Footer />
    </div>
  );
};
