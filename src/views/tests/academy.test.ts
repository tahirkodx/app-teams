import { describe, it } from 'vitest'

import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import Academy from '@/views/Academy.vue'

mount({
  global: {
    plugins: [createTestingPinia()],
  },
})

describe('Create', () => {
  it('renders properly', async () => {
    mount(Academy)
  })
})