"use server";
import React from "react";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import { validateString, getErrorMessage } from "@/components/lib/utils";

const resend = new Resend("re_E7MsSUvs_LN6t73M3UWWbD2bzim5SqE14");
export const senderEmail = async (formaData: FormData) => {
  const senderName = formaData.get("senderName");
  const senderEmail = formaData.get("senderEmail");
  const subject = formaData.get("subject");
  const message = formaData.get("message");

  if (!validateString(senderName, 500)) {
    return {
      error: "이름이 잘못되었습니다.",
    };
  }

  if (!validateString(senderEmail, 500)) {
    return {
      error: "이메일이 잘못되었습니다.",
    };
  }

  if (!validateString(subject, 500)) {
    return {
      error: "제목이 잘못되었습니다.",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "여기로 연락주세요. <iam@dawn.kim>",
      to: "iam@dawn.kim" as string,
      subject: subject as string,
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
        senderName: senderName as string,
        subject: subject as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
