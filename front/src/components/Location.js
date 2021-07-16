import React, { useEffect, useRef } from 'react';
import { keywordState } from '../recoil/atom';

const Location = () => {
    const kakaoMap = useRef();

    const { kakao } = window;

    useEffect(() => {
        console.log(keywordState);

        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
        };
        const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
        const map = new kakao.maps.Map(kakaoMap.current, options);
        const ps = new kakao.maps.services.Places();

        const displayMarker = (place) => {
            var marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.y, place.x),
            });

            kakao.maps.event.addListener(marker, 'click', function () {
                infowindow.setContent(
                    '<div style="padding:5px;font-size:12px;">' +
                        place.place_name +
                        '</div>'
                );
                infowindow.open(map, marker);
            });
        };

        const placesSearchCB = (data, status, pagination) => {
            if (status === kakao.maps.services.Status.OK) {
                let bounds = new kakao.maps.LatLngBounds();

                for (let i = 0; i < data.length; i++) {
                    displayMarker(data[i]);
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                }
                map.setBounds(bounds);
            }
        };

        ps.keywordSearch(keywordState, placesSearchCB);
    }, []);

    return (
        <div
            ref={kakaoMap}
            style={{
                width: '100%',
                height: '500px',
            }}
        ></div>
    );
};

export default Location;
