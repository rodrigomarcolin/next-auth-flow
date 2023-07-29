# Next Auth Flow

_don't mind the cats_

The main goal of this project is to teach me about authentication and authorization flow and management both in the frontend and in the backend. I revisited an old backend project of mine which used Django Rest Framework to create an API for personal finance management with JWT authentication. That's the API that this project consumes in order to work.

I also want this to be as clean code as possible so it can be a starter project for any Next.JS + TailwindCSS + Typescrit applications that I might create from now on.

## How this works

This project uses the new APP router introduced in NextJS v13.

There is an AuthContext which provides Auth-related state variables to any of the ClientComponents in the Component tree. It uses the Auth and Token services under the hood to make any relevant requests to the API and manage the storage of tokens in cookies.

Server-Side Pages can access the Request cookies and verify whether the user is authed (Authenticated and authorized) or not, redirecting the user whenever necessary.

Client-Side Components can access the Auth state variables provided by the Auth Context.

## How this can be expanded upon

Modifying the token storage strategy might be the first thing to do. It uses cookies for now but you might want to tweak how those tokens are stored. In that case you should modify the tokenService available in src/services/tokenService.js

Or maybe the API you want to use deals with different user informations than mine. In that case you should change:

- auth service available in src/services/authService.js
- auth context available in src/contexts/authContext.js

Then just build new pages keeping the current pattern in mind. There should be plenty of examples of pages dealing with both ss-components and cs-components for you to be inspired from. Please **keep in mind that not much of thought and effort was put into the layout and design of this project, since its main goal is to teach me about auth**. If you want to use it as a starter that can be expanded upon and completely customized - as I myself plan to do - then **pages and components should and must be added and modified.**.

## Running

I used Node v18. Just `npm install && npm run dev` as usual. If you want to see it working with my API as well, [its repo page should help you get it up and running](https://github.com/rodrigomarcolin/gefin-backend);

## Managing Colors

https://uicolors.app/create
https://www.tailwindshades.com/

## ESLint

https://gourav.io/blog/nextjs-cheatsheet#add-eslint-to-nextjs-typescript-project

## TODO:

- Refresh token management
- Authenticated pages 
- better parametrization (env variables)

## Learning Resources

- [Documentação Next](https://nextjs.org/docs/app)
- [Next.js - Autenticação JWT com back-end próprio - Code/Drops #72 | Rocketseat](https://www.youtube.com/watch?v=pvrKHpXGO8E)
- [Next.js: Autenticação e Gerenciamento de Tokens | Alura](https://cursos.alura.com.br/course/nextjs-autenticacao-gerenciamento-tokens/)
