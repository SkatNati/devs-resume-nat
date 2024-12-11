import BillingHistory from "./components/BillingHistory";
import SubScriptionDetails from "./components/SubscriptionDetails";

const Membership = () => {
  return (
    <div className="px-2 lg:px-4 lg:py-8 py-4 flex space-y-6 flex-col">
      <SubScriptionDetails />
      <BillingHistory />
    </div>
  );
};

export default Membership;
