import { type FC } from "react";
import { Camera } from "lucide-react";

const Home: FC = () => {
  return (
    <div className="p-3 flex flex-row space-x-2">
      {/* 線の色は赤色 */}
      <Camera color="red" />
      {/* 線の色は青色 */}
      <Camera color="blue" />
      {/* 線の色は赤色, サイズは 24px x 24px */}
      <Camera color="red" size={24} />
      {/* 線の色は赤色, サイズは 24px x 24px, 線の太さは1px */}
      <Camera color="red" size={24} strokeWidth={1} />
      {/* 線の色は赤色, サイズは 24px x 24px, 線の太さは2px */}
      <Camera color="red" size={24} strokeWidth={2} />
      {/* 線の色は緑色, サイズは 24px x 24px, 線の太さは2px,  */}
      <Camera size={24} strokeWidth={2} className="text-green-500" />
      {/* 線の色は黒色, サイズは 24px x 24px, 線の太さは2px, 背景色は赤 */}
      <Camera size={24} strokeWidth={2} className="bg-red-200" />
      {/* 線の色は黒色, サイズは 24px x 24px, 線の太さは2px, アニメーション */}
      <Camera size={24} strokeWidth={2} className="animate-spin" />
      {/* サイズは 40px x 40px, 線の太さは2px */}
      <Camera strokeWidth={2} className="w-10 h-10" />
      {/* 線の太さは2px, ホバーした際に線の色を黒から赤色に変更 */}
      <Camera strokeWidth={2} className="hover:text-red-500" />
    </div>
  );
};

export default Home;
