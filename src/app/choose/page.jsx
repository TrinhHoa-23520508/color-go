'use client';

import React, { useState } from "react";
import { FaArrowLeft, FaExclamationCircle, FaBus } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { BsClockFill } from "react-icons/bs";
import { useRouter } from 'next/navigation';


const SeatSelectionPage = () => {
  const router = useRouter();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCarDetailModalOpen, setIsCarDetailModalOpen] = useState(false);
  const basePrice = 250000;

  const handleSeatSelection = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
      setTotalPrice(totalPrice - basePrice);
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
      setTotalPrice(totalPrice + basePrice);
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };

  const CarDetailModal = () => (
    <AnimatePresence mode="wait">
      {isCarDetailModalOpen && (
        <div className="fixed inset-0 bg-black/15 backdrop-blur-sm flex items-center justify-center z-50">
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white/85 backdrop-blur-md rounded-3xl p-6 m-4 w-full max-w-md shadow-xl border border-white/20"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
              Chi tiết nhà xe
            </h3>

            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-24 text-sm text-gray-600 pt-1">Nhà xe</div>
                  <div className="flex-1">
                    <p className="text-gray-800 font-medium">Hoàng Long</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-24 text-sm text-gray-600 pt-1">Loại xe</div>
                  <div className="flex-1">
                    <p className="text-gray-800 font-medium">Giường nằm 2 tầng</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-24 text-sm text-gray-600 pt-1">Số ghế</div>
                  <div className="flex-1">
                    <p className="text-gray-800 font-medium">36 ghế</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-24 text-sm text-gray-600 pt-1">Tiện ích</div>
                  <div className="flex-1">
                    <p className="text-gray-800 font-medium">WiFi, Nước uống, Chăn mền</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-yellow-50 rounded-xl">
              <p className="text-sm text-yellow-700">
                <FaExclamationCircle className="inline-block mr-2" />
                Xe mới, sạch sẽ, được bảo dưỡng định kỳ
              </p>
            </div>

            <button
              onClick={() => setIsCarDetailModalOpen(false)}
              className="mt-6 w-full p-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl hover:opacity-90 transition-opacity duration-300 font-medium"
            >
              Đóng
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  const CancellationModal = () => (
    <AnimatePresence mode="wait">
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/15 backdrop-blur-sm flex items-center justify-center z-50">
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white/85 backdrop-blur-md rounded-3xl p-6 m-4 w-full max-w-md shadow-xl border border-white/20"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
              Chính sách hủy vé
            </h3>

            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-24 text-sm text-gray-600 pt-1">Trước 24h</div>
                  <div className="relative flex flex-col items-center -my-2">
                    <BsClockFill className="text-blue-500 z-10 bg-white" />
                    <div className="h-full border-l-2 border-dashed border-gray-300 absolute top-4"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800 font-medium">Hoàn tiền 90%</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-24 text-sm text-gray-600 pt-1">12-24h</div>
                  <div className="relative flex flex-col items-center -my-2">
                    <BsClockFill className="text-blue-500 z-10 bg-white" />
                    <div className="h-full border-l-2 border-dashed border-gray-300 absolute top-4"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800 font-medium">Hoàn tiền 70%</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-24 text-sm text-gray-600 pt-1">4-12h</div>
                  <div className="relative flex flex-col items-center -my-2">
                    <BsClockFill className="text-blue-500 z-10 bg-white" />
                    <div className="h-full border-l-2 border-dashed border-gray-300 absolute top-4"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800 font-medium">Hoàn tiền 50%</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-24 text-sm text-gray-600 pt-1">Dưới 4h</div>
                  <div className="relative flex flex-col items-center -my-2">
                    <BsClockFill className="text-blue-500 z-10 bg-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800 font-medium">Không hoàn tiền</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-yellow-50 rounded-xl">
              <p className="text-sm text-yellow-700">
                <FaExclamationCircle className="inline-block mr-2" />
                Điều kiện: Vé đã thanh toán và chưa sử dụng. Hoàn tiền trong vòng 7 ngày làm việc.
              </p>
            </div>

            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-6 w-full p-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl hover:opacity-90 transition-opacity duration-300 font-medium"
            >
              Đóng
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  const renderSeats = (floor, startNum) => {
    const seats = [];
    const prefix = floor === "upper" ? "B" : "A";
    for (let row = 0; row < 6; row++) {
      const rowSeats = [];
      for (let col = 0; col < 3; col++) {
        const seatNum = `${prefix}${String(startNum + col + (row * 3)).padStart(2, "0")}`;
        const isSelected = selectedSeats.includes(seatNum);
        const isDisabled = ["A01", "A05", "B02", "B06", "A13", "A16", "B14", "B17"].includes(seatNum);

        rowSeats.push(
          <button
            key={seatNum}
            disabled={isDisabled}
            onClick={() => handleSeatSelection(seatNum)}
            className={`w-8 h-12 md:w-10 md:h-15 m-0.5 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 
              ${isDisabled ? "bg-gray-300 cursor-not-allowed" : 
                isSelected ? "bg-blue-400 text-white shadow-lg" : 
                "bg-white hover:bg-blue-50 text-gray-700 border border-gray-200"}`}
          >
            {seatNum}
          </button>
        );
      }
      seats.push(
        <div key={row} className="flex justify-between px-1 space-x-1 md:space-x-2">
          {rowSeats}
        </div>
      );
    }
    return seats;
  };

  const handleLocationSelectionClick = () => {
    router.push("/location");
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100/70 via-blue-100/70 to-yellow-100/70 pb-24">
      <div className="bg-transparent p-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-4 bg-white/30 backdrop-blur-sm rounded-full px-4 py-3 shadow-sm">
            <button className="p-2 hover:bg-white/20 rounded-full transition-all duration-300">
              <FaArrowLeft className="text-gray-600 text-xl" onClick={() => {router.back()}}/>
            </button>
            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-gray-600 font-semibold">
                <span className="text-base">Hoàng Long</span>
                <span className="text-sm">•</span>
                <span className="text-base">08:00</span>
              </div>
              <div className="text-sm text-gray-500">
                Thứ Hai, 15/01/2024
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto mt-6 px-4">
        <div className="text-center mb-4">
          <button
            onClick={() => setIsCarDetailModalOpen(true)}
            className="flex items-center gap-2 text-blue-600 text-sm hover:text-blue-700 transition-colors justify-center mx-auto"
          >
            <FaBus className="text-lg" />
            Chi tiết nhà xe
          </button>
        </div>

        <div className="flex justify-center items-center space-x-6 bg-white/50 backdrop-blur-sm rounded-xl p-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-white border border-gray-200" />
            <span className="text-sm text-gray-600">Trống</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-blue-400" />
            <span className="text-sm text-gray-600">Đang chọn</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gray-300" />
            <span className="text-sm text-gray-600">Không bán</span>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto mt-8 px-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg">
          <div className="flex flex-row justify-center items-start space-x-8">
            <div className="flex-1">
              <h3 className="text-base font-semibold text-gray-700 mb-1 text-center">Tầng dưới</h3>
              <div className="w-full h-[1px] bg-gray-300 mb-3"></div>
              <div className="space-y-3 w-full">
                {renderSeats("lower", 1)}
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-base font-semibold text-gray-700 mb-1 text-center">Tầng trên</h3>
              <div className="w-full h-[1px] bg-gray-300 mb-3"></div>
              <div className="space-y-3 w-full">
                {renderSeats("upper", 1)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto mt-4 px-4 text-center mb-24">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 text-blue-600 text-sm hover:text-blue-700 transition-colors justify-center mx-auto"
        >
          <FaExclamationCircle className="text-lg" />
          Chính sách hủy vé
        </button>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-200">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600 mb-1">Ghế đã chọn: {selectedSeats.join(", ")}</div>
              <div className="text-lg font-bold text-blue-600">{totalPrice.toLocaleString()}đ</div>
            </div>
            <motion.button
              whileTap={{ scale: 0.95 }}
              disabled={selectedSeats.length === 0}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 
                ${selectedSeats.length > 0 
                  ? "bg-gradient-to-r from-green-500 to-blue-500 text-white" 
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
              onClick={handleLocationSelectionClick}
            >
              Chọn điểm đón trả
            </motion.button>
          </div>
        </div>
      </div>
      <CancellationModal />
      <CarDetailModal />
    </div>
  );
};

export default SeatSelectionPage;