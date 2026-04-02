import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    console.log('Contact API route hit')
    try {
        const { name, email, message } = await req.json()

        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'sosyalstages@gmail.com',
            subject: `New message from ${name}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `
        })

        return Response.json({ success: true })
    } catch (error) {
        return Response.json({ success: false, error: 'Failed to send message.' }, { status: 500 })
    }
}