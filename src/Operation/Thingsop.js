import { get, post, put, del } from "../Link/request/request";



/*
  获取列表
  page
 */
export function listApi(page = 1) {
    return get("/api/v1/admin/products", { page, per: 5 });
  }
  
  /**
    创建数据
    data
   */
  export function createApi(data) {
    return post("/api/v1/admin/products", data);
  }
  
  /*
    根据id获取获取数据
    id
   */
  export function getById(id) {
    return get(`/api/v1/admin/products/${id}`);
  }
  
  /*
    修改记录
    id
    data
   */
  export function change(id, data) {
    return put(`/api/v1/admin/products/${id}`, data);
  }
  
  /*
    删除记录
    id
    data
   */
  export function delt(id, data) {
    return del(`/api/v1/admin/products/${id}`);
  }
  