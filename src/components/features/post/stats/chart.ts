export const options = {
  // 옵션 (1) : 반응형 여부
  responsive: true,
  // 옵션 (2) : 차트 데이터 각각의 지점에 커서를 올리면 뜨는 것
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  // 옵션 (3) : 척도
  scales: {
    // x축 그리드 색상
    x: {
      grid: {
        display: false,
      },
    },
    // y축 그리드 색상
    y: {
      grid: {
        color: '#E3E3E3',
      },
    },
  },
}
