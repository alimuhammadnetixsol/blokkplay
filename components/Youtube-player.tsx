"use client";
import React, { useEffect } from 'react';
import YouTubePlayer from 'youtube-player';
import { YouTubePlayer as YotubePlayerType } from 'youtube-player/dist/types';

const YoutubePlayerComponent = () => {
    let player: YotubePlayerType;

    useEffect(() => {
        // Initialize the YouTube player
        player = YouTubePlayer('video-player', { playerVars: { controls: 0, autoplay: 1, loop: 1 } });

        // Load the video when the component mounts
        player.loadVideoById('M7lc1UVf-VE');

        // Play the video when it's loaded
        player.playVideo();


        // Stop the video after a delay
        // setTimeout(() => {
        //   player.stopVideo()
        //     .then(() => {
        //       // Video stopped
        //     });
        // }, 5000); // Stop after 5 seconds

    }, []);

    return (
        <div id="video-player"></div>
    );
}

export default YoutubePlayerComponent;
