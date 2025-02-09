# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=20.10.0
FROM node:${NODE_VERSION}-slim as base

LABEL fly_launch_runtime="Remix"

# Remix app lives here
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"


# Throw-away build stage to reduce size of final image
FROM base as build

# Install packages needed to build node modules
#RUN apt-get update -qq && \
#    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3 openssl sqlite3

RUN apt-get update && apt-get install -y openssl sqlite3

# Install node modules
COPY --link package-lock.json package.json ./
RUN npm ci --include=dev

# Copy application code
COPY --link . .

# Build application
RUN npm run build

# Remove development dependencies
RUN npm prune --omit=dev


# Final stage for app image
FROM base

# Make SQLite CLI accessible via fly ssh console
# $ fly ssh console -C database-cli
# RUN echo "#!/bin/sh\nset -x\nsqlite3 \$DATABASE_URL" > /usr/local/bin/database-cli && chmod +x /usr/local/bin/database-cli

# Copy built application
COPY --from=build /app /app
# COPY --from=build /app/node_modules/.prisma /app/node_modules/.prisma

# Start the server by default, this can be overwritten at runtime
EXPOSE 3000
CMD [ "npm", "run", "start" ]
