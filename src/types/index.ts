export enum CategoriesEnum {
  CashDesks,
  Refrigerators,
  AirConditioners,
  MeasuringEquipment,
  Premises,
  IT,
  Plumbing,
}

export enum StatusEnum {
  New = 1,
  Rejected,
  UnderReview,
  InProgress,
  AwaitingParts,
  Ready,
  Closed,
  AllStatuses
}

export enum PriorityEnum {
  Critical = 1,
  High,
  Normal,
  Low
}

export type Pharmacy = {
  id: number;
  address: string;
};

export type Category = {
  id: number;
  name: string;
};

export type Status = {
  id: number;
  name: string;
};

export type Priority = {
  id: number;
  name: string;
};

export type Technician = {
  id: number;
  name: string;
};

export type CreatedAt = {
  day: string; 
  time: string;
};

export type Application = {
  id: number;
  number: string; 
  createdAt: CreatedAt;
  theme: string;
  pharmacy: Pharmacy;
  category: Category;
  status: Status;
  priority: Priority;
  technician: Technician; 
  reactionTime: string; 
  resolutionTime: string; 
};
