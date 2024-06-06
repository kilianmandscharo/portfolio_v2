const LINE_WIDTH = 200;
const LINE_HEIGHT = 10;
const LINE_STROKE_WIDTH = 10;
const LINE_OFFSET_Y = LINE_HEIGHT / 2;
const CONTAINER_PADDING_X = 10;
const LINE_OFFSET_X = CONTAINER_PADDING_X;
const CONTAINER_WIDTH = LINE_WIDTH + 2 * CONTAINER_PADDING_X;
const CONTAINER_HEIGHT = LINE_HEIGHT;

interface Props {
  progress: number;
}

export default function ProgressBar({ progress }: Props) {
  return (
    <svg
      width={CONTAINER_WIDTH}
      height={CONTAINER_HEIGHT}
      viewBox={`0 0 ${CONTAINER_WIDTH} ${CONTAINER_HEIGHT}`}
    >
      <line
        x1={LINE_OFFSET_X}
        y1={LINE_OFFSET_Y}
        x2={LINE_OFFSET_X + LINE_WIDTH}
        y2={LINE_OFFSET_Y}
        stroke="green"
        strokeWidth={LINE_STROKE_WIDTH}
        strokeLinecap="round"
      ></line>
      <line
        x1={LINE_OFFSET_X}
        y1={LINE_OFFSET_Y}
        x2={LINE_OFFSET_X + LINE_WIDTH * progress}
        y2={LINE_OFFSET_Y}
        stroke="yellow"
        strokeWidth={LINE_STROKE_WIDTH}
        strokeLinecap="round"
      ></line>
    </svg>
  );
}
