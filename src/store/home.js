import Api from '@/plugins/Api'
import Banner1 from '@/assets/img/banner1.jpg'
import Banner2 from '@/assets/img/banner2.jpg'
import Banner3 from '@/assets/img/banner3.jpg'
import Banner4 from '@/assets/img/banner4.jpg'
import Banner5 from '@/assets/img/banner5.jpg'

export default {
  namespaced: true,
  state: {
    banner: [
      {
        src: Banner1
      },
      {
        src: Banner2
      },
      {
        src: Banner3
      },
      {
        src: Banner4
      },
      {
        src: Banner5
      }
    ],
    film: [],
    detailFilm: {}
  },
  mutations: {
    SET_FILM (state, data) {
      state.film = data
    },
    SET_DETAIL_FILM (state, data) {
      state.detailFilm = data
    }
  },
  actions: {
    async getFilm ({ commit }, data) {
      const res = await Api('/films').get(data)

      commit('SET_FILM', res)
      return res
    },
    async getDetailFilm ({ commit }, data) {
      const res = await Api(`/films/${data.id}`).get(data)

      commit('SET_DETAIL_FILM', res)
      return res
    }
  },
  getters: {
    film (state) {
      return state.film
    },
    banner (state) {
      return state.banner
    },
    detailFilm (state) {
      return state.detailFilm
    }
  }
}
