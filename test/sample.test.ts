import { describe, expect, it } from 'vitest'
import main from '../src'

describe('[ Operation: Root suite ]', () => {
  it('should be a function', async () => {
    expect(typeof main).toBe('function')
    expect(async () => {
      await main('world')
    }).not.toThrow()
  })
})
