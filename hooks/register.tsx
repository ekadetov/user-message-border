import type { Register } from 'claude-code'

export const register: Register = on => {
  on('ui.render', { component: 'UserMessage' }, ($, e, next) => {
    if (e.props.origin.kind !== 'composer') {
      return next(e)
    }

    const { Box, Text } = $.ui.resolve(e)

    return (
      <Box
        borderStyle="round"
        borderColor="#b4a0f0"
        paddingX={1}
        alignSelf="flex-start"
      >
        <Text>{e.props.text}</Text>
      </Box>
    )
  })
}
