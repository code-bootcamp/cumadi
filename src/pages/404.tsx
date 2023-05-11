import Lottie from 'react-lottie-player'

import lottieJson from '../../public/animation-404.json'

export default function PageNotFound() {
  return (
    <>
      <Lottie loop animationData={lottieJson} play style={{ width: 350, height: 550 }} />
      <p style={{ textAlign: 'center', fontSize: '1.5rem' }}>
        찾을 수 없는 페이지입니다. <br />
        {'요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하셨습니다. :)'}
      </p>
    </>
  )
}
