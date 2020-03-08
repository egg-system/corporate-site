require('dotenv').config()
import axios from 'axios'
const API_VERSION = 'v1'
const COLUMN_PAGE = 'column'
const NEWS_PAGE = 'news'

/*
 * microCMSからcolumnの一覧データを取得
 */
export async function fetchCmsListDataColumn() {
  return fetchCmsListData(COLUMN_PAGE)
}

/*
 * microCMSからnewsの一覧データを取得
 */
export async function fetchCmsListDataNews() {
  return fetchCmsListData(NEWS_PAGE)
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
 * microCMSから一覧データを取得
 * @param pageName 取得するページ名
 */
async function fetchCmsListData(pageName) {
  const { data } = await axios
    .get(`${process.env.microCmsApiDomain}/${API_VERSION}/${pageName}`, {
      headers: { 'X-API-kEY': process.env.microCmsApiKey }
    })
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
