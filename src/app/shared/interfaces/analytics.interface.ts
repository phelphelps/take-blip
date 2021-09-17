export interface AnalyticsInterface {
  user: AnalyticsUserInterface;
  message: AnalyticsMessageInterface;
}

export interface AnalyticsUserInterface {
  total: number;
  actived: number;
}

export interface AnalyticsMessageInterface {
  received: number;
  sent: number;
}
