import apiClient from '@/lib/api/client';
import type { LoginRequest, RegisterRequest, AuthResponse } from '@/types/auth';

export async function login(data: LoginRequest): Promise<AuthResponse> {
  const response = await apiClient.post('/api/login', data);
  const accessToken = response.headers['authorization'];
  return { accessToken };
}

export async function register(data: RegisterRequest): Promise<void> {
  await apiClient.post('/api/signup', data);
}