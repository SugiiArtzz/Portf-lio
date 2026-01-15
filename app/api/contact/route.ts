import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    // --- RASTREADOR DE ERROS (Olhe seu terminal preto ao enviar) ---
    console.log("Tentando enviar email...")
    console.log("Usuario:", process.env.SMTP_USER)
    console.log("Senha configurada?", process.env.SMTP_PASS ? "SIM" : "NÃO (Erro aqui!)")
    // -------------------------------------------------------------

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER, // Pega do arquivo .env.local
        pass: process.env.SMTP_PASS, // Pega do arquivo .env.local
      },
    })

    const mailOptions = {
      from: process.env.SMTP_USER, 
      to: "sugiiartzz@gmail.com",   // O email chega PARA VOCÊ aqui
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <h3>Nova mensagem de: ${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${subject}</p>
        <p><strong>Mensagem:</strong><br/>${message}</p>
      `,
    }

    await transporter.sendMail(mailOptions)
    console.log("SUCESSO! O email foi enviado.")

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("ERRO NO ENVIO:", error)
    return NextResponse.json({ error: "Erro ao enviar" }, { status: 500 })
  }
}