import { DefaultBodyType, http, HttpResponse, PathParams } from 'msw'
import type { SignUpRequest } from '../src/pages/sign-up'
import type { LoginRequest } from '../src/pages/login'
import type { Todo } from '../src/entities/todo';

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

  http.get<PathParams, DefaultBodyType, { data: Todo[] }>(`${BASE_URL}/todos`, async () => {
    return HttpResponse.json({
      "data": [
        {
          "id": "1",
          "title": "할일 1",
          "content": "할일 1 설명",
          "createdAt": "2021-09-01T00:00:00.000Z",
          "updatedAt": "2021-09-01T00:00:00.000Z",
        },
        {
          "id": "2",
          "title": "할일 2",
          "content": "할일 2 설명",
          "createdAt": "2021-09-01T00:00:00.000Z",
          "updatedAt": "2021-09-01T00:00:00.000Z",
        },
        {
          "id": "3",
          "title": "할일 3",
          "content": "할일 3 설명",
          "createdAt": "2021-09-01T00:00:00.000Z",
          "updatedAt": "2021-09-01T00:00:00.000Z",
        },
      ]
    }, { status: 200 })
  }),
]