import { DONG_AM, DONG_NGHIA, TRAI_NGHIA } from "constant/common";

function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
}
  
export const MENUS = [
    getItem("Đồng âm", DONG_AM),
    getItem("Đồng nghĩa", DONG_NGHIA),
    getItem("Trái nghĩa", TRAI_NGHIA),
];