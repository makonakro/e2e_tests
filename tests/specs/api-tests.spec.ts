import { test } from '../../test-config/test-base'
import { expect, request } from '@playwright/test'
import axios from 'axios'

test.describe('Json placeholder', () => {
  test('get todo with id 1', async () => {
    const response = await axios.get(`${process.env.USER_BASE_API_URL}/todos/1`, {
    })
     expect(response.status).toBe(200)
     expect(response.data).toMatchObject({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false
     })
  })
  test('patch user', async () => {
    const response = await axios.patch(`${process.env.USER_BASE_API_URL}/users/1`, {
      data: {
        name: 'new user'
      }
    })
    expect(response.status).toBe(200)
  })
  test('post new post', async () => {
    const response = await axios.post(`${process.env.USER_BASE_API_URL}/posts`, {
      data: {
    title: 'new post',
    body: 'this is my new post!',
    userId: 1,
    }
  })
  expect(response.status).toBe(201)
  expect(response.statusText).toEqual('Created')
  })
  test('delete post', async() => {
    const response = await axios.delete(`${process.env.USER_BASE_API_URL}/posts/1`, {
    })
    expect(response.status).toBe(200)
    expect(response.config.method).toEqual('delete')
  })
})