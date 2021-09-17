import { AnalyticsInterface } from './analytics.interface';

export interface BotInterface {
  id?: string;
  favorite?: boolean;
  shortName: string;
  name: string;
  description: string;
  image: string;
  template: string;
  created: string;
  updated: string;
  plan: string;
  culture: string;
  analytics: AnalyticsInterface;
}
