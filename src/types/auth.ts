export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface User {
  userId: number;
  email: string;
  name: string;
}

export interface AuthResponse {
  accessToken: string;
  user: User;
}