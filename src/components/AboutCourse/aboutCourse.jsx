import React from 'react'
import Arrow from "../../../public/assets/icons/arrow.svg";


const AboutCourse = () => {
  return (
    <div className="container">
      <div className="m-[60px] flex gap-[20px]">
        <div className="">
          {/* 1-dars */}
          <div className="border border-[#FAA40C80] rounded-[5px] w-[510px] h-[255px] p-[40px]">
            <p className="text-[20px] text-[#00E689] font-semibold mb-[5px]">
              — 01 dars
            </p>
            <h3 className="text-[25px] font-semibold mb-[20px]">
              Storytelling nima?
            </h3>
            <p>
              — Ushbu darsda storytelling nima ekanligi haqida gaplashamiz.
              Mavzuga umumiy kirish qilamiz. Ritorika, qahramon, sayohat,
              sarguzasht kabi asosiy tushunchalar haqida to'xtalamiz.
            </p>
          </div>
          {/* 3-dars */}
          <div className="border border-[#FAA40C80] rounded-[5px] w-[510px] h-[463px] p-[40px] mt-[20px]">
            <p className="text-[20px] text-[#00E689] font-semibold mb-[5px]">
              — 03 dars
            </p>
            <h3 className="text-[25px] font-semibold mb-[20px]">
              Mavzu topish va tadqiq qilish
            </h3>
            <p>
              — Tinglovchi va tomoshabinning qiziqishini saqlab qolish uchun
              qanday usullardan foydalanamiz?
            </p>
            <p className="mt-[20px]">
              — Tomoshabinlarning e'tiborini mavzuga jalb qilish va uni doimo
              faol tarzda ushlab turish uchun nima qilish zarur?
            </p>
            <p className="mt-[20px]">
              — Qanday qilib biz kutilmagan burilishlar, aql o’yinlari,
              keskinlik va noaniqlik kabi vositalar bilan ravon maʼlumot bera
              olamiz? Darsimizda matnni qayta yozish, tuzatish, qisqartirish,
              sayqallash va jozibali sarlavha qo’yish haqida so`z yuritamiz.
            </p>
          </div>
          {/* 5-dars */}
          <div className="border border-[#FAA40C80] rounded-[5px] w-[510px] h-[371px] p-[40px] mt-[20px]">
            <p className="text-[20px] text-[#00E689] font-semibold mb-[5px]">
              — 05 dars
            </p>
            <h3 className="text-[25px] font-semibold mb-[20px]">
              Kamera qarshisida ishlash
            </h3>
            <p>
              — Tasvirga tushirishdan oldingi eng soʻnggi tayyorgarliklar
              nimalar? Kamera qarshisida gapirishning sirlari. Obyektiv
              qarshisida oʻzingizdagi eng yaxshi holatni topa olish uchun
              nimalar qilish kerak?
            </p>
            <p className="mt-[20px]">
              — Matnlarni yodlash kerakmi yoki oʻqishmi? Teleprompterdan qayerda
              va qanday foydalanamiz?
            </p>
          </div>
          {/* 7-dars */}
          <div className="border border-[#FAA40C80] rounded-[5px] w-[510px] h-[323px] p-[40px] mt-[20px]">
            <p className="text-[20px] text-[#00E689] font-semibold mb-[5px]">
              — 07 dars
            </p>
            <h3 className="text-[25px] font-semibold mb-[20px]">
              Studiya sharoitida ishlash
            </h3>
            <p>
              — Yorugʻlik – tasvirning asosidir. Ushbu darsda ichki va tashqi
              yoritish usullarini misollar bilan koʻrib chiqamiz. Dastlabki
              darslarda oʻrgangan narsalarimizni amalda qoʻllaymiz.
            </p>
            <p className="mt-[20px]">
              — Tayyorgarlik jarayoni tugagach, birgalikda namuna tarzida
              koʻrsatuvni tasvirga tushiramiz.
            </p>
          </div>
          <div className='flex items-center gap-[20px]'>
            <button className="flex items-center  rounded-[3px] mt-[15px] px-[14px] gap-[5px] bg-[#FAA40C] hover:bg-orange-400 text-[16px] w-[207px] h-[48px] text-black font-semibold">
              Guruhga qo’shilish
              <img src={Arrow.src} alt="arrow icon" />
            </button>
            <p className="font-semibold text-[11px] mt-[14px] w-[251px] h-[38px]">
              Ushbu tugmani bosish orqali kursning Telegramdagi saralash
              guruhiga a'zo bo'lasiz →
            </p>
          </div>
        </div>
        <div>
          {/* 2-dars */}
          <div className="border border-[#FAA40C80] rounded-[5px] w-[510px] h-[347px] p-[40px]">
            <p className="text-[20px] text-[#00E689] font-semibold mb-[5px]">
              — 05 dars
            </p>
            <h3 className="text-[25px] font-semibold mb-[20px]">
              Kamera qarshisida ishlash
            </h3>
            <p>
              — Tasvirga tushirishdan oldingi eng soʻnggi tayyorgarliklar
              nimalar? Kamera qarshisida gapirishning sirlari. Obyektiv
              qarshisida oʻzingizdagi eng yaxshi holatni topa olish uchun
              nimalar qilish kerak?
            </p>
            <p className="mt-[20px]">
              — Matnlarni yodlash kerakmi yoki oʻqishmi? Teleprompterdan qayerda
              va qanday foydalanamiz?
            </p>
          </div>
          {/* 4-dars */}
          <div className="border border-[#FAA40C80] rounded-[5px] w-[510px] h-[467px] p-[40px] mt-[20px]">
            <p className="text-[20px] text-[#00E689] font-semibold mb-[5px]">
              — 04 dars
            </p>
            <h3 className="text-[25px] font-semibold mb-[20px]">
              Nutq va gapirish usullari
            </h3>
            <p>
              — Bu darsda notiqlik san'ati bilan qisqacha tanishib chiqamiz.
              Hikoyachining eng kuchli vositasi uning ovozidir. Ushbu dars
              davomida jonli auditoriya oldida qanday gapirish va taqdimot
              paytida nimalarga e'tibor qaratish lozimligini bilib olasiz.
              Ikkinchi qismda esa ovozlashtirish haqida gaplashamiz.
            </p>
            <p className="mt-[20px]">
              — Ovozingizni tuzatish va tildagi dangasalikdan xalos bo'lish,
              ovozga ishlov berish, tartibga solish, audio chastotalar,
              ekvalayzer, kompressor, filtrlar va ulardan qayerda va qanday
              foydalanish haqida ma'lumotlar beriladi.
            </p>
          </div>
          {/* 6-dars */}
          <div className="border border-[#FAA40C80] rounded-[5px] w-[510px] h-[377px] p-[40px] mt-[20px]">
            <p className="text-[20px] text-[#00E689] font-semibold mb-[5px]">
              — 06 dars
            </p>
            <h3 className="text-[25px] font-semibold mb-[20px]">
              Tasvirga olish vositalari va vizual kompozitsiya
            </h3>
            <p>
              — Ushbu darsda biz kamera turlari, kameraning anatomiyasi, muhim
              sozlamalar, fokuslash, obyektiv turlari va ulardan foydalanish
              texnikalari bilan tanishib chiqamiz.
            </p>
            <p className="mt-[20px]">
              — Muvozanat, boʻshliqlar, kompozitsiya qurish usullari, 180 daraja
              qoidasi kabi tushunchalar haqida to‘xtalamiz.
            </p>
          </div>
          {/* 8-dars */}
          <div className="border border-[#FAA40C80] rounded-[5px] w-[510px] h-[303px] p-[40px]">
            <p className="text-[20px] text-[#00E689] font-semibold mb-[5px]">
              — 08 dars
            </p>
            <h3 className="text-[25px] font-semibold mb-[20px]">
              Storytelling nima?
            </h3>
            <p>
              — Ushbu darsda storytelling nima ekanligi haqida gaplashamiz.
              Mavzuga umumiy kirish qilamiz. Ritorika, qahramon, sayohat,
              sarguzasht kabi asosiy tushunchalar haqida to'xtalamiz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCourse