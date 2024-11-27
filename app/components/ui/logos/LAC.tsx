export default function LAC({
  width = 432,
  height = 376,
  opacity,
}: {
  width?: number;
  height?: number;
  opacity?: string | number | undefined;
} = {}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 432 376"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity={opacity}
        d="M-8 156C-8 34.8989 90.899 -64 212 -64C333.101 -64 432 34.8989 432 156C432 277.101 333.101 376 212 376C90.899 374.991 -8 277.101 -8 156Z"
        fill="white"
      />
      <path
        opacity={opacity}
        d="M212 -45C101.904 -45 11 45.6783 11 155.5C11 265.321 101.904 356 212 356C322.095 356 413 265.321 413 155.5C413 44.6708 322.095 -45 212 -45ZM358.457 44.6709C380.678 73.8895 394.819 110.161 395.829 147.44H320.075C321.085 109.153 335.226 73.8895 358.457 44.6709ZM65.5424 44.6709C87.7635 73.8895 101.904 110.161 102.914 147.44H27.1606C30.1907 109.153 43.3212 73.8895 65.5424 44.6709ZM65.5424 266.329C43.3212 237.11 29.1804 200.839 28.1704 163.56H103.924C101.904 201.847 88.7735 237.11 65.5424 266.329ZM221.09 338.872V286.48H202.91V338.872C155.437 335.849 109.985 316.706 77.6631 280.435C104.934 247.186 120.085 206.884 122.106 163.56V145.424C120.085 102.1 104.934 61.799 77.6631 28.5503C109.985 -6.71355 154.427 -26.8643 202.91 -29.8869V22.5051H221.09V-29.8869C268.563 -26.8643 314.015 -7.72109 346.336 28.5503C319.065 61.799 303.915 102.1 301.894 145.424V163.56C303.915 206.884 319.065 247.186 346.336 280.435C313.005 315.699 268.563 335.849 221.09 338.872ZM358.457 266.329C336.236 237.11 322.095 200.839 321.085 163.56H396.839C393.809 201.847 380.678 237.11 358.457 266.329Z"
        fill="#061922"
      />
      <path
        opacity={opacity}
        d="M167 71V238H256V215.867H191V71H167Z"
        fill="#D91A32"
      />
      <path
        opacity={opacity}
        d="M288 127.117V58.2018C288 47.0538 283.947 43 273.814 43H150.187C139.04 43 136 47.0538 136 58.2018V253.798C136 264.946 140.054 269 150.187 269H272.8C283.947 269 286.987 264.946 286.987 253.798V184.884H262.667V247.717H160.32V65.2959H263.68V128.13L288 127.117Z"
        fill="#00428B"
      />
      <path
        opacity={opacity}
        d="M256 210V71H198L197 210H220V166.688H232V210H256ZM233 142.514H221V93.1595H233V142.514Z"
        fill="#D91A32"
      />
    </svg>
  );
}
