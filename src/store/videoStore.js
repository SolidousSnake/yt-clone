import { defineStore } from "pinia";

export const useVideoStore = defineStore("videoStore", {
    state: () => ({
        likes: {},
        dislikes: {}
    }),
    actions: {
        loadFromStorage() {
            const saved = localStorage.getItem("videoStore");
            if (saved) {
                const { likes, dislikes } = JSON.parse(saved);
                this.likes = likes || {};
                this.dislikes = dislikes || {};
            }
        },
        saveToStorage() {
            localStorage.setItem("videoStore", JSON.stringify({
                likes: this.likes,
                dislikes: this.dislikes
            }));
        },
        toggleLike(videoId) {
            if (this.likes[videoId]) {
                delete this.likes[videoId];
            } else {
                this.likes[videoId] = true;
                delete this.dislikes[videoId];
            }
            this.saveToStorage();
        },
        toggleDislike(videoId) {
            if (this.dislikes[videoId]) {
                delete this.dislikes[videoId];
            } else {
                this.dislikes[videoId] = true;
                delete this.likes[videoId];
            }
            this.saveToStorage();
        },
        isLiked(videoId) {
            return this.likes[videoId];
        },
        isDisliked(videoId) {
            return this.dislikes[videoId];
        }
    }
});
