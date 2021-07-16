import * as axios from "axios";

export const getUsers = (currentPage=1, pageSize=10) => {
  return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
    {
      withCredentials: true
    })
    .then(response => response.data)
}

export const getProfile = (userId=2) => {
  return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`,
    {
      withCredentials: true
    })
    .then(response => response.data)
}

export const getAuth = () => {
  return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
    {
      withCredentials: true
    })
    .then(response => response.data)
}



