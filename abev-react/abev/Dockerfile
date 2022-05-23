# Base on offical Node.js Alpine image
FROM node:16.13.2-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
# Set working directory
WORKDIR /home/node/app

# Install PM2 globally
RUN npm install --global pm2

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package*.json ./

# Install dependencies
RUN npm install 

USER node

# Copy all files
COPY --chown=node:node ./ ./

# Build app
RUN npm run build

ENV NODE_ENV=production

# Expose the listening port
EXPOSE 3000

# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image
USER node

# Run npm start script with PM2 when container starts
CMD [ "pm2-runtime", "npm", "--", "start" ]