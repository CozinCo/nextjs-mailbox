import { ImapFlow } from "imapflow";

export class MailServiceHandler {
    constructor(private readonly connection: ImapFlow) { }

    async listAllMails() {
        let t = Date.now();
        let m = 0;
        console.log('USE CHANGEDSINCE');
        console.log(this.connection.mailbox);

        console.log('LISTALL');
        for await (let message of this.connection.fetch(
            '1:*',
            // { unseen: false },
            {
                uid: true,
                flags: true,
                bodyStructure: true,
                envelope: true,
                internalDate: true,
                threadId: true,
                headers: ['date', 'subject']
            },
            {
                uid: true,
                changedSince: this.connection.mailbox && this.connection.mailbox.highestModseq ? this.connection.mailbox.highestModseq - BigInt(10) : false
            }
        )) {
            console.log(`requestTagMap size: ${this.connection.requestTagMap.size}`, this.connection.requestTagMap);
            m++;
            console.log(message.headers);
            console.log(message.envelope.subject);
            console.log(message.envelope);
            //console.log(require('util').inspect(message, false, 22));

            // await new Promise(resolve => setTimeout(resolve, 100));
        }
        console.log('ALL LISTED');
        console.log(m, Date.now() - t);
    }
    async listLastMail() {
        let t = Date.now();
        let message = await this.connection.fetchOne(
            '*',
            {
                uid: true,
                flags: true,
                bodyStructure: true,
                envelope: true,
                internalDate: true,
                size: true,
                headers: ['date', 'subject'],
                source: {
                    start: 1024,
                    maxLength: 100
                },

                emailId: true,
                threadId: true,
                xGmLabels: true,

                bodyParts: [
                    'text',
                    '1.mime',
                    {
                        key: '1',
                        start: 2,
                        maxLength: 5
                    }
                ]
            },
            { uid: false }
        );


        console.log(Date.now() - t);
        return message
    }
}