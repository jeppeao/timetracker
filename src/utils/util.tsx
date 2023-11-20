export interface TimeBlock {
  start: number,
  end: number,
  tags: string[];
}

const saveLoginInfo = (user: string, password: string) => {
  const loginInfo = {user, password};
  localStorage.setItem('timetrackerAutoLogin', JSON.stringify(loginInfo));
}

const loadLoginInfo = () => {
  const loginInfo = localStorage.getItem('timetrackerAutoLogin');
  if (loginInfo) {
    return JSON.parse(loginInfo);
  }
  return false;
}

const clearLoginInfo = () => {
  localStorage.removeItem('timetrackerAutoLogin');
}

export {
  saveLoginInfo,
  loadLoginInfo,
  clearLoginInfo
}