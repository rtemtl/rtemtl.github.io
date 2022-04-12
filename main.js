var map = L.map('map').setView([
    41.32825854568116, -74.18845805591613
], 17);


var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// to get the height of the window
var height = $(window).height();
console.log(`the height of the pc is: ` + height);

var streetlights = {
    "type": "FeatureCollection",
    "features": [
        { "type": "Feature", "properties": { "RTEID": 84, "StreetName": "Mack Place", "UtlPoleID": "54017/48375", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{3F6FB178-C6C8-4576-B6B8-B03A1303D6B8}", "latlng": "-74.18666559,41.327850079", "POINT_X": -74.18666559, "POINT_Y": 41.327850079000001 }, "geometry": { "type": "Point", "coordinates": [-74.186665589999961, 41.327850079000029] } },
        { "type": "Feature", "properties": { "RTEID": 85, "StreetName": "Mack Place", "UtlPoleID": "54017/48375", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{E0BE6CAF-BF05-4F0F-8FA0-68DE549C2246}", "latlng": "-74.186606194,41.327887595", "POINT_X": -74.186606194000007, "POINT_Y": 41.327887595 }, "geometry": { "type": "Point", "coordinates": [-74.186606193999978, 41.32788759500005] } },
        { "type": "Feature", "properties": { "RTEID": 254, "StreetName": "Main Street", "UtlPoleID": "No Tag", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{46AB5C78-86E2-4983-ADB3-BB800FE44B84}", "latlng": "-74.187225997,41.329631944", "POINT_X": -74.187225997, "POINT_Y": 41.329631944 }, "geometry": { "type": "Point", "coordinates": [-74.187225996999985, 41.329631944000027] } },
        { "type": "Feature", "properties": { "RTEID": 255, "StreetName": "Main Street", "UtlPoleID": "53998/48434", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{FC63B964-6DA9-4794-9E0D-6AC8A2ABAD01}", "latlng": "-74.187231265,41.3294428360001", "POINT_X": -74.187231264999994, "POINT_Y": 41.329442835999998 }, "geometry": { "type": "Point", "coordinates": [-74.18723126499998, 41.329442836000055] } },
        { "type": "Feature", "properties": { "RTEID": 256, "StreetName": "Main Street", "UtlPoleID": "No Tag", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{7B78CADC-1045-436F-9286-6FEE4293FB2A}", "latlng": "-74.187216639,41.329229447", "POINT_X": -74.187216639, "POINT_Y": 41.329229447000003 }, "geometry": { "type": "Point", "coordinates": [-74.187216638999985, 41.329229447000046] } },
        { "type": "Feature", "properties": { "RTEID": 257, "StreetName": "Main Street", "UtlPoleID": "Xxxxx/48411", "SurvDate": "2022-02-14", "LumType": "Cobrahead", "GlobalID": "{B60AF654-1B8B-452F-9B69-FD7B93E53728}", "latlng": "-74.18722144,41.328841303", "POINT_X": -74.18722144, "POINT_Y": 41.328841302999997 }, "geometry": { "type": "Point", "coordinates": [-74.187221439999973, 41.328841303000047] } },
        { "type": "Feature", "properties": { "RTEID": 258, "StreetName": "Spring Street", "UtlPoleID": "54011/XXXXX", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{224212C2-53F5-4322-B559-08585B0A0E1D}", "latlng": "-74.1868555569999,41.3285860890001", "POINT_X": -74.186855557000001, "POINT_Y": 41.328586088999998 }, "geometry": { "type": "Point", "coordinates": [-74.186855556999944, 41.328586089000055] } },
        { "type": "Feature", "properties": { "RTEID": 259, "StreetName": "Spring Street", "UtlPoleID": "54024/48396", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{86A06171-0DC8-462F-B5C9-268CC90FFD6D}", "latlng": "-74.186415317,41.3284607580001", "POINT_X": -74.186415316999998, "POINT_Y": 41.328460758 }, "geometry": { "type": "Point", "coordinates": [-74.186415316999955, 41.328460758000062] } },
        { "type": "Feature", "properties": { "RTEID": 305, "StreetName": "Stage Rd", "UtlPoleID": "54005/48329", "SurvDate": "2022-02-15", "LumType": "Cobrahead", "GlobalID": "{31A4D458-7218-4466-B527-48444B968A3C}", "latlng": "-74.1870882599999,41.3266899760001", "POINT_X": -74.18708826, "POINT_Y": 41.326689975999997 }, "geometry": { "type": "Point", "coordinates": [-74.187088259999939, 41.326689976000068] } },
        { "type": "Feature", "properties": { "RTEID": 306, "StreetName": "City Hall", "UtlPoleID": "53987/48390", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{B6426829-AC59-42A6-864B-E7842EA88BCF}", "latlng": "-74.1876288719999,41.328243942", "POINT_X": -74.187628872000005, "POINT_Y": 41.328243942 }, "geometry": { "type": "Point", "coordinates": [-74.187628871999948, 41.328243942000029] } },
        { "type": "Feature", "properties": { "RTEID": 307, "StreetName": "City Hall", "UtlPoleID": "53989/Xxxxx", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{5D5AE646-4270-4642-AF8A-971C1363D9D8}", "latlng": "-74.1876326939999,41.328083636", "POINT_X": -74.187632694000001, "POINT_Y": 41.328083636000002 }, "geometry": { "type": "Point", "coordinates": [-74.187632693999944, 41.328083636000031] } },
        { "type": "Feature", "properties": { "RTEID": 308, "StreetName": "City Hall", "UtlPoleID": "Xxxxx/48382", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{BE8DEE28-A4CA-4689-A32F-955608B96C4F}", "latlng": "-74.187986887,41.3280229800001", "POINT_X": -74.187986886999994, "POINT_Y": 41.32802298 }, "geometry": { "type": "Point", "coordinates": [-74.187986886999965, 41.328022980000071] } },
        { "type": "Feature", "properties": { "RTEID": 309, "StreetName": "City Hall", "UtlPoleID": "53965/48381", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{F7A662CC-792D-4AF8-8139-123D1CF0BA4C}", "latlng": "-74.188500501,41.328006235", "POINT_X": -74.188500500999993, "POINT_Y": 41.328006234999997 }, "geometry": { "type": "Point", "coordinates": [-74.188500500999965, 41.328006235000032] } },
        { "type": "Feature", "properties": { "RTEID": 310, "StreetName": "City Hall", "UtlPoleID": "53961/48393", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{DB4EF06F-7BC2-4E9C-A747-0ACD94F14F9D}", "latlng": "-74.188532156,41.3282772630001", "POINT_X": -74.188532155999994, "POINT_Y": 41.328277262999997 }, "geometry": { "type": "Point", "coordinates": [-74.188532155999951, 41.328277263000075] } },
        { "type": "Feature", "properties": { "RTEID": 311, "StreetName": "Lake St", "UtlPoleID": "No Tag", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{4E6D5E0D-CDBD-408A-B34D-838CA34DB21B}", "latlng": "-74.1877536069999,41.328637642", "POINT_X": -74.187753607000005, "POINT_Y": 41.328637641999997 }, "geometry": { "type": "Point", "coordinates": [-74.187753606999934, 41.328637642000047] } },
        { "type": "Feature", "properties": { "RTEID": 315, "StreetName": "Millpond Parkway", "UtlPoleID": "No Tag", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{BD0C3614-B61B-4911-B972-C04F82A00667}", "latlng": "-74.189197932,41.3287071890001", "POINT_X": -74.189197932, "POINT_Y": 41.328707189 }, "geometry": { "type": "Point", "coordinates": [-74.189197931999956, 41.328707189000056] } },
        { "type": "Feature", "properties": { "RTEID": 316, "StreetName": "Millpond Parkway", "UtlPoleID": "53942/48432", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{59CC510D-7157-4B57-8E8F-BF5BD7305888}", "latlng": "-74.1893859099999,41.3293426550001", "POINT_X": -74.18938591, "POINT_Y": 41.329342654999998 }, "geometry": { "type": "Point", "coordinates": [-74.189385909999942, 41.329342655000062] } },
        { "type": "Feature", "properties": { "RTEID": 317, "StreetName": "Millpond Parkway", "UtlPoleID": "53942/48432", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{C6F2E742-3069-4102-98C7-4DE866C13E04}", "latlng": "-74.1893898989999,41.329374767", "POINT_X": -74.189389899000005, "POINT_Y": 41.329374766999997 }, "geometry": { "type": "Point", "coordinates": [-74.189389898999934, 41.329374767000047] } },
        { "type": "Feature", "properties": { "RTEID": 318, "StreetName": "Millpond Parkway", "UtlPoleID": "53944/48420", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{3F41CA60-B870-4E87-9396-8C932D673C4A}", "latlng": "-74.1893747189999,41.3290398410001", "POINT_X": -74.189374719, "POINT_Y": 41.329039840999997 }, "geometry": { "type": "Point", "coordinates": [-74.189374718999943, 41.329039841000053] } },
        { "type": "Feature", "properties": { "RTEID": 319, "StreetName": "Commuter Parking Lot", "UtlPoleID": "53952/48418", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{09BCA63D-2916-4A32-9DA3-5F5E034B29DA}", "latlng": "-74.188980876,41.3290894510001", "POINT_X": -74.188980876000002, "POINT_Y": 41.329089451000002 }, "geometry": { "type": "Point", "coordinates": [-74.18898087599996, 41.329089451000073] } },
        { "type": "Feature", "properties": { "RTEID": 325, "StreetName": "Millpond Parkway", "UtlPoleID": "53949", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{42F1760D-EAF2-4CB0-9414-89A6865CB691}", "latlng": "-74.189094145,41.3293598000001", "POINT_X": -74.189094145, "POINT_Y": 41.3293598 }, "geometry": { "type": "Point", "coordinates": [-74.189094144999956, 41.329359800000077] } },
        { "type": "Feature", "properties": { "RTEID": 326, "StreetName": "Commuter Parking Lot", "UtlPoleID": "53964/48434", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{1F0EDC92-F82C-449F-8CF4-1AD3E1D89CC3}", "latlng": "-74.188591096,41.3294883990001", "POINT_X": -74.188591095999996, "POINT_Y": 41.329488399 }, "geometry": { "type": "Point", "coordinates": [-74.188591095999982, 41.32948839900007] } },
        { "type": "Feature", "properties": { "RTEID": 327, "StreetName": "Lake St", "UtlPoleID": "53930/48394", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{B33B71B2-6A77-4F48-8BC6-AB4DEA642896}", "latlng": "-74.189874856,41.3283002250001", "POINT_X": -74.189874856000003, "POINT_Y": 41.328300225 }, "geometry": { "type": "Point", "coordinates": [-74.18987485599996, 41.328300225000078] } },
        { "type": "Feature", "properties": { "RTEID": 352, "StreetName": "State Route 17M", "UtlPoleID": "53883/48425", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{4FF987FB-DCF8-425E-B6E4-F77FCFCAE4E4}", "latlng": "-74.191525417,41.3292982", "POINT_X": -74.191525416999994, "POINT_Y": 41.3292982 }, "geometry": { "type": "Point", "coordinates": [-74.19152541699998, 41.329298200000039] } },
        { "type": "Feature", "properties": { "RTEID": 437, "StreetName": "Lake St", "UtlPoleID": "53971/48414", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{F97ED9FE-EAAF-4D88-AE4F-9B977058581A}", "latlng": "-74.188279401,41.3289427870001", "POINT_X": -74.188279401000003, "POINT_Y": 41.328942787000003 }, "geometry": { "type": "Point", "coordinates": [-74.188279400999988, 41.328942787000074] } },
        { "type": "Feature", "properties": { "RTEID": 438, "StreetName": "Commuter Parking Lot", "UtlPoleID": "53971/48414", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{9AF490EC-4087-42AA-9A45-6B3242097CC2}", "latlng": "-74.1882668069999,41.3289607400001", "POINT_X": -74.188266807000005, "POINT_Y": 41.32896074 }, "geometry": { "type": "Point", "coordinates": [-74.188266806999934, 41.32896074000007] } },
        { "type": "Feature", "properties": { "RTEID": 456, "StreetName": "Lakes Rd", "UtlPoleID": "53884/XXXXX", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{77ECC858-C51B-48C5-9455-E07A319A272E}", "latlng": "-74.1914650909999,41.327719416", "POINT_X": -74.191465090999998, "POINT_Y": 41.327719416000001 }, "geometry": { "type": "Point", "coordinates": [-74.191465090999941, 41.327719416000036] } },
        { "type": "Feature", "properties": { "RTEID": 457, "StreetName": "Lakes Rd", "UtlPoleID": "53900/48380", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{38CBFFA1-170C-42D0-9CE1-4FDE978A709F}", "latlng": "-74.1908027009999,41.32793916", "POINT_X": -74.190802700999996, "POINT_Y": 41.32793916 }, "geometry": { "type": "Point", "coordinates": [-74.190802700999939, 41.327939160000028] } },
        { "type": "Feature", "properties": { "RTEID": 458, "StreetName": "Lake St", "UtlPoleID": "53909/48384", "SurvDate": "2022-02-15", "LumType": "Cobrahead", "GlobalID": "{AB3F89CA-A7B9-4215-BBFA-B83A6723C41F}", "latlng": "-74.190572435,41.32805697", "POINT_X": -74.190572435000007, "POINT_Y": 41.32805697 }, "geometry": { "type": "Point", "coordinates": [-74.190572434999979, 41.328056970000034] } },
        { "type": "Feature", "properties": { "RTEID": 459, "StreetName": "Lake St", "UtlPoleID": "53909/48384", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{F8BF3BAE-8F9C-4282-8A88-418F84636A6E}", "latlng": "-74.190563302,41.32805855", "POINT_X": -74.190563302000001, "POINT_Y": 41.32805855 }, "geometry": { "type": "Point", "coordinates": [-74.190563301999987, 41.328058550000037] } },
        { "type": "Feature", "properties": { "RTEID": 460, "StreetName": "Lake St", "UtlPoleID": "53920/48389", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{A75D0CCD-2D64-4862-9DC5-49B9C2F8A590}", "latlng": "-74.190237532,41.32816258", "POINT_X": -74.190237531999998, "POINT_Y": 41.32816258 }, "geometry": { "type": "Point", "coordinates": [-74.190237531999969, 41.328162580000026] } },
        { "type": "Feature", "properties": { "RTEID": 461, "StreetName": "Lake St", "UtlPoleID": "53938/48398", "SurvDate": "2022-02-15", "LumType": "Cobrahead", "GlobalID": "{D344FA4A-545C-457A-A6D3-461E3858D4D7}", "latlng": "-74.1894716899999,41.3284201220001", "POINT_X": -74.18947169, "POINT_Y": 41.328420121999997 }, "geometry": { "type": "Point", "coordinates": [-74.189471689999948, 41.328420122000068] } },
        { "type": "Feature", "properties": { "RTEID": 462, "StreetName": "Lake St", "UtlPoleID": "53930/48394", "SurvDate": "2022-02-15", "LumType": "Cobrahead", "GlobalID": "{2697B30B-413D-4196-B5B8-90F26722227F}", "latlng": "-74.189886856,41.328318219", "POINT_X": -74.189886856000001, "POINT_Y": 41.328318219000003 }, "geometry": { "type": "Point", "coordinates": [-74.189886855999987, 41.328318219000039] } },
        { "type": "Feature", "properties": { "RTEID": 463, "StreetName": "Lake St", "UtlPoleID": "No Tag", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{8406108A-365D-4CD1-A9A7-D79993C25E45}", "latlng": "-74.1891269989999,41.3285622490001", "POINT_X": -74.189126998999996, "POINT_Y": 41.328562249000001 }, "geometry": { "type": "Point", "coordinates": [-74.189126998999939, 41.328562249000072] } },
        { "type": "Feature", "properties": { "RTEID": 464, "StreetName": "Millpond Parkway", "UtlPoleID": "53944/48420", "SurvDate": "2022-02-15", "LumType": "Cobrahead", "GlobalID": "{A776466E-3C54-464F-9469-5B468D80F068}", "latlng": "-74.18938874,41.329031043", "POINT_X": -74.18938874, "POINT_Y": 41.329031043000001 }, "geometry": { "type": "Point", "coordinates": [-74.18938873999997, 41.329031043000043] } },
        { "type": "Feature", "properties": { "RTEID": 465, "StreetName": "Millpond Parkway", "UtlPoleID": "53942/48432", "SurvDate": "2022-02-15", "LumType": "Cobrahead", "GlobalID": "{25E7A4F5-2BC6-4007-9A18-D3C784034FC3}", "latlng": "-74.189420392,41.329360159", "POINT_X": -74.189420392000002, "POINT_Y": 41.329360158999997 }, "geometry": { "type": "Point", "coordinates": [-74.189420391999988, 41.329360159000032] } },
        { "type": "Feature", "properties": { "RTEID": 485, "StreetName": "State Route 17M", "UtlPoleID": "53883/48425", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{136CBD29-1A37-4314-823C-64680B68BD46}", "latlng": "-74.191500019,41.329311439", "POINT_X": -74.191500019000003, "POINT_Y": 41.329311439000001 }, "geometry": { "type": "Point", "coordinates": [-74.191500018999989, 41.329311439000037] } },
        { "type": "Feature", "properties": { "RTEID": 486, "StreetName": "State Route 17M", "UtlPoleID": "53896/48404", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{843CA5DD-D65A-4C0F-B10E-A79D4CE0659E}", "latlng": "-74.1910762539999,41.328593605", "POINT_X": -74.191076253999995, "POINT_Y": 41.328593605000002 }, "geometry": { "type": "Point", "coordinates": [-74.191076253999938, 41.328593605000037] } },
        { "type": "Feature", "properties": { "RTEID": 545, "StreetName": "Lake St", "UtlPoleID": "53909/48384", "SurvDate": "2022-02-15", "LumType": "Cobrahead", "GlobalID": "{06B9F0D1-4A53-4DA4-93AF-7D9CE9114546}", "latlng": "-74.1905699439999,41.328063656", "POINT_X": -74.190569944000003, "POINT_Y": 41.328063655999998 }, "geometry": { "type": "Point", "coordinates": [-74.190569943999947, 41.32806365600004] } },
        { "type": "Feature", "properties": { "RTEID": 546, "StreetName": "State Route 17M", "UtlPoleID": "53915/48371", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{D3739A38-B3A0-4CE2-8886-D7707BDD04DF}", "latlng": "-74.190393735,41.3277277380001", "POINT_X": -74.190393735000001, "POINT_Y": 41.327727738 }, "geometry": { "type": "Point", "coordinates": [-74.190393734999986, 41.327727738000078] } },
        { "type": "Feature", "properties": { "RTEID": 547, "StreetName": "State Route 17M", "UtlPoleID": "53908/48367", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{645E8186-ADBB-48D3-ADFC-FC2350BC536D}", "latlng": "-74.190558403,41.3275867770001", "POINT_X": -74.190558402999997, "POINT_Y": 41.327586777 }, "geometry": { "type": "Point", "coordinates": [-74.190558402999955, 41.327586777000079] } },
        { "type": "Feature", "properties": { "RTEID": 550, "StreetName": "Millpond Parkway", "UtlPoleID": "No Tag", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{64C5C184-8B88-44D1-89D8-4E05161EDDCD}", "latlng": "-74.189020167,41.328333957", "POINT_X": -74.189020166999995, "POINT_Y": 41.328333956999998 }, "geometry": { "type": "Point", "coordinates": [-74.189020166999967, 41.328333957000041] } },
        { "type": "Feature", "properties": { "RTEID": 551, "StreetName": "Millpond Parkway", "UtlPoleID": "No Tag", "SurvDate": "2022-02-15", "LumType": "Cobrahead", "GlobalID": "{2C191A5D-6377-4C37-BE82-AD94450C72F6}", "latlng": "-74.188948309,41.328193653", "POINT_X": -74.188948308999997, "POINT_Y": 41.328193653 }, "geometry": { "type": "Point", "coordinates": [-74.188948308999954, 41.328193653000028] } },
        { "type": "Feature", "properties": { "RTEID": 552, "StreetName": "Millpond Parkway", "UtlPoleID": "No Tag", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{7B0B8264-CDF9-4AE1-8235-5329E10E02BD}", "latlng": "-74.1888773869999,41.327995931", "POINT_X": -74.188877387000005, "POINT_Y": 41.327995930999997 }, "geometry": { "type": "Point", "coordinates": [-74.188877386999934, 41.327995931000032] } },
        { "type": "Feature", "properties": { "RTEID": 553, "StreetName": "Millpond Parkway", "UtlPoleID": "No Tag", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{1A974526-DC80-445F-A57C-AB10B94FC94E}", "latlng": "-74.1887387949999,41.3277156190001", "POINT_X": -74.188738795000006, "POINT_Y": 41.327715619000003 }, "geometry": { "type": "Point", "coordinates": [-74.188738794999949, 41.32771561900006] } },
        { "type": "Feature", "properties": { "RTEID": 554, "StreetName": "Millpond Parkway", "UtlPoleID": "53959/48375", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{0F809E8D-E78A-489B-9029-445B55EC63C0}", "latlng": "-74.188780315,41.327855807", "POINT_X": -74.188780315000002, "POINT_Y": 41.327855807 }, "geometry": { "type": "Point", "coordinates": [-74.188780314999974, 41.327855807000049] } },
        { "type": "Feature", "properties": { "RTEID": 555, "StreetName": "Millpond Parkway", "UtlPoleID": "53959/48375", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{AEF615D9-9AF6-4713-BE38-D82795AE1838}", "latlng": "-74.18875322,41.327864833", "POINT_X": -74.18875322, "POINT_Y": 41.327864833 }, "geometry": { "type": "Point", "coordinates": [-74.188753219999967, 41.327864833000035] } },
        { "type": "Feature", "properties": { "RTEID": 556, "StreetName": "Millpond Parkway", "UtlPoleID": "53964/48362", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{E87E399E-1781-4098-98B4-533F66C0DADE}", "latlng": "-74.188616242,41.3274939660001", "POINT_X": -74.188616241999995, "POINT_Y": 41.327493966 }, "geometry": { "type": "Point", "coordinates": [-74.188616241999966, 41.327493966000077] } },
        { "type": "Feature", "properties": { "RTEID": 557, "StreetName": "Millpond Parkway", "UtlPoleID": "53967/48354", "SurvDate": "2022-02-15", "LumType": "Cobrahead", "GlobalID": "{F3059EBC-FB6E-490F-A5F5-52719B539159}", "latlng": "-74.188511762,41.3273282230001", "POINT_X": -74.188511762000005, "POINT_Y": 41.327328223000002 }, "geometry": { "type": "Point", "coordinates": [-74.188511761999962, 41.327328223000052] } },
        { "type": "Feature", "properties": { "RTEID": 558, "StreetName": "Millpond Parkway", "UtlPoleID": "53969/48347", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{3A0180AC-24D4-450E-BACA-448768B8256D}", "latlng": "-74.188397579,41.3270983240001", "POINT_X": -74.188397578999997, "POINT_Y": 41.327098323999998 }, "geometry": { "type": "Point", "coordinates": [-74.188397578999968, 41.327098324000076] } },
        { "type": "Feature", "properties": { "RTEID": 570, "StreetName": "Smithfield Ct", "UtlPoleID": "54002/48350", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{6A5B79B6-BDDE-4AEC-B944-94FE5321E53E}", "latlng": "-74.1871170909999,41.327173782", "POINT_X": -74.187117091000005, "POINT_Y": 41.327173782000003 }, "geometry": { "type": "Point", "coordinates": [-74.187117090999948, 41.327173782000045] } },
        { "type": "Feature", "properties": { "RTEID": 571, "StreetName": "Stage Rd", "UtlPoleID": "54001/48362", "SurvDate": "2022-02-15", "LumType": "Cobrahead", "GlobalID": "{B4B4337E-F6E4-4F9F-8863-D10C64034C85}", "latlng": "-74.1871646,41.3275059090001", "POINT_X": -74.1871646, "POINT_Y": 41.327505909000003 }, "geometry": { "type": "Point", "coordinates": [-74.18716459999996, 41.327505909000081] } },
        { "type": "Feature", "properties": { "RTEID": 572, "StreetName": "Stage Rd", "UtlPoleID": "No Tag", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{D238655D-54C4-48A8-8B14-40A974EF1DA8}", "latlng": "-74.1871346039999,41.3277093240001", "POINT_X": -74.187134603999993, "POINT_Y": 41.327709323999997 }, "geometry": { "type": "Point", "coordinates": [-74.187134603999937, 41.327709324000068] } },
        { "type": "Feature", "properties": { "RTEID": 573, "StreetName": "Stage Rd", "UtlPoleID": "No Tag", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{473EFA0A-C829-488F-9F64-4A9FB77FD652}", "latlng": "-74.1870846639999,41.32792894", "POINT_X": -74.187084663999997, "POINT_Y": 41.32792894 }, "geometry": { "type": "Point", "coordinates": [-74.18708466399994, 41.327928940000049] } },
        { "type": "Feature", "properties": { "RTEID": 574, "StreetName": "Stage Rd", "UtlPoleID": "No Tag", "SurvDate": "2022-02-15", "LumType": "Cobrahead", "GlobalID": "{2562859A-1719-4D27-BB92-AA887BD0843E}", "latlng": "-74.187142228,41.328025268", "POINT_X": -74.187142228, "POINT_Y": 41.328025267999998 }, "geometry": { "type": "Point", "coordinates": [-74.187142227999971, 41.328025268000033] } },
        { "type": "Feature", "properties": { "RTEID": 575, "StreetName": "Stage Rd", "UtlPoleID": "No Tag", "SurvDate": "2022-02-15", "LumType": "Cobrahead", "GlobalID": "{B4E0F900-CD7A-4250-BEE6-10F27FF5639A}", "latlng": "-74.187096891,41.328099926", "POINT_X": -74.187096890999996, "POINT_Y": 41.328099926 }, "geometry": { "type": "Point", "coordinates": [-74.187096890999953, 41.32809992600005] } },
        { "type": "Feature", "properties": { "RTEID": 576, "StreetName": "Stage Rd", "UtlPoleID": "No Tag", "SurvDate": "2022-02-15", "LumType": "Cobrahead", "GlobalID": "{E8A7DE7C-F15C-48B0-81A5-44EAA8BAD6F5}", "latlng": "-74.187158252,41.3282725290001", "POINT_X": -74.187158252000003, "POINT_Y": 41.328272529000003 }, "geometry": { "type": "Point", "coordinates": [-74.187158251999961, 41.32827252900006] } },
        { "type": "Feature", "properties": { "RTEID": 592, "StreetName": "Lake St", "UtlPoleID": "No tag", "SurvDate": "2022-02-15", "LumType": "Cobrahead", "GlobalID": "{C516FB61-D980-4A11-AFA9-EB7461E5C90E}", "latlng": "-74.187360826,41.328528197", "POINT_X": -74.187360826000003, "POINT_Y": 41.328528196999997 }, "geometry": { "type": "Point", "coordinates": [-74.187360825999974, 41.328528197000026] } },
        { "type": "Feature", "properties": { "RTEID": 593, "StreetName": "Lake St", "UtlPoleID": "No Tag", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{7C051478-D81F-4B0A-84F3-0D591649C4C7}", "latlng": "-74.188053053,41.328625867", "POINT_X": -74.188053053000004, "POINT_Y": 41.328625867 }, "geometry": { "type": "Point", "coordinates": [-74.188053052999976, 41.328625867000028] } },
        { "type": "Feature", "properties": { "RTEID": 594, "StreetName": "Lake St", "UtlPoleID": "No Tag", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{C2B3A033-07EC-4C4D-94AD-B3BB0C84F196}", "latlng": "-74.1878706809999,41.3285785150001", "POINT_X": -74.187870681000007, "POINT_Y": 41.328578514999997 }, "geometry": { "type": "Point", "coordinates": [-74.187870680999936, 41.328578515000061] } },
        { "type": "Feature", "properties": { "RTEID": 595, "StreetName": "Lake St", "UtlPoleID": "No tag", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{DD39A149-01B0-428C-A464-526A2EAC4E1B}", "latlng": "-74.1875470649999,41.3286367900001", "POINT_X": -74.187547065000004, "POINT_Y": 41.32863679 }, "geometry": { "type": "Point", "coordinates": [-74.187547064999933, 41.328636790000076] } },
        { "type": "Feature", "properties": { "RTEID": 596, "StreetName": "Lake St", "UtlPoleID": "No tag", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{80F6B0B3-46B6-4BF2-99AA-5B880039BD84}", "latlng": "-74.1873932629999,41.3286937060001", "POINT_X": -74.187393263000004, "POINT_Y": 41.328693706000003 }, "geometry": { "type": "Point", "coordinates": [-74.187393262999933, 41.328693706000081] } },
        { "type": "Feature", "properties": { "RTEID": 597, "StreetName": "Main Street", "UtlPoleID": "No tag", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{0FDBCE17-8728-43CD-A04C-3E2BF30F397B}", "latlng": "-74.187228385,41.3288782670001", "POINT_X": -74.187228384999997, "POINT_Y": 41.328878267 }, "geometry": { "type": "Point", "coordinates": [-74.187228384999969, 41.32887826700005] } },
        { "type": "Feature", "properties": { "RTEID": 598, "StreetName": "Lake St", "UtlPoleID": "No Tag", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{EE75E171-2CB7-426D-879D-AAF2363277A9}", "latlng": "-74.1876097959999,41.328571389", "POINT_X": -74.187609796000004, "POINT_Y": 41.328571388999997 }, "geometry": { "type": "Point", "coordinates": [-74.187609795999947, 41.328571389000047] } },
        { "type": "Feature", "properties": { "RTEID": 599, "StreetName": "Lake St", "UtlPoleID": "No Tag", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{B1024ED8-B0B2-4EB0-BABF-F3920A56CF25}", "latlng": "-74.188218391,41.3285728540001", "POINT_X": -74.188218391000007, "POINT_Y": 41.328572854000001 }, "geometry": { "type": "Point", "coordinates": [-74.188218390999964, 41.328572854000072] } },
        { "type": "Feature", "properties": { "RTEID": 600, "StreetName": "Lake St", "UtlPoleID": "No Tag", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{158CAA6F-DCCB-4BE7-BE1A-DA10ECA60D90}", "latlng": "-74.188607296,41.328528664", "POINT_X": -74.188607296000001, "POINT_Y": 41.328528663999997 }, "geometry": { "type": "Point", "coordinates": [-74.188607295999986, 41.328528664000032] } },
        { "type": "Feature", "properties": { "RTEID": 601, "StreetName": "Lake St", "UtlPoleID": "No Tag", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{94231DD6-1ED6-43AF-B310-5491FAFB8770}", "latlng": "-74.1889243539999,41.328485717", "POINT_X": -74.188924353999994, "POINT_Y": 41.328485717 }, "geometry": { "type": "Point", "coordinates": [-74.188924353999937, 41.328485717000035] } },
        { "type": "Feature", "properties": { "RTEID": 602, "StreetName": "Lake St", "UtlPoleID": "No Tag", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{70C33C13-10D3-4F81-99DF-4A15CF1E86D0}", "latlng": "-74.188825282,41.3285582390001", "POINT_X": -74.188825281999996, "POINT_Y": 41.328558239000003 }, "geometry": { "type": "Point", "coordinates": [-74.188825281999982, 41.328558239000074] } },
        { "type": "Feature", "properties": { "RTEID": 603, "StreetName": "Lake St", "UtlPoleID": "No Tag", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{277770AE-F948-46C2-961C-BA2BBED8FC0F}", "latlng": "-74.188392563,41.328600313", "POINT_X": -74.188392562999994, "POINT_Y": 41.328600313000003 }, "geometry": { "type": "Point", "coordinates": [-74.188392562999979, 41.328600313000038] } },
        { "type": "Feature", "properties": { "RTEID": 624, "StreetName": "State Route 17M", "UtlPoleID": "53921/48349", "SurvDate": "2022-02-16", "LumType": "Cobrahead", "GlobalID": "{758FC949-2DEC-474F-91AA-7EB8A9C52A17}", "latlng": "-74.190168418,41.3270912520001", "POINT_X": -74.190168418, "POINT_Y": 41.327091252000002 }, "geometry": { "type": "Point", "coordinates": [-74.190168417999985, 41.327091252000059] } }
    ]
};

var s_light_style = {
    radius: 7,
    fillColor: "#00C5FF",
    color: "#175DDC",
    weight: 2,
    opacity: 1,
    fillOpacity: 0.7
};

L.geoJSON(streetlights, {
    onEachFeature: function(feature, layer) {
        var popupContent = '<h5 class = "text-primary">Streetlight Information</h5>' +
            '<div class="container"><table class="table table-striped">' +
            '</td></tr>' + '<tr><td> RTE ID </td><td>' + feature.properties.RTEID +
            '</td></tr>' + '<tr><td> Fixture Type </td><td>' + feature.properties.LumType +
            '</td></tr>' + '<tr><td> Smart Node ID </td><td>' + feature.properties.UtlPoleID +
            '</td></tr>' + '<tr><td> Street Name </td><td>' + feature.properties.StreetName +
            '</td></tr>' + '<tr><td> X </td><td>' + feature.properties.POINT_X +
            '</td></tr>' + '<tr><td> Y </td><td>' + feature.properties.POINT_Y +
            '</td></tr>' + '<tr><td> Installation Date </td><td>' + feature.properties.SurvDate + '</td></tr>';
        layer.bindPopup(popupContent)
    },

    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, s_light_style);

    }

}).addTo(map);


// // map.on("click", function(e) {
// //     var mp = new L.Marker([e.latlng.lat, e.latlng.lng]).addTo(map);
// //     alert(mp.getLatLng());
// });