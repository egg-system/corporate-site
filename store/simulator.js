export const state = () => ({
  activeFlg: {
    genre: true,
    industry: false,
    sales: false,
    company: false
  },
  simulationInfo: {
    genre: 'seizou',
    industry: '食料品、飲料・たばこ・飼料製造業',
    sales: 0,
    employees: 0,
    cost: 0
  },
  companyInfo: {
    companyName: '',
    userName: '',
    mailAddress: ''
  }
})

export const actions = {
  toGenre({ commit }) {
    commit('activateGenreFlg')
  },
  toIndustry({ commit }) {
    commit('activateIndustryFlg')
  },
  toSales({ commit }) {
    commit('activateSalesFlg')
  },
  toCompany({ commit }) {
    commit('activateCompanyFlg')
  },
  commitGenre({ commit }, value) {
    commit('setGenre', value)
  },
  commitIndustry({ commit }, value) {
    commit('setIndustry', value)
  },
  commitSales({ commit }, value) {
    commit('setSales', value)
  },
  commitEmployees({ commit }, value) {
    commit('setEmployees', value)
  },
  commitCost({ commit }, value) {
    commit('setCost', value)
  },
  commitCompanyName({ commit }, value) {
    commit('setCompanyName', value)
  },
  commitUserName({ commit }, value) {
    commit('setUserName', value)
  },
  commitMailAddress({ commit }, value) {
    commit('setMailAddress', value)
  }
}

export const mutations = {
  activateGenreFlg(state) {
    Object.keys(state.activeFlg).forEach(function(value) {
      state.activeFlg[value] = false
    })
    state.activeFlg.genre = true
  },
  activateIndustryFlg(state) {
    Object.keys(state.activeFlg).forEach(function(value) {
      state.activeFlg[value] = false
    })
    state.activeFlg.industry = true
  },
  activateSalesFlg(state) {
    Object.keys(state.activeFlg).forEach(function(value) {
      state.activeFlg[value] = false
    })
    state.activeFlg.sales = true
  },
  activateCompanyFlg(state) {
    Object.keys(state.activeFlg).forEach(function(value) {
      state.activeFlg[value] = false
    })
    state.activeFlg.company = true
  },
  setGenre(state, value) {
    state.simulationInfo.genre = value
  },
  setIndustry(state, value) {
    state.simulationInfo.industry = value
  },
  setSales(state, value) {
    state.simulationInfo.sales = value
  },
  setEmployees(state, value) {
    state.simulationInfo.employees = value
  },
  setCost(state, value) {
    state.simulationInfo.cost = value
  },
  setCompanyName(state, value) {
    state.companyInfo.companyName = value
  },
  setUserName(state, value) {
    state.companyInfo.userName = value
  },
  setMailAddress(state, value) {
    state.companyInfo.mailAddress = value
  }
}
