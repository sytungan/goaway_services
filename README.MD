
# Go A Way

This api services for our GoAway mobile application.

## Indices

* [API](#ungrouped)

  * [DeleteSign](#1-deletesign)
  * [GetAllSign](#2-getallsign)
  * [GetDirection](#3-getdirection)
  * [GetDistance](#4-getdistance)
  * [GetMenu](#5-getmenu)
  * [GetMyLocation](#6-getmylocation)
  * [GetSign](#7-getsign)
  * [NearbySearch](#8-nearbysearch)
  * [SearchPlace](#9-searchplace)
  * [SearchPlace v2](#10-searchplace-v2)
  * [SetSign](#11-setsign)
  * [UpdateSign](#12-updatesign)
  * [postLocation](#13-postlocation)


--------


## Ungrouped



### 1. DeleteSign


Delete a traffic sign


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: https://goawayy.herokuapp.com/sign/:signId
```



***URL variables:***

| Key | Value | Description |
| --- | ------|-------------|
| signId |  | ID of traffic sign |



***More example Requests/Responses:***


##### I. Example Request: DeleteSign



##### I. Example Response: DeleteSign
```js
{
    "msg": "deleted"
}
```


***Status Code:*** 200

<br>



### 2. GetAllSign


Get all sign information from server


***Endpoint:***

```bash
Method: GET
Type: 
URL: https://goawayy.herokuapp.com/sign/all
```



***More example Requests/Responses:***


##### I. Example Request: GetAllSign



##### I. Example Response: GetAllSign
```js
[
    {
        "_id": "60cf656b0be9080015a8bdfc",
        "signId": "1",
        "signIcon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/1.jpg?alt=media&token=3f5288f6-8a15-40af-b734-4da97fa7301f",
        "signName": "Đường cấm",
        "signDescription": "Đường cấm tất cả các loại phương tiện (cơ giới và thô sơ) đi lại cả hai hướng, trừ các xe được ưu tiên theo quy định",
        "signType": "Biển báo cấm",
        "__v": 0
    },
    {
        "_id": "60cf65a90be9080015a8bdfd",
        "signId": "2",
        "signIcon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/2.jpg?alt=media&token=a4ef45df-867f-4c6d-8823-91952480e660",
        "signName": "Cấm đi ngược chiều",
        "signDescription": "Đường cấm tất cả các loại xe (cơ giới và thô sơ) đi vào theo chiều đặt biển, trừ các xe được ưu tiên theo quy định",
        "signType": "Biển báo cấm",
        "__v": 0
    },
    {
        "_id": "60cf65d90be9080015a8bdfe",
        "signId": "3",
        "signIcon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/3.jpg?alt=media&token=96f987b8-8634-438d-965f-3a95b8250190",
        "signName": "Cấm ô tô",
        "signDescription": "Đường cấm tất cả các loại xe cơ giới kể cả môtô 3 bánh có thùng đi qua, trừ môtô hai bánh, xe gắn máy và các xe được ưu tiên theo quy định",
        "signType": "Biển báo cấm",
        "__v": 0
    },
    {
        "_id": "60cf66150be9080015a8bdff",
        "signId": "4",
        "signIcon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/4.jpg?alt=media&token=788fb9ac-4ec3-4ace-9962-c533afaf0ed4",
        "signName": "Cấm rẽ trái",
        "signDescription": "Cấm các loại xe (cơ giới và thô sơ) rẽ sang phía trái ở những vị trí đường giao nhau trừ các xe được ưu tiên theo quy định.",
        "signType": "Biển báo cấm",
        "__v": 0
    },
    {
        "_id": "60cf664b0be9080015a8be00",
        "signId": "5",
        "signIcon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/5.jpg?alt=media&token=92dc250c-541e-4acd-9bcc-921dd8469157",
        "signName": "Cấm rẽ phải",
        "signDescription": "Cấm các loại xe (cơ giới và thô sơ) rẽ sang phía phải ở những vị trí đường giao nhau trừ các xe được ưu tiên theo quy định",
        "signType": "Biển báo cấm",
        "__v": 0
    },
    {
        "_id": "60cf66840be9080015a8be01",
        "signId": "6",
        "signIcon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/6.jpg?alt=media&token=3a0a1e10-354e-43c6-849b-9a0431d3534a",
        "signName": "Cấm mô tô",
        "signDescription": "Đường cấm tất cả các loại môtô đi qua, trừ các xe môtô được ưu tiên theo quy định",
        "signType": "Biển báo cấm",
        "__v": 0
    },
    {
        "_id": "60cf66b20be9080015a8be02",
        "signId": "7",
        "signIcon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/7.jpg?alt=media&token=7ebbdd91-aec7-4b1f-877c-ff1e818c5067",
        "signName": "Cấm ô tô và mô tô",
        "signDescription": "Đường cấm tất cả các loại xe cơ giới và môtô đi qua trừ xe gắn máy và các xe được ưu tiên theo quy định",
        "signType": "Biển báo cấm",
        "__v": 0
    },
    {
        "_id": "60cf66ef0be9080015a8be03",
        "signId": "8",
        "signIcon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/8.jpg?alt=media&token=f511d3c5-b07d-40fc-b7cc-1e772281a9dc",
        "signName": "Cấm ô tô tải",
        "signDescription": "Đường cấm tất cả các loại ôtô chở hàng có trọng tải từ 1,5 tấn trở lên trừ các xe được ưu tiên theo quy định. Biển có hiệu lực cấm đối với cả máy kéo và các xe máy chuyên dùng.",
        "signType": "Biển báo cấm",
        "__v": 0
    },
    {
        "_id": "60cf671e0be9080015a8be04",
        "signId": "9",
        "signIcon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/9.jpg?alt=media&token=736c265c-0554-4719-9a27-ce5d21cc94d4",
        "signName": "Cấm quay xe",
        "signDescription": "Cấm các loại xe cơ giới và thô sơ quay đầu (theo kiểu chữ U) trừ các xe được ưu tiên theo quy định. Biển này không cấm rẽ trái",
        "signType": "Biển báo cấm",
        "__v": 0
    },
    {
        "_id": "60cf674d0be9080015a8be05",
        "signId": "10",
        "signIcon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/10.jpg?alt=media&token=ea32f24a-741b-4f69-b9f6-fdda9646f95b",
        "signName": "Cấm đi xe đạp",
        "signDescription": "Đường cấm xe đạp đi qua. Biển không có giá trị cấm những người dắt xe đạp",
        "signType": "Biển báo cấm",
        "__v": 0
    },
    {
        "_id": "60cf677a0be9080015a8be06",
        "signId": "11",
        "signIcon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/11.jpg?alt=media&token=50f61dab-775b-4492-aae7-dcf6e2710bf1",
        "signName": "Cấm xe gắn máy",
        "signDescription": "Đường cấm xe gắn máy đi qua. Biển không có giá trị đối với xe đạp",
        "signType": "Biển báo cấm",
        "__v": 0
    },
    {
        "_id": "60cf67c50be9080015a8be07",
        "signId": "12",
        "signIcon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/12.jpg?alt=media&token=fd3ed55c-6441-4d9c-8fcf-fe3cd19d7a56",
        "signName": "Cấm xe ba bánh có động cơ",
        "signDescription": "Đường cấm xe ba bánh loại có động cơ như xe lôi máy…",
        "signType": "Biển báo cấm",
        "__v": 0
    },
    {
        "_id": "60cf67ee0be9080015a8be08",
        "signId": "13",
        "signIcon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/13.jpg?alt=media&token=47d931b6-f10c-43d4-832a-7a86cde8ef73",
        "signName": "Cấm người đi bộ",
        "signDescription": "Đường cấm người đi bộ qua lại",
        "signType": "Biển báo cấm",
        "__v": 0
    },
    {
        "_id": "60cf68180be9080015a8be09",
        "signId": "14",
        "signIcon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/14.jpg?alt=media&token=7fb712e1-0c37-40c6-8c11-eed2fb55464a",
        "signName": "Tốc độ tối đa cho phép",
        "signDescription": "Tốc độ tối đa cho phép các xe cơ giới chạy, trừ các xe được ưu tiên theo quy định",
        "signType": "Biển báo cấm",
        "__v": 0
    },
    {
        "_id": "60cf684e0be9080015a8be0a",
        "signId": "15",
        "signIcon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/15.jpg?alt=media&token=cf942ff3-ebfa-4e22-85b5-d99d21e695a4",
        "signName": "Hạn chế chiều ngang",
        "signDescription": "Hạn chế chiều ngang của xe, cấm các xe (cơ giới và thô sơ) kể cả các xe được ưu tiên theo quy định có chiều ngang (kể cả xe và hàng hóa) vượt quá trị số ghi trên biển không được đi qua",
        "signType": "Biển báo cấm",
        "__v": 0
    },
    {
        "_id": "60cf68790be9080015a8be0b",
        "signId": "16",
        "signIcon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/16.jpg?alt=media&token=441a6d6a-47b6-4426-8142-ef7af988026f",
        "signName": "Hạn chế chiều dài ôtô",
        "signDescription": "Đường cấm các loại xe (cơ giới và thô sơ) kể cả các xe được ưu tiên theo quy định, có độ dài toàn bộ kể cả xe và hàng lớn hơn trị số ghi trên biển đi qua",
        "signType": "Biển báo cấm",
        "__v": 0
    },
    {
        "_id": "60cf69be0be9080015a8be0c",
        "signId": "17",
        "signIcon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/17.jpg?alt=media&token=2e8b7296-89f1-4bf7-b6e9-f7538df40e3f",
        "signName": "Cự ly tối thiểu giữa hai xe",
        "signDescription": "Xe ôtô phải đi cách nhau một khoảng tối thiểu tính bằng mét",
        "signType": "Biển báo cấm",
        "__v": 0
    },
    {
        "_id": "60cf69f60be9080015a8be0d",
        "signId": "18",
        "signIcon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/18.jpg?alt=media&token=4497d738-8168-48a1-86e9-10276875c65b",
        "signName": "Dừng lại",
        "signDescription": "Buộc các loại xe cơ giới và thô sơ kể cả xe được ưu tiên theo quy định dừng lại trước biển hoặc trước vạch ngang đường và chỉ được phép đi khi thấy các tín hiệu (do người điều khiển giao thông hoặc đèn cờ) cho phép đi.",
        "signType": "Biển báo cấm",
        "__v": 0
    },
    {
        "_id": "60cf6a320be9080015a8be0e",
        "signId": "19",
        "signIcon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/19.jpg?alt=media&token=8a80a3e8-0129-4465-9989-f3ec8d5f7631",
        "signName": "Cấm dừng xe và đỗ xe",
        "signDescription": "Nơi cấm dừng xe và đỗ xe. Biển có hiệu lực cấm các loại xe cơ giới dừng và đỗ ở phía đường có đặt biển trừ các xe được ưu tiên theo quy định",
        "signType": "Biển báo cấm",
        "__v": 0
    },
    {
        "_id": "60cf6a600be9080015a8be0f",
        "signId": "20",
        "signIcon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/20.jpg?alt=media&token=579b8be6-5d1d-4e9f-8682-e84662aa6818",
        "signName": "Cấm đỗ xe",
        "signDescription": "Nơi cấm đỗ xe trừ các xe được ưu tiên theo quy định",
        "signType": "Biển báo cấm",
        "__v": 0
    },
    {
        "_id": "60cf6e8f0be9080015a8be10",
        "signId": "21",
        "signIcon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/21.jpg?alt=media&token=a826944a-f08a-490d-8e98-dad20d05473d",
        "signName": "Đường giao nhau cùng cấp",
        "signDescription": "Báo trước sắp đến nơi giao nhau cùng mức của các tuyến đường cùng cấp (không có đường nào ưu tiên)  trên cùng một mặt bằng",
        "signType": "Biển báo nguy hiểm",
        "__v": 0
    },
    {
        "_id": "60cf6f4c0be9080015a8be11",
        "signId": "22",
        "signIcon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/22.jpg?alt=media&token=99304d3e-e9f8-4be5-b2a5-1e5fe8d0b845",
        "signName": "Giao nhau với đường không ưu tiên",
        "signDescription": "Báo trước sắp đến nơi giao nhau với đường không ưu tiên",
        "signType": "Biển báo nguy hiểm",
        "__v": 0
    },
    {
        "_id": "60cf6f990be9080015a8be12",
        "signId": "23",
        "signIcon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/23.jpg?alt=media&token=cbbbb4d4-56de-498b-85b4-a93c38545b22",
        "signName": "Giao nhau với đường ưu tiên",
        "signDescription": "Báo trước sắp đến nơi giao nhau với đường ưu tiên",
        "signType": "Biển báo nguy hiểm",
        "__v": 0
    },
    {
        "_id": "60cf704d0be9080015a8be13",
        "signId": "24",
        "signIcon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/24.jpg?alt=media&token=1f5bfab8-8250-4608-93bd-6b5c5ae0704c",
        "signName": "Giao nhau có tín hiệu đèn",
        "signDescription": "Báo trước nơi giao nhau có điều khiển giao thông bằng tín hiệu đèn",
        "signType": "Biển báo nguy hiểm",
        "__v": 0
    },
    {
        "_id": "60cf707c0be9080015a8be14",
        "signId": "25",
        "signIcon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/25.jpg?alt=media&token=44467da7-5a9c-4246-b7c7-1cf0b48a1bbe",
        "signName": "Giao nhau với đường sắt có rào chắn",
        "signDescription": "Báo trước sắp đến chỗ giao nhau giữa đường bộ và đường sắt có rào chắn kín hay rào chắn nửa kín và có nhân viên ngành đường sắt điều khiển giao thông",
        "signType": "Biển báo nguy hiểm",
        "__v": 0
    },
    {
        "_id": "60cf70bf0be9080015a8be15",
        "signId": "26",
        "signIcon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/26.jpg?alt=media&token=3db5df56-381f-4500-927c-7457e40dcca1",
        "signName": "Trẻ em",
        "signDescription": "Báo trước là gần đến đoạn đường thường có trẻ em đi ngang qua hoặc tụ tập trên đường như ở vườn trẻ, trường học, câu lạc bộ",
        "signType": "Biển báo nguy hiểm",
        "__v": 0
    },
    {
        "_id": "60cf716c0be9080015a8be16",
        "signId": "27",
        "signIcon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/27.jpg?alt=media&token=64b476a4-1279-458f-b4b0-cf75dd4855ab",
        "signName": "Công trường",
        "signDescription": "Báo trước gần tới đoạn đường đang tiến hành thi công sửa chữa, cải tạo, nâng cấp có người và máy móc đang làm việc trên mặt đường",
        "signType": "Biển báo nguy hiểm",
        "__v": 0
    },
    {
        "_id": "60cf71a60be9080015a8be17",
        "signId": "28",
        "signIcon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/28.jpg?alt=media&token=fdc5a9a1-1467-402f-a646-bb554db2240f",
        "signName": "Đường đôi",
        "signDescription": "Báo trước sắp đến đoạn đường có chiều đi và chiều về phân biệt bằng dải phân cách cứng",
        "signType": "Biển báo nguy hiểm",
        "__v": 0
    },
    {
        "_id": "60cf71e80be9080015a8be18",
        "signId": "29",
        "signIcon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/29.jpg?alt=media&token=bd9f62ba-8be9-4c6a-8d30-5ab6896e3a38",
        "signName": "Kết thúc đường đôi",
        "signDescription": "Báo trước sắp kết thúc đoạn đường có chiều đi và chiều về phân biệt bằng dải phân cách cứng",
        "signType": "Biển báo nguy hiểm",
        "__v": 0
    },
    {
        "_id": "60cf72130be9080015a8be19",
        "signId": "30",
        "signIcon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/30.jpg?alt=media&token=964945e7-14ee-4028-9edc-e74bac639793",
        "signName": "Đi chậm",
        "signDescription": "Nhắc lái xe giảm tốc độ đi chậm khi đến đoạn đường yêu cầu đi chậm",
        "signType": "Biển báo nguy hiểm",
        "__v": 0
    },
    {
        "_id": "60cf72440be9080015a8be1a",
        "signId": "31",
        "signIcon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/31.jpg?alt=media&token=90d05c37-76d9-41e2-b336-32d8bcb08213",
        "signName": "Chú ý xe đỗ",
        "signDescription": "Cảnh báo có các loại xe ôtô, máy kéo, rơ-moóc hoặc sơ-mi rơ-moóc được kéo bởi xe ôtô hoặc ôtô đầu kéo, xe máy chuyên dùng đang đỗ chiếm một phần đường xe chạy",
        "signType": "Biển báo nguy hiểm",
        "__v": 0
    },
    {
        "_id": "60cf728e0be9080015a8be1b",
        "signId": "32",
        "signIcon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/32.jpg?alt=media&token=9d73826b-5953-4b70-afb9-2a15ca3f86c3",
        "signName": "Chú ý chướng ngại vật",
        "signDescription": "Báo trước cho lái xe biết phía trước có chướng ngại vật, xe cần giảm tốc độ và đi theo chỉ dẫn trên biển báo",
        "signType": "Biển báo nguy hiểm",
        "__v": 0
    },
    {
        "_id": "60cf72da0be9080015a8be1c",
        "signId": "33",
        "signIcon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/33.jpg?alt=media&token=0b77bd1f-b8be-4b45-9a09-1a60b8eae647",
        "signName": "Đường dành cho xe thô sơ",
        "signDescription": "Biển có hiệu lực bắt buộc các loại xe thô sơ (kể cả xe của người tàn tật) và người đi bộ phải dùng đường dành riêng này để đi và cấm các xe cơ giới kể cả xe gắn máy, các xe được ưu tiên theo quy định đi vào đường đã đặt biển này",
        "signType": "Biển báo hiệu lệnh",
        "__v": 0
    },
    {
        "_id": "60cf73250be9080015a8be1d",
        "signId": "34",
        "signIcon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/34.jpg?alt=media&token=5844d0de-c0de-4f8b-a5f0-1dfccdc30ae0",
        "signName": "Đường dành cho người đi bộ",
        "signDescription": "Các loại xe cơ giới và thô sơ (trừ xe đạp và xe lăn dành cho người tàn tật), kể cả các xe được ưu tiên theo quy định không được phép đi vào trên đường đã đặt biển này",
        "signType": "Biển báo hiệu lệnh",
        "__v": 0
    },
    {
        "_id": "60cf73b80be9080015a8be1e",
        "signId": "35",
        "signIcon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/35.jpg?alt=media&token=f433003f-8d3b-4fb4-8cec-9f1f37c96825",
        "signName": "Tốc độ tối thiểu cho phép",
        "signDescription": "Biển có hiệu lực bắt buộc các loại xe cơ giới vận hành với tốc độ không nhỏ hơn trị số ghi trên biển trong điều kiện giao thông thuận lợi và an toàn.",
        "signType": "Biển báo hiệu lệnh",
        "__v": 0
    },
    {
        "_id": "60cf73e00be9080015a8be1f",
        "signId": "36",
        "signIcon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/36.jpg?alt=media&token=299302a0-f06a-49b3-9178-49a322e1bbbc",
        "signName": "Hết tốc độ tối thiểu",
        "signDescription": "Đến hết đoạn đường tốc độ tối thiểu, đặt biển số R.307 \"Hết hạn chế tốc độ tối thiểu\" (hoặc đặt biển số DP.135 \"Hết tất cả các lệnh cấm\", nếu đồng thời có nhiều biển cấm khác hết tác dụng).",
        "signType": "Biển báo hiệu lệnh",
        "__v": 0
    },
    {
        "_id": "60cf74050be9080015a8be20",
        "signId": "37",
        "signIcon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/37.jpg?alt=media&token=87dd3494-1599-4eb5-b35d-670f0db8a147",
        "signName": "Ấn còi",
        "signDescription": "Biểu thị xe cộ đi đến vị trí đặt biển đó thì phải ấn còi.",
        "signType": "Biển báo hiệu lệnh",
        "__v": 0
    },
    {
        "_id": "60d6e4e2cb7c690015bfa988",
        "signId": "38",
        "signIcon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/38.jpg?alt=media&token=0f167a7c-74c2-4464-bbd4-22b8c5547c56",
        "signName": "Đường dành cho ô tô",
        "signDescription": "Biển báo đường dành cho ô tô là để chỉ dẫn bắt đầu đường dành cho các loại ôtô đi lại, các loại phương tiện giao thông khác không được phép đi vào đoạn đường có dặt biển này.",
        "signType": "Biển báo hiệu lệnh",
        "__v": 0
    }
]
```


***Status Code:*** 200

<br>



### 3. GetDirection


- An API provides to view a direction on maps from place A to place B if you have place_id of 2 side
- You will receive an list of some roads index


***Endpoint:***

```bash
Method: GET
Type: 
URL: https://goawayy.herokuapp.com/direction/
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| idSrc | ChIJ685WIFYViEgRHlHvBbiD5nE | Source place identifier (place_id) |
| idDes | ChIJA01I-8YVhkgRGJb0fW4UX7Y | Destination place identifier (place_id) |



***More example Requests/Responses:***


##### I. Example Request: GetDirection



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| idSrc | ChIJ685WIFYViEgRHlHvBbiD5nE | Source place identifier (place_id) |
| idDes | ChIJA01I-8YVhkgRGJb0fW4UX7Y | Destination place identifier (place_id) |



##### I. Example Response: GetDirection
```js
[
    {
        "bounds": {
            "northeast": {
                "lat": 56.39568509999999,
                "lng": -3.4308177
            },
            "southwest": {
                "lat": 55.8644561,
                "lng": -4.2553782
            }
        },
        "copyrights": "Map data ©2021",
        "legs": [
            {
                "distance": {
                    "text": "95.0 km",
                    "value": 95049
                },
                "duration": {
                    "text": "1 hour 9 mins",
                    "value": 4127
                },
                "end_address": "Perth, UK",
                "end_location": {
                    "lat": 56.3951612,
                    "lng": -3.4308177
                },
                "start_address": "Glasgow, UK",
                "start_location": {
                    "lat": 55.8644561,
                    "lng": -4.251976
                },
                "steps": [
                    {
                        "distance": {
                            "text": "45 m",
                            "value": 45
                        },
                        "duration": {
                            "text": "1 min",
                            "value": 16
                        },
                        "end_location": {
                            "lat": 55.8648485,
                            "lng": -4.251833299999999
                        },
                        "html_instructions": "Head <b>north</b> toward <b>Killermont St</b>",
                        "polyline": {
                            "points": "{_~sIzm}XmA]"
                        },
                        "start_location": {
                            "lat": 55.8644561,
                            "lng": -4.251976
                        },
                        "travel_mode": "DRIVING"
                    },
                    {
                        "distance": {
                            "text": "0.1 km",
                            "value": 129
                        },
                        "duration": {
                            "text": "1 min",
                            "value": 47
                        },
                        "end_location": {
                            "lat": 55.8650673,
                            "lng": -4.2538636
                        },
                        "html_instructions": "Turn <b>left</b> onto <b>Killermont St</b>",
                        "maneuver": "turn-left",
                        "polyline": {
                            "points": "ib~sI|l}XK`C[pFC`@"
                        },
                        "start_location": {
                            "lat": 55.8648485,
                            "lng": -4.251833299999999
                        },
                        "travel_mode": "DRIVING"
                    },
                    {
                        "distance": {
                            "text": "45 m",
                            "value": 45
                        },
                        "duration": {
                            "text": "1 min",
                            "value": 19
                        },
                        "end_location": {
                            "lat": 55.8654603,
                            "lng": -4.2537145
                        },
                        "html_instructions": "Turn <b>right</b> onto <b>W Nile St</b>",
                        "maneuver": "turn-right",
                        "polyline": {
                            "points": "uc~sIry}XmA]"
                        },
                        "start_location": {
                            "lat": 55.8650673,
                            "lng": -4.2538636
                        },
                        "travel_mode": "DRIVING"
                    },
                    {
                        "distance": {
                            "text": "0.2 km",
                            "value": 194
                        },
                        "duration": {
                            "text": "1 min",
                            "value": 57
                        },
                        "end_location": {
                            "lat": 55.8671409,
                            "lng": -4.254473000000001
                        },
                        "html_instructions": "Continue onto <b>Port Dundas Rd</b>",
                        "polyline": {
                            "points": "cf~sItx}XI?GAC?C?C?E?C?EDC@C@IBIBC@KD_@RSN]NYNWDe@TkA^"
                        },
                        "start_location": {
                            "lat": 55.8654603,
                            "lng": -4.2537145
                        },
                        "travel_mode": "DRIVING"
                    },
                    {
                        "distance": {
                            "text": "0.3 km",
                            "value": 319
                        },
                        "duration": {
                            "text": "1 min",
                            "value": 71
                        },
                        "end_location": {
                            "lat": 55.8699612,
                            "lng": -4.2553782
                        },
                        "html_instructions": "Continue straight to stay on <b>Port Dundas Rd</b>",
                        "maneuver": "straight",
                        "polyline": {
                            "points": "sp~sIl}}XSFo@?oBl@kAX_ARu@Pc@JiB`@KDc@J"
                        },
                        "start_location": {
                            "lat": 55.8671409,
                            "lng": -4.254473000000001
                        },
                        "travel_mode": "DRIVING"
                    },
                    {
                        "distance": {
                            "text": "0.2 km",
                            "value": 240
                        },
                        "duration": {
                            "text": "1 min",
                            "value": 48
                        },
                        "end_location": {
                            "lat": 55.86986650000001,
                            "lng": -4.2515561
                        },
                        "html_instructions": "Turn <b>right</b> onto <b>Dobbie's Loan</b>/<wbr/><b>A804</b>",
                        "maneuver": "turn-right",
                        "polyline": {
                            "points": "gb_tIbc~XAeBAgB?q@?i@?A?e@@_A?Y@W@q@@m@?[@S@U@E@IBS@O?Q?kA"
                        },
                        "start_location": {
                            "lat": 55.8699612,
                            "lng": -4.2553782
                        },
                        "travel_mode": "DRIVING"
                    },
                    {
                        "distance": {
                            "text": "47 m",
                            "value": 47
                        },
                        "duration": {
                            "text": "1 min",
                            "value": 13
                        },
                        "end_location": {
                            "lat": 55.870284,
                            "lng": -4.2514099
                        },
                        "html_instructions": "Turn <b>left</b> onto <b>Craighall Rd</b>/<wbr/><b>A879</b>",
                        "maneuver": "turn-left",
                        "polyline": {
                            "points": "ua_tIfk}XKCIEGECAICe@G"
                        },
                        "start_location": {
                            "lat": 55.86986650000001,
                            "lng": -4.2515561
                        },
                        "travel_mode": "DRIVING"
                    },
                    {
                        "distance": {
                            "text": "0.3 km",
                            "value": 307
                        },
                        "duration": {
                            "text": "1 min",
                            "value": 34
                        },
                        "end_location": {
                            "lat": 55.8699086,
                            "lng": -4.2467988
                        },
                        "html_instructions": "Slight <b>right</b>",
                        "maneuver": "turn-slight-right",
                        "polyline": {
                            "points": "gd_tIhj}XGCEAECCECEAGAGDo@DU@KDY?G@I?I@K@WB]DiAF{A?u@?CDgADu@@IFqA?AJsBB_@@S?O@MBKDKHO"
                        },
                        "start_location": {
                            "lat": 55.870284,
                            "lng": -4.2514099
                        },
                        "travel_mode": "DRIVING"
                    },
                    {
                        "distance": {
                            "text": "2.6 km",
                            "value": 2650
                        },
                        "duration": {
                            "text": "2 mins",
                            "value": 110
                        },
                        "end_location": {
                            "lat": 55.86863409999999,
                            "lng": -4.2065372
                        },
                        "html_instructions": "Merge onto <b>M8</b>",
                        "maneuver": "merge",
                        "polyline": {
                            "points": "}a_tInm|XZiG?IBg@Be@BWDy@?AF_ADw@Dy@F{@FiAB[Bg@XoEJeCJqAHkADg@Fs@Hw@Ju@Jy@@IHi@Lq@TkARw@Rq@Lg@Rm@Ng@JWHW@GPk@Ts@Z_AHYTo@Pk@b@sAx@iCt@kCF[FYF[Jo@Fe@@CB[Fe@BU@U@KBY@K@W@IBc@F_BBy@Bi@@g@Bk@B}@By@@cBJ_K@oIEuIEoBEw@GoAI{AMiBQ}Bm@cHMcBIqAIqAGwACmACgAA?E}BEeCGgCAo@Ck@IkBI}AIgAEg@YgC_@qCCS[cC_A_HGi@u@kFi@wDIs@"
                        },
                        "start_location": {
                            "lat": 55.8699086,
                            "lng": -4.2467988
                        },
                        "travel_mode": "DRIVING"
                    },
                    {
                        "distance": {
                            "text": "0.8 km",
                            "value": 850
                        },
                        "duration": {
                            "text": "1 min",
                            "value": 35
                        },
                        "end_location": {
                            "lat": 55.8742169,
                            "lng": -4.1986629
                        },
                        "html_instructions": "At junction <b>13</b>, take the <b>M80</b> exit to <b>Stirling</b>/<wbr/><b>Kincardine Br</b>",
                        "maneuver": "ramp-left",
                        "polyline": {
                            "points": "}y~sIzqtXWe@CEOu@_@yBe@yBiBcIg@wBa@aBWcAQe@CMEIOc@Wq@EKMWKSKSIOOUKSW]Y_@W[SSUUe@_@WSa@UYMUKa@MYIQEICQEc@IUCKCWCa@G{Cg@"
                        },
                        "start_location": {
                            "lat": 55.86863409999999,
                            "lng": -4.2065372
                        },
                        "travel_mode": "DRIVING"
                    },
                    {
                        "distance": {
                            "text": "34.0 km",
                            "value": 33982
                        },
                        "duration": {
                            "text": "21 mins",
                            "value": 1239
                        },
                        "end_location": {
                            "lat": 56.0858293,
                            "lng": -3.9425926
                        },
                        "html_instructions": "Continue onto <b>M80</b>",
                        "polyline": {
                            "points": "{|_tIr`sXu@I]Gm@IsASA?_@Gk@GE?{AMa@CoAEi@Au@A}@?o@@c@AmAGCA_@Ce@K_@KUKQKKGMI[Sk@k@c@e@SYQ[OYSa@Wk@Sm@Qm@Oi@Oq@Ga@COGc@Ku@MoAGu@KoAOiCEy@GoAKqAMqAGu@Ku@Ge@Ii@EYIg@Kc@G[Mq@YiAQm@GYIWq@mBk@sAm@qAq@iAe@q@cAoAeAgAk@g@uAoAiD_DsAmA}@{@_DuC?AWUAAu@y@YY[]QSMO_@e@y@cAY_@[c@s@cAa@o@[c@Ye@Yc@e@y@Q[q@oAa@y@i@eA]s@e@aAk@sAy@iBk@yAe@qAISWw@Yy@Sk@g@aBYaAgAyD_@}A]uACKg@}BAEi@iC[gB[aBSkAU_B[sBIi@Is@OiAK{@AM?AOqASkBU}BCWOgBMeBG_AQiCOeCQ_CMiBSiCGm@UuCY{CQgBUyBQyA[uCa@kDa@wCe@iDi@yDm@yD[iBc@mCKi@[eBOs@_@oBg@aCo@kCQw@I[Os@a@yAQq@Ka@EOoAuEaAgDmDgM}AyF{DkNOg@YeAq@aCUy@[eAYeASo@cAoDmA_Ey@oCoA_E}@oC]cAuAcEeA}CCKoBwFWq@k@aBa@cA}@eCk@yAuAuDIWq@iBm@}Aw@wBiCeHSi@CEuEcMsBwFuByFAAaAgC?AyAuDSg@{@wBs@eBsB_F}@qBO]GOiAeCkAmCaAqBeAyBc@_Aa@y@[m@a@{@Wk@Wg@Ui@Yo@_@w@Yq@i@qAc@gAQg@Uk@k@yASm@Um@Us@]aASm@So@KY[cA]iA[gAy@sC[mAQq@[kAWeAQs@Qw@o@sCWmAg@cCMu@Oy@SoAMw@Ko@M}@Ko@Kw@QwAOqASoBI}@QsBIoAEc@IoAOuCKiBGuAKwBImBIwACy@GaAIsBMmCKuBGuAGyAIwAEy@GwAGwAQiDSmEKwBSkEMuBE{@QgC[qD]iDUuBSoBMwAGg@Eo@KsAGw@KuBIwAE}ACk@Ai@Aa@A{@AsAAyA?i@?m@?y@@aABqBB{@B{@DwAHmB@KL_CHgAPqBRqBRqBRqBT}BFm@PoBLqB@WJeBFmAD_BBy@DwB@{A@}@?yA?sAAaBCu@CwAC}@C{@E}@A]Ew@IwAK}AKqAWkCK}@UqBQsACUGa@UeBOcAOw@Mw@UoASkAI_@Ou@UiAIYG]WgASw@Qm@Qq@I]Ss@YeAY_A[eAUo@KYAESi@Uq@Qe@KWSk@Yq@_@_AGMKWKU_@y@iA}B]m@e@{@Wg@U]c@u@OUWa@]g@[e@g@s@a@k@o@}@gCqDcAyAeA{Ac@o@KMaDsE{@oAoCyDGKW_@_AuAu@iAe@u@i@{@q@iAOWWe@e@w@e@{@Uc@OYYg@i@gAk@gA{@iBYm@o@uASg@m@uAUk@}@wBUm@M[q@gB_@eA_@cA_@gAa@iA]eA_@kA]iAq@yBGWi@kBYcAc@aBSw@m@}B?Ac@aBSo@Su@CI[gAGQk@kBQo@i@_B_@iAe@wA_@eAKUUo@_@cASo@Si@Yu@a@kAg@uAa@gAaBkEWq@_@_Au@iBm@yAaByDm@sAUi@a@{@Ui@Wq@Ug@Qa@s@eBm@wAc@aAWo@_@}@o@uAYm@CGc@aAO]y@eBc@{@Yk@y@eB{@aBkA}BQY}@cBWg@Ua@[g@m@gAQYyAgCu@oAIOoAwBq@mAa@u@{AuCKSq@sAc@_AqAuCKUiAeCiAaCk@oAu@aB{@kBsDcI{@oBqAqCqAuCo@sAgAaCa@aAQ]i@kAuAyCm@oA}@gB_AiBwAgC_AaBaAaB{AiCq@iAuBmDgByCYg@g@y@s@mAYg@aAaBuC{Ec@w@Yg@e@w@_AgBo@kAYk@Sc@]u@O]O[[u@a@aAeAqCa@gAg@yAo@oBaAiDc@cBa@_BMk@U_Ag@yB]cB[}AScAq@mDOw@Oy@g@cCkAeGgAcF_A}Dc@mBw@wCg@kBsAoE]kAg@aBg@yAgAcD[aAuAuDa@cAg@oAWo@mAwCs@_BeA}BkB_Eg@gAg@gA_@y@g@cAs@{AwA{Cy@iBg@cAi@mAQ[m@sAg@eAiB}DqEgKuAaD{@oBa@aAa@cAm@sAO]c@cAy@cBuAsC]o@m@aAe@s@e@m@i@m@_@]][c@Y[U]Qe@Ua@Oo@QEAs@Me@Ga@Ee@Go@Co@AaA?M?U@e@@gABK?[@iBDq@@A?Y@c@Bg@@yCJwAD_CH]@gABY@{@Dw@BU@wBF}AFy@Bg@A[A]?CA]A{@GWCWCo@Kw@QUGw@[o@_@g@[UQUQYWQOII]]QUSWMQQUU[[g@]m@Wi@[o@EKO]M[Qe@K[Si@Uw@[gAU}@S{@Qw@WoASaAS}@ScAUkAMs@}@oEc@uBYyAUkACIe@}Be@aCc@sBe@_COy@Q{@aAcFw@uDQ{@Qy@Ms@Oq@UoAUiAUgAUaAScAQw@Oq@U_AOq@Ss@Qu@YcA[iAc@_BUy@Su@U{@Ia@e@eBe@aB[iAEQUy@Qk@AG{@_DOg@]iAOe@Oe@Qe@[{@Sc@AE]s@OYOWMSS[i@q@q@s@][e@a@i@][O[Mg@Se@MOEWCCA]EWCg@?c@?o@Dm@BWDODk@PgAd@u@b@]Ve@\\y@j@e@^cAt@_BjAuElDqA`Ay@l@UNc@Xc@ZoAt@kAn@y@`@m@Vc@Ru@XuAd@gA\\uA^}@R[Fc@Fy@NqALc@Bm@HuFZeGV_DNU@W@cADeCLyDPe@Be@BqBHw@DkAHMBqBPuAL_ANkDf@c@HG@yBZ}AT}@JMBcBTcC^_C\\cALgARyAR{@NsARgANoALm@@e@@kAAm@CWCa@E]Gw@Mg@Mg@QmAc@s@]o@]YQcAs@m@i@g@c@]_@g@g@[_@c@c@eAiA]_@o@s@u@s@w@w@y@s@o@i@_Aw@aAq@kAu@iAq@sAq@cAe@iAc@{@]eA[eAYeAUoAUgAQw@Gm@Gw@EeAEkACs@Ai@@eADg@@u@Fi@De@DuARa@F[Fs@Ne@JiAZaAX_@La@Nw@ZaA`@u@\\w@b@yAv@sAp@qAn@_@T_Ad@C@}@b@oAp@sAp@iAj@gCpAkEzBiAj@mAl@gBv@s@Za@Nq@ViBf@iBf@w@L_@JWFgBT_ALs@FM@[BO@aAD}ADmA?aA?iAEeAG{AIwASgAOo@KcASa@KkA[gCu@s@U}@WgBc@eAQu@KwAQiAK]AG?]CUCw@Cy@EO?uA?w@?U?O?IAK?K?E?mAFMB]@O@s@H_AHcAPk@HoATQDsA\\mBh@eA^w@Xm@VqAj@oAn@eAh@aAl@c@Tq@d@k@b@q@f@i@`@iBxAq@n@i@f@q@r@a@`@}@`As@v@w@`AaApAw@bAU\\a@l@Y`@wA|BwAfCo@hAk@jAm@jAm@rAcA|BmA|Cq@hBSh@aApCiAdDSl@e@nAk@|A}AvDe@bAuA`DCFgBjDABoA`COXKNYh@[f@MTMRKNq@hAoApBYb@]f@[d@"
                        },
                        "start_location": {
                            "lat": 55.8742169,
                            "lng": -4.1986629
                        },
                        "travel_mode": "DRIVING"
                    },
                    {
                        "distance": {
                            "text": "9.8 km",
                            "value": 9816
                        },
                        "duration": {
                            "text": "6 mins",
                            "value": 356
                        },
                        "end_location": {
                            "lat": 56.1697511,
                            "lng": -3.9708727
                        },
                        "html_instructions": "Merge onto <b>M9</b>",
                        "maneuver": "merge",
                        "polyline": {
                            "points": "mgiuId`aWiB~Bg@p@eBtBa@d@y@|@aBdBqApA_@XaA~@OL_Av@oB~Ac@Z{@l@CBUNIF]Ri@^y@d@gAn@_CnAqAl@c@P_C`Aa@N[LgBr@uAf@cA`@kChAQFoCfAc@RqCfAe@Rc@PwDxAqEhBaA`@eC`AcBv@{@`@kAn@cB`As@d@k@`@w@j@cAx@QNg@`@w@p@g@f@UTWVk@l@[ZOPaAfAo@t@aBvBmA`BeBdCmG|ISX[b@_@h@mA|AY`@UXMNSVgBtBc@f@oAxASTIHi@l@a@`@}@`AyBtB_BzAa@\\_@\\o@h@{@r@SPEBWTe@\\_Ar@i@`@A?e@^i@^a@Vq@d@MHc@Xm@^k@\\mAr@mAn@e@VYNID{@b@_Bp@oAj@cA^q@TiA^w@Xc@NgA\\a@L]J{@Ts@Ry@PeAVE@]FE@k@JuATg@JmAPy@LiANeBPsAHcAFg@Ba@By@DM?e@@w@@i@@k@@eA?_BCw@AcCGaAEmAImAIiBK{BGeAEeBAw@?wA@kCHyAFw@B_ADk@BO@qAJiCVoBTgAH{ALoCR]BkAJ}BJ[@o@BcBDgAA_BAcAEgAGwAGm@E_BOu@IaAO_AQw@MaAU]Ks@SaAYw@Uw@Ww@Y{@[a@O_@OaAc@g@U]Q}@e@yAw@oAw@o@a@_Ao@s@g@kBgAu@e@kBaA_@Qm@Yw@[a@Oa@O_Bi@cAY}A_@u@QWGk@K_AMwAO}@Ii@EgAEs@Ew@A]As@?Y?m@@w@Bu@B_AFw@Fm@FgALE?]FI@OBUDyB\\iAVk@Lc@Lo@Ri@NqAf@iBv@i@Xs@\\uEbCKFkCtA{Ar@a@Ni@TyCdAa@Ns@Ri@Ni@L{@R_@HaBTkANmBRkBPyBV{C\\O@O@C@I@MFEBIFWZ"
                        },
                        "start_location": {
                            "lat": 56.0858293,
                            "lng": -3.9425926
                        },
                        "travel_mode": "DRIVING"
                    },
                    {
                        "distance": {
                            "text": "42.2 km",
                            "value": 42222
                        },
                        "duration": {
                            "text": "27 mins",
                            "value": 1614
                        },
                        "end_location": {
                            "lat": 56.3883659,
                            "lng": -3.4882247
                        },
                        "html_instructions": "At the roundabout, take the <b>2nd</b> exit onto <b>A9</b> heading to <b>Doune</b>",
                        "maneuver": "roundabout-left",
                        "polyline": {
                            "points": "}syuI|pfWIVITGLGJMJQHIBM@K@SAKGQKIIIIS?K?MBOFGD]Za@`@{B~B?@sDxD_IfIaAbA[\\{B~BeBdBu@x@_@^gDlDQP_@^_@^IH}BbCqApA_@\\_@^o@n@kClCKLcDjDeAfAa@`@_@\\sArAaAdAiBpBwAxAeAdAg@h@{@v@QLMJQNa@XCBeAn@YNi@ZYLo@Zo@TmA`@YJq@R]FeANi@Fq@Bu@BcAAs@Ai@ESCc@E]Eo@Is@MkBi@m@SUIKG_Bu@u@_@u@g@QMOIkA}@oBcBcCcC]a@SUcAsA_@m@a@o@k@mAaA_Cu@oB{@_Ca@kAEQMa@Su@GQ{@gDWqAS_AAEUkAOaASuAQ{AGq@Is@[uE]aFG_A?Ec@aF[mCg@qD[uBMy@CIKo@Y{AQ{@S}@UcA?Ao@eC_@sAYcAg@{AsAuDEIWo@Yq@u@eBeAyBg@mA_AwBACo@yAqBuEc@aAQ_@u@eBe@oAKWi@{ACGu@cC_AaDEUSu@WgA_@eBYwAYaBQ}@aAmGOy@YgBUwAWsAOw@e@sBWgAa@}A]oAQm@ACMc@GOWw@]cA_@aASi@a@_AWm@KUMWM[O[k@iA]s@}@kBO[c@y@o@qAcCwEa@y@mA_CsBcEoByDmCiFiBoDyEgJiA{BIOg@cAoB{Du@wAuBcEqB{D?AaE_Ik@iA[k@c@_AoEyIS]i@gAaBcDmFoK_@u@mAcCwAuC{AyCg@cAgBmDm@qAq@sAmCoF}@iBw@_BgBoDu@}AOYuC}F_BcD_AiBGKKUYk@w@}AUg@Yk@Ue@]s@u@wAiA}BCGkA_CaAoBeAsBkAaCYk@{@cBo@sAGMiEsIc@{@w@{A_DoG]q@uB{DyA}Ce@aAiAyBGKgAwBaAoBKSmAeCaCyEiBoDwDyHa@w@w@}AaEkIaA}Bg@wA[{@g@wAo@qBw@{C_@}Am@mCAIMm@[eBo@yD_@{C[yCO}AC_@G}@IeAMaBSuDOqEUqFAYK}CI}BQkEK_CE_AAMKsBMcBM{AQmBWaC]eCU}AQeAY}AeAyEk@sBYeAK_@_@gA]cA_CwGm@iB[aAk@iBk@uB]yAu@_DwAgGm@iCsBcJGUQw@Qu@{@qD{@yD_AaEeA_E_@qAiAmDi@wAi@qAk@wAaBcEcBeE}@sCm@cCKg@UiA_@uBKo@WiBOuAAKc@kFMkCKuBC_AEo@?OK{CGoBEs@Ck@OaDIuAUuCCQGk@Ek@UmBm@}Dg@iCa@oBoA_GMe@UaAwAwGSy@y@wDk@{Cs@oEQyAMy@KmAOqAGs@Q_CYaFWyGAg@SqFCe@OcEE{@MiDOsFIoE?UA}D?qC@[DwEFkD?CH{BDqAXsGTsG?EB_ADkC@u@@_AAmDAgDIwIA{AAgD?yC@qC@_ADoCJ}H@u@RaMDcC@_ANcI@_A@[BcBP_L@eB@_A@o@AqDCqCA_BGaBE_BE{@IsAK{AKwAS}B[oCOoAe@}Cg@yCq@{DgBaK{AsIuCoPuAaIMy@Y{As@gEMo@AIaAgFOy@CMo@wDIc@y@yEY}AIc@[{AGUQw@GUK_@Qu@EMa@}Ay@kC]aAUo@Uo@Wk@aAyBo@uAoBaE{AcD}@aCM[IUeAiDm@sBaAcEGYI]_@iBm@gD]eCMy@[_CEi@c@mEWmDm@mJk@yIe@aISuCGaAe@iIY}EY}EWsEKwAKgAIiA_@{C_@aCOs@UgAS{@_@sAc@sAi@sAAAWm@_@w@e@{@cA}A?AkA{Am@i@WWq@k@[U_@W]QkAk@aA[o@OcAU_@EgASsAQwBa@qB_@mAWw@SiDaAaC}@oB}@mAm@eCoAWOa@SYQy@i@q@i@_@[OMqBmBmAsAmA{As@cAAAqAoBg@eAa@}@_@{@a@cAe@iAaAyC_@mAUs@Us@W}@y@qCAAi@gB{@qCY_AuAsESq@aAoDMe@qBiHcAyDa@aBqAeFQu@Qs@AAQw@}@uDyAmGw@mDq@yCOy@I_@mA{FEQk@wCQy@Qw@Ow@qBsKqAqHa@}BuAiIGWeA}GcAaH[oBM{@MaAq@oE]qCM{@K{@[}B[_Ce@gDM{@AGg@iDO_AMu@[aBSkA[_BWkAi@mCI[k@gCw@cDq@kCeAqDs@aCcA}CiAeDuAyDgBmEoC_HyCmHsAcD}AuDi@qAq@}Aq@cB_DmHKUWo@wCwGs@wAqCaGMUAAMY_EsHCGuBwDm@eA[i@QYIMmBaD?A]g@[i@k@_AaCqDaAwAOU]e@mBoCEG{@iACCw@cA]c@[a@AAoBgCiC{CyBgCs@{@_@a@w@_AaAgAcBoBs@{@}@cA]a@]a@kAuAkAuA_@a@CCuAaBiB{Bm@w@CEuAiB{@oAgBqCc@q@gB{CiCcFQ_@eDsGgBeDWa@m@aAq@cAcAyAc@i@IKi@q@k@m@cCcCsAiAm@g@{@q@cAw@kAeAw@y@s@u@y@cAq@{@i@w@q@aAeA}A_BgCyBuDm@aAYi@]k@_BwCe@{@y@{Ao@qA{@aBSa@Ym@o@qA]s@kAiCq@wAsCyGw@oBOe@Ws@k@gB[_Ag@_BYaAa@}Aa@}AEMSw@Om@g@wBAIm@sC_A}ECUSiAKw@]wByAyKIo@AKYoBOcA]kBAGUmAIe@Mm@_@gBYkAI]GY[mAa@yAaAgDq@sBkAcDKUg@mA_@{@ISe@aA[q@IOq@uAGKSa@EIu@aBqAoCQ]Ym@aBmD[q@[s@Wi@o@_B}@gCe@uAK_@Qi@W_AUu@Ka@q@eCOo@I_@GWS{@i@iCUwAMo@QeAACKw@QiAWiB?CS_BKcAKw@KqACWEg@I}@AEGw@C[OyBCg@E_AAGEw@G}AKuCGcCAiAAYA_CAiD?aC?aCAaDCeCGeDEyBGqBIaBCk@OmCQyCMaBUsCOwA?GIu@Iq@OmAWmBOgAKs@M{@Kk@CMO{@Ow@?AOw@WmAKa@Qu@i@mBQo@Me@g@wAe@uA_A}Bw@cBi@eAc@{@y@wA{@oA_@g@m@s@]c@[_@_B_B_@_@GG{C{C_AeAs@}@UYGIQWIMu@eA_@k@KOQYw@sAYi@a@y@e@cAEIKUSc@Wm@_@_A[y@g@uA_@gAg@_BM_@_@qAg@oBSu@I_@aA{DSy@{@}CUu@Ss@K[Sq@{@}B]aA}A}Dq@eBWo@o@aB}@_Cw@sBUm@AAiAmCu@cBo@sAIOO[Ue@}@uAgAeBk@q@]c@y@y@_A_Ai@i@OOiEkDQMm@c@aAq@a@Yk@c@u@e@{@i@iAk@c@YaAg@KGgAq@uA_A}@q@q@i@kC}B_B{AaAaA_@_@SUgAoAIKSWOS}@iA[a@KO]e@i@w@mAkBW_@[i@QYGM[k@_@o@oAcCUc@Yk@Ym@OYIQ{BkFEKQc@a@gA_AcCs@uBKYOc@EOk@kBw@kCYcAI[IY_@wAaAeEa@eB?Ck@kC[_BUiAa@uBQy@Oy@O{@_@qBM{@Oy@gAsGIk@cAgGwCkQoBqLWaB_@yBi@_DsAcIsAcIeAqG_BsJa@aCgB}Ko@{DOy@gA}Go@yDY_BIc@q@wDo@yCGW_@yAUs@o@kBq@eBk@kAYk@i@_Au@iA{@kAOS]c@SUIM_@a@cAoAgAuAIK]e@GIa@m@o@cA_@q@u@uAi@kAi@kA_@aA_@}@Oc@_@iAQi@GSW{@c@_BYkA]wAGWKi@[_B_@sBg@{CMw@g@iDUcBUeBY_CYwCGa@MsA[sDAMOiBQwCSsDIyAIeBOwDSwFGkBEm@CSEUACi@oA"
                        },
                        "start_location": {
                            "lat": 56.1697511,
                            "lng": -3.9708727
                        },
                        "travel_mode": "DRIVING"
                    },
                    {
                        "distance": {
                            "text": "0.5 km",
                            "value": 463
                        },
                        "duration": {
                            "text": "1 min",
                            "value": 40
                        },
                        "end_location": {
                            "lat": 56.3885966,
                            "lng": -3.4811371
                        },
                        "html_instructions": "At the roundabout, take the <b>2nd</b> exit onto <b>A93</b>",
                        "maneuver": "roundabout-left",
                        "polyline": {
                            "points": "ijdwIjhhTQGECMKMQEMCKCMCMAOAY?Y?m@DsADcAHuB?IDaAH{B?OBk@BMDMAg@?aAEcL?CAOEk@Gy@"
                        },
                        "start_location": {
                            "lat": 56.3883659,
                            "lng": -3.4882247
                        },
                        "travel_mode": "DRIVING"
                    },
                    {
                        "distance": {
                            "text": "3.2 km",
                            "value": 3242
                        },
                        "duration": {
                            "text": "5 mins",
                            "value": 308
                        },
                        "end_location": {
                            "lat": 56.39545099999999,
                            "lng": -3.4388888
                        },
                        "html_instructions": "At the roundabout, take the <b>2nd</b> exit and stay on <b>A93</b>",
                        "maneuver": "roundabout-left",
                        "polyline": {
                            "points": "wkdwIb|fT?AAAACACAC?AAA?EAC?EAC?G?E?C?E@C?E?C@E?A@A@C@C@C@C?AVsAReAn@kHBUBg@LaCRuEP}D\\aIV_G?KXsFX_F@u@@S@{A@oDB_C@_@?Y?I?o@A_@A_AOwGIuI?CC_A?SAe@?e@?c@@c@@w@DkABwAAAAA?AAA?C?C?E@A?A@A@?@?\\}HBe@AAAA?CACAC?C@C?CBC?A@A@?A[?EAOAc@IwCEe@Ce@c@iDIo@_@kC?CSqAGUCOIYESGQAEK[KUUm@EIeAsBIOGKQ]ACW_@_@i@gAwAA?]_@k@q@WSMIMIKEUGC?kCs@c@MeAYwFyAkA[iAWWGYIa@MKCMEkAq@SMQMOOKKOQSWY_@Uc@Q_@KSMYQe@Oa@EMEQGWAMCIE[E_@AQAM?CAQ?Y?_@BoCBaB?C@[@]Dw@A?CAAAAEAEAC?E?I?C@E?C@C@C@A@ADAC]AO?QAE?M@S?m@DuBB_A@i@DoB@yA@g@@i@@a@?E?Q?EBaA?k@@aAHyFBiC?C"
                        },
                        "start_location": {
                            "lat": 56.3885966,
                            "lng": -3.4811371
                        },
                        "travel_mode": "DRIVING"
                    },
                    {
                        "distance": {
                            "text": "0.2 km",
                            "value": 169
                        },
                        "duration": {
                            "text": "1 min",
                            "value": 32
                        },
                        "end_location": {
                            "lat": 56.3953752,
                            "lng": -3.4361427
                        },
                        "html_instructions": "Continue onto <b>York Pl</b>",
                        "polyline": {
                            "points": "qvewI`t~SBeDHgJ?W"
                        },
                        "start_location": {
                            "lat": 56.39545099999999,
                            "lng": -3.4388888
                        },
                        "travel_mode": "DRIVING"
                    },
                    {
                        "distance": {
                            "text": "0.1 km",
                            "value": 109
                        },
                        "duration": {
                            "text": "1 min",
                            "value": 28
                        },
                        "end_location": {
                            "lat": 56.39531239999999,
                            "lng": -3.4343825
                        },
                        "html_instructions": "Continue onto <b>County Pl</b>",
                        "polyline": {
                            "points": "cvewIzb~SJyH@e@"
                        },
                        "start_location": {
                            "lat": 56.3953752,
                            "lng": -3.4361427
                        },
                        "travel_mode": "DRIVING"
                    },
                    {
                        "distance": {
                            "text": "0.2 km",
                            "value": 220
                        },
                        "duration": {
                            "text": "1 min",
                            "value": 60
                        },
                        "end_location": {
                            "lat": 56.3951612,
                            "lng": -3.4308177
                        },
                        "html_instructions": "Continue onto <b>South St</b>",
                        "polyline": {
                            "points": "uuewIzw}S@c@DyDHeEB}@FeF"
                        },
                        "start_location": {
                            "lat": 56.39531239999999,
                            "lng": -3.4343825
                        },
                        "travel_mode": "DRIVING"
                    }
                ],
                "traffic_speed_entry": [],
                "via_waypoint": []
            }
        ],
        "overview_polyline": {
            "points": "{_~sIzm}XmA]K`C_@rGcB_@i@L}CtAgNjD}D~@CiHFuGL{DyAa@KgBPcC`AyS|Bq_@pAgPxBqJhIqXfAcOVui@yBc]}B{h@qFka@eHsZ_F{KqEiDoDy@mLcB_Kk@iIe@aEiDsC{HqAkNmAiNeBeIuCkHaFsGuRoQiNaRyH_PcFaOyFoVqCeRyEyl@yE{a@oF_\\mYmfAyWqz@i`@qeAsf@gjAmLib@yCwPsBcS}Cco@iB{_@qCe[aA}_@t@cSjCuYh@wRWuQcBySwBuNiHqYqJuTqWy_@wSi\\iQmb@kLqa@eMy^aT{g@{Qs_@kUyb@_`@mz@oa@gs@kGwLoIaVqQiz@eKa]kNo\\e^ow@sIcRaH{HwGgByIEq[~@kKN_IsAwEoDmDqFsHgX}XqsA_Kw^qCwGgGaGkEeAiDH{CbAsQtM_M|HuMdE}[vBoRz@iRtBoe@pGwIq@mKeGoI}ImOyKsP{EsMYuJhAcLzD{g@nWkMtDuL~@kQgAyQuE}R_AoGb@qOxDyMjHsLrKoKzNsMbYiKxXiInP}FhJcPhReKlI{L~G{k@nUwRvJcI~Gi]hd@yI~JyM~L{RpMkLdF}KjDsIbByOzAaLHeU}@_S^mTjBeRX}O_ByLsDqLaG_OuIkMyD_NgA_KVcIfAyMpEcV~KsLdC}ObByAvBuBFs@ScAl@kZf[_MhMad@~d@aGxEwIlDwK\\iJoBuL_IyFoGoDkH_G_RaCiOsDsa@oCcOcGkRaLkWaGwOwEsSgFoY_DoKwPc^{n@onAabAipBciAk|BcHoVqD_YiEs{@cG}[kJoYyJsb@}FmV}DiLoHuRoBkJwBiX}@cTuDeXyJ}e@gCc^wAmd@Ve[bAa]M}g@xAgqAkAcVeOy}@sMst@wD}M_McY_GuTuBgNoBsW_Fmy@{C_UqG}N}GkGaGmBsHmAaLmCeMyFaJaHqEuF{DoHgHmT{HwWqUcaA{Kom@yGgd@eJek@sNif@qUik@qP}^mLeTkVk^m_@uc@oNkR{Ro^qMaOqMgMaNmTiKeS{LaZkEqO_Loq@aDgNcIuTmQs`@gI}\\cDw[eAqu@kBuZeBcNcBwIaHiSkIiMuLkMcLiT_Mac@_Tqh@cKeMkO}KiMcIgMeMuO{ViHaQ}E{O}Jef@w_@e~BeH_`@}GgOsHoJaGaKkEsLsEuTkDyXwBo^e@eLcAqBu@gBh@}c@]iDx@sE`Dam@~@u\\]eb@l@iReB}Ry@aE}CwGeFkGsXuHkEsDoByESkO@uBpAojATiN"
        },
        "summary": "M80 and A9",
        "warnings": [],
        "waypoint_order": []
    }
]
```


***Status Code:*** 200

<br>



### 4. GetDistance


- An API provides to view a distance on maps from place A to place B if you have locations of 2 side 
- You will receive distance of 2 point and time to driving for that


***Endpoint:***

```bash
Method: GET
Type: 
URL: https://goawayy.herokuapp.com/direction/distance
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| src | 40.6655101,-73.89188969999998 |  |
| des | 40.598566,-73.7527626 |  |



***More example Requests/Responses:***


##### I. Example Request: GetDistance



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| src | 40.6655101,-73.89188969999998 |  |
| des | 40.598566,-73.7527626 |  |



##### I. Example Response: GetDistance
```js
{
    "distance": "21.31 km",
    "duration": "35 mins"
}
```


***Status Code:*** 200

<br>



### 5. GetMenu



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://goawayy.herokuapp.com/menu
```



***More example Requests/Responses:***


##### I. Example Request: GetMenu



##### I. Example Response: GetMenu
```js
{
    "menu": {
        "Number 9": 1.99,
        "Number 9 Large": 2.99,
        "Number 6 with Extra Dip": 3.25,
        "Number 7": 3.99,
        "Number 45": 3.45
    }
}
```


***Status Code:*** 200

<br>



### 6. GetMyLocation


API to get your location GPS


***Endpoint:***

```bash
Method: GET
Type: 
URL: https://goawayy.herokuapp.com/geocoding
```



***More example Requests/Responses:***


##### I. Example Request: GetMyLocation



##### I. Example Response: GetMyLocation
```js
{
    "location": {
        "lat": 10.744092199999999,
        "lng": 106.924067
    },
    "accuracy": 1180
}
```


***Status Code:*** 200

<br>



### 7. GetSign


An API provides method to show detail of a traffic sign


***Endpoint:***

```bash
Method: GET
Type: 
URL: https://goawayy.herokuapp.com/sign/:id
```



***URL variables:***

| Key | Value | Description |
| --- | ------|-------------|
| id | _bbcdx | Id of traffic sign |



***More example Requests/Responses:***


##### I. Example Request: GetSign



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| id | _bbcdx | Id of traffic sign |



##### I. Example Response: GetSign
```js
{
    "signId": "_bbcdx",
    "signIcon": "bienbaocamdoxe.png",
    "signName": "Cấm đỗ xe",
    "signDescription": "Nghiêm cấm các phương tiện giao thông đỗ xe ở đoạn đường có lắp đặt biển báo này, ngoại trừ phương tiện ưu tiên."
}
```


***Status Code:*** 200

<br>



### 8. NearbySearch


Get some places nearly with your options


***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: https://goawayy.herokuapp.com/place/nearby
```



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| x | -33.8670522 | lat |
| y | 151.1957362 | lng |
| type | restaurant | Type of place you want to find |
| radius | 1000 | Radius of erea  |



***More example Requests/Responses:***


##### I. Example Request: NearbySearch



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| x | -33.8670522 | lat |
| y | 151.1957362 | lng |
| type | restaurant | Type of place you want to find |
| radius | 1000 | Radius of erea  |



##### I. Example Response: NearbySearch
```js
[
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": -33.8703417,
                "lng": 151.1979222
            },
            "viewport": {
                "northeast": {
                    "lat": -33.86900816970849,
                    "lng": 151.1991662802915
                },
                "southwest": {
                    "lat": -33.87170613029149,
                    "lng": 151.1964683197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "name": "The Little Snail Restaurant",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 900,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114727320476039103791\">The Little Snail Restaurant</a>"
                ],
                "photo_reference": "ATtYBwLy9tAjo2w3Lk21zybxRG1lDKNqxx3POuH5maZqnl3qOEIKz79XyyU3GNIDZCBhOx5TDS13592nOXWzf1xD_Tkd14YlwtyWvymmPGatWXDwXCJddYmw0vYc3MEoDm3c-ItjQrzTIrguxwbxJhqPXzHfhlvZ9CPwlJ30KfcBa7vSrHKT",
                "width": 1350
            }
        ],
        "place_id": "ChIJtwapWjeuEmsRcxV5JARHpSk",
        "plus_code": {
            "compound_code": "45HX+V5 Pyrmont NSW, Australia",
            "global_code": "4RRH45HX+V5"
        },
        "price_level": 2,
        "rating": 4.5,
        "reference": "ChIJtwapWjeuEmsRcxV5JARHpSk",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 1570,
        "vicinity": "3/50 Murray Street, Pyrmont"
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": -33.8666848,
                "lng": 151.2015819
            },
            "viewport": {
                "northeast": {
                    "lat": -33.86532001970851,
                    "lng": 151.2030454802915
                },
                "southwest": {
                    "lat": -33.8680179802915,
                    "lng": 151.2003475197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "name": "Steersons Steakhouse",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 1538,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/110384774118527817485\">Steersons Steakhouse</a>"
                ],
                "photo_reference": "ATtYBwJypcEzUghwg_fJjdJBmHp1hqv7SnMeuTFSG7VkrSB45LzQzfolejznIrltSOOWsP0CNJnRPqDrBMekb6HDolfTfiRrdZFfiLaUoaUgr5iWOVwGubijA0oa2wxGMmCIjQqcivlmYQNoMFETn-fJDVqfUSENfz-rYEhgegTtve7QKQkd",
                "width": 2048
            }
        ],
        "place_id": "ChIJWRxefkeuEmsRn2tDqHg6HQo",
        "plus_code": {
            "compound_code": "46M2+8J Sydney NSW, Australia",
            "global_code": "4RRH46M2+8J"
        },
        "price_level": 3,
        "rating": 4.3,
        "reference": "ChIJWRxefkeuEmsRn2tDqHg6HQo",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 563,
        "vicinity": "17 Lime Street, Sydney"
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": -33.8722885,
                "lng": 151.2023019
            },
            "viewport": {
                "northeast": {
                    "lat": -33.8709487697085,
                    "lng": 151.2036881802915
                },
                "southwest": {
                    "lat": -33.87364673029149,
                    "lng": 151.2009902197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "name": "Nick's Seafood Restaurant",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 506,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114517812178451472809\">Nick&#39;s Seafood Restaurant</a>"
                ],
                "photo_reference": "ATtYBwJuQe8ffxXU686zxBFL323G7IbXprD0uP2LwuySRF9ojkYf-FNBnHYz6Y5AAYmjMf_2BdICGd7SkvxEacT713DbS_UUJQiJj4Bje-jEhPmDMLrHrNim3tRRB9hjd48t2lPtn3fiHgKzev1GFjlLSLRbNkX-R2cJt-Gy4jZPtu-xHOPZ",
                "width": 759
            }
        ],
        "place_id": "ChIJvwSIiTiuEmsRAjBcCjGBYsw",
        "plus_code": {
            "compound_code": "46H2+3W Sydney NSW, Australia",
            "global_code": "4RRH46H2+3W"
        },
        "price_level": 3,
        "rating": 3.9,
        "reference": "ChIJvwSIiTiuEmsRAjBcCjGBYsw",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 1933,
        "vicinity": "Cockle Bay Wharf, T.102, Wheat Road, Sydney"
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": -33.866664,
                "lng": 151.2014112
            },
            "viewport": {
                "northeast": {
                    "lat": -33.86545711970849,
                    "lng": 151.2029670302915
                },
                "southwest": {
                    "lat": -33.86815508029149,
                    "lng": 151.2002690697085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png",
        "name": "Georges Mediterranean Bar & Grill",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 829,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109724308524689410874\">Georges Mediterranean Bar &amp; Grill</a>"
                ],
                "photo_reference": "ATtYBwJrX0Jx_DsviRLQ51BA_aQGxlaTTWDwnLbb_n92wAOhfWUzzZfpVH2PrJZT2ygi8ry-pSYQUSHprMS4xVLfk3d99gE5Jt5WCYSCWbNDg4GfvPYKwSq0kmLirjcXPyT5XxEwdluG0t56SUr8_Z785RP06vlJUux120AoCKOJYFfyVT93",
                "width": 1244
            }
        ],
        "place_id": "ChIJWRxefkeuEmsRmKvNb_DeLt8",
        "plus_code": {
            "compound_code": "46M2+8H Sydney NSW, Australia",
            "global_code": "4RRH46M2+8H"
        },
        "price_level": 2,
        "rating": 3.9,
        "reference": "ChIJWRxefkeuEmsRmKvNb_DeLt8",
        "scope": "GOOGLE",
        "types": [
            "bar",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 510,
        "vicinity": "King Street Wharf, 3 The Promenade, Sydney"
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": -33.8716796,
                "lng": 151.2021313
            },
            "viewport": {
                "northeast": {
                    "lat": -33.8704575197085,
                    "lng": 151.2035623802915
                },
                "southwest": {
                    "lat": -33.8731554802915,
                    "lng": 151.2008644197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "name": "Adria Bar Restaurant",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 494,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105689693203087550413\">Adria Bar Restaurant</a>"
                ],
                "photo_reference": "ATtYBwK0mmPY9gPQGhRdzv8RPP-E6VraW1ZXcq8EZ5JLxo3e08zX3un4aUu9_dmL1uFhNBtobZxhPMZIhS5kTsR2uLjj3fjD2NYLAo3OeZpuCtUtGpf2P1JMSLfUfDoaxtJWXM8hKvm-xMNJgYTqWiaRGjQbRpRq4TSKXxjB0w8pScM16irV",
                "width": 879
            }
        ],
        "place_id": "ChIJ8RXmITmuEmsRznrugcSQwxU",
        "plus_code": {
            "compound_code": "46H2+8V Sydney NSW, Australia",
            "global_code": "4RRH46H2+8V"
        },
        "price_level": 2,
        "rating": 3.7,
        "reference": "ChIJ8RXmITmuEmsRznrugcSQwxU",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "bar",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 1093,
        "vicinity": "T.107 Cockle Bay Wharf, Darling Harbour"
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": -33.8716111,
                "lng": 151.2021174
            },
            "viewport": {
                "northeast": {
                    "lat": -33.8704792697085,
                    "lng": 151.2036428802915
                },
                "southwest": {
                    "lat": -33.8731772302915,
                    "lng": 151.2009449197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "name": "I'm Angus Steakhouse",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 506,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109233269957820096312\">I&#39;m Angus Steakhouse</a>"
                ],
                "photo_reference": "ATtYBwLPHWHtb2IdCjnBWNk7mi1Km50tnYklgZpIpsGREWGxGuO8FQq0T6sLV9kdOlmTeuQFmOpAaPOygwzxdOIh2NH99rkR8LPs8F_tcN-PaZ7L2vaTn7Ui7Rdk4zxSLWkOX53rc31CAQq9_X7WhuYi4LMl4DrmDaRBlsMu18Ca-m1qTFXh",
                "width": 759
            }
        ],
        "place_id": "ChIJvwSIiTiuEmsRBfZvg037JFM",
        "plus_code": {
            "compound_code": "46H2+9R Sydney NSW, Australia",
            "global_code": "4RRH46H2+9R"
        },
        "price_level": 3,
        "rating": 3.8,
        "reference": "ChIJvwSIiTiuEmsRBfZvg037JFM",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 1135,
        "vicinity": "Cockle Bay Wharf, T.109, Sydney"
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": -33.8648016,
                "lng": 151.2054365
            },
            "viewport": {
                "northeast": {
                    "lat": -33.8635674697085,
                    "lng": 151.2067663302915
                },
                "southwest": {
                    "lat": -33.8662654302915,
                    "lng": 151.2040683697085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        "name": "Travelodge Hotel Sydney Wynyard",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 1620,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112804721426091817263\">Travelodge Hotel Sydney Wynyard</a>"
                ],
                "photo_reference": "ATtYBwLlBZZHGRp-eWtZR4TgSWm0zYTcrgYj1uFlIcO4rPm5zb96nrZPbXe7e3C--LBqYSYAx445NNFV3T4G6xejINPKdQN6ozd086GSPhl3gv5H4Z3ojdH2GUoBNdaoKKkBk-qiLYM_33WC8yVfmbKNFGPKo1t0LwD2VcZxACZfUZurE9se",
                "width": 2880
            }
        ],
        "place_id": "ChIJDTwzJEGuEmsRw4ifQGYDkww",
        "plus_code": {
            "compound_code": "46P4+35 Sydney NSW, Australia",
            "global_code": "4RRH46P4+35"
        },
        "rating": 3.8,
        "reference": "ChIJDTwzJEGuEmsRw4ifQGYDkww",
        "scope": "GOOGLE",
        "types": [
            "lodging",
            "bar",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 1192,
        "vicinity": "7-9 York Street, Sydney"
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": -33.8683472,
                "lng": 151.1962233
            },
            "viewport": {
                "northeast": {
                    "lat": -33.8669304197085,
                    "lng": 151.1976596802915
                },
                "southwest": {
                    "lat": -33.86962838029149,
                    "lng": 151.1949617197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "name": "Flying Fish",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 3213,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/117229116771790632690\">Flying Fish</a>"
                ],
                "photo_reference": "ATtYBwIx1Ig2a-psBkqhWtB8UVWalSeNQsDUIpzixGpY8Q5GHOL3Ufb3G0Yt_F_npbi_E1smWNuhKinwA3nkvx0Y0cBfQWgqmWWHVr8Rpy9snGT2YKBv_8kBOTHLns50Re9Z02-YcehnZjFz_gqSRzYAAaflmGoBhwS3kCUhau7w_0No-WdM",
                "width": 5096
            }
        ],
        "place_id": "ChIJm7Ex8UmuEmsR37p4Hm0D0VI",
        "plus_code": {
            "compound_code": "45JW+MF Pyrmont NSW, Australia",
            "global_code": "4RRH45JW+MF"
        },
        "price_level": 1,
        "rating": 4.4,
        "reference": "ChIJm7Ex8UmuEmsR37p4Hm0D0VI",
        "scope": "GOOGLE",
        "types": [
            "bar",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 840,
        "vicinity": "80 Pyrmont Street, Pyrmont"
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": -33.8679688,
                "lng": 151.2053027
            },
            "viewport": {
                "northeast": {
                    "lat": -33.8666265197085,
                    "lng": 151.2065754802915
                },
                "southwest": {
                    "lat": -33.8693244802915,
                    "lng": 151.2038775197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "name": "Bistro Papillon",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 856,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113979308042018146627\">Bistro Papillon</a>"
                ],
                "photo_reference": "ATtYBwKI9RHx9I-RxCR9H2frt7P4Hn_Fu9Urw6NAHiM_irhn4UM3_lo1q2F2cmsPs4_rYjztQ2doBX27zSQUBuq6m3uI3IU4XdDnW9VEZO9dyM7QQoseNPX9j3oGiqHsx_xoQFZAqity0nUx_asmMJzcomZDBFkzGPTYDDMn1a_CmPY6ht0I",
                "width": 1300
            }
        ],
        "place_id": "ChIJywXDWT-uEmsRxyuZ0Inwi04",
        "plus_code": {
            "compound_code": "46J4+R4 Sydney NSW, Australia",
            "global_code": "4RRH46J4+R4"
        },
        "price_level": 3,
        "rating": 4.5,
        "reference": "ChIJywXDWT-uEmsRxyuZ0Inwi04",
        "scope": "GOOGLE",
        "types": [
            "meal_takeaway",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 443,
        "vicinity": "98 Clarence Street, Sydney"
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": -33.867806,
                "lng": 151.2017201
            },
            "viewport": {
                "northeast": {
                    "lat": -33.8664656697085,
                    "lng": 151.2031799802915
                },
                "southwest": {
                    "lat": -33.8691636302915,
                    "lng": 151.2004820197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "name": "The Malaya",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 885,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112797482079521405927\">The Malaya</a>"
                ],
                "photo_reference": "ATtYBwJFCxCMeRSYsWkClfHZ2ineolipCcVrCg62Z2mok0ZNtMlzKJhRXXZTmGUOXsv17iDB3rrd2jJLeR0W9V6HApYWPhoIBmsAYT0u18uZiEIB8oqnNEminHn84QzetJ791gbs38-hsBrDCZXwD1-AgBNzC4RK2upWoGvxd6u3PDT8gaVV",
                "width": 884
            }
        ],
        "place_id": "ChIJ4U8HhjiuEmsRyevJVTxWbFo",
        "plus_code": {
            "compound_code": "46J2+VM Sydney NSW, Australia",
            "global_code": "4RRH46J2+VM"
        },
        "price_level": 3,
        "rating": 4.5,
        "reference": "ChIJ4U8HhjiuEmsRyevJVTxWbFo",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 1226,
        "vicinity": "39 Lime Street, Sydney"
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": -33.8712696,
                "lng": 151.1990764
            },
            "viewport": {
                "northeast": {
                    "lat": -33.8699488197085,
                    "lng": 151.2003931802915
                },
                "southwest": {
                    "lat": -33.8726467802915,
                    "lng": 151.1976952197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "name": "Blue Fish",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 3000,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100165648314213307677\">Daniel Uherek</a>"
                ],
                "photo_reference": "ATtYBwJyEF_ysusJTCW1YzeGAtnIQPgcqFMIbK7L8kVz5U_hN2kwWRcx8ncA3F8Z8zpKvINwnyRve52aTEckNPXfH6HpVrKnw1g-d2aRSUU4mVNVOKmbVhEqaRkwov7EwMLK51D8X91ewWEBBtEQPkh46qmQAAUgIuVybGyZRcFXXUQz4Tvs",
                "width": 4000
            }
        ],
        "place_id": "ChIJBaqDDzquEmsRcCI5e-3rStM",
        "plus_code": {
            "compound_code": "45HX+FJ Sydney NSW, Australia",
            "global_code": "4RRH45HX+FJ"
        },
        "price_level": 3,
        "rating": 3.8,
        "reference": "ChIJBaqDDzquEmsRcCI5e-3rStM",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 898,
        "vicinity": "Shop 287 Harbourside Shopping Centre Darling Harbour, Sydney"
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": -33.86756700000001,
                "lng": 151.193742
            },
            "viewport": {
                "northeast": {
                    "lat": -33.8661819197085,
                    "lng": 151.1951371302915
                },
                "southwest": {
                    "lat": -33.8688798802915,
                    "lng": 151.1924391697085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "name": "Blue Eye Dragon",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 2723,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114550096924148386356\">Blue Eye Dragon</a>"
                ],
                "photo_reference": "ATtYBwIPt6zDXXvDaXnF1RdgpGtBgDxcZ7ksTw4r2jlo0UzKYo2B-kRZPxlL_HwKCX7-igeGbkUjfopfRgxluItlR-srlgTIW8exlNZqpVrPi8fKnrSX5JazXwYPBCPmEZUSAsXj9IMFGbeP07Z_ZhE9_mLHZpY-TDu_75pbN-x7OX8k_qsf",
                "width": 3776
            }
        ],
        "place_id": "ChIJuZqIiTauEmsRJF_TK9Vpfmw",
        "plus_code": {
            "compound_code": "45JV+XF Pyrmont NSW, Australia",
            "global_code": "4RRH45JV+XF"
        },
        "price_level": 2,
        "rating": 4.5,
        "reference": "ChIJuZqIiTauEmsRJF_TK9Vpfmw",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 254,
        "vicinity": "37 Pyrmont Street, Pyrmont"
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": -33.8666424,
                "lng": 151.2036552
            },
            "viewport": {
                "northeast": {
                    "lat": -33.86534376970851,
                    "lng": 151.2050183302915
                },
                "southwest": {
                    "lat": -33.86804173029151,
                    "lng": 151.2023203697085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png",
        "name": "The Captains Balcony",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 611,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100392152225838948305\">The Captains Balcony</a>"
                ],
                "photo_reference": "ATtYBwKT2GBTF1NzqX8qX57JBV6zSMPTAZCcYbN8Sz1NrBlRJLaT68nP1f9oif9NVFNy56gL4Ch1qmhrpdFHMtb-8CLqJy2ZVAnKQkZuWa18KMq6Q_57rCp9zixmUxfnzrwpxJsfgddybplQAOLoeBTi_hcYQOi1VuCl1pclxSuB3IFhg10O",
                "width": 916
            }
        ],
        "place_id": "ChIJ2eAQUEeuEmsRcLznK5EjcsA",
        "plus_code": {
            "compound_code": "46M3+8F Sydney NSW, Australia",
            "global_code": "4RRH46M3+8F"
        },
        "price_level": 2,
        "rating": 4.5,
        "reference": "ChIJ2eAQUEeuEmsRcLznK5EjcsA",
        "scope": "GOOGLE",
        "types": [
            "bar",
            "night_club",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 518,
        "vicinity": "46 Erskine Street, Sydney"
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": -33.8707409,
                "lng": 151.1989615
            },
            "viewport": {
                "northeast": {
                    "lat": -33.8694323697085,
                    "lng": 151.2000751302915
                },
                "southwest": {
                    "lat": -33.8721303302915,
                    "lng": 151.1973771697085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "name": "Hurricane's Grill Darling Harbour",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111421756536286699974\">Sarah charles</a>"
                ],
                "photo_reference": "ATtYBwLOBE3Z10lfrnhSpjADPx6TWpt2cMJ1Z34AsVkv-eKPW1snfKlSnVi1egqWoKspaOnBjMg4ZFPm2kPO8W-eP_9iOgGIsunbsww4CHRTTwZn-4WHRcpkmeR7A9fAJYRHOLYvpXD2KD9TEraQzFQ-Lwac52YDEXC11QUe0GBIonqerr9m",
                "width": 3024
            }
        ],
        "place_id": "ChIJL7SCpzCuEmsRN8MD9vPXmOs",
        "plus_code": {
            "compound_code": "45HX+PH Sydney NSW, Australia",
            "global_code": "4RRH45HX+PH"
        },
        "price_level": 2,
        "rating": 3.9,
        "reference": "ChIJL7SCpzCuEmsRN8MD9vPXmOs",
        "scope": "GOOGLE",
        "types": [
            "bar",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 1923,
        "vicinity": "Shops 433 - 436 Darling Drive, Sydney"
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": -33.8713517,
                "lng": 151.1947299
            },
            "viewport": {
                "northeast": {
                    "lat": -33.8699455197085,
                    "lng": 151.1961329802915
                },
                "southwest": {
                    "lat": -33.8726434802915,
                    "lng": 151.1934350197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        "name": "The Dunkirk Hotel",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 3180,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100619007458021702675\">The Dunkirk Hotel</a>"
                ],
                "photo_reference": "ATtYBwJBy_ZkFHBP8BEedHWcHP6mekvBZbZnTtlAq_OapeBD0Js82GHM8Xo8orhSTFgsYhO8zYcuvRmX7vkxmU-PhFBrtYEbrkA2y923-2tKPHRTqMywh6STuRBrriC6yIV4QCROoOSbkimuVCj683GP_E7rMTImly0WB9UnCaaKyKyzF8AP",
                "width": 4770
            }
        ],
        "place_id": "ChIJ4UEnPTGuEmsRkjpDW7FRSko",
        "plus_code": {
            "compound_code": "45HV+FV Pyrmont NSW, Australia",
            "global_code": "4RRH45HV+FV"
        },
        "rating": 4.3,
        "reference": "ChIJ4UEnPTGuEmsRkjpDW7FRSko",
        "scope": "GOOGLE",
        "types": [
            "lodging",
            "bar",
            "liquor_store",
            "restaurant",
            "food",
            "point_of_interest",
            "store",
            "establishment"
        ],
        "user_ratings_total": 324,
        "vicinity": "205 Harris Street, Pyrmont"
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": -33.8721564,
                "lng": 151.199033
            },
            "viewport": {
                "northeast": {
                    "lat": -33.87101071970851,
                    "lng": 151.2003222802915
                },
                "southwest": {
                    "lat": -33.87370868029151,
                    "lng": 151.1976243197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "name": "Zaaffran",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114884309730411855277\">Andrew Toogood Newcastle360</a>"
                ],
                "photo_reference": "ATtYBwJdAVRrkZ1lh-_bHAbgkycyk0JX4ZdDDaIdPJENc_jGuZhYYECbNqDWPb-HDCXKDgahykMJPl8TnUu8-VNj5Ki_zJbmOlLwfqr-XOxuAYsHgOd3C_ZKAiTVretn9KwX3h6Rn4czqVFkO6l33kqpcHwqNLUwmZHwe0Lji0FfeBW4TFgM",
                "width": 4032
            }
        ],
        "place_id": "ChIJL7SCpzCuEmsRS8JWUImDVsM",
        "plus_code": {
            "compound_code": "45HX+4J Sydney NSW, Australia",
            "global_code": "4RRH45HX+4J"
        },
        "price_level": 3,
        "rating": 4,
        "reference": "ChIJL7SCpzCuEmsRS8JWUImDVsM",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 821,
        "vicinity": "Harbourside Shopping Centre, 345/10 Darling Drive, Sydney"
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": -33.8682602,
                "lng": 151.2061468
            },
            "viewport": {
                "northeast": {
                    "lat": -33.8669133197085,
                    "lng": 151.2074132802915
                },
                "southwest": {
                    "lat": -33.8696112802915,
                    "lng": 151.2047153197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "name": "The Bavarian York St.",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 1163,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101805362363929814662\">The Bavarian York St.</a>"
                ],
                "photo_reference": "ATtYBwINP7O2G8_j7KbEA1gw_YicbLilcBHy3R4z2bPuBnlznU40ONzQJHHArVNvvVRb1bIQQlw8y9iBDjiM_QAs91aWkl5R2jmSHXj6z0x2uniKTqbVETCCylUGpbqWrxZeA1T-v_J6E7wJWHcS81TdqonK7lu0cMR_vtJLaLp-Zm7wTNaC",
                "width": 2704
            }
        ],
        "place_id": "ChIJ6d4iYT-uEmsRzr2ghGVI_6s",
        "plus_code": {
            "compound_code": "46J4+MF Sydney NSW, Australia",
            "global_code": "4RRH46J4+MF"
        },
        "price_level": 2,
        "rating": 4,
        "reference": "ChIJ6d4iYT-uEmsRzr2ghGVI_6s",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "bar",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 2609,
        "vicinity": "24 York Street, Sydney"
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": -33.8659992,
                "lng": 151.2015769
            },
            "viewport": {
                "northeast": {
                    "lat": -33.86461146970851,
                    "lng": 151.2030046302915
                },
                "southwest": {
                    "lat": -33.86730943029151,
                    "lng": 151.2003066697085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png",
        "name": "The Loft",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 1364,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105403356651468226795\">The Loft</a>"
                ],
                "photo_reference": "ATtYBwKCRbA-va_WmElStaU-sbFEmfXATcQWVRFx-l0LNhUXm-RnMyn7gBF9EhcTzEfnq7B1ESF6lUezCpIFXxMwiu5MEK6TZbj-X1jhXPdS5MEHluzeXUxt0pJ6284nR2F3kQUmXwYVKtp63bvwWLddt5TPXPVE09tYjtPmrcPotHF2yMZh",
                "width": 2046
            }
        ],
        "place_id": "ChIJxZ3vgTiuEmsRjsB0BmHCaiw",
        "plus_code": {
            "compound_code": "46M2+JJ Sydney NSW, Australia",
            "global_code": "4RRH46M2+JJ"
        },
        "price_level": 2,
        "rating": 4.2,
        "reference": "ChIJxZ3vgTiuEmsRjsB0BmHCaiw",
        "scope": "GOOGLE",
        "types": [
            "bar",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 217,
        "vicinity": "3 Lime Street, Sydney"
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": -33.8636013,
                "lng": 151.1944983
            },
            "viewport": {
                "northeast": {
                    "lat": -33.8626499197085,
                    "lng": 151.1953526302915
                },
                "southwest": {
                    "lat": -33.8653478802915,
                    "lng": 151.1926546697085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/cafe-71.png",
        "name": "Cafe Morso",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 3456,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/115976805574107278435\">Cafe Morso</a>"
                ],
                "photo_reference": "ATtYBwI8qoZsuMvSA93cC8K7KOhSWcD-4wa5XZ66lpQhlQquGInbtmAb-pqTAjGYIEjkl7TFMdiYkpNNRxgFslMqHLiGqCoWbX16AFaiUGYLxY3Ub3bFi0mShcIkh3OxSUs7_YQ3EFLS8DWj0Pfd_s_p3sVfDEtXF2JbKOkxtyN6JDsTZGOM",
                "width": 5184
            }
        ],
        "place_id": "ChIJz2EHuEmuEmsRN_yScfn88Ec",
        "plus_code": {
            "compound_code": "45PV+HQ Pyrmont NSW, Australia",
            "global_code": "4RRH45PV+HQ"
        },
        "price_level": 2,
        "rating": 4.3,
        "reference": "ChIJz2EHuEmuEmsRN_yScfn88Ec",
        "scope": "GOOGLE",
        "types": [
            "cafe",
            "bar",
            "restaurant",
            "food",
            "point_of_interest",
            "store",
            "establishment"
        ],
        "user_ratings_total": 348,
        "vicinity": "108/26-32 Pirrama Road, Pyrmont"
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": -33.8696629,
                "lng": 151.205246
            },
            "viewport": {
                "northeast": {
                    "lat": -33.8683075697085,
                    "lng": 151.2066790302915
                },
                "southwest": {
                    "lat": -33.8710055302915,
                    "lng": 151.2039810697085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png",
        "name": "Redoak Boutique Beer Cafe",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 1365,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105243651264983087191\">Redoak Boutique Beer Cafe</a>"
                ],
                "photo_reference": "ATtYBwLlu8swzRiDGXdoz663p7ruF1VfG-c8KTlAVVs81_fu3QlB7fRUXfBWEcO4LEVO9x5dVmHQRDY0_9MDfTH78oJk_aKmMnMRR8MR6LAnEJ4rWSjU5fbDBxuUJMAGOn0YxO3HvnYOpAZ29uJhyEFyAjuuU18wzQpzVI4TgrWg6nsJOw3a",
                "width": 2048
            }
        ],
        "place_id": "ChIJIybTJD-uEmsRluPfQS1I4FU",
        "plus_code": {
            "compound_code": "46J4+43 Sydney NSW, Australia",
            "global_code": "4RRH46J4+43"
        },
        "price_level": 2,
        "rating": 4.3,
        "reference": "ChIJIybTJD-uEmsRluPfQS1I4FU",
        "scope": "GOOGLE",
        "types": [
            "bar",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 365,
        "vicinity": "201 Clarence Street, Sydney"
    }
]
```


***Status Code:*** 200

<br>



### 9. SearchPlace


An API provides to find some locations on maps from with an text


***Endpoint:***

```bash
Method: GET
Type: 
URL: https://goawayy.herokuapp.com/place/
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| input | đại học bách khoa | Input text that you want to find a place |



***More example Requests/Responses:***


##### I. Example Request: SearchPlace


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/x-www-form-urlencoded |  |



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| input | Đại học bách khoa cơ sở 2 | Input text that you want to find a place |



##### I. Example Response: SearchPlace
```js
[
    {
        "formatted_address": "268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh, Vietnam",
        "geometry": {
            "lat": 10.7733743,
            "lng": 106.6606193
        },
        "name": "Ho Chi Minh City University of Technology",
        "place_id": "ChIJ-6NhwcMudTERHmnMoUfNd-8"
    }
]
```


***Status Code:*** 200

<br>



### 10. SearchPlace v2


An API provides to find some locations on maps from with an text


***Endpoint:***

```bash
Method: GET
Type: URLENCODED
URL: https://goawayy.herokuapp.com/place/v2
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| lat | 10.8782694 | Your location: latitude |
| lng | 106.8044371 | Your location: longtitude |
| input | Nguyễn Trọng Tuyển | Input text that you want to find a place |



***Body:***



***More example Requests/Responses:***


##### I. Example Request: SearchPlace v2



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| lat | 10.8782694 | Your location: latitude |
| lng | 106.8044371 | Your location: longtitude |
| input | Nguyễn Trọng Tuyển | Input text that you want to find a place |



***Body:***



##### I. Example Response: SearchPlace v2
```js
[
    {
        "title": "Đường Nguyễn Trọng Tuyển",
        "highlightedTitle": "Đường <b>Nguyễn</b> <b>Trọng</b> <b>Tuyển</b>",
        "vicinity": "Quận Phú Nhuận, Ho Chi Minh City",
        "highlightedVicinity": "Quận Phú Nhuận, Ho Chi Minh City",
        "position": [
            10.7981,
            106.66983
        ],
        "distance": 17184,
        "icon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/street-square.png?alt=media&token=75f330ce-ebba-4a85-a5f9-3f9fbd0d799f"
    },
    {
        "title": "Hẻm 271 Nguyễn Trọng Tuyển",
        "highlightedTitle": "Hẻm 271 <b>Nguyễn</b> <b>Trọng</b> <b>Tuyển</b>",
        "vicinity": "Quận Phú Nhuận, Ho Chi Minh City",
        "highlightedVicinity": "Quận Phú Nhuận, Ho Chi Minh City",
        "position": [
            10.79765,
            106.67053
        ],
        "distance": 17144,
        "icon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/street-square.png?alt=media&token=75f330ce-ebba-4a85-a5f9-3f9fbd0d799f"
    },
    {
        "title": "Hẻm 200 Nguyễn Trọng Tuyển",
        "highlightedTitle": "Hẻm 200 <b>Nguyễn</b> <b>Trọng</b> <b>Tuyển</b>",
        "vicinity": "Quận Phú Nhuận, Ho Chi Minh City",
        "highlightedVicinity": "Quận Phú Nhuận, Ho Chi Minh City",
        "position": [
            10.79855,
            106.67413
        ],
        "distance": 16757,
        "icon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/street-square.png?alt=media&token=75f330ce-ebba-4a85-a5f9-3f9fbd0d799f"
    },
    {
        "title": "Hẻm 220 Nguyễn Trọng Tuyển",
        "highlightedTitle": "Hẻm 220 <b>Nguyễn</b> <b>Trọng</b> <b>Tuyển</b>",
        "vicinity": "Quận Phú Nhuận, Ho Chi Minh City",
        "highlightedVicinity": "Quận Phú Nhuận, Ho Chi Minh City",
        "position": [
            10.7985,
            106.67374
        ],
        "distance": 16796,
        "icon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/street-square.png?alt=media&token=75f330ce-ebba-4a85-a5f9-3f9fbd0d799f"
    },
    {
        "title": "Hẻm 152-154 Nguyễn Trọng Tuyển",
        "highlightedTitle": "Hẻm 152-154 <b>Nguyễn</b> <b>Trọng</b> <b>Tuyển</b>",
        "vicinity": "Quận Phú Nhuận, Ho Chi Minh City",
        "highlightedVicinity": "Quận Phú Nhuận, Ho Chi Minh City",
        "position": [
            10.79832,
            106.6767
        ],
        "distance": 16532,
        "icon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/street-square.png?alt=media&token=75f330ce-ebba-4a85-a5f9-3f9fbd0d799f"
    },
    {
        "title": "Trường Tiểu Học Nguyễn Trọng Tuyển",
        "highlightedTitle": "Trường Tiểu Học <b>Nguyễn</b> <b>Trọng</b> <b>Tuyển</b>",
        "vicinity": "HẺM 220/9 Xô Viết Nghệ Tĩnh, Quận Bình Thạnh, Thành Phố Hồ Chí Minh",
        "highlightedVicinity": "HẺM 220/9 Xô Viết Nghệ Tĩnh, Quận Bình Thạnh, Thành Phố Hồ Chí Minh",
        "position": [
            10.79964,
            106.71245
        ],
        "distance": 13297,
        "icon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/school.png?alt=media&token=9e086078-2383-4441-bccf-441083040116"
    },
    {
        "title": "Hẻm 333 Nguyễn Trọng Tuyển",
        "highlightedTitle": "Hẻm 333 <b>Nguyễn</b> <b>Trọng</b> <b>Tuyển</b>",
        "vicinity": "Quận Phú Nhuận, Ho Chi Minh City",
        "highlightedVicinity": "Quận Phú Nhuận, Ho Chi Minh City",
        "position": [
            10.79727,
            106.66839
        ],
        "distance": 17366,
        "icon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/street-square.png?alt=media&token=75f330ce-ebba-4a85-a5f9-3f9fbd0d799f"
    },
    {
        "title": "Hẻm 194 Nguyễn Trọng Tuyển",
        "highlightedTitle": "Hẻm 194 <b>Nguyễn</b> <b>Trọng</b> <b>Tuyển</b>",
        "vicinity": "Quận Phú Nhuận, Ho Chi Minh City",
        "highlightedVicinity": "Quận Phú Nhuận, Ho Chi Minh City",
        "position": [
            10.79802,
            106.6744
        ],
        "distance": 16762,
        "icon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/street-square.png?alt=media&token=75f330ce-ebba-4a85-a5f9-3f9fbd0d799f"
    },
    {
        "title": "Hẻm 313 Nguyễn Trọng Tuyển",
        "highlightedTitle": "Hẻm 313 <b>Nguyễn</b> <b>Trọng</b> <b>Tuyển</b>",
        "vicinity": "Quận Phú Nhuận, Ho Chi Minh City",
        "highlightedVicinity": "Quận Phú Nhuận, Ho Chi Minh City",
        "position": [
            10.79791,
            106.66915
        ],
        "distance": 17258,
        "icon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/street-square.png?alt=media&token=75f330ce-ebba-4a85-a5f9-3f9fbd0d799f"
    },
    {
        "title": "Hẻm 273 Nguyễn Trọng Tuyển",
        "highlightedTitle": "Hẻm 273 <b>Nguyễn</b> <b>Trọng</b> <b>Tuyển</b>",
        "vicinity": "Quận Phú Nhuận, Ho Chi Minh City",
        "highlightedVicinity": "Quận Phú Nhuận, Ho Chi Minh City",
        "position": [
            10.79776,
            106.67031
        ],
        "distance": 17158,
        "icon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/street-square.png?alt=media&token=75f330ce-ebba-4a85-a5f9-3f9fbd0d799f"
    },
    {
        "title": "Hẻm 270 Nguyễn Trọng Tuyển",
        "highlightedTitle": "Hẻm 270 <b>Nguyễn</b> <b>Trọng</b> <b>Tuyển</b>",
        "vicinity": "Quận Phú Nhuận, Ho Chi Minh City",
        "highlightedVicinity": "Quận Phú Nhuận, Ho Chi Minh City",
        "position": [
            10.79828,
            106.67204
        ],
        "distance": 16967,
        "icon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/street-square.png?alt=media&token=75f330ce-ebba-4a85-a5f9-3f9fbd0d799f"
    },
    {
        "title": "Hẻm 140 Nguyễn Trọng Tuyển",
        "highlightedTitle": "Hẻm 140 <b>Nguyễn</b> <b>Trọng</b> <b>Tuyển</b>",
        "vicinity": "Quận Phú Nhuận, Ho Chi Minh City",
        "highlightedVicinity": "Quận Phú Nhuận, Ho Chi Minh City",
        "position": [
            10.79768,
            106.67684
        ],
        "distance": 16557,
        "icon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/street-square.png?alt=media&token=75f330ce-ebba-4a85-a5f9-3f9fbd0d799f"
    },
    {
        "title": "Trường Trung Học Phổ Thông Nguyễn Hữu Cầu",
        "highlightedTitle": "Trường Trung Học Phổ <b>Thông</b> <b>Nguyễn</b> Hữu Cầu",
        "vicinity": "7 Đường Nguyễn Ảnh Thủ, Xã Trung Chánh, Huyện Hóc Môn",
        "highlightedVicinity": "7 Đường Nguyễn Ảnh Thủ, Xã Trung Chánh, Huyện Hóc Môn",
        "position": [
            10.86614,
            106.61459
        ],
        "distance": 20800,
        "icon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/school.png?alt=media&token=9e086078-2383-4441-bccf-441083040116"
    },
    {
        "title": "Hẻm 109 Nguyễn Trọng Tuyển",
        "highlightedTitle": "Hẻm 109 <b>Nguyễn</b> <b>Trọng</b> <b>Tuyển</b>",
        "vicinity": "Quận Phú Nhuận, Ho Chi Minh City",
        "highlightedVicinity": "Quận Phú Nhuận, Ho Chi Minh City",
        "position": [
            10.79709,
            106.67828
        ],
        "distance": 16460,
        "icon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/street-square.png?alt=media&token=75f330ce-ebba-4a85-a5f9-3f9fbd0d799f"
    },
    {
        "title": "Hẻm 409 Nguyễn Trọng Tuyển",
        "highlightedTitle": "Hẻm 409 <b>Nguyễn</b> <b>Trọng</b> <b>Tuyển</b>",
        "vicinity": "Quận Tân Bình, Ho Chi Minh City",
        "highlightedVicinity": "Quận Tân Bình, Ho Chi Minh City",
        "position": [
            10.79795,
            106.66175
        ],
        "distance": 17955,
        "icon": "https://firebasestorage.googleapis.com/v0/b/goaway-00.appspot.com/o/street-square.png?alt=media&token=75f330ce-ebba-4a85-a5f9-3f9fbd0d799f"
    }
]
```


***Status Code:*** 200

<br>



### 11. SetSign


You can add an traffic sign info by using this API


***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: https://goawayy.herokuapp.com/sign
```



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| signId | _bbcdx | The id of traffic sign |
| signIcon | bienbaocamdoxe.png | Icon of traffic sign |
| signName | Cấm đỗ xe | Traffic sign name |
| signDescription | Nghiêm cấm các phương tiện giao thông đỗ xe ở đoạn đường có lắp đặt biển báo này, ngoại trừ phương tiện ưu tiên. | Description |
| signType | Biển báo cấm | Type of sign |



***More example Requests/Responses:***


##### I. Example Request: SetSign



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| signId | _bbcdx | The id of traffic sign |
| signIcon | bienbaocamdoxe.png | Icon of traffic sign |
| signName | Cấm đỗ xe | Traffic sign name |
| signDescription | Nghiêm cấm các phương tiện giao thông đỗ xe ở đoạn đường có lắp đặt biển báo này, ngoại trừ phương tiện ưu tiên. | Description |



##### I. Example Response: SetSign
```js
{
    "_id": "6073cfb75be8bf00157d85cc",
    "signId": "_bbcdx",
    "signIcon": "bienbaocamdoxe.png",
    "signName": "Cấm đỗ xe",
    "signDescription": "Nghiêm cấm các phương tiện giao thông đỗ xe ở đoạn đường có lắp đặt biển báo này, ngoại trừ phương tiện ưu tiên.",
    "__v": 0
}
```


***Status Code:*** 200

<br>



### 12. UpdateSign



***Endpoint:***

```bash
Method: PUT
Type: URLENCODED
URL: https://goawayy.herokuapp.com/sign/:id
```



***URL variables:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 2 | Id of traffic sign |



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| signId | _bbut | Id of traffic sign |
| signIcon | bienbaouutien.png | Icon off traffic sign |
| signName | Ưu tiên | Name of traffic sign |
| signDescription | Ưu tiên cho những xe được ưu tiên | Description |



***More example Requests/Responses:***


##### I. Example Request: UpdateSign



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 2 | Id of traffic sign |



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| signId | _bbut | Id of traffic sign |
| signIcon | bienbaouutien.png | Icon off traffic sign |
| signName | Ưu tiên | Name of traffic sign |
| signDescription | Ưu tiên cho những xe được ưu tiên | Description |



##### I. Example Response: UpdateSign
```js
{
    "_id": "607079629b08f0290899bfe7",
    "signId": "2",
    "signIcon": "123",
    "signName": "abdab",
    "signDescription": "123",
    "__v": 0
}
```


***Status Code:*** 200

<br>



### 13. postLocation



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: https://goawayy.herokuapp.com/location
```



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| name | one | Name of location |
| address | two | Address of location |
| img | three | Image url of location |



***More example Requests/Responses:***


##### I. Example Request: postLocation



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| name | one | Name of location |
| address | two | Address of location |
| img | three | Image url of location |



##### I. Example Response: postLocation
```js
Duplicate
```


***Status Code:*** 400

<br>



---
[Back to top](#go-a-way)
> GoPro Team
