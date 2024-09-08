FROM node:lts-bullseye-slim as build
ARG ENV="prod"
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
WORKDIR /app
RUN corepack enable
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prefer-frozen-lockfile
COPY . /app
RUN pnpm build

FROM nginx:1.13.5-alpine as runtime
COPY --from=build --chown=nginx:nginx /app/dist /usr/share/nginx/html
