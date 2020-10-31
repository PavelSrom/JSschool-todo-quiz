import React from 'react'
import { Text } from '@chakra-ui/core'

export const Footer: React.FC = () => (
  <footer style={{ padding: 16, background: '#333' }}>
    <Text fontSize="xl" style={{ textAlign: 'center', color: '#fff' }}>
      Built with Chakra UI
    </Text>
  </footer>
)
