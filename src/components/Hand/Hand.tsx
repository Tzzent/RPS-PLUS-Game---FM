import './Hand.scss';

interface Iprops {
  customClass: string | null,
  image: string,
  cursor: string | undefined,
  width: string | undefined,
  borderColor: string,
  edgeThickness: string,
}

export default function Hand({ customClass, cursor, image, width, borderColor, edgeThickness }: Iprops) {
  return (
    <div
      className={`hand__container ${customClass}`}
      style={{ cursor: cursor, width: width, height: width, border: `${edgeThickness} solid ${borderColor}`, backgroundImage: `url(${image})`, }}
    >
    </div>
  )
}
