require('dotenv').config()
import {
  fetchCmsListData,
  fetchCmsListDataByIds,
  fetchCmsData
} from './cms-fetch'

const COLUMN_PAGE = 'column'
const NEWS_PAGE = 'news'
const CASE_PAGE = 'cases'

/*
 * microCMSからcaseの一覧データを取得
 * @param limit ページリミット 
 * @param offset オフセット
 */
export async function fetchCmsListDataCase(limit = 10, offset = 0) {
  return await fetchCmsListData(CASE_PAGE, limit, offset)
}

/*
 * microCMSからcolumnの一覧データを取得
 * @param limit ページリミット 
 * @param offset オフセット
 */
export async function fetchCmsListDataColumn(limit = 10, offset = 0) {
  return await fetchCmsListData(COLUMN_PAGE, limit, offset)
}

/*
 * microCMSからnewsの一覧データを取得
 * @param limit ページリミット 
 * @param offset オフセット
 */
export async function fetchCmsListDataNews(limit = 10, offset = 0) {
  return await fetchCmsListData(NEWS_PAGE, limit, offset)
}

export async function fetchCmsListDataCaseByIds(ids) {
  return await fetchCmsListDataByIds(CASE_PAGE, ids)
}

/*
 * microCMSからcaseのデータを取得
 * @param id ID
 */
export async function fetchCmsDataCase(id) {
  return await fetchCmsData(CASE_PAGE, id)
}

/*
 * microCMSからcolumnのデータを取得
 * @param id ID
 */
export async function fetchCmsDataColumn(id) {
  return await fetchCmsData(COLUMN_PAGE, id)
}

/*
   * microCMSからnewsの一覧データを取得
   * @param id ID
   */
export async function fetchCmsDataNews(id) {
  return await fetchCmsData(NEWS_PAGE, id)
}

/*
 * ルーティングのパス取得
 * @return array ページパス一覧
 */
export async function routing() {
  const columns = await fetchCmsListDataColumn(100)
  const news = await fetchCmsListDataNews(100)
  const cases = await fetchCmsListDataCase(100)
  return [
    ...columns.listData.map(entry => `/column/${entry.id}`),
    ...news.listData.map(entry => `/news/${entry.id}`),
    ...cases.listData.map(entry => `/cases/${entry.id}`)
  ]
}
