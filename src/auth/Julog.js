
  export function isLogined() {
    if (localStorage.getItem("token")) {
      return true;
    }else{
      return false;
    }
  }
  