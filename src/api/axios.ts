import axios from "axios";

export const api = axios.create({ baseURL: 'http://betresult-env.eba-ec7t4ypy.us-east-1.elasticbeanstalk.com/api/' })
