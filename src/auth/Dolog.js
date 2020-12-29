import { post } from "../Link/request/request";

/**
 用户登录

 */
export function loginApi(user) {
  return post("/api/v1/auth/manager_login", user);
}
