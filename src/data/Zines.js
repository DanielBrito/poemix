import { getThumbs } from "./Thumbs"
import { getRoutes } from "../routes/Routes";

const routes = getRoutes();
const thumbs = getThumbs();

const { APP_BASE_URL, ZINES_PATH } = routes
const zinesPathPrefix = `${APP_BASE_URL}${ZINES_PATH}`

const zines = [
    {
        name: "PROTESTIZANDO #1",
        releasedAt: "26/02/2014",
        thumb: thumbs.PROTESTIZANDO_1,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_1_PATH}`
    },
    {
        name: "PROTESTIZANDO #2",
        releasedAt: "30/05/2014",
        thumb: thumbs.PROTESTIZANDO_2,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_2_PATH}`
    },
    {
        name: "PROTESTIZANDO #3",
        releasedAt: "27/09/2014",
        thumb: thumbs.PROTESTIZANDO_3,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_3_PATH}`
    },
    {
        name: "PROTESTIZANDO #4",
        releasedAt: "25/01/2015",
        thumb: thumbs.PROTESTIZANDO_4,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_4_PATH}`
    },
    {
        name: "PROTESTIZANDO #5",
        releasedAt: "14/06/2015",
        thumb: thumbs.PROTESTIZANDO_5,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_5_PATH}`
    },
    {
        name: "PROTESTIZANDO #6",
        releasedAt: "06/04/2016",
        thumb: thumbs.PROTESTIZANDO_6,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_6_PATH}`
        },
    {
        name: "PROTESTIZANDO #7",
        releasedAt: "29/04/2016",
        thumb: thumbs.PROTESTIZANDO_7,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_7_PATH}`
    },
    {
        name: "PROTESTIZANDO #8",
        releasedAt: "30/05/2016",
        thumb: thumbs.PROTESTIZANDO_8,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_8_PATH}`
    },
    {
        name: "PROTESTIZANDO #9",
        releasedAt: "11/07/2016",
        thumb: thumbs.PROTESTIZANDO_9,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_9_PATH}`
    },
    {
        name: "PROTESTIZANDO #10",
        releasedAt: "05/09/2016",
        thumb: thumbs.PROTESTIZANDO_10,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_10_PATH}`
    },
    {
        name: "PROTESTIZANDO #11",
        releasedAt: "06/10/2016",
        thumb: thumbs.PROTESTIZANDO_11,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_11_PATH}`
    },
    {
        name: "PROTESTIZANDO #12",
        releasedAt: "11/11/2016",
        thumb: thumbs.PROTESTIZANDO_12,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_12_PATH}`
    },
    {
        name: "PROTESTIZANDO #13",
        releasedAt: "12/12/2016",
        thumb: thumbs.PROTESTIZANDO_13,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_13_PATH}`
    },
    {
        name: "PROTESTIZANDO #14",
        releasedAt: "28/12/2016",
        thumb: thumbs.PROTESTIZANDO_14,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_14_PATH}`
        },
    {
        name: "PROTESTIZANDO #15",
        releasedAt: "06/02/17",
        thumb: thumbs.PROTESTIZANDO_15,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_15_PATH}`
    },
    {
        name: "PROTESTIZANDO #16",
        releasedAt: "15/03/17",
        thumb: thumbs.PROTESTIZANDO_16,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_16_PATH}`
    },
    {
        name: "PROTESTIZANDO #17",
        releasedAt: "02/04/2017",
        thumb: thumbs.PROTESTIZANDO_17,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_17_PATH}`
    },
    {
        name: "PROTESTIZANDO #18",
        releasedAt: "07/06/2017",
        thumb: thumbs.PROTESTIZANDO_18,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_18_PATH}`
    },
    {
        name: "PROTESTIZANDO #19",
        releasedAt: "17/07/2017",
        thumb: thumbs.PROTESTIZANDO_19,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_19_PATH}`
    },
    {
        name: "PROTESTIZANDO #20",
        releasedAt: "01/08/2017",
        thumb: thumbs.PROTESTIZANDO_20,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_20_PATH}`
    },
    {
        name: "PROTESTIZANDO #21",
        releasedAt: "02/09/2017",
        thumb: thumbs.PROTESTIZANDO_21,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_21_PATH}`
    },
    {
        name: "PROTESTIZANDO #22",
        releasedAt: "07/10/2017",
        thumb: thumbs.PROTESTIZANDO_22,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_22_PATH}`
    },
    {
        name: "PROTESTIZANDO #23",
        releasedAt: "02/11/2017",
        thumb: thumbs.PROTESTIZANDO_23,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_23_PATH}`
    },
    {
        name: "PROTESTIZANDO #24",
        releasedAt: "19/12/2017",
        thumb: thumbs.PROTESTIZANDO_24,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_24_PATH}`
    },
    {
        name: "PROTESTIZANDO #25",
        releasedAt: "20/01/2018",
        thumb: thumbs.PROTESTIZANDO_25,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_25_PATH}`
    },
    {
        name: "PROTESTIZANDO #26",
        releasedAt: "03/03/2018",
        thumb: thumbs.PROTESTIZANDO_26,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_26_PATH}`
    },
    {
        name: "PROTESTIZANDO #27",
        releasedAt: "03/05/2018",
        thumb: thumbs.PROTESTIZANDO_27,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_27_PATH}`
    },
    {
        name: "PROTESTIZANDO #28",
        releasedAt: "26/07/2018",
        thumb: thumbs.PROTESTIZANDO_28,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_28_PATH}`
    },
    {
        name: "PROTESTIZANDO #29",
        releasedAt: "13/12/2018",
        thumb: thumbs.PROTESTIZANDO_29,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_29_PATH}`
    },
    {
        name: "PROTESTIZANDO #30",
        releasedAt: "06/07/2019",
        thumb: thumbs.PROTESTIZANDO_30,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_30_PATH}`
    },
    {
        name: "PROTESTIZANDO #31",
        releasedAt: "18/12/2019",
        thumb: thumbs.PROTESTIZANDO_31,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_31_PATH}`
    },
    {
        name: "PROTESTIZANDO #32",
        releasedAt: "01/08/2020",
        thumb: thumbs.PROTESTIZANDO_32,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_32_PATH}`
    },
    {
        name: "PROTESTIZANDO #33",
        releasedAt: "28/11/2021",
        thumb: thumbs.PROTESTIZANDO_33,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_33_PATH}`
    },
    {
        name: "PROTESTIZANDO #34",
        releasedAt: "26/12/2021",
        thumb: thumbs.PROTESTIZANDO_34,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_34_PATH}`
    },
    {
        name: "PROTESTIZANDO #35",
        releasedAt: "31/07/2022",
        thumb: thumbs.PROTESTIZANDO_35,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_35_PATH}`
    },
    {
        name: "PROTESTIZANDO #36",
        releasedAt: "15/10/2023",
        thumb: thumbs.PROTESTIZANDO_36,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_36_PATH}`
    },
    {
        name: "PROTESTIZANDO #37",
        releasedAt: "12/07/2024",
        thumb: thumbs.PROTESTIZANDO_37,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_37_PATH}`
    }
]

export function getZines() {
    return zines;
}
