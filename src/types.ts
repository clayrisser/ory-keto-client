export interface Policy {
  actions?: string[];
  conditions?: object;
  description?: string;
  effect?: string;
  resources?: string[];
  subjects?: string[];
}

export type Role = object;
