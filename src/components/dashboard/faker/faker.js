export default function fake(fakeData) {

    const now = Date.now()

    return {
        ...fakeData,
        alt: {
            ...fakeData.alt,
            data: [...fakeData.alt.data, [now, Math.round(fakeData.alt.data.slice(-1)[0][1] + Math.random()*Math.floor(50))]]
        },
        sat: {
            ...fakeData.sat,
            data: [...fakeData.sat.data, [now, Math.round(Math.random() * Math.floor(5))]]
        },
        tmp_out: {
            ...fakeData.tmp_out,
            data: [...fakeData.tmp_out.data, [now, +(25 - fakeData.alt.data.slice(-1)[0][1]/1000*6).toFixed(2)]]
        },
        tmp_in: {
            ...fakeData.tmp_in,
            data: [...fakeData.tmp_in.data, [now, +(fakeData.tmp_out.data.slice(-1)[0][1] + 3).toFixed(2)]]
        },
        tmp_bat: {
            ...fakeData.tmp_bat,
            data: [...fakeData.tmp_bat.data, [now, +(fakeData.tmp_out.data.slice(-1)[0][1] + 6).toFixed(2)]]
        },
        volt: {
            ...fakeData.volt,
            data: [...fakeData.volt.data, [now, +(fakeData.volt.data.slice(-1)[0][1]- Math.random() / 10).toFixed(2)]]
        },
        press: {
            ...fakeData.press,
            data: [...fakeData.press.data, [now, +(1.0135 * Math.pow(1 - 6.5 * fakeData.alt.data.slice(-1)[0][1] / 288150, 5.255)).toFixed(2)]]
        },
        long:{
            ...fakeData.long,
            data: [...fakeData.long.data, [now, +(fakeData.long.data.slice(-1)[0][1] + 0.01).toFixed(2)]]
        },
        lat:{
            ...fakeData.lat,
            data: [...fakeData.lat.data, [now, +(fakeData.long.data.slice(-1)[0][1]+ 0.01).toFixed(2)]]
        },
        gps:{
            ...fakeData.gps,
            data: [...fakeData.gps.data, [now, Math.random() >= 0.5]]
        },
        max_h:{
            ...fakeData.max_h,
            data: [...fakeData.max_h.data, [now, +(fakeData.tmp_out.data.slice(-1)[0][1] + 6).toFixed(2)]]
        },
        climb:{
            ...fakeData.climb,
            data: [...fakeData.climb.data, [now, +(fakeData.alt.data.slice(-1)[0][1]-fakeData.alt.data.slice(-1)[0][1]).toFixed(2)]]
        }
    }


}

