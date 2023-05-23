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
import 'chartjs-adapter-date-fns'

import * as S from './postStats.styles'
import { IPostStatsUIProps } from './postStats.types'
import { getDate, getToday } from '@/common/libraries/utils'
import { options } from './chart'

// ** cf. https://velog.io/@treejy/React%EC%97%90%EC%84%9C-Chart.js-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-with-TypeScript#%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const ObjPostView: any = {}

export default function PostStatsUI({ stateData }: IPostStatsUIProps) {
  const StateData = stateData?.fetchPostViewOfMine

  // **** 데이터에서 전체-일일 방문자 수를 계산해서 보여줌
  let totalNumberViewsOfPost = 0
  let dayNumberViewsOfPost = 0
  StateData?.map(day => (totalNumberViewsOfPost += day.view))
  StateData?.map(day => {
    if (getDate(day.date) === getToday()) dayNumberViewsOfPost += day.view
  })

  // **** 키(날짜) 값(일일조회수)으로 객체 만들기
  if (StateData !== undefined) {
    let keys = StateData?.map(item => getDate(item.date))
    let values = StateData?.map(item => item.view)

    if (keys && values) keys?.forEach((key, i) => (ObjPostView[key] = values[i]))
  }

  return (
    <S.Container>
      <S.TopBox>
        <S.VisitorNumber>전체 방문자 수: {totalNumberViewsOfPost}</S.VisitorNumber>
        <S.VisitorNumber>일일 방문자 수: {dayNumberViewsOfPost}</S.VisitorNumber>
      </S.TopBox>
      {/* 메인 통계 보여줄 곳 */}
      <S.ChartWrapper>
        <Line options={options} data={data} />
      </S.ChartWrapper>
    </S.Container>
  )
}

// **** 차트에 들어갈 데이터를 담고 있는 객체
const data: any = {
  // 데이터 관련 정보(값, 컬러, 라벨 등)을 담은 dataset 객체들을 가지고 있는 배열
  datasets: [
    {
      type: 'line',
      label: '일일 방문자수',
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      borderWidth: 1,
      data: ObjPostView,
    },
  ],
}
