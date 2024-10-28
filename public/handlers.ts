import { http, HttpResponse, PathParams } from 'msw'
import type { SignUpRequest } from '../src/pages/sign-up'
import type { LoginRequest } from '../src/pages/login'

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const handlers = [
  http.post<PathParams, SignUpRequest>(`${BASE_URL}/users/create`, async ({ request }) => {
    const requestBody = await request.json();
    console.log(requestBody);
    return HttpResponse.json({
      "message": "계정이 성공적으로 생성되었습니다",
      "token": "token"
    }, { status: 200 })
  }),

  http.post<PathParams, LoginRequest>(`${BASE_URL}/users/login`, async ({ request }) => {
    const requestBody = await request.json();
    console.log(requestBody);
    return HttpResponse.json({
      "message": "계정이 성공적으로 생성되었습니다",
      "token": "token"
    }, { status: 200 })
  }),
]