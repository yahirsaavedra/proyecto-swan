import { Flex, Heading, Text } from '@radix-ui/themes'

function UnderConstruction() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      style={{ minHeight: '100vh' }}
      gap="3"
    >
      <Heading size="8">🚧 En construcción 🚧</Heading>
      <Text size="4" color="gray">
        Próximamente disponible.
      </Text>
    </Flex>
  )
}

export default UnderConstruction
