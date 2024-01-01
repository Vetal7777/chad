import { StepKey, type OnboardingStat, type StepTitle } from '@/@types'

export const onboardingStats: OnboardingStat[] = [
  {
    title: '5x',
    description:
      'Acquiring a new customer is 5x more costly than making an unhappy customer happy'
  },
  {
    title: '5x',
    description:
      'Acquiring a new customer is 5x more costly than making an unhappy customer happy'
  },
  {
    title: '5x',
    description:
      'Acquiring a new customer is 5x more costly than making an unhappy customer happy'
  },
  {
    title: '5x',
    description:
      'Acquiring a new customer is 5x more costly than making an unhappy customer happy'
  },
  {
    title: '5x',
    description:
      'Acquiring a new customer is 5x more costly than making an unhappy customer happy'
  }
]

export const steps: StepTitle[] = [
  {
    title: 'Welcome',
    key: StepKey.welcome
  },
  {
    key: StepKey.shopifyConnection,
    title: 'Connect your Shopify store'
  },
  {
    key: StepKey.supportEmailConnection,
    title: 'Connect your customer support email'
  },
  {
    key: StepKey.success,
    title: 'Done'
  }
]

export const applicationName = 'Chad'

export const authForm = {
  welcome: {
    title: 'Welcome to Chad',
    description:
      'Go live in 10 minutes! Our self-service widget empowers your customers to manage orders and track shipments 24/7 without driving you crazy.'
  }
}
