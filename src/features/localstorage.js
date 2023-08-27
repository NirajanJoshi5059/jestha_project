

export const setUser = (users)=>{
      localStorage.setItem('users', JSON.stringify(users));
}


export const getUser = ()=>{
    const data = localStorage.getItem('users');
    return data === null ? []: JSON.parse(data);
}