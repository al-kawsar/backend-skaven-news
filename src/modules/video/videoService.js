// src/modules/video/videoService.js
const VideoRepository = require('./videoRepository');

class VideoService {
    async createVideo(userId, title, description, url, thumbnailUrl, categoryId) {
        return await VideoRepository.createVideo(userId, title, description, url, thumbnailUrl, categoryId);
    }

    async getAllVideos() {
        return await VideoRepository.getAllVideos();
    }

    async getVideoById(videoId) {
        return await VideoRepository.getVideoById(videoId);
    }

    async updateVideo(videoId, title, description, thumbnailUrl, categoryId) {
        return await VideoRepository.updateVideo(videoId, title, description, thumbnailUrl, categoryId);
    }

    async deleteVideo(videoId) {
        await VideoRepository.deleteVideo(videoId);
    }

    async publishVideo(videoId) {
        await VideoRepository.publishVideo(videoId);
    }

    async unpublishVideo(videoId) {
        await VideoRepository.unpublishVideo(videoId);
    }

    async incrementViews(videoId) {
        await VideoRepository.incrementViews(videoId);
    }

    async incrementLikes(videoId) {
        await VideoRepository.incrementLikes(videoId);
    }

    async incrementDislikes(videoId) {
        await VideoRepository.incrementDislikes(videoId);
    }
}

module.exports = new VideoService();
