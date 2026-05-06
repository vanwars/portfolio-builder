function Container1() {
  return (
    <div className="bg-[#003f5c] relative rounded-[6px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#2f4b7c] relative rounded-[6px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#665191] relative rounded-[6px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#a05195] relative rounded-[6px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#d45087] relative rounded-[6px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#f95d6a] relative rounded-[6px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-start relative shrink-0" data-name="Container">
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[75.198px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[38.5px] not-italic text-[#f3f6fa] text-[12px] text-center top-px whitespace-nowrap">Module 1</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #F3F6FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Selected() {
  return (
    <div className="relative shrink-0 w-full" data-name="Selected">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container />
        <Text />
        <Icon />
      </div>
    </div>
  );
}

function Button() {
  return (
    <button className="bg-[#1b2432] content-stretch cursor-pointer flex flex-col items-start justify-center px-[16.667px] py-[8.667px] relative rounded-[10px] shrink-0 w-[280.531px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#344257] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Selected />
    </button>
  );
}

function PalettePicker() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Palette Picker">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f3f6fa] text-[14px] whitespace-nowrap">Selected Palette:</p>
      <Button />
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#003f5c] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#2f4b7c] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#665191] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#a05195] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#d45087] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#f95d6a] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[164px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start relative size-full">
        <Container8 />
        <Container9 />
        <Container10 />
        <Container11 />
        <Container12 />
        <Container13 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#243041] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#42526b] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[13px] py-[9px] relative size-full">
          <Container7 />
          <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[normal] min-w-px not-italic relative text-[#f3f6fa] text-[14px] text-center">Module 1</p>
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[#ff6b35] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#f7931e] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#fdc82f] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#f4e04d] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#8ac926] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[#06a77d] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[24px] relative shrink-0 w-[164px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start relative size-full">
        <Container15 />
        <Container16 />
        <Container17 />
        <Container18 />
        <Container19 />
        <Container20 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative size-full">
          <Container14 />
          <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[normal] min-w-px not-italic relative text-[#f3f6fa] text-[14px] text-center">Module 2</p>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[#1b4332] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#2d6a4f] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-[#40916c] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-[#52b788] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-[#74c69d] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-[#95d5b2] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[24px] relative shrink-0 w-[164px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start relative size-full">
        <Container22 />
        <Container23 />
        <Container24 />
        <Container25 />
        <Container26 />
        <Container27 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative size-full">
          <Container21 />
          <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[normal] min-w-px not-italic relative text-[#f3f6fa] text-[14px] text-center">Module 3</p>
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-[#240046] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-[#3c096c] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-[#5a189a] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-[#7209b7] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-[#9d4edd] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-[#c77dff] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[24px] relative shrink-0 w-[164px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start relative size-full">
        <Container29 />
        <Container30 />
        <Container31 />
        <Container32 />
        <Container33 />
        <Container34 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative size-full">
          <Container28 />
          <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[normal] min-w-px not-italic relative text-[#f3f6fa] text-[14px] text-center">Module 4</p>
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-[#6a2c14] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container37() {
  return (
    <div className="bg-[#8b4513] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-[#a0522d] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-[#cd853f] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-[#deb887] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-[#f5deb3] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[24px] relative shrink-0 w-[164px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start relative size-full">
        <Container36 />
        <Container37 />
        <Container38 />
        <Container39 />
        <Container40 />
        <Container41 />
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative size-full">
          <Container35 />
          <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[normal] min-w-px not-italic relative text-[#f3f6fa] text-[14px] text-center">Module 5</p>
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="bg-[#0d1b2a] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-[#1b263b] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-[#415a77] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container46() {
  return (
    <div className="bg-[#778da9] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container47() {
  return (
    <div className="bg-[#b0c4de] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container48() {
  return (
    <div className="bg-[#e0e1dd] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[24px] relative shrink-0 w-[164px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start relative size-full">
        <Container43 />
        <Container44 />
        <Container45 />
        <Container46 />
        <Container47 />
        <Container48 />
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative size-full">
          <Container42 />
          <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[normal] min-w-px not-italic relative text-[#f3f6fa] text-[14px] text-center">Module 6</p>
        </div>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="bg-[#e63946] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-[#f77f00] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container52() {
  return (
    <div className="bg-[#fcbf49] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container53() {
  return (
    <div className="bg-[#06d6a0] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container54() {
  return (
    <div className="bg-[#118ab2] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container55() {
  return (
    <div className="bg-[#073b4c] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[24px] relative shrink-0 w-[164px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start relative size-full">
        <Container50 />
        <Container51 />
        <Container52 />
        <Container53 />
        <Container54 />
        <Container55 />
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative size-full">
          <Container49 />
          <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[normal] min-w-px not-italic relative text-[#f3f6fa] text-[14px] text-center">Module 7</p>
        </div>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="bg-[#ffadad] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container58() {
  return (
    <div className="bg-[#ffd6a5] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container59() {
  return (
    <div className="bg-[#fdffb6] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container60() {
  return (
    <div className="bg-[#caffbf] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container61() {
  return (
    <div className="bg-[#9bf6ff] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container62() {
  return (
    <div className="bg-[#bdb2ff] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[24px] relative shrink-0 w-[164px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start relative size-full">
        <Container57 />
        <Container58 />
        <Container59 />
        <Container60 />
        <Container61 />
        <Container62 />
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative size-full">
          <Container56 />
          <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[normal] min-w-px not-italic relative text-[#f3f6fa] text-[14px] text-center">Module 8</p>
        </div>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="bg-black relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container65() {
  return (
    <div className="bg-[#333] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container66() {
  return (
    <div className="bg-[#666] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container67() {
  return (
    <div className="bg-[#999] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container68() {
  return (
    <div className="bg-[#ccc] relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container69() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[24px] relative shrink-0 w-[164px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start relative size-full">
        <Container64 />
        <Container65 />
        <Container66 />
        <Container67 />
        <Container68 />
        <Container69 />
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative size-full">
          <Container63 />
          <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[normal] min-w-px not-italic relative text-[#f3f6fa] text-[14px] text-center">Module 9</p>
        </div>
      </div>
    </div>
  );
}

function Palettes() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative rounded-[10px]" data-name="Palettes">
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
    </div>
  );
}

function PaletteModal() {
  return (
    <div className="bg-[#111827] content-stretch flex items-center p-[16px] relative rounded-[8px] shrink-0 w-[350px]" data-name="Palette Modal">
      <div aria-hidden="true" className="absolute border border-[#344257] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Palettes />
    </div>
  );
}

function PaletteHolder() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Palette Holder">
      <PaletteModal />
    </div>
  );
}

export default function PaletteSelector() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative size-full" data-name="Palette Selector">
      <PalettePicker />
      <PaletteHolder />
    </div>
  );
}