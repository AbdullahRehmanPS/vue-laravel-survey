import {createStore} from "vuex";
import axiosClient from "../axios.js";

const tmpSurveys = [
  {
    id: 100,
    title: "This is my survey",
    slug: "This is my survey",
    status: "draft",
    image: "https://www.tutorialspoint.com/assets/questions/media/426142-1668760872.png",
    description: "my name is abdullah",
    created_at: "2021-21-20 18:00:00",
    updated_at: "2021-21-20 18:00:00",
    expire_date: "2021-21-31 18:00:00",
    questions: [
      {
        id: 1,
        type: "select",
        question: "From which country are you from?",
        description: null,
        data: {
          options: [
            {uuid: "03928e52-e96c-4f0f-ac6e-3a60c446d3ec", text: "USA"},
            {uuid: "3be4e8c5-d7a0-4622-9fa0-dec2cb5c6065", text: "India"},
            {uuid: "7465bd9c-9c13-4f7b-97d8-c8e37168c45f", text: "Pakistan"},
            {uuid: "69a5123f-c218-407d-b9bd-602d1533558d", text: "Australia"},
          ],
        },
      },
      {
        id: 2,
        type: "checkbox",
        question: "From which city you are from?",
        description: "Description is null",
        data: {
          options: [
            {uuid: "8715f6b9-7f49-4ecb-b85f-7e1c559be418", text: "Lahore"},
            {uuid: "74e446d5-0b27-46d6-be57-a354e2253e5d", text: "Karachi"},
            {uuid: "c2c9be94-d8ef-4f98-9f80-b32f56604ecb", text: "Faisalabad"},
            {uuid: "32390f62-daec-4a4e-b4a0-25715baefa86", text: "Multan"},
          ],
        },
      },
      {
        id: 3,
        type: "radio",
        question: "From which planet you are from?",
        description: "Description is also null",
        data: {
          options: [
            {uuid: "8715f6b9-7f49-4ecb-b85f-7e1c559be418", text: "Earth"},
            {uuid: "74e446d5-0b27-46d6-be57-a354e2253e5d", text: "Mercury"},
            {uuid: "c2c9be94-d8ef-4f98-9f80-b32f56604ecb", text: "Faisalabad"},
            {uuid: "32390f62-daec-4a4e-b4a0-25715baefa86", text: "Venus"},
          ],
        },
      },
      {
        id: 4,
        type: "text",
        question: "You favourite channel?",
        description: null,
        data: {},
      },
      {
        id: 5,
        type: "textarea",
        question: "You favourite park?",
        description: "write honest opinion",
        data: {},
      },
    ],
  },
  {
    id: 200,
    title: "This is your survey",
    slug: "This is your survey",
    status: "active",
    image: "https://www.tutorialspoint.com/assets/questions/media/426142-1668760872.png",
    description: "your name is ashar",
    created_at: "2021-21-20 17:00:00",
    updated_at: "2021-21-20 17:00:00",
    expire_date: "2021-21-31 17:00:00",
    questions: [],
  },
];

const store = createStore({
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem("TOKEN"),
    },
    surveys: [...tmpSurveys],
    questionTypes: [ 'text', 'textarea', 'select', 'radio', 'checkbox' ],
  },
  getters: {},
  actions: {
    register({commit}, user) {
      return axiosClient.post('/register', user)
        .then( ({data}) => {
          commit('setUser', data);
          return data;
        })
    },
    login({ commit }, user) {
      return axiosClient.post('/login', user)
        .then( ({data}) => {
          // console.log(data.user)
          // console.log(data)
          commit('setUser', data);
          return data;
        })
    },
    logout({ commit }) {
      return axiosClient.post('/logout')
        .then(response => {
          commit('logout');
          return response;
        })
    },
  },
  mutations: {
    logout: state => {
      state.user.data = {};
      state.user.token = null;
      sessionStorage.removeItem('TOKEN');
    },
    setUser: (state, userData) => {
      state.user.token = userData.token;
      state.user.data = userData.user;
      sessionStorage.setItem('TOKEN', userData.token);
    },
  }
})
export default store;
