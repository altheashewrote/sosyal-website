import { Resend } from 'resend'

export async function POST(req: Request) {
    console.log('API key present:', !!process.env.RESEND_API_KEY)
    console.log('Contact API route hit')
    try {
        const resend = new Resend(process.env.RESEND_API_KEY)
        const { name, email, message } = await req.json()

        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'sosyalstages@gmail.com',
            subject: `[SOSYAL MOVEMENT]: NEW MESSAGE FROM ${name}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `
        })

        console.log('message sent!')
        return Response.json({ success: true })
    } catch (error) {
        return Response.json({ success: false, error: 'Failed to send message.' }, { status: 500 })
    }
}