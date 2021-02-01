require('dotenv').config()
import axios from 'axios'

const API_VERSION = 'v1'

/*
* microCMSから一覧データを取得
* @param pageName 取得するページ名
* @param limit ページリミット 
* @param offset オフセット
*/
export async function fetchCmsListData(pageName, limit = 10, offset = 0) {
  const { data } = await axios
    .get(
      `${
        process.env.microCmsApiDomain
      }/${API_VERSION}/${pageName}?limit=${limit}&offset=${offset}`,
      {
        headers: { 'X-API-KEY': process.env.microCmsApiKey }
      }
    )
    .catch(err => {
      console.log(err.response)
      return err.response
    })
  return {
    listData: data.contents
  }
}

/*
  * microCMSから一覧データをidベースで取得
  * @param pageName 取得するページ名
  * @param ids 取得するidの配列
  * @param limit ページリミット 
  */
export async function fetchCmsListDataByIds(pageName, ids) {
  const { data } = await axios
    .get(
      `${
        process.env.microCmsApiDomain
      }/${API_VERSION}/${pageName}?ids=${ids.join(',')}`,
      {
        headers: { 'X-API-KEY': process.env.microCmsApiKey }
      }
    )
    .catch(err => {
      console.log(err.response)
      return err.response
    })
  return {
    listData: data.contents
  }
}

export async function fetchCmsListDataByCategoryId(
  pageName,
  categoryId,
  limit
) {
  const { data } = await axios
    .get(
      `${
        process.env.microCmsApiDomain
      }/${API_VERSION}/${pageName}?limit=${limit}&filters=categories[contains]${categoryId}`,
      {
        headers: { 'X-API-KEY': process.env.microCmsApiKey }
      }
    )
    .catch(err => {
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
export async function fetchCmsData(pageName, id) {
  const { data } = await axios
    .get(`${process.env.microCmsApiDomain}/${API_VERSION}/${pageName}/${id}`, {
      headers: { 'X-API-KEY': process.env.microCmsApiKey }
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
