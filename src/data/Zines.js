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
        thumb: thumbs.PROTESTIZANDO_1.image,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_1_PATH}`,
        altText: thumbs.PROTESTIZANDO_1.altText
    },
    {
        name: "PROTESTIZANDO #2",
        releasedAt: "30/05/2014",
        thumb: thumbs.PROTESTIZANDO_2.image,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_2_PATH}`,
        altText: thumbs.PROTESTIZANDO_2.altText
    },
    {
        name: "PROTESTIZANDO #3",
        releasedAt: "27/09/2014",
        thumb: thumbs.PROTESTIZANDO_3.image,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_3_PATH}`,
        altText: thumbs.PROTESTIZANDO_3.altText
    },
    {
        name: "PROTESTIZANDO #4",
        releasedAt: "25/01/2015",
        thumb: thumbs.PROTESTIZANDO_4.image,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_4_PATH}`,
        altText: thumbs.PROTESTIZANDO_4.altText
    },
    {
        name: "PROTESTIZANDO #5",
        releasedAt: "14/06/2015",
        thumb: thumbs.PROTESTIZANDO_5.image,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_5_PATH}`,
        altText: thumbs.PROTESTIZANDO_5.altText
    },
    {
        name: "PROTESTIZANDO #6",
        releasedAt: "06/04/2016",
        thumb: thumbs.PROTESTIZANDO_6.image,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_6_PATH}`,
        altText: thumbs.PROTESTIZANDO_1.altText
    },
    {
        name: "PROTESTIZANDO #7",
        releasedAt: "29/04/2016",
        thumb: thumbs.PROTESTIZANDO_7.image,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_7_PATH}`,
        altText: thumbs.PROTESTIZANDO_1.altText
    },
    {
        name: "PROTESTIZANDO #8",
        releasedAt: "30/05/2016",
        thumb: thumbs.PROTESTIZANDO_8.image,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_8_PATH}`,
        altText: thumbs.PROTESTIZANDO_1.altText
    },
    {
        name: "PROTESTIZANDO #9",
        releasedAt: "11/07/2016",
        thumb: thumbs.PROTESTIZANDO_9.image,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_9_PATH}`,
        altText: thumbs.PROTESTIZANDO_1.altText
    },
    {
        name: "PROTESTIZANDO #10",
        releasedAt: "05/09/2016",
        thumb: thumbs.PROTESTIZANDO_10.image,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_10_PATH}`,
        altText: thumbs.PROTESTIZANDO_1.altText
    },
    {
        name: "PROTESTIZANDO #11",
        releasedAt: "06/10/2016",
        thumb: thumbs.PROTESTIZANDO_11.image,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_11_PATH}`,
        altText: thumbs.PROTESTIZANDO_1.altText
    },
    {
        name: "PROTESTIZANDO #12",
        releasedAt: "11/11/2016",
        thumb: thumbs.PROTESTIZANDO_12.image,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_12_PATH}`,
        altText: thumbs.PROTESTIZANDO_1.altText
    },
    {
        name: "PROTESTIZANDO #13",
        releasedAt: "12/12/2016",
        thumb: thumbs.PROTESTIZANDO_13.image,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_13_PATH}`,
        altText: thumbs.PROTESTIZANDO_1.altText
    },
    {
        name: "PROTESTIZANDO #14",
        releasedAt: "28/12/2016",
        thumb: thumbs.PROTESTIZANDO_14.image,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_14_PATH}`,
        altText: thumbs.PROTESTIZANDO_1.altText
        },
    {
        name: "PROTESTIZANDO #15",
        releasedAt: "06/02/17",
        thumb: thumbs.PROTESTIZANDO_15.image,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_15_PATH}`,
        altText: thumbs.PROTESTIZANDO_1.altText
    },
    {
        name: "PROTESTIZANDO #16",
        releasedAt: "15/03/17",
        thumb: thumbs.PROTESTIZANDO_16.image,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_16_PATH}`,
        altText: thumbs.PROTESTIZANDO_1.altText
    },
    {
        name: "PROTESTIZANDO #17",
        releasedAt: "02/04/2017",
        thumb: thumbs.PROTESTIZANDO_17.image,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_17_PATH}`,
        altText: thumbs.PROTESTIZANDO_1.altText
    },
    {
        name: "PROTESTIZANDO #18",
        releasedAt: "07/06/2017",
        thumb: thumbs.PROTESTIZANDO_18.image,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_18_PATH}`,
        altText: thumbs.PROTESTIZANDO_1.altText
    },
    {
        name: "PROTESTIZANDO #19",
        releasedAt: "17/07/2017",
        thumb: thumbs.PROTESTIZANDO_19.image,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_19_PATH}`,
        altText: thumbs.PROTESTIZANDO_1.altText
    },
    {
        name: "PROTESTIZANDO #20",
        releasedAt: "01/08/2017",
        thumb: thumbs.PROTESTIZANDO_20.image,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_20_PATH}`,
        altText: thumbs.PROTESTIZANDO_1.altText
    },
    {
        name: "PROTESTIZANDO #21",
        releasedAt: "02/09/2017",
        thumb: thumbs.PROTESTIZANDO_21.image,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_21_PATH}`,
        altText: thumbs.PROTESTIZANDO_1.altText
    },
    {
        name: "PROTESTIZANDO #22",
        releasedAt: "07/10/2017",
        thumb: thumbs.PROTESTIZANDO_22.image,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_22_PATH}`,
        altText: thumbs.PROTESTIZANDO_1.altText
    },
    {
        name: "PROTESTIZANDO #23",
        releasedAt: "02/11/2017",
        thumb: thumbs.PROTESTIZANDO_23.image,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_23_PATH}`,
        altText: thumbs.PROTESTIZANDO_1.altText
    },
    {
        name: "PROTESTIZANDO #24",
        releasedAt: "19/12/2017",
        thumb: thumbs.PROTESTIZANDO_24.image,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_24_PATH}`,
        altText: thumbs.PROTESTIZANDO_1.altText
    },
    {
        name: "PROTESTIZANDO #25",
        releasedAt: "20/01/2018",
        thumb: thumbs.PROTESTIZANDO_25.image,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_25_PATH}`,
        altText: thumbs.PROTESTIZANDO_1.altText
    },
    {
        name: "PROTESTIZANDO #26",
        releasedAt: "03/03/2018",
        thumb: thumbs.PROTESTIZANDO_26.image,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_26_PATH}`,
        altText: thumbs.PROTESTIZANDO_1.altText
    },
    {
        name: "PROTESTIZANDO #27",
        releasedAt: "03/05/2018",
        thumb: thumbs.PROTESTIZANDO_27.image,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_27_PATH}`,
        altText: thumbs.PROTESTIZANDO_1.altText
    },
    {
        name: "PROTESTIZANDO #28",
        releasedAt: "26/07/2018",
        thumb: thumbs.PROTESTIZANDO_28.image,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_28_PATH}`,
        altText: thumbs.PROTESTIZANDO_28.altText
    },
    {
        name: "PROTESTIZANDO #29",
        releasedAt: "13/12/2018",
        thumb: thumbs.PROTESTIZANDO_29.image,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_29_PATH}`,
        altText: thumbs.PROTESTIZANDO_29.altText
    },
    {
        name: "PROTESTIZANDO #30",
        releasedAt: "06/07/2019",
        thumb: thumbs.PROTESTIZANDO_30.image,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_30_PATH}`,
        altText: thumbs.PROTESTIZANDO_30.altText
    },
    {
        name: "PROTESTIZANDO #31",
        releasedAt: "18/12/2019",
        thumb: thumbs.PROTESTIZANDO_31.image,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_31_PATH}`,
        altText: thumbs.PROTESTIZANDO_31.altText
    },
    {
        name: "PROTESTIZANDO #32",
        releasedAt: "01/08/2020",
        thumb: thumbs.PROTESTIZANDO_32.image,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_32_PATH}`,
        altText: thumbs.PROTESTIZANDO_32.altText
    },
    {
        name: "PROTESTIZANDO #33",
        releasedAt: "28/11/2021",
        thumb: thumbs.PROTESTIZANDO_33.image,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_33_PATH}`,
        altText: thumbs.PROTESTIZANDO_33.altText
    },
    {
        name: "PROTESTIZANDO #34",
        releasedAt: "26/12/2021",
        thumb: thumbs.PROTESTIZANDO_34.image,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_34_PATH}`,
        altText: thumbs.PROTESTIZANDO_34.altText
    },
    {
        name: "PROTESTIZANDO #35",
        releasedAt: "31/07/2022",
        thumb: thumbs.PROTESTIZANDO_35.image,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_35_PATH}`,
        altText: thumbs.PROTESTIZANDO_35.altText
    },
    {
        name: "PROTESTIZANDO #36",
        releasedAt: "15/10/2023",
        thumb: thumbs.PROTESTIZANDO_36.image,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_36_PATH}`,
        altText: thumbs.PROTESTIZANDO_36.altText
    },
    {
        name: "PROTESTIZANDO #37",
        releasedAt: "12/07/2024",
        thumb: thumbs.PROTESTIZANDO_37.image,
        path: `${zinesPathPrefix}${routes.PROTESTIZANDO_37_PATH}`,
        altText: thumbs.PROTESTIZANDO_37.altText
    }
]

export function getZines() {
    return zines;
}
