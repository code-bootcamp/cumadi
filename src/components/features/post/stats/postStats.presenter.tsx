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
import { data, options } from './chart'

// ** cf. https://velog.io/@treejy/React%EC%97%90%EC%84%9C-Chart.js-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-with-TypeScript#%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default function PostStatsUI() {
  return (
    <S.Container>
      <S.TopBox>
        <S.VisitorNumber>전체 방문자 수: 15</S.VisitorNumber>
        <S.VisitorNumber>일일 방문자 수: 10</S.VisitorNumber>
      </S.TopBox>
      {/* 메인 통계 보여줄 곳 */}
      <S.ChartWrapper>
        <Line options={options} data={data} />
      </S.ChartWrapper>
    </S.Container>
  )
}
