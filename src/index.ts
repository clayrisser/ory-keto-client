import axios from 'axios';
import { Policy, Role } from './types';

export default class Keto {
  constructor(public ketoBaseUrl: string = 'http://localhost:4466') {}

  async createPolicy(policy: Policy): Promise<Policy> {
    const res = await axios.post(`${this.ketoBaseUrl}/policies`, policy);
    return res.data;
  }

  async getPolicies(): Promise<Policy[]> {
    const res = await axios.get(`${this.ketoBaseUrl}/policies`);
    return res.data;
  }

  async getPolicy(policyId: string): Promise<Policy> {
    const res = await axios.get(`${this.ketoBaseUrl}/policies/${policyId}`);
    return res.data;
  }

  async updatePolicy(policyId: string, policy: Policy): Promise<null> {
    await axios.put(`${this.ketoBaseUrl}/policies/${policyId}`, policy);
    return null;
  }

  async deletePolicy(policyId: string): Promise<null> {
    await axios.delete(`${this.ketoBaseUrl}/policys/${policyId}`);
    return null;
  }

  async createRole(role: Role): Promise<Role> {
    const res = await axios.post(`${this.ketoBaseUrl}/roles`, role);
    return res.data;
  }

  async getRoles(): Promise<Role[]> {
    const res = await axios.get(`${this.ketoBaseUrl}/roles`);
    return res.data;
  }

  async getRole(roleId: string): Promise<Role> {
    const res = await axios.get(`${this.ketoBaseUrl}/roles/${roleId}`);
    return res.data;
  }

  async updateRole(roleId: string, role: Role): Promise<null> {
    await axios.put(`${this.ketoBaseUrl}/roles/${roleId}`, role);
    return null;
  }

  async deleteRole(roleId: string): Promise<null> {
    await axios.delete(`${this.ketoBaseUrl}/roles/${roleId}`);
    return null;
  }

  async authorizeSubject(
    subject: string,
    action: string,
    resource: string
  ): Promise<boolean> {
    const res = await axios.post(
      `${this.ketoBaseUrl}/warden/subjects/authorize`,
      {
        subject,
        action,
        resource
      }
    );
    return !!(res.data && res.data.allowed);
  }
}

export * from './types';
