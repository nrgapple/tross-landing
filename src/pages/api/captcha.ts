export default async function handler(req, res) {
  const { body, method } = req
  const { email, message, captcha } = body

  if (method === 'POST') {
    if (!email || !captcha || !message) {
      return res.status(422).json({
        message: 'Unproccesable request, please provide the required fields',
      })
    }

    try {
      // Ping the google recaptcha verify API to verify the captcha code you received
      const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
          },
          method: 'POST',
        }
      )
      const captchaValidation = await response.json()
      if (captchaValidation.success) {
        console.log('Captcha success')
        // await sendEmail({
        //   name: 'Tross',
        //   email: 'engineering@referican.com',
        //   subject: 'Referican Contact Us',
        //   templateId: '3z0vklomqxg7qrx5',
        //   vars: {
        //     email,
        //     message,
        //   },
        // })
        return res.status(200).send('OK')
      }

      return res.status(422).json({
        message: 'Unproccesable request, Invalid captcha code',
      })
    } catch (error) {
      console.log(error)
      return res.status(422).json({ message: 'Something went wrong' })
    }
  }
  return res.status(404).send('Not found')
}
