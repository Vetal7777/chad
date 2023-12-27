import { OnboardingStats } from "../onboarding-stats";

export function ProgressIndicator() {
  return (
    <>
      <div className="bg-linear-gradient flex h-screen flex-col justify-between px-28 pb-14 pt-52">
        <div></div>
        <OnboardingStats />
      </div>
    </>
  );
}
