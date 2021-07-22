import * as axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '0b63f443-f783-4746-b6d1-868f7da730e0'
  }
});

export const usersAPI = {
  getUsers(currentPage=1, pageSize=10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  },
  getProfile(userId=2) {
    console.log('Obsolete method. Please profileAPI object')
    return profileAPI.getProfile(userId)
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)
      .then(response => response.data)
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
      .then(response => response.data)
  },
}

export const profileAPI = {
  getProfile(userId=2) {
    return instance.get(`profile/${userId}`)
      .then(response => response.data)
  },
  getStatus(userId=2) {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status })
  },
}

export const AuthAPI = {
  getAuth() {
    return instance.get(`auth/me`)
      .then(response => response.data)
  },
}



