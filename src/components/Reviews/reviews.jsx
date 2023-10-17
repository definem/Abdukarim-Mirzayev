import React from 'react'
import BackgroundGradient from "../../../public/assets/images/Gradient2.png";
import Group from "../../../public/assets/icons/gruppa.svg";

const Reviews = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${BackgroundGradient.src})`,
          width: "100%",
          height: "790px",
          zIndex: "0",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container text-center">
          <h1 className="text-[25px] font-semibold mt-[60-px]">
            O’quvchilarimizning{" "}
            <span className="text-[#00E689]">kurs haqidagi fikrlari</span>
          </h1>
          <p className="text-[20px] mt-[40px] w-[679px] text-center">
            Abdukarim Mirzaevning 1-halqa tinglovchilaridan biri bo`lish
            imkonini bergan Robbimga hamdlar bo'lsin! Mening nazarimda bu
            bilimlar hozirgi kunda juda muhim.
          </p>
          <p className="text-[20px] mt-[20px] w-[685px] text-center">
            Darsda o'tilgan mavzulardan foydalanib bir sifatli video, audio,
            tekst, va hkz tayyorlasa tinglovchi va ko'ruvchilarga yaxshi
            mahsulot yetib borsa, menimcha bizning ustoz niyatlariga yetgan
            bo’lardilar deb o'ylayman.
          </p>
          <p className="text-[20px] text-[#FAA40C] mt-[40px] font-semibold">
            Baxrom Abduqayyum
          </p>
          <img className="" src={Group.src} alt="group icon" />
        </div>
      </div>
    </div>
  );
}

export default Reviews