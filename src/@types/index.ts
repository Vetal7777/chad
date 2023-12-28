export type OnboardingStat = {
  title: string;
  description: string;
};

export type StepTitle = {
  title: string;
};

export type StepStatusValue = keyof typeof StepStatus;

export enum StepStatus {
  active = "active",
  completed = "completed",
  success = "success",
  none = "none",
}

export type StepData = {
  status: StepStatusValue;
} & StepTitle;

export type StepsItemProps = {
  item: StepData;
  renderLine?: boolean;
};
