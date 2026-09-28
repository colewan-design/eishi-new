<script setup>
definePageMeta({ layout: 'tour' })
</script>

<style>
/* keep page scroll but hide scrollbar */
html {
    scrollbar-width: none;
    /* Firefox */
    -ms-overflow-style: none;
    /* IE 10+ */
}

html::-webkit-scrollbar {
    display: none;
    /* Chrome, Safari, Edge */
}

.back-btn {
    position: fixed;
    top: 16px;
    left: 16px;
    z-index: 10;
}

.video-scroll-wrapper {
    position: relative;
    width: 100%;
}

.video-scroll-container {
    position: sticky;
    top: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.scroll-space {
    height: 500vh;
    /* controls scroll length / video duration */
}

.fullscreen-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.scroll-prompt {
    position: absolute;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 5;
    color: white;
    text-align: center;
    font-size: 14px;
    letter-spacing: 1px;
    animation: fadeMove 2s infinite;
}

.scroll-prompt .arrow {
    margin: 8px auto 0;
    width: 12px;
    height: 12px;
    border-right: 2px solid white;
    border-bottom: 2px solid white;
    transform: rotate(45deg);
}

@keyframes fadeMove {
    0% {
        opacity: 0;
        transform: translate(-50%, 0);
    }

    50% {
        opacity: 1;
        transform: translate(-50%, -8px);
    }

    100% {
        opacity: 0;
        transform: translate(-50%, 0);
    }
}

.title-3d {
    color: darkgrey;
    white-space: nowrap;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3em;
    font-family: sans-serif;
    letter-spacing: 0.1em;
    transition: 0.3s;
    text-shadow: 1px 1px 0 grey, 1px 2px 0 grey, 1px 3px 0 grey, 1px 4px 0 grey,
        1px 5px 0 grey, 1px 6px 0 grey, 1px 7px 0 grey, 1px 8px 0 grey,
        5px 13px 15px black;
}

.title-3d:hover {
    transition: 0.3s;
    transform: scale(1.1)translate(-50%, -50%);
    text-shadow: 1px -1px 0 grey, 1px -2px 0 grey, 1px -3px 0 grey,
        1px -4px 0 grey, 1px -5px 0 grey, 1px -6px 0 grey, 1px -7px 0 grey,
        1px -8px 0 grey, 5px -13px 15px black, 5px -13px 25px #808080;
}
</style>

<template>
    <div class="video-scroll-wrapper">
        <div class="video-scroll-container">
            <div class="title-3d" ref="title3d">Poultry Farm</div>
            <div class="scroll-prompt">
                <span>Scroll down</span>
                <div class="arrow"></div>
            </div>
            <v-btn rounded="lg" class="back-btn" icon="mdi-arrow-left" @click="$router.back()" />

            <video ref="video" class="fullscreen-video" muted playsinline preload="metadata">
                <source src="/videos/warehouse.mp4" type="video/mp4" />
            </video>
        </div>

        <div class="scroll-space"></div>
    </div>
</template>

<script>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
    mounted() {
        const title = this.$refs.title3d;

        // entrance animation
        gsap.fromTo(
            title,
            { rotationX: -90, opacity: 0 },
            { rotationX: 0, opacity: 1, duration: 1.5, ease: "power3.out" }
        );

        // floating effect
        const floatTween = gsap.to(title, {
            y: "-=10",
            repeat: -1,
            yoyo: true,
            duration: 2,
            ease: "sine.inOut",
        });

        ScrollTrigger.create({
            start: 1, // triggers immediately when page scroll > 0
            onUpdate: (self) => {
                if (self.scroll() > 0) {
                    gsap.set(title, { opacity: 0 });
                    floatTween.kill(); // stop floating
                }
            },
        });


        const video = this.$refs.video;

        video.addEventListener("loadedmetadata", () => {
            const duration = video.duration;

            // create a timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".video-scroll-wrapper",
                    start: "top top",
                    end: "bottom top",
                    scrub: 0.5, // smooth scroll scrub
                },
            });

            // animate a dummy object for smooth tweening
            const videoObj = { time: 0 };
            tl.to(videoObj, {
                time: duration,
                ease: "none",
                onUpdate: () => {
                    video.currentTime = videoObj.time;
                },
            });
        });
    },
};
</script>
