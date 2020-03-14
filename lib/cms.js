require('dotenv').config()
import axios from 'axios'
const API_VERSION = 'v1'
const COLUMN_PAGE = 'column'
const NEWS_PAGE = 'news'

/*
 * microCMSからcolumnの一覧データを取得
 * @param limit ページリミット 
 * @param offset オフセット
 */
export async function fetchCmsListDataColumn(limit = 10, offset = 0) {
  return fetchCmsListData(COLUMN_PAGE, limit, offset)
}

/*
 * microCMSからnewsの一覧データを取得
 * @param limit ページリミット 
 * @param offset オフセット
 */
export async function fetchCmsListDataNews(limit = 10, offset = 0) {
  return fetchCmsListData(NEWS_PAGE, limit, offset)
}

/*
 * microCMSからcolumnのデータを取得
 * @param id ID
 */
export async function fetchCmsDataColumn(id) {
  return fetchCmsData(COLUMN_PAGE, id)
}

/*
   * microCMSからnewsの一覧データを取得
   * @param id ID
   */
export async function fetchCmsDataNews(id) {
  return fetchCmsData(NEWS_PAGE, id)
}

/*
 * ルーティングのパス取得
 * @return array ページパス一覧
 */
export function routing() {
  const columns = fetchCmsListDataColumn()
  return [
    ...[columns.contents].map(column => {
      return { route: `/column/${column.id}` }
    })
  ]
}

/*
 * microCMSから一覧データを取得
 * @param pageName 取得するページ名
 * @param limit ページリミット 
 * @param offset オフセット
 */
async function fetchCmsListData(pageName, limit = 10, offset = 0) {
  const { data } = await axios
    .get(
      `${
        process.env.microCmsApiDomain
      }/${API_VERSION}/${pageName}?limit=${limit}&offset=${offset}`,
      {
        headers: { 'X-API-kEY': process.env.microCmsApiKey }
      }
    )
    .catch(err => {
      console.log('fetchCmsListDataError')
      console.log(err.response)
      return err.response
    })
  return {
    listData: data.contents
  }
}

/*
 * microCMSからページ名とIDを指定してデータを取得
 * @param pageName 取得するページ名
 * @param id ID
 */
async function fetchCmsData(pageName, id) {
  const { data } = await axios
    .get(`${process.env.microCmsApiDomain}/${API_VERSION}/${pageName}/${id}`, {
      headers: { 'X-API-kEY': process.env.microCmsApiKey }
    })
    .catch(err => {
      console.log('fetchCmsDataError')
      console.log(err.response)
      return err.response
    })
  return {
    data: data
  }
}
