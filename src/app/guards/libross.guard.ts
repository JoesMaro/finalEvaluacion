import { CanActivateFn } from '@angular/router';

export const librossGuard: CanActivateFn = (route, state) => {
  var acceso=localStorage.getItem("login")

  if(acceso =='true'){
    return true;
  }else{
  }
  return false;
};
