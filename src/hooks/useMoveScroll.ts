import { useRef } from "react";

export default function useMoveScroll() {
  const element = useRef<HTMLDivElement>(null);
  const onMovetoElement = () => {
    element.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return { element, onMovetoElement };
}
// * behavior: 애니메이션 효과
// *block: 클릭할 시 어디에 사용자 스크롤을 위치시킬 건지 정한다.
// start(기본값), center,  end, nearest 중 선택

//사용 X
