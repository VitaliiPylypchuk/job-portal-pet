import {http} from "@/shared/api/mocks/http.ts";
import type {ApiSchemas} from "@/shared/api/schema";
import {HttpResponse} from "msw";

const userPasswords = new Map<string, string>()
const mockUsers: ApiSchemas['User'][] = [
  {
    id: '1',
    email: 'vitaliypyly@gmail.com'
  }
]

const mockTokens = new Map<string, string>()

userPasswords.set('vitaliypyly@gmail.com', '12345678')

export const authHandlers = [
  http.post('/auth/login', async ({ request }) => {
    const {email: requestEmail, password: requestPassword} = await request.json()

    const user = mockUsers.find((u) => u.email === requestEmail)

    const storedPassword = userPasswords.get(requestEmail)

    if (!user || !storedPassword || storedPassword !== requestPassword) {
      return HttpResponse.json({
        message: 'Invalid email or password',
        code: "INVALID_CREDENTIALS"
      }, { status: 400 })
    }

    const token = `mock-data-${Date.now()}`
    return HttpResponse.json({
      accessToken: token,
      user
    })
  }),

  http.post('/auth/register', async ({ request }) => {
    const {email: requestEmail, password: requestPassword} = await request.json()

    if (mockUsers.some(u => u.email === requestEmail)) {
      return HttpResponse.json({
        message: 'User is exist',
        code: "USER_EXIST"
      }, { status: 401 })
    }

    const newUser: ApiSchemas['User'] = {
      id: String(mockUsers.length + 1),
      email: requestEmail
    }

    const token = `mock-data-${Date.now()}`
    mockUsers.push(newUser)
    userPasswords.set(requestEmail, requestPassword)
    mockTokens.set(requestEmail, token)

    return HttpResponse.json({
      accessToken: token,
      user: newUser
    }, {status: 200})
  })
]