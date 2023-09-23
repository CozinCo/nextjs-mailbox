import { ReadMailResult } from '@/types/nav'
import React from 'react'

const MailBody = ({ body }: { body: ReadMailResult["body"] }) => {
  const markup = { __html: body || '<h1>Loading Data ..</h1>' };
return <div dangerouslySetInnerHTML={markup} />;
}

export default MailBody