import http from "../HttpServices";
import { apiurl } from "../Config";

export const GetPosts = async () => {
  return http.get(`${apiurl}/posts`);
};

export const GetPostsById = async (id) => {
  return http.get(`${apiurl}/posts/${id}`);
};

export const CreateNewPost = async (body) => {
  return http.post(`${apiurl}/posts`, JSON.stringify(body));
};
