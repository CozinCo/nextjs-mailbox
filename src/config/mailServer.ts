export const ServerConfig = {
    "gmail.com": {
        imap_host: 'smtp.gmail.com',
        imap_port: 993,
        imap_secure :"SSL",        
        smtp_host: 'imap.gmail.com',
        smtp_port: 587,
        smtp_secure: "TLS",
        secure: false,        
    },
    "outlook.com": {
        imap_host: 'imap-mail.outlook.com',
        imap_port: 993,
        imap_secure :"SSL",        
        smtp_host: 'smtp-mail.outlook.com',
        smtp_port: 587,
        smtp_secure: "TLS",
        secure: false,        
    },
    // "yourdomain": {
    //     imap_host: 'imap-mail.yourdomain',
    //     imap_port: 993,
    //     imap_secure :"SSL",        
    //     smtp_host: 'smtp-mail.yourdomain',
    //     smtp_port: 587,
    //     smtp_secure: "TLS",
    //     secure: false,        
    // }
}
