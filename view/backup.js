("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
// MIT License
// Copyright (c) 2023 Mågnëum </>
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
import * as ytdlp from "yt-dlp";
/**
 * @param {url} url -> "youtube-video-link"
 * @param {string} sort -> "medium" || "low" || "ultralow"
 */

// Promise method
ytdlp
  .AudioData_CustomQuality({
    url: "https://youtu.be/TpdapO9QGRo", // required
    sort: "medium", // required
  })
  .then((data) => console.log("AudioData_CustomQuality: ", data))
  .catch((e) => console.log(e));

// async/await method
(async () => {
  const data = await ytdlp
    .AudioData_CustomQuality({
      url: "https://youtu.be/TpdapO9QGRo", // required
      sort: "medium", // required
    })
    .catch((e) => console.log(e));
  console.log("AudioData_CustomQuality: ", data);
})();
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
import * as ytdlp from "yt-dlp";
/**
 * @param {url} url -> "youtube-video-link"
 * @param {string} quality -> "best-possible" || "medium-possible" || "lowest-possible"
 */

// Promise method
ytdlp
  .AudioData_SortedAuto({
    url: "https://youtu.be/TpdapO9QGRo", // required
    quality: "best-possible", // required
  })
  .then((data) => console.log("AudioData_SortedAuto: ", data))
  .catch((e) => console.log(e));

// async/await method
(async () => {
  const data = await ytdlp
    .AudioData_SortedAuto({
      url: "https://youtu.be/TpdapO9QGRo", // required
      quality: "best-possible", // required
    })
    .catch((e) => console.log(e));
  console.log("AudioData_SortedAuto: ", data);
})();
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
import * as ytdlp from "yt-dlp";

/**
 * @param {url} url -> "youtube-video-link"
 * @param {string} resolution -> "2160p" || "1440p" || "1080p" || "720p" || "480p" || "360p" || "240p" || "144p"
 */

// Promise method
ytdlp
  .VideoData_CustomResolution({
    url: "https://youtu.be/TpdapO9QGRo", // required
    resolution: "2160p", // required
  })
  .then((data) => console.log("VideoData_CustomResolution: ", data))
  .catch((e) => console.log(e));

// async/await method
(async () => {
  const data = await ytdlp
    .VideoData_CustomResolution({
      url: "https://youtu.be/TpdapO9QGRo", // required
      resolution: "2160p", // required
    })
    .catch((e) => console.log(e));
  console.log("VideoData_CustomResolution: ", data);
})();
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");

import * as ytdlp from "yt-dlp";
/**
 * @param {url} url -> "youtube-video-link"
 * @param {string} resolution -> "highest" || "medium" || "lowest"
 */

// Promise method
ytdlp
  .VideoData_SortedResolution({
    url: "https://youtu.be/TpdapO9QGRo", // required
    quality: "highest", // required
  })
  .then((data) => console.log("VideoData_SortedResolution: ", data))
  .catch((e) => console.log(e));

// async/await method
(async () => {
  const data = await ytdlp
    .VideoData_SortedResolution({
      url: "https://youtu.be/TpdapO9QGRo", // required
      quality: "highest", // required
    })
    .catch((e) => console.log(e));
  console.log("VideoData_SortedResolution: ", data);
})();
// ☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱ [ DOWNLOADER ] ☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱

import * as ytdlp from "yt-dlp";
/**
 * @param {url} url -> "youtube-video-link"
 * @param {string} sort -> "medium" || "low" || "ultralow"
 * @param {download-folder-name} @arg {optional} -> auto created if not exists or specified
 */

// Promise method
ytdlp
  .DownloadAudio_CustomQuality({
    url: "https://youtu.be/TpdapO9QGRo", // required
    title: "song-title", // optional
    sort: "medium", // required
    path: "mågneum", // optional
  })
  .then((data) =>
    console.log(chalk.bgGreen("DownloadAudio_CustomQuality:"), data)
  )
  .catch((e) => console.log(chalk.bgRed("ERROR: "), chalk.gray(e.message)));

// async/await method
(async () => {
  const data = await ytdlp
    .DownloadAudio_CustomQuality({
      url: "https://youtu.be/TpdapO9QGRo", // required
      title: "song-title", // optional
      sort: "medium", // required
      path: "mågneum", //optional
    })
    .catch((e) => console.log(chalk.bgRed("ERROR: "), chalk.gray(e.message)));
  console.log(chalk.bgGreen("DownloadAudio_CustomQuality:"), data);
})();
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");

import * as ytdlp from "yt-dlp";
/**
 * @param {url} url -> "youtube-video-link"
 * @param {string} sort -> "best-possible" || "medium-possible" || "lowest-possible"
 * @param {download-folder-name} @arg {optional} -> auto created if not exists or specified
 */

// Promise method
ytdlp
  .DownloadAudio_SortedQuality({
    url: "https://youtu.be/TpdapO9QGRo", // required
    title: "song-title", // optional
    sort: "medium", // required
    path: "mågneum", // optional
  })
  .then((data) =>
    console.log(chalk.bgGreen("DownloadAudio_SortedQuality:"), data)
  )
  .catch((e) => console.log(chalk.bgRed("ERROR: "), chalk.gray(e.message)));

// async/await method
(async () => {
  const data = await ytdlp
    .DownloadAudio_SortedQuality({
      url: "https://youtu.be/VCiDeT16t6U",
      sort: "medium",
      path: "mågneum",
    })
    .catch((e) => console.log(chalk.bgRed("ERROR: "), chalk.gray(e.message)));
  console.log(chalk.bgGreen("DownloadAudio_SortedQuality:"), data);
})();
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");