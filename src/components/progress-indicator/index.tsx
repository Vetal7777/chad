import { OnboardingStats } from '@/components/onboarding-stats'
import { StepsList } from '@/components/steps-list'

export function ProgressIndicator() {
  return (
    <>
      <div className="flex h-screen flex-col justify-between bg-linear-gradient px-28 pb-14 pt-52">
        <StepsList />
        <OnboardingStats />
      </div>
    </>
  )
}
