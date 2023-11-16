# Project: GreeenChat

**Try it out at [greeenchat.com](https://greeenchat.com/).**

## Overview
GreenChat is a modern and user-friendly web application designed to facilitate seamless communication and collaboration. Whether you're connecting with colleagues, friends, or family, our platform offers a robust messaging experience with a focus on simplicity and efficiency.

## Features

- **Real-Time Messaging:** Enjoy instant communication with real-time message updates.
- **User-Friendly Interface:** Intuitive design for easy navigation and a pleasant user experience.
- **Multi-Platform Support:** Access the messaging platform from any device with a responsive and adaptive layout.
- **Secure Communication:** Prioritize the security of your conversations with end-to-end encryption.
- **Media Sharing:** Share images, videos, and documents effortlessly within the chat.
- **Customization Options:** Personalize your experience with customizable themes and notification settings.


### Prerequisites

**Node version 14.x**

### Install packages

```shell
npm i
```

### Setup .env file


```js
DATABASE_URL=
NEXTAUTH_SECRET=

NEXT_PUBLIC_PUSHER_APP_KEY=
PUSHER_APP_ID=
PUSHER_SECRET=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=

GITHUB_ID=
GITHUB_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

### Setup Prisma

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```
