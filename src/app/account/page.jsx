'use client';

import React, { useState } from "react";
import { FaUser, FaLock, FaHeadset, FaSignOutAlt, FaChevronRight, FaMedal, FaCrown, FaGem, FaCircle, FaTicketAlt, FaHeart, FaGift, FaPercent, FaBus } from "react-icons/fa";
import { motion } from "framer-motion";

const AccountPage = () => {
  const [membershipLevel, setMembershipLevel] = useState("gold"); // bronze, silver, gold, diamond
  const [activeTab, setActiveTab] = useState("tickets");

  const getMembershipInfo = (level) => {
    switch (level) {
      case "bronze":
        return { icon: FaCircle, color: "text-amber-700", text: "Đồng" };
      case "silver":
        return { icon: FaMedal, color: "text-gray-400", text: "Bạc" };
      case "gold":
        return { icon: FaCrown, color: "text-yellow-400", text: "Vàng" };
      case "diamond":
        return { icon: FaGem, color: "text-blue-400", text: "Kim cương" };
      default:
        return { icon: FaCircle, color: "text-amber-700", text: "Đồng" };
    }
  };

  const membershipInfo = getMembershipInfo(membershipLevel);
  const MembershipIcon = membershipInfo.icon;

  const menuItems = [
    {
      id: 1,
      icon: FaLock,
      title: "Bảo mật",
      description: "Cài đặt mật khẩu và bảo mật tài khoản"
    },
    {
      id: 2,
      icon: FaHeadset,
      title: "Liên hệ hỗ trợ",
      description: "Hỗ trợ 24/7"
    },
    {
      id: 3,
      icon: FaSignOutAlt,
      title: "Đăng xuất",
      description: "Đăng xuất khỏi tài khoản"
    }
  ];

  const navigationItems = [
    { id: "tickets", icon: FaBus, label: "Đặt vé" },
    { id: "favorites", icon: FaHeart, label: "Yêu thích" },
    { id: "mytickets", icon: FaTicketAlt, label: "Vé của tôi" },
    { id: "offers", icon: FaGift, label: "Ưu đãi" },
    { id: "account", icon: FaUser, label: "Tài khoản" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-blue-50 to-yellow-50 p-6 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        {/* Profile Section */}
        <div className="bg-white rounded-3xl p-6 shadow-xl mb-6">
          <div className="flex items-center space-x-6">
            <div className="relative">
              <img
                src="images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-green-100"
              />
              <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1.5 shadow-lg">
                <MembershipIcon className={`${membershipInfo.color} text-xl`} />
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-800 mb-1">Nguyễn Văn A</h1>
              <div className="flex items-center space-x-2">
                <MembershipIcon className={`${membershipInfo.color} text-sm`} />
                <span className="text-gray-600">Hội viên {membershipInfo.text}</span>
              </div>
              <p className="text-gray-500 text-sm mt-1">ID: 123456789</p>
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div className="space-y-4">
          {menuItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-2xl p-4 shadow-lg cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-green-200 to-blue-200 p-3 rounded-xl">
                    <item.icon className="text-blue-500 text-xl" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </div>
                <FaChevronRight className="text-gray-400" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-500 text-sm mt-8"
        >
          Phiên bản 1.0.0
        </motion.p>
      </motion.div>

      {/* Updated Fixed Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg">
        <div className="max-w-md mx-auto">
          <div className="flex justify-between items-center px-6 py-3">
            {navigationItems.map((item) => (
              <motion.div
                key={item.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center cursor-pointer ${activeTab === item.id ? "text-blue-500" : "text-gray-400"}`}
              >
                <item.icon className={`text-2xl mb-1 ${activeTab === item.id ? "text-blue-500" : "text-gray-400"}`} />
                <span className={`text-xs ${activeTab === item.id ? "font-medium" : ""}`}>{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;