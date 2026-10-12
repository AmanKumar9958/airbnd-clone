const fs = require('fs');

const html = `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 p-12">
  <div class="max-w-[700px] bg-white border border-[#DDDDDD] rounded-3xl p-6 flex items-center justify-between">
    
    <!-- Left: Laurel leaves + Guest favourite -->
    <div class="flex items-center gap-2">
      <!-- Left Laurel SVG -->
      <svg class="w-8 h-10 text-[#222222]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M10 21a8.5 8.5 0 0 1-1.2-15" />
        <path d="M7.48 17.27q-1.61-1.56-3.32-.12q1.61 1.56 3.32.12" />
        <path d="M5.58 14.34q-.62-2.16-2.82-1.77q.61 2.16 2.82 1.77" />
        <path d="M5.4 10.85q.54-2.18-1.57-2.94q-.54 2.17 1.57 2.94" />
        <path d="M6.98 7.73q1.56-1.61.12-3.32q-1.56 1.61-.12 3.32" />
      </svg>

      <div class="text-center px-1">
        <div class="font-bold text-[18px] text-[#222222] leading-tight">Guest</div>
        <div class="font-bold text-[18px] text-[#222222] leading-tight -mt-0.5">favourite</div>
      </div>

      <!-- Right Laurel SVG -->
      <svg class="w-8 h-10 text-[#222222] scale-x-[-1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M10 21a8.5 8.5 0 0 1-1.2-15" />
        <path d="M7.48 17.27q-1.61-1.56-3.32-.12q1.61 1.56 3.32.12" />
        <path d="M5.58 14.34q-.62-2.16-2.82-1.77q.61 2.16 2.82 1.77" />
        <path d="M5.4 10.85q.54-2.18-1.57-2.94q-.54 2.17 1.57 2.94" />
        <path d="M6.98 7.73q1.56-1.61.12-3.32q-1.56 1.61-.12 3.32" />
      </svg>
    </div>

    <!-- Middle: Description -->
    <div class="text-[15px] font-semibold text-[#222222] leading-snug max-w-[240px]">
      One of the most loved homes on Airbnb, according to guests
    </div>

    <!-- Right: Stats (Rating + Divider + Reviews) -->
    <div class="flex items-center gap-6">
      <!-- Rating -->
      <div class="text-center min-w-[50px]">
        <div class="text-[22px] font-bold text-[#222222] leading-none">5.0</div>
        <div class="flex items-center justify-center gap-0.5 mt-1.5 text-black">
          <svg class="w-2.5 h-2.5 fill-black" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
          <svg class="w-2.5 h-2.5 fill-black" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
          <svg class="w-2.5 h-2.5 fill-black" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
          <svg class="w-2.5 h-2.5 fill-black" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
          <svg class="w-2.5 h-2.5 fill-black" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
        </div>
      </div>

      <!-- Divider -->
      <div class="h-9 w-[1px] bg-[#DDDDDD]"></div>

      <!-- Reviews -->
      <div class="text-center min-w-[50px]">
        <div class="text-[22px] font-bold text-[#222222] leading-none">20</div>
        <div class="text-[13px] font-semibold text-[#222222] mt-1.5 leading-none">Reviews</div>
      </div>
    </div>

  </div>
</body>
</html>`;

fs.writeFileSync('scratch/test_laurel.html', html);
console.log('Updated test_laurel.html');
