import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  Textarea,
  useToast,
  VStack,
} from '@chakra-ui/react'
import { Field, Form, Formik, FormikHelpers } from 'formik'
import { object, string, InferType } from 'yup'

export const Contact = () => {
  const toast = useToast()
  const onSubmit = async (
    values: ContactForm,
    { resetForm }: FormikHelpers<ContactForm>
  ) => {
    try {
      console.log({ values })
      resetForm()
      toast({
        title: 'Your Message has been sent',
        status: 'success',
        duration: 2000,
      })
    } catch (err) {
      toast({
        title: 'There was an error sending your message',
        status: 'error',
        duration: 2000,
      })
    }
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
                    <FormLabel htmlFor='name'>First Name</FormLabel>
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
