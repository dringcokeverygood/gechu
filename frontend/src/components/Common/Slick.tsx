import Slider from 'react-slick';
import './Slick.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type SliderProps = {
	/** 슬라이더 아이템 요소 */
	children: React.ReactNode;
};

function Slick({ children }: SliderProps) {
	const settings = {
		slide: 'div', //슬라이드 되어야 할 태그 ex) div, li
		infinite: true, //무한 반복 옵션
		slidesToShow: 4, // 한 화면에 보여질 컨텐츠 개수
		slidesToScroll: 4, //스크롤 한번에 움직일 컨텐츠 개수
		speed: 1300, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
		arrows: true, // 옆으로 이동하는 화살표 표시 여부
		dots: true, // 스크롤바 아래 점으로 페이지네이션 여부
		autoplay: true, // 자동 스크롤 사용 여부
		autoplaySpeed: 2600, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
		pauseOnHover: true, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
		draggable: false,
		// prevArrow: "<button type='button' class='slick-prev'>Previous</button>", // 이전 화살표 모양 설정
		// nextArrow: "<button type='button' class='slick-next'>Next</button>", // 다음 화살표 모양 설정

		appendDots: (dots: React.ReactNode) => (
			<div
				style={{
					width: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<ul className="mt-3"> {dots} </ul>
			</div>
		),
		dotsClass: 'dots_custom', //아래 나오는 페이지네이션(점) css class 지정

		// 반응형
		responsive: [
			{
				breakpoint: 720,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
		],
	};
	return (
		<div className="w-[600px] sm:w-[600px] md:w-[1200px]">
			<Slider {...settings}>{children}</Slider>
		</div>
	);
}

export default Slick;
