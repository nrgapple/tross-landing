import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import { object, string, InferType } from 'yup'

export const Contact = () => {
  const onSubmit = async (values: ContactForm) => {
    console.log({ values })
  }

  return (
    <Formik
      initialValues={
        {
          name: '',
          email: '',
          msg: '',
        } as ContactForm
      }
      onSubmit={onSubmit}
      validationSchema={contactSchema}>
      {({ isSubmitting }) => (
        <Form>
          <VStack spacing={5}>
            <Heading>Get in Contact with Us</Heading>
            <HStack>
              <Field name='name'>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}>
                    <FormLabel htmlFor='name'>First name</FormLabel>
                    <Input {...field} id='name' placeholder='John' />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name='email'>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.email && form.touched.email}>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <Input
                      {...field}
                      id='email'
                      placeholder='john@example.com'
                    />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </HStack>
            <Field name='msg'>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.msg && form.touched.msg}>
                  <FormLabel htmlFor='msg'>Message</FormLabel>
                  <Textarea
                    {...field}
                    id='msg'
                    placeholder='How can we help you?'
                  />
                  <FormErrorMessage>{form.errors.msg}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button mt={4} isLoading={isSubmitting} type='submit'>
              Submit
            </Button>
          </VStack>
        </Form>
      )}
    </Formik>
  )
}

export const contactSchema = object({
  name: string().required('This is a required'),
  email: string().email('Invalid email').required('This is a required'),
  msg: string().required('This is a required'),
})

export type ContactForm = InferType<typeof contactSchema>
