next.js v14.0.4
node.js v20.0.0

## .env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=

## directory
http://localhost:3000
http://localhost:3000/sign-in
http://localhost:3000/sign-up
http://localhost:3000/select-org


## Getting Started

First, run the development server:

```bash
pnpm dev
```

#### UI library
- npx shadcn-ui@latest init
  - Default, Neutral, use React Server Components
- npx shadcn-ui@latest add button
- npx shadcn-ui@latest add skeleton
- npx shadcn-ui@latest add sheet
- npx shadcn-ui@latest add label


#### zustand
- pnpm add zustand


#### prisma
pnpm add -D prisma
npx prisma init
npx prisma generate
npx prisma db push
pnpm add @prisma/client

#### prisma management console
npx prisma studio


### server action

```
const { execute, data, error, fieldErrors } = useAction(safeAction, {
  onSuccess: (data: Output) => {},
  onError: (error: string) => {},
  onComplete: () => {}
})
```