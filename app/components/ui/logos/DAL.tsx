export default function DAL({
  width = 565,
  height = 567,
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
      viewBox="0 0 565 567"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity={opacity}>
        <path
          d="M19.3926 382.681C14.2213 376.217 0 350.36 0 308.989C0 293.475 2.58576 275.376 7.75714 255.983L10.343 246.933L11.6355 248.226C11.6355 246.933 12.9284 245.64 12.9284 244.347C15.5141 239.176 18.0997 231.419 18.0997 230.126C18.0997 228.833 20.6856 222.369 21.9785 215.905C21.9785 214.612 23.2714 213.319 23.2714 212.026V210.733C23.2714 206.855 24.564 204.269 25.8569 200.391C25.8569 197.805 25.8569 196.512 27.1498 195.219V193.926V192.634V191.341C33.614 162.898 47.8353 146.091 54.2996 138.334C55.5924 137.041 59.4708 133.163 64.6422 130.577C67.2278 127.991 73.6922 117.649 80.1564 111.184C82.7421 108.599 85.3278 106.013 86.6206 104.72C87.9135 102.134 90.4992 96.9632 94.3778 90.499C100.842 82.742 111.184 73.692 127.991 67.2278C140.92 59.4707 153.849 51.7137 165.484 45.2495C168.07 42.6638 178.412 32.3211 192.634 23.2712C209.44 11.6356 235.297 0 265.033 0C266.326 0 267.619 0 268.912 0H279.254L265.033 18.0997C271.497 18.0997 280.547 16.807 287.011 16.807C324.504 16.807 361.996 24.5639 394.317 37.4924C395.61 38.7852 398.196 40.0781 399.488 41.3709C402.074 42.6638 404.66 43.9565 404.66 46.5422C407.246 46.5422 411.124 47.8351 417.589 50.4208C453.788 69.8134 484.816 95.6703 509.38 127.991C509.38 129.284 510.673 130.577 511.966 134.456L513.259 135.749C514.552 137.041 515.844 138.334 518.43 139.627C548.165 182.291 564.973 236.59 564.973 292.182C564.973 345.189 549.458 395.61 522.308 438.274L521.016 439.567L519.723 440.859C518.43 442.152 517.137 442.152 515.844 443.445C515.844 443.445 515.844 444.738 515.844 446.031C515.844 448.617 514.552 449.909 513.259 451.202C462.838 521.016 378.803 566.265 284.425 566.265C161.605 568.851 55.5922 491.28 19.3926 382.681Z"
          fill="white"
        />
        <path
          d="M513.26 146.09C511.968 144.797 508.089 142.212 508.089 142.212C506.796 142.212 506.796 139.626 506.796 139.626C505.503 134.454 504.21 133.162 504.21 133.162C479.646 102.133 449.911 76.2765 415.004 58.1767C408.54 55.591 402.076 54.2981 402.076 54.2981C400.783 54.2981 399.49 53.0052 399.49 53.0052C396.904 49.1267 391.733 47.8338 389.148 46.541C355.534 32.3197 321.92 25.8556 283.134 25.8556C271.499 25.8556 259.863 27.1484 248.228 28.4413L263.742 9.04863C206.856 6.46295 164.193 51.7125 164.193 51.7125C149.972 58.1767 137.043 65.9338 125.408 74.9837C94.3794 86.6193 87.9153 111.183 87.9153 111.183C80.1582 117.647 64.6439 137.04 64.6439 137.04C59.4725 139.626 55.5941 143.504 54.3013 144.797C47.837 151.261 34.9086 169.361 28.4444 195.218C28.4444 195.218 28.4443 196.511 27.1515 196.511C27.1515 197.804 27.1514 200.389 25.8586 201.682C24.5657 205.561 24.5656 208.146 24.5656 212.025C24.5656 213.318 24.5656 213.318 24.5656 213.318C23.2728 213.318 19.3943 231.418 19.3943 231.418C18.1015 234.003 10.3447 257.274 10.3447 257.274C-10.3408 329.674 16.8088 372.338 21.9802 378.802C58.1798 484.815 161.607 559.8 281.842 559.8C374.926 559.8 456.375 515.843 505.503 447.322C506.796 444.737 508.089 440.858 508.089 440.858C508.089 439.565 509.382 438.272 509.382 438.272C513.26 435.687 514.553 434.394 514.553 434.394C541.703 394.316 555.924 343.895 555.924 292.181C559.803 240.467 541.703 188.754 513.26 146.09Z"
          fill="#061922"
        />
        <path
          d="M169.362 94.3779C170.655 93.0851 170.655 93.0849 171.948 91.7921C173.24 90.4992 173.24 90.4994 173.24 90.4994C173.24 76.2781 177.119 64.6425 177.119 64.6425C202.976 28.4429 244.347 20.6857 244.347 20.6857C249.518 19.3929 246.932 21.9786 246.932 21.9786C221.076 51.714 222.368 74.9853 222.368 74.9853L248.225 165.484C248.225 165.484 227.54 159.02 212.025 127.992C205.561 191.341 263.739 241.762 263.739 241.762C266.325 244.348 262.447 241.762 262.447 241.762C246.933 234.005 230.125 217.198 226.247 214.612C227.54 218.491 257.275 364.582 257.275 364.582C257.275 365.875 257.275 367.168 258.568 368.461L268.911 342.604L276.668 416.296C240.468 452.495 199.097 438.274 196.512 436.981C197.804 438.274 199.097 439.567 199.097 439.567C199.097 439.567 232.711 504.209 365.874 496.452C365.874 496.452 369.752 496.452 368.46 496.452C368.46 496.452 368.459 496.452 367.167 496.452C364.581 497.745 360.702 497.745 360.702 497.745C200.39 540.409 116.355 403.367 113.77 396.903C112.477 395.61 104.72 383.975 99.5483 372.339V371.046C99.5483 371.046 116.355 389.146 165.483 394.317C129.284 352.946 112.477 321.918 109.891 316.747C109.891 316.747 104.72 310.283 99.5483 290.89C99.5483 290.89 99.5484 289.597 100.841 290.89C103.427 294.769 116.355 314.161 130.576 316.747C117.648 296.061 109.891 263.74 108.598 259.862C125.405 285.719 156.433 285.719 156.433 285.719C106.012 235.298 117.648 179.706 137.041 139.627C146.091 121.528 161.605 104.721 169.362 94.3779Z"
          fill="white"
        />
        <path
          d="M320.626 429.223L288.305 464.129L328.383 433.101L308.99 359.409L316.747 270.203L301.233 355.531L320.626 429.223Z"
          fill="#BAC3C8"
        />
        <path
          d="M328.381 213.32C324.503 228.834 320.624 244.348 312.867 249.519C314.16 249.519 314.16 248.226 315.453 248.226C318.038 246.933 320.624 244.348 324.503 241.762C330.967 235.298 338.724 223.662 338.724 205.562C338.724 197.805 337.431 188.756 333.553 178.413C332.26 186.17 330.967 199.098 328.381 213.32Z"
          fill="#BAC3C8"
        />
        <path
          d="M328.381 102.134C340.017 85.3269 359.41 82.7412 365.874 82.7412C359.41 80.1555 351.653 80.1555 346.482 80.1555C333.553 80.1555 324.503 84.034 320.625 85.3268C320.625 85.3268 319.332 85.3269 319.332 86.6197C323.21 89.2054 327.089 98.2553 328.381 102.134Z"
          fill="#BAC3C8"
        />
        <path
          d="M314.161 137.04C314.161 139.626 314.161 140.919 314.161 142.212C314.161 178.411 303.819 221.075 299.94 236.589C315.454 202.975 318.04 171.947 318.04 148.676C318.04 134.455 316.747 122.819 315.454 115.062C314.161 109.89 314.161 108.598 312.868 106.012C308.99 134.454 297.354 146.09 297.354 147.383C279.254 113.769 253.398 94.3763 241.762 86.6193C239.176 85.3264 237.884 84.0336 236.591 82.7407C271.498 156.433 280.547 212.025 283.133 232.711C283.133 230.125 283.133 227.539 283.133 226.246C283.133 191.34 274.083 152.554 270.204 134.454C268.912 129.283 267.619 125.405 267.619 125.405C267.619 125.405 267.619 125.404 267.619 124.112C267.619 124.112 267.619 124.112 268.912 124.112C284.426 135.747 294.769 169.361 297.354 175.825C299.94 171.947 303.819 162.897 306.404 155.14C311.576 146.09 312.869 138.333 314.161 137.04C312.869 138.333 312.869 137.04 314.161 137.04Z"
          fill="#BAC3C8"
        />
        <path
          d="M29.7357 289.596C29.7357 325.795 34.9069 360.702 65.9351 407.244C94.3777 466.715 146.092 499.036 171.948 511.965C179.705 517.136 186.169 517.136 186.169 517.136C223.662 535.236 262.447 542.993 293.476 542.993C360.703 542.993 412.417 513.257 434.395 499.036C440.86 493.865 446.031 491.279 446.031 491.279C447.324 489.986 448.617 488.694 449.91 488.694C449.91 488.694 448.617 488.693 448.617 489.986C447.324 491.279 444.738 492.572 444.738 492.572C391.731 524.893 342.603 532.65 302.525 532.65C240.469 532.65 199.098 508.086 199.098 508.086C67.2278 438.273 64.6422 318.038 64.6422 318.038C64.6422 318.038 64.6422 318.038 64.6422 316.745C64.6422 316.745 64.6423 316.745 65.9351 316.745C82.7421 350.359 103.428 360.702 112.478 364.581C113.77 364.581 115.063 365.873 116.356 365.873C78.8635 318.038 67.2281 276.667 67.2281 245.639C67.2281 205.561 86.6207 180.997 86.6207 180.997C86.6207 180.997 86.6208 180.997 87.9136 180.997C87.9136 180.997 87.9136 180.997 87.9136 182.29C85.3279 197.804 84.0349 209.439 84.0349 219.782C84.0349 246.932 90.4992 263.739 93.0849 270.203C91.7921 259.86 91.792 250.81 91.792 241.76C91.792 149.969 144.799 94.3763 156.434 82.7407C148.677 86.6193 137.041 95.6691 129.284 104.719C120.234 113.769 113.77 122.819 113.77 122.819C113.77 122.819 113.77 122.819 112.478 122.819C112.478 116.355 117.649 107.305 118.942 102.133C112.478 108.598 106.013 117.647 102.135 127.99C96.9632 137.04 95.6704 144.797 95.6704 144.797C73.692 169.361 63.3495 193.925 59.4709 205.561C56.8852 209.439 56.8851 210.732 56.8851 210.732C56.8851 213.318 55.5926 214.611 55.5926 214.611C55.5926 214.611 55.5925 214.611 54.2996 214.611C54.2996 214.611 54.2996 214.611 53.0067 214.611C53.0067 214.611 53.0067 214.611 53.0067 213.318C53.0067 212.025 53.0067 210.732 53.0067 210.732C53.0067 193.925 60.7636 174.533 63.3493 166.776C42.6638 188.754 37.4924 217.196 37.4924 241.76C37.4924 253.396 38.7854 263.739 40.0783 270.203C41.3711 276.667 42.6641 281.839 42.6641 281.839C42.6641 296.06 45.2497 312.867 47.8354 327.088C50.4211 341.309 53.0067 351.652 53.0067 351.652C54.2996 354.238 54.2996 355.531 54.2996 356.823C54.2996 356.823 54.2996 356.823 53.0067 356.823C53.0067 356.823 53.0066 356.823 51.7138 356.823C51.7138 356.823 51.7137 355.531 50.4209 355.531C50.4209 354.238 49.1283 352.945 49.1283 352.945C33.6142 330.967 27.1498 296.06 25.8569 285.717C29.7355 288.303 29.7357 289.596 29.7357 289.596Z"
          fill="#BAC3C8"
        />
        <path
          d="M341.31 118.942C347.774 100.842 377.51 84.0353 383.974 82.7425C368.46 74.9854 355.531 72.3997 345.189 72.3997C336.139 72.3997 329.674 73.6927 324.503 74.9855C319.332 76.2784 316.746 77.5712 316.746 77.5712C311.575 71.107 303.818 63.3498 298.646 59.4712C293.475 54.2999 289.597 51.7143 288.304 51.7143C287.011 51.7143 287.011 50.4214 287.011 50.4214V49.1287C287.011 49.1287 287.011 49.1287 288.304 49.1287C289.597 49.1287 289.596 49.1287 290.889 49.1287C292.182 49.1287 292.182 49.1287 292.182 49.1287C413.709 49.1287 478.351 137.042 478.351 137.042C479.644 138.335 479.644 139.628 479.644 139.628C479.644 142.213 475.766 143.506 474.473 144.799C471.887 146.092 469.302 146.092 469.302 146.092C457.666 147.385 446.03 148.678 435.688 148.678C372.338 147.385 341.31 118.942 341.31 118.942Z"
          fill="#0064B0"
        />
        <path
          d="M299.939 470.594L340.017 435.687L319.332 358.116L324.503 306.402C333.553 310.281 338.724 321.917 340.017 333.552C341.31 341.309 342.603 350.359 342.603 354.238C354.238 329.674 358.117 312.867 358.117 297.353C358.117 276.667 351.652 263.739 347.774 261.153C346.481 259.86 345.188 258.567 345.188 258.567V257.274H346.481C394.317 303.817 404.659 367.166 404.659 412.416C404.659 443.444 399.488 462.837 399.488 462.837C398.195 468.008 393.023 468.008 393.023 468.008C372.338 473.179 356.824 473.179 341.31 473.179C315.453 475.765 299.939 470.594 299.939 470.594Z"
          fill="#0064B0"
        />
        <path
          d="M429.223 465.425C427.93 464.132 427.93 464.132 427.93 461.546C427.93 460.253 427.93 460.253 427.93 458.96C427.93 458.96 429.223 453.789 430.516 442.153C431.809 431.811 433.101 416.297 433.101 399.49C433.101 352.947 424.051 289.598 381.388 239.177L380.095 237.884C380.095 237.884 380.095 237.884 380.095 236.591V235.299C380.095 235.299 381.388 235.299 382.681 235.299C382.681 235.299 394.316 240.47 402.073 250.813C402.073 249.52 402.073 249.52 402.073 248.227C402.073 245.641 400.78 241.763 399.487 236.591C396.902 227.542 394.316 215.906 385.266 205.563C385.266 205.563 383.973 204.27 383.973 202.977C383.973 202.977 383.973 202.977 383.973 201.685C383.973 201.685 383.974 201.685 385.266 201.685L386.559 202.977C389.145 204.27 495.158 267.62 499.036 394.318C499.036 394.318 499.036 395.611 499.036 396.904C499.036 400.782 499.037 405.954 495.158 409.832C493.865 411.125 469.301 448.618 431.808 464.132C433.101 464.132 431.809 464.132 429.223 465.425Z"
          fill="#0064B0"
        />
        <path
          d="M510.672 376.219C510.672 374.926 510.672 373.633 509.379 372.34C505.5 250.813 372.338 173.242 338.724 156.435C333.552 153.85 330.967 152.557 330.967 152.557L328.381 151.264H330.967C347.774 151.264 359.409 161.607 363.288 166.778C363.288 162.9 361.995 160.314 361.995 157.728C360.702 155.143 360.702 152.557 360.702 152.557V151.264H361.995C376.216 156.435 394.316 157.728 411.123 157.728C427.93 157.728 446.03 156.435 457.665 153.85C470.594 152.557 478.351 149.971 478.351 149.971C479.644 149.971 479.644 149.971 480.937 149.971C487.401 149.971 489.986 155.143 491.279 155.143C508.086 173.242 527.479 217.199 531.357 267.62C531.357 274.084 532.65 280.548 532.65 287.013C532.65 332.262 521.014 365.876 515.843 373.633C514.55 374.926 513.258 376.219 513.258 376.219C511.965 378.804 511.965 377.512 510.672 376.219Z"
          fill="#0064B0"
        />
        <path
          d="M227.541 34.906C226.248 34.906 199.098 42.663 191.341 82.7412C193.927 78.8626 201.684 65.9342 209.441 69.8127C209.441 69.8127 209.441 69.8128 209.441 68.52C209.441 65.9343 213.319 53.0058 227.541 34.906Z"
          fill="#061922"
        />
        <path
          d="M206.854 402.074C201.683 390.438 164.19 308.989 164.19 308.989C152.555 312.868 138.333 303.818 138.333 303.818C156.433 351.653 197.804 393.024 206.854 402.074C205.561 402.074 205.561 402.074 206.854 402.074C208.147 403.367 208.147 403.367 206.854 402.074Z"
          fill="#061922"
        />
        <path
          d="M170.654 138.334C137.04 214.611 212.025 245.64 213.318 246.932L208.147 228.833L205.561 218.49C202.975 217.197 201.682 217.197 200.39 215.904C199.097 215.904 199.097 215.904 199.097 214.611C197.804 214.611 197.804 213.319 196.511 213.319C162.897 196.512 166.776 155.141 169.361 140.919L170.654 138.334C170.654 139.626 170.654 139.626 170.654 138.334Z"
          fill="#061922"
        />
        <path
          d="M218.49 352.947L213.319 255.984L245.64 361.997C245.64 364.582 236.59 340.018 218.49 352.947Z"
          fill="#BAC3C8"
        />
        <path
          d="M221.075 78.862L227.54 135.747C227.54 135.747 231.418 151.261 209.44 127.99C224.954 160.311 245.639 165.483 245.639 165.483L221.075 78.862C221.075 77.5691 221.075 77.5691 221.075 78.862Z"
          fill="#BAC3C8"
        />
        <path
          d="M187.461 182.291C184.876 177.119 184.876 173.241 184.876 169.362C184.876 155.141 195.218 147.384 195.218 147.384C195.218 147.384 195.218 138.334 195.218 122.82C187.461 135.748 169.362 162.898 190.047 186.169L188.754 184.877C187.461 184.877 187.461 183.584 187.461 182.291Z"
          fill="#BAC3C8"
        />
        <path
          d="M208.147 193.925C204.268 187.461 195.218 168.068 193.926 147.383C193.926 147.383 183.583 155.14 183.583 169.361C183.583 173.24 184.876 177.118 186.168 182.29C187.461 183.582 187.461 184.875 188.754 186.168L190.047 187.461L191.34 188.754C195.219 192.632 200.39 196.511 210.733 196.511C210.733 197.804 209.44 196.511 208.147 193.925Z"
          fill="#061922"
        />
        <path
          d="M239.175 376.217C243.053 376.217 244.346 380.095 246.932 382.681C249.518 387.852 250.81 393.024 252.103 398.195C253.396 404.659 254.689 412.416 255.982 416.295C255.982 418.88 255.982 420.173 255.982 421.466C257.275 416.295 263.739 372.338 240.468 365.874C240.468 365.874 224.953 360.702 224.953 395.609C224.953 394.316 224.953 394.316 224.953 393.024C228.832 381.388 234.003 376.217 239.175 376.217Z"
          fill="#BAC3C8"
        />
        <path
          d="M253.397 416.297C253.397 415.004 252.104 404.661 249.518 398.197C248.225 393.026 245.639 386.561 244.347 382.683C241.761 377.511 239.175 376.219 236.59 376.219C231.418 376.219 227.54 381.39 222.368 393.026C222.368 394.318 222.368 394.318 222.368 395.611L230.126 412.418C230.126 412.418 235.297 365.876 253.397 421.468C253.397 420.175 253.397 418.882 253.397 416.297Z"
          fill="#061922"
        />
      </g>
    </svg>
  );
}
