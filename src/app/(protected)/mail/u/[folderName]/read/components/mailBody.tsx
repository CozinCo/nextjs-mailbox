import { ReadMailResult } from '@/types/nav'
import React from 'react'

const MailBody = ({ body, text }: { text: ReadMailResult["textAsHtml"], body: ReadMailResult["body"] }) => { 
  const markup = { __html: '<pre>' + text + '</pre>' };
  if (!body) {
    return <div dangerouslySetInnerHTML={markup} />;
  }
  return <div dangerouslySetInnerHTML={{ __html: body }} />;
}

export default MailBody