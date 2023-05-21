import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

import * as S from './postStats.styles'
import { IPostStatsUIProps } from './postStats.types'
import { getDate, getToday } from '@/common/libraries/utils'
import { options } from './chart'

// ** cf. https://velog.io/@treejy/React%EC%97%90%EC%84%9C-Chart.js-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-with-TypeScript#%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const newArr: number[] = []

const data = {
  // labels가 y축 index
  // prettier-ignore
  labels: [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 
    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', 
    '21', '22', '23', '24', '26', '27', '28', '29', '30', '31',
  ],
  // 데이터 관련 정보(값, 컬러, 라벨 등)을 담은 dataset 객체들을 가지고 있는 배열
  datasets: [
    {
      label: '일일 방문자수',
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      borderWidth: 1,
      // data: [128, 119, 13, 15, 12, 13, 8],
      data: newArr,
    },
  ],
}

export default function PostStatsUI({ stateData }: IPostStatsUIProps) {
  const StateData = stateData?.fetchPostViewOfMine

  let sumView = 0
  let todayView = 0

  // =============================================================

  // console.log('StateData==========')
  // console.log(StateData)

  // const sortStaetArr = [...StateData]
  // sortStaetArr.sort((a, b) => new Date(a.date) - new Date(b.date))
  // console.log('sortStaetArr================================')
  // console.log(sortStaetArr)

  // =============================================================
  StateData?.map(day => (sumView += day.view))
  StateData?.map(day => {
    if (getDate(day.date) === getToday()) todayView += day.view
  })
  StateData?.map(day => newArr.push(day.view))
  // console.log(newArr)

  return (
    <S.Container>
      <S.TopBox>
        <S.VisitorNumber>전체 방문자 수: {sumView}</S.VisitorNumber>
        <S.VisitorNumber>일일 방문자 수: {todayView}</S.VisitorNumber>
      </S.TopBox>
      {/* 메인 통계 보여줄 곳 */}
      <S.ChartWrapper>
        <Line options={options} data={data} />
      </S.ChartWrapper>
    </S.Container>
  )
}
