import { StepKey, type OnboardingStat, type StepTitle } from '@/@types'

export const onboardingStats: OnboardingStat[] = [
  {
    title: '5x',
    description: 'auth.onboarding_stats.description'
  },
  {
    title: '5x',
    description: 'auth.onboarding_stats.description'
  },
  {
    title: '5x',
    description: 'auth.onboarding_stats.description'
  },
  {
    title: '5x',
    description: 'auth.onboarding_stats.description'
  },
  {
    title: '5x',
    description: 'auth.onboarding_stats.description'
  }
]

export const steps: StepTitle[] = [
  {
    title: 'auth.steps.title.welcome',
    key: StepKey.welcome
  },
  {
    title: 'auth.steps.title.shopify_connection',
    key: StepKey.shopifyConnection
  },
  {
    title: 'auth.steps.title.support_email_connection',
    key: StepKey.supportEmailConnection
  },
  {
    title: 'auth.steps.title.done',
    key: StepKey.success
  }
]

export const applicationName = 'Chad'

export const authForm = {}
