import { describe, expect, it } from 'vitest'
import main from '../src'

describe('[ Operation: Root suite ]', () => {
  it('should be a function', () => {
    expect(typeof main).toBe('function')
  })
})
