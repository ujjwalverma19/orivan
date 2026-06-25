/**
 * @deprecated Import from `@/content/registry` and `@/content/schemas` instead.
 * This module is a thin compatibility shim and will be removed once all
 * call sites migrate.
 */
export type { Video, VideoKind, VideoDifficulty, VideoInput } from "@/content/schemas";

export { isPlayableVideo } from "@/content/schemas";

import {
  getAllVideos,
  getVideoById,
  getVideosByIds as registryGetVideosByIds,
  getPlayableVideosForPerson,
} from "@/content/registry";

/** @deprecated use `getAllVideos()` from `@/content/registry`. */
export const videos = getAllVideos();

/** @deprecated use `getVideoById` from `@/content/registry`. */
export const getVideo = getVideoById;

/** @deprecated use `getVideosByIds` from `@/content/registry`. */
export const getVideosByIds = registryGetVideosByIds;

/** @deprecated use `getPlayableVideosForPerson` from `@/content/registry`. */
export const getVideosForPerson = getPlayableVideosForPerson;
