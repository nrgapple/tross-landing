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
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik'
import { useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { object, string, InferType } from 'yup'

export const Contact = () => {
  const recaptchaRef = useRef<ReCAPTCHA>()
  const { current: recaptcha } = recaptchaRef || {}
  const toast = useToast()
  const onSubmit = async (
    values: ContactForm,
    { resetForm, setFieldValue }: FormikHelpers<ContactForm>
  ) => {
    try {
      const { name, email, msg, code } = values
      const response = await fetch('/api/captcha', {
        method: 'POST',
        body: JSON.stringify({
          name: name,
          email: email,
          message: msg,
          captcha: code,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (response.ok) {
        toast({
          title: 'Your Message has been sent',
          status: 'success',
          duration: 2000,
        })
      } else {
        const error = await response.json()
        throw new Error(error.message)
      }
      resetForm()
    } catch (err) {
      toast({
        title: 'There was an error sending your message',
        status: 'error',
        duration: 2000,
      })
      setFieldValue('code', '')
    } finally {
      recaptcha?.reset()
    }
  }

  return (
    <Formik
      initialValues={
        {
          name: '',
          email: '',
          msg: '',
          code: '',
        } as ContactForm
      }
      onSubmit={onSubmit}
      validationSchema={contactSchema}>
      {({ isSubmitting, values }) => (
        <Form>
          <VStack spacing={5}>
            <Heading fontSize={{ base: '3xl', md: '4xl' }}>
              Get in Contact with Us
            </Heading>
            <HStack>
              <Field name='name'>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}>
                    <FormLabel htmlFor='name'>Name/ Company</FormLabel>
                    <Input {...field} id='name' placeholder='John' />
                    <FormErrorMessage pos='absolute'>
                      {form.errors.name}
                    </FormErrorMessage>
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
                    <FormErrorMessage pos='absolute'>
                      {form.errors.email}
                    </FormErrorMessage>
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
                  <FormErrorMessage pos='absolute'>
                    {form.errors.msg}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            {values.email && (
              <Field name='code'>
                {({ form }: FieldProps<string>) => (
                  <FormControl
                    isInvalid={!!form.errors.code && !!form.touched.code}>
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      size='normal'
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                      onChange={c => {
                        if (!c) {
                          return
                        }
                        form.setFieldValue('code', c)
                      }}
                    />
                    <FormErrorMessage>{form.errors.code}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            )}
            <Button
              variant='solid'
              shadow='lg-600'
              _hover={{ shadow: 'dark-lg-600' }}
              _active={{
                color: 'gray.500',
                bg: 'brand.600',
              }}
              bg='brand.100'
              mt={4}
              isLoading={isSubmitting}
              type='submit'>
              Submit
            </Button>
          </VStack>
        </Form>
      )}
    </Formik>
  )
}

export const contactSchema = object({
  name: string().optional(),
  email: string().email('Invalid email').required('This is required'),
  msg: string().required('This is required'),
  code: string().required('This is required'),
})

export type ContactForm = InferType<typeof contactSchema>
