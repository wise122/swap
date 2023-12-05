import { externnalLinks, routeNames } from "@/config/routes";
import { Resend } from "resend";
import KoalaWelcomeEmail from "../../react-email/emails/welcome";

const resend = new Resend(process.env.RESEND_API_KEY);
export const sendWelcomeEmail = async (email: string) => {
  await resend.emails.send({
    from: `Dapfy <${process.env.EMAIL_HOST}>`,
    to: [email],
    subject: "Welcome to Dapfy 🎉",
    react: KoalaWelcomeEmail({
      externnalLinks: externnalLinks,
      internalLinks: routeNames,
      email: email,
    }),
    text: "Welcome to Dapfy 🎉",
  });
};
