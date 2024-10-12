// src/modules/video/videoController.js
const VideoService = require('./videoService');

class VideoController {
    async createVideo(req, res) {
        const { title, description, url, thumbnailUrl, categoryId } = req.body;
        const userId = req.user.id; // Mengambil id pengguna dari middleware
        try {
            const newVideo = await VideoService.createVideo(userId, title, description, url, thumbnailUrl, categoryId);
            res.status(201).json(newVideo);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getAllVideos(req, res) {
        try {
            const videos = await VideoService.getAllVideos();
            res.status(200).json(videos);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getVideoById(req, res) {
        const { videoId } = req.params;
        try {
            const video = await VideoService.getVideoById(videoId);
            if (!video) {
                return res.status(404).json({ message: 'Video not found' });
            }
            await VideoService.incrementViews(videoId); // Menambah jumlah view
            res.status(200).json(video);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateVideo(req, res) {
        const { videoId } = req.params;
        const { title, description, thumbnailUrl, categoryId } = req.body;
        try {
            const updatedVideo = await VideoService.updateVideo(videoId, title, description, thumbnailUrl, categoryId);
            res.status(200).json(updatedVideo);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteVideo(req, res) {
        const { videoId } = req.params;
        try {
            await VideoService.deleteVideo(videoId);
            res.status(200).json({ message: 'Video deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async publishVideo(req, res) {
        const { videoId } = req.params;
        try {
            await VideoService.publishVideo(videoId);
            res.status(200).json({ message: 'Video published successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async unpublishVideo(req, res) {
        const { videoId } = req.params;
        try {
            await VideoService.unpublishVideo(videoId);
            res.status(200).json({ message: 'Video unpublished successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async likeVideo(req, res) {
        const { videoId } = req.params;
        try {
            await VideoService.incrementLikes(videoId);
            res.status(200).json({ message: 'Video liked successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async dislikeVideo(req, res) {
        const { videoId } = req.params;
        try {
            await VideoService.incrementDislikes(videoId);
            res.status(200).json({ message: 'Video disliked successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new VideoController();
