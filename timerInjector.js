// I'm sick of doing this manually T-T

function getTimerHtml(flexJustify = "start") {
  return `
	          <div
            class="w-full  md:w-7/10 lg:4/5 xl:w-4/5 xl:mt-5 flex flex-col gap-[2vw] justify-center lg:flex-row lg:justify-${flexJustify} m-auto my-5 lg:m-0 timer-container">
            <div class="flex items-center justify-center">
              <div class="flex flex-col justify-center items-center">
                <div class="flex w-3/10 ">
                  <div
                    class="glass glass-border flex justify-center items-center rounded-md w-8 h-8 sm:w-10 sm:h-10 md:w-[50px] md:h-[50px] lg:w-14 lg:h-14 m-1">
                    <h1 id="day1"
                      class="font-[ProgressExtended-Bold] text-white text-center text-md md:text-2xl lg:text-4xl">
                      0
                    </h1>
                  </div>
                  <div
                    class="glass glass-border flex justify-center items-center rounded-md w-8 h-8 sm:w-10 sm:h-10 md:w-[50px] md:h-[50px] lg:w-14 lg:h-14 m-1">
                    <h1 id="day2"
                      class="font-[ProgressExtended-Bold] text-white text-center text-md md:text-2xl lg:text-4xl">
                      0
                    </h1>
                  </div>
                </div>
                <p class="text-white font-[ProgressExtended-Bold]">DAYS</p>
              </div>
              <div class="inline-block w-[2vw] h-1"></div>
              <div class="flex flex-col justify-center items-center">
                <div class="flex w-3/10 ">
                  <div
                    class="glass glass-border flex justify-center items-center rounded-md w-8 h-8 sm:w-10 sm:h-10 md:w-[50px] md:h-[50px] lg:w-14 lg:h-14 m-1">
                    <h1 id="hour1"
                      class="font-[ProgressExtended-Bold] text-white text-center text-md md:text-2xl lg:text-4xl">
                      0
                    </h1>
                  </div>
                  <div
                    class="glass glass-border flex justify-center items-center rounded-md w-8 h-8 sm:w-10 sm:h-10 md:w-[50px] md:h-[50px] lg:w-14 lg:h-14 m-1">
                    <h1 id="hour2"
                      class="font-[ProgressExtended-Bold] text-white text-center text-md md:text-2xl lg:text-4xl">
                      0
                    </h1>
                  </div>
                </div>
                <p class="text-white font-[ProgressExtended-Bold]">HOUR</p>
              </div>
            </div>
            <div class="flex items-center justify-center">
              <div class="flex flex-col justify-center items-center">
                <div class="flex w-3/10 ">
                  <div
                    class="glass glass-border flex justify-center items-center rounded-md w-8 h-8 sm:w-10 sm:h-10 md:w-[50px] md:h-[50px] lg:w-14 lg:h-14 m-1">
                    <h1 id="min1"
                      class="font-[ProgressExtended-Bold] text-white text-center text-md md:text-2xl lg:text-4xl">
                      0
                    </h1>
                  </div>
                  <div
                    class="glass glass-border flex justify-center items-center rounded-md w-8 h-8 sm:w-10 sm:h-10 md:w-[50px] md:h-[50px] lg:w-14 lg:h-14 m-1">
                    <h1 id="min2"
                      class="font-[ProgressExtended-Bold] text-white text-center text-md md:text-2xl lg:text-4xl">
                      0
                    </h1>
                  </div>
                </div>
                <p class="text-white font-[ProgressExtended-Bold]">MINS</p>
              </div>
              <div class="inline-block w-[2vw] h-1"></div>
              <div class="flex flex-col justify-center items-center">
                <div class="flex w-3/10 ">
                  <div
                    class="glass glass-border flex justify-center items-center rounded-md w-8 h-8 sm:w-10 sm:h-10 md:w-[50px] md:h-[50px] lg:w-14 lg:h-14 m-1">
                    <h1 id="sec1"
                      class="font-[ProgressExtended-Bold] text-white text-center text-md md:text-2xl lg:text-4xl">
                      0
                    </h1>
                  </div>
                  <div
                    class="glass glass-border flex justify-center items-center rounded-md w-8 h-8 sm:w-10 sm:h-10 md:w-[50px] md:h-[50px] lg:w-14 lg:h-14 m-1">
                    <h1 id="sec2"
                      class="font-[ProgressExtended-Bold] text-white text-center text-md md:text-2xl lg:text-4xl">
                      0
                    </h1>
                  </div>
                </div>
                <p class="text-white font-[ProgressExtended-Bold]">SEC</p>
              </div>
            </div>
          </div>

	`;
}

function setTimer(targetTimeUTC) {
  const classes = [
    "day1",
    "day2",
    "hour1",
    "hour2",
    "min1",
    "min2",
    "sec1",
    "sec2",
  ];
  const elements = classes.map((c) => document.getElementById(c));

  const timezoneOffset = 7 * 60 * 60; // Jakarta time offset: UTC+7
  const unixTargetTime = Math.floor(targetTimeUTC / 1000 - timezoneOffset);

  if (
    elements.every((e) => e !== undefined) &&
    unixTargetTime > Date.now() / 1000
  ) {
    setInterval(() => {
      const timeLeft = unixTargetTime - Math.floor(Date.now() / 1000);

      const days = Math.floor(timeLeft / 86400);
      const hours = Math.floor((timeLeft / 3600) % 24);
      const minutes = Math.floor((timeLeft / 60) % 60);
      const seconds = Math.floor(timeLeft % 60);

      elements.forEach((e, i) => {
        e.innerHTML = String(
          i % 2 === 0
            ? Math.floor(timeLeft / Math.pow(10, i / 2)) % 10
            : Math.floor(timeLeft / Math.pow(10, (i - 1) / 2)) % 10
        ).padStart(2, "0");
      });

      const values = [
        String(days).padStart(2, "0").charAt(0),
        String(days).padStart(2, "0").charAt(1),
        String(hours).padStart(2, "0").charAt(0),
        String(hours).padStart(2, "0").charAt(1),
        String(minutes).padStart(2, "0").charAt(0),
        String(minutes).padStart(2, "0").charAt(1),
        String(seconds).padStart(2, "0").charAt(0),
        String(seconds).padStart(2, "0").charAt(1),
      ];

      elements.forEach((e, i) => {
        e.innerHTML = values[i];
      });
    }, 1000);
  }
}

function createElementFromHTML(htmlString) {
  var div = document.createElement("div");
  div.innerHTML = htmlString.trim();

  return div.firstChild;
}

/**
 * @brief Add timer component right next to the .timer-container class
 *
 * @param {number} targetTimeUTC - target time in UTC
 * @param {string} flexJustify - flex justify to the timer-container
 * @returns {void}
 * @example
 * addTimerInjector(DATES.endRegist, "center");
 * addTimerInjector(DATES.endEvent, "end");
 * addTimerInjector(DATES.endEvent);
 *
 */
function addTimerInjector(targetTimeUTC, flexJustify = "start") {
  document.addEventListener("DOMContentLoaded", function () {
    const timerContainer =
      document.getElementsByClassName("timer-container")[0];

    const timer = createElementFromHTML(getTimerHtml(flexJustify));
    timerContainer.insertAdjacentElement("afterend", timer);

    setTimer(targetTimeUTC);
  });
}

const DATES = {
  endRegist: Date.UTC(2023, 5, 26, 0),
  endEvent: Date.UTC(2023, 6, 28, 0),
};
