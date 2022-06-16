export = InteractionManager;
/** @namespace */
declare class InteractionManager {
    /**
     * @param {import('../Actions')} actions
     */
    constructor(actions: any);
    /**
     * API response.
     *
     * @typedef {{ success: boolean, status_code: number, data: object }} Response
     */
    /**
     * Likes a given video.
     *
     * @param {string} video_id
     * @returns {Promise.<Response>}
     */
    like(video_id: string): Promise<{
        success: boolean;
        status_code: number;
        data: object;
    }>;
    /**
     * Dislikes a given video.
     *
     * @param {string} video_id
     * @returns {Promise.<Response>}
     */
    dislike(video_id: string): Promise<{
        success: boolean;
        status_code: number;
        data: object;
    }>;
    /**
     * Removes a like/dislike.
     *
     * @param {string} video_id
     * @returns {Promise.<Response>}
     */
    removeLike(video_id: string): Promise<{
        success: boolean;
        status_code: number;
        data: object;
    }>;
    /**
     * Subscribes to a given channel.
     *
     * @param {string} channel_id
     * @returns {Promise.<Response>}
     */
    subscribe(channel_id: string): Promise<{
        success: boolean;
        status_code: number;
        data: object;
    }>;
    /**
     * Unsubscribes from a given channel.
     *
     * @param {string} channel_id
     * @returns {Promise.<Response>}
     */
    unsubscribe(channel_id: string): Promise<{
        success: boolean;
        status_code: number;
        data: object;
    }>;
    /**
     * Posts a comment on a given video.
     *
     * @param {string} video_id
     * @param {string} text
     * @returns {Promise.<Response>}
     */
    comment(video_id: string, text: string): Promise<{
        success: boolean;
        status_code: number;
        data: object;
    }>;
    /**
     * Translates a given text using YouTube's comment translate feature.
     *
     * @param {string} text
     * @param {string} target_language - an ISO language code
     * @param {object} [args] - optional arguments
     * @param {string} [args.video_id]
     * @param {string} [args.comment_id]
     * @returns {Promise.<{ success: boolean, status_code: number, translated_content: string, data: object }>}
     */
    translate(text: string, target_language: string, args?: {
        video_id?: string;
        comment_id?: string;
    }): Promise<{
        success: boolean;
        status_code: number;
        translated_content: string;
        data: object;
    }>;
    /**
     * Changes notification preferences for a given channel.
     * Only works with channels you are subscribed to.
     *
     * @param {string} channel_id
     * @param {string} type - `PERSONALIZED` | `ALL` | `NONE`
     * @returns {Promise.<Response>}
     */
    setNotificationPreferences(channel_id: string, type: string): Promise<{
        success: boolean;
        status_code: number;
        data: object;
    }>;
    #private;
}