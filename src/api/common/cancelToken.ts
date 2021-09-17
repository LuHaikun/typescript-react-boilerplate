import axios from 'axios'

const { CancelToken } = axios

export default function (cb: any): any {
  return new CancelToken(cb)
}
