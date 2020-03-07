require('dotenv').config()
import axios from 'axios'
const API_VERSION = 'v1'
const microCmsUrl = `${process.env.microCmsApiDomain}/${API_VERSION}`

/*
 * microCMSから一覧の取得
 */
export async function fetchListData(pageName) {
  const { data } = await axios
    .get(`${microCmsUrl}/${pageName}`, {
      headers: { 'X-API-kEY': process.env.microCmsApiKey }
    })
    .catch(err => {
      console.log(err.response)
      return err.response
    })
  return {
    listData: data.contents
  }
}
