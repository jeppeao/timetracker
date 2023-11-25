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

const timeFromEpoch = (epoch: number) => {
  const date = new Date(epoch);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return [hours, ":", minutes].join(''); 
}

const durationFromSeconds = (seconds: number) => {
  const hours = Math.floor(seconds / 3600).toString().padStart(2, "0");
  const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
  return [hours, ":", minutes].join('');  
}

export {
  saveLoginInfo,
  loadLoginInfo,
  clearLoginInfo,
  timeFromEpoch,
  durationFromSeconds
}