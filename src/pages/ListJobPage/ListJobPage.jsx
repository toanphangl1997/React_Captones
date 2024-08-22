import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { congViecService } from "../../service/congViec.service";

const ListJobPage = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const [listJob, setListJob] = useState([]);
  console.log(searchParam.get("tenCongViec"));
  useEffect(() => {
    let tenCongViec = searchParam.get("tenCongViec");
    congViecService
      .layCongViecTheoTen(tenCongViec)
      .then((res) => {
        console.log(res);
        setListJob(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchParam.get("tenCongViec")]);
  return (
    <div className="container">
      <h1 className="text-5xl font-bold">
        Danh sách công việc dựa theo từ khóa:{" "}
        {searchParam.get("tenCongViec") ? searchParam.get("tenCongViec") : ""}
      </h1>
      <div className="grid grid-cols-4 gap-10 mt-10">
        {listJob.map((item, index) => {
          console.log(item);
          return (
            <div className="space-y-4 border rounded-md p-3">
              <img src={item.congViec?.hinhAnh} className="w-full" alt="" />
              {/* người tạo  */}
              <div className="flex items-center space-x-3">
                <img
                  src={item.avatar}
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <h4 className="font-bold text-lg">{item.tenNguoiTao}</h4>
              </div>
              {/* đánh giá và tên công việc  */}
              <div>
                <h3>{item.congViec?.tenCongViec}</h3>
                <p>
                  <span className="text-yellow-400 space-x-2">
                    <i class="fa-solid fa-star"></i>
                  </span>
                  {item.congViec?.saoCongViec}
                  <span>{item.congViec?.danhGia}</span>
                </p>
              </div>
              {/* lựa chọn yêu thích và giá tiền công việc  */}
              <div className="flex justify-between items-center">
                <i class="fa-solid fa-heart"></i>
                <p className="uppercase">
                  Starting at <span>${item.congViec?.giaTien}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListJobPage;
