import { postRouter } from "~/server/api/routers/post";
import { createTRPCRouter } from "~/server/api/trpc";
import { starRouter } from "~/server/api/routers/star";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  star: starRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
