# zephyrlin.me

## Desciption

A personal website built with Next.js.

## Tech Stacks

- Framework: **React + Next.js**
- Styling: **Tailwind CSS** + **Shadcn UI**
- Animation: **Framer Motion**
- Database: **Supabase**
- ORM: **Prisma**
- CMS: **Sanity**
- Authentication: **Clerk**
- Deployment: **Vercel**

## Get Started

### Environment

- <a href="https://nodejs.org/" target="_blank">Node.js 18.18</a> or later.

### Clone the repository:

```bash
git clone https://github.com/eurooooo/zephyrlin.me.git
cd zephyrlin.me
```

### Install dependencies:

```bash
npm install
```

### Set up environment variables

Create a .env file in the root directory with the following:

```
# supabase
DATABASE_URL=
DIRECT_URL=

# clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# sanity
NEXT_PUBLIC_SANITY_ID=
```

### Run the development server

```bash
npm run dev
```

Navigate to http://localhost:3000 to see the website in action.
