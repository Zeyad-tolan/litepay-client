import { OrderWaitDarkIcon, OrderWaitIcon } from "@/src/app/icons/icons";

export default function HeroOrderWait() {
  return (
    <div className="w-full">
      <OrderWaitIcon className="w-full block dark:hidden" />
      <OrderWaitDarkIcon className="w-full hidden dark:block" />
    </div>
  );
}
