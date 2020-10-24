import * as React from "react";

function SvgTwitch(props) {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fab"
      data-icon="twitch"
      className="twitch_svg__svg-inline--fa twitch_svg__fa-twitch twitch_svg__fa-w-16"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M391.17 103.47h-38.63v109.7h38.63zM285 103h-38.63v109.75H285zM120.83 0L24.31 91.42v329.16h115.83V512l96.53-91.42h77.25L487.69 256V0zm328.24 237.75l-77.22 73.12h-77.24l-67.6 64v-64h-86.87V36.58h308.93z"
      />
    </svg>
  );
}

const MemoSvgTwitch = React.memo(SvgTwitch);
export default MemoSvgTwitch;
