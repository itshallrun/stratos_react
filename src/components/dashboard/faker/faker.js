export default function fake(fakeData, climbing) {

    const now = Date.now()

    let prevAlt = fakeData.alt.data.slice(-1)[0][1],
        alt = Math.round(prevAlt < 35000 && climbing
            ? prevAlt + Math.random() * Math.floor(300)
            : prevAlt - Math.random() * Math.floor(prevAlt > 30000 ? 1000 : 450))

    const heightValues = fakeData.alt.data.map(x => x[1]);

    const max = Math.max(...heightValues, alt),
        fake_lng = +(fakeData.lng.data.slice(-1)[0][1] + Math.random()/1000).toFixed(4),
        fake_lat = +(fakeData.lat.data.slice(-1)[0][1] + Math.random()/1000).toFixed(4)

    return {
        ...fakeData,
        alt: {
            ...fakeData.alt,
            data: [...fakeData.alt.data, [now, alt]]
        },
        sat: {
            ...fakeData.sat,
            data: [...fakeData.sat.data, [now, Math.round(Math.random() * Math.floor(5))]]
        },
        tmp_out: {
            ...fakeData.tmp_out,
            data: [...fakeData.tmp_out.data, [now, +(25 - fakeData.alt.data.slice(-1)[0][1] / 1000 * 6).toFixed(2)]]
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
            data: [...fakeData.volt.data, [now, +(fakeData.volt.data.slice(-1)[0][1] * (1 - Math.random() / 100)).toFixed(2)]]
        },
        press: {
            ...fakeData.press,
            data: [...fakeData.press.data, [now, +(1.0135 * Math.pow(1 - 6.5 * fakeData.alt.data.slice(-1)[0][1] / 288150, 5.255)).toFixed(2)]]
        },
        lng: {
            ...fakeData.lng,
            data: [...fakeData.lng.data, [now, fake_lng]]
        },
        lat: {
            ...fakeData.lat,
            data: [...fakeData.lat.data, [now, fake_lat]]
        },
        gps: {
            ...fakeData.gps,
            data: [...fakeData.gps.data, [now, Math.random() >= 0.5]]
        },
        max_h: {
            ...fakeData.max_h,
            data: [...fakeData.max_h.data, [now, max]]
        },
        climb: {
            ...fakeData.climb,
            data: [...fakeData.climb.data, [now, +(alt - fakeData.alt.data.slice(-1)[0][1]).toFixed(2)]]
        },
        geo: {
            data: [...fakeData.geo.data, {timestamp: now, lng: fake_lng, lat: fake_lat}]
        }
    }


}

