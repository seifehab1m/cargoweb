# Base stage
FROM node:18-alpine as base
RUN apk add --no-cache g++ make py3-pip libc6-compat
WORKDIR /app
COPY package*.json ./

# Builder stage
FROM base as builder
WORKDIR /app
COPY . . 
RUN npm ci
RUN npm run build

# Production stage
FROM base as production
WORKDIR /app

# Set environment to production
ENV NODE_ENV=production

# Install only production dependencies
RUN npm ci --only=production

# Create and use a non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs

# Copy necessary files from builder stage
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
# COPY --from=builder /app/public ./public

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]