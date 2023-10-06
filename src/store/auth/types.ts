import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
  } from "./actionTypes";
  
  export interface IAuth {
    token: string;
  }
  
  export interface AuthState {
    pending: boolean;
    token: string;
    error: string | null;
  }
  
  export interface LoginPayload {
    values: { name: string, email: string , mobileNo: string, description: string };
    callback: any;
  }
  
  export interface LoginSuccessPayload {
    token: string;
  }
  
  export interface LoginFailurePayload {
    error: string;
  }
  
  export interface LoginRequest {
    type: typeof LOGIN_REQUEST;
    payload: LoginPayload;
  }
  
  export type LoginSuccess = {
    type: typeof LOGIN_SUCCESS,
    payload: LoginSuccessPayload,
  };
  
  export type LoginFailure = {
    type: typeof LOGIN_FAILURE,
    payload: LoginFailurePayload,
  };
  
  export type AuthActions =
    | LoginRequest
    | LoginSuccess
    | LoginFailure;