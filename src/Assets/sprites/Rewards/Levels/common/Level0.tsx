import { Box } from "@chakra-ui/react"

/***********************************|
|              FRONT                |
|__________________________________*/
export const Level0Front: React.FC<{name?: any, color?: any, size?: any}> = ({ name, color, size = "150" }) => {
    return (
        <svg width="634" height="789" viewBox="0 0 634 789" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">

        <path d="M604 0H30C13.4315 0 0 13.4315 0 30V759C0 775.569 13.4315 789 30 789H604C620.569 789 634 775.569 634 759V30C634 13.4315 620.569 0 604 0Z" fill="#A4BAD3"/>
        
        <g filter="url(#filter3_d_0_1)">
        <path d="M512 94H121C104.431 94 91 107.431 91 124V339C91 355.569 104.431 369 121 369H512C528.569 369 542 355.569 542 339V124C542 107.431 528.569 94 512 94Z" fill="url(#pattern1)" fillOpacity="0.75"/>
        </g>
        
        <path d="M512 95H121C104.984 95 92 107.984 92 124V339C92 355.016 104.984 368 121 368H512C528.016 368 541 355.016 541 339V124C541 107.984 528.016 95 512 95Z" stroke="black" stroke-width="2"/>
        
        <style>{`
        .gotchi-handsDownClosed, .gotchi-handsUp, .gotchi-handsDownOpen, .gotchi-handsDownClosed, .gotchi-body, .gotchi-eyeColor, .gotchi-collateral, .gotchi-cheek, .gotchi-primary-mouth, .gotchi-wearable, .gotchi-sleeves   {
           animation-name:down;
           animation-duration:0.5s;
           animation-iteration-count: infinite;
           animation-timing-function: linear;
           animation-timing-function: steps(2);
        }
        @keyframes up {
          from {
            transform: translate(0px, 0);
          }
         to {
            transform: translate(0px, -4px);
          }
        }
        
        
        @keyframes down {
         from {
           transform: translate(0px, 0);
            }
         to {
              transform: translate(0px, 4px);
            }
        }
        @keyframes spin {
          from {
              transform: rotateY(0deg);
          }
         to {
              transform: rotateY(360deg);
          }
        }
        `}
        </style>
        
        <g className="gotchi-body">
        <svg width="604" height="570" viewBox="0 -250 604 1270" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M443.562 124.688V106.875H424.688V89.0625H386.938V71.25H349.188V53.4375H254.812V71.25H217.062V89.0625H179.312V106.875H160.438V124.688H141.562V489.844H179.312V472.031H226.5V489.844H273.688V472.031H330.312V489.844H377.5V472.031H424.688V489.844H462.438V124.688H443.562Z" fill="#64438E"/>
        <path d="M424.688 124.688V106.875H386.938V89.0625H349.188V71.25H254.812V89.0625H217.062V106.875H179.312V124.688H160.438V472.031H179.312V454.219H226.5V472.031H273.688V454.219H330.312V472.031H377.5V454.219H424.688V472.031H443.562V124.688H424.688Z" fill="#EDD3FD"/>
        <path d="M169.875 436.406H188.75V427.5H207.625V436.406H226.5V454.219H273.688V436.406H292.562V427.5H311.438V436.406H330.312V454.219H377.5V436.406H396.375V427.5H415.25V436.406H424.688V124.688H386.938V106.875H349.188V89.0625H302V80.1562H254.812V97.9688H217.062V115.781H179.312V133.594H169.875V436.406Z" fill="white"/>
        <path d="M198.188 285V302.812H217.062V285H207.625H198.188ZM396.375 285H386.938V302.812H405.812V285H396.375Z" fill="#F696C6"/>
        <path d="M273.688 285H254.812V302.812H273.688V293.906V285Z" fill="#64438E"/>
        <path d="M311.438 302.812H273.688V320.625H330.312V302.812H320.875H311.438Z" fill="#64438E"/>
        <path d="M339.75 285H330.312V302.812H349.188V285H339.75Z" fill="#64438E"/>
        <path opacity="0.25" d="M235.938 516.562H179.312V525.469H188.75V534.375H415.25V525.469H424.688V516.562H415.25H235.938Z" fill="black"/>
        <path d="M273.688 151.406V133.594H264.25V169.219H273.688V160.312V151.406Z" fill="#64438E"/>
        <path d="M273.688 124.688H283.125V133.594H273.688V124.688ZM273.688 169.219H283.125V178.125H273.688V169.219Z" fill="#64438E"/>
        <path d="M283.125 178.125H292.562V187.031H283.125V178.125Z" fill="#64438E"/>
        <path d="M292.562 187.031V195.938H311.438V187.031H302H292.562ZM283.125 115.781H292.562V124.688H283.125V115.781ZM320.875 169.219H330.312V178.125H320.875V169.219ZM320.875 124.688H330.312V133.594H320.875V124.688Z" fill="#64438E"/>
        <path d="M311.438 115.781V106.875H292.562V115.781H302H311.438ZM311.438 178.125H320.875V187.031H311.438V178.125Z" fill="#64438E"/>
        <path d="M311.438 115.781H320.875V124.688H311.438V115.781ZM330.312 133.594V169.219H339.75V133.594H330.312Z" fill="#64438E"/>
        <path d="M320.875 151.406H302V187.031H311.438V178.125H320.875V169.219H330.312V151.406H320.875Z" fill="#C260FF"/>
        <path d="M283.125 151.406H273.688V169.219H283.125V178.125H292.562V187.031H302V151.406H292.562H283.125Z" fill="#DEA8FF"/>
        <path d="M320.875 133.594V124.688H311.438V115.781H302V151.406H330.312V133.594H320.875Z" fill="#DEA8FF"/>
        <path d="M292.562 151.406H302V115.781H292.562V124.688H283.125V133.594H273.688V151.406H283.125H292.562Z" fill="#EDD3FD"/>
        <path d="M217.062 249.375V258.281V267.188H226.5H235.938H245.375H254.812V258.281V249.375H264.25H273.688V240.469V231.562V222.656V213.75H264.25H254.812V204.844V195.938H245.375H235.938H226.5H217.062V204.844V213.75H207.625H198.188V222.656V231.562V240.469V249.375H207.625H217.062Z" fill="#64438E"/>
        <path d="M330.312 213.75V222.656V231.562V240.469V249.375H339.75H349.188V258.281V267.188H358.625H368.062H377.5H386.938V258.281V249.375H396.375H405.812V240.469V231.562V222.656V213.75H396.375H386.938V204.844V195.938H377.5H368.062H358.625H349.188V204.844V213.75H339.75H330.312Z" fill="#64438E"/>
        <path d="M434.125 293.906V302.812H424.688V311.719H415.25V320.625H405.812V329.531H396.375V338.438H386.938V347.344H368.062V356.25H349.188V365.156H320.875V374.062H283.125V365.156H254.812V356.25H235.938V347.344H217.062V338.438H207.625V329.531H198.188V320.625H188.75V311.719H179.312V302.812H169.875V293.906H141.562V463.125H462.438V293.906H434.125Z" fill="#7D0064"/>
        <path d="M434.125 302.812V311.719H424.688V320.625H415.25V329.531H405.812V338.438H396.375V347.344H386.938V356.25H368.062V365.156H349.188V374.062H320.875V382.969H283.125V374.062H254.812V365.156H235.938V356.25H217.062V347.344H207.625V338.438H198.188V329.531H188.75V320.625H179.312V311.719H169.875V302.812H151V454.219H453V302.812H434.125Z" fill="#A73796"/>
        <path d="M330.312 400.781V391.875H320.875V382.969H283.125V391.875H273.688V400.781H264.25V454.219H273.688V445.312H283.125V454.219H292.562V445.312H311.438V454.219H320.875V445.312H330.312V454.219H339.75V400.781H330.312ZM320.875 409.688H311.438V400.781H320.875V409.688ZM292.562 400.781V409.688H283.125V400.781H292.562ZM292.562 436.406V427.5H283.125V418.594H292.562V427.5H311.438V418.594H320.875V427.5H311.438V436.406H292.562Z" fill="white"/>
        <path d="M528.5 338.438V329.531H509.625V320.625H490.75V311.719H481.312V302.812H471.875V293.906H462.438V365.156H471.875V374.062H490.75V382.969H528.5V374.062H537.938V338.438H528.5Z" fill="#64438E"/>
        <path d="M509.625 338.438V329.531H490.75V320.625H481.312V311.719H471.875V302.812H462.438V356.25H471.875V365.156H490.75V374.062H528.5V338.438H509.625Z" fill="#EDD3FD"/>
        <path d="M509.625 338.438V329.531H490.75V320.625H481.312V311.719H471.875V302.812H462.438V347.344H471.875V356.25H490.75V365.156H528.5V338.438H509.625Z" fill="white"/>
        <path d="M75.5 338.438V329.531H94.375V320.625H113.25V311.719H122.688V302.812H132.125V293.906H141.562V365.156H132.125V374.062H113.25V382.969H75.5V374.062H66.0625V338.438H75.5Z" fill="#64438E"/>
        <path d="M94.375 338.438V329.531H113.25V320.625H122.688V311.719H132.125V302.812H141.562V356.25H132.125V365.156H113.25V374.062H75.5V338.438H94.375Z" fill="#EDD3FD"/>
        <path d="M75.5 338.438V365.156H113.25V356.25H132.125V347.344H141.562V302.812H132.125V311.719H122.688V320.625H113.25V329.531H94.375V338.438H75.5Z" fill="white"/>
        <path d="M481.312 311.719V302.812H471.875V293.906H462.438V365.156H471.875V374.062H490.75V311.719H481.312Z" fill="#7D0064"/>
        <path d="M462.438 356.25H471.875V365.156H481.312V311.719H471.875V302.812H462.438V356.25Z" fill="#A73796"/>
        <path d="M132.125 293.906V302.812H122.688V311.719H113.25V374.062H132.125V365.156H141.562V293.906H132.125Z" fill="#7D0064"/>
        <path d="M141.562 302.812H132.125V311.719H122.688V365.156H132.125V356.25H141.562V302.812Z" fill="#A73796"/>
        </svg>
        
        </g>
        <path d="M202.5 619V616H199.5V613H196.5V604H199.5V601H202.5V598H217.5V601H205.5V604H202.5V613H205.5V616H211.5V610H208.5V607H217.5V619H202.5ZM220.5 619V598H226.5V601H229.5V604H232.5V601H235.5V598H241.5V619H235.5V607H232.5V613H229.5V607H226.5V619H220.5ZM274.5 616H277.5V619H271.5V616H268.5V604H274.5V616ZM280.5 604V616H277.5V604H280.5ZM289.5 604V616H286.5V619H280.5V616H283.5V604H289.5ZM295.5 619V616H292.5V607H295.5V604H310.5V607H313.5V616H310.5V619H295.5ZM298.5 616H307.5V607H298.5V616ZM325.5 607H328.5V610H325.5V619H319.5V604H325.5V607ZM337.5 604V607H328.5V604H337.5ZM343.5 619V616H349.5V601H346.5V598H355.5V616H361.5V619H343.5ZM367.5 619V616H364.5V607H367.5V604H379.5V598H385.5V619H367.5ZM370.5 616H379.5V607H370.5V616ZM418.5 613V598H427.5V607H424.5V613H418.5ZM418.5 619V616H424.5V619H418.5Z" fill="black"/>
        
        
        <path d="M254.638 461H234.278C233.771 461 233.398 460.893 233.158 460.68C232.945 460.44 232.838 460.067 232.838 459.56V433.64C232.838 433.133 232.945 432.773 233.158 432.56C233.398 432.32 233.771 432.2 234.278 432.2H240.478C240.985 432.2 241.345 432.32 241.558 432.56C241.798 432.773 241.918 433.133 241.918 433.64V453.44H247.398V446.96C247.398 446.453 247.505 446.093 247.718 445.88C247.958 445.64 248.331 445.52 248.838 445.52H254.638C255.145 445.52 255.505 445.64 255.718 445.88C255.958 446.093 256.078 446.453 256.078 446.96V459.56C256.078 460.067 255.958 460.44 255.718 460.68C255.505 460.893 255.145 461 254.638 461ZM237.198 457.4H251.918V449.12H251.518V457H237.598V435.8H237.198V457.4ZM280.651 461H262.091C261.584 461 261.211 460.893 260.971 460.68C260.757 460.44 260.651 460.067 260.651 459.56V433.64C260.651 433.133 260.757 432.773 260.971 432.56C261.211 432.32 261.584 432.2 262.091 432.2H280.651C281.157 432.2 281.517 432.32 281.731 432.56C281.971 432.773 282.091 433.133 282.091 433.64V438.32C282.091 438.827 281.971 439.2 281.731 439.44C281.517 439.653 281.157 439.76 280.651 439.76H269.611V442.84H277.411C277.917 442.84 278.277 442.96 278.491 443.2C278.731 443.413 278.851 443.773 278.851 444.28V448.56C278.851 449.067 278.731 449.44 278.491 449.68C278.277 449.893 277.917 450 277.411 450H269.611V453.44H280.651C281.157 453.44 281.517 453.56 281.731 453.8C281.971 454.013 282.091 454.373 282.091 454.88V459.56C282.091 460.067 281.971 460.44 281.731 460.68C281.517 460.893 281.157 461 280.651 461ZM278.491 457H265.411V446.64H275.251V446.24H265.411V436.2H278.491V435.8H265.011V457.4H278.491V457ZM303.863 461H293.463C292.956 461 292.529 460.907 292.183 460.72C291.863 460.533 291.609 460.187 291.423 459.68L287.503 449.88C287.263 449.293 287.063 448.787 286.903 448.36C286.743 447.907 286.609 447.48 286.503 447.08C286.396 446.68 286.316 446.267 286.263 445.84C286.236 445.387 286.223 444.84 286.223 444.2V433.64C286.223 433.133 286.329 432.773 286.543 432.56C286.783 432.32 287.156 432.2 287.663 432.2H294.023C294.529 432.2 294.916 432.32 295.183 432.56C295.449 432.773 295.583 433.133 295.583 433.64V444.68C295.583 444.947 295.609 445.213 295.663 445.48C295.716 445.747 295.796 446.027 295.903 446.32L297.783 451.92C297.863 452.187 297.956 452.373 298.063 452.48C298.169 452.56 298.329 452.6 298.543 452.6H298.983C299.196 452.6 299.356 452.56 299.463 452.48C299.569 452.373 299.663 452.187 299.743 451.92L301.623 446.28C301.729 445.987 301.809 445.707 301.863 445.44C301.916 445.173 301.943 444.907 301.943 444.64V433.64C301.943 433.133 302.049 432.773 302.263 432.56C302.503 432.32 302.876 432.2 303.383 432.2H309.663C310.169 432.2 310.529 432.32 310.743 432.56C310.983 432.773 311.103 433.133 311.103 433.64V444.2C311.103 444.84 311.076 445.387 311.023 445.84C310.996 446.267 310.929 446.68 310.823 447.08C310.716 447.48 310.583 447.907 310.423 448.36C310.263 448.787 310.063 449.293 309.823 449.88L305.903 459.68C305.716 460.187 305.449 460.533 305.103 460.72C304.783 460.907 304.369 461 303.863 461ZM290.743 435.8V444.44C290.743 445.187 290.783 445.88 290.863 446.52C290.969 447.133 291.143 447.733 291.383 448.32L294.023 454.72C294.343 455.493 294.703 456.133 295.103 456.64C295.503 457.147 296.116 457.4 296.943 457.4H300.463C301.289 457.4 301.903 457.147 302.303 456.64C302.703 456.133 303.063 455.493 303.383 454.72L306.023 448.32C306.263 447.733 306.423 447.133 306.503 446.52C306.609 445.88 306.662 445.187 306.662 444.44V435.8H306.263V444.44C306.263 445.133 306.209 445.8 306.102 446.44C305.996 447.053 305.836 447.627 305.623 448.16L302.983 454.56C302.716 455.253 302.409 455.84 302.063 456.32C301.743 456.773 301.209 457 300.463 457H296.943C296.196 457 295.649 456.773 295.303 456.32C294.983 455.84 294.689 455.253 294.423 454.56L291.783 448.16C291.569 447.627 291.409 447.053 291.303 446.44C291.196 445.8 291.143 445.133 291.143 444.44V435.8H290.743ZM336.041 461H317.481C316.975 461 316.601 460.893 316.361 460.68C316.148 460.44 316.041 460.067 316.041 459.56V433.64C316.041 433.133 316.148 432.773 316.361 432.56C316.601 432.32 316.975 432.2 317.481 432.2H336.041C336.548 432.2 336.908 432.32 337.121 432.56C337.361 432.773 337.481 433.133 337.481 433.64V438.32C337.481 438.827 337.361 439.2 337.121 439.44C336.908 439.653 336.548 439.76 336.041 439.76H325.001V442.84H332.801C333.308 442.84 333.668 442.96 333.881 443.2C334.121 443.413 334.241 443.773 334.241 444.28V448.56C334.241 449.067 334.121 449.44 333.881 449.68C333.668 449.893 333.308 450 332.801 450H325.001V453.44H336.041C336.548 453.44 336.908 453.56 337.121 453.8C337.361 454.013 337.481 454.373 337.481 454.88V459.56C337.481 460.067 337.361 460.44 337.121 460.68C336.908 460.893 336.548 461 336.041 461ZM333.881 457H320.801V446.64H330.641V446.24H320.801V436.2H333.881V435.8H320.401V457.4H333.881V457ZM364.013 461H343.653C343.146 461 342.773 460.893 342.533 460.68C342.32 460.44 342.213 460.067 342.213 459.56V433.64C342.213 433.133 342.32 432.773 342.533 432.56C342.773 432.32 343.146 432.2 343.653 432.2H349.853C350.36 432.2 350.72 432.32 350.933 432.56C351.173 432.773 351.293 433.133 351.293 433.64V453.44H356.773V446.96C356.773 446.453 356.88 446.093 357.093 445.88C357.333 445.64 357.706 445.52 358.213 445.52H364.013C364.52 445.52 364.88 445.64 365.093 445.88C365.333 446.093 365.453 446.453 365.453 446.96V459.56C365.453 460.067 365.333 460.44 365.093 460.68C364.88 460.893 364.52 461 364.013 461ZM346.573 457.4H361.293V449.12H360.893V457H346.973V435.8H346.573V457.4ZM402.619 453.44C402.619 454.667 402.446 455.787 402.099 456.8C401.753 457.787 401.126 458.64 400.219 459.36C399.313 460.053 398.059 460.6 396.459 461C394.886 461.4 392.873 461.6 390.419 461.6C387.966 461.6 385.939 461.4 384.339 461C382.766 460.6 381.526 460.053 380.619 459.36C379.713 458.64 379.073 457.787 378.699 456.8C378.353 455.787 378.179 454.667 378.179 453.44V439.8C378.179 438.573 378.353 437.467 378.699 436.48C379.073 435.467 379.713 434.6 380.619 433.88C381.526 433.16 382.766 432.6 384.339 432.2C385.939 431.8 387.966 431.6 390.419 431.6C392.873 431.6 394.886 431.8 396.459 432.2C398.059 432.6 399.313 433.16 400.219 433.88C401.126 434.6 401.753 435.467 402.099 436.48C402.446 437.467 402.619 438.573 402.619 439.8V453.44ZM382.499 452.52C382.499 453.32 382.619 454.053 382.859 454.72C383.099 455.387 383.513 455.96 384.099 456.44C384.686 456.893 385.486 457.253 386.499 457.52C387.539 457.787 388.833 457.92 390.379 457.92C393.473 457.92 395.566 457.427 396.659 456.44C397.779 455.427 398.339 454.12 398.339 452.52V440.72C398.339 439.147 397.779 437.853 396.659 436.84C395.566 435.827 393.473 435.32 390.379 435.32C388.833 435.32 387.539 435.453 386.499 435.72C385.486 435.987 384.686 436.36 384.099 436.84C383.513 437.293 383.099 437.853 382.859 438.52C382.619 439.187 382.499 439.92 382.499 440.72V452.52ZM390.379 435.72C393.233 435.72 395.206 436.187 396.299 437.12C397.393 438.027 397.939 439.227 397.939 440.72V452.52C397.939 454.04 397.393 455.253 396.299 456.16C395.206 457.067 393.233 457.52 390.379 457.52C387.526 457.52 385.566 457.067 384.499 456.16C383.433 455.253 382.899 454.04 382.899 452.52V440.72C382.899 439.2 383.433 437.987 384.499 437.08C385.566 436.173 387.526 435.72 390.379 435.72ZM387.219 452C387.219 452.533 387.406 452.987 387.779 453.36C388.179 453.707 389.059 453.88 390.419 453.88C391.779 453.88 392.646 453.707 393.019 453.36C393.419 452.987 393.619 452.533 393.619 452V441.24C393.619 440.733 393.419 440.307 393.019 439.96C392.646 439.587 391.779 439.4 390.419 439.4C389.059 439.4 388.179 439.587 387.779 439.96C387.406 440.307 387.219 440.733 387.219 441.24V452Z" fill="black"/>
        
        <path d="M604 3.5H30C15.3645 3.5 3.5 15.3645 3.5 30V759C3.5 773.636 15.3645 785.5 30 785.5H604C618.636 785.5 630.5 773.636 630.5 759V30C630.5 15.3645 618.636 3.5 604 3.5Z" stroke="black" stroke-width="7"/>
        
        <defs>
        <filter id="filter3_d_0_1" x="87" y="90" width="459" height="283" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feGaussianBlur stdDeviation="2"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
        </filter>
        
        <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_0_1" transform="translate(0 -0.0554274) scale(0.00213675 0.00350427)"/>
        </pattern>
        
        
        <image id="image0_0_1" width="468" height="317" xlinkHref="https://gateway.pinata.cloud/ipfs/Qmasyg8gsfciuep5RcLAHUwrHsEnNaVhFtPzhS1QrMQXFH" />
        </defs>
        </svg>
        
    )
} 

/***********************************|
|               BACK                |
|__________________________________*/
export const Level0Back: React.FC<{name?: any, color?: any, size?: any}> = ({ name, color, size = "150" }) => {
    return (
        <svg width="634" height="789" viewBox="0 0 634 789" fill="none" xmlns="http://www.w3.org/2000/svg">

        <style>{`
        .gotchi-handsDownClosed, .gotchi-handsUp, .gotchi-handsDownOpen, .gotchi-handsDownClosed, .gotchi-body, .gotchi-eyeColor, .gotchi-collateral, .gotchi-cheek, .gotchi-primary-mouth, .gotchi-wearable, .gotchi-sleeves   {
           animation-name:down;
           animation-duration:0.5s;
           animation-iteration-count: infinite;
           animation-timing-function: linear;
           animation-timing-function: steps(2);
        }
        @keyframes up {
          from {
            transform: translate(0px, 0);
          }
         to {
            transform: translate(0px, -4px);
          }
        }
        
        
        @keyframes down {
         from {
           transform: translate(0px, 0);
            }
         to {
              transform: translate(0px, 4px);
            }
        }
        @keyframes spin {
          from {
              transform: rotateY(0deg);
          }
         to {
              transform: rotateY(360deg);
          }
        }
        `}
        </style>
        
        <g className="gotchi-body" filter="url(#filter0_i_252_2281)">
        <rect width="634" height="789" rx="30" fill="#A4BAD3"/>
        <path d="M299.5 676V673H296.5V670H293.5V661H296.5V658H299.5V655H308.5V658H311.5V661H314.5V670H311.5V673H308.5V676H299.5ZM302.5 673H308.5V661H305.5V658H299.5V670H302.5V673ZM317.5 676V673H320.5V670H323.5V667H320.5V664H317.5V661H323.5V664H326.5V667H329.5V664H332.5V661H338.5V664H335.5V667H332.5V670H335.5V673H338.5V676H332.5V673H329.5V670H326.5V673H323.5V676H317.5Z" fill="#828282" fillOpacity="0.28"/>
        <path d="M476.656 196.5V176H454.969V155.5H411.594V135H368.219V114.5H259.781V135H216.406V155.5H173.031V176H151.344V196.5H129.656V616.75H173.031V596.25H227.25V616.75H281.469V596.25H346.531V616.75H400.75V596.25H454.969V616.75H498.344V196.5H476.656Z" fill="#64438E"/>
        <path d="M454.969 196.5V176H411.594V155.5H368.219V135H259.781V155.5H216.406V176H173.031V196.5H151.344V596.25H173.031V575.75H227.25V596.25H281.469V575.75H346.531V596.25H400.75V575.75H454.969V596.25H476.656V196.5H454.969Z" fill="#EDD3FD"/>
        <path d="M162.188 555.25H183.875V545H205.562V555.25H227.25V575.75H281.469V555.25H303.156V545H324.844V555.25H346.531V575.75H400.75V555.25H422.438V545H444.125V555.25H454.969V196.5H411.594V176H368.219V155.5H314V145.25H259.781V165.75H216.406V186.25H173.031V206.75H162.188V555.25Z" fill="white"/>
        <path d="M194.719 381V401.5H216.406V381H205.562H194.719ZM422.438 381H411.594V401.5H433.281V381H422.438Z" fill="#F696C6"/>
        <path d="M281.469 381H259.781V401.5H281.469V391.25V381Z" fill="#64438E"/>
        <path d="M324.844 401.5H281.469V422H346.531V401.5H335.688H324.844Z" fill="#64438E"/>
        <path d="M357.375 381H346.531V401.5H368.219V381H357.375Z" fill="#64438E"/>
        <path opacity="0.25" d="M238.094 647.5H173.031V657.75H183.875V668H444.125V657.75H454.969V647.5H444.125H238.094Z" fill="black"/>
        <path d="M281.469 227.25V206.75H270.625V247.75H281.469V237.5V227.25Z" fill="#64438E"/>
        <path d="M281.469 196.5H292.312V206.75H281.469V196.5ZM281.469 247.75H292.312V258H281.469V247.75Z" fill="#64438E"/>
        <path d="M292.312 258H303.156V268.25H292.312V258Z" fill="#64438E"/>
        <path d="M303.156 268.25V278.5H324.844V268.25H314H303.156ZM292.312 186.25H303.156V196.5H292.312V186.25ZM335.688 247.75H346.531V258H335.688V247.75ZM335.688 196.5H346.531V206.75H335.688V196.5Z" fill="#64438E"/>
        <path d="M324.844 186.25V176H303.156V186.25H314H324.844ZM324.844 258H335.688V268.25H324.844V258Z" fill="#64438E"/>
        <path d="M324.844 186.25H335.688V196.5H324.844V186.25ZM346.531 206.75V247.75H357.375V206.75H346.531Z" fill="#64438E"/>
        <path d="M335.688 227.25H314V268.25H324.844V258H335.688V247.75H346.531V227.25H335.688Z" fill="#C260FF"/>
        <path d="M292.312 227.25H281.469V247.75H292.312V258H303.156V268.25H314V227.25H303.156H292.312Z" fill="#DEA8FF"/>
        <path d="M335.688 206.75V196.5H324.844V186.25H314V227.25H346.531V206.75H335.688Z" fill="#DEA8FF"/>
        <path d="M303.156 227.25H314V186.25H303.156V196.5H292.312V206.75H281.469V227.25H292.312H303.156Z" fill="#EDD3FD"/>
        <path d="M216.406 340V350.25V360.5H227.25H238.094H248.938H259.781V350.25V340H270.625H281.469V329.75V319.5V309.25V299H270.625H259.781V288.75V278.5H248.938H238.094H227.25H216.406V288.75V299H205.562H194.719V309.25V319.5V329.75V340H205.562H216.406Z" fill="#64438E"/>
        <path d="M346.531 299V309.25V319.5V329.75V340H357.375H368.219V350.25V360.5H379.062H389.906H400.75H411.594V350.25V340H422.438H433.281V329.75V319.5V309.25V299H422.438H411.594V288.75V278.5H400.75H389.906H379.062H368.219V288.75V299H357.375H346.531Z" fill="#64438E"/>
        <path d="M465.812 391.25V401.5H454.969V411.75H444.125V422H433.281V432.25H422.438V442.5H411.594V452.75H389.906V463H368.219V473.25H335.688V483.5H292.312V473.25H259.781V463H238.094V452.75H216.406V442.5H205.562V432.25H194.719V422H183.875V411.75H173.031V401.5H162.188V391.25H129.656V586H498.344V391.25H465.812Z" fill="#7D0064"/>
        <path d="M465.812 401.5V411.75H454.969V422H444.125V432.25H433.281V442.5H422.438V452.75H411.594V463H389.906V473.25H368.219V483.5H335.688V493.75H292.312V483.5H259.781V473.25H238.094V463H216.406V452.75H205.562V442.5H194.719V432.25H183.875V422H173.031V411.75H162.188V401.5H140.5V575.75H487.5V401.5H465.812Z" fill="#A73796"/>
        <path d="M346.531 514.25V504H335.688V493.75H292.312V504H281.469V514.25H270.625V575.75H281.469V565.5H292.312V575.75H303.156V565.5H324.844V575.75H335.688V565.5H346.531V575.75H357.375V514.25H346.531ZM335.688 524.5H324.844V514.25H335.688V524.5ZM303.156 514.25V524.5H292.312V514.25H303.156ZM303.156 555.25V545H292.312V534.75H303.156V545H324.844V534.75H335.688V545H324.844V555.25H303.156Z" fill="white"/>
        <path d="M574.25 442.5V432.25H552.562V422H530.875V411.75H520.031V401.5H509.188V391.25H498.344V473.25H509.188V483.5H530.875V493.75H574.25V483.5H585.094V442.5H574.25Z" fill="#64438E"/>
        <path d="M552.562 442.5V432.25H530.875V422H520.031V411.75H509.188V401.5H498.344V463H509.188V473.25H530.875V483.5H574.25V442.5H552.562Z" fill="#EDD3FD"/>
        <path d="M552.562 442.5V432.25H530.875V422H520.031V411.75H509.188V401.5H498.344V452.75H509.188V463H530.875V473.25H574.25V442.5H552.562Z" fill="white"/>
        <path d="M53.75 442.5V432.25H75.4375V422H97.125V411.75H107.969V401.5H118.812V391.25H129.656V473.25H118.812V483.5H97.125V493.75H53.75V483.5H42.9062V442.5H53.75Z" fill="#64438E"/>
        <path d="M75.4375 442.5V432.25H97.125V422H107.969V411.75H118.812V401.5H129.656V463H118.812V473.25H97.125V483.5H53.75V442.5H75.4375Z" fill="#EDD3FD"/>
        <path d="M53.75 442.5V473.25H97.125V463H118.812V452.75H129.656V401.5H118.812V411.75H107.969V422H97.125V432.25H75.4375V442.5H53.75Z" fill="white"/>
        <path d="M520.031 411.75V401.5H509.188V391.25H498.344V473.25H509.188V483.5H530.875V411.75H520.031Z" fill="#7D0064"/>
        <path d="M498.344 463H509.188V473.25H520.031V411.75H509.188V401.5H498.344V463Z" fill="#A73796"/>
        <path d="M118.812 391.25V401.5H107.969V411.75H97.125V483.5H118.812V473.25H129.656V391.25H118.812Z" fill="#7D0064"/>
        <path d="M129.656 401.5H118.812V411.75H107.969V473.25H118.812V463H129.656V401.5Z" fill="#A73796"/>
        </g>
        
        <rect x="3.5" y="3.5" width="627" height="782" rx="26.5" stroke="black" stroke-width="7"/>
        
        <defs>
        <filter id="filter0_i_252_2281" x="0" y="0" width="634" height="789" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feMorphology radius="17" operator="erode" in="SourceAlpha" result="effect1_innerShadow_252_2281"/>
        <feGaussianBlur stdDeviation="15"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_252_2281"/>
        </filter>
        </defs>
        
        </svg>
    )
} 

/***********************************|
|              HOVERING             |
|__________________________________*/
export const Level0Hovering: React.FC = () => {
    return (
    <Box>
        <style>{`
            div {border-radius: 30px;}

            .flip-card {
            background-color: transparent;
            width: 300px;
            height: 300px;
            perspective: 1000px;
            }

            .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 0.6s;
            transform-style: preserve-3d;
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            }

            .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg);
            }

            .flip-card-front, .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            }

            .flip-card-front {
            color: black;
            }

            .flip-card-back {
            transform: rotateY(180deg);
            }`
        }
        </style>
        <div className="flip-card">
        <div className="flip-card-inner">

            {/*FRONT CARD*/}
            <div className="flip-card-front">
                <Level0Front />
            </div>

            {/*BACK CARD*/}
            <div className="flip-card-back">
                <Level0Back />
            </div>

        </div>
        </div>
    </Box>)
}

export const Level0Spinning: React.FC = () => {
    return (
        <Box>
            <style>{`
                div {border-radius: 30px;}
    
                .flip-card {
                    background-color: transparent;
                    width: 300px;
                    height: 300px;
                    perspective: 2000px;
                }
                  
                .flip-card-inner {
                position: relative;
                width: 100%;
                height: 100%;
                text-align: center;
                transition: transform 0.6s;
                transform-style: preserve-3d;
                box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                }
                
                
                .flip-card .flip-card-inner {
                    animation-name: spin;
                    animation-duration:10s;
                    animation-iteration-count: infinite;
                    animation-timing-function: linear;
                }
                
                .flip-card-front, .flip-card-back {
                position: absolute;
                width: 100%;
                height: 100%;
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
                }
                
                .flip-card-front {
                color: black;
                }
                
                .flip-card-back {
                transform: rotateY(180deg);
                }`
            }
            </style>
            <div className="flip-card">
            <div className="flip-card-inner">
    
                {/*FRONT CARD*/}
                <div className="flip-card-front">
                    <Level0Front />
                </div>
    
                {/*BACK CARD*/}
                <div className="flip-card-back">
                    <Level0Back />
                </div>
    
            </div>
        </div>
    </Box>)
}