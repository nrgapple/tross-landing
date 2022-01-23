import { ReactNode } from 'react'
import { Box, Text, Stack, List, ListItem } from '@chakra-ui/react'

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box pt={5}>{children}</Box>
}

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg='gray.100'
      boxShadow={'lg'}
      p={10}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderBottom: 'solid',
        borderBottomWidth: 16,
        borderBottomColor: 'gray.100',
        pos: 'absolute',
        top: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  )
}

export default function WithSpeechBubbles() {
  return (
    <Testimonial>
      <TestimonialContent>
        <List>
          <ListItem fontSize='lg'>
            <Text fontWeight='bold' as='span' color='green.400'>
              $0
            </Text>{' '}
            Hosting
          </ListItem>
          <ListItem fontSize='lg'>
            <Text fontWeight='bold' as='span' color='green.400'>
              {'<'}4 months
            </Text>{' '}
            to Production
          </ListItem>
          <ListItem fontSize='lg'>
            <Text fontWeight='bold' as='span' color='green.400'>
              {'24/7'}
            </Text>{' '}
            support via Slack
          </ListItem>
          <ListItem fontSize='lg'>
            <Text fontWeight='bold' as='span' color='green.400'>
              {'Made in the USA'}
            </Text>{' '}
            by Software Engineers
          </ListItem>
        </List>
      </TestimonialContent>
    </Testimonial>
  )
}
