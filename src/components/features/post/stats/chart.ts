export const options = {
  // 옵션 (1) : 반응형 여부
  // responsive: true,
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

// **** 차트에 들어갈 데이터를 담고 있는 객체
// export const data = {
//   // labels가 y축 index
//   labels: ['0', '5', '9', '13', '17', '21', '25'],
//   // 데이터 관련 정보(값, 컬러, 라벨 등)을 담은 dataset 객체들을 가지고 있는 배열
//   datasets: [
//     {
//       label: '일일 방문자수',
//       borderColor: 'rgb(53, 162, 235)',
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//       borderWidth: 1,
//       data: [128, 119, 13, 15, 12, 13, 8],
//       // data: newArr,
//     },
//   ],
// }
