import { http, HttpResponse, PathParams } from 'msw'
import type { SignUpRequest } from '../src/auth'

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const handlers = [
  http.post<PathParams, SignUpRequest>(`${BASE_URL}/users/create`, (req) => {
    console.log(req);
    return HttpResponse.json({
      "message": "계정이 성공적으로 생성되었습니다",
      "token": "token"
    }, { status: 200 })
  }),
]