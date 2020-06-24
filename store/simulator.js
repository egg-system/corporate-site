export const state = () => ({
  activeFlg: {
    genre: true,
    industry: false,
    sales: false,
    company: false,
    result: false
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
  },
  requiredErrorFlg: {
    sales: false,
    employees: false,
    cost: false,
    companyName: false,
    userName: false,
    mailAdress: false
  },
  validationErrorFlg: {
    sales: false,
    employees: false,
    cost: false,
    companyName: false,
    userName: false,
    mailAdress: false
  }
})

export const actions = {
  toIndustry({ commit }) {
    commit('toIndustry')
  },
  toSales({ commit }) {
    commit('toSales')
  },
  // toCompany({ commit }) {
  //   commit('toCompany')
  // },
  toResult({ commit }) {
    commit('toResult')
  },
  backGenre({ commit }) {
    commit('backGenre')
  },
  backIndustry({ commit }) {
    commit('backIndustry')
  },
  backSales({ commit }) {
    commit('backSales')
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
  },
  commitSalesRequiredError({ commit }, value) {
    commit('setSalesRequiredError', value)
  },
  commitEmployeesRequiredError({ commit }, value) {
    commit('setEmployeesRequiredError', value)
  },
  commitCostRequiredError({ commit }, value) {
    commit('setCostRequiredError', value)
  },
  commitCompanyNameRequiredError({ commit }, value) {
    commit('setCompanyNameRequiredError', value)
  },
  commitUserNameRequiredError({ commit }, value) {
    commit('setUserNameRequiredError', value)
  },
  commitMailAddressRequiredError({ commit }, value) {
    commit('setMailAddressRequiredError', value)
  },
  commitSalesValidationError({ commit }, value) {
    commit('setSalesValidationError', value)
  },
  commitEmployeesValidationError({ commit }, value) {
    commit('setEmployeesValidationError', value)
  },
  commitCostValidationError({ commit }, value) {
    commit('setCostValidationError', value)
  },
  commitCompanyNameValidationError({ commit }, value) {
    commit('setCompanyNameValidationError', value)
  },
  commitUserNameValidationError({ commit }, value) {
    commit('setUserNameValidationError', value)
  },
  commitMailAddressValidationError({ commit }, value) {
    commit('setMailAddressValidationError', value)
  }
}

export const mutations = {
  backGenre(state) {
    state.activeFlg.industry = false
    state.activeFlg.genre = true
  },
  backIndustry(state) {
    state.activeFlg.sales = false
    state.activeFlg.industry = true
  },
  // backSales(state) {
  //   state.activeFlg.company = false
  //   state.activeFlg.sales = true
  // },
  toIndustry(state) {
    state.activeFlg.genre = false
    state.activeFlg.industry = true
  },
  toSales(state) {
    state.activeFlg.industry = false
    state.activeFlg.sales = true
  },
  // toCompany(state) {
  //   state.activeFlg.sales = false
  //   state.activeFlg.company = true
  // },
  toResult(state) {
    state.activeFlg.sales = false
    state.activeFlg.result = true
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
  },
  setSalesRequiredError(state, value) {
    state.requiredErrorFlg.sales = value
  },
  setEmployeesRequiredError(state, value) {
    state.requiredErrorFlg.employees = value
  },
  setCostRequiredError(state, value) {
    state.requiredErrorFlg.cost = value
  },
  setCompanyNameRequiredError(state, value) {
    state.requiredErrorFlg.companyName = value
  },
  setUserNameRequiredError(state, value) {
    state.requiredErrorFlg.userName = value
  },
  setMailAddressRequiredError(state, value) {
    state.requiredErrorFlg.mailAddress = value
  },
  setSalesValidationError(state, value) {
    state.validationErrorFlg.sales = value
  },
  setEmployeesValidationError(state, value) {
    state.validationErrorFlg.employees = value
  },
  setCostValidationError(state, value) {
    state.validationErrorFlg.cost = value
  },
  setCompanyNameValidationError(state, value) {
    state.validationErrorFlg.companyName = value
  },
  setUserNameValidationError(state, value) {
    state.validationErrorFlg.userName = value
  },
  setMailAddressValidationError(state, value) {
    state.validationErrorFlg.mailAddress = value
  }
}
